// POST /api/contact — partnership inquiry form.
// Forwards the inquiry to TARGET_INQUIRY_EMAIL through FormSubmit and only reports
// success when FormSubmit confirms delivery.

import type { PagesContext } from '../_lib/notion';

const TARGET_INQUIRY_EMAIL = 'beat.tech.co@beatpasstw.com';

const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

// Coerce a request field to a trimmed string with a length cap (rejects objects/arrays)
function cleanField(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

// Single-line fields must not carry CR/LF (used in the email subject)
function cleanLine(value: unknown, maxLength: number): string {
  return cleanField(value, maxLength).replace(/[\r\n]+/g, ' ');
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  const body: any = await request.json().catch(() => ({}));
  const name = cleanLine(body?.name, 100);
  const email = cleanLine(body?.email, 254);
  const phone = cleanLine(body?.phone, 50);
  const companyName = cleanLine(body?.companyName, 150);
  const title = cleanLine(body?.title, 100);
  const collaborationType = cleanLine(body?.collaborationType, 50);
  const requirements = cleanField(body?.requirements, 5000);
  const notes = cleanField(body?.notes, 5000);

  if (!name || !email || !requirements) {
    return Response.json({ error: 'Missing required fields (name, email, requirements)' }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const timestamp = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
  const subject = `[BEAT 官網合作洽詢] ${collaborationType || '商業合作'} - ${companyName || name}`;

  try {
    const origin = env.APP_URL || new URL(request.url).origin;
    const fsRes = await fetch(`https://formsubmit.co/ajax/${TARGET_INQUIRY_EMAIL}`, {
      method: 'POST',
      signal: AbortSignal.timeout(15000),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': `${origin}/contact`
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _replyto: email,
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
      return Response.json({ success: true });
    }
    console.error(`[FormSubmit] Delivery rejected (HTTP ${fsRes.status}):`, fsData?.message || fsData);
  } catch (err) {
    console.error('[FormSubmit] Request failed:', err);
  }

  return Response.json(
    { success: false, error: 'Inquiry could not be delivered. Please try again later or email us directly.' },
    { status: 502 }
  );
};
