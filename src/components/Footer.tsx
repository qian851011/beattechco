import React from 'react';
import { PageId, Language, LegalDocType } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { BeatLogo } from './BeatLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language, onOpenLegal }) => {

  return (
    <footer className="bg-[#EFEFEA] text-[#5C5C58] border-t border-[#E2E2DC] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="pb-12 border-b border-[#E2E2DC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white border border-[#DCDCD6] p-0.5 shadow-2xs">
                <BeatLogo variant="icon" className="w-full h-full border-0" />
              </div>
              <span className="text-xl font-bold tracking-widest text-[#141413]">BEAT TECHNOLOGY</span>
            </div>
            <p className="mt-2 text-sm text-[#6C6C66] max-w-lg">
              {language === 'zh-TW'
                ? '用科技，讓人、商業、生活持續流動。從運動出發，走向更大的生態。'
                : 'Technology That Moves. From Movement to Ecosystem.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('beat-pass')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-xs"
            >
              {language === 'zh-TW' ? '體驗 BEAT PASS' : 'Explore BEAT PASS'}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-colors cursor-pointer shadow-2xs"
            >
              {language === 'zh-TW' ? '商務合作洽詢' : 'Contact Us'}
            </button>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#E2E2DC] text-xs">
          {/* Col 1: Products */}
          <div>
            <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
              {language === 'zh-TW' ? '產品與生態' : 'Products & Ecosystem'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('beat-pass')}
                  className="hover:text-[#FF9F1C] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>BEAT PASS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF9F1C]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF9F1C] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span>BEAT Commerce</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF9F1C]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  <span>BEAT Technology Solutions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('beat-pass')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  <span>Chiu Chiu Coin (啾啾幣)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Partners */}
          <div>
            <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
              {language === 'zh-TW' ? '合作網絡' : 'Partnership'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '運動場館合作 (Venue)' : 'Venue Partnership'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '品牌跨界合作 (Brand)' : 'Brand Partnership'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '企業健康方案 (Enterprise)' : 'Enterprise Solutions'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '技術與系統串聯 (Tech)' : 'Tech Integration'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
              {language === 'zh-TW' ? '關於比忒' : 'About BEAT'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '公司理念與願景' : 'Philosophy & Vision'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '最新消息與動態' : 'Corporate News'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '商務與媒體接洽' : 'Business Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Security */}
          <div>
            <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
              {language === 'zh-TW' ? '法律與聲明' : 'Legal & Trust'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '隱私權保護政策' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '平台服務條款' : 'Terms of Service'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? 'Cookie 使用聲明' : 'Cookie Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('rights')}
                  className="hover:text-[#FF9F1C] transition-colors text-left cursor-pointer"
                >
                  {language === 'zh-TW' ? '會員權益與須知' : 'Member Rights & Guidelines'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Entity Info */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#7A7A74]">
          <div>
            <p className="font-medium text-[#3A3A36]">
              比忒科技有限公司 · Beat Technology Co., Ltd.
            </p>
            <p className="mt-1">
              BEAT THE ODDS.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} BEAT Technology Co., Ltd. All rights reserved.</span>
            <span>·</span>
            <span>Taipei, Taiwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
