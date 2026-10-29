import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build, defineConfig, type Plugin } from 'vite';

const SITE = 'https://beattechco.com';

// 每個網址對應的頁面與搜尋引擎看到的標題、描述（標題沿用 App.tsx 原本的設定）
const ROUTES = [
  {
    page: 'home',
    file: 'index.html',
    url: `${SITE}/`,
    title: 'BEAT Technology 比忒科技｜科技 × 運動生活｜Technology That Moves',
    description:
      '比忒科技有限公司 (BEAT Technology Co., Ltd.) 官方企業網站。Technology That Moves. 用科技，讓人、商業與生活持續流動。旗下旗艦產品 BEAT PASS 跨場域運動體驗與多元數位生態。',
  },
  {
    page: 'about',
    file: 'about.html',
    url: `${SITE}/about`,
    title: '關於比忒科技與核心業務｜Technology That Moves｜BEAT Technology',
    description:
      '比忒科技是一家以科技、生活與產業創新為核心的科技公司。我們從 BEAT PASS 出發，持續拓展會員服務、運動場館、電子商務與數位科技之間的多元可能性。',
  },
  {
    page: 'beat-pass',
    file: 'beat-pass.html',
    url: `${SITE}/beat-pass`,
    title: 'BEAT PASS｜跨場域運動體驗｜比忒科技',
    description:
      'BEAT PASS 是比忒科技打造的跨場域運動會員服務。透過單一數位憑證，串聯多元運動空間，讓使用者依照自己的生活節奏、興趣與訓練需求，探索運動的無限可能。',
  },
  {
    page: 'partners',
    file: 'partners.html',
    url: `${SITE}/partners`,
    title: 'BEAT Technology 合作夥伴｜場館・品牌・企業合作',
    description:
      '比忒科技深信永續的商業價值源自緊密而互信的生態合作。我們誠摯邀請運動場館、生活品牌、企業雇主與科技先鋒，一同開創健康運動生活的嶄新篇章。',
  },
  {
    page: 'news',
    file: 'news.html',
    url: `${SITE}/news`,
    title: '最新消息與公告｜BEAT Technology 比忒科技',
    description: '即時掌握比忒科技（BEAT Technology）的最新動態、產品發表、跨界合作與科技研發進展。',
  },
  {
    page: 'contact',
    file: 'contact.html',
    url: `${SITE}/contact`,
    title: '商務合作洽詢｜BEAT Technology 比忒科技',
    description:
      '無論您是運動場館經營者、品牌代表、企業福委會或科技合作團隊，歡迎留下您的需求與聯絡方式，比忒科技商務拓展團隊將於 1-2 個工作日內竭誠與您聯繫。',
  },
  {
    page: 'venue-system',
    file: 'venue-system.html',
    url: `${SITE}/venue-system`,
    title: '場館管理系統｜BEAT PASS 合作場館數位工具｜比忒科技',
    description:
      'BEAT PASS 場館管理系統：為健身房、瑜伽、攀岩與皮拉提斯場館提供 QR Code 數位核驗入場、線上課程預約、場館後台 BEAT Partner Portal 與營運數據洞察，並帶來新運動客源。',
  },
] as const;

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

type HeadInfo = { title: string; description: string; url: string };

function setHead(html: string, r: HeadInfo): string {
  const t = escapeAttr(r.title);
  const d = escapeAttr(r.description);
  return html
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, (_m, a, b) => `${a}${d}${b}`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (_m, a, b) => `${a}${t}${b}`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (_m, a, b) => `${a}${d}${b}`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (_m, a, b) => `${a}${r.url}${b}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (_m, a, b) => `${a}${t}${b}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (_m, a, b) => `${a}${d}${b}`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_m, a, b) => `${a}${r.url}${b}`);
}

type NewsArticle = {
  id: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  categoryZh?: string;
};

// build 時從線上 API 取得最新消息（失敗就回傳 null，只略過文章頁，不影響其他頁面）
async function fetchNews(): Promise<NewsArticle[] | null> {
  const url = process.env.BEAT_NEWS_URL || `${SITE}/api/news`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: any = await res.json();
    if (data?.status !== 'ok' || !Array.isArray(data.articles)) throw new Error(`status ${data?.status}`);
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    // 排程中（日期在今天之後）的文章不預先輸出，到當天才公開
    return (data.articles as NewsArticle[]).filter((a) => a && a.id && a.title && String(a.date || '').slice(0, 10) <= today);
  } catch (err) {
    console.warn('[beat-prerender] 無法取得最新消息，略過文章頁：', err);
    return null;
  }
}

const articleUrl = (a: NewsArticle) => `${SITE}/news/${encodeURIComponent(a.id)}`;

function articleDescription(a: NewsArticle): string {
  const s = (a.summary || '').trim();
  const text = s.length >= 20 ? s : (a.content || []).join('').trim();
  return text.length > 120 ? `${text.slice(0, 118)}…` : text;
}

// 把文章資料嵌入頁面，瀏覽器載入時可直接顯示，不必等 API
const newsDataScript = (news: NewsArticle[]) =>
  `<script>window.__BEAT_NEWS__=${JSON.stringify(news).replace(/</g, '\\u003c')}</script>`;

// build 完成後，把每個頁面預先輸出成靜態 HTML（about.html → /about）。
// 任何一步失敗都只會略過預先輸出，網站照常以原本的方式運作，不會讓部署失敗。
function prerenderPages(): Plugin {
  let root = process.cwd();
  let outDir = 'dist';
  return {
    name: 'beat-prerender-pages',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const ssrOut = path.resolve(root, '.beat-prerender-ssr');
      try {
        await build({
          configFile: false,
          root,
          logLevel: 'warn',
          plugins: [react()],
          build: { ssr: 'src/entry-prerender.tsx', outDir: ssrOut, emptyOutDir: true, copyPublicDir: false },
        });
        const entry = (await fs.readdir(ssrOut)).find((f) => /^entry-prerender\.(m?js)$/.test(f));
        if (!entry) throw new Error('SSR entry not found');
        const mod = await import(pathToFileURL(path.join(ssrOut, entry)).href);
        const template = await fs.readFile(path.join(outDir, 'index.html'), 'utf8');
        const emptyRoot = '<div id="root"></div>';
        if (!template.includes(emptyRoot)) throw new Error('empty #root not found in index.html');

        const news = await fetchNews();
        const pages = new Map<string, string>();
        for (const r of ROUTES) {
          const appHtml: string = r.page === 'news' && news ? mod.render('news', { news }) : mod.render(r.page);
          if (!appHtml || appHtml.length < 200) throw new Error(`empty render for ${r.page}`);
          const withApp = template.replace(emptyRoot, `<div id="root">${appHtml}</div>`);
          // 首頁的標題與描述沿用 index.html 原本的設定
          let html = r.page === 'home' ? withApp : setHead(withApp, r);
          if (r.page === 'news' && news) html = html.replace('</body>', `${newsDataScript(news)}\n  </body>`);
          pages.set(r.file, html);
        }
        for (const [file, html] of pages) await fs.writeFile(path.join(outDir, file), html);

        // 有了 404.html，不存在的網址會正確回傳 404（不再全部回 200）
        const notFound = pages
          .get('index.html')!
          .replace(/<meta name="robots"[^>]*>\s*/g, '')
          .replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>');
        await fs.writeFile(path.join(outDir, '404.html'), notFound);
        console.log(`[beat-prerender] 已預先輸出 ${pages.size} 個頁面與 404.html`);

        // 每篇最新消息各自輸出一頁（news/<id>.html → /news/<id>），並加進 sitemap
        if (news && news.length) {
          try {
            await fs.mkdir(path.join(outDir, 'news'), { recursive: true });
            for (const a of news) {
              const appHtml: string = mod.render('news', { news, articleId: a.id });
              const head: HeadInfo = {
                title: `${a.title}｜BEAT Technology 比忒科技`,
                description: articleDescription(a),
                url: articleUrl(a),
              };
              const ld = {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: a.title,
                description: head.description,
                datePublished: a.date,
                dateModified: a.date,
                inLanguage: 'zh-TW',
                mainEntityOfPage: head.url,
                image: `${SITE}/og-image.png`,
                author: { '@id': `${SITE}/#organization` },
                publisher: { '@id': `${SITE}/#organization` },
              };
              const html = setHead(template.replace(emptyRoot, `<div id="root">${appHtml}</div>`), head)
                .replace(/(<meta property="og:type" content=")[^"]*(")/, (_m, x, y) => `${x}article${y}`)
                .replace(
                  '</head>',
                  `    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n  </head>`
                )
                .replace('</body>', `${newsDataScript(news)}\n  </body>`);
              await fs.writeFile(path.join(outDir, 'news', `${a.id}.html`), html);
            }
            const sitemapPath = path.join(outDir, 'sitemap.xml');
            const sitemap = await fs.readFile(sitemapPath, 'utf8');
            const extra = news
              .map((a) => `  <url><loc>${articleUrl(a)}</loc><lastmod>${a.date}</lastmod><priority>0.6</priority></url>`)
              .join('\n');
            await fs.writeFile(sitemapPath, sitemap.replace('</urlset>', `${extra}\n</urlset>`));
            console.log(`[beat-prerender] 已預先輸出 ${news.length} 篇最新消息文章，並加入 sitemap`);
          } catch (err) {
            console.warn('[beat-prerender] 略過最新消息文章頁（其他頁面不受影響）：', err);
          }
        }
      } catch (err) {
        console.warn('[beat-prerender] 略過預先輸出（網站仍可正常運作）：', err);
      } finally {
        await fs.rm(ssrOut, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderPages()],
});
