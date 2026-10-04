import React, { useState, useEffect } from 'react';
import { PageId, Language } from '../types';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { BeatLogo } from './BeatLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed redundant "聯絡我們" from center nav links so there is only one "聯絡我們" button on the right
  const navLinks: { id: PageId; labelZh: string; labelEn: string }[] = [
    { id: 'home', labelZh: '首頁', labelEn: 'HOME' },
    { id: 'about', labelZh: '關於比忒', labelEn: 'ABOUT' },
    { id: 'beat-pass', labelZh: 'BEAT PASS', labelEn: 'BEAT PASS' },
    { id: 'partners', labelZh: '合作夥伴', labelEn: 'PARTNERS' },
    { id: 'news', labelZh: '最新消息', labelEn: 'NEWS' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isContactActive = currentPage === 'contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F7F5]/92 backdrop-blur-md border-b border-[#E5E5DF] shadow-sm py-3.5'
          : 'bg-[#F7F7F5]/70 backdrop-blur-sm border-b border-[#E5E5DF]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F1C]"
            aria-label="BEAT Technology Home"
          >
            <div className="w-8 h-8 rounded-none border border-[#E5E5DF] bg-white flex items-center justify-center p-0.5 group-hover:border-[#FF9F1C] transition-colors shadow-xs">
              <BeatLogo variant="icon" className="w-full h-full border-0" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-widest text-[#141413] flex items-center gap-1.5">
                BEAT
                <span className="text-[10px] uppercase tracking-normal px-1 py-0.2 text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 font-mono font-semibold">
                  PASS
                </span>
              </div>
              <div className="text-[10px] text-[#7A7A74] tracking-wider uppercase font-medium">
                {language === 'zh-TW' ? '比忒科技有限公司' : 'Beat Technology'}
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'about' && currentPage === 'business');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#141413] font-semibold'
                      : 'text-[#6C6C66] hover:text-[#141413]'
                  }`}
                >
                  {language === 'zh-TW' ? link.labelZh : link.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF9F1C]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#52524C] hover:text-[#141413] bg-white border border-[#E5E5DF] hover:border-[#FF9F1C] transition-colors cursor-pointer shadow-2xs"
              title="切換語言 / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF9F1C]" />
              <span className="font-medium">{language === 'zh-TW' ? 'EN' : '繁中'}</span>
            </button>

            {/* "合作洽詢" 改為 "聯絡我們" */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all cursor-pointer shadow-2xs ${
                isContactActive
                  ? 'text-[#141413] font-semibold bg-[#FFF9F2] border border-[#FF9F1C]'
                  : 'text-[#141413] bg-white border border-[#E5E5DF] hover:border-[#FF9F1C] hover:text-[#FF9F1C]'
              }`}
            >
              {language === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
            </button>

            {/* Primary CTA: BEAT PASS */}
            <button
              onClick={() => handleNavClick('beat-pass')}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs tracking-wider uppercase font-semibold text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-all cursor-pointer shadow-sm shadow-[#FF9F1C]/25"
            >
              <span>BEAT PASS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLanguage}
              className="p-2 text-xs text-[#52524C] bg-white border border-[#E5E5DF]"
              aria-label="Switch Language"
            >
              {language === 'zh-TW' ? 'EN' : '中'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141413] bg-white border border-[#E5E5DF] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F7F5] border-b border-[#E5E5DF] px-4 pt-4 pb-6 mt-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between text-left py-2 text-sm font-medium tracking-wider uppercase ${
                  currentPage === link.id || (link.id === 'about' && currentPage === 'business')
                    ? 'text-[#FF9F1C] font-semibold pl-2 border-l-2 border-[#FF9F1C]'
                    : 'text-[#52524C] hover:text-[#141413]'
                }`}
              >
                <span>{language === 'zh-TW' ? link.labelZh : link.labelEn}</span>
                <span className="text-[11px] text-[#8C8C85] font-mono">{link.labelEn}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-[#E5E5DF] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('beat-pass')}
                className="w-full py-2.5 text-center text-xs tracking-wider uppercase font-semibold text-white bg-[#FF9F1C] hover:bg-[#F08C00]"
              >
                {language === 'zh-TW' ? '探索 BEAT PASS' : 'Explore BEAT PASS'}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full py-2.5 text-center text-xs tracking-wider uppercase font-medium border ${
                  isContactActive
                    ? 'text-[#141413] font-semibold bg-[#FFF9F2] border-[#FF9F1C]'
                    : 'text-[#141413] bg-white border-[#E5E5DF]'
                }`}
              >
                {language === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
