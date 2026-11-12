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

  // 合作方案依《BEAT PASS 場館合作方案 A／B》（2026-11）簡報；分潤、撥款與規則依場館合作契約（2026-11-11 版）
  const plans = [
    {
      tag: isEn ? 'Plan A' : 'A 方案',
      name: isEn ? 'Traffic Partnership' : '流量合作',
      price: 'NT$0',
      unit: isEn ? '/ month' : '/ 月',
      note: isEn ? 'Month-to-month. Upgrade to B any time.' : '月約，隨時可以升級 B',
      fit: isEn ? 'Best for: small venues, studios and new venues trying it out' : '適合：想先試試看的小館、工作室、新開的場館',
    },
    {
      tag: isEn ? 'Plan B' : 'B 方案',
      name: isEn ? 'System & Operations' : '系統營運合作',
      price: 'NT$499',
      unit: isEn ? '/ month (annual)' : '/ 月（年約）',
      note: isEn ? 'Less than NT$17 a day' : '一天不到 17 元',
      fit: isEn ? 'Best for: venues that want full reports, member messaging and a dedicated account manager' : '適合：想要完整報表、會員私訊和專屬業務的場館',
    },
  ];

  // 比較表：照簡報第 6、7 頁的兩張表
  const tables: { title: string; note: string; rows: [string, string, string][] }[] = [
    {
      title: isEn ? 'Comparison 1: fees, exposure & revenue share' : '方案比較（一）：費用、曝光與分潤',
      note: isEn
        ? 'All commissions exclude tax; points carry an additional 1.5% payment-processing fee. Final terms are set by the signed contract.'
        : '抽成皆未稅；點數另計金流費 1.5%。實際條件以正式合約為準。',
      rows: [
        [isEn ? 'System fee' : '系統月費', isEn ? 'Free' : '免費', isEn ? 'NT$499 / month' : 'NT$499 / 月'],
        [isEn ? 'Contract & upgrade' : '合約與升級', isEn ? 'Monthly, upgrade to B any time' : '月約，可隨時升級 B', isEn ? 'Annual' : '年約'],
        [isEn ? 'Featured venue listing' : '熱門場館曝光', isEn ? '60 days' : '60 天', isEn ? '300 days' : '300 天'],
        [isEn ? 'New venue spotlight' : '新館報到曝光', isEn ? 'First 7 days' : '上線 7 天', isEn ? 'First month' : '上線首月'],
        [isEn ? 'Member card commission (excl. tax)' : '會員卡抽成（未稅）', '20%', '20%'],
        [isEn ? 'Points commission (excl. tax)' : '點數抽成（未稅）', '6%', '1～5%'],
        [isEn ? 'Class pass redemption (excl. tax)' : '堂課券核銷（未稅）', isEn ? '70 points / class' : '一堂 70 點', isEn ? '70 points / class' : '一堂 70 點'],
        [isEn ? 'Booking protection' : '預約取消收益保障', isEn ? 'No' : '無', isEn ? 'Yes' : '有'],
        [isEn ? 'Shop revenue share (after launch)' : '電商分潤（上線後）', isEn ? 'No' : '無', '1～5%'],
        [isEn ? 'Corporate group classes (after launch)' : '企業團體課程（上線後）', isEn ? 'Occasional' : '不固定', isEn ? '1–2 every other month' : '每隔月 1～2 次'],
        [isEn ? 'Settlement' : '合作結算', isEn ? 'Monthly' : '月結', isEn ? 'Monthly' : '月結'],
      ],
    },
    {
      title: isEn ? 'Comparison 2: features & service' : '方案比較（二）：功能與服務',
      note: isEn ? 'Features are as currently offered on the platform.' : '實際功能以平台當下提供為準。',
      rows: [
        [isEn ? 'QR code check-in' : 'QR Code 核銷', isEn ? 'Yes' : '有', isEn ? 'Yes' : '有'],
        [isEn ? 'Live visitor count' : '即時人流顯示', isEn ? 'Yes' : '有', isEn ? 'Yes' : '有'],
        [isEn ? 'Class & pass listings' : '課程與票券上架', isEn ? 'Full (copy schedules, pricing by member type, subscriber prices)' : '完整（複製排程、身分別定價、訂閱會員價）', isEn ? 'Full (copy schedules, pricing by member type, subscriber prices)' : '完整（複製排程、身分別定價、訂閱會員價）'],
        [isEn ? 'Staff accounts' : '員工帳號', isEn ? '8, with 8 permission levels' : '8 個，可分 8 種權限', isEn ? 'Unlimited, with 8 permission levels' : '不限，可分 8 種權限'],
        [isEn ? 'Financial reports' : '財務報表', isEn ? 'Monthly statement' : '月結對帳單', isEn ? 'Full reports, visitor trends, Excel export' : '完整報表、客流趨勢、Excel 匯出'],
        [isEn ? 'Member messaging (message center)' : '會員私訊（訊息中心）', isEn ? 'No' : '無', isEn ? 'Yes' : '有'],
        [isEn ? 'Platform campaigns & coupons' : '平台活動與優惠券', isEn ? 'Can sign up' : '可報名參加', isEn ? 'Priority' : '優先參加'],
        [isEn ? 'Point of contact' : '專屬窗口', isEn ? 'Online support' : '線上客服', isEn ? 'Dedicated account manager' : '專屬業務'],
      ],
    },
  ];

  const revenue = [
    {
      title: isEn ? 'Member card (both plans)' : '會員卡（A、B 都一樣）',
      share: isEn ? 'Venues get 80%' : '場館分 80%',
      desc: isEn
        ? 'BEAT keeps 20% (excl. tax). The other 80% is split among the venues a member visited, by how many times they checked in at each venue during the card’s 30 days.'
        : '平台留 20%（未稅），其餘 80% 依這張卡 30 天內在各館的入場次數分配。會員越常來你這裡，你分得越多。',
      example: isEn
        ? 'Example: a member checks in 10 times in 30 days, 3 of them at your venue → you get 30% of that card’s venue share.'
        : '例：一位會員 30 天內入場 10 次，其中 3 次在你的場館 → 你分到這張卡場館收入的 30%。',
    },
    {
      title: isEn ? 'Classes booked with points or class passes' : '用點數或堂課券預約的課程',
      share: isEn ? 'A 6% · B 1–5%' : 'A 6%・B 1～5%',
      desc: isEn
        ? 'Group classes and private coaching are not included in the member card. When members book your classes with points, the platform commission is 6% on Plan A and 1–5% on Plan B (set in the contract, excl. tax), plus a 1.5% payment-processing fee. Class passes are redeemed at 70 points per class.'
        : '團體課、私人教練課不包含在會員卡內。會員用點數預約你的課程時，平台抽成 A 方案 6%、B 方案 1～5%（依合約，未稅），點數另計金流費 1.5%。堂課券每堂以 70 點核銷。',
      example: isEn
        ? 'Classes cancelled in time (2 hours before group classes, 3 hours before private sessions) are not settled; points go back to the member.'
        : '會員在期限前取消（團體課開課前 2 小時、私人教練課前 3 小時）不結算，點數退回會員。',
    },
    {
      title: isEn ? 'Booking protection (Plan B)' : '預約取消收益保障（B 方案）',
      share: isEn ? 'Plan B only' : 'B 方案限定',
      desc: isEn
        ? 'When a member cancels late or doesn’t show up, Plan B venues still receive part of the revenue (ratio set in the contract). Plan A does not include this protection.'
        : '會員逾時取消或沒到時，B 方案場館仍分得一部分收入，比例依合約。A 方案沒有這項保障。',
      example: '',
    },
    {
      title: isEn ? 'Shop revenue share (Plan B, after launch)' : '電商分潤（B 方案，上線後提供）',
      share: '1%～5%',
      desc: isEn
        ? 'After the BEAT Shop launches, Plan B venues can recommend products with their referral code or offer in-venue pickup, and earn a share of each order (after refunds). No inventory or shipping costs.'
        : 'BEAT 商店上線後，B 方案場館可以用推薦碼推薦商品或提供場館取貨，依訂單實收金額（扣除退款後）分潤，不需要負擔庫存與物流。',
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
    ? ['Plan A is month-to-month and can be upgraded to Plan B at any time. Plan B is a one-year contract; venues on the founding offer can terminate at any time during the 1-year trial and get a full refund.', 'Contracts renew automatically on the same terms unless either side says otherwise within 30 days of the end.', 'Plan B is billed monthly to a credit card linked in the portal. If a payment fails, you have 7 days to update your card before portal access is paused.', 'The portal only shows the member data needed for booking and check-in: name, photo, membership validity and booking status. It may not be used for marketing or kept elsewhere.', 'All terms are set out in the signed contract, including settlement and payout dates.']
    : ['A 方案月約，隨時可以升級 B；B 方案為一年約，適用創始場館優惠的場館，1 年試用期間可隨時終止，退還全部費用。', '合約到期前 30 天內雙方都沒表示不續約，就以原條件自動續約。', 'B 方案在後台綁定信用卡，按月自動扣款；扣款失敗有 7 天可以更新信用卡，逾期才會暫停後台權限。', '後台只顯示預約與報到需要的會員資料：姓名、大頭照、方案效期、預約狀態。不能拿來行銷，也不能另外存檔。', '所有條件都寫在正式合約裡，包含結算方式與撥款日。'];

  const steps = isEn
    ? [['Choose a plan', 'We go through your venue’s needs with you and confirm Plan A or B.'], ['Sign the contract', 'All terms go into the official contract, including settlement and payout dates.'], ['Set up and go live', 'We open your portal. Add your opening hours and venue details, and start welcoming BEAT members.']]
    : [['選方案', '業務會依你的場館需求，一起確認 A 或 B。'], ['簽合作合約', '條件寫進正式合約，含結算方式與撥款日。'], ['開通後台、上架', '設定營業時間、場館介紹，就能開始接 BEAT 的會員。']];

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
        ? 'Plan A (Traffic Partnership) has no monthly fee and is month-to-month. Plan B (System & Operations Partnership) is NT$499 a month on an annual contract; the first 50 venues in each of northern, central and southern Taiwan (150 total) get an extra 1-year trial with full refund if they leave during it. On both plans, BEAT keeps 20% of member card revenue and venues share 80%. Points commission is 6% on Plan A and 1–5% on Plan B (excl. tax, plus a 1.5% payment fee). See “Two Partnership Plans” above.'
        : 'A 方案（流量合作）免月費、月約；B 方案（系統營運合作）每月 499 元、年約，北中南各前 50 間（共 150 間）加贈 1 年試用期、試用期間隨時退費。兩個方案的會員卡收入都是平台留 20%、場館分 80%；點數抽成 A 方案 6%、B 方案 1～5%（未稅，另計金流費 1.5%）。詳細請看上方「兩種合作方案」。',
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
        ? 'Plan A is month-to-month, so you can stop or upgrade to Plan B at any time. Plan B is a one-year contract; the first 150 venues get an extra 1-year trial, during which they can terminate at any time with a full refund. Members who booked before termination should still be served.'
        : 'A 方案是月約，隨時可以停止或升級 B。B 方案為一年約；前 150 間場館加贈 1 年試用期，試用期間可隨時終止，退還全部費用。終止前已經預約的會員，仍需要接待。',
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
            {isEn ? 'Two Partnership Plans' : '兩種合作方案'}
          </h2>
          <p className="text-sm text-[#6C6C66] mb-8 max-w-2xl leading-relaxed">
            {isEn
              ? 'With either plan, BEAT PASS members can use the same card at your venue. The difference is how much exposure and service you want. Not sure? Ask yourself one question: do you need full reports and a dedicated account manager? If yes, choose B. If not yet, start with A and upgrade any time.'
              : '不管選哪個方案，BEAT PASS 會員都能用同一張卡來你這裡運動，差別在你要多少曝光與服務。不知道怎麼選？問自己一個問題：需要完整報表和專屬業務嗎？需要就選 B；還不需要就先選 A，之後隨時可以升級。'}
          </p>
          {/* 方案摘要 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plans.map((p, i) => (
              <div key={p.tag} className={`p-5 sm:p-6 border bg-white ${i === 1 ? 'border-[#FF9F1C]/60' : 'border-[#E5E5DF]'}`}>
                <div className={`inline-block px-2 py-0.5 text-xs font-bold ${i === 1 ? 'bg-[#FF9F1C] text-white' : 'bg-[#FFF6EA] text-[#FF9F1C] border border-[#FF9F1C]/40'}`}>{p.tag}</div>
                <h3 className="text-lg font-bold text-[#141413] mt-2">{p.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-extrabold text-[#141413]">{p.price}</span>
                  <span className="text-sm text-[#6C6C66] ml-1">{p.unit}</span>
                </div>
                <p className="text-xs text-[#6C6C66] mt-1">{p.note}</p>
                <p className="text-xs text-[#4A4A46] mt-2 leading-relaxed">{p.fit}</p>
              </div>
            ))}
          </div>

          {/* 比較表（樣式同簡報） */}
          {tables.map((t) => (
            <div key={t.title} className="mt-10">
              <h3 className="text-base sm:text-lg font-bold text-[#141413] mb-3">{t.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm border-collapse border border-[#E5E5DF]">
                  <thead>
                    <tr>
                      <th className="w-[34%] px-4 py-3 text-left font-bold text-[#141413] bg-[#FAF9F6] border border-[#E5E5DF]">{isEn ? 'Item' : '合作項目'}</th>
                      <th className="w-[33%] px-4 py-3 text-center font-bold text-[#141413] bg-[#FFF6EA] border border-[#E5E5DF]">{isEn ? 'A · Traffic' : 'A｜流量合作'}</th>
                      <th className="w-[33%] px-4 py-3 text-center font-bold text-white bg-[#FF9F1C] border border-[#E5E5DF]">{isEn ? 'B · System & Operations' : 'B｜系統營運合作'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map(([k, a, b], i) => (
                      <tr key={k} className={i % 2 === 1 ? 'bg-[#FAF9F6]' : 'bg-white'}>
                        <td className="px-4 py-2.5 text-[#141413] border border-[#E5E5DF]">{k}</td>
                        <td className="px-4 py-2.5 text-center text-[#141413] border border-[#E5E5DF]">{a}</td>
                        <td className="px-4 py-2.5 text-center text-[#141413] border border-[#E5E5DF]">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#7A7A74] mt-2">{t.note}</p>
            </div>
          ))}

          <div className="mt-6 p-6 bg-[#FFF6EA] border border-[#FF9F1C]/40">
            <div className="font-bold text-[#141413] mb-1 text-sm">
              {isEn ? 'Founding venue offer · Plan B' : '創始場館優惠｜B 方案'}
            </div>
            <p className="text-sm text-[#4A4A46] leading-relaxed">
              {isEn
                ? 'The first 50 venues in each of northern, central and southern Taiwan (150 in total) that sign up for Plan B get an extra 1-year trial period. During the trial you can terminate at any time and get a full refund.'
                : '北、中、南各前 50 間，共 150 間簽約 B 方案的場館，加贈 1 年試用期。試用期間可以隨時終止，退還全部費用。'}
            </p>
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
              : '會員付款給 BEAT，BEAT 再依實際進場與上課紀錄，每月撥款給場館。'}
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
                  <th className="p-3 font-bold">{isEn ? 'Shop revenue share (Plan B): how the order was placed' : '電商分潤（B 方案）：訂單狀況'}</th>
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
              {isEn ? 'Contract' : '合約'}
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

      {/* STEPS */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
            {isEn ? 'Get started in 3 steps' : '簽約只要 3 步'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(([t, d], i) => (
              <div key={t} className="p-6 bg-white border border-[#E5E5DF]">
                <div className="text-2xl font-extrabold text-[#FF9F1C] mb-2">{i + 1}</div>
                <div className="font-bold text-[#141413] mb-1">{t}</div>
                <p className="text-sm text-[#6C6C66] leading-relaxed">{d}</p>
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
