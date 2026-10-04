import React, { useState, useEffect } from 'react';
import { Language, NewsCategory, NewsItem } from '../types';
import { ArrowRight, X } from 'lucide-react';

interface NewsPageProps {
  language: Language;
}

export const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');
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
          setArticles(data.articles);
          setLoadState('ready');
        } else {
          setLoadState('error');
        }
      } catch (err) {
        console.warn('Could not fetch /api/news:', err);
        setLoadState('error');
      }
    };

    fetchNews();
  }, []);

  const filteredNews = selectedCategory === 'All'
    ? articles
    : articles.filter((n) => n.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* 26 | NEWS HERO */}
      <section className="border-b border-[#E5E5DF] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span>NEWSROOM</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'Official News & Announcements' : '最新消息與官方公告'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
              News & Updates
            </h1>
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed">
              {isEn
                ? 'Stay informed with the latest milestones, product releases, cross-brand partnerships, and engineering updates from BEAT Technology.'
                : '即時掌握比忒科技（BEAT Technology）的最新動態、產品發表、跨界合作與科技研發進展。'}
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & NEWS LIST */}
      <section className="py-12 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
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
            {filteredNews.map((news) => (
              <article
                key={news.id}
                onClick={() => setActiveArticle(news)}
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
                    {isEn ? news.titleEn : news.title}
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
                <h2 className="text-lg sm:text-2xl font-bold text-[#141413]">
                  {isEn ? activeArticle.titleEn : activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
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
                onClick={() => setActiveArticle(null)}
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
