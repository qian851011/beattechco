import React, { useState, useEffect } from 'react';
import { Language, NewsCategory, NewsItem } from '../types';
import { ArrowRight, X } from 'lucide-react';

interface NewsPageProps {
  language: Language;
  // 預先輸出 HTML 時傳入；瀏覽器端則讀取頁面內嵌的 window.__BEAT_NEWS__
  initialArticles?: NewsItem[];
  initialArticleId?: string | null;
}

declare global {
  interface Window {
    __BEAT_NEWS__?: NewsItem[];
  }
}

const PAGE_SIZE = 9;

// 台灣時間的今天（YYYY-MM-DD）；日期在今天之後的文章（排程中）先不顯示
function todayInTaipei(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}
const onlyPublished = (list: NewsItem[]) => {
  const today = todayInTaipei();
  return list.filter((a) => !a.date || String(a.date).slice(0, 10) <= today);
};

// 網址 ?page=2 對應第幾頁
function getPageFromQuery(): number {
  if (typeof window === 'undefined') return 1;
  const n = parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10);
  return Number.isFinite(n) && n > 1 ? n : 1;
}

// 從網址 /news/<id> 取得文章 id
function getArticleIdFromPath(): string | null {
  if (typeof window === 'undefined') return null;
  const m = window.location.pathname.match(/^\/news\/([^/]+)\/?$/);
  return m ? decodeURIComponent(m[1]) : null;
}

export const NewsPage: React.FC<NewsPageProps> = ({ language, initialArticles, initialArticleId }) => {
  const rawSeed =
    initialArticles ?? (typeof window !== 'undefined' && Array.isArray(window.__BEAT_NEWS__) ? window.__BEAT_NEWS__ : undefined);
  const seedArticles = rawSeed ? onlyPublished(rawSeed) : undefined;
  const seedArticleId = initialArticleId ?? getArticleIdFromPath();
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [page, setPage] = useState<number>(() => getPageFromQuery());
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(
    () => (seedArticles && seedArticleId ? seedArticles.find((a) => a.id === seedArticleId) ?? null : null)
  );
  const [articles, setArticles] = useState<NewsItem[]>(() => seedArticles ?? []);
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>(() => (seedArticles ? 'ready' : 'loading'));

  // 開啟／關閉文章時同步網址，讓每篇文章都有自己的連結
  const openArticle = (news: NewsItem) => {
    setActiveArticle(news);
    const target = `/news/${encodeURIComponent(news.id)}`;
    if (window.location.pathname !== target) window.history.pushState(null, '', target);
  };
  const closeArticle = () => {
    setActiveArticle(null);
    if (window.location.pathname.startsWith('/news/')) window.history.pushState(null, '', '/news');
  };
  const isEn = language === 'en';

  const categories: { id: NewsCategory; labelZh: string; labelEn: string }[] = [
    { id: 'All', labelZh: '全部消息', labelEn: 'All' },
    { id: 'Company', labelZh: '公司動態', labelEn: 'Company' },
    { id: 'BEAT PASS', labelZh: 'BEAT PASS', labelEn: 'BEAT PASS' },
    { id: 'Partnership', labelZh: '合作夥伴', labelEn: 'Partnership' },
    { id: 'Commerce', labelZh: '運動生活電商', labelEn: 'Commerce' },
    { id: 'Technology', labelZh: '科技創新', labelEn: 'Technology' }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.status === 'ok' && Array.isArray(data.articles)) {
          const published = onlyPublished(data.articles as NewsItem[]);
          setArticles(published);
          setLoadState('ready');
          const id = getArticleIdFromPath();
          if (id) {
            const found = published.find((a) => a.id === id);
            if (found) setActiveArticle(found);
          }
        } else if (!seedArticles) {
          setLoadState('error');
        }
      } catch (err) {
        console.warn('Could not fetch /api/news:', err);
        if (!seedArticles) setLoadState('error');
      }
    };

    fetchNews();
  }, []);

  // 瀏覽器上一頁／下一頁時，依網址開啟或關閉文章
  useEffect(() => {
    const onPop = () => {
      const id = getArticleIdFromPath();
      setActiveArticle(id ? articles.find((a) => a.id === id) ?? null : null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [articles]);

  const filteredNews = selectedCategory === 'All'
    ? articles
    : articles.filter((n) => n.category === selectedCategory);

  // 分頁：每頁最多 9 篇
  const totalPages = Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedNews = filteredNews.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const pageHref = (n: number) => (n === 1 ? '/news' : `/news?page=${n}`);
  const goToPage = (n: number) => {
    setPage(n);
    if (window.location.pathname === '/news' || window.location.pathname === '/news/') {
      window.history.replaceState(null, '', pageHref(n));
    }
    document.getElementById('news-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const selectCategory = (id: NewsCategory) => {
    setSelectedCategory(id);
    if (page !== 1) goToPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* NEWS HERO */}
      <section className="border-b border-[#E5E5DF] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span>NEWSROOM</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'Official News & Announcements' : '最新消息與官方公告'}</span>
            </div>
            {/* 開啟文章時，文章標題才是這頁的 H1（外觀不變） */}
            {activeArticle ? (
              <p className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
                News & Updates
              </p>
            ) : (
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
                News & Updates
              </h1>
            )}
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed">
              {isEn
                ? 'Stay informed with the latest milestones, product releases, cross-brand partnerships, and engineering updates from BEAT Technology.'
                : '即時掌握比忒科技（BEAT Technology）的最新動態、產品發表、跨界合作與科技研發進展。'}
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & NEWS LIST */}
      <section id="news-list" className="py-12 border-b border-[#E5E5DF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF9F1C] text-[#141413] font-semibold shadow-xs'
                      : 'bg-white/80 border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30'
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelZh}
                </button>
              );
            })}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagedNews.map((news) => (
              <article
                key={news.id}
                onClick={() => openArticle(news)}
                className="p-6 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C] transition-all flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#7A7A74] mb-3">
                    <span className="text-[#FF9F1C] font-semibold">
                      {isEn ? news.category : news.categoryZh}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] transition-colors leading-snug mb-3">
                    <a href={`/news/${encodeURIComponent(news.id)}`} onClick={(e) => e.preventDefault()}>
                      {isEn ? news.titleEn : news.title}
                    </a>
                  </h3>

                  <p className="text-xs text-[#6C6C66] leading-relaxed line-clamp-3">
                    {isEn ? news.summaryEn : news.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0F0EB] flex items-center justify-between text-xs text-[#7A7A74] group-hover:text-[#141413] transition-colors">
                  <span className="font-medium">{isEn ? 'Read Story' : '閱讀完整內容'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9F1C] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-10 flex-wrap" aria-label={isEn ? 'News pages' : '最新消息分頁'}>
              {currentPage > 1 && (
                <a
                  href={pageHref(currentPage - 1)}
                  onClick={(e) => { e.preventDefault(); goToPage(currentPage - 1); }}
                  className="px-4 py-2 text-xs font-medium tracking-wider uppercase border bg-white/80 border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30 transition-all"
                >
                  {isEn ? '‹ Prev' : '‹ 上一頁'}
                </a>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <a
                  key={n}
                  href={pageHref(n)}
                  onClick={(e) => { e.preventDefault(); goToPage(n); }}
                  aria-current={n === currentPage ? 'page' : undefined}
                  className={`min-w-[2.5rem] px-3 py-2 text-xs text-center font-medium tracking-wider border transition-all ${
                    n === currentPage
                      ? 'bg-white border-[#FF9F1C] text-[#141413] font-semibold shadow-xs'
                      : 'bg-white/80 border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30'
                  }`}
                >
                  {n}
                </a>
              ))}
              {currentPage < totalPages && (
                <a
                  href={pageHref(currentPage + 1)}
                  onClick={(e) => { e.preventDefault(); goToPage(currentPage + 1); }}
                  className="px-4 py-2 text-xs font-medium tracking-wider uppercase border bg-white/80 border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30 transition-all"
                >
                  {isEn ? 'Next ›' : '下一頁 ›'}
                </a>
              )}
            </nav>
          )}

          {loadState === 'loading' && (
            <div className="py-20 text-center text-[#8C8C85] text-sm" role="status">
              {isEn ? 'Loading news…' : '消息載入中…'}
            </div>
          )}

          {loadState === 'error' && (
            <div className="py-20 text-center text-[#8C8C85] text-sm" role="status">
              {isEn ? 'News is temporarily unavailable. Please check back later.' : '最新消息暫時無法載入，請稍後再試。'}
            </div>
          )}

          {loadState === 'ready' && filteredNews.length === 0 && (
            <div className="py-20 text-center text-[#8C8C85] text-sm">
              {selectedCategory === 'All'
                ? (isEn ? 'No announcements published yet.' : '目前尚無發布消息。')
                : (isEn ? 'No announcements published in this category yet.' : '此分類目前尚無發布消息。')}
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-[#DCDCD6] w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-[#E5E5DF] flex items-start justify-between gap-4 bg-[#F7F7F5]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A7A74] mb-2">
                  <span className="text-[#FF9F1C] font-semibold">
                    {isEn ? activeArticle.category : activeArticle.categoryZh}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.date}</span>
                </div>
                <h1 className="text-lg sm:text-2xl font-bold text-[#141413]">
                  {isEn ? activeArticle.titleEn : activeArticle.title}
                </h1>
              </div>
              <button
                onClick={closeArticle}
                className="p-2 text-[#6C6C66] hover:text-[#141413] border border-[#E5E5DF] shrink-0 bg-white cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-[#4A4A46] leading-relaxed bg-white">
              <div className="p-4 bg-[#FFF9F2] border-l-2 border-[#FF9F1C] text-xs text-[#5C5C58] italic mb-6">
                {isEn ? activeArticle.summaryEn : activeArticle.summary}
              </div>

              {((isEn && activeArticle.contentEn) ? activeArticle.contentEn : activeArticle.content).map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="p-4 border-t border-[#E5E5DF] bg-[#F7F7F5] flex justify-end">
              <button
                onClick={closeArticle}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] shadow-xs cursor-pointer"
              >
                {isEn ? 'Back to News' : '返回最新消息'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
