import React from 'react';
import { PageId, Language } from '../types';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Compass,
  Target,
  Cpu,
  Activity,
  ShieldCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* ABOUT & BUSINESS HERO */}
      <section className="border-b border-[#E5E5DF] pb-16 bg-[#F7F7F5] relative overflow-hidden">
        {/* Soft subtle ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF9F1C]/[0.025] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4 anim-fade-in-up">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F1C] animate-soft-pulse inline-block" />
              <span>ABOUT & BUSINESS</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'About BEAT & Our Businesses' : '關於比忒與核心業務'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[67px] font-extrabold text-[#141413] tracking-tight leading-tight">
              Technology That Moves.
            </h1>
            <p className="text-base sm:text-xl font-medium text-[#2E2E2A]">
              {isEn ? 'From Movement to Ecosystem.' : '從運動出發，走向更大的生態。'}
              <span className="block text-sm sm:text-base text-[#6C6C66] font-normal mt-1 leading-relaxed">
                {isEn
                  ? 'BEAT Technology is a tech company centered on technology, lifestyle, and industrial innovation. Starting from BEAT PASS, we continuously expand the diverse possibilities among membership services, sports venues, e-commerce, and digital technology.'
                  : '比忒科技是一家以科技、生活與產業創新為核心的科技公司。我們從 BEAT PASS 出發，持續拓展會員服務、運動場館、電子商務與數位科技之間的多元可能性。'}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: VISION & MISSION */}
      <section className="py-20 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-3xl anim-fade-in-up">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
              VISION & MISSION
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
              {isEn ? 'Vision & Mission' : '願景與使命'}
            </h2>
            <p className="text-sm sm:text-base text-[#6C6C66] mt-2 leading-relaxed">
              {isEn
                ? 'Bridging people, venues, and commerce through digital technology to keep life in motion.'
                : '以數位科技為橋樑，讓運動更自由，讓商業生態緊密連結。'}
            </p>
          </div>

          {/* Two Balanced Columns: Vision & Mission with Perfect Symmetrical Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Card: OUR VISION */}
            <div className="subtle-interactive-card p-8 sm:p-10 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white flex flex-col justify-between group">
              {/* Top Header Block - Symmetrically Height-Matched */}
              <div className="space-y-4 mb-8 min-h-[190px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-3">
                    <Compass className="w-4 h-4 text-[#FF9F1C] group-hover:rotate-45 transition-transform duration-500 ease-out" />
                    <span>OUR VISION · 核心願景</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141413] leading-snug group-hover:text-[#FF9F1C] transition-colors duration-200">
                    Make Movement More Connected.
                  </h3>
                  <p className="text-sm font-semibold text-[#FF9F1C] mt-2">
                    {isEn
                      ? 'Freedom for movers · Opportunities for venues · Synergy across ecosystem'
                      : '讓運動更自由 · 讓場館更有機會 · 讓生態彼此連結'}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5C58] leading-relaxed pt-1">
                  {isEn
                    ? 'We want people to move the way that fits their week, and good independent venues to be easier to find.'
                    : '我們希望運動的人能照自己的節奏安排，也讓用心經營的小場館更容易被找到。'}
                </p>
              </div>

              {/* Bottom 3 Items - Exactly Matching Height & Style with comfortable interactive micro-animations */}
              <div className="space-y-5 pt-6 border-t border-[#EAE9E2]">
                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    01
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'For members' : '給會員'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'No long contracts. One pass for yoga, bouldering, and strength training.' : '不用綁約，一張會員卡就能去瑜伽、抱石和重訓場館。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    02
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'For venues' : '給場館'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'Bring new visitors to independent studios.' : '幫獨立經營的場館接觸到新的運動族群。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    03
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Beyond the venue' : '場館之外'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'Later: a shop for sports gear and member rewards.' : '接下來會有運動用品商店和會員回饋。'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: OUR MISSION */}
            <div className="subtle-interactive-card p-8 sm:p-10 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white flex flex-col justify-between group">
              {/* Top Header Block - Symmetrically Height-Matched */}
              <div className="space-y-4 mb-8 min-h-[190px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-3">
                    <Target className="w-4 h-4 text-[#FF9F1C] group-hover:scale-125 transition-transform duration-300 ease-out" />
                    <span>OUR MISSION · 使命行動</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141413] leading-snug group-hover:text-[#FF9F1C] transition-colors duration-200">
                    Connect. Empower. Build.
                  </h3>
                  <p className="text-sm font-semibold text-[#FF9F1C] mt-2">
                    {isEn
                      ? 'Members · Venues · Shop'
                      : '服務會員 · 支援場館 · 一步一步擴大'}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5C58] leading-relaxed pt-1">
                  {isEn
                    ? 'Our mission translates our vision into everyday software engineering, partner collaboration, and seamless mover experience across the ecosystem.'
                    : '我們透過軟體研發、場館夥伴合作協議與數位憑證技術，將願景具體落實為運動者日常生活中每一次流暢便利的通行體驗。'}
                </p>
              </div>

              {/* Bottom 3 Items - Exactly Matching Height & Style */}
              <div className="space-y-5 pt-6 border-t border-[#EAE9E2]">
                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    01
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Serve members' : '服務會員'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'Book online, show a QR code, walk in.'
                        : '線上預約、出示 QR Code、直接入場。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    02
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Support venues' : '支援場館'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'QR check-in and a venue backend, so the front desk spends less time on admin.'
                        : '用 QR Code 入場和場館後台，讓櫃檯少一點行政工作。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    03
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Grow step by step' : '一步一步擴大'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'Add more venue types, more cities, and a shop over time.'
                        : '逐步增加場館類型、城市，以及商店。'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 3 Identity Pillars with gentle floating rhythm and interactive feedback */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="subtle-interactive-card anim-float-a p-7 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center bg-[#FFF4E5] border border-[#FF9F1C]/30 text-[#FF9F1C] mb-4 group-hover:scale-115 group-hover:rotate-12 group-hover:border-[#FF9F1C] transition-all duration-300">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors duration-200">
                {isEn ? 'We build software' : '我們做的是軟體'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'We do not run gyms. We build the software that connects members and venues: the BEAT PASS app, the venue backend, and our websites.'
                  : '我們不經營健身房，我們做的是連接會員和場館的軟體：BEAT PASS App、場館後台，以及這些網站。'}
              </p>
            </div>

            <div className="subtle-interactive-card anim-float-b p-7 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center bg-[#FFF4E5] border border-[#FF9F1C]/30 text-[#FF9F1C] mb-4 group-hover:scale-115 group-hover:border-[#FF9F1C] transition-all duration-300">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors duration-200">
                {isEn ? 'Mix your workouts' : '運動可以混著來'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'Strength training one day, bouldering or yoga the next. We think people should be able to mix it up.'
                  : '今天重訓、明天抱石、週末瑜伽。我們覺得運動本來就該可以這樣混著來。'}
              </p>
            </div>

            <div className="subtle-interactive-card anim-float-c p-7 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center bg-[#FFF4E5] border border-[#FF9F1C]/30 text-[#FF9F1C] mb-4 group-hover:scale-115 group-hover:border-[#FF9F1C] transition-all duration-300">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors duration-200">
                {isEn ? 'Rules in writing' : '規則寫清楚'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'Fees and rules for partner venues are written down up front. Our venue contract and member terms are public.'
                  : '合作場館的費用和規則事先寫清楚，會員條款也公開在網站上。'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CORE BUSINESSES */}
      <section className="py-20 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl anim-fade-in-up">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
              CORE BUSINESSES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
              {isEn ? 'Our Business Units' : '核心業務版圖'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-1">
              {isEn ? 'One Company. Multiple Possibilities. A unified ecosystem connecting new horizons.' : 'One Company. Multiple Possibilities. 一個生態系，連結更多可能。'}
            </p>
          </div>

          {/* Business 1: BEAT PASS */}
          <div className="subtle-interactive-card-lg p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 bg-[#FF9F1C] animate-soft-pulse inline-block" />
                    <span>Flagship Sports Product</span>
                  </div>
                  <h3 className="text-[35px] leading-[45px] font-extrabold text-[#141413] group-hover:text-[#FF9F1C] transition-colors duration-200">
                    BEAT PASS
                  </h3>
                  <div className="text-sm font-medium text-[#4A4A46]">
                    {isEn ? 'Cross-Venue Sports Membership & Digital Experience' : '跨場域運動體驗與數位會員服務'}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed pt-2">
                    {isEn
                      ? 'BEAT PASS is our main product: one digital membership for yoga, bouldering, Pilates, and performance training venues in the Taipei area.'
                      : 'BEAT PASS 是比忒科技目前的主力產品：一張數位會員卡，可以使用雙北的瑜伽、抱石、皮拉提斯與體能訓練場館，不用每間都重新入會。'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-[15px] leading-[20px] text-[#4A4A46]">
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] shrink-0 group-hover/feat:scale-120 transition-transform duration-200" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Flexible Cross-Venue Access' : '跨場域靈活運動體驗'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] shrink-0 group-hover/feat:scale-120 transition-transform duration-200" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Instant QR Code Entry' : '即時 QR Code 快速核驗'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] shrink-0 group-hover/feat:scale-120 transition-transform duration-200" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Curated Venue Network' : '多元風格場館生態系'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] shrink-0 group-hover/feat:scale-120 transition-transform duration-200" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Exclusive Rewards (Chiu Chiu Coin)' : '專屬「啾啾幣」回饋機制'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('beat-pass')}
                    className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-[17px] font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
                  >
                    <span>{isEn ? 'Explore BEAT PASS' : '進入 BEAT PASS 專屬介紹'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E5DF] p-6 sm:p-8 flex flex-col justify-between space-y-6 subtle-interactive-card group/metriccard">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider">
                    <span>Key Metrics & Horizon</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-soft-pulse" />
                  </div>
                  <div className="group/metric border-b border-[#E5E5DF] pb-5 p-2 -mx-2 rounded-xs hover:bg-white transition-all duration-200 cursor-default">
                    <div className="text-3xl font-bold text-[#141413] font-mono group-hover/metric:text-[#FF9F1C] group-hover/metric:translate-x-1 transition-all duration-200">雙北</div>
                    <div className="text-xs text-[#6C6C66] mt-1">{isEn ? 'Where partner venues are today (expanding)' : '目前合作場館所在地區（持續增加中）'}</div>
                  </div>
                  <div className="group/metric border-b border-[#E5E5DF] pb-5 p-2 -mx-2 rounded-xs hover:bg-white transition-all duration-200 cursor-default">
                    <div className="text-3xl font-bold text-[#141413] font-mono group-hover/metric:text-[#FF9F1C] group-hover/metric:translate-x-1 transition-all duration-200">4</div>
                    <div className="text-xs text-[#6C6C66] mt-1">{isEn ? 'Venue types: yoga, bouldering, Pilates, performance training' : '場館類型：瑜伽、抱石、皮拉提斯、體能訓練'}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#F0F0EB]">
                  <div className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Connecting enthusiastic urban movers directly with high-quality independent spaces.' : '以都會運動者為核心，為場館開拓全新熱愛運動的年輕客群。'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business 2: BEAT COMMERCE */}
          <div className="subtle-interactive-card-lg p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6C6C66] group-hover:text-[#FF9F1C] transition-colors uppercase tracking-wider">
                    <span className="w-2 h-2 bg-[#8C8C85] group-hover:bg-[#FF9F1C] transition-colors inline-block" />
                    <span>Sports Lifestyle Commerce</span>
                  </div>
                  <h3 className="text-[35px] leading-[45px] font-extrabold text-[#141413] group-hover:text-[#FF9F1C] transition-colors duration-200">
                    BEAT Commerce
                  </h3>
                  <div className="text-sm font-medium text-[#4A4A46]">
                    {isEn ? 'Sports Lifestyle Commerce & Brand Extension' : '運動生活電商與風格延伸'}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed pt-2">
                    {isEn
                      ? 'Movement is an around-the-clock lifestyle. BEAT Commerce extends mover enthusiasm into curated apparel, gear, supplements, and lifestyle collaborations, forging novel links between fitness and mindful commerce.'
                      : '運動不只發生在訓練時段，更是一種全天候的生活美學。BEAT Commerce 著眼於將運動者的熱情延伸至裝備、運動服飾、生活補給與風格周邊，探索運動體驗與日常消費之間的新連結。'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-[15px] leading-[20px] text-[#4A4A46]">
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Curated Training Equipment' : '專業訓練裝備與選品'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Technical Lifestyle Apparel' : '運動生活風格服飾'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Clean Wellness Nutrition' : '健康補給與機能飲食'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Member Rewards Integration' : '會員回饋與整合優惠'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-[17px] font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
                  >
                    <span>{isEn ? 'Inquire Commerce Partnership' : '洽詢品牌選品與電商合作'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E5DF] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider">
                    {isEn ? 'Plans' : '規劃'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Curated Brand Collaborations' : '精選品牌聯名'}</span>
                    {isEn ? 'We are open to working with sportswear and gear brands.' : '歡迎運動服飾與裝備品牌洽談合作。'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Gear at the venue' : '場館現場用品'}</span>
                    {isEn ? 'Planned: buy gear you need for a class when you book it.' : '規劃中：預約課程時，可以一起買上課要用的用品。'}
                  </div>
                </div>
                <div className="pt-2 border-t border-[#F0F0EB]">
                  <div className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'The shop is being prepared.' : '商店正在籌備中。'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business 3: TECHNOLOGY SOLUTIONS */}
          <div className="subtle-interactive-card-lg p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6C6C66] group-hover:text-[#FF9F1C] transition-colors uppercase tracking-wider">
                    <span className="w-2 h-2 bg-[#8C8C85] group-hover:bg-[#FF9F1C] transition-colors inline-block" />
                    <span>Technology & Systems</span>
                  </div>
                  <h3 className="text-[35px] leading-[45px] font-extrabold text-[#141413] group-hover:text-[#FF9F1C] transition-colors duration-200">
                    Technology Solutions
                  </h3>
                  <div className="text-sm font-medium text-[#4A4A46]">
                    {isEn ? 'Our software' : '我們的軟體'}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed pt-2">
                    {isEn
                      ? 'We build and run the systems behind BEAT: dynamic QR check-in, online booking, and the venue backend BEAT Partner Portal.'
                      : 'BEAT 背後的系統由我們開發與維運：動態 QR Code 入場、線上預約，以及場館後台 BEAT Partner Portal。'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-[15px] leading-[20px] text-[#4A4A46]">
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Dynamic QR check-in' : '動態 QR Code 入場'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Online booking' : '線上預約'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Venue backend' : '場館後台'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Member app and websites' : '會員 App 與網站'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-[17px] font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
                  >
                    <span>{isEn ? 'Talk to us about tech' : '洽談技術合作'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E5DF] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider">
                    {isEn ? 'Basics' : '基本做法'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Security' : '資料安全'}</span>
                    {isEn ? 'Data is encrypted in transit and passwords are stored hashed. See our privacy policy.' : '資料傳輸加密、密碼雜湊儲存，詳見隱私權政策。'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Payments' : '金流'}</span>
                    {isEn ? 'Card payments go through ECPay. We do not store full card numbers.' : '信用卡付款透過綠界科技處理，我們不留存完整卡號。'}
                  </div>
                </div>
                <div className="pt-2 border-t border-[#F0F0EB]">
                  <div className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Questions about our systems: beat.tech.co@beatpasstw.com' : '系統相關問題：beat.tech.co@beatpasstw.com'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scalability Section: More to Come with subtle interactive float and comfortable hover */}
          <div className="subtle-interactive-card p-8 bg-[#F2F1EC] border border-[#E5E5DF] hover:bg-white text-center space-y-4 group cursor-default">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FF9F1C] group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300 animate-soft-pulse" />
              <span>More to Come</span>
            </div>
            <h3 className="text-2xl font-bold text-[#141413] group-hover:text-[#FF9F1C] transition-colors duration-200">
              {isEn ? 'Boundless Possibilities Ahead.' : '更多可能，持續發展中。'}
            </h3>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-xl mx-auto leading-relaxed">
              {isEn
                ? 'BEAT Technology is a technology company driven by continuous innovation. In response to the maturing sports ecosystem, we created "BEAT PASS." Moving forward, we will continue to plan and incubate new digital products, smart sports hardware integrations, and corporate wellness services.'
                : '比忒科技是一家持續創新的科技公司。隨著運動生態的成熟，我們創造了"BEAT PASS"後續也將持續規劃並孵化新的數位產品、智慧運動硬體整合與企業健康活力服務。'}
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM ACTION CTA */}
      <section className="py-16 text-center bg-white border-b border-[#E5E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 anim-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-bold text-[#141413]">
            {isEn ? 'Explore Partnerships with BEAT Technology' : '與比忒科技展開合作探索'}
          </h3>
          <p className="text-xs sm:text-sm text-[#6C6C66]">
            {isEn
              ? 'Whether you want to learn about BEAT PASS, explore lifestyle brand partnerships, or collaborate on tech architecture, we look forward to connecting.'
              : '無論您想了解 BEAT PASS、探索生活電商選品，或是探討技術架構整合，歡迎與我們團隊聯繫。'}
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#FF9F1C]/25 transition-all duration-200 cursor-pointer shadow-xs select-none"
            >
              {isEn ? 'Contact Us' : '立即聯絡我們'}
            </button>
            <button
              onClick={() => onNavigate('beat-pass')}
              className="px-7 py-3 text-xs font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#141413] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-2xs select-none"
            >
              {isEn ? 'Explore BEAT PASS' : '探索 BEAT PASS'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
