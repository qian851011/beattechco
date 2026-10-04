import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

dotenv.config({ path: ['.env.local', '.env'], quiet: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Target email for all partnership inquiries
const TARGET_INQUIRY_EMAIL = 'beat.tech.co@beatpasstw.com';

// API: Handle Contact / Partnership Inquiries and send to beat.tech.co@beatpasstw.com
// Escape user-supplied text before embedding it in the notification email HTML
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Coerce a request field to a trimmed string with a length cap (rejects objects/arrays)
function cleanField(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

// Single-line fields must not carry CR/LF (used in subject and headers)
function cleanLine(value: unknown, maxLength: number): string {
  return cleanField(value, maxLength).replace(/[\r\n]+/g, ' ');
}

const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

app.post('/api/contact', async (req: Request, res: Response) => {
  const body = req.body || {};
  const name = cleanLine(body.name, 100);
  const email = cleanLine(body.email, 254);
  const phone = cleanLine(body.phone, 50);
  const companyName = cleanLine(body.companyName, 150);
  const title = cleanLine(body.title, 100);
  const collaborationType = cleanLine(body.collaborationType, 50);
  const requirements = cleanField(body.requirements, 5000);
  const notes = cleanField(body.notes, 5000);

  if (!name || !email || !requirements) {
    return res.status(400).json({ error: 'Missing required fields (name, email, requirements)' });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // HTML-escaped copies for the email HTML template only
  const h = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    companyName: escapeHtml(companyName),
    title: escapeHtml(title),
    collaborationType: escapeHtml(collaborationType),
    requirements: escapeHtml(requirements),
    notes: escapeHtml(notes)
  };
  const mailtoHref = escapeHtml(`mailto:${encodeURIComponent(email).replace(/%40/g, '@')}`);

  const timestamp = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
  const subject = `[BEAT 官網合作洽詢] ${collaborationType || '商業合作'} - ${companyName || name}`;

  const textBody = `【BEAT Technology 官方網站 - 合作洽詢通知】
時間：${timestamp}
接收信箱：${TARGET_INQUIRY_EMAIL}

==================================================
【合作類別】${collaborationType || '未指定'}
【聯絡姓名】${name} ${title ? `(${title})` : ''}
【公司／場館】${companyName || '個人／未填寫'}
【電子信箱】${email}
【聯絡電話】${phone || '未填寫'}

【需求與合作方向】
${requirements}

【補充說明／備註】
${notes || '無'}
==================================================
此信件由 BEAT Technology 官網自動發送至 ${TARGET_INQUIRY_EMAIL}。
`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E5DF; background-color: #FFFFFF;">
      <div style="border-bottom: 2px solid #FF9F1C; padding-bottom: 12px; margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: bold; color: #FF9F1C; text-transform: uppercase; letter-spacing: 1px;">BEAT Technology Partner Inquiry</span>
        <h2 style="margin: 6px 0 0 0; color: #141413; font-size: 20px;">新的合作洽詢通知</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #6C6C66;">提交時間：${timestamp}</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 12px; background-color: #FAF9F6; font-weight: bold; width: 120px; border: 1px solid #F0F0EB; color: #5C5C58;">合作類別</td>
          <td style="padding: 8px 12px; border: 1px solid #F0F0EB; color: #141413; font-weight: bold;">${h.collaborationType || '未指定'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #FAF9F6; font-weight: bold; border: 1px solid #F0F0EB; color: #5C5C58;">聯絡人</td>
          <td style="padding: 8px 12px; border: 1px solid #F0F0EB; color: #141413;">${h.name} ${h.title ? `<span style="color: #6C6C66;">(${h.title})</span>` : ''}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #FAF9F6; font-weight: bold; border: 1px solid #F0F0EB; color: #5C5C58;">公司／場館</td>
          <td style="padding: 8px 12px; border: 1px solid #F0F0EB; color: #141413;">${h.companyName || '個人／未填寫'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #FAF9F6; font-weight: bold; border: 1px solid #F0F0EB; color: #5C5C58;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #F0F0EB; color: #141413;"><a href="${mailtoHref}" style="color: #FF9F1C; font-weight: bold; text-decoration: none;">${h.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #FAF9F6; font-weight: bold; border: 1px solid #F0F0EB; color: #5C5C58;">聯絡電話</td>
          <td style="padding: 8px 12px; border: 1px solid #F0F0EB; color: #141413;">${h.phone || '未填寫'}</td>
        </tr>
      </table>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 13px; font-weight: bold; color: #141413; margin: 0 0 8px 0;">詳細需求說明：</h4>
        <div style="background-color: #FAF9F6; border: 1px solid #E5E5DF; padding: 14px; font-size: 13px; line-height: 1.6; color: #333330; white-space: pre-wrap;">${h.requirements}</div>
      </div>

      ${notes ? `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 13px; font-weight: bold; color: #141413; margin: 0 0 8px 0;">備註：</h4>
        <div style="background-color: #FAF9F6; border: 1px solid #E5E5DF; padding: 12px; font-size: 12px; color: #6C6C66; white-space: pre-wrap;">${h.notes}</div>
      </div>` : ''}

      <div style="border-top: 1px solid #F0F0EB; padding-top: 14px; font-size: 11px; color: #8A8A84; text-align: center;">
        此通知信件由 BEAT Technology 官方網站自動發送至指定合作信箱：<strong>${TARGET_INQUIRY_EMAIL}</strong>
      </div>
    </div>
  `;

  // Always log to server stdout
  console.log(`\n==================================================`);
  console.log(`[PARTNERSHIP INQUIRY RECEIVED]`);
  console.log(`Dispatched to: ${TARGET_INQUIRY_EMAIL}`);
  console.log(`Subject: ${subject}`);
  console.log(`Sender: ${name} <${email}>`);
  console.log(`Track: ${collaborationType}`);
  console.log(`==================================================\n`);

  // Track whether at least one delivery channel actually succeeded
  let delivered = false;

  // 1. Deliver into beat.tech.co@beatpasstw.com via FormSubmit Email API
  try {
    const origin = process.env.APP_URL || 'https://beat-tech.com';
    const fsRes = await fetch(`https://formsubmit.co/ajax/${TARGET_INQUIRY_EMAIL}`, {
      signal: AbortSignal.timeout(15000),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': `${origin}/contact`
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        '合作類別': collaborationType || '未指定',
        '聯絡人姓名': name,
        '職稱': title || '未填寫',
        '公司或場館': companyName || '個人／未填寫',
        '聯絡信箱 (Email)': email,
        '聯絡電話': phone || '未填寫',
        '需求說明': requirements,
        '備註': notes || '無',
        '提交時間': timestamp
      })
    });
    const fsData: any = await fsRes.json().catch(() => ({}));
    // FormSubmit returns HTTP 200 with success "false" when it rejects a message
    if (fsRes.ok && String(fsData?.success) === 'true') {
      delivered = true;
      console.log(`[FormSubmit] Successfully delivered inquiry to ${TARGET_INQUIRY_EMAIL}`);
    } else {
      console.warn(`[FormSubmit] Delivery rejected (HTTP ${fsRes.status}):`, fsData?.message || fsData);
    }
  } catch (fsErr) {
    console.warn('[FormSubmit Email Service]', fsErr);
  }

  // 2. Attempt direct SMTP send if credentials provided in environment
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: { name: `${name} (BEAT 官網洽詢)`, address: smtpUser },
        to: TARGET_INQUIRY_EMAIL,
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody
      });
      delivered = true;
      console.log(`[SMTP] Successfully delivered inquiry email to ${TARGET_INQUIRY_EMAIL}`);
    } catch (smtpErr) {
      console.error(`[SMTP Error] Could not send via SMTP:`, smtpErr);
    }
  }

  if (!delivered) {
    console.error(`[PARTNERSHIP INQUIRY NOT DELIVERED] All delivery channels failed for ${email}`);
    return res.status(502).json({
      success: false,
      error: 'Inquiry could not be delivered. Please try again later or email us directly.'
    });
  }

  return res.json({
    success: true,
    recipient: TARGET_INQUIRY_EMAIL,
    message: `Inquiry successfully logged and dispatched to ${TARGET_INQUIRY_EMAIL}`
  });
});

// Helper to extract 32-character Notion Database ID from URL or raw ID string
function extractNotionDatabaseId(rawId: string | undefined): string {
  if (!rawId) return '';
  // Check if user passed full URL like https://app.notion.com/p/c196629ad4cf42dca4c303f462487705?v=...
  const match = rawId.match(/([0-9a-fA-F]{32})/);
  if (match) return match[1];
  return rawId.replace(/-/g, '').trim();
}

// Helper to extract plain text from Notion rich text array
function getPlainText(richTextArray: any[]): string {
  if (!Array.isArray(richTextArray)) return '';
  return richTextArray.map((t) => t.plain_text || t.text?.content || '').join('');
}

// Helper to normalize and categorize
function mapCategory(raw: string): { category: 'Company' | 'BEAT PASS' | 'Partnership' | 'Commerce' | 'Technology'; categoryZh: string } {
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
function splitBilingualText(rawText: string): { zh: string; en: string } {
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
function parseNotionPageProperties(page: any): any {
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
    isPublished,
    url: page.url
  };
}

// Extract block text from Notion block children (with pagination support for long legal documents)
async function fetchAllNotionBlocks(pageId: string, notionToken: string): Promise<string[]> {
  const paragraphs: string[] = [];
  let cursor: string | undefined = undefined;

  try {
    let loopCount = 0;
    do {
      loopCount++;
      const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${notionToken}`,
          'Notion-Version': '2022-06-28'
        }
      });
      if (!res.ok) break;

      const data: any = await res.json();
      for (const block of data.results || []) {
        let text = '';
        if (block.type === 'paragraph' && block.paragraph?.rich_text) {
          text = getPlainText(block.paragraph.rich_text);
        } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
          text = '## ' + getPlainText(block.heading_1.rich_text);
        } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
          text = '### ' + getPlainText(block.heading_2.rich_text);
        } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
          text = '#### ' + getPlainText(block.heading_3.rich_text);
        } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item?.rich_text) {
          text = '• ' + getPlainText(block.bulleted_list_item.rich_text);
        } else if (block.type === 'numbered_list_item' && block.numbered_list_item?.rich_text) {
          text = '1. ' + getPlainText(block.numbered_list_item.rich_text);
        } else if (block.type === 'quote' && block.quote?.rich_text) {
          text = '> ' + getPlainText(block.quote.rich_text);
        } else if (block.type === 'callout' && block.callout?.rich_text) {
          text = getPlainText(block.callout.rich_text);
        }

        if (text.trim()) {
          paragraphs.push(text.trim());
        }
      }

      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor && loopCount < 10);
  } catch (err) {
    console.warn(`Error fetching blocks for page ${pageId}:`, err);
  }

  return paragraphs;
}

// Extract block text from Notion block children (single page 50 items)
function extractContentBlocks(blocks: any[]): string[] {
  const paragraphs: string[] = [];

  for (const block of blocks) {
    let text = '';
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      text = getPlainText(block.paragraph.rich_text);
    } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
      text = getPlainText(block.heading_1.rich_text);
    } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
      text = getPlainText(block.heading_2.rich_text);
    } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
      text = getPlainText(block.heading_3.rich_text);
    } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item?.rich_text) {
      text = '• ' + getPlainText(block.bulleted_list_item.rich_text);
    } else if (block.type === 'numbered_list_item' && block.numbered_list_item?.rich_text) {
      text = getPlainText(block.numbered_list_item.rich_text);
    } else if (block.type === 'quote' && block.quote?.rich_text) {
      text = '「' + getPlainText(block.quote.rich_text) + '」';
    } else if (block.type === 'callout' && block.callout?.rich_text) {
      text = getPlainText(block.callout.rich_text);
    }

    if (text.trim()) {
      paragraphs.push(text.trim());
    }
  }

  return paragraphs;
}

// API: Notion Status check
app.get('/api/notion/status', (_req: Request, res: Response) => {
  const notionToken = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
  const rawDbId = process.env.NOTION_DATABASE_ID;
  const cleanDbId = extractNotionDatabaseId(rawDbId);

  const isConfigured = Boolean(notionToken && cleanDbId);

  res.json({
    configured: isConfigured,
    databaseId: cleanDbId ? `${cleanDbId.slice(0, 4)}...${cleanDbId.slice(-4)}` : null,
    message: isConfigured
      ? 'Notion API is connected and ready to fetch live news.'
      : 'Notion API keys not yet provided. The news page will show an empty state until configured.'
  });
});

// API: Get all news articles directly from Notion Database
app.get('/api/news', async (_req: Request, res: Response) => {
  const notionToken = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
  const rawDbId = process.env.NOTION_DATABASE_ID;
  const cleanDbId = extractNotionDatabaseId(rawDbId);

  // If not configured, gracefully return seed data
  if (!notionToken || !cleanDbId) {
    return res.json({
      source: 'none',
      status: 'unconfigured',
      message: 'News source is not configured.',
      articles: []
    });
  }

  try {
    // Query Notion Database via REST API with standard headers
    const notionRes = await fetch(`https://api.notion.com/v1/databases/${cleanDbId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page_size: 100
      })
    });

    if (!notionRes.ok) {
      const errText = await notionRes.text();
      console.error(`Notion API returned HTTP ${notionRes.status}:`, errText);
      return res.json({
        source: 'none',
        status: 'error',
        error: 'Failed to load news.',
        articles: []
      });
    }

    const data: any = await notionRes.json();
    const parsedArticles = [];

    for (const page of data.results || []) {
      const meta = parseNotionPageProperties(page);

      // Skip uncompleted drafts
      if (!meta.isPublished || !meta.title) continue;

      // Exclude legal policies from news
      const titleLowerNews = (meta.title + ' ' + meta.category + ' ' + meta.categoryZh).toLowerCase();
      if (titleLowerNews.includes('隱私權') || titleLowerNews.includes('服務條款') || titleLowerNews.includes('使用聲明') || titleLowerNews.includes('會員權益')) {
        continue;
      }

      let paragraphsZh: string[] = [];
      let paragraphsEn: string[] = [];

      // 1. Direct Content columns
      if (meta.directContent) {
        const splitBody = splitBilingualText(meta.directContent);
        if (splitBody.en !== splitBody.zh) {
          paragraphsZh = splitBody.zh
            .split(/\n+/)
            .map((p: string) => p.trim())
            .filter(Boolean);
          paragraphsEn = splitBody.en
            .split(/\n+/)
            .map((p: string) => p.trim())
            .filter(Boolean);
        } else {
          paragraphsZh = meta.directContent
            .split(/\n+/)
            .map((p: string) => p.trim())
            .filter(Boolean);
        }
      }

      if (meta.directContentEn) {
        paragraphsEn = meta.directContentEn
          .split(/\n+/)
          .map((p: string) => p.trim())
          .filter(Boolean);
      }

      // 2. Also check if the page has block children (body text)
      try {
        const blocksRes = await fetch(`https://api.notion.com/v1/blocks/${page.id}/children?page_size=50`, {
          headers: {
            'Authorization': `Bearer ${notionToken}`,
            'Notion-Version': '2022-06-28'
          }
        });
        if (blocksRes.ok) {
          const blocksData: any = await blocksRes.json();
          const blockParagraphs = extractContentBlocks(blocksData.results || []);
          if (blockParagraphs.length > 0) {
            const enBlockIdx = blockParagraphs.findIndex((p: string) => p.toUpperCase().includes('[EN]') || p.includes('---EN---'));
            if (enBlockIdx !== -1) {
              const zhBlock = blockParagraphs.slice(0, enBlockIdx);
              const enBlock = blockParagraphs.slice(enBlockIdx).map((p: string) => p.replace(/\[EN\]|---EN---/i, '').trim()).filter(Boolean);
              if (paragraphsZh.length === 0) paragraphsZh = zhBlock;
              if (paragraphsEn.length === 0) paragraphsEn = enBlock;
            } else {
              if (paragraphsZh.length === 0) paragraphsZh = blockParagraphs;
            }
          }
        }
      } catch (blockErr) {
        console.warn(`Could not fetch blocks for page ${page.id}:`, blockErr);
      }

      // If still no body paragraphs, fall back to summary
      if (paragraphsZh.length === 0 && meta.summary) {
        paragraphsZh = [meta.summary];
      }
      if (paragraphsEn.length === 0) {
        paragraphsEn = meta.summaryEn ? [meta.summaryEn] : paragraphsZh;
      }

      // Calculate read time roughly
      const wordCount = (paragraphsZh.join('') + meta.title).length;
      const readMinutes = Math.max(1, Math.ceil(wordCount / 300));
      const readTime = `${readMinutes} min read`;

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
        contentEn: paragraphsEn,
        readTime
      });
    }

    // Sort descending by date
    parsedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return res.json({
      source: 'notion',
      status: 'ok',
      count: parsedArticles.length,
      articles: parsedArticles
    });
  } catch (error: any) {
    console.error('Error querying Notion API:', error?.message || error);
    // Graceful fallback on network or authorization error
    return res.json({
      source: 'none',
      status: 'error',
      error: 'Failed to load news.',
      articles: []
    });
  }
});

// Auto-discover Legal Database from user's Notion integration
async function findNotionLegalDatabaseId(token: string): Promise<{ id: string | null; name: string | null; isAutoDiscovered: boolean }> {
  // 1. Explicit env variable
  if (process.env.NOTION_LEGAL_DATABASE_ID) {
    const clean = extractNotionDatabaseId(process.env.NOTION_LEGAL_DATABASE_ID);
    if (clean) return { id: clean, name: 'Explicit NOTION_LEGAL_DATABASE_ID', isAutoDiscovered: false };
  }

  // 2. Auto-discover from user's Notion integration by searching for databases
  try {
    const res = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filter: { value: 'database', property: 'object' } })
    });
    if (res.ok) {
      const data: any = await res.json();
      for (const db of data.results || []) {
        const title = (db.title?.[0]?.plain_text || '').toLowerCase();
        if (title.includes('法律') || title.includes('聲明') || title.includes('條款') || title.includes('legal') || title.includes('policy')) {
          console.log(`[BEAT Server] Auto-discovered Legal Database: "${db.title?.[0]?.plain_text}" (${db.id})`);
          return { id: db.id, name: db.title?.[0]?.plain_text || '法律與聲明', isAutoDiscovered: true };
        }
      }
    }
  } catch (err) {
    console.warn('Could not auto-discover legal database:', err);
  }

  // 3. Fallback to main news database
  const newsDbId = extractNotionDatabaseId(process.env.NOTION_DATABASE_ID);
  if (newsDbId) {
    return { id: newsDbId, name: 'Main News Database (Fallback)', isAutoDiscovered: false };
  }

  return { id: null, name: null, isAutoDiscovered: false };
}

// Notion Legal Documents API (Privacy, Terms, Cookies, Member Rights)
app.get('/api/legal', async (_req, res) => {
  const notionToken = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;

  if (!notionToken) {
    return res.json({ status: 'fallback', docs: {} });
  }

  const dbInfo = await findNotionLegalDatabaseId(notionToken);
  if (!dbInfo.id) {
    return res.json({ status: 'fallback', docs: {} });
  }

  try {
    const notionRes = await fetch(`https://api.notion.com/v1/databases/${dbInfo.id}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page_size: 50 })
    });

    if (!notionRes.ok) {
      console.error(`[BEAT Server] Notion legal database returned HTTP ${notionRes.status}:`, await notionRes.text());
      return res.json({ status: 'fallback', docs: {} });
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
      } else if (titleLower.includes('服務條款') || titleLower.includes('平台條款') || titleLower.includes('條款') || titleLower.includes('terms')) {
        docType = 'terms';
      } else if (titleLower.includes('cookie')) {
        docType = 'cookies';
      } else if (titleLower.includes('會員權益') || titleLower.includes('權益') || titleLower.includes('rights')) {
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

      // Check directContent columns if no section columns
      if (paragraphsZh.length === 0 && meta.directContent) {
        const splitBody = splitBilingualText(meta.directContent);
        if (splitBody.en !== splitBody.zh) {
          paragraphsZh = splitBody.zh.split(/\n+/).map((p: string) => p.trim()).filter(Boolean);
          paragraphsEn = splitBody.en.split(/\n+/).map((p: string) => p.trim()).filter(Boolean);
        } else {
          paragraphsZh = meta.directContent.split(/\n+/).map((p: string) => p.trim()).filter(Boolean);
        }
      }

      if (meta.directContentEn) {
        paragraphsEn = meta.directContentEn.split(/\n+/).map((p: string) => p.trim()).filter(Boolean);
      }

      // If still empty, fetch from block children
      if (paragraphsZh.length === 0) {
        try {
          const blockParagraphs = await fetchAllNotionBlocks(page.id, notionToken);
          if (blockParagraphs.length > 0) {
            const enBlockIdx = blockParagraphs.findIndex((p: string) => p.toUpperCase().includes('[EN]') || p.includes('---EN---'));
            if (enBlockIdx !== -1) {
              paragraphsZh = blockParagraphs.slice(0, enBlockIdx);
              paragraphsEn = blockParagraphs.slice(enBlockIdx).map((p: string) => p.replace(/\[EN\]|---EN---/i, '').trim()).filter(Boolean);
            } else {
              paragraphsZh = blockParagraphs;
            }
          }
        } catch {
          // ignore
        }
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

    return res.json({
      status: 'ok',
      source: 'notion',
      databaseName: dbInfo.name,
      databaseId: dbInfo.id,
      isAutoDiscovered: dbInfo.isAutoDiscovered,
      count: Object.keys(legalDocs).length,
      docs: legalDocs
    });
  } catch (err: any) {
    return res.json({ status: 'fallback', docs: {} });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT
      },
      appType: 'spa'
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[BEAT Server] Running on http://0.0.0.0:${PORT}`);
  });

  const startupToken = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
  const startupDbId = extractNotionDatabaseId(process.env.NOTION_DATABASE_ID);
  if (startupToken && startupDbId) {
    console.log('[BEAT Server] Notion: keys loaded (news + legal are fetched live)');
  } else {
    console.warn('[BEAT Server] Notion: NOTION_API_KEY / NOTION_DATABASE_ID not found in .env or .env.local - the news page will be empty and legal pages use built-in text. Restart the server after editing the env file.');
  }
}

startServer();
