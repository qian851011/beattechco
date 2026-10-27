import { useState, useEffect } from 'react';
import { PageId, Language, CollaborationType, LegalDocType, NewsItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BeatPassPage } from './pages/BeatPassPage';
import { PartnersPage } from './pages/PartnersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { VenueSystemPage } from './pages/VenueSystemPage';

const ROUTABLE_PATHS = ['about', 'beat-pass', 'partners', 'news', 'contact', 'venue-system'];

// 依網址決定第一個畫面（瀏覽器與預先輸出 HTML 時都用得到）
function getPageFromPath(): PageId {
  if (typeof window === 'undefined') return 'home';
  return pageFromPathname(window.location.pathname);
}

function pageFromPathname(pathname: string): PageId {
  const path = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (path.startsWith('news/')) return 'news';
  return ROUTABLE_PATHS.includes(path) ? (path as PageId) : 'home';
}

interface AppProps {
  initialPage?: PageId;
  initialNews?: NewsItem[];
  initialArticleId?: string | null;
}

export default function App({ initialPage, initialNews, initialArticleId }: AppProps = {}) {
  const [currentPage, setCurrentPage] = useState<PageId>(() => initialPage ?? getPageFromPath());
  const [language, setLanguage] = useState<Language>('zh-TW');
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [contactPresetType, setContactPresetType] = useState<CollaborationType | undefined>(undefined);

  // Sync initial URL path
  useEffect(() => {
    setCurrentPage(pageFromPathname(window.location.pathname));

    const handlePopState = () => {
      setCurrentPage(pageFromPathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title per page
  useEffect(() => {
    switch (currentPage) {
      case 'beat-pass':
        document.title = 'BEAT PASS｜跨場域運動體驗｜比忒科技';
        break;
      case 'partners':
        document.title = 'BEAT Technology 合作夥伴｜場館・品牌・企業合作';
        break;
      case 'about':
        document.title = '關於比忒科技與核心業務｜Technology That Moves｜BEAT Technology';
        break;
      case 'news':
        document.title = '最新消息與公告｜BEAT Technology 比忒科技';
        break;
      case 'contact':
        document.title = '商務合作洽詢｜BEAT Technology 比忒科技';
        break;
      case 'venue-system':
        document.title = '場館管理系統｜BEAT PASS 合作場館數位工具｜比忒科技';
        break;
      default:
        document.title = 'BEAT Technology 比忒科技｜科技 × 運動生活｜Technology That Moves';
        break;
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId, defaultType?: CollaborationType) => {
    setCurrentPage(page);
    if (defaultType) {
      setContactPresetType(defaultType);
    }
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh-TW' ? 'en' : 'zh-TW'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#141413] selection:bg-[#FF9F1C] selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'beat-pass' && (
          <BeatPassPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'partners' && (
          <PartnersPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'news' && (
          <NewsPage language={language} initialArticles={initialNews} initialArticleId={initialArticleId} />
        )}
        {currentPage === 'venue-system' && (
          <VenueSystemPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            language={language}
            defaultCollaborationType={contactPresetType}
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onOpenLegal={setLegalModalType}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        language={language}
      />
    </div>
  );
}
