import React from 'react';
import { PageId, Language } from '../types';
import { PHILOSOPHY_PRINCIPLES } from '../data/content';
import { BeatLogo } from '../components/BeatLogo';
import {
  ArrowRight,
  ArrowUpRight,
  QrCode,
  Compass,
  Layers,
  Sparkles,
  Users,
  Network,
  ShoppingBag,
  ChevronRight,
  CalendarCheck,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        {/* Subtle geometric dynamic grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1414130a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />
        
        {/* Warm Orange Ambient Light */}
        <div className="absolute top-1/4 right-5 w-72 h-72 md:w-96 md:h-96 bg-[#FF9F1C]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-white border border-[#E5E5DF] p-0.5 shadow-2xs shrink-0 flex items-center justify-center">
                  <BeatLogo variant="icon" className="w-full h-full border-0" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold">
                  BEAT TECHNOLOGY
                </span>
                <span className="text-[#C4C4BC]">/</span>
                <span className="text-xs font-mono text-[#6C6C66] tracking-wider">
                  {isEn ? 'Beat Technology Co., Ltd.' : '比忒科技有限公司'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141413] leading-[1.15]">
                {isEn ? 'Redefining Connections Between People and the World.' : '重新定義人與世界之間的連結。'}
              </h1>

              <div className="text-lg sm:text-xl font-medium text-[#2E2E2A] tracking-wide">
                Technology That Moves.
                <span className="block text-sm sm:text-base text-[#666660] font-normal mt-1">
                  {isEn
                    ? 'Empowering not just human connection, but the seamless flow of life with technology.'
                    : '用科技，讓不只人與人 更與生活持續流動。'}
                </span>
              </div>

              <p className="text-[#5C5C58] text-sm sm:text-base leading-relaxed max-w-xl">
                {isEn
                  ? 'BEAT Technology connects movers, sports venues, and active urban living. Beginning with BEAT PASS, we explore broader possibilities across technology, commerce, and daily life.'
                  : '比忒科技以科技串聯運動者、運動場館與運動生活，從 BEAT PASS 出發，探索科技、商業與生活之間更多可能。'}
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('beat-pass')}
                  className="flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-all cursor-pointer shadow-md shadow-[#FF9F1C]/25"
                >
                  <span>{isEn ? 'Explore BEAT PASS' : '探索 BEAT PASS'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#141413] transition-all cursor-pointer shadow-2xs"
                >
                  <span>{isEn ? 'About BEAT' : '了解比忒科技'}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C8C85]" />
                </button>
              </div>

              {/* Supporting Statement Line */}
              <div className="pt-6 border-t border-[#E5E5DF] flex items-center gap-4 text-xs text-[#6C6C66]">
                <span className="font-mono text-[#FF9F1C] font-semibold">01</span>
                <span className="font-medium text-[#2E2E2A]">From Movement to Ecosystem.</span>
                <span className="text-[#C4C4BC]">·</span>
                <span>{isEn ? 'Expanding Beyond Horizons.' : '從運動出發，走向更大的生態。'}</span>
              </div>
            </div>

            {/* Right Kinetic Movement Metaphor Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 relative border border-[#E5E5DF] shadow-md overflow-hidden">
                {/* Visual kinetic status */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F0F0EB]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F1C] animate-pulse" />
                    <span className="text-xs uppercase font-mono tracking-wider text-[#141413] font-semibold">
                      ECOSYSTEM FLOW
                    </span>
                  </div>
                </div>

                {/* Node Grid Metaphor with gentle, organic floating and smooth hover */}
                <div className="py-8 space-y-4">
                  <div className="anim-float-a flex items-center justify-between p-3.5 bg-[#FAF9F6] border border-[#EBEBE5] hover:border-[#FF9F1C] hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7F7F4] border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                          {isEn ? 'Movers & Athletes' : '運動者 (People)'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'Seamless multi-discipline movement' : '自由切換不同運動項目'}
                        </div>
                      </div>
                    </div>
                    <span className="w-24 text-center shrink-0 text-[11px] font-mono font-bold bg-[#FBFBFA] border border-[#E8E8E0] px-2.5 py-1 tracking-wider shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                      <span className="inline-block animate-orange-glow">CONNECTED</span>
                    </span>
                  </div>

                  <div className="anim-float-b flex items-center justify-between p-3.5 bg-[#FAF9F6] border border-[#EBEBE5] hover:border-[#FF9F1C] hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7F7F4] border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] shrink-0">
                        <Network className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                          {isEn ? 'Partner Venues' : '合作場館 (Venues)'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'Smarter operations through technology' : '用科技更聰明地經營'}
                        </div>
                      </div>
                    </div>
                    <span className="w-24 text-center shrink-0 text-[11px] font-mono font-bold bg-[#FBFBFA] border border-[#E8E8E0] px-2.5 py-1 tracking-wider shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                      <span className="inline-block animate-orange-glow">NETWORK</span>
                    </span>
                  </div>

                  <div className="anim-float-c flex items-center justify-between p-3.5 bg-[#FAF9F6] border border-[#EBEBE5] hover:border-[#FF9F1C] hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7F7F4] border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] shrink-0">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                          {isEn ? 'Active Lifestyle Commerce' : '運動生活 (Commerce)'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'Gear, aesthetics & discovery' : '運動裝備與生活場景延伸'}
                        </div>
                      </div>
                    </div>
                    <span className="w-24 text-center shrink-0 text-[11px] font-mono font-bold bg-[#FBFBFA] border border-[#E8E8E0] px-2.5 py-1 tracking-wider shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                      <span className="inline-block animate-orange-glow">EXPANDING</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME — COMPANY INTRODUCTION */}
      <section className="py-20 md:py-28 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-3">
              {isEn ? 'COMPANY VISION' : '企業願景'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight leading-snug">
              More Than One Product.
              <span className="block text-xl sm:text-2xl text-[#6C6C66] font-normal mt-1">
                {isEn ? 'We build far more than a single product.' : '我們不只做一個產品。'}
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-[#42423E] text-sm sm:text-base leading-relaxed border-l-2 border-[#FF9F1C] pl-6 bg-[#FAF9F6] py-4 pr-4">
              <p>
                {isEn
                  ? 'At BEAT Technology, we believe true technological value does not lie solely in solving a isolated problem, but in continuously forging new, sustainable connections.'
                  : '比忒科技相信，真正有價值的科技，不只是解決一個問題，而是持續創造新的連結。'}
              </p>
              <p>
                {isEn
                  ? 'We begin with movement. Through BEAT PASS, we connect active urbanites with diverse venues; through commerce, we extend the active lifestyle; and through technological solutions, we explore broader frontiers across enterprise and digital domains.'
                  : '我們從運動開始。從 BEAT PASS 串聯運動者與場館；從電商延伸運動生活；從科技服務探索企業與數位世界更多可能。'}
              </p>
              <p className="text-[#6C6C66]">
                {isEn
                  ? 'BEAT PASS is our cornerstone today. And we are relentlessly charting what’s next.'
                  : 'BEAT PASS 是我們目前的重要起點。而我們正在持續拓展下一個可能。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOME — BUSINESS ECOSYSTEM */}
      <section className="py-24 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
                BUSINESS ECOSYSTEM
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
                One Ecosystem. Many Possibilities.
              </h2>
              <p className="text-base text-[#6C6C66] mt-2">
                {isEn ? 'A unified ecosystem unlocking infinite potential.' : '一個生態系，連結更多可能。'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#141413] hover:text-[#FF9F1C] font-medium transition-colors cursor-pointer"
            >
              <span>{isEn ? 'View All Businesses' : '檢視所有業務版圖'}</span>
              <ArrowRight className="w-4 h-4 text-[#FF9F1C]" />
            </button>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: BEAT PASS */}
            <div className="white-card subtle-interactive-card p-8 flex flex-col justify-between relative group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F0F0EB]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white border border-[#E5E5DF] p-0.5 shadow-2xs shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <BeatLogo variant="icon" className="w-full h-full border-0" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-[#FF9F1C] bg-[#FFF4E5] px-2 py-0.5 font-semibold uppercase group-hover:bg-[#FF9F1C] group-hover:text-white transition-colors duration-300">
                      Sports Membership
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] transition-colors">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141413] mb-2 group-hover:text-[#FF9F1C] transition-colors duration-200">
                  BEAT PASS
                </h3>
                <div className="text-sm font-medium text-[#4A4A46] mb-4">
                  {isEn ? 'Cross-Venue Movement Experience' : '跨場域運動體驗'}
                </div>
                <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Connecting movers with distinct fitness disciplines through technology, providing unmatched freedom and flexibility.'
                    : '以科技串聯運動者與不同運動場域，讓使用者擁有更自由、更彈性的運動選擇。'}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#F0F0EB]">
                <button
                  onClick={() => onNavigate('beat-pass')}
                  className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#141413] group-hover:text-[#FF9F1C] transition-colors cursor-pointer"
                >
                  <span>{isEn ? 'Explore BEAT PASS' : '探索 BEAT PASS'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[#FF9F1C]" />
                </button>
              </div>
            </div>

            {/* Pillar 2: BEAT COMMERCE */}
            <div className="white-card subtle-interactive-card p-8 flex flex-col justify-between relative group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F0F0EB]">
                  <span className="text-[11px] font-mono tracking-wider text-[#5C5C58] bg-[#FAF9F6] px-2 py-0.5 font-medium uppercase group-hover:bg-[#FFF4E5] group-hover:text-[#FF9F1C] transition-colors duration-300">
                    Sports Lifestyle Commerce
                  </span>
                  <span className="text-xs font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] transition-colors">02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141413] mb-2 group-hover:text-[#FF9F1C] transition-colors duration-200">
                  BEAT COMMERCE
                </h3>
                <div className="text-sm font-medium text-[#4A4A46] mb-4">
                  {isEn ? 'Sports Lifestyle Commerce' : '運動生活電商'}
                </div>
                <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Extending movement into apparel, curated training gear, and lifestyle goods to enrich everyday fitness experiences.'
                    : '從運動體驗延伸至裝備、用品與生活，探索運動與消費之間更多可能。'}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#F0F0EB]">
                <a
                  href="https://beatpasstw.com/shop/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#141413] group-hover:text-[#FF9F1C] transition-colors cursor-pointer"
                >
                  <span>{isEn ? 'Explore BEAT Commerce' : '探索 BEAT Commerce'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[#FF9F1C]" />
                </a>
              </div>
            </div>

            {/* Pillar 3: TECHNOLOGY SOLUTIONS */}
            <div className="white-card subtle-interactive-card p-8 flex flex-col justify-between relative group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F0F0EB]">
                  <span className="text-[11px] font-mono tracking-wider text-[#5C5C58] bg-[#FAF9F6] px-2 py-0.5 font-medium uppercase group-hover:bg-[#FFF4E5] group-hover:text-[#FF9F1C] transition-colors duration-300">
                    Technology & Systems
                  </span>
                  <span className="text-xs font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] transition-colors">03</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141413] mb-2 group-hover:text-[#FF9F1C] transition-colors duration-200">
                  TECHNOLOGY SOLUTIONS
                </h3>
                <div className="text-sm font-medium text-[#4A4A46] mb-4">
                  {isEn ? 'Tech Services & Systems Architecture' : '科技服務與系統架構'}
                </div>
                <p className="text-xs sm:text-sm text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'From high-reliability digital tools to scalable architecture, continually engineering solid foundations for growth.'
                    : '從數位產品到系統與技術服務，持續建立 BEAT Technology 的科技能力與未來拓展空間。'}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#F0F0EB]">
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#141413] group-hover:text-[#FF9F1C] transition-colors cursor-pointer"
                >
                  <span>{isEn ? 'Explore Tech Services' : '了解科技服務'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[#FF9F1C]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME — BEAT PASS HIGHLIGHT */}
      <section className="py-24 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white border border-[#E5E5DF] p-0.5 shadow-2xs shrink-0 flex items-center justify-center">
                  <BeatLogo variant="icon" className="w-full h-full border-0" />
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold">
                  FLAGSHIP SPORTS PRODUCT
                </div>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight">
                Move Freely.
                <span className="block text-xl sm:text-2xl font-medium text-[#5C5C58] mt-2">
                  {isEn ? 'Movement is no longer bound to a single choice.' : '讓運動，不再只有一種選擇。'}
                </span>
              </h2>
              <p className="text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'BEAT PASS is our signature sports service. With a single membership experience connecting diverse venues, members can explore movement possibilities tailored to their personal lifestyle and fitness aspirations.'
                  : 'BEAT PASS 是比忒科技目前的重要運動服務。透過單一會員體驗，串聯不同類型的運動場域，讓使用者可以依照自己的生活、興趣與需求，探索更多運動可能。'}
              </p>

              <div className="pt-4">
                <a
                  href="https://beatpasstw.com/app/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-sm"
                >
                  <span>{isEn ? 'Explore BEAT PASS' : '探索 BEAT PASS 完整體驗'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 6 Benefits Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefit 1 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Cross-Venue' : '跨場域'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Explore diverse movement spaces across the city without single-club lock-in.' : '探索更多運動空間，打破單一場館束縛。'}
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Flexible Choices' : '彈性選擇'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Freely organize daily training rhythms according to your schedule.' : '依照生活與需求自由安排日常運動節奏。'}
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Class Booking' : '預約課程'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Online schedules and real-time seats clear at a single glance.' : '線上預約一目了然，隨時掌握名額與課表。'}
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Instant Entry' : '即時入場'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Seamless QR Code check-in with zero waiting at venue desks.' : '透過專屬 QR Code 快速完成入場核驗流程。'}
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Instant Updates' : '即時訊息'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Class start alerts, booking status, and venue notifications right in time.' : '開課提醒與場館公告即時掌握不漏接。'}
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Movement Discovery' : '運動探索'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Discover distinctive boutique disciplines from bouldering to reformer Pilates.' : '發現平常不一定接觸的特色瑜伽、抱石與拳擊場域。'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME — VENUE VALUE */}
      <section className="py-24 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
              FOR VENUES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
              More Than a Platform.
            </h2>
            <div className="text-xl font-medium text-[#4A4A46] mt-1">
              {isEn ? 'Not just a system, but a digital growth partner for venues.' : '不只是系統，更是場館成長的數位夥伴。'}
            </div>
            <p className="text-sm text-[#6C6C66] mt-4 leading-relaxed">
              {isEn
                ? 'BEAT Technology empowers independent venues with modern tools, broader member acquisition, and collaborative marketing.'
                : 'BEAT Technology 希望透過科技與合作，協助運動場館接觸更多使用者、提升營運效率，並創造更多服務與品牌曝光的可能。'}
            </p>
          </div>

          {/* 6 Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] mb-2 font-medium transition-colors">01 / CONNECTION</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'CUSTOMER CONNECTION' : '新客源接觸'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Reach active, health-conscious urban audiences looking for fresh training environments.' : '連結新的運動族群，讓更多熱愛運動的都會消費者認識並走進您的場域。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] mb-2 font-medium transition-colors">02 / OPERATIONS</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'DIGITAL TOOLS' : '數位管理工具'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Intuitive digital verification tools streamlining check-ins and reducing front-desk friction.' : '提供更便利的數位管理與會員核驗服務，降低櫃檯與行政溝通負擔。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] mb-2 font-medium transition-colors">03 / INSIGHTS</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'DATA INSIGHTS' : '營運數據洞察'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Data-driven intelligence to understand visitor peak hours and inform growth decisions.' : '協助場館掌握使用與營運資訊，以數據為基礎輔助場館經營決策。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] mb-2 font-medium transition-colors">04 / BRANDING</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'BRAND EXPOSURE' : '品牌深度曝光'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Promote venue distinctiveness across BEAT’s apps, website, and editorial features.' : '增加場館在 BEAT 生態系平台與各類溝通渠道中的曝光與接觸機會。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#8C8C85] group-hover:text-[#FF9F1C] mb-2 font-medium transition-colors">05 / MARKETING</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'MARKETING SUPPORT' : '主題行銷企劃'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Participate in ecosystem-wide challenges and co-branded wellness campaigns.' : '透過 BEAT 生態系策劃主題體驗與聯合企劃，創造多元行銷綜效。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <div className="text-[11px] font-mono text-[#FF9F1C] mb-2 font-semibold">06 / FUTURE</div>
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'NEW POSSIBILITIES' : '長遠生態共好'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Unlock future commerce, corporate wellness, and software synergies together.' : '持續探索場館、品牌與運動生活之間的新合作，共創健康產業新價值。'}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center md:text-left">
            <button
              onClick={() => onNavigate('partners')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-sm"
            >
              <span>{isEn ? 'Become a Partner Venue' : '成為合作場館'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* HOME — TECHNOLOGY */}
      <section className="py-24 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
              TECHNOLOGY CAPABILITY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
              Built With Technology.
            </h2>
            <div className="text-xl font-medium text-[#4A4A46] mt-1">
              {isEn ? 'Engineering is the driving heartbeat of BEAT.' : '科技，是 BEAT 持續前進的核心。'}
            </div>
            <p className="text-sm text-[#6C6C66] mt-4 leading-relaxed">
              {isEn
                ? 'From member credentials to cloud infrastructure, we accumulate robust software engineering capabilities to empower future scale.'
                : '從會員服務、場館管理到電子商務與數位產品，比忒科技持續累積產品開發、系統架構與數位服務能力，為未來的擴充保留堅實空間。'}
            </p>
          </div>

          {/* 8 Capability Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Web Platforms', desc: isEn ? 'High-performance modern web platforms' : '高效現代化網頁架構與跨端體驗' },
              { title: 'Mobile Systems', desc: isEn ? 'Intuitive mobile UI & real-time passes' : '直覺流暢的行動端互動與即時憑證' },
              { title: 'Scalable SaaS', desc: isEn ? 'Modular venue enablement tools' : '模組化場館賦能與營運數位工具' },
              { title: 'Cloud Infrastructure', desc: isEn ? 'High-availability secure cloud systems' : '高可用性、高安全標準的雲端服務' },
              { title: 'Data Synergy', desc: isEn ? 'Movement trends & operational insights' : '運動生活趨勢與營運洞察能力' },
              { title: 'API Integration', desc: isEn ? 'Resilient cross-system interfaces' : '彈性安全的跨系統介接與生態串聯' },
              { title: 'System Architecture', desc: isEn ? 'Decoupled microservices architecture' : '穩健微服務與高擴展性底層架構' },
              { title: 'Digital Products', desc: isEn ? 'Continuous R&D in forward-looking apps' : '持續研發與孵化前瞻數位應用' }
            ].map((cap, idx) => (
              <div key={idx} className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                <div className="text-[10px] font-mono text-[#FF9F1C] font-semibold mb-1 group-hover:tracking-wider transition-all duration-200">
                  CORE 0{idx + 1}
                </div>
                <div className="font-bold text-[#141413] text-sm mb-1 group-hover:text-[#FF9F1C] transition-colors">{cap.title}</div>
                <div className="text-xs text-[#6C6C66] leading-relaxed">{cap.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME — COMMERCE */}
      <section className="py-24 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold">
                SPORTS LIFESTYLE COMMERCE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
                BEAT Commerce
                <span className="block text-xl text-[#5C5C58] font-normal mt-1">
                  {isEn ? 'Move Beyond the Venue. Movement happens everywhere.' : 'Move Beyond the Venue. 運動，不只發生在場館裡。'}
                </span>
              </h2>
              <p className="text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'BEAT Commerce extends movement into curated apparel, gear, and daily wellness items, connecting sports with conscious consumption.'
                  : 'BEAT Commerce 將運動延伸至更多商品與生活場景，探索運動、品牌與消費者之間的新連結。讓運動者的美學品味與生活所需，在每一次揮汗之餘自然延展。'}
              </p>
              <div>
                <a
                  href="https://beatpasstw.com/shop/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141413] hover:text-[#FF9F1C] transition-colors cursor-pointer group"
                >
                  <span>{isEn ? 'Explore Commerce Vision' : '探索 BEAT Commerce 規劃'}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF9F1C] transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-white border border-[#E5E5DF] space-y-4 shadow-sm">
                <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                  Lifestyle Scope
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4A4A46]">
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Technical & Aesthetic Apparel' : '運動機能與美學服飾'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Durable, stylish pieces designed for training and urban transit.' : '舒適、耐用且融入日常都會穿搭。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Training Gear & Accessories' : '訓練裝備與周邊配備'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Carefully curated equipment to accompany every personal breakthrough.' : '精選專業輔具，陪伴每一次自我超越。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Wellness Nutrition & Recovery' : '健康補給與機能飲食'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Clean nutrition and recovery formulas supporting sustained performance.' : '運動前後的營養補給與體能恢復。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Brand Co-Creations' : '生活美學跨界聯名'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Collaborations with creative brands to spark fresh active lifestyles.' : '攜手風格品牌，共創運動生活靈感。'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME — PHILOSOPHY */}
      <section className="py-24 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase font-mono tracking-widest text-[#FF9F1C] font-semibold mb-2">
              CORE PHILOSOPHY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
              Move Freely. Build Boldly.
            </h2>
            <div className="text-xl text-[#6C6C66] mt-1">
              {isEn ? 'Unbound in movement, courageous in creation.' : '自由移動，大膽創造。'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="subtle-interactive-card p-6 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="text-xs font-mono text-[#FF9F1C] font-semibold mb-3 group-hover:tracking-wider transition-all duration-200">
                    {principle.number} / {principle.en}
                  </div>
                  <h3 className="text-base font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 leading-snug transition-colors">
                    {isEn ? principle.enTitle : principle.zhTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#6C6C66] mt-4 leading-relaxed">
                  {isEn ? principle.descEn : principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME — FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-[#F2F1EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
            BEAT TECHNOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
            Let's Build the Future of Movement.
            <span className="block text-xl sm:text-2xl text-[#5C5C58] font-normal mt-2">
              {isEn ? 'Join us in shaping what’s next.' : '讓我們一起創造下一個可能。'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6C6C66] max-w-xl mx-auto leading-relaxed">
            {isEn
              ? 'Whether you are a venue operator, lifestyle brand, corporate partner, or technology pioneer, we welcome you to connect.'
              : '無論你是運動場館、品牌、企業或科技夥伴，歡迎與 BEAT Technology 聯絡。'}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25"
            >
              {isEn ? 'Contact Us' : '聯絡我們'}
            </button>
            <button
              onClick={() => onNavigate('beat-pass')}
              className="px-8 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#141413] transition-colors cursor-pointer shadow-2xs"
            >
              {isEn ? 'Explore BEAT PASS' : '探索 BEAT PASS'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
