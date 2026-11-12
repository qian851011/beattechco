import React from 'react';
import {
  QrCode, CalendarCheck, LayoutDashboard, BarChart3, ArrowRight, ArrowDown, Laptop, Shuffle, Building2, Plane, ChevronDown,
  IdCard, SlidersHorizontal, Tag, UserPlus, TrendingUp, Search, Compass, Clock, Heart, LayoutGrid, Monitor, Receipt, Percent,
  Lock, RotateCcw, ShieldCheck,
} from 'lucide-react';

// 場館相關區塊：/venue-system 與 BEAT PASS 頁「場館」分頁共用，改一次兩邊同步。
interface VenueSectionProps {
  isEn: boolean;
}

export const VenueFeatures: React.FC<VenueSectionProps> = ({ isEn }) => {
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
  return (
    <>
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
    </>
  );
};

export const VenueBenefits: React.FC<VenueSectionProps> = ({ isEn }) => {
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
    {
      title: isEn ? 'Fill Off-Peak Hours' : '活化離峰時段',
      desc: isEn ? 'Bring in visitors at times that are usually quiet, so idle hours start earning.' : '帶來平常不會在離峰時段到訪的客人，讓閒置的時段也有收入。',
    },
  ];
  return (
    <>
      {/* BENEFITS */}
      <section className="py-20 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
            {isEn ? 'Why venues join BEAT PASS' : '加入 BEAT PASS 對場館有什麼好處？'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#4A4A46]">
            {benefits.map((b) => (
              <div key={b.title} className="h-full p-5 bg-white border border-[#E5E5DF] flex flex-col">
                <div className="font-bold text-[#141413] mb-1.5 text-sm">{b.title}</div>
                <div className="text-[#6C6C66] leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const VenuePlans: React.FC<VenueSectionProps> = ({ isEn }) => {
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
        [isEn ? 'Booking protection' : '預約取消收益保障', isEn ? 'No' : '無', isEn ? 'Yes' : '有'],
        [isEn ? 'Shop revenue share (after launch)' : '電商分潤（上線後）', isEn ? 'No' : '無', '1～5%'],
        [isEn ? 'Corporate group classes (after launch)' : '企業團體課程（上線後）', isEn ? 'Occasional' : '不固定', isEn ? '1–2 every other month' : '每隔月 1～2 次'],
      ],
    },
    {
      title: isEn ? 'Comparison 2: features & service' : '方案比較（二）：功能與服務',
      note: isEn ? 'Features are as currently offered on the platform.' : '實際功能以平台當下提供為準。',
      rows: [
        [isEn ? 'QR code check-in' : 'QR Code 核銷', isEn ? 'Yes' : '有', isEn ? 'Yes' : '有'],
        [isEn ? 'Live visitor count' : '即時人流顯示', isEn ? 'Yes' : '有', isEn ? 'Yes' : '有'],
        [isEn ? 'Class & pass listings' : '課程與票券上架', isEn ? 'Full ' : '完整', isEn ? 'Full' : '完整'],
        [isEn ? 'Staff accounts' : '員工帳號', isEn ? '8, with 8 permission levels' : '8 個，可分 8 種權限', isEn ? 'Unlimited, with 8 permission levels' : '不限，可分 8 種權限'],
        [isEn ? 'Financial reports' : '財務報表', isEn ? 'Monthly statement' : '月結對帳單', isEn ? 'Full reports, visitor trends, Excel export' : '完整報表、客流趨勢、Excel 匯出'],
        [isEn ? 'Member messaging (message center)' : '會員私訊（訊息中心）', isEn ? 'Yes' : '有', isEn ? 'Yes' : '有'],
        [isEn ? 'Platform campaigns & coupons' : '平台活動與優惠券', isEn ? 'Can sign up' : '可報名參加', isEn ? 'Priority' : '優先參加'],
        [isEn ? 'Point of contact' : '專屬窗口', isEn ? 'Online support' : '線上客服', isEn ? 'Dedicated account manager' : '專屬業務'],
      ],
    },
  ];
  return (
    <>
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
    </>
  );
};

export const VenueSteps: React.FC<VenueSectionProps> = ({ isEn }) => {
  const steps = isEn
    ? [['Choose a plan', 'We go through your venue’s needs with you and confirm Plan A or B.'], ['Sign the contract', 'All terms go into the official contract, including settlement and payout dates.'], ['Set up and go live', 'We open your portal. Add your opening hours and venue details, and start welcoming BEAT members.']]
    : [['選方案', '業務會依你的場館需求，一起確認 A 或 B。'], ['簽合作合約', '條件寫進正式合約，含結算方式與撥款日。'], ['開通後台、上架', '設定營業時間、場館介紹，就能開始接 BEAT 的會員。']];
  return (
    <>
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
    </>
  );
};

export const VenueInquiry: React.FC<VenueSectionProps & { onContact: () => void; withStory?: boolean }> = ({ isEn, onContact, withStory = false }) => {
  const card = (
    <div className="h-full p-8 sm:p-12 bg-white border border-[#E5E5DF] shadow-sm flex flex-col justify-center">
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
      <div>
        <a
          href="/contact"
          onClick={(e) => { e.preventDefault(); onContact(); }}
          className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#FF9F1C]/35 select-none touch-manipulation"
        >
          <span>{isEn ? 'Inquire Now' : '立即洽詢'}</span>
          <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* CTA */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {withStory ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* 左：從第一次體驗到長期會員 */}
              <div className="lg:col-span-7 p-8 sm:p-12 bg-[#FFF6EA] border-l-4 border-[#FF9F1C]">
                <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  {isEn
                    ? 'What we really want isn’t just to bring venues one-time customers through BEAT PASS, but to give every member who discovers you through BEAT PASS the chance to become your own long-term member.'
                    : '我們真正希望的，不只是讓 BEAT PASS 幫場館帶來一次性的消費者，而是讓每一位透過 BEAT PASS 認識你的用戶，都有機會成為場館自己的長期會員。'}
                </p>
                <p className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">From First Visit to Forever Member.</p>
                {!isEn && <p className="mt-1 text-base sm:text-lg font-bold text-[#FF9F1C]">從第一次體驗，到成為你的長期會員。</p>}
                <p className="mt-6 text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  {isEn
                    ? 'BEAT PASS doesn’t just bring venues new customers. We want to be the first bridge between venues and new visitors.'
                    : 'BEAT PASS 不只是為場館帶來新客源，更希望成為場館與新客人之間的第一座橋梁。'}
                </p>
                <p className="mt-3 text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  {isEn
                    ? 'We hope every visit can be the start of a long-term relationship: members find the venues they truly love, and venues get the chance to turn new visitors into loyal members of their own.'
                    : '我們期待每一次體驗，都能成為長期關係的開始；讓使用者找到真正喜歡的運動場館，也讓場館有機會把新客人培養成自己的忠實會員。'}
                </p>
              </div>
              {/* 右：聯絡我們 */}
              <div className="lg:col-span-5">{card}</div>
            </div>
          ) : (
            card
          )}
        </div>
      </section>
    </>
  );
};

// ===== 以下為 BEAT PASS 頁「場館」分頁專用 =====

// 場館擔心的問題：文字完整保留，搭配示意圖與動畫
export const VenueConcerns: React.FC<VenueSectionProps> = ({ isEn }) => {
  const q1Points: [React.ElementType, string, string][] = isEn
    ? [
        [IdCard, 'Keep your membership system', 'Venues don’t need to move existing members onto BEAT PASS.'],
        [SlidersHorizontal, 'You choose what to open', 'Venues decide which time slots, classes and how many spots are open.'],
        [Tag, 'You keep pricing control', 'Partnership terms and prices require the venue’s agreement.'],
        [UserPlus, 'Reach additional customers', 'Focus on new customers, cross-sport users and first-time triers.'],
        [TrendingUp, 'Create new revenue', 'Help venues use idle hours and be discovered and chosen by new customers.'],
      ]
    : [
        [IdCard, '保留原有會員制度', '場館不需要將既有會員轉移至 BEAT PASS。'],
        [SlidersHorizontal, '自主設定開放資源', '場館可以決定開放的時段、課程與名額。'],
        [Tag, '保有價格決定權', '平台合作內容與價格須經場館同意。'],
        [UserPlus, '開發額外客源', '優先接觸新客、跨運動族群及潛在體驗者。'],
        [TrendingUp, '創造新增營收', '協助場館提高閒置時段的使用率，增加被新客認識與選擇的機會。'],
      ];

  const demand: [React.ElementType, string, string, string][] = isEn
    ? [
        [Search, 'Potential new customers', 'Don’t know the venue exists', 'More chances to be discovered'],
        [Shuffle, 'Multi-sport enthusiasts', 'Stick to one kind of workout', 'Explore other sports venues'],
        [Compass, 'Occasional triers', 'Unsure a membership is worth it', 'Lower barrier to a first visit'],
        [Clock, 'Off-peak visitors', 'Usually don’t come at those times', 'More use of idle hours'],
        [Heart, 'Existing members', 'Already buy the venue’s services', 'Not deliberately steered to platform deals'],
      ]
    : [
        [Search, '潛在新客', '不知道場館存在', '增加被發現的機會'],
        [Shuffle, '跨運動愛好者', '只固定使用一種運動', '探索其他運動場館'],
        [Compass, '偶爾體驗者', '不確定是否值得購買會員', '降低第一次體驗的門檻'],
        [Clock, '離峰時段消費者', '平常不會在該時段到訪', '增加閒置時段的使用機會'],
        [Heart, '原有會員', '已經固定購買場館服務', '不應刻意誘導轉移至平台優惠'],
      ];

  const flexPoints: [React.ElementType, string][] = isEn
    ? [
        [Clock, 'Decide your own opening hours and available spots.'],
        [LayoutGrid, 'Choose which classes and services to offer.'],
        [Tag, 'Keep your existing membership system and pricing.'],
        [Monitor, 'No need to replace your POS or buy special hardware.'],
        [SlidersHorizontal, 'Pick the system features you need based on your plan.'],
      ]
    : [
        [Clock, '自行決定開放時段與可使用名額。'],
        [LayoutGrid, '自行選擇提供哪些課程與服務。'],
        [Tag, '保留原有會員制度與定價策略。'],
        [Monitor, '不必更換原有 POS 或購買專用硬體。'],
        [SlidersHorizontal, '依照合作方案選擇所需的系統功能。'],
      ];

  const beatDuties: [React.ElementType, string][] = isEn
    ? [[Receipt, 'Transaction and check-in records'], [IdCard, 'Member benefits and validity periods'], [Percent, 'Partnership commission and settlement'], [Lock, 'Basic information security and data privacy'], [RotateCcw, 'Shared principles for booking cancellations and refunds']]
    : [[Receipt, '交易與核銷紀錄'], [IdCard, '會員權益與有效期限'], [Percent, '合作抽成及結算'], [Lock, '基本資安與個資保護'], [RotateCcw, '預約取消及退款的共同原則']];

  const venueChoices: [React.ElementType, string][] = isEn
    ? [[Clock, 'Opening hours and capacity'], [LayoutGrid, 'Which services to offer'], [CalendarCheck, 'Class and entry arrangements'], [Tag, 'Existing memberships and pricing'], [SlidersHorizontal, 'Whether to turn on optional management features']]
    : [[Clock, '開放時段與人數'], [LayoutGrid, '提供哪些服務'], [CalendarCheck, '課程與入場安排'], [Tag, '場館原有會員及價格制度'], [SlidersHorizontal, '是否啟用可選用的管理功能']];



  // Q1 示意圖：外圈新客源流向場館，內圈原有會員不變
  const sources = isEn
    ? [['New customers', 70, 50], ['Multi-sport', 330, 50], ['First-timers', 70, 270], ['Off-peak', 330, 270]]
    : [['潛在新客', 70, 50], ['跨運動愛好者', 330, 50], ['偶爾體驗者', 70, 270], ['離峰消費者', 330, 270]];

  const Callout = ({ text, tag }: { text: string; tag: string }) => (
    <div className="mt-8 p-6 bg-[#FFF6EA] border-l-4 border-[#FF9F1C]">
      <p className="text-base sm:text-lg font-bold text-[#141413] leading-relaxed">{text}</p>
      <p className="mt-2 text-sm font-mono font-semibold tracking-wide text-[#FF9F1C]">{tag}</p>
    </div>
  );

  return (
    <section className="py-20 border-b border-[#E5E5DF]">
      <style>{`
        @keyframes vc-pulse { 0%,100% { transform: scale(1); opacity: .35; } 50% { transform: scale(1.12); opacity: .15; } }
        @keyframes vc-knob { 0%,40% { transform: translateX(0); } 50%,90% { transform: translateX(16px); } 100% { transform: translateX(0); } }
        @keyframes vc-track { 0%,40% { background: #D6D6D0; } 50%,90% { background: #FF9F1C; } 100% { background: #D6D6D0; } }
        @keyframes vc-slide { 0%,100% { width: 40%; } 50% { width: 72%; } }
        @keyframes vc-chip { 0%,45% { background: #fff; color: #8C8C85; border-color: #E5E5DF; } 55%,95% { background: #FF9F1C; color: #fff; border-color: #FF9F1C; } 100% { background: #fff; color: #8C8C85; border-color: #E5E5DF; } }
        @media (prefers-reduced-motion: reduce) { .vc-anim, .vc-anim * { animation: none !important; } }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
          {isEn ? 'What venues worry about' : '場館擔心的問題'}
        </h2>

        {/* ================= Q1 ================= */}
        <div className="p-6 sm:p-10 bg-white border border-[#E5E5DF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-semibold text-[#FF9F1C] mb-2">Q1</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141413] mb-4">
                {isEn ? 'Will BEAT PASS take away a venue’s existing customers?' : 'BEAT PASS 會不會搶走場館原有的客人？'}
              </h3>
              <p className="text-base font-semibold text-[#141413] leading-relaxed">
                {isEn
                  ? 'Replacing your existing members is not the goal. We help venues develop new demand.'
                  : '不會以取代原有會員為目的，而是協助場館開發新的消費需求。'}
              </p>
              <p className="text-sm text-[#4A4A46] leading-relaxed mt-3">
                {isEn
                  ? 'BEAT PASS isn’t here to change how a venue is run. Through a cross-venue platform, more people get to know your venue and try different sports, creating additional visits and spending.'
                  : 'BEAT PASS 的核心不是改變場館原有的經營模式，而是透過跨場館運動平台，讓更多消費者認識場館、體驗不同運動，進而創造額外的到訪與消費機會。'}
              </p>
              <p className="text-sm text-[#4A4A46] leading-relaxed mt-3">
                {isEn
                  ? 'We understand every venue has its own membership system, pricing and way of operating, so:'
                  : '我們理解每間場館都有自己的會員制度、定價策略與經營方式，因此：'}
              </p>
              <ul className="mt-4 space-y-2">
                {q1Points.map(([Icon, t, d]) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#141413]">
                    <span className="w-7 h-7 shrink-0 bg-[#FFF6EA] border border-[#FF9F1C]/40 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-[#FF9F1C]" />
                    </span>
                    <span className="pt-1">
                      <strong className="font-bold">{t}</strong>
                      {isEn ? ': ' : '：'}
                      <span className="text-[#4A4A46]">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 示意圖：新客源流入場館，原有會員不變 */}
            <div className="lg:col-span-5 vc-anim" aria-hidden="true">
              <svg viewBox="0 0 400 320" className="w-full h-auto">
                {sources.map(([label, x, y], k) => {
                  const path = `M${x} ${y} Q ${(Number(x) + 200) / 2 + (k % 2 ? -30 : 30)} ${(Number(y) + 160) / 2} 200 160`;
                  return (
                    <g key={String(label)}>
                      <path d={path} fill="none" stroke="#FF9F1C" strokeOpacity=".45" strokeWidth="2" strokeDasharray="5 6" />
                      {[0, 1].map((n) => (
                        <circle key={n} r="5" fill="#FF9F1C">
                          <animateMotion dur="2.6s" begin={`${k * 0.45 + n * 1.3}s`} repeatCount="indefinite" path={path} />
                        </circle>
                      ))}
                      <rect x={Number(x) - 58} y={Number(y) - 16} width="116" height="32" rx="16" fill="#fff" stroke="#E5E5DF" />
                      <text x={x} y={Number(y) + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#141413">{label}</text>
                    </g>
                  );
                })}
                <circle cx="200" cy="160" r="70" fill="#FF9F1C" style={{ transformOrigin: '200px 160px', animation: 'vc-pulse 2.6s ease-in-out infinite' }} />
                <circle cx="200" cy="160" r="58" fill="#FFF6EA" stroke="#FF9F1C" strokeWidth="2" />
                <text x="200" y="146" textAnchor="middle" fontSize="15" fontWeight="800" fill="#141413">{isEn ? 'Your venue' : '你的場館'}</text>
                <rect x="152" y="158" width="96" height="26" rx="13" fill="#141413" />
                <text x="200" y="176" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{isEn ? 'Members unchanged' : '原有會員照舊'}</text>
              </svg>
              <p className="text-center text-xs text-[#6C6C66] mt-1">
                {isEn ? 'New demand flows in; existing members stay as they are.' : '新的需求流進來，原有會員維持不變。'}
              </p>
            </div>
          </div>

          {/* 創造額外需求 */}
          <div className="mt-12">
            <h4 className="text-lg font-bold text-[#141413]">
              {isEn ? 'BEAT PASS doesn’t replace venues. It creates additional demand.' : 'BEAT PASS 的角色不是取代場館，而是創造額外需求'}
            </h4>
            <p className="text-sm text-[#4A4A46] mt-1 leading-relaxed">
              We aim to generate incremental demand, not replace existing customers.
              <br />
              {isEn ? 'BEAT PASS helps venues reach people who might not otherwise walk in. For example:' : 'BEAT PASS 的目標是幫助場館接觸原本不一定會走進來的消費者。舉例來說：'}
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {demand.map(([Icon, who, before, after], k) => {
                const existing = k === demand.length - 1;
                return (
                  <div key={who} className={`h-full flex flex-col border ${existing ? 'bg-[#FAF9F6] border-[#E5E5DF]' : 'bg-white border-[#E5E5DF]'}`}>
                    <div className="p-4 pb-3 flex items-center gap-2">
                      <span className={`w-8 h-8 flex items-center justify-center shrink-0 ${existing ? 'bg-[#141413]' : 'bg-[#FFF6EA] border border-[#FF9F1C]/40'}`}>
                        <Icon className={`w-4 h-4 ${existing ? 'text-white' : 'text-[#FF9F1C]'}`} />
                      </span>
                      <span className="text-sm font-bold text-[#141413]">{who}</span>
                    </div>
                    <div className="px-4 text-xs text-[#7A7A74]">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A8A8A2] mb-0.5">{isEn ? 'Today' : '原本的狀態'}</span>
                      {before}
                    </div>
                    <div className="px-4 py-2 text-[#FF9F1C]">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                    <div className={`mt-auto px-4 py-3 text-sm font-semibold leading-snug ${existing ? 'bg-[#EDEDE8] text-[#141413]' : 'bg-[#FF9F1C] text-white'}`}>
                      <span className={`block text-[10px] font-mono uppercase tracking-wider mb-0.5 ${existing ? 'text-[#7A7A74]' : 'text-white/80'}`}>{isEn ? 'Value BEAT PASS creates' : 'BEAT PASS 能創造的價值'}</span>
                      {after}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Callout
            text={isEn
              ? 'We want BEAT PASS to be another channel for venues to grow their customer base, not a replacement for how they manage their own members.'
              : '我們希望 BEAT PASS 成為場館拓展客源的另一個管道，而不是取代場館原本的會員經營。'}
            tag="Your Venue. Your Members. More Opportunities."
          />
        </div>

        {/* ================= Q2 ================= */}
        <div className="mt-6 p-6 sm:p-10 bg-white border border-[#E5E5DF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-semibold text-[#FF9F1C] mb-2">Q2</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141413] mb-4">
                {isEn ? 'Is the BEAT PASS system rigid, with lots of requirements?' : 'BEAT PASS 系統會不會設定得很死板？要求一堆？'}
              </h3>
              <p className="text-base font-semibold text-[#141413] leading-relaxed">
                {isEn
                  ? 'No. BEAT PASS is designed for flexible partnership, not to make venues change how they operate.'
                  : '不會。BEAT PASS 的設計理念是彈性合作，而不是要求場館改變原有的經營方式。'}
              </p>
              <p className="text-sm text-[#4A4A46] leading-relaxed mt-3">
                {isEn
                  ? 'Venues differ in how they operate, their membership systems and what they offer, so we don’t ask every venue to follow the same process. Each venue can:'
                  : '我們理解不同場館有不同的營運模式、會員制度與服務內容，因此不會要求所有場館按照同一套流程運作。場館可以依照自身需求：'}
              </p>
              <ul className="mt-4 space-y-2">
                {flexPoints.map(([Icon, t]) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#141413]">
                    <span className="w-7 h-7 shrink-0 bg-[#FFF6EA] border border-[#FF9F1C]/40 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-[#FF9F1C]" />
                    </span>
                    <span className="pt-1">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#4A4A46] leading-relaxed mt-5">
                {isEn
                  ? 'Even with the full system partnership, you don’t have to turn on every feature. We only set shared rules for what is essential: transaction check-ins, member benefits, settlement and consumer protection.'
                  : '即使選擇完整系統合作，也不代表所有功能都必須啟用。我們只會針對交易核銷、會員權益、帳務結算及消費者保障等必要事項建立共同規範。'}
              </p>
            </div>

            {/* 示意圖：場館後台設定面板（動畫） */}
            <div className="lg:col-span-5 vc-anim" aria-hidden="true">
              <div className="bg-[#141413] p-2 shadow-xl">
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E5DF]">
                    <span className="text-xs font-bold text-[#141413]">BEAT Partner Portal</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FF9F1C] text-white">{isEn ? 'Set by you' : '場館自己設定'}</span>
                  </div>
                  <div className="p-4 space-y-4 text-xs">
                    <div>
                      <div className="font-bold text-[#141413] mb-2">{isEn ? 'Open time slots' : '開放時段'}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {(isEn ? ['Weekday AM', 'Weekday PM', 'Weekend'] : ['平日早上', '平日下午', '週末']).map((t, k) => (
                          <span
                            key={t}
                            className="px-2 py-1 border text-[11px] font-semibold"
                            style={k === 1 ? { background: '#FF9F1C', color: '#fff', borderColor: '#FF9F1C' } : { animation: `vc-chip 4s ease-in-out ${k * 1.2}s infinite`, background: '#fff', color: '#8C8C85', borderColor: '#E5E5DF' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-[#141413] mb-2">
                        <span>{isEn ? 'Spots per slot' : '每時段名額'}</span>
                      </div>
                      <div className="h-2 bg-[#EDEDE8] relative">
                        <div className="h-2 bg-[#FF9F1C] relative" style={{ animation: 'vc-slide 4s ease-in-out infinite', width: '40%' }}>
                          <span className="absolute -right-2 -top-1.5 w-4 h-4 bg-white border-2 border-[#FF9F1C] rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        [isEn ? 'Group classes' : '團體課', true, false],
                        [isEn ? 'Open training' : '自由訓練', true, false],
                        [isEn ? 'Private coaching' : '私人教練', false, true],
                        [isEn ? 'Pause on 12/31' : '12/31 暫停開放', false, true],
                      ].map(([label, on, anim], k) => (
                        <div key={String(label)} className="flex items-center justify-between">
                          <span className="text-[#4A4A46] font-medium">{label}</span>
                          <span
                            className="relative w-9 h-5 rounded-full"
                            style={anim ? { animation: `vc-track 4s ease-in-out ${k * 0.6}s infinite`, background: '#D6D6D0' } : { background: on ? '#FF9F1C' : '#D6D6D0' }}
                          >
                            <span
                              className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow"
                              style={anim ? { animation: `vc-knob 4s ease-in-out ${k * 0.6}s infinite` } : { transform: on ? 'translateX(16px)' : 'none' }}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-[#6C6C66] mt-3">
                {isEn ? 'Hours, spots and services are all switched on and off by the venue.' : '時段、名額、服務，開關都在場館手上。'}
              </p>
            </div>
          </div>

          {/* 必要的部分統一，不必要的部分交給場館 */}
          <div className="mt-12">
            <h4 className="text-lg font-bold text-[#141413] mb-4">
              {isEn ? 'What’s essential is shared. Everything else is up to the venue.' : '必要的部分統一，不必要的部分交給場館決定。'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { badge: isEn ? 'Shared platform rules' : '平台統一規範', title: isEn ? 'BEAT PASS handles' : 'BEAT PASS 負責', items: beatDuties, venue: false, Icon: ShieldCheck },
                { badge: isEn ? 'Set by the venue' : '場館自主設定', title: isEn ? 'The venue decides' : '場館自行決定', items: venueChoices, venue: true, Icon: Building2 },
              ].map((c) => (
                <div key={c.title} className={`h-full p-6 border ${c.venue ? 'bg-[#FFF6EA] border-[#FF9F1C]/50' : 'bg-[#FAF9F6] border-[#E5E5DF]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-bold ${c.venue ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#141413] border border-[#E5E5DF]'}`}>{c.badge}</span>
                    <c.Icon className={`w-6 h-6 ${c.venue ? 'text-[#FF9F1C]' : 'text-[#141413]'}`} />
                  </div>
                  <div className="text-base font-bold text-[#141413] mt-3 mb-3">{c.title}</div>
                  <ul className="space-y-2">
                    {c.items.map(([Icon, x]) => (
                      <li key={x} className="flex items-center gap-2.5 text-sm text-[#4A4A46]">
                        <Icon className={`w-4 h-4 shrink-0 ${c.venue ? 'text-[#FF9F1C]' : 'text-[#7A7A74]'}`} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 場館可自主決定的項目 */}
          <div className="mt-12">
            <p className="text-sm font-semibold text-[#141413] mb-1">
              {isEn
                ? 'Every venue runs differently. BEAT PASS shouldn’t hold all partners to one set of rules.'
                : '每間場館的營運方式都不同，BEAT PASS 不應該用同一套規則限制所有合作夥伴。'}
            </p>
            <p className="text-xs text-[#7A7A74] leading-relaxed">
              {isEn
                ? '* For example, a climbing gym can open only weekday-afternoon taster sessions; a yoga studio can open only selected classes; a gym can set how many BEAT PASS visits it accepts each day.'
                : '* 例如，攀岩館可以只開放平日下午的體驗入場；瑜伽教室可以只開放指定課程；健身房則可以設定每天可供 BEAT PASS 使用的名額。'}
            </p>
          </div>

          <Callout
            text={isEn ? 'We want the system to fit the venue, not make the venue fit the system.' : '我們希望系統配合場館，而不是讓場館配合系統。'}
            tag="Flexible by Design. Your Venue, Your Way."
          />
        </div>
      </div>
    </section>
  );
};

// 場館「額外」收入來源
export const VenueExtraIncome: React.FC<VenueSectionProps> = ({ isEn }) => {
  const sources = [
    {
      icon: Laptop,
      title: isEn ? 'Digital nomads' : '數位遊牧工作者',
      desc: isEn
        ? 'People who work from different cities won’t sign a long contract with one gym. With BEAT PASS, they can find and book your venue wherever they are.'
        : '在不同城市移動工作的人，不會綁單一場館的長約。用 BEAT PASS，他們走到哪裡都能找到並預約你的場館。',
    },
    {
      icon: Shuffle,
      title: isEn ? 'Cross-trainers' : '交叉訓練者',
      desc: isEn
        ? 'Someone who lifts weights may also want yoga or bouldering. People who would never have walked into your venue can now drop in and try it.'
        : '平常重訓的人，也想上瑜伽、試抱石。原本不會走進你場館的人，現在可以順路來試試看。',
    },
    {
      icon: Building2,
      title: isEn ? 'Companies' : '企業',
      desc: isEn
        ? 'Employee wellness and corporate group classes bring groups of new visitors. Plan B venues get corporate classes 1–2 times every other month (after launch).'
        : '員工福利與企業團體課程，一次帶來一群新客人。B 方案場館每隔月安排 1～2 次企業團體課程（上線後提供）。',
    },
    {
      icon: Plane,
      title: isEn ? 'Travel operators' : '旅遊業者',
      desc: isEn
        ? 'Travellers on short stays can book a workout or class through BEAT PASS, adding visitors who would otherwise never find you.'
        : '短期停留的旅客，也能透過 BEAT PASS 在行程中預約運動或課程，帶來原本找不到你的客人。',
    },
  ];
  return (
    <section className="py-20 border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-2">
          {isEn ? 'Where does the “extra” revenue come from?' : '場館「額外」收入來自哪裡？'}
        </h2>
        <p className="text-sm text-[#6C6C66] mb-8 max-w-2xl leading-relaxed">
          {isEn
            ? 'These are people who usually don’t buy a single-venue membership. When they visit through BEAT PASS, your venue receives its share of the revenue each month.'
            : '這些人通常不會買單一場館的會籍。他們透過 BEAT PASS 來你這裡運動，場館每月就能分到收入。'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sources.map((x) => (
            <div key={x.title} className="p-6 bg-white border border-[#E5E5DF] shadow-sm">
              <div className="w-10 h-10 bg-[#FFF6EA] border border-[#FF9F1C]/40 flex items-center justify-center mb-4">
                <x.icon className="w-5 h-5 text-[#FF9F1C]" />
              </div>
              <h3 className="text-base font-bold text-[#141413] mb-2">{x.title}</h3>
              <p className="text-sm text-[#6C6C66] leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 場館常見問題（可展開）
export const VenueFaqAccordion: React.FC<VenueSectionProps> = ({ isEn }) => {
  const [open, setOpen] = React.useState<number | null>(null);
  const faqs = [
    {
      q: isEn ? 'BEAT PASS is so affordable. Is it too good to be true?' : 'BEAT PASS 這麼便宜，會不會騙人？',
      a: isEn
        ? 'No. Our founder loves sport too. BEAT PASS was built as a bridge between people who move and good venues. All partnership terms are written into the official contract.'
        : '不會。創辦人本身也熱愛運動，BEAT PASS 是為了運動者和優質場館而誕生的橋樑。所有合作條件都寫在正式合約裡。',
    },
    {
      q: isEn ? 'How does BEAT PASS make money?' : 'BEAT PASS 靠什麼賺錢？',
      a: isEn
        ? 'BEAT PASS also runs an online shop, and our own brand is on the way.'
        : 'BEAT PASS 有線上商城，後續也會推出自有品牌。',
    },
    {
      q: isEn ? 'Is it a hassle to leave?' : '退出 BEAT PASS 是不是很麻煩？',
      a: isEn
        ? 'Not at all. You can stop and leave any time. But Plan A has no monthly fee, so instead of leaving, why not just switch to Plan A?'
        : '一點也不麻煩，隨時停止、隨時退出。不過 A 方案本來就免月費，與其退出，為何不改成 A 方案就好？',
    },
    {
      q: isEn ? 'What types of venues is BEAT PASS for?' : 'BEAT PASS 適合哪些類型的場館？',
      a: isEn
        ? 'Gyms, yoga, bouldering, reformer pilates, boxing and performance training venues and studios are all welcome to inquire.'
        : '健身房、瑜伽、抱石攀岩、皮拉提斯器械、拳擊與專業體能訓練等運動場館與工作室，都歡迎洽詢合作。',
    },
    {
      q: isEn ? 'Do we need to replace our existing membership system?' : '場館需要更換原本的會員系統嗎？',
      a: isEn
        ? 'Not at all. The two can run side by side, with nothing complicated to set up.'
        : '完全不用，兩者可以並用，沒有任何複雜操作。',
    },
    {
      q: isEn ? 'When and how do we get paid?' : '合作的話，什麼時候撥款？怎麼撥？',
      a: isEn
        ? 'Settlement is monthly on the 1st, and payment goes to your bank account around the 10th of the following month. You can check daily check-ins, bookings and settlement details in BEAT Partner Portal at any time.'
        : '每月 1 日結算，次月 10 日左右撥款到場館帳戶。每日進場人次、預約與結算明細，隨時可以在 BEAT Partner Portal 查看。',
    },
  ];
  return (
    <section className="py-20 border-b border-[#E5E5DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] mb-8">
          {isEn ? 'Frequently Asked Questions' : '常見問題'}
        </h2>
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="border border-[#E5E5DF] bg-[#FAF9F6] overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#141413]">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8C8C85] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#FF9F1C]' : ''}`} />
                </button>
                {/* 答案一直放在 HTML 裡（收合時隱藏），搜尋引擎也讀得到 */}
                <div hidden={!isOpen} className="px-5 pb-5 text-xs sm:text-sm text-[#5C5C58] leading-relaxed border-t border-[#E5E5DF] pt-3 bg-white">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
