// GET /api/legal — privacy / terms / cookies / member-rights documents from Notion.
// The frontend falls back to its built-in text when this returns no docs.

import {
  type PagesContext,
  getNotionToken,
  notionHeaders,
  getPlainText,
  splitBilingualText,
  splitParagraphs,
  getColumnParagraphs,
  splitBlocksByLanguage,
  fetchNotionBlocks,
  parseNotionPageProperties,
  findNotionLegalDatabaseId
} from '../_lib/notion';

export const onRequestGet = async ({ env }: PagesContext): Promise<Response> => {
  const notionToken = getNotionToken(env);

  if (!notionToken) {
    return Response.json({ status: 'fallback', docs: {} });
  }

  const dbInfo = await findNotionLegalDatabaseId(notionToken, env);
  if (!dbInfo.id) {
    return Response.json({ status: 'fallback', docs: {} });
  }

  try {
    const notionRes = await fetch(`https://api.notion.com/v1/databases/${dbInfo.id}/query`, {
      method: 'POST',
      headers: notionHeaders(notionToken),
      body: JSON.stringify({ page_size: 50 })
    });

    if (!notionRes.ok) {
      console.error(`[BEAT Server] Notion legal database returned HTTP ${notionRes.status}:`, await notionRes.text());
      return Response.json({ status: 'fallback', docs: {} });
    }

    const data: any = await notionRes.json();
    const legalDocs: Record<string, any> = {};

    for (const page of data.results || []) {
      const meta = parseNotionPageProperties(page);
      if (meta.isPublished === false) continue;

      const titleLower = (meta.title + ' ' + meta.category + ' ' + meta.categoryZh + ' ' + (meta.titleEn || '')).toLowerCase();
      let docType: 'privacy' | 'terms' | 'cookies' | 'rights' | null = null;

      if (titleLower.includes('隱私') || titleLower.includes('privacy')) {
        docType = 'privacy';
      } else if (titleLower.includes('條款') || titleLower.includes('terms')) {
        docType = 'terms';
      } else if (titleLower.includes('cookie')) {
        docType = 'cookies';
      } else if (titleLower.includes('權益') || titleLower.includes('rights')) {
        docType = 'rights';
      }

      if (!docType) continue;

      let paragraphsZh: string[] = [];
      let paragraphsEn: string[] = [];

      // Check for sectioned columns: 副標題 1 / 內文 1, 副標題 2 / 內文 2, etc. (Exact user schema)
      const props = page.properties || {};
      const sectionParagraphsZh: string[] = [];
      const sectionParagraphsEn: string[] = [];

      for (let i = 1; i <= 20; i++) {
        const subKeys = [`副標題 ${i}`, `副標題${i}`, `章節 ${i}`, `章節${i}`, `Section ${i}`, `Section${i}`];
        const textKeys = [`內文 ${i}`, `內文${i}`, `條款 ${i}`, `條款${i}`, `內容 ${i}`, `內容${i}`, `Content ${i}`, `Content${i}`];

        let subRaw = '';
        for (const k of subKeys) {
          if (props[k]?.rich_text) {
            subRaw = getPlainText(props[k].rich_text);
            if (subRaw) break;
          } else if (props[k]?.title) {
            subRaw = getPlainText(props[k].title);
            if (subRaw) break;
          }
        }

        let textRaw = '';
        for (const k of textKeys) {
          if (props[k]?.rich_text) {
            textRaw = getPlainText(props[k].rich_text);
            if (textRaw) break;
          }
        }

        if (subRaw) {
          const splitSub = splitBilingualText(subRaw);
          sectionParagraphsZh.push(`## ${splitSub.zh}`);
          sectionParagraphsEn.push(`## ${splitSub.en}`);
        }

        if (textRaw) {
          const splitText = splitBilingualText(textRaw);
          sectionParagraphsZh.push(splitText.zh);
          sectionParagraphsEn.push(splitText.en);
        }
      }

      if (sectionParagraphsZh.length > 0) {
        paragraphsZh = sectionParagraphsZh;
        paragraphsEn = sectionParagraphsEn;
      }

      // 內文 / 英文內文 columns if no section columns
      if (paragraphsZh.length === 0) {
        ({ zh: paragraphsZh, en: paragraphsEn } = getColumnParagraphs(meta));
      } else if (meta.directContentEn) {
        paragraphsEn = splitParagraphs(meta.directContentEn);
      }

      // If still empty, use the page body blocks
      if (paragraphsZh.length === 0) {
        const body = splitBlocksByLanguage(await fetchNotionBlocks(page.id, notionToken, true));
        paragraphsZh = body.zh;
        if (body.en.length > 0) paragraphsEn = body.en;
      }

      if (paragraphsEn.length === 0) {
        paragraphsEn = paragraphsZh;
      }

      legalDocs[docType] = {
        titleZh: meta.title,
        titleEn: meta.titleEn,
        updated: meta.date || new Date().toISOString().split('T')[0],
        paragraphsZh,
        paragraphsEn
      };
    }

    if (Object.keys(legalDocs).length === 0) {
      console.warn(`[BEAT Server] Notion legal database '${dbInfo.name}' was read, but no page title matched privacy / terms / cookie / member rights (隱私 / 條款 / Cookie / 會員權益); showing built-in legal text.`);
    }

    return Response.json({ status: 'ok', docs: legalDocs });
  } catch (err) {
    console.error('[BEAT Server] Error loading legal documents from Notion:', err);
    return Response.json({ status: 'fallback', docs: {} });
  }
};
