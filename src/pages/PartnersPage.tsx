import React from 'react';
import { PageId, Language, CollaborationType } from '../types';
import { ArrowRight, Store, Building2, Cpu } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId, defaultCollaborationType?: CollaborationType) => void;
  language: Language;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* 25 | PARTNERS HERO */}
      <section className="border-b border-[#E5E5DF] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span>PARTNERSHIP NETWORK</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'Partnership Network' : '合作夥伴'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
              Build With BEAT.
              <span className="block text-2xl sm:text-3xl font-medium text-[#5C5C58] mt-2">
                {isEn ? 'Shape the Future of Movement Together.' : '與 BEAT，一起創造更多可能。'}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed pt-2">
              {isEn
                ? 'At BEAT Technology, we believe sustainable business value stems from trust and open collaboration. We invite sports venues, lifestyle brands, enterprises, and tech pioneers to co-create the next chapter of healthy urban living.'
                : '比忒科技深信永續的商業價值源自緊密而互信的生態合作。我們誠摯邀請運動場館、生活品牌、企業雇主與科技先鋒，一同開創健康運動生活的嶄新篇章。'}
            </p>
          </div>
        </div>
      </section>

      {/* 3 CORE PARTNER TRACKS */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* TRACK 1: VENUE PARTNERSHIP */}
          <div className="p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-2">
              <Store className="w-4 h-4 text-[#FF9F1C]" />
              <span>VENUE PARTNERSHIP</span>
              <span className="text-[#C4C4BC]">·</span>
              <span>{isEn ? 'Sports Venue Network' : '運動場館合作'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
              {isEn ? 'Empowering Spaces to Be Seen and Celebrated.' : '讓場館被更多人看見。'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'We assist independent sports spaces in reaching a vast, high-quality urban audience, supported by intuitive digital verification tools so operators can focus wholeheartedly on coaching excellence and space atmosphere.'
                : '協助獨立風格運動空間觸及龐大的都會運動族群，並以直覺數位核驗工具輔助日常運作，讓經營者無後顧之憂專注於空間氛圍與教學品質。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'New Customer Exposure' : '新客源接觸 (New Customers)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Attract premium urban movers seeking diverse, flexible fitness options into your doors.' : '吸引尋求多樣化運動日常的高品質都會會員走進場館。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Frictionless Digital Tools' : '極簡數位管理 (Digital Tools)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'One-second QR code scanning eliminates manual logs and administrative friction.' : '專屬快速 QR Code 核驗工具，一秒完成核驗，免去人工作業繁雜。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Enhanced Brand Prominence' : '品牌高度曝光 (Brand Exposure)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Showcase venue distinctive personality across BEAT web, app platforms, and editorial features.' : '在 BEAT 官網、會員平台及社群專題中深度呈現場館特色。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Operational Data Insights' : '營運數據洞察 (Data Insight)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Understand hourly visitor flows and demographics to optimize operating hours and classes.' : '掌握客群時段動態與使用樣貌，輔助經營方針優化。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Co-Branded Marketing' : '主題行銷合作 (Marketing Support)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Participate in network-wide fitness challenges, pop-ups, and brand promotions.' : '參與生態系聯合策劃、運動挑戰與風格品牌推廣企劃。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Long-term Ecosystem Synergies' : '生態長期拓展 (Ecosystem Growth)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Share in future commerce, corporate wellness packages, and loyalty perks.' : '共享比忒科技未來產品、電商周邊與企業福利資源。'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact', 'BEAT PASS 場館合作')}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
            >
              <span>{isEn ? 'Inquire Venue Partnership' : '場館合作洽詢'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* TRACK 2: BRAND PARTNERSHIP */}
          <div className="p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-[#5C5C58]" />
              <span>BRAND PARTNERSHIP</span>
              <span className="text-[#C4C4BC]">·</span>
              <span>{isEn ? 'Brand & Enterprise Collaborations' : '品牌與企業合作'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
              {isEn ? 'Connecting Active Lifestyles with New Consumers.' : '連結運動生活與新消費者。'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'Fitness communities represent the most energetic and loyal consumer group. We partner with performance gear, clean nutrition, and forward-looking brands to integrate brand value with every workout breakthrough.'
                : '運動社群是最具活力與高忠誠度的消費者群體。我們與運動裝備、健康飲食、時尚生活品牌及創新企業展開跨界聯乘，將品牌價值深植於運動者的每一次自我挑戰中。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Targeted Active Audience' : '精準運動客群 (Audience Target)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Direct access to health-conscious urbanites who prioritize vitality and quality.' : '直達重視健康、追求生活風格的活躍都會客群。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Integrated Campaigns' : '整合聯名企劃 (Campaign Collab)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Curate immersive pop-ups, experiential launches, or co-branded gear releases.' : '結合專屬體驗活動、快閃策展或聯名運動商品。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Commerce Channels' : '電商選品合作 (Commerce Channel)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Spotlight your products directly within the BEAT Commerce ecosystem.' : '在 BEAT Commerce 生態中展現品牌機能選品。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Corporate Wellness Programs' : '企業員工活力方案 (Corporate Wellness)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Customized fitness benefits for forward-thinking corporate employers.' : '為頂尖企業提供客製化運動健康福利方案。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Authentic Content Co-Creation' : '內容共創宣傳 (Content Creation)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Interviews, visual stories, and community narratives conveying authentic warmth.' : '專訪、影像與深度生活故事共創，傳遞深刻品牌溫度。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Chiu Chiu Coin Integration' : '多元權益互惠 (Mutual Benefits)'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Link rewards tokens with member perks to drive high engagement.' : '整合「啾啾幣」與專屬會員福利，提升互動黏著度。'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact', '品牌合作')}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
            >
              <span>{isEn ? 'Inquire Brand Partnership' : '品牌合作洽詢'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* TRACK 3: TECHNOLOGY PARTNERSHIP */}
          <div className="p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm relative">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5C5C58] font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-[#5C5C58]" />
              <span>TECHNOLOGY PARTNERSHIP</span>
              <span className="text-[#C4C4BC]">·</span>
              <span>{isEn ? 'Technology Collaboration' : '技術合作'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
              {isEn ? 'Building Next-Generation Digital Products Together.' : '一起打造下一個數位產品。'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'Focusing on SaaS solutions, cloud software engineering, and sports industry modernization. We welcome software partners, SaaS creators, and tech innovators to co-develop cutting-edge digital experiences.'
                : '以 SaaS 雲端服務、科技軟體研發與運動產業升級創新為核心。我們持續深耕數位產品開發與高可用性架構，歡迎軟體夥伴、SaaS 團隊與產業先鋒攜手推進產業數位優化。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Venue SaaS Solutions' : '場館 SaaS 雲端服務'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Modular venue management SaaS, lightweight check-in, and automated member lifecycle workflows.' : '模組化運動空間管理 SaaS、輕量核驗系統與會員生命週期自動化管理。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Software R&D & Architecture' : '科技軟體研發與架構'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'High-concurrency microservices, robust cloud infrastructure, and low-latency digital token verification.' : '高併發微服務架構、高可用雲端系統與極低延遲數位憑證核銷核心技術研發。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Industry Digital Modernization' : '傳統產業數位優化'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Transforming legacy pen-and-paper or rigid gym software into modern frictionless consumer journeys.' : '協助傳統運動空間擺脫繁瑣紙本與封閉老舊系統，重塑流暢的現代化數位營運流程。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Open API & System Sync' : '開放 API 與標準串接'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Standardized developer endpoints for seamless ticketing, booking, ERP, and payment gateway sync.' : '提供開放且標準化的 REST API，支援票務預約、ERP 及第三方金流快速無縫對接。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Data Analytics & Insight Engine' : '營運數據與分析引擎'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Real-time mover traffic dashboards, retention analytics, and data-driven business intelligence.' : '人流熱區即時視覺化看板、留存率深度分析與數據驅動的精準商業決策輔助。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Innovative Digital Co-Creation' : '創新數位產品共創'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Co-incubating next-gen fitness tech, corporate wellness SaaS, and new commercial models.' : '攜手科技團隊與產業先驅，共同孵化次世代運動健康科技應用與跨界商業生態。'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact', '技術合作')}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
            >
              <span>{isEn ? 'Inquire Tech Collaboration' : '技術合作洽詢'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
