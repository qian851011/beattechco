import React, { useEffect, useState } from 'react';
import { PageId, Language, CollaborationType } from '../types';
import { HowItWorksFlow } from '../components/HowItWorksFlow';
import {
  VenueFeatures,
  VenueBenefits,
  VenueConcerns,
  VenuePlans,
  VenueExtraIncome,
  VenueSteps,
  VenueFaqAccordion,
  VenueInquiry,
} from '../components/VenueSections';
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
  onNavigate: (page: PageId, defaultCollaborationType?: CollaborationType) => void;
  language: Language;
}

export const BeatPassPage: React.FC<BeatPassPageProps> = ({ onNavigate, language }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('fitness');
  const isEn = language === 'en';

  // 「用戶」／「場館」分頁；網址加 #venues 可以直接打開場館分頁
  type Audience = 'members' | 'venues';
  const [audience, setAudience] = useState<Audience>('members');
  useEffect(() => {
    if (window.location.hash === '#venues') setAudience('venues');
  }, []);
  const switchAudience = (a: Audience, scroll = false) => {
    setAudience(a);
    try {
      window.history.replaceState(null, '', a === 'venues' ? '#venues' : window.location.pathname);
    } catch {
      /* 不影響切換 */
    }
    if (scroll) document.getElementById('audience-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                  <span>{isEn ? 'A BEAT Technology Product' : '比忒科技產品'}</span>
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
                ? 'BEAT PASS is BEAT Technology’s cross-venue membership. One digital member card gets you into different kinds of sports venues, so you can pick by your schedule and what you feel like doing.'
                : 'BEAT PASS 是比忒科技的跨場館會員服務。一張數位會員卡，可以去不同類型的運動場館，依自己的時間和興趣選。'}
            </p>
          </div>
        </div>
      </section>

      {/* 分頁：用戶／場館 */}
      <div id="audience-tabs" className="sticky top-[68px] z-30 bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-[#E5E5DF] scroll-mt-[68px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-label={isEn ? 'BEAT PASS for' : 'BEAT PASS 給誰'} className="flex justify-center">
            {([
              ['members', isEn ? 'For Members' : '用戶'],
              ['venues', isEn ? 'For Venues' : '場館'],
            ] as [Audience, string][]).map(([key, label]) => {
              const on = audience === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={on}
                  onClick={() => switchAudience(key)}
                  className={`flex-1 sm:flex-none sm:min-w-[160px] px-6 py-4 text-sm sm:text-base font-bold border-b-2 transition-colors cursor-pointer ${
                    on ? 'text-[#141413] border-[#FF9F1C]' : 'text-[#8C8C85] border-transparent hover:text-[#141413]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== 用戶 ===== */}
      <div role="tabpanel" hidden={audience !== 'members'}>
      {/* 2. WHAT IS BEAT PASS & 3. WHY BEAT PASS */}
      <section className="py-20 border-b border-[#E5E5DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                01 / WHAT IS BEAT PASS?
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141413]">
                {isEn ? 'One Membership, More Than One Venue' : '一個會員，不只一間場館'}
              </h2>
              <p className="text-sm text-[#4A4A46] leading-relaxed">
                {isEn
                  ? 'A typical gym contract ties you to one location and one kind of workout. But you might want weights on Monday, yoga on Wednesday, and bouldering on the weekend.'
                  : '一般健身房合約會把你綁在一個地點、一種運動。但你可能週一想重訓、週三做瑜伽、週末想試試抱石。'}
              </p>
              <p className="text-sm text-[#6C6C66] leading-relaxed">
                {isEn
                  ? 'That is why we made BEAT PASS: one account for many venues, so you can work out wherever fits your day.'
                  : '所以我們做了 BEAT PASS：一個帳號就能去不同場館，在哪裡方便就在哪裡運動。'}
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
                        {isEn ? 'No Lock-In' : '不用綁約'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Train on your own schedule, without an annual contract you never use up.' : '照自己的行程安排，不會有用不完的年約。'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {isEn ? 'Different Workouts' : '不同運動'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Yoga, bouldering, Pilates and conditioning, all with the same member card.' : '瑜伽、抱石、皮拉提斯、體能訓練，用同一張會員卡。'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {isEn ? 'QR Code Entry' : 'QR Code 入場'}
                      </div>
                      <div className="text-xs text-[#6C6C66] mt-0.5">
                        {isEn ? 'Show the QR code on your phone at the front desk to get in.' : '在櫃檯出示手機 QR Code 就能入場。'}
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
              {isEn ? 'Venue Types' : '場館類型'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-2">
              {isEn ? 'Pick a type to see which venues are on BEAT PASS:' : '點選類型，看看 BEAT PASS 有哪些場館：'}
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
                  ? 'Partner venues are currently in Taipei and New Taipei, with more being added. Each venue’s open areas and time slots are listed in the app.'
                  : '目前合作場館在雙北，持續增加中。每間場館開放的空間與時段，會標示在 App 裡。'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#6C6C66] bg-[#FAF9F6] border border-[#E5E5DF] px-3 py-1.5">
                {isEn ? 'Partner Venues' : '合作場館'}
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Find Venues Near You' : '找附近的場館'}
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
              {isEn ? 'How It Works' : '怎麼使用'}
            </h2>
            <p className="text-sm text-[#6C6C66] mt-2">
              {isEn
                ? 'Your member card, class booking and notifications are all in the app.'
                : '會員卡、線上預約、通知，都在 App 裡。'}
            </p>
          </div>

          <HowItWorksFlow isEn={isEn} />

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
                    ? 'No physical card. Your membership, expiry date and rewards are all in the app.'
                    : '不用實體卡。會員資格、到期日和回饋，都在 App 裡查得到。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Your phone is your member card' : '✓ 手機就是會員卡'}
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
                    ? 'At the venue, show the dynamic QR code on your phone and the front desk scans you in.'
                    : '到了場館，出示手機上的動態 QR Code，櫃檯掃一下就能進場。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Scan and go' : '✓ 掃了就進'}
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
                    ? 'See class schedules, instructors and open spots across venues, and book right in the app.'
                    : '不同場館的課表、老師和剩餘名額都看得到，直接在 App 預約。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Open spots & schedules' : '✓ 名額與課表'}
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
                  {isEn ? 'Notifications' : '通知'}
                </div>
                <p className="text-xs text-[#6C6C66] leading-relaxed">
                  {isEn
                    ? 'Booking confirmations, pre-class reminders and venue announcements.'
                    : '預約成功、上課前提醒，以及場館公告。'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E5DF]/60 text-[11px] font-medium text-[#FF9F1C]">
                {isEn ? '✓ Reminders & announcements' : '✓ 提醒與公告'}
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
                ? 'What each one is and where you use it.'
                : '三種各是什麼、在哪裡用。'}
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
                        ? 'Your membership. Use the dynamic QR code to enter partner venues.'
                        : '你的會員資格。用動態 QR Code 進出合作場館。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'At BEAT PASS partner venues. Show the QR code on your phone at the front desk.'
                        : '在 BEAT PASS 合作場館，到櫃檯出示手機 QR Code。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'When you arrive at a partner venue.' : '到了合作場館的時候。'}
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
                        ? 'Points come with a class plan. The number of points each class uses is shown before you book.'
                        : '點數來自上課服務方案。每堂課要用幾點，預約前就會標示。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Used when booking classes on BEAT PASS, such as group classes, reformer Pilates or bouldering sessions.'
                        : '在 BEAT PASS 預約課程時使用，例如團體課、器械皮拉提斯、抱石體驗等。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'When you book a class.' : '預約課程的時候。'}
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
                        ? 'A free reward. You get Chiu Chiu Coins when you buy a plan or join events. They can’t be bought or exchanged for cash.'
                        : '免費的回饋。購買方案或參加活動時可以拿到啾啾幣，不能用錢買，也不能換現金。'}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E5DF]">
                    <span className="font-bold text-[#141413] block mb-1 text-xs">
                      📍 {isEn ? 'Where is it used? (Applicable Spaces)' : '在哪裡使用？（適用場景）'}
                    </span>
                    <span className="text-[#5C5C58]">
                      {isEn
                        ? 'Redeem for coupons and events announced in the app. Once the BEAT Shop opens, you can use them there too.'
                        : '可兌換 App 公告的優惠券與活動；BEAT 商店開幕後，也能在商店使用。'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EB] text-[11px] text-[#7A7A74]">
                <strong>{isEn ? 'When to use: ' : '使用時機：'}</strong>
                {isEn ? 'When redeeming offers announced in the app.' : '兌換 App 公告的優惠時。'}
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
                  <span>{isEn ? 'New Member Offer' : '新會員優惠'}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#141413] tracking-tight leading-snug">
                  {isEn
                    ? 'Join Us Today: Get 100 Chiu Chiu Coins + Chance to Win 100 Pass Points!'
                    : '加入我們送「100 啾啾幣」，再享「抽 100 點」！'}
                </h3>

                <p className="text-sm text-[#5C5C58] leading-relaxed">
                  {isEn
                    ? 'New BEAT PASS members can claim the offers below. Full terms are in the app.'
                    : '新加入 BEAT PASS 的會員可以領取以下優惠，詳細規則以 App 公告為準。'}
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
                          ? 'Given after you sign up; redeem for offers announced in the app.'
                          : '註冊後發放，可兌換 App 公告的優惠。'}
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
                          ? 'Points can be used to book classes at partner venues, such as Pilates or bouldering.'
                          : '點數可用來預約合作場館的課程，例如皮拉提斯、抱石體驗。'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
                <a
                  href="https://beatpasstw.com/app/"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25 flex items-center gap-2"
                >
                  <span>{isEn ? 'Join & Claim Offer' : '加入並領取優惠'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-[#8C8C85]">
                  {isEn ? '* New members only. Full terms in the app.' : '* 限新會員，完整規則以 App 公告為準'}
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
            {isEn ? 'Want to Give It a Try?' : '想試試看嗎？'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6C6C66] max-w-xl mx-auto">
            {isEn
              ? 'Join BEAT PASS and book your first session.'
              : '加入 BEAT PASS，預約你的第一次。'}
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

      {/* ===== 場館 ===== */}
      <div role="tabpanel" hidden={audience !== 'venues'}>
        <VenueFeatures isEn={isEn} />
        <VenueBenefits isEn={isEn} />
        <VenueConcerns isEn={isEn} />
        <VenuePlans isEn={isEn} />
        <VenueExtraIncome isEn={isEn} />
        <VenueSteps isEn={isEn} />
        <VenueInquiry isEn={isEn} withStory onContact={() => onNavigate('contact', 'BEAT PASS 場館合作')} />
        <VenueFaqAccordion isEn={isEn} />
      </div>
    </div>
  );
};
