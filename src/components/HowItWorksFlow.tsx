import React, { useEffect, useState } from 'react';
import { UserPlus, CreditCard, MapPin, QrCode, Coins } from 'lucide-react';

// 「怎麼使用」：左邊是使用流程，右邊是會自動輪播的手機示意動畫（點步驟可以直接切換）。
interface HowItWorksFlowProps {
  isEn: boolean;
}

const STEP_MS = 3000;

export const HowItWorksFlow: React.FC<HowItWorksFlowProps> = ({ isEn }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = [
    {
      icon: UserPlus,
      title: isEn ? 'Sign up' : '註冊會員',
      desc: isEn ? 'Open the BEAT PASS app and sign up with your phone.' : '打開 BEAT PASS App，用手機註冊。',
    },
    {
      icon: CreditCard,
      title: isEn ? 'Pick a plan' : '選方案',
      desc: isEn
        ? 'A member card (30 days, for venue entry) or a class plan (points, for booking classes).'
        : '會員卡（30 天，進場運動用）或上課方案（點數，預約課程用）。',
    },
    {
      icon: MapPin,
      title: isEn ? 'Find a venue & book' : '找場館、預約',
      desc: isEn
        ? 'Search by location and type of workout, and book classes right in the app.'
        : '依地點和運動類型找場館，課程直接在 App 預約。',
    },
    {
      icon: QrCode,
      title: isEn ? 'Show your QR code' : '出示 QR Code 入場',
      desc: isEn
        ? 'Show the dynamic QR code on your phone at the front desk. Scan and go.'
        : '到櫃檯出示手機上的動態 QR Code，掃了就進。',
    },
    {
      icon: Coins,
      title: isEn ? 'Earn Chiu Chiu Coins' : '領啾啾幣、換優惠',
      desc: isEn
        ? 'Get Chiu Chiu Coins when you buy a plan or join events, and redeem offers announced in the app.'
        : '購買方案或參加活動可以拿到啾啾幣，兌換 App 公告的優惠。',
    },
  ];

  // 自動輪播；使用者偏好減少動態效果時不自動播放
  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % 5), STEP_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  const pick = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
      <style>{`
        @keyframes bp-scan { 0%,100% { top: 8%; } 50% { top: 86%; } }
        @keyframes bp-pop { 0% { transform: scale(.6); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
        @keyframes bp-progress { from { width: 0%; } to { width: 100%; } }
        @media (prefers-reduced-motion: reduce) { .bp-anim { animation: none !important; } }
      `}</style>

      {/* 流程 */}
      <ol className="lg:col-span-7 space-y-3">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title}>
              <button
                onClick={() => pick(i)}
                className={`w-full text-left flex items-start gap-4 p-4 border transition-colors cursor-pointer ${
                  on ? 'bg-[#FFF6EA] border-[#FF9F1C]/60' : 'bg-[#FAF9F6] border-[#E5E5DF] hover:border-[#FF9F1C]/40'
                }`}
              >
                <span
                  className={`w-9 h-9 shrink-0 flex items-center justify-center text-sm font-extrabold ${
                    on ? 'bg-[#FF9F1C] text-white' : 'bg-white border border-[#E5E5DF] text-[#141413]'
                  }`}
                >
                  {i + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-sm sm:text-base font-bold text-[#141413]">{s.title}</span>
                  <span className="block text-xs sm:text-sm text-[#6C6C66] mt-0.5 leading-relaxed">{s.desc}</span>
                  {on && !paused && (
                    <span className="block h-0.5 bg-[#FF9F1C]/20 mt-2 overflow-hidden">
                      <span
                        key={active}
                        className="bp-anim block h-full bg-[#FF9F1C]"
                        style={{ animation: `bp-progress ${STEP_MS}ms linear` }}
                      />
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* 手機示意動畫 */}
      <div className="lg:col-span-5 flex justify-center" aria-hidden="true">
        <div className="relative w-[230px] h-[440px] bg-[#141413] rounded-[34px] p-2.5 shadow-xl">
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#141413] rounded-full z-10" />
          <div className="relative w-full h-full bg-[#F7F7F5] rounded-[26px] overflow-hidden">
            {/* 頂部列 */}
            <div className="flex items-center justify-between px-4 pt-7 pb-2">
              <span className="text-[11px] font-extrabold tracking-wider text-[#141413]">
                BEAT <span className="text-[#FF9F1C]">PASS</span>
              </span>
              <span className="text-[10px] text-[#7A7A74]">{active + 1} / 5</span>
            </div>

            {/* 各步驟畫面 */}
            <div key={active} className="bp-anim px-4 pt-2" style={{ animation: 'bp-pop .45s ease-out' }}>
              {active === 0 && (
                <div className="space-y-3">
                  <div className="text-sm font-bold text-[#141413]">{isEn ? 'Welcome to BEAT PASS' : '歡迎加入 BEAT PASS'}</div>
                  <div className="h-9 bg-white border border-[#E5E5DF] px-3 flex items-center text-[11px] text-[#9A9A94]">{isEn ? 'Phone number' : '手機號碼'}</div>
                  <div className="h-9 bg-white border border-[#E5E5DF] px-3 flex items-center text-[11px] text-[#9A9A94]">{isEn ? 'Verification code' : '驗證碼'}</div>
                  <div className="h-9 bg-[#FF9F1C] text-white text-xs font-bold flex items-center justify-center">{isEn ? 'Sign up' : '註冊'}</div>
                </div>
              )}
              {active === 1 && (
                <div className="space-y-3">
                  <div className="text-sm font-bold text-[#141413]">{isEn ? 'Choose a plan' : '選擇方案'}</div>
                  <div className="p-3 bg-white border-2 border-[#FF9F1C]">
                    <div className="text-xs font-bold text-[#141413]">{isEn ? 'Member card' : '會員卡'}</div>
                    <div className="text-[10px] text-[#6C6C66] mt-0.5">{isEn ? '30 days · venue entry' : '30 天・進場運動'}</div>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E5DF]">
                    <div className="text-xs font-bold text-[#141413]">{isEn ? 'Class plan' : '上課方案'}</div>
                    <div className="text-[10px] text-[#6C6C66] mt-0.5">{isEn ? 'Points · book classes' : '點數・預約課程'}</div>
                  </div>
                </div>
              )}
              {active === 2 && (
                <div className="space-y-2.5">
                  <div className="text-sm font-bold text-[#141413]">{isEn ? 'Venues near you' : '附近的場館'}</div>
                  {[
                    [isEn ? 'Yoga' : '瑜伽', '0.4 km'],
                    [isEn ? 'Bouldering' : '抱石', '0.9 km'],
                    [isEn ? 'Pilates' : '皮拉提斯', '1.2 km'],
                  ].map(([t, d], i) => (
                    <div key={t} className={`p-2.5 bg-white border flex items-center justify-between ${i === 1 ? 'border-[#FF9F1C]' : 'border-[#E5E5DF]'}`}>
                      <div>
                        <div className="text-[11px] font-bold text-[#141413]">{t}</div>
                        <div className="text-[9px] text-[#7A7A74]">{d}</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 ${i === 1 ? 'bg-[#FF9F1C] text-white' : 'bg-[#FAF9F6] text-[#6C6C66]'}`}>
                        {isEn ? 'Book' : '預約'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {active === 3 && (
                <div className="flex flex-col items-center pt-2">
                  <div className="text-sm font-bold text-[#141413] mb-3">{isEn ? 'Show at the front desk' : '請出示給櫃檯'}</div>
                  <div className="relative w-36 h-36 bg-white border border-[#E5E5DF] p-2.5">
                    <div className="grid grid-cols-9 gap-[3px] w-full h-full">
                      {Array.from({ length: 81 }).map((_, k) => {
                        const r = Math.floor(k / 9);
                        const c = k % 9;
                        const finder = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3);
                        const on = finder || (r * 7 + c * 5 + r * c) % 3 === 0;
                        return <span key={k} className={on ? 'bg-[#141413]' : 'bg-transparent'} />;
                      })}
                    </div>
                    <span className="bp-anim absolute left-1 right-1 h-0.5 bg-[#FF9F1C] shadow-[0_0_8px_#FF9F1C]" style={{ animation: 'bp-scan 1.8s ease-in-out infinite' }} />
                  </div>
                  <div className="text-[10px] text-[#6C6C66] mt-3">{isEn ? 'Dynamic code · refreshes automatically' : '動態 QR Code・自動更新'}</div>
                </div>
              )}
              {active === 4 && (
                <div className="flex flex-col items-center pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFF6EA] border-2 border-[#FF9F1C] flex items-center justify-center">
                    <Coins className="w-8 h-8 text-[#FF9F1C]" />
                  </div>
                  <div className="text-lg font-extrabold text-[#141413] mt-3">{isEn ? 'Chiu Chiu Coins' : '啾啾幣'}</div>
                  <div className="text-[11px] text-[#6C6C66] mt-1">{isEn ? 'Redeem offers in the app' : '兌換 App 公告的優惠'}</div>
                  <div className="mt-4 h-8 px-4 bg-[#FF9F1C] text-white text-[11px] font-bold flex items-center">{isEn ? 'See offers' : '查看優惠'}</div>
                </div>
              )}
            </div>

            {/* 底部進度點 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {steps.map((s, i) => (
                <span key={s.title} className={`h-1.5 transition-all duration-300 ${i === active ? 'w-5 bg-[#FF9F1C]' : 'w-1.5 bg-[#D6D6D0]'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
