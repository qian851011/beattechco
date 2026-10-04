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
      {/* 21 | ABOUT & BUSINESS HERO */}
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
                  ? 'Beater Technology is a tech company centered on technology, lifestyle, and industrial innovation. Starting from BEAT PASS, we continuously expand the diverse possibilities among membership services, sports venues, e-commerce, and digital technology.'
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
                    ? 'We believe technology breaks down silos, enabling people to move flexibly across varied urban rhythms while empowering passionate venues to thrive.'
                    : '我們深信科技的力量在於打破藩籬，讓運動者自由切換生活節奏，讓每座用心經營的特色運動空間都能被看見與發光發熱。'}
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
                      {isEn ? 'Freedom to Move' : '自由無界探索 (Freedom)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'Move flexibly anytime across curated venues without long-term lock-in.' : '打破傳統單一合約束縛，一張數位通行憑證自由體驗瑜伽、抱石與重訓。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    02
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Empowering Spaces' : '場館深耕發光 (Empowerment)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'Connecting independent studios directly with active urban audiences.' : '協助堅持品質的特色空間觸及熱愛運動的年輕客群，告別削價競爭。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    03
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Ecosystem Synergy' : '全域共榮循環 (Synergy)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn ? 'Bridging movement with lifestyle commerce, reward perks, and corporate wellness.' : '無縫串聯運動體驗、風格電商選品、點數回饋機制與企業活力福利。'}
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
                      ? 'Connect People · Empower Venues · Build the Ecosystem'
                      : '連結運動者 · 賦能運動場館 · 建立寬廣生態'}
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
                      {isEn ? 'Connect People' : '連結運動者 (Connect People)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'Deliver frictionless, flexible, and trusted digital movement credentials across the city.'
                        : '提供流暢、彈性且值得信賴的數位運動通行體驗，打破傳統合約門檻。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    02
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Empower Venues' : '賦能運動場館 (Empower Venues)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'Equip independent space operators with modern software to relieve administrative friction and expand reach.'
                        : '以輕量數位工具協助場館經營者減輕行政繁瑣，零額外硬體負擔開拓新客。'}
                    </span>
                  </div>
                </div>

                <div className="group/item flex items-start gap-3.5 min-h-[58px] p-2 -mx-2 rounded-xs hover:bg-white/80 transition-all duration-200 cursor-default">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-[#FF9F1C] bg-[#FFF4E5] border border-[#FF9F1C]/30 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#FF9F1C] group-hover/item:text-white transition-all duration-200">
                    03
                  </span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#141413] group-hover/item:text-[#FF9F1C] block mb-0.5 transition-colors">
                      {isEn ? 'Build the Ecosystem' : '建立寬廣生態 (Build Ecosystem)'}
                    </strong>
                    <span className="text-[#6C6C66] leading-relaxed block">
                      {isEn
                        ? 'Unite active lifestyles, conscious commerce, and forward-looking tech to cultivate enduring value.'
                        : '結合運動生活品味、潮流選品電商與前瞻科技應用，打造持續成長商業生態。'}
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
                {isEn ? 'Engineering as Core Engine' : '以科技為核心引擎'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'BEAT Technology is not a conventional gym manager. We are a software engineering company dedicated to scalable digital products, high-availability architecture, and smooth cross-platform experiences.'
                  : '比忒科技並非傳統健身管理公司，而是一家專注於數位產品開發、高可用性微服務架構與跨端體驗的科技公司。科技是我們解決真實問題的最強大槓桿。'}
              </p>
            </div>

            <div className="subtle-interactive-card anim-float-b p-7 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center bg-[#FFF4E5] border border-[#FF9F1C]/30 text-[#FF9F1C] mb-4 group-hover:scale-115 group-hover:border-[#FF9F1C] transition-all duration-300">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors duration-200">
                {isEn ? 'Active Lifestyle Aesthetics' : '專注運動生活品味'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'Movement is the modern urbanite’s purest expression of discipline and personal style. From strength training and bouldering to mindfulness yoga, every discipline embodies distinct values.'
                  : '我們深信運動是現代人探索自律與自我風格的最佳途徑。從重訓、抱石到瑜伽冥想，每一個運動項目都代表一種生活主張與都會美學。'}
              </p>
            </div>

            <div className="subtle-interactive-card anim-float-c p-7 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center bg-[#FFF4E5] border border-[#FF9F1C]/30 text-[#FF9F1C] mb-4 group-hover:scale-115 group-hover:border-[#FF9F1C] transition-all duration-300">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors duration-200">
                {isEn ? 'Integrity & Enduring Value' : '誠信與長青夥伴價值'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'We deeply respect venue owners’ dedication. We insist on fair, transparent, and sustainable partnerships to jointly elevate the digital landscape of the fitness sector.'
                  : '我們尊重每一位合作場館經營者的專業心血，堅持建立公平、透明與可持續的長期合作關係，共同推動健康運動產業的數位升級。'}
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
                      ? 'BEAT PASS is our cornerstone sports membership service. By connecting movers with diverse boutique spaces through technology, members can freely explore yoga, bouldering, strength training, martial arts, and aquatics with a single digital pass.'
                      : 'BEAT PASS 是比忒科技目前的核心旗艦運動產品。以現代科技串聯運動者與各類型特色場館，打破傳統健身會籍限制，讓使用者以單一會員憑證隨時探索瑜伽、抱石、重訓、格鬥與游泳池，享受高度自主的運動生活。'}
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
                    <div className="text-3xl font-bold text-[#141413] font-mono group-hover/metric:text-[#FF9F1C] group-hover/metric:translate-x-1 transition-all duration-200">100+</div>
                    <div className="text-xs text-[#6C6C66] mt-1">{isEn ? 'Boutique partner sports venues expanding rapidly' : '風格合作運動場館（運動場館擴大進行中）'}</div>
                  </div>
                  <div className="group/metric border-b border-[#E5E5DF] pb-5 p-2 -mx-2 rounded-xs hover:bg-white transition-all duration-200 cursor-default">
                    <div className="text-3xl font-bold text-[#141413] font-mono group-hover/metric:text-[#FF9F1C] group-hover/metric:translate-x-1 transition-all duration-200">6+</div>
                    <div className="text-xs text-[#6C6C66] mt-1">{isEn ? 'Core disciplines: Fitness, Yoga, Climbing, Boxing, Pilates, Aquatics' : '主流運動維度（健身、瑜伽、攀岩、拳擊、皮拉提斯、游泳池）'}</div>
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
                    Strategic Scope
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Curated Brand Collaborations' : '精選品牌聯名'}</span>
                    {isEn ? 'Partnering with premium apparel and outdoor gear brands to create limited joint releases.' : '未來將與具備高度生活質感的運動潮流、戶外冒險與機能服飾品牌展開跨界聯名企劃。'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Seamless Venue Commerce' : '場館周邊深度串接'}</span>
                    {isEn ? 'Connecting offline venue discovery directly with online product recommendations.' : '持續探索場館現場體驗與線上電商的智慧導購串聯。'}
                  </div>
                </div>
                <div className="pt-2 border-t border-[#F0F0EB]">
                  <div className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Seamlessly uniting boutique products and fitness communities.' : '結合風格選物與運動社群，創造無縫的運動生活消費體驗。'}
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
                    {isEn ? 'Tech Services, Architecture & Digital Product R&D' : '科技服務、系統架構與數位產品研發'}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed pt-2">
                    {isEn
                      ? 'Technology is BEAT’s core foundational strength. From self-developed dynamic QR credentials and venue assistance tools to high-throughput cloud microservices, we build reliable software for ecosystem scaling.'
                      : '科技是比忒科技的研發底層與核心競爭力。從自研的會員驗證憑證服務、場館賦能輔助介面，到雲端高擴展性 API 微服務，我們持續厚植產品開發能力，為未來數位服務與跨企業技術合作奠定堅實基礎。'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-[15px] leading-[20px] text-[#4A4A46]">
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Venue Digital Tool Research' : '場館數位管理工具研究'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Cross-System API Integration' : '跨系統 API 串接與生態整合'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'High-Concurrency Secure Credentials' : '高併發安全憑證技術'}</span>
                    </div>
                    <div className="group/feat flex items-center gap-2.5 p-1 -ml-1 rounded-xs hover:bg-[#FFF9F2]/70 transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-[#8C8C85] group-hover/feat:text-[#FF9F1C] group-hover/feat:scale-120 transition-all duration-200 shrink-0" />
                      <span className="group-hover/feat:text-[#141413] transition-colors">{isEn ? 'Enterprise Digital Solutions' : '企業級數位解決方案規劃'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-[17px] font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
                  >
                    <span>{isEn ? 'Discuss Tech Collaboration' : '探討技術合作與架構交流'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E5DF] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider">
                    Technology Principles
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Modular Extensibility' : '模組化擴展設計'}</span>
                    {isEn ? 'Decoupled architecture ready to rapidly absorb new product lines and commercial integrations.' : '架構設計具備高解耦特性，便於隨時因應新產品線與新商業模式的迅速擴展。'}
                  </div>
                  <div className="subtle-interactive-card p-4 bg-white border border-[#E5E5DF] hover:border-[#FF9F1C]/40 text-xs text-[#4A4A46] cursor-default">
                    <span className="font-semibold text-[#141413] block mb-1">{isEn ? 'Modern Cloud Security' : '現代化雲端運算標準'}</span>
                    {isEn ? 'Adopting leading cloud standards ensuring rigorous data protection, high availability, and swift latency.' : '採用領先業界的雲端原生技術，兼具數據防護、高可用性與流暢使用者體驗。'}
                  </div>
                </div>
                <div className="pt-2 border-t border-[#F0F0EB]">
                  <div className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Empowering partners and movers through resilient core technology.' : '以堅實的技術底層為支撐，賦能生態系中所有合作夥伴與數位使用者。'}
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
                ? 'Beater Technology is a technology company driven by continuous innovation. In response to the maturing sports ecosystem, we created "BEAT PASS." Moving forward, we will continue to plan and incubate new digital products, smart sports hardware integrations, and corporate wellness services.'
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
