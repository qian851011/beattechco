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
      {/* PARTNERS HERO */}
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
                {isEn ? 'Work with BEAT.' : '與 BEAT 合作'}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed pt-2">
              {isEn
                ? 'We work with three kinds of partners: sports venues, brands and companies, and tech teams. Pick the one that fits you below.'
                : '我們和三種夥伴合作：運動場館、品牌與企業、技術團隊。找到適合你的那一種，直接聯絡我們。'}
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
              {isEn ? 'For sports venues' : '給運動場館'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'BEAT PASS members find your venue, book, and check in with a QR code. Under NT$500 a month; the first 100 partner venues pay no monthly fee.'
                : 'BEAT PASS 會員找到你的場館、預約、用 QR Code 入場。每月不到 500 元，前 100 家合作場館免月費。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'New visitors' : '新客人'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Members who want to try different workouts can find and book your venue.' : '想嘗試不同運動的會員，可以找到並預約你的場館。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'QR check-in' : 'QR Code 入場'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Scan the member’s phone at the front desk. No paper sign-in.' : '櫃檯掃會員手機上的 QR Code，不用紙本簽到。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Venue listing' : '場館介紹'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Your venue gets a listing in BEAT PASS and on our websites.' : '場館會有自己的介紹，出現在 BEAT PASS 和我們的網站上。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Venue backend' : '場館後台'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'See BEAT PASS check-ins and bookings in BEAT Partner Portal.' : '在 BEAT Partner Portal 查看 BEAT PASS 會員的入場與預約紀錄。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Joint events' : '一起辦活動'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Join trial classes and fitness challenges we run from time to time.' : '參加我們不定期舉辦的體驗課與運動挑戰。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Clear terms' : '條件寫清楚'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Fees, capacity, and settlement are set out in a written venue contract.' : '費用、名額與結算方式，都寫在場館合作契約裡。'}
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
              {isEn ? 'For brands and companies' : '給品牌與企業'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'If your brand makes sportswear, gear, nutrition, or wellness products, or your company wants a fitness benefit for employees, we would like to talk.'
                : '如果你的品牌做運動服飾、裝備、營養補給，或你的公司想提供員工運動福利，歡迎跟我們聊。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Reach members' : '接觸會員'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Reach people who already exercise regularly.' : '接觸到本來就有固定運動習慣的人。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Events' : '活動合作'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Trial events, pop-ups, or co-branded products.' : '體驗活動、快閃或聯名商品。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Sell in BEAT Shop' : '上架 BEAT 商店'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Sell your products in the BEAT Shop (coming soon).' : '在 BEAT 商店販售你的商品（籌備中）。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Employee benefits' : '員工福利'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'BEAT PASS memberships as an employee fitness benefit.' : '以 BEAT PASS 會員作為員工運動福利。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Content' : '內容合作'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Interviews and articles on our websites and social channels.' : '在我們的網站與社群做專訪或文章。'}
                </div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1">
                  {isEn ? 'Member rewards' : '會員回饋'}
                </div>
                <div className="text-[#6C6C66]">
                  {isEn ? 'Offer perks that members can redeem with Chiu Chiu Coins.' : '提供會員可用「啾啾幣」兌換的優惠。'}
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
              {isEn ? 'For tech teams' : '給技術團隊'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn
                ? 'If you build software for gyms or studios and want to connect with BEAT PASS, or have an idea to build with us, get in touch.'
                : '如果你在做場館相關的軟體、想和 BEAT PASS 串接，或有想一起開發的點子，歡迎聯絡。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-[#4A4A46]">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Venue backend' : '場館後台'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'BEAT Partner Portal handles QR check-in for BEAT PASS members.' : 'BEAT Partner Portal 處理 BEAT PASS 會員的 QR Code 入場核驗。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Our own software' : '自己開發'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'We build and run the member app, venue backend, and websites ourselves.' : '會員 App、場館後台與網站，都由我們自己開發與維運。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Going paperless' : '少用紙本'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Help venues move check-in and booking off paper.' : '協助場館把入場、預約從紙本改成線上。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'System integration (planned)' : '系統串接（規劃中）'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Planned: connecting BEAT PASS with venues’ existing booking systems.' : '規劃中：與場館現有的預約系統串接。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Reports (planned)' : '營運報表（規劃中）'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Planned: visit reports for partner venues.' : '規劃中：提供合作場館來客報表。'}
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C]/40 transition-colors">
                <div className="font-bold text-[#141413] text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF9F1C]" />
                  <span>{isEn ? 'Build together' : '一起開發'}</span>
                </div>
                <div className="text-[#6C6C66] leading-relaxed">
                  {isEn ? 'Have an idea for a sports or wellness product? Tell us.' : '有運動或健康相關的產品點子，歡迎來談。'}
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
