import React from 'react';
import { PageId, Language, CollaborationType } from '../types';
import { ArrowRight, QrCode, CalendarCheck, LayoutDashboard, BarChart3 } from 'lucide-react';

interface VenueSystemPageProps {
  onNavigate: (page: PageId, defaultCollaborationType?: CollaborationType) => void;
  language: Language;
}

// 場館管理系統頁：方案、分潤與規則依場館合作契約（2026-11-11 版）。
export const VenueSystemPage: React.FC<VenueSystemPageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  const features = [
    {
      icon: QrCode,
      title: isEn ? 'QR Code Check-in' : 'QR Code 數位核驗入場',
      desc: isEn
        ? 'Members show a dynamic QR code on their phone; the front desk or gate scans it in one second. No paper sign-in sheets or manual logs.'
        : '會員抵達場館時出示手機動態 QR Code，櫃檯或閘門一秒掃描核銷即可入場，免去紙本簽到與人工登記。',
    },
    {
      icon: CalendarCheck,
      title: isEn ? 'Online Class Booking' : '線上課程預約',
      desc: isEn
        ? 'Your schedule, coaches and real-time open seats appear on BEAT PASS. Members book group classes, coaching sessions or open training in one tap, with booking confirmations, reminders and change notices sent automatically.'
        : '場館課表、師資與即時剩餘名額呈現在 BEAT PASS 上，會員可線上一鍵預約團體課、教練課或自由訓練時段；系統發送預約確認、課前提醒與場館臨時變動通知。',
    },
    {
      icon: LayoutDashboard,
      title: isEn ? 'Venue Backend: BEAT Partner Portal' : '場館後台 BEAT Partner Portal',
      desc: isEn
        ? 'Partner venues use a dedicated backend, BEAT Partner Portal, to handle BEAT PASS member check-ins and day-to-day operations.'
        : '合作場館使用專屬的場館端後台 BEAT Partner Portal，處理 BEAT PASS 會員的入場核驗與日常營運事務。',
    },
    {
      icon: BarChart3,
      title: isEn ? 'Operational Data Insights' : '營運數據洞察',
      desc: isEn
        ? 'Understand hourly visitor flows and usage patterns to inform operating hours, class planning and business decisions.'
        : '協助場館掌握客群時段動態與使用樣貌，以數據為基礎輔助營業時段、課程安排與經營決策。',
    },
  ];

  const benefits = [
    {
      title: isEn ? 'New Customer Exposure' : '新客源接觸',
      desc: isEn ? 'Reach urban movers looking for diverse, flexible fitness options.' : '連結尋求多樣化運動日常的都會運動族群，讓更多人走進您的場域。',
    },
    {
      title: isEn ? 'Frictionless Digital Tools' : '極簡數位管理',
      desc: isEn ? 'Fast QR code verification reduces front-desk and admin workload.' : '快速 QR Code 核驗工具，降低櫃檯與行政溝通負擔。',
    },
    {
      title: isEn ? 'Brand Exposure' : '品牌曝光',
      desc: isEn ? 'Showcase your venue across BEAT web, member platform and editorial features.' : '在 BEAT 官網、會員平台與社群專題中呈現場館特色。',
    },
    {
      title: isEn ? 'Co-Branded Marketing' : '主題行銷合作',
      desc: isEn ? 'Join ecosystem campaigns, fitness challenges and brand promotions.' : '參與 BEAT 生態系聯合企劃、運動挑戰與品牌推廣。',
    },
    {
      title: isEn ? 'Long-term Ecosystem Growth' : '長期生態拓展',
      desc: isEn ? 'Share in future BEAT Technology products, commerce and corporate wellness resources.' : '共享比忒科技未來產品、電商周邊與企業福利資源。',
    },
  ];

  // 合作方案、分潤與規則：內容依《BEAT PASS 跨場館共享平台合作契約書》（2026-11-11 版）
  const plans = [
    {
      tag: isEn ? 'Plan A' : 'A 方案',
      name: isEn ? 'Monthly' : '月繳方案',
      price: 'NT$499',
      unit: isEn ? '/ month' : '/ 月',
      note: isEn ? 'Tax included. 1-month term, renews monthly.' : '含稅。合約期 1 個月，按月續約。',
      points: isEn
        ? ['Good for trying BEAT PASS first', 'Cancel any time; ends at the close of the current month', 'No early-termination fee']
        : ['適合先試試看的場館', '隨時可提出終止，當月結束後生效', '不收違約金'],
    },
    {
      tag: isEn ? 'Plan B' : 'B 方案',
      name: isEn ? 'Annual' : '一年約方案',
      price: 'NT$5,599',
      unit: isEn ? '/ year' : '/ 年',
      note: isEn ? 'Tax included. 12-month term, paid in 12 monthly instalments (about NT$467/month).' : '含稅。合約期 12 個月，分 12 期按月扣款（每月約 467 元）。',
      points: isEn
        ? ['About NT$389 less per year than Plan A', 'Cancel any time; remaining instalments stop', 'No early-termination fee']
        : ['一年比 A 方案省約 389 元', '隨時可提出終止，之後的分期不再扣款', '不收違約金'],
    },
  ];

  const included = isEn
    ? ['Venue listing in the BEAT PASS app and on our websites', 'QR code check-in and online class booking', 'BEAT Partner Portal: daily check-ins, class bookings, earnings and settlement details', 'Member support handled by BEAT (accounts, orders, refunds)', 'Platform marketing and campaigns']
    : ['場館介紹頁，出現在 BEAT PASS App 與我們的網站', 'QR Code 入場與線上課程預約', 'BEAT Partner Portal 後台：每日進場人次、課程預約、收入與結算明細', '會員的帳號、訂單、退費等客服由 BEAT 處理', '平台行銷與活動推廣'];

  const revenue = [
    {
      title: isEn ? 'Member card (Space Pass)' : '會員卡（Space Pass）',
      share: isEn ? 'Venue gets 80%' : '場館分得 80%',
      desc: isEn
        ? 'Each member card lasts 30 days. When it ends, 80% of what the member actually paid is split among the venues they visited, by number of valid check-ins. The 20% platform fee already includes payment processing; nothing else is deducted.'
        : '每張會員卡效期 30 天。效期結束後，會員實際支付金額的 80%，依會員在各場館的有效進場次數比例分給場館。平台的 20% 已包含金流手續費，不會再另外扣。',
      example: isEn
        ? 'Example (illustrative figures): a member pays NT$1,000 and checks in 10 times in 30 days, 4 of them at your venue → 1,000 × 80% × 4/10 = NT$320.'
        : '例（數字為舉例）：會員付 1,000 元，30 天內進場 10 次，其中 4 次在你的場館 → 1,000 × 80% × 4/10 ＝ 320 元。',
    },
    {
      title: isEn ? 'Classes booked with points or class passes' : '用點數或堂課券預約的課程',
      share: isEn ? 'Commission 0–5%' : '抽成 0～5%',
      desc: isEn
        ? 'Group classes and private coaching are not included in the member card. When a member books your class with points, you receive the class value minus 5% business tax, the payment-processing fee, and an agreed commission of 0–5%. Points needed per class are agreed with you and shown in the app.'
        : '團體課、私人教練課不包含在會員卡內。會員用點數預約你的課程時，場館拿到的是課程金額扣除 5% 營業稅、金流手續費，再扣除雙方議定的 0～5% 抽成。每堂課要幾點，由雙方約定並公告在 App。',
      example: isEn
        ? 'Classes cancelled in time (2 hours before group classes, 3 hours before private sessions) are not settled and points go back to the member.'
        : '會員在期限前取消（團體課開課前 2 小時、私人教練課前 3 小時）不結算，點數退回會員。',
    },
    {
      title: isEn ? 'Late cancellations & no-shows' : '逾時取消與未到',
      share: isEn ? 'Venue 35% / BEAT 65%' : '場館 35%／BEAT 65%',
      desc: isEn
        ? 'You decide whether points are refunded for late cancellations and no-shows, and post the rule on your class page. If you choose not to refund, the value of those points is split 35% to you and 65% to BEAT. If no rule is posted, points are refunded in full.'
        : '逾時取消或未到，點數要不要退由場館決定，並先公告在課程頁面。場館選擇不退時，這次點數的價值場館分 35%、BEAT 分 65%。沒有公告的話，視為全額退回。',
      example: '',
    },
    {
      title: isEn ? 'Shop referrals' : '商品推廣分潤',
      share: '1%～5%',
      desc: isEn
        ? 'Optional. Recommend BEAT Shop products with your venue’s referral code or offer in-venue pickup, and earn a share of each order (after refunds). No inventory or shipping costs for you.'
        : '自由參加。用場館推薦碼推薦 BEAT 商店商品，或提供場館取貨，就能依訂單實收金額（扣除退款後）分潤。場館不需要負擔庫存與物流。',
      example: '',
    },
  ];

  const shopShare = [
    { code: isEn ? 'Code + pickup at your venue + member card holder' : '用推薦碼＋在場館取貨＋已購買會員卡', rate: '5.0%' },
    { code: isEn ? 'Code + pickup at your venue' : '用推薦碼＋在場館取貨', rate: '4.0%' },
    { code: isEn ? 'Code + member card holder' : '用推薦碼＋已購買會員卡', rate: '3.5%' },
    { code: isEn ? 'Pickup at your venue only' : '只在場館取貨', rate: '3.0%' },
    { code: isEn ? 'Code only' : '只用推薦碼', rate: '1.0%' },
  ];

  const payout = isEn
    ? ['Settled monthly. Member cards that ended and classes completed in a month are settled on the 1st of the next month.', 'Paid to your bank account around the 10th of the following month (next business day on holidays).', 'Amounts under NT$500 roll over to the next month.', 'Bank transfer fees are deducted from the payout and itemised in your statement.', 'Refunds made after a payout are absorbed by BEAT, not clawed back from you.', 'Please issue an invoice (or receipt, if exempt) for each payout.']
    : ['每月結算一次：當月結束的會員卡效期、當月完成的課程，次月 1 日結算。', '次月 10 日左右撥款到場館指定帳戶，遇假日順延。', '當月金額未滿 500 元，累積到下個月一起撥。', '匯款手續費從撥款金額扣除，明細會列出來。', '已撥款後才發生的會員退款由 BEAT 吸收，不向場館扣回。', '場館依每次撥款金額開立發票；免用統一發票的商號提供收據。'];

  const rules = isEn
    ? ['The member card covers the areas you open to members, not classes or private coaching. Coaching-only areas can stay closed.', 'Treat BEAT PASS members the same as your own members and walk-in customers.', 'Give members a discount on classes paid in cash (we suggest 10% off), or let them book with points.', 'Scan the member’s dynamic QR code at check-in. One check-in per member per venue per day; members can visit up to 3 venues a day.', 'Check that the name and photo in the app match the person. If someone else is using the card, refuse entry and report it in the portal within 24 hours.', 'During opening hours, set member capacity to at least 55% of your venue’s maximum occupancy. You can lower it for repairs, private events or emergencies.', 'Carry public liability insurance and provide a copy of the policy when signing.', 'Give 30 days’ notice before leaving the platform or closing.']
    : ['會員卡只包含場館開放給會員的空間，不含團體課與私人教練課；教練教學專用區可以不開放。', '對 BEAT PASS 會員的服務，要和自家會員、單次顧客一樣。', '會員用現金上課時給課程折扣（建議九折），或讓會員用點數預約。', '入場時掃會員手機上的動態 QR Code。同一會員每天在同一場館限核銷 1 次，每天最多去 3 家場館。', '核對 App 上的姓名、照片是否為本人。發現冒用時拒絕入場，並在 24 小時內從後台通報。', '營業時間內，開放給會員的名額不低於場館最大容留人數的 55%；設備維修、包場或緊急狀況可以暫時調降。', '投保公共意外責任險，簽約時提供保單影本。', '退出平台或停止營業，要在 30 天前通知。'];

  const contractTerms = isEn
    ? ['The contract starts on signing and runs for the term of your plan (1 month or 12 months). It renews automatically unless either side says otherwise within 30 days of the end.', 'You can terminate at any time; it takes effect at the end of the current billing period. No termination fee.', 'A credit card is linked in the portal for automatic billing. During the founding-partner offer, the first charge starts after the offer ends.', 'If a payment fails, you have 7 days to update your card before portal access is paused.', 'The portal only shows the member data needed for booking and check-in: name, photo, membership validity and booking status. It may not be used for marketing or kept elsewhere.']
    : ['合約自簽署日生效，期限依方案為 1 個月或 12 個月；到期前 30 天內雙方都沒表示不續約，就以原條件自動續約。', '場館可以隨時提出終止，當期結束後生效，不收違約金。', '簽約時在後台綁定信用卡自動扣款；適用創始場館優惠的場館，優惠期結束後才開始扣款。', '扣款失敗時，有 7 天可以更新信用卡，逾期才會暫停後台權限。', '後台只顯示預約與報到需要的會員資料：姓名、大頭照、方案效期、預約狀態。不能拿來行銷，也不能另外存檔。'];

  const faqs = [
    {
      q: isEn ? 'What types of venues is BEAT PASS for?' : 'BEAT PASS 適合哪些類型的場館？',
      a: isEn
        ? 'Gyms, yoga, bouldering, reformer pilates, boxing and performance training venues and studios are all welcome to inquire.'
        : '健身房、瑜伽、抱石攀岩、皮拉提斯器械、拳擊與專業體能訓練等運動場館與工作室，都歡迎洽詢合作。',
    },
    {
      q: isEn ? 'Do we need to replace our existing membership system?' : '場館需要更換原本的會員系統嗎？',
      a: isEn
        ? 'BEAT PASS mainly serves members who arrive through BEAT PASS, using QR code check-in and BEAT Partner Portal. How it fits your venue is discussed case by case — contact us through the inquiry form.'
        : 'BEAT PASS 主要服務透過 BEAT PASS 前來的會員，以 QR Code 核驗與 BEAT Partner Portal 運作。實際導入方式會依場館現況討論，歡迎透過合作洽詢表單聯絡我們。',
    },
    {
      q: isEn ? 'How are partnership terms and fees set?' : '合作方式與費用怎麼計算？',
      a: isEn
        ? 'Plan A is NT$499 a month; Plan B is NT$5,599 a year, paid in 12 instalments. During partner recruitment, the first 100 partner venues pay no monthly fee. On top of that, venues get 80% of member card revenue and pay a 0–5% commission on classes booked with points. See “Partnership Plans” above.'
        : 'A 方案月繳 499 元；B 方案一年 5,599 元，分 12 期扣款。合作夥伴招募期間，前 100 間合作場館免月費。另外會員卡收入場館分 80%，點數預約的課程抽成 0～5%。詳細請看上方「合作方案」。',
    },
    {
      q: isEn ? 'When and how do we get paid?' : '什麼時候撥款？怎麼撥？',
      a: isEn
        ? 'Settlement is monthly on the 1st, and payment goes to your bank account around the 10th of the following month. You can check daily check-ins, bookings and settlement details in BEAT Partner Portal at any time.'
        : '每月 1 日結算，次月 10 日左右撥款到場館帳戶。每日進場人次、預約與結算明細，隨時可以在 BEAT Partner Portal 查看。',
    },
    {
      q: isEn ? 'Can we leave the partnership?' : '可以退出嗎？',
      a: isEn
        ? 'Yes. You can terminate at any time; it takes effect at the end of the current billing period, with no termination fee. Members who booked before termination should still be served.'
        : '可以。場館隨時可以提出終止，當期結束後生效，不收違約金。終止前已經預約的會員，仍需要接待。',
    },
    {
      q: isEn ? 'Which areas currently have partner venues?' : '目前有哪些地區的場館加入？',
      a: isEn
        ? 'BEAT PASS keeps expanding its venue network across Taipei and New Taipei. See our News page for the latest updates.'
        : 'BEAT PASS 持續拓展雙北都會運動場域網絡，最新進度請見最新消息。',
    },
  ];

  const goContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('contact', '系統服務');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* HERO */}
      <section className="border-b border-[#E5E5DF] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span>VENUE SYSTEM</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'Venue Management System' : '場館管理系統'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
              {isEn ? 'BEAT PASS Venue Management System' : 'BEAT PASS 場館管理系統'}
              <span className="block text-2xl sm:text-3xl font-medium text-[#5C5C58] mt-2">
                {isEn ? 'QR check-in, online booking, and new visitors for your venue.' : 'QR Code 入場、線上預約，也幫場館帶來新客人。'}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed pt-2">
              {isEn
                ? 'BEAT PASS is the cross-venue fitness membership service built by BEAT Technology Co., Ltd. For gyms, yoga studios, bouldering gyms, pilates and performance training venues, it brings new active customers and provides digital check-in and management tools that lighten front-desk and admin work.'
                : 'BEAT PASS 是比忒科技有限公司（BEAT Technology Co., Ltd.）打造的跨場域運動會員服務。對健身房、瑜伽教室、抱石攀岩館、皮拉提斯與專業體能訓練場館來說，BEAT PASS 一方面帶來新的運動客源，一方面提供數位核驗與管理工具，降低櫃檯與行政負擔。'}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
            {isEn ? 'What does BEAT PASS provide for partner venues?' : 'BEAT PASS 為合作場館提供哪些系統功能？'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-white border border-[#E5E5DF] shadow-sm">
                <f.icon className="w-6 h-6 text-[#FF9F1C] mb-4" />
                <h3 className="text-lg font-bold text-[#141413] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6C6C66] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
            {isEn ? 'Why venues join BEAT PASS' : '加入 BEAT PASS 對場館有什麼好處？'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#4A4A46]">
            {benefits.map((b) => (
              <div key={b.title} className="p-4 bg-white border border-[#E5E5DF]">
                <div className="font-bold text-[#141413] mb-1 text-sm">{b.title}</div>
                <div className="text-[#6C6C66]">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
            {isEn ? 'Partnership Plans' : '合作方案'}
          </h2>
          <p className="text-sm text-[#6C6C66] mb-8 max-w-2xl leading-relaxed">
            {isEn
              ? 'Both plans include the same features and revenue share. The only difference is how you pay the system fee.'
              : '兩個方案的功能和分潤都一樣，差別只在系統費用的繳法。'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((p) => (
              <div key={p.tag} className="p-8 bg-white border border-[#E5E5DF] shadow-sm">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#FF9F1C] mb-2">{p.tag}</div>
                <h3 className="text-lg font-bold text-[#141413]">{p.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-extrabold text-[#141413]">{p.price}</span>
                  <span className="text-sm text-[#6C6C66] ml-1">{p.unit}</span>
                </div>
                <p className="text-xs text-[#6C6C66] mb-4">{p.note}</p>
                <ul className="space-y-1.5 text-sm text-[#4A4A46]">
                  {p.points.map((x) => (
                    <li key={x}>✓ {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-[#FFF6EA] border border-[#FF9F1C]/40">
            <div className="font-bold text-[#141413] mb-1 text-sm">
              {isEn ? 'Founding partner offer' : '創始場館優惠'}
            </div>
            <p className="text-sm text-[#4A4A46] leading-relaxed">
              {isEn
                ? 'During partner recruitment, the first 100 partner venues pay no monthly fee. For the offer period set in the contract, BEAT also waives its platform fee: you get 100% of member card revenue (after payment processing) and 0% commission on classes booked with points.'
                : '合作夥伴招募期間，前 100 間合作場館免月費。在合約約定的優惠期內，BEAT 也不收平台服務費：會員卡收入場館拿 100%（扣除金流手續費），點數預約的課程抽成 0%。'}
            </p>
          </div>

          <div className="mt-6 p-6 bg-white border border-[#E5E5DF]">
            <div className="font-bold text-[#141413] mb-3 text-sm">{isEn ? 'Included in both plans' : '兩個方案都包含'}</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-[#4A4A46]">
              {included.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVENUE */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
            {isEn ? 'How venues earn' : '場館的收入怎麼算'}
          </h2>
          <p className="text-sm text-[#6C6C66] mb-8 max-w-2xl leading-relaxed">
            {isEn
              ? 'Members pay BEAT. BEAT pays venues monthly, based on actual check-ins and completed classes.'
              : '會員付款給 BEAT，BEAT 再依實際進場與完成的課程，每月撥款給場館。'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {revenue.map((r) => (
              <div key={r.title} className="p-8 bg-white border border-[#E5E5DF] shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#141413]">{r.title}</h3>
                  <span className="text-sm font-bold text-[#FF9F1C]">{r.share}</span>
                </div>
                <p className="text-sm text-[#6C6C66] leading-relaxed">{r.desc}</p>
                {r.example && <p className="text-xs text-[#4A4A46] mt-3 p-3 bg-[#FAF9F6] border border-[#E5E5DF]">{r.example}</p>}
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white border border-[#E5E5DF] overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FAF9F6] text-left text-[#141413]">
                  <th className="p-3 font-bold">{isEn ? 'Shop referral: how the order was placed' : '商品推廣分潤：訂單狀況'}</th>
                  <th className="p-3 font-bold whitespace-nowrap">{isEn ? 'Venue share' : '場館分潤'}</th>
                </tr>
              </thead>
              <tbody>
                {shopShare.map((x) => (
                  <tr key={x.code} className="border-t border-[#E5E5DF] text-[#4A4A46]">
                    <td className="p-3">{x.code}</td>
                    <td className="p-3 font-bold text-[#141413]">{x.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PAYOUT */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-6">
              {isEn ? 'Settlement & payout' : '對帳與撥款'}
            </h2>
            <ol className="space-y-3 text-sm text-[#4A4A46] list-decimal pl-5">
              {payout.map((x) => (
                <li key={x} className="leading-relaxed">{x}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-6">
              {isEn ? 'Contract term & leaving' : '合約期限與退出'}
            </h2>
            <ol className="space-y-3 text-sm text-[#4A4A46] list-decimal pl-5">
              {contractTerms.map((x) => (
                <li key={x} className="leading-relaxed">{x}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* VENUE RULES */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
            {isEn ? 'What partner venues agree to' : '合作場館需要配合的事'}
          </h2>
          <p className="text-sm text-[#6C6C66] mb-8 max-w-2xl leading-relaxed">
            {isEn
              ? 'The main points of the venue contract. The signed contract is what applies.'
              : '以下是場館合作契約的重點，實際以簽署的合約為準。'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((x, i) => (
              <div key={x} className="p-5 bg-white border border-[#E5E5DF] flex gap-3 text-sm text-[#4A4A46] leading-relaxed">
                <span className="font-mono font-bold text-[#FF9F1C]">{String(i + 1).padStart(2, '0')}</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
            {isEn ? 'Frequently Asked Questions' : '常見問題'}
          </h2>
          <div className="divide-y divide-[#E5E5DF] border-y border-[#E5E5DF] bg-white">
            {faqs.map((f) => (
              <div key={f.q} className="p-6">
                <h3 className="text-base font-bold text-[#141413] mb-2">{f.q}</h3>
                <p className="text-sm text-[#6C6C66] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
              {isEn ? 'Venue Partnership Inquiry' : '場館合作洽詢'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C66] max-w-2xl leading-relaxed mb-8">
              {isEn ? (
                <>Leave your needs on the inquiry form, or email <a href="mailto:beat.tech.co@beatpasstw.com" className="text-[#FF9F1C] hover:underline">beat.tech.co@beatpasstw.com</a>.</>
              ) : (
                <>歡迎運動場館經營者留下需求與聯絡方式，或來信 <a href="mailto:beat.tech.co@beatpasstw.com" className="text-[#FF9F1C] hover:underline">beat.tech.co@beatpasstw.com</a>。</>
              )}
            </p>
            <a
              href="/contact"
              onClick={goContact}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
            >
              <span>{isEn ? 'Inquire Now' : '立即洽詢'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
