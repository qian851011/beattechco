import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie, Award } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | 'rights' | null;
  onClose: () => void;
  language: 'zh-TW' | 'en';
}

interface NotionLegalDoc {
  titleZh: string;
  titleEn: string;
  updated: string;
  paragraphsZh: string[];
  paragraphsEn: string[];
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, language }) => {
  const [notionDocs, setNotionDocs] = useState<Record<string, NotionLegalDoc>>({});

  useEffect(() => {
    const fetchLegal = async () => {
      try {
        const res = await fetch('/api/legal');
        if (res.ok) {
          const data = await res.json();
          if (data.docs) {
            setNotionDocs(data.docs);
          }
        }
      } catch (err) {
        console.warn('Could not fetch /api/legal:', err);
      }
    };

    fetchLegal();
  }, []);

  if (!type) return null;

  const contentMap = {
    privacy: {
      titleZh: '比忒科技隱私權政策',
      titleEn: 'BEAT Technology Privacy Policy',
      icon: ShieldCheck,
      updated: '2026-06-01',
      sections: [
        {
          titleZh: '一、政策適用範圍',
          titleEn: '1. Scope of Policy',
          textZh: '本隱私權政策適用於比忒科技有限公司（下稱「本公司」或「BEAT」）所營運之官方網站、BEAT PASS 數位服務及相關衍生產品。我們深知個人資料之重要性，並恪遵中華民國個人資料保護法及相關國際標準規範。',
          textEn: 'This policy applies to all websites, BEAT PASS digital services, and related offerings operated by Beat Technology Co., Ltd. We are committed to safeguarding personal information in compliance with applicable data protection laws.'
        },
        {
          titleZh: '二、個人資料蒐集與目的',
          titleEn: '2. Data Collection and Purpose',
          textZh: '我們僅於提供會員服務、場館即時核驗入場、商務合作聯繫、顧客服務支援及法令遵循之必要範圍內，蒐集姓名、聯絡方式、帳號憑證與基本使用紀錄。',
          textEn: 'We collect relevant contact details, account credentials, and service interaction logs strictly for account authentication, venue entry verification, customer support, and regulatory compliance.'
        },
        {
          titleZh: '三、資料保護與安全機制',
          titleEn: '3. Data Security Measures',
          textZh: '本公司採用現代化傳輸加密技術（如 TLS/HTTPS）及嚴格之存取控制權限管理，確保會員資料不遭未經授權之存取、洩漏或竄改。',
          textEn: 'We employ modern encryption standards (TLS/HTTPS) and granular access controls to prevent unauthorized access or disclosure of personal data.'
        },
        {
          titleZh: '四、使用者權益行使',
          titleEn: '4. Your Legal Rights',
          textZh: '您得隨時向本公司請求查詢、閱覽、製給複製本、補充或更正、停止蒐集處理或利用、或請求刪除您的個人資料。聯繫信箱：beat.tech.co@beatpasstw.com。',
          textEn: 'You retain the right to inquire, review, rectify, or request deletion of your personal data by contacting beat.tech.co@beatpasstw.com.'
        }
      ]
    },
    terms: {
      titleZh: '比忒科技平台服務條款',
      titleEn: 'BEAT Platform Terms of Service',
      icon: FileText,
      updated: '2026-06-01',
      sections: [
        {
          titleZh: '一、認知與接受條款',
          titleEn: '1. Acceptance of Terms',
          textZh: '當您使用比忒科技之官網、BEAT PASS 或其他數位服務時，即表示您已閱讀、瞭解並同意遵守本服務條款及相關規範。',
          textEn: 'By accessing or using our websites, BEAT PASS, or digital platforms, you agree to be bound by these Terms of Service.'
        },
        {
          titleZh: '二、會員帳號與使用規範',
          titleEn: '2. Member Account & Fair Use',
          textZh: '會員應妥善保管帳號與憑證，切勿將會員資格或 QR Code 轉借、租售或提供他人冒名使用。如發現異常或安全疑慮，請立即通知本公司。',
          textEn: 'Members must maintain the security of credentials. Digital passes or QR codes are personal and non-transferable.'
        },
        {
          titleZh: '三、智慧財產權宣告',
          titleEn: '3. Intellectual Property Rights',
          textZh: 'BEAT Technology、比忒科技、BEAT PASS、啾啾幣之商標、Logo、軟體程式碼、介面視覺及文字內容，皆屬比忒科技有限公司合法享有，未經書面授權不得複製或商業使用。',
          textEn: 'All trademarks, service marks, user interfaces, and software designs are proprietary property of Beat Technology Co., Ltd.'
        }
      ]
    },
    cookies: {
      titleZh: 'Cookie 與網站技術使用聲明',
      titleEn: 'Cookie & Tracking Policy',
      icon: Cookie,
      updated: '2026-06-01',
      sections: [
        {
          titleZh: '一、什麼是 Cookie？',
          titleEn: '1. What are Cookies?',
          textZh: 'Cookie 是由網頁伺服器儲存於您瀏覽器的小型文字檔案，用於協助網站記錄您的偏好設定（如語言切換）並提升瀏覽效率。',
          textEn: 'Cookies are small text files stored on your browser to remember preferences and optimize user experience.'
        },
        {
          titleZh: '二、我們如何使用 Cookie',
          titleEn: '2. How We Use Cookies',
          textZh: '我們僅使用必要之技術 Cookie 以維持網站基礎運行（例如語系設定、安全驗證），不會用於未獲授權的第三方廣告追蹤。您可隨時透過瀏覽器設定停用或清除。',
          textEn: 'We use strictly necessary technical cookies to maintain basic functionality and preferences, without invasive third-party ad tracking.'
        }
      ]
    },
    rights: {
      titleZh: '會員權益須知與消費者權益保障',
      titleEn: 'Member Rights & Guidelines',
      icon: Award,
      updated: '2026-06-01',
      sections: [
        {
          titleZh: '一、靈活自主運動體驗',
          titleEn: '1. Flexible Movement Experience',
          textZh: 'BEAT PASS 會員可於合作期間內，依個人作息靈活預約或前往合作場域運動。運動場域之空間設備與安全注意事項請配合各場合作規範。',
          textEn: 'Members enjoy flexible access to participating partner venues in accordance with venue safety instructions.'
        },
        {
          titleZh: '二、透明退換與客服保障',
          titleEn: '2. Support & Inquiries',
          textZh: '會員對訂閱或使用有任何疑問，均可隨時透過官方客服管道聯繫，我們將秉持公平、透明之原則協助妥善處理。',
          textEn: 'For membership or operational questions, contact support@beat-tech.com for prompt assistance.'
        }
      ]
    }
  };

  const currentDefault = contentMap[type];
  const Icon = currentDefault.icon;
  const notionDoc = notionDocs[type];

  const modalTitle = notionDoc
    ? (language === 'zh-TW' ? notionDoc.titleZh : (notionDoc.titleEn || notionDoc.titleZh))
    : (language === 'zh-TW' ? currentDefault.titleZh : currentDefault.titleEn);

  const modalUpdated = notionDoc ? notionDoc.updated : currentDefault.updated;

  const notionParagraphs = notionDoc
    ? (language === 'zh-TW' ? notionDoc.paragraphsZh : (notionDoc.paragraphsEn.length > 0 ? notionDoc.paragraphsEn : notionDoc.paragraphsZh))
    : null;

  const renderParagraph = (text: string, idx: number) => {
    if (text.startsWith('## ')) {
      return (
        <h3 key={idx} className="text-base sm:text-lg font-bold text-[#141413] pt-4 pb-1 border-b border-[#F0F0EB]">
          {text.replace(/^##\s*/, '')}
        </h3>
      );
    }
    if (text.startsWith('### ')) {
      return (
        <h4 key={idx} className="text-sm sm:text-base font-bold text-[#141413] pt-3">
          {text.replace(/^###\s*/, '')}
        </h4>
      );
    }
    if (text.startsWith('#### ')) {
      return (
        <h5 key={idx} className="text-xs sm:text-sm font-semibold text-[#141413] pt-2">
          {text.replace(/^####\s*/, '')}
        </h5>
      );
    }
    if (text.startsWith('• ') || text.startsWith('- ')) {
      return (
        <li key={idx} className="text-xs sm:text-sm text-[#4A4A46] pl-2 leading-relaxed list-disc ml-4">
          {text.replace(/^[•\-]\s*/, '')}
        </li>
      );
    }
    if (/^\d+\.\s/.test(text)) {
      return (
        <li key={idx} className="text-xs sm:text-sm text-[#4A4A46] pl-2 leading-relaxed list-decimal ml-4">
          {text.replace(/^\d+\.\s*/, '')}
        </li>
      );
    }
    if (text.startsWith('> ')) {
      return (
        <blockquote key={idx} className="p-3.5 bg-[#FAF9F6] border-l-2 border-[#FF9F1C] text-xs text-[#5C5C58] italic leading-relaxed my-2">
          {text.replace(/^>\s*/, '')}
        </blockquote>
      );
    }
    if (/^(第[一二三四五六七八九十百\d]+條|[一二三四五六七八九十]+、|Article\s+\d+|Section\s+\d+)/.test(text)) {
      return (
        <h4 key={idx} className="text-sm sm:text-base font-bold text-[#141413] pt-3 pb-1 text-[#141413]">
          {text}
        </h4>
      );
    }
    return (
      <p key={idx} className="text-xs sm:text-sm text-[#4A4A46] leading-relaxed">
        {text}
      </p>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white border border-[#DCDCD6] w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E5E5DF] flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFF4E5] border border-[#FF9F1C]/40 flex items-center justify-center">
              <Icon className="w-4 h-4 text-[#FF9F1C]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#141413]">
                {modalTitle}
              </h3>
              <div className="text-[11px] text-[#7A7A74]">
                {language === 'zh-TW' ? `更新日期：${modalUpdated}` : `Last Updated: ${modalUpdated}`}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6C6C66] hover:text-[#141413] border border-[#E5E5DF] hover:border-[#141413] transition-colors cursor-pointer bg-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-3.5 text-sm text-[#4A4A46] leading-relaxed bg-white max-h-[65vh]">
          {notionParagraphs && notionParagraphs.length > 0 ? (
            notionParagraphs.map((paragraph, idx) => renderParagraph(paragraph, idx))
          ) : (
            currentDefault.sections.map((sec, idx) => (
              <div key={idx} className="border-b border-[#F0F0EB] pb-4 last:border-0">
                <h4 className="font-semibold text-[#141413] mb-1.5 text-sm sm:text-base">
                  {language === 'zh-TW' ? sec.titleZh : sec.titleEn}
                </h4>
                <p className="text-[#5C5C58] text-xs sm:text-sm leading-relaxed">
                  {language === 'zh-TW' ? sec.textZh : sec.textEn}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#E5E5DF] bg-[#F7F7F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-xs"
          >
            {language === 'zh-TW' ? '我已瞭解' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
