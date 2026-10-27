import React from 'react';
import { PageId, Language, CollaborationType } from '../types';
import { ArrowRight, QrCode, CalendarCheck, LayoutDashboard, BarChart3 } from 'lucide-react';

interface VenueSystemPageProps {
  onNavigate: (page: PageId, defaultCollaborationType?: CollaborationType) => void;
  language: Language;
}

// 場館管理系統頁：內容皆取自官網既有文案（首頁、合作夥伴、BEAT PASS 頁與 FAQ），不含價格與場館數字。
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
        ? 'Less than NT$500 per month. Partner recruitment offer: the first 100 partner venues pay no monthly fee!!?? Choose “Venue Partnership” or “SaaS & Systems” on our contact form and our business team will reply within 1–2 business days.'
        : '每個月不到500，合作夥伴招募優惠活動前100個合作場館免月費!!?? 請在合作洽詢表單選擇「BEAT PASS 場館合作」或「系統服務」留下需求，比忒科技商務團隊將於 1–2 個工作日內與您聯繫。',
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
                {isEn ? 'Not just a system, but a digital growth partner for venues.' : '不只是系統，更是場館成長的數位夥伴。'}
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
