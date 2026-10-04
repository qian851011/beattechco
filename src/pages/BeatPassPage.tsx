import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { BEAT_PASS_FAQS, VENUE_CATEGORIES } from '../data/content';
import { BeatLogo } from '../components/BeatLogo';
import {
  QrCode,
  Smartphone,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Coins,
  Flame,
  Dumbbell,
  Mountain,
  Activity,
  Waves,
  CalendarCheck,
  MessageSquare,
  Zap,
  ArrowRight
} from 'lucide-react';

interface BeatPassPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const BeatPassPage: React.FC<BeatPassPageProps> = ({ onNavigate, language }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('fitness');
  const isEn = language === 'en';

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Mountain': return <Mountain className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const currentCategoryObj = VENUE_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* 1. HERO */}
      <section className="border-b border-[#E5E5DF] pb-20 relative overflow-hidden bg-[#F7F7F5]">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FF9F1C]/15 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-[#E5E5DF] p-1.5 shadow-xs shrink-0 flex items-center justify-center">
                <BeatLogo variant="stacked" className="w-full h-full" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#FF9F1C]" />
                  <span>BEAT PASS OFFICIAL</span>
                  <span className="text-[#C4C4BC]">/</span>
                  <span>{isEn ? 'Flagship Sports Membership' : '比忒科技產品'}</span>
                </div>
                <div className="text-xs text-[#7A7A74] font-medium">
                  {isEn ? 'Official Brand Identity' : '官方運動生活會員標誌'}
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-6xl font-extrabold text-[#141413] tracking-tight leading-tight">
              Move Freely.
              <span className="block text-2xl sm:text-3xl font-medium text-[#5C5C58] mt-2">
                {isEn ? 'Movement is no longer bound to a single choice.' : '讓運動，不再只有一種選擇。'}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#6C6C66] leading-relaxed">
              {isEn
                ? 'BEAT PASS is our signature cross-venue movement pass. With a single digital membership, connect with diverse sports spaces and explore activities freely tailored to your lifestyle, interests, and fitness goals.'
                : 'BEAT PASS 是比忒科技打造的跨場域運動會員服務。透過單一數位憑證，串聯多元運動空間，讓使用者依照自己的生活節奏、興趣與訓練需求，探索運動的無限可能。'}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25"
              >
                {isEn ? 'Join the Movement' : '立即加入運動行列'}
              </button>
              <button
                onClick={() => onNavigate('partners')}
                className="px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#141413] transition-colors cursor-pointer shadow-2xs"
              >
                {isEn ? 'Partner as Venue' : '成為合作運動場館'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS BEAT PASS & 3. WHY BEAT PASS */}
      <section className="py-20 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                01 / WHAT IS BEAT PASS?
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
                {isEn ? 'Break Free from Single-Club Lock-In' : '打破單一會籍束縛，運動由你做主'}
              </h2>
              <p className="text-sm text-[#4A4A46] leading-relaxed">
                {isEn
                  ? 'Conventional fitness contracts often restrict members to a single facility and routine. But modern urban life is fluid: you might want strength training on Monday, yoga on Wednesday, and weekend bouldering or swimming.'
                  : '傳統健身合約往往將你綁定在特定單一地點與單一項目。但現代運動者的生活充滿變化：週一需要重訓喚醒活力，週三想用瑜伽舒緩身心，週末則渴望挑戰抱石或享受水適能。'}
              </p>
              <p className="text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'BEAT PASS is built for this modern rhythm. Powered by software, one pass opens doors to curated boutique spaces, making fitness truly align with your urban lifestyle.'
                  : 'BEAT PASS 正是為此而生。以科技賦能會員體驗，一個帳號即能穿梭各家精選特色場館，讓運動真正貼合你的生活動線。'}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-[#FAF9F6] border border-[#E5E5DF] space-y-6">
                <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                  02 / WHY BEAT PASS?
                </div>
                <h3 className="text-xl font-bold text-[#141413]">
                  {isEn ? 'Why Choose BEAT PASS?' : '為什麼選擇 BEAT PASS？'}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {isEn ? 'Ultimate Flexibility' : '極致彈性'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Plan schedules around your daily life and commute, with zero wasted annual fees.' : '依照生活與工作動線自由安排訓練日程，不再浪費未使用的會籍。'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {isEn ? 'Comprehensive Disciplines' : '全方位運動探索'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Fitness, yoga, climbing, Pilates, boxing, and swimming all under one pass.' : '重訓、攀岩、瑜伽、皮拉提斯、拳擊等多樣項目，一次滿足不同訓練需求。'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {isEn ? 'Instant Digital Check-In' : '極速數位核驗'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Scan your dynamic QR code for rapid, contactless access with zero paperwork.' : '手機出示 QR Code 即可快速入場，零接觸、不浪費寶貴運動時間。'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CROSS-VENUE EXPERIENCE (Interactive Explorer) */}
      <section className="py-20 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-2">
              03 / CROSS-VENUE EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
              {isEn ? 'Diverse Disciplines Unlocked with One Pass' : '多元運動領域，一次解鎖'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-2">
              {isEn ? 'Select a category to discover curated spaces covered by BEAT PASS:' : '點選不同領域，探索 BEAT PASS 涵蓋的多元運動生活型態：'}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {VENUE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF9F1C] text-[#141413] shadow-sm'
                      : 'bg-white/80 border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30'
                  }`}
                >
                  <div className={`mb-2 ${isSelected ? 'text-[#FF9F1C]' : 'text-[#8C8C85]'}`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div className="text-xs font-bold leading-tight">{isEn ? cat.nameEn : cat.name}</div>
                  <div className="text-[10px] text-[#8C8C85] mt-1">{cat.count}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Category Feature Display */}
          <div className="p-8 bg-white border border-[#E5E5DF] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-1">
                CATEGORY FOCUS
              </div>
              <h3 className="text-xl font-bold text-[#141413]">
                {isEn ? currentCategoryObj?.nameEn : currentCategoryObj?.name}
              </h3>
              <p className="text-xs text-[#6C6C66] mt-2 max-w-xl leading-relaxed">
                {isEn
                  ? 'BEAT PASS carefully curates top-rated urban spaces equipped with professional facilities and inviting training vibes for both beginners and enthusiasts.'
                  : 'BEAT PASS 精選都會區高評價專業場域，提供完整設施與自在訓練氛圍。無論是初學者入門還是資深愛好者精進，都能找到專屬舞台。'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#6C6C66] bg-[#FAF9F6] border border-[#E5E5DF] px-3 py-1.5">
                {isEn ? 'Curated Partner Network' : '優選風格場館'}
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Explore Nearby Venues' : '探索鄰近場館'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIGITAL PRODUCT SUITE: 4 KEY CAPABILITIES */}
      <section className="py-20 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-2">
              04 / DIGITAL EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
              {isEn ? 'Intuitive Digital Movement Living' : '極簡直覺的數位運動生活'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-2">
              {isEn
                ? 'From instant digital pass entry to real-time class booking and live alerts, tailored for modern urban fitness.'
                : '從憑證通行、線上課表預約到即時動態推播，全方位滿足現代都會運動節奏。'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Digital Membership */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-4 shadow-2xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-1">
                  04 / MEMBERSHIP
                </div>
                <h3 className="text-lg font-bold text-[#141413] mb-2">{isEn ? 'Digital Pass' : '數位會員憑證'}</h3>
                <p className="text-xs text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'No physical cards or tedious paperwork. Check your membership status, training history, and perks with a single tap.'
                    : '告別實體卡片與紙本手續。透過直覺介面，隨時查看個人運動檔案、會員資格與累積福利，隨身帶著走。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Phone is your universal key' : '✓ 手機即是通行證'}
              </div>
            </div>

            {/* Feature 2: QR Code Entry */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-4 shadow-2xs">
                  <QrCode className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-1">
                  05 / INSTANT ENTRY
                </div>
                <h3 className="text-lg font-bold text-[#141413] mb-2">{isEn ? 'Seamless QR Entry' : '即時 QR Code 入場'}</h3>
                <p className="text-xs text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Present your dynamic QR code for one-second scanning at venue desks or smart turnstiles. Zero waiting lines.'
                    : '抵達場館時，出示手機動態 QR Code 供櫃檯或閘門一秒掃描核銷即可輕鬆進場。流程零秒等待，運動隨時展開。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ 1-second rapid check-in' : '✓ 一秒極速核銷通關'}
              </div>
            </div>

            {/* Feature 3: Online Class Booking */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-4 shadow-2xs">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-1">
                  06 / CLASS BOOKING
                </div>
                <h3 className="text-lg font-bold text-[#141413] mb-2">{isEn ? 'Class Booking' : '預約課程'}</h3>
                <div className="text-xs font-semibold text-[#FF9F1C] mb-2">
                  {isEn ? 'Online Schedules at a Glance' : '線上預約一目了然'}
                </div>
                <p className="text-xs text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Unified schedules across venues! Instructor bios, live available spots, and dates are crystal clear to book in one click.'
                    : '跨場館課表全面整合！師資背景、剩餘名額與時間動態清清楚楚。隨時隨地預約心儀團課或教練時段，行程清晰不撞期。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Live spots & schedule at a glance' : '✓ 即時名額 · 課表一覽無遺'}
              </div>
            </div>

            {/* Feature 4: Instant Messaging */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E5DF] hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white border border-[#E5E5DF] flex items-center justify-center text-[#FF9F1C] mb-4 shadow-2xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-1">
                  07 / INSTANT UPDATES
                </div>
                <h3 className="text-lg font-bold text-[#141413] mb-2">{isEn ? 'Instant Messaging' : '即時訊息'}</h3>
                <div className="text-xs font-semibold text-[#FF9F1C] mb-2">
                  {isEn ? 'Live Updates in Real-Time' : '重要通知零時差掌握'}
                </div>
                <p className="text-xs text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Booking confirmations, warm pre-class reminders, and venue announcements pushed instantly. Never miss a schedule change.'
                    : '預約成功推播、課前暖心提醒、場館即時公告與專屬會員福利訊息不漏接。隨時掌握最新排程異動與專屬名額。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Pre-class reminders & live alerts' : '✓ 開課提醒與即時通知'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DETAILED ASSET GUIDE: "會員卡"、"點數"、"啾啾幣" 幹嘛用？在哪裡使用？ */}
      <section className="py-20 border-b border-[#E5E5DF] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>ECOSYSTEM ASSET GUIDE</span>
              <span className="text-[#C4C4BC]">·</span>
              <span>{isEn ? 'Pass, Credits & Rewards' : '核心憑證與回饋機制'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
              {isEn ? 'Member Pass, Pass Points & Chiu Chiu Coins' : '「會員卡」、「點數」與「啾啾幣」'}
            </h2>
            <p className="text-sm sm:text-base text-[#5C5C58] mt-2 font-medium">
              {isEn
                ? 'What are they for? Where to use them? Cleanly delineated to maximize value for every workout.'
                : '幹嘛用？在哪裡使用？三者分工明確，為每一次運動創造最大價值。'}
            </p>
          </div>

          {/* 3 Pillars Deep-Dive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Asset 1: 會員卡 */}
            <div className="bg-white border border-[#E5E5DF] p-8 shadow-sm hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0F0EB]">
                  <div className="w-12 h-12 bg-white border border-[#E5E5DF] p-1 shadow-2xs flex items-center justify-center">
                    <BeatLogo variant="icon" className="w-full h-full border-0" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF9F1C] font-semibold bg-[#FFF4E5] px-2 py-0.5">
                    PASS IDENTITY
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141413] mb-1">
                  {isEn ? '01. Digital Member Pass' : '01. 數位會員卡'}
                </h3>
                <div className="text-xs text-[#7A7A74] mb-6">BEAT PASS Universal Member Pass</div>

                <div className="space-y-4 text-xs text-[#4A4A46] leading-relaxed">
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      🎯 {isEn ? 'What is it for? (Core Purpose)' : '幹嘛用？（核心用途）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Universal identity verification and cross-venue entry credential. Ties to your member profile, validity, and anti-counterfeit dynamic code, completely replacing plastic cards.'
                        : '身分驗證與全生態運動通行證。綁定個人運動檔案、會員等級與防偽動態核銷碼，徹底告別傳統塑膠卡片與簽到紙本。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'All partner gyms, yoga studios, bouldering walls, and Pilates centers. Show your mobile QR code at front desks or turnstiles for instant entry.'
                        : '全台所有 BEAT PASS 合作場館。抵達健身房、瑜伽教室、抱石攀岩館或皮拉提斯館時，出示手機 QR Code 快速掃描核銷入場。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'Whenever arriving at any offline partner venue desk or smart gate.' : '到達任何合作場館櫃檯或感應閘門時。'}
              </div>
            </div>

            {/* Asset 2: 點數 */}
            <div className="bg-white border border-[#E5E5DF] p-8 shadow-sm hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0F0EB]">
                  <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E5E5DF] flex items-center justify-center text-[#141413]">
                    <Zap className="w-5 h-5 text-[#FF9F1C]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5C5C58] font-semibold bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E5DF]">
                    USAGE CREDITS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141413] mb-1">
                  {isEn ? '02. Pass Points / Credits' : '02. 運動點數'}
                </h3>
                <div className="text-xs text-[#7A7A74] mb-6">Pass Points / Credits</div>

                <div className="space-y-4 text-xs text-[#4A4A46] leading-relaxed">
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      🎯 {isEn ? 'What is it for? (Core Purpose)' : '幹嘛用？（核心用途）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Flexible credits deducted per session or class. Breaks free from expensive single-club monthly subscriptions, allowing you to pay strictly for what you book.'
                        : '彈性扣抵運動與課程額度。打破傳統高昂單一月費與長期綁約，依實際參與的運動領域與課程時段扣點，不浪費預算。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Deducted online when booking classes in BEAT PASS, including reformer Pilates, yoga classes, climbing sessions, or boutique gym entries.'
                        : '在 BEAT PASS 平台上「預約課程」時使用。包含團體運動課、器械皮拉提斯、抱石體驗、拳擊教練課或特約場地自由訓練。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'When browsing schedules on mobile and booking your next workout.' : '在手機上挑選課程、一鍵完成線上預約時。'}
              </div>
            </div>

            {/* Asset 3: 啾啾幣 */}
            <div className="bg-white border border-[#E5E5DF] p-8 shadow-sm hover:border-[#FF9F1C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0F0EB]">
                  <div className="w-10 h-10 bg-[#FFF8EE] border border-[#FFD9A8] flex items-center justify-center text-[#FF9F1C]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF9F1C] font-semibold bg-[#FFF4E5] px-2 py-0.5 border border-[#FF9F1C]/30">
                    REWARDS & PERKS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141413] mb-1">
                  {isEn ? '03. Chiu Chiu Coin' : '03. 啾啾幣'}
                </h3>
                <div className="text-xs text-[#7A7A74] mb-6">Chiu Chiu Coin (Proprietary Reward)</div>

                <div className="space-y-4 text-xs text-[#4A4A46] leading-relaxed">
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      🎯 {isEn ? 'What is it for? (Core Purpose)' : '幹嘛用？（核心用途）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Activity incentive and ecosystem rewards token! Earn coins by checking in, completing weekly challenges, or community milestones. Every drop of sweat has tangible value.'
                        : '運動獎勵與生態專屬回饋機制！運動不只是流汗，每一次入場訓練、達成每週目標或參與社群挑戰皆可賺幣，讓汗水留下真實價值。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Redeemable on BEAT Commerce for gear discounts, apparel vouchers, lifestyle brand perks, or membership renewal benefits.'
                        : '在 BEAT Commerce 運動生活商城兌換專業運動裝備折抵、機能服飾折扣券、合作生活品牌專屬好禮，或於續約享有專屬優惠。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'Treating yourself to new apparel or gear on BEAT Commerce.' : '運動累積獎勵後，在商城折抵裝備或兌換好康時。'}
              </div>
            </div>
          </div>

          {/* Marketing Campaign Banner: 加入我們送 100 啾啾幣、抽 100 點 */}
          <div className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF8EE] border-2 border-[#FFD9A8] p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F1C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider bg-[#FFF4E5] border border-[#FF9F1C]/30 px-3 py-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEn ? 'LIMITED WELCOME OFFER' : 'LIMITED WELCOME OFFER · 新手專屬限時禮遇'}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight leading-snug">
                  {isEn
                    ? 'Join Us Today: Get 100 Chiu Chiu Coins + Chance to Win 100 Pass Points!'
                    : '加入我們送「100 啾啾幣」，再享「抽 100 點」！'}
                </h3>

                <p className="text-sm text-[#5C5C58] leading-relaxed">
                  {isEn
                    ? 'Elevate your fitness lifestyle. Join BEAT PASS now to unlock welcome gifts and enjoy tangible rewards for every workout.'
                    : '開啟你的全方位運動生活。現在加入 BEAT PASS 會員，立刻獲得專屬起點禮遇，讓每一次進場運動都有滿滿驚喜與實質回饋。'}
                </p>

                {/* 2 Reward Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white border border-[#E5E5DF] shadow-2xs flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#FFF4E5] border border-[#FF9F1C]/40 flex items-center justify-center text-[#FF9F1C] shrink-0">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#141413]">{isEn ? 'Instant 100 Coins' : '現贈 100 啾啾幣'}</div>
                      <div className="text-xs text-[#7A7A74] mt-0.5">
                        {isEn
                          ? 'Granted upon signup, redeemable for discounts on gear and partner perks in BEAT Commerce.'
                          : '註冊即領，可在 BEAT Commerce 商城直接折抵運動裝備與合作品牌好禮。'}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E5DF] shadow-2xs flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#FAF9F6] border border-[#E5E5DF] flex items-center justify-center text-[#141413] shrink-0">
                      <Zap className="w-5 h-5 text-[#FF9F1C]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#141413]">{isEn ? 'Draw: 100 Pass Points' : '加碼抽 100 運動點數'}</div>
                      <div className="text-xs text-[#7A7A74] mt-0.5">
                        {isEn
                          ? 'Automatic entry to win 100 points for booking top-tier group classes and training across venues.'
                          : '全台熱門場館團課、皮拉提斯、抱石體驗隨選隨約，運動自由度拉滿。'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25 flex items-center gap-2"
                >
                  <span>{isEn ? 'Claim Welcome Offer' : '立即加入領取專屬禮遇'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-[#8C8C85]">
                  {isEn ? '* Valid for new activations · Applicable across ecosystem' : '* 新開通會員適用 · 點數與啾啾幣即刻適用於全生態'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
              {isEn ? 'Frequently Asked Questions' : '常見問題與解答'}
            </h2>
            <p className="text-xs text-[#6C6C66] mt-2">
              {isEn
                ? 'Everything you need to know about BEAT PASS, pass points, and digital booking.'
                : '關於 BEAT PASS、會員卡、預約課程與會員權益的完整說明'}
            </p>
          </div>

          <div className="space-y-4">
            {BEAT_PASS_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E5E5DF] bg-[#FAF9F6] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#141413]">
                      {isEn ? faq.questionEn : faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C8C85] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#FF9F1C]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C5C58] leading-relaxed border-t border-[#E5E5DF] pt-3 bg-white">
                      {isEn ? faq.answerEn : faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="py-20 text-center bg-[#F2F1EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
            {isEn ? 'Ready to Elevate Your Movement Rhythm?' : '準備好展開屬於你的全新運動節奏？'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6C6C66] max-w-xl mx-auto">
            {isEn
              ? 'Join BEAT PASS and explore urban movement without bounds.'
              : '加入 BEAT PASS，與數百位運動者一起探索城市中無限運動精彩。'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25"
            >
              {isEn ? 'Get Started' : '立即預約洽詢'}
            </button>
            <button
              onClick={() => onNavigate('partners')}
              className="px-8 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#141413] transition-colors cursor-pointer shadow-2xs"
            >
              {isEn ? 'Partner With Us' : '場館夥伴加入合作'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
