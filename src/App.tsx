import { useState, useEffect } from 'react';
import { PageId, Language, CollaborationType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BeatPassPage } from './pages/BeatPassPage';
import { PartnersPage } from './pages/PartnersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

const ROUTABLE_PATHS = ['about', 'business', 'beat-pass', 'partners', 'news', 'contact'];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('zh-TW');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | 'rights' | null>(null);
  const [contactPresetType, setContactPresetType] = useState<CollaborationType | undefined>(undefined);

  // Sync initial URL path
  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, '');
    if (ROUTABLE_PATHS.includes(path)) {
      setCurrentPage(path as PageId);
    }

    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\//, '');
      if (ROUTABLE_PATHS.includes(currentPath)) {
        setCurrentPage(currentPath as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title for Section 33 SEO guidelines
  useEffect(() => {
    switch (currentPage) {
      case 'beat-pass':
        document.title = 'BEAT PASS｜跨場域運動體驗｜比忒科技';
        break;
      case 'partners':
        document.title = 'BEAT Technology 合作夥伴｜場館・品牌・企業合作';
        break;
      case 'business':
      case 'about':
        document.title = '關於比忒科技與核心業務｜Technology That Moves｜BEAT Technology';
        break;
      case 'news':
        document.title = '最新消息與公告｜BEAT Technology 比忒科技';
        break;
      case 'contact':
        document.title = '商務合作洽詢｜BEAT Technology 比忒科技';
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
        {(currentPage === 'about' || currentPage === 'business') && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'beat-pass' && (
          <BeatPassPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'partners' && (
          <PartnersPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'news' && (
          <NewsPage language={language} />
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
        onOpenLegal={(type) => setLegalModalType(type)}
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
