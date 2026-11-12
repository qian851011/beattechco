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
                    <span className="w-2 h-2 rounded-full bg-[#FF9F1C]" />
                    <span className="text-sm text-[#141413] font-semibold">
                      {isEn ? 'What we work on' : '我們在做的事'}
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
                          {isEn ? 'For movers' : '給運動的人'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'One pass for many venues' : '一張會員卡，進出不同場館'}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] text-[#6C6C66] pl-3">
                      {isEn ? 'Live' : '服務中'}
                    </span>
                  </div>

                  <div className="anim-float-b flex items-center justify-between p-3.5 bg-[#FAF9F6] border border-[#EBEBE5] hover:border-[#FF9F1C] hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7F7F4] border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] shrink-0">
                        <Network className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                          {isEn ? 'For venues' : '給場館'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'QR check-in, no new hardware' : '手機 QR Code 入場，不用裝新設備'}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] text-[#6C6C66] pl-3">
                      {isEn ? 'Taipei area' : '雙北合作中'}
                    </span>
                  </div>

                  <div className="anim-float-c flex items-center justify-between p-3.5 bg-[#FAF9F6] border border-[#EBEBE5] hover:border-[#FF9F1C] hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7F7F4] border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] shrink-0">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                          {isEn ? 'BEAT Shop' : 'BEAT 商店'}
                        </div>
                        <div className="text-[11px] text-[#6C6C66]">
                          {isEn ? 'Gear and everyday essentials' : '運動用品與生活選物'}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] text-[#6C6C66] pl-3">
                      {isEn ? 'Coming soon' : '籌備中'}
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
              {isEn ? 'Start with one problem.' : '先把一件事做好。'}
            </h2>
            <div className="mt-8 space-y-5 text-[#42423E] text-sm sm:text-base leading-relaxed border-l-2 border-[#FF9F1C] pl-6 bg-[#FAF9F6] py-4 pr-4">
              <p>
                {isEn
                  ? 'BEAT Technology Co., Ltd. is a Taipei company. Our main product today is BEAT PASS: one membership for many fitness venues, with no long contracts and no signing up again at every gym.'
                  : '比忒科技有限公司是一家台北的公司，目前主力產品是 BEAT PASS：一張跨場館的會員卡，不用綁約，也不用每到一間就重新入會。'}
              </p>
              <p>
                {isEn
                  ? 'We start with the everyday hassles between people and venues: getting in, booking a class, checking membership. Once that works well, we extend into sports gear and other digital services.'
                  : '我們先處理運動的人和場館之間最常卡住的事：入場、預約、核對會員。這些做順了，再延伸到運動用品和其他數位服務。'}
              </p>
              <p className="text-[#6C6C66]">
                {isEn
                  ? 'Every new step will be announced on our News page.'
                  : '每完成一步，都會寫在最新消息裡。'}
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
                    ? 'One membership that works at different kinds of venues, so you can switch between workouts.'
                    : '一張會員卡用在不同類型的場館，今天重訓、明天瑜伽都可以。'}
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
                    ? 'The member app, venue backend, and websites behind BEAT.'
                    : 'BEAT 背後的會員 App、場館後台與網站。'}
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
                    {isEn ? 'Try different venues without signing up at each one.' : '不用每間都辦會員，就能試不同場館。'}
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E8E8E2] hover:bg-white group cursor-default">
                  <div className="w-8 h-8 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-3 shadow-2xs group-hover:scale-110 group-hover:border-[#FF9F1C]/40 transition-transform duration-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#141413] mb-1 group-hover:text-[#FF9F1C] transition-colors">{isEn ? 'Flexible Choices' : '彈性選擇'}</h4>
                  <p className="text-xs text-[#6C6C66] leading-relaxed">
                    {isEn ? 'Book on your own schedule.' : '照自己的時間預約。'}
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
                    {isEn ? 'Check in with the QR code on your phone.' : '用手機上的 QR Code 入場。'}
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
              {isEn ? 'What venues get from BEAT PASS' : '場館加入 BEAT PASS，可以得到什麼？'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-4 leading-relaxed">
              {isEn
                ? 'BEAT PASS does not replace your own membership system. It adds one more way for new people to find you and walk in.'
                : 'BEAT PASS 不是要取代你原本的會員系統，而是多一個管道，讓還沒來過的人找到你、走進來。'}
            </p>
          </div>

          {/* 6 Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'New visitors' : '新客人'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Members browse venues in BEAT PASS, book, and show up. Many of them have never been to your venue before.' : '會員在 BEAT PASS 裡找場館、預約、到場，很多是第一次來你這裡的人。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'Check-in in one scan' : '掃一下就入場'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Members show a QR code on their phone and the front desk scans it. No paper sign-in sheets.' : '會員出示手機 QR Code，櫃檯掃一下就完成，不用紙本簽到。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'A venue backend' : '場館後台'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Check-ins and bookings from BEAT PASS members are recorded in BEAT Partner Portal.' : 'BEAT PASS 會員的入場與預約紀錄，都在 BEAT Partner Portal 裡查得到。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'Listed on BEAT' : '出現在 BEAT 上'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Your venue gets its own listing in BEAT PASS and on our websites.' : '場館會有自己的介紹，出現在 BEAT PASS 和我們的網站上。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'Joint events' : '一起辦活動'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'We run trial classes and fitness challenges from time to time. Partner venues can take part.' : '我們會不定期辦體驗課和運動挑戰，合作場館可以一起參加。'}
              </p>
            </div>

            <div className="subtle-interactive-card p-6 bg-white border border-[#E5E5DF] shadow-xs group cursor-default">
              <h3 className="text-lg font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-2 transition-colors">{isEn ? 'Cost' : '費用'}</h3>
              <p className="text-xs text-[#6C6C66] leading-relaxed">
                {isEn ? 'Under NT$500 a month. The first 100 partner venues pay no monthly fee.' : '每月不到 500 元，前 100 家合作場館免月費。'}
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
              {isEn ? 'What we are building' : '我們正在做的產品'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-4 leading-relaxed">
              {isEn
                ? 'Three products, one for each side of BEAT. New services will be announced on our News page when they are ready.'
                : '三個產品，各自對應會員、場館和商店。其他服務完成了，會在最新消息公告。'}
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'BEAT PASS', desc: isEn ? 'Membership across venues, online booking, and QR check-in.' : '跨場館會員卡、線上預約、手機 QR Code 入場。' },
              { title: 'BEAT Partner Portal', desc: isEn ? 'The venue backend for member check-in and daily operations.' : '場館端後台，處理會員入場核驗與日常營運。' },
              { title: isEn ? 'BEAT Shop' : 'BEAT 商店', desc: isEn ? 'Sports gear and everyday essentials. Coming soon.' : '運動用品與生活選物，籌備中。' }
            ].map((cap, idx) => (
              <div key={idx} className="subtle-interactive-card p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
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
                  ? 'The BEAT Shop is being prepared. It will sell sports apparel, training gear, and nutrition products.'
                  : 'BEAT 商店正在籌備，預計販售運動服飾、訓練用品與營養補給。'}
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
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Sports apparel' : '運動服飾'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Clothes you can train in and wear every day.' : '練完也能直接穿出門。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Training gear' : '訓練用品'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Equipment and accessories for everyday training.' : '日常訓練用得到的器材與配件。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Nutrition' : '營養補給'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Food and drinks for before and after a workout.' : '運動前後的營養補給與體能恢復。'}</div>
                  </div>
                  <div className="subtle-interactive-card p-4 bg-[#FAF9F6] border border-[#E5E5DF] hover:bg-white group cursor-default">
                    <div className="font-bold text-[#141413] group-hover:text-[#FF9F1C] mb-1 transition-colors">{isEn ? 'Brand collaborations' : '品牌聯名'}</div>
                    <div className="text-[#6C6C66]">{isEn ? 'Co-branded products with sports and lifestyle brands.' : '和運動或生活品牌合作的聯名商品。'}</div>
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
