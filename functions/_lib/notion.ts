// Shared Notion helpers for the Cloudflare Pages Functions in functions/api/.
// Files and folders starting with "_" are not exposed as routes.

export interface Env {
  NOTION_API_KEY?: string;
  NOTION_TOKEN?: string;
  NOTION_DATABASE_ID?: string;
  NOTION_LEGAL_DATABASE_ID?: string;
  APP_URL?: string;
}

// Minimal shape of the context object Cloudflare passes to a Pages Function
export interface PagesContext {
  request: Request;
  env: Env;
}

// Helper to extract 32-character Notion Database ID from URL or raw ID string
export function extractNotionDatabaseId(rawId: string | undefined): string {
  if (!rawId) return '';
  // Check if user passed full URL like https://app.notion.com/p/c196629ad4cf42dca4c303f462487705?v=...
  const match = rawId.match(/([0-9a-fA-F]{32})/);
  if (match) return match[1];
  return rawId.replace(/-/g, '').trim();
}

export function getNotionToken(env: Env): string | undefined {
  return env.NOTION_API_KEY || env.NOTION_TOKEN;
}

export function notionHeaders(token: string): Record<string, string> {
  return {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };
}

// Split a multi-line text value into trimmed, non-empty paragraphs
export function splitParagraphs(text: string): string[] {
  return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
}

// Body text from the 內文 / 英文內文 columns (supports a bilingual 內文 with an [EN] marker)
export function getColumnParagraphs(meta: { directContent: string; directContentEn: string }): { zh: string[]; en: string[] } {
  let zh: string[] = [];
  let en: string[] = [];
  if (meta.directContent) {
    const split = splitBilingualText(meta.directContent);
    if (split.en !== split.zh) {
      zh = splitParagraphs(split.zh);
      en = splitParagraphs(split.en);
    } else {
      zh = splitParagraphs(meta.directContent);
    }
  }
  if (meta.directContentEn) {
    en = splitParagraphs(meta.directContentEn);
  }
  return { zh, en };
}

// Split page body blocks at the first [EN] / ---EN--- marker
export function splitBlocksByLanguage(blocks: string[]): { zh: string[]; en: string[] } {
  const enIdx = blocks.findIndex((p) => p.toUpperCase().includes('[EN]') || p.includes('---EN---'));
  if (enIdx === -1) return { zh: blocks, en: [] };
  return {
    zh: blocks.slice(0, enIdx),
    en: blocks.slice(enIdx).map((p) => p.replace(/\[EN\]|---EN---/i, '').trim()).filter(Boolean)
  };
}

// Helper to extract plain text from Notion rich text array
export function getPlainText(richTextArray: any[]): string {
  if (!Array.isArray(richTextArray)) return '';
  return richTextArray.map((t) => t.plain_text || t.text?.content || '').join('');
}

// Helper to normalize and categorize
export function mapCategory(raw: string): { category: 'Company' | 'BEAT PASS' | 'Partnership' | 'Commerce' | 'Technology'; categoryZh: string } {
  const s = (raw || '').toLowerCase();
  if (s.includes('beat pass') || s.includes('pass') || s.includes('會籍')) {
    return { category: 'BEAT PASS', categoryZh: 'BEAT PASS' };
  }
  if (s.includes('partner') || s.includes('合作') || s.includes('夥伴') || s.includes('場館')) {
    return { category: 'Partnership', categoryZh: '合作夥伴' };
  }
  if (s.includes('commerce') || s.includes('電商') || s.includes('商城') || s.includes('生活') || s.includes('選品')) {
    return { category: 'Commerce', categoryZh: '運動生活電商' };
  }
  if (s.includes('tech') || s.includes('科技') || s.includes('技術') || s.includes('創新') || s.includes('系統')) {
    return { category: 'Technology', categoryZh: '科技創新' };
  }
  return { category: 'Company', categoryZh: '公司動態' };
}

// Helper to split text containing [EN], (EN), (EN) •, 【EN】, ///, or ---EN---
export function splitBilingualText(rawText: string): { zh: string; en: string } {
  if (!rawText) return { zh: '', en: '' };

  const regex = /(\[EN\]|\(EN\)\s*[•\-]?|\(en\)\s*[•\-]?|【EN】|\[en\]|---EN---|---|===\s*EN\s*===|\/{2,3})/i;
  const match = rawText.match(regex);
  if (match && typeof match.index === 'number') {
    const zh = rawText.slice(0, match.index).trim();
    let en = rawText.slice(match.index + match[0].length).trim();
    en = en.replace(/^[•\-\s:]+/, '').trim();
    return {
      zh: zh || rawText.trim(),
      en: en || zh || rawText.trim()
    };
  }

  return { zh: rawText.trim(), en: rawText.trim() };
}

// Helper to extract properties from a Notion page (handles exact user columns: 文章標題, 副標題, 發佈日期, 分類, 內文)
export function parseNotionPageProperties(page: any): any {
  const props = page.properties || {};

  // 1. Title: 文章標題, Title, Name, 標題, 名稱
  let titleRaw = '';
  for (const key of ['文章標題', 'Title', 'Name', '標題', '名稱', 'title', 'name']) {
    if (props[key]?.title) {
      titleRaw = getPlainText(props[key].title);
      if (titleRaw) break;
    } else if (props[key]?.rich_text) {
      titleRaw = getPlainText(props[key].rich_text);
      if (titleRaw) break;
    }
  }

  // 2. English Title: 英文標題, TitleEn, English Title
  let titleEn = '';
  for (const key of ['英文標題', 'TitleEn', 'Title_En', 'English Title', '英文名稱', 'titleEn', 'title_en']) {
    if (props[key]?.rich_text) {
      titleEn = getPlainText(props[key].rich_text);
      if (titleEn) break;
    } else if (props[key]?.title) {
      titleEn = getPlainText(props[key].title);
      if (titleEn) break;
    }
  }

  // Split titleRaw by [EN], (EN), ///, etc.
  const titleSplit = splitBilingualText(titleRaw);
  const title = titleSplit.zh;
  if (!titleEn) {
    titleEn = titleSplit.en;
  }

  // 3. Subtitle / Summary: 副標題, 摘要, Summary, Description, 簡介
  let summaryRaw = '';
  for (const key of ['副標題', '摘要', 'Summary', 'Description', '簡介', 'summary', 'description']) {
    if (props[key]?.rich_text) {
      summaryRaw = getPlainText(props[key].rich_text);
      if (summaryRaw) break;
    }
  }

  let summaryEn = '';
  for (const key of ['英文副標題', 'SummaryEn', 'Summary_En', 'English Subtitle', '英文摘要', 'summaryEn', 'summary_en']) {
    if (props[key]?.rich_text) {
      summaryEn = getPlainText(props[key].rich_text);
      if (summaryEn) break;
    }
  }

  // Split summaryRaw by [EN], (EN), ///, etc.
  const summarySplit = splitBilingualText(summaryRaw);
  const summary = summarySplit.zh;
  if (!summaryEn) {
    summaryEn = summarySplit.en;
  }

  // 4. Date: 更新/發布日期, 發佈日期, 發布日期, Date, 日期, Published
  let date = '';
  for (const key of ['更新/發布日期', '更新/發佈日期', '更新日期', '發佈日期', '發布日期', 'Date', '日期', 'Published', '發佈', 'date']) {
    if (props[key]?.date?.start) {
      date = props[key].date.start;
      break;
    }
  }
  if (!date && page.created_time) {
    date = page.created_time.split('T')[0];
  }

  // 5. Category: 分類, Category, Type, 類別
  let categoryRaw = '';
  for (const key of ['分類', 'Category', 'Type', '類別', 'category']) {
    if (props[key]?.select?.name) {
      categoryRaw = props[key].select.name;
      break;
    }
    if (props[key]?.multi_select && props[key].multi_select.length > 0) {
      categoryRaw = props[key].multi_select.map((m: any) => m.name).join(' ');
      break;
    }
    if (props[key]?.status?.name) {
      categoryRaw = props[key].status.name;
      break;
    }
  }
  const { category, categoryZh } = mapCategory(categoryRaw);

  // 6. Direct Content Columns: 內文 / 英文內文
  let directContent = '';
  for (const key of ['內文', '正文', '內容', 'Content', 'content']) {
    if (props[key]?.rich_text) {
      directContent = getPlainText(props[key].rich_text);
      if (directContent) break;
    }
  }

  let directContentEn = '';
  for (const key of ['英文內文', '英文正文', '英文內容', 'ContentEn', 'Content_En', 'English Content', 'contentEn']) {
    if (props[key]?.rich_text) {
      directContentEn = getPlainText(props[key].rich_text);
      if (directContentEn) break;
    }
  }

  // 7. Published status (defaults to true unless checkbox unchecked or Status is Draft)
  let isPublished = true;
  for (const key of ['Published', '發布', '已發布', 'published']) {
    if (props[key]?.type === 'checkbox') {
      isPublished = Boolean(props[key].checkbox);
      break;
    }
  }
  if (props['Status']?.type === 'status') {
    const s = (props['Status'].status?.name || '').toLowerCase();
    if (s.includes('draft') || s.includes('草稿')) {
      isPublished = false;
    }
  }

  return {
    id: page.id,
    title,
    titleEn,
    date,
    category,
    categoryZh,
    summary,
    summaryEn,
    directContent,
    directContentEn,
    isPublished
  };
}

// Convert one Notion block to text. With `markdown`, headings/numbered items/quotes keep
// markers that the legal modal renders; news articles get plain paragraphs.
export function blockToText(block: any, markdown: boolean): string {
  const rich = block?.[block?.type]?.rich_text;
  if (!rich) return '';
  const text = getPlainText(rich);
  switch (block.type) {
    case 'paragraph':
    case 'callout':
      return text;
    case 'heading_1':
      return markdown ? `## ${text}` : text;
    case 'heading_2':
      return markdown ? `### ${text}` : text;
    case 'heading_3':
      return markdown ? `#### ${text}` : text;
    case 'bulleted_list_item':
      return `• ${text}`;
    case 'numbered_list_item':
      return markdown ? `1. ${text}` : text;
    case 'quote':
      return markdown ? `> ${text}` : `「${text}」`;
    default:
      return '';
  }
}

// Fetch a page's body blocks as text (follows pagination, up to 10 pages of 100 blocks)
export async function fetchNotionBlocks(pageId: string, notionToken: string, markdown: boolean): Promise<string[]> {
  const paragraphs: string[] = [];
  let cursor: string | undefined = undefined;

  try {
    let loopCount = 0;
    do {
      loopCount++;
      const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
      const res = await fetch(url, { headers: notionHeaders(notionToken) });
      if (!res.ok) break;

      const data: any = await res.json();
      for (const block of data.results || []) {
        const text = blockToText(block, markdown).trim();
        if (text) paragraphs.push(text);
      }

      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor && loopCount < 10);
  } catch (err) {
    console.warn(`Error fetching blocks for page ${pageId}:`, err);
  }

  return paragraphs;
}

// Auto-discover Legal Database from user's Notion integration
export async function findNotionLegalDatabaseId(token: string, env: Env): Promise<{ id: string | null; name: string | null }> {
  // 1. Explicit env variable
  if (env.NOTION_LEGAL_DATABASE_ID) {
    const clean = extractNotionDatabaseId(env.NOTION_LEGAL_DATABASE_ID);
    if (clean) return { id: clean, name: 'NOTION_LEGAL_DATABASE_ID' };
  }

  // 2. Auto-discover from user's Notion integration by searching for databases
  try {
    const res = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: notionHeaders(token),
      body: JSON.stringify({ filter: { value: 'database', property: 'object' } })
    });
    if (res.ok) {
      const data: any = await res.json();
      for (const db of data.results || []) {
        const title = (db.title?.[0]?.plain_text || '').toLowerCase();
        if (title.includes('法律') || title.includes('聲明') || title.includes('條款') || title.includes('legal') || title.includes('policy')) {
          console.log(`[BEAT Server] Auto-discovered Legal Database: "${db.title?.[0]?.plain_text}" (${db.id})`);
          return { id: db.id, name: db.title?.[0]?.plain_text || '法律與聲明' };
        }
      }
    }
  } catch (err) {
    console.warn('Could not auto-discover legal database:', err);
  }

  // 3. Fallback to main news database
  const newsDbId = extractNotionDatabaseId(env.NOTION_DATABASE_ID);
  if (newsDbId) {
    return { id: newsDbId, name: 'Main News Database (Fallback)' };
  }

  return { id: null, name: null };
}
