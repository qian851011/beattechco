// GET /api/news — news articles from the Notion news database (NOTION_DATABASE_ID).

import {
  type PagesContext,
  extractNotionDatabaseId,
  getNotionToken,
  notionHeaders,
  getColumnParagraphs,
  splitBlocksByLanguage,
  fetchNotionBlocks,
  parseNotionPageProperties
} from '../_lib/notion';

export const onRequestGet = async ({ env }: PagesContext): Promise<Response> => {
  const notionToken = getNotionToken(env);
  const cleanDbId = extractNotionDatabaseId(env.NOTION_DATABASE_ID);

  if (!notionToken || !cleanDbId) {
    return Response.json({ status: 'unconfigured', articles: [] });
  }

  try {
    // Query Notion Database via REST API with standard headers
    const notionRes = await fetch(`https://api.notion.com/v1/databases/${cleanDbId}/query`, {
      method: 'POST',
      headers: notionHeaders(notionToken),
      body: JSON.stringify({ page_size: 100 })
    });

    if (!notionRes.ok) {
      console.error(`Notion API returned HTTP ${notionRes.status}:`, await notionRes.text());
      return Response.json({ status: 'error', articles: [] });
    }

    const data: any = await notionRes.json();
    const parsedArticles: any[] = [];

    for (const page of data.results || []) {
      const meta = parseNotionPageProperties(page);

      // Skip uncompleted drafts
      if (!meta.isPublished || !meta.title) continue;

      // Exclude legal policies from news
      const titleLowerNews = (meta.title + ' ' + meta.category + ' ' + meta.categoryZh).toLowerCase();
      if (titleLowerNews.includes('隱私權') || titleLowerNews.includes('服務條款') || titleLowerNews.includes('使用聲明') || titleLowerNews.includes('會員權益')) {
        continue;
      }

      // 1. 內文 / 英文內文 columns
      let { zh: paragraphsZh, en: paragraphsEn } = getColumnParagraphs(meta);

      // 2. Page body blocks, only when a column is missing
      if (paragraphsZh.length === 0 || paragraphsEn.length === 0) {
        const body = splitBlocksByLanguage(await fetchNotionBlocks(page.id, notionToken, false));
        if (paragraphsZh.length === 0) paragraphsZh = body.zh;
        if (paragraphsEn.length === 0) paragraphsEn = body.en;
      }

      // If still no body paragraphs, fall back to summary
      if (paragraphsZh.length === 0 && meta.summary) {
        paragraphsZh = [meta.summary];
      }
      if (paragraphsEn.length === 0) {
        paragraphsEn = meta.summaryEn ? [meta.summaryEn] : paragraphsZh;
      }

      parsedArticles.push({
        id: meta.id,
        category: meta.category,
        categoryZh: meta.categoryZh,
        date: meta.date || new Date().toISOString().split('T')[0],
        title: meta.title,
        titleEn: meta.titleEn,
        summary: meta.summary || (paragraphsZh[0] ? paragraphsZh[0].slice(0, 100) + '...' : ''),
        summaryEn: meta.summaryEn || (paragraphsEn[0] ? paragraphsEn[0].slice(0, 100) + '...' : ''),
        content: paragraphsZh,
        contentEn: paragraphsEn
      });
    }

    // Sort descending by date
    parsedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return Response.json({ status: 'ok', articles: parsedArticles });
  } catch (error: any) {
    console.error('Error querying Notion API:', error?.message || error);
    return Response.json({ status: 'error', articles: [] });
  }
};
