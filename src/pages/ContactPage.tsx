import React, { useState, useEffect } from 'react';
import { Language, CollaborationType, ContactFormData } from '../types';
import { CheckCircle2, Send, Mail, Globe, Clock, AlertCircle } from 'lucide-react';

// All inquiries are delivered to this address via FormSubmit
const INQUIRY_EMAIL = 'beat.tech.co@beatpasstw.com';

const EMPTY_FORM: ContactFormData = {
  companyName: '',
  name: '',
  title: '',
  email: '',
  phone: '',
  collaborationType: 'BEAT PASS 場館合作',
  requirements: '',
  notes: ''
};

interface ContactPageProps {
  language: Language;
  defaultCollaborationType?: CollaborationType;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
  defaultCollaborationType
}) => {
  const isEn = language === 'en';

  const [formData, setFormData] = useState<ContactFormData>({
    ...EMPTY_FORM,
    collaborationType: defaultCollaborationType || EMPTY_FORM.collaborationType
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; requirements?: string }>({});

  useEffect(() => {
    if (defaultCollaborationType) {
      setFormData((prev) => ({ ...prev, collaborationType: defaultCollaborationType }));
    }
  }, [defaultCollaborationType]);

  const collaborationTypes: { id: CollaborationType; labelZh: string; labelEn: string }[] = [
    { id: 'BEAT PASS 場館合作', labelZh: 'BEAT PASS 場館合作', labelEn: 'Venue Partnership' },
    { id: '品牌合作', labelZh: '品牌合作', labelEn: 'Brand Partnership' },
    { id: '企業合作', labelZh: '企業合作', labelEn: 'Corporate Wellness' },
    { id: '電商合作', labelZh: '電商合作', labelEn: 'Commerce Channel' },
    { id: '技術合作', labelZh: '技術合作', labelEn: 'Tech Integration' },
    { id: '系統服務', labelZh: '系統服務', labelEn: 'SaaS & Systems' },
    { id: '其他', labelZh: '其他', labelEn: 'Other Inquiries' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const errors: { name?: string; email?: string; requirements?: string } = {};

    if (!formData.name.trim()) {
      errors.name = isEn ? 'Name is required.' : '此欄位為必填項目，請輸入姓名。';
    }

    if (!formData.email.trim()) {
      errors.email = isEn ? 'Email is required.' : '此欄位為必填項目，請輸入 Email。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = isEn ? 'Please enter a valid email address.' : '請輸入有效的 Email 地址格式。';
    }

    if (!formData.requirements.trim()) {
      errors.requirements = isEn ? 'Requirements description is required.' : '此欄位為必填項目，請輸入需求說明。';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage(
        isEn
          ? 'Required fields (* Name, Email, Requirements) must be filled out before submitting.'
          : '必填項目尚未填寫完整（標記 * 之姓名、Email、需求說明為必填），無法送出。'
      );
      return;
    }

    setIsSubmitting(true);
    // Abort if FormSubmit does not answer within 15 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const f = formData;
      // Sent straight from the visitor's browser to FormSubmit (no backend needed)
      const res = await fetch(`https://formsubmit.co/ajax/${INQUIRY_EMAIL}`, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `[BEAT 官網合作洽詢] ${f.collaborationType} - ${f.companyName.trim() || f.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: f.email.trim(),
          '合作類別': f.collaborationType,
          '聯絡人姓名': f.name.trim(),
          '職稱': f.title.trim() || '未填寫',
          '公司或場館': f.companyName.trim() || '個人／未填寫',
          '聯絡信箱 (Email)': f.email.trim(),
          '聯絡電話': f.phone.trim() || '未填寫',
          '需求說明': f.requirements.trim(),
          '備註': f.notes.trim() || '無'
        })
      });
      const data = await res.json().catch(() => ({}));
      // FormSubmit returns success as the string "true"; anything else is a failure
      if (res.ok && (data?.success === true || data?.success === 'true')) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          isEn
            ? 'Your inquiry could not be sent. Please try again later or email beat.tech.co@beatpasstw.com directly.'
            : '洽詢表單未能成功送出，請稍後再試，或直接來信 beat.tech.co@beatpasstw.com。'
        );
      }
    } catch {
      // Network error / server unreachable: never show a false success
      setErrorMessage(
        isEn
          ? 'Unable to reach the server. Please check your connection and try again, or email beat.tech.co@beatpasstw.com directly.'
          : '無法連線至伺服器，請檢查網路連線後再試，或直接來信 beat.tech.co@beatpasstw.com。'
      );
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setFieldErrors({});
    setSubmitted(false);
    setErrorMessage('');
  };

  const getCollabLabel = (typeId: CollaborationType) => {
    const item = collaborationTypes.find((c) => c.id === typeId);
    if (!item) return typeId;
    return isEn ? item.labelEn : item.labelZh;
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#141413] pt-24 pb-20">
      {/* CONTACT HERO */}
      <section className="border-b border-[#E5E5DF] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-widest">
              <span>GET IN TOUCH</span>
              <span className="text-[#C4C4BC]">/</span>
              <span>{isEn ? 'Connect with BEAT' : '合作洽詢'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight">
              Let's Talk.
              <span className="block text-2xl sm:text-3xl font-medium text-[#5C5C58] mt-2">
                {isEn ? 'Let’s explore what’s next together.' : '讓我們聊聊下一個可能。'}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#6C6C66] leading-relaxed">
              {isEn
                ? 'Whether you are a sports venue operator, brand representative, corporate wellness committee, or engineering partner, we look forward to hearing from you. Our Business Development team will respond within 1–2 business days.'
                : '無論您是運動場館經營者、品牌代表、企業福委會或科技合作團隊，歡迎留下您的需求與聯絡方式，比忒科技商務拓展團隊將於 1-2 個工作日內竭誠與您聯繫。'}
            </p>
          </div>
        </div>
      </section>

      {/* FORM & CORPORATE CONTACT DETAILS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Form Area */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-8 sm:p-12 bg-white border border-[#FF9F1C] shadow-md space-y-6">
                  <div className="w-12 h-12 bg-[#FFF4E5] border border-[#FF9F1C] flex items-center justify-center text-[#FF9F1C]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#141413] mb-2">
                      {isEn ? 'Inquiry Sent Successfully!' : '洽詢表單已成功送出！'}
                    </h3>
                    <p className="text-sm text-[#4A4A46] leading-relaxed">
                      {isEn
                        ? `Thank you for reaching out to BEAT Technology. We have received your inquiry regarding [${getCollabLabel(formData.collaborationType)}]. Our specialist will reach out within 1-2 business days.`
                        : `感謝您對比忒科技（BEAT Technology）的關注與支持。我們已收到您的【${getCollabLabel(formData.collaborationType)}】合作需求，商務專員將於 1-2 個工作日內透過 Email 或電話與您聯繫。`}
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF9F6] border border-[#E5E5DF] text-xs text-[#5C5C58] space-y-1">
                    <div>
                      <strong className="text-[#141413]">{isEn ? 'Contact Person: ' : '聯絡人：'}</strong>
                      {formData.name} {formData.title && `(${formData.title})`}
                    </div>
                    <div>
                      <strong className="text-[#141413]">{isEn ? 'Company / Venue: ' : '公司／場館：'}</strong>
                      {formData.companyName || (isEn ? 'Not specified' : '個人／未填寫')}
                    </div>
                    <div>
                      <strong className="text-[#141413]">Email: </strong>
                      {formData.email}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#FFF9F2] border border-[#FFD8A8] text-xs text-[#141413] flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#FF9F1C] shrink-0" />
                    <span>
                      {isEn
                        ? 'Inquiry notification sent directly to: beat.tech.co@beatpasstw.com'
                        : '已將您的合作洽詢即時傳送至：beat.tech.co@beatpasstw.com'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-xs"
                    >
                      {isEn ? 'Send Another Inquiry' : '送出另一則洽詢'}
                    </button>
                    <a
                      href={`mailto:beat.tech.co@beatpasstw.com?subject=${encodeURIComponent(
                        `[BEAT 官網合作洽詢] ${formData.collaborationType} - ${formData.companyName || formData.name}`
                      )}`}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#141413] bg-white border border-[#DCDCD6] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-colors cursor-pointer shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Open Mail Draft' : '開啟信件備份'}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-white border border-[#E5E5DF] shadow-sm space-y-6">
                  <div className="border-b border-[#F0F0EB] pb-4">
                    <h3 className="text-lg font-bold text-[#141413]">
                      {isEn ? 'Business Partnership Inquiry Form' : '商務合作洽詢表單'}
                    </h3>
                    <p className="text-xs text-[#6C6C66] mt-1">
                      {isEn ? 'Please fill in details below (* indicates required fields).' : '請填寫以下資訊，標記 * 為必填欄位。'}
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 合作類型 */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                      {isEn ? 'Collaboration Track *' : '合作類型 *'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {collaborationTypes.map((type) => {
                        const isSelected = formData.collaborationType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setFormData({ ...formData, collaborationType: type.id })}
                            className={`px-3 py-2 text-xs border text-left transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#FFF9F2] border-[#FF9F1C] text-[#141413] font-semibold shadow-2xs'
                                : 'bg-[#FAF9F6] border-[#E5E5DF] text-[#6C6C66] hover:text-[#141413] hover:border-[#141413]/30'
                            }`}
                          >
                            {isEn ? type.labelEn : type.labelZh}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 公司／場館名稱 */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                        {isEn ? 'Company / Venue Name' : '公司／場館名稱'}
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={isEn ? 'e.g., Summit Movement Lab' : '例如：比忒運動會館'}
                        className="w-full bg-[#FAF9F6] border border-[#E5E5DF] px-4 py-2.5 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:border-[#FF9F1C] focus:bg-white"
                      />
                    </div>

                    {/* 姓名 */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                        {isEn ? 'Full Name *' : '姓名 *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                        }}
                        placeholder={isEn ? 'e.g., Alex Chen' : '例如：王小明'}
                        className={`w-full bg-[#FAF9F6] border px-4 py-2.5 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:bg-white transition-colors ${
                          fieldErrors.name
                            ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400'
                            : 'border-[#E5E5DF] focus:border-[#FF9F1C]'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span>{fieldErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* 職稱 */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                        {isEn ? 'Job Title' : '職稱'}
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder={isEn ? 'e.g., General Manager / Brand Director' : '例如：場館營運經理 / 品牌總監'}
                        className="w-full bg-[#FAF9F6] border border-[#E5E5DF] px-4 py-2.5 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:border-[#FF9F1C] focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                        {isEn ? 'Email Address *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                        }}
                        placeholder="name@company.com"
                        className={`w-full bg-[#FAF9F6] border px-4 py-2.5 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:bg-white transition-colors ${
                          fieldErrors.email
                            ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400'
                            : 'border-[#E5E5DF] focus:border-[#FF9F1C]'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span>{fieldErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* 電話 */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                        {isEn ? 'Phone Number' : '電話'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isEn ? '+886 912 345 678' : '例如：0912-345-678 或 02-12345678'}
                        className="w-full bg-[#FAF9F6] border border-[#E5E5DF] px-4 py-2.5 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:border-[#FF9F1C] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* 需求 */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                      {isEn ? 'Inquiry & Requirements *' : '需求說明 *'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => {
                        setFormData({ ...formData, requirements: e.target.value });
                        if (fieldErrors.requirements) setFieldErrors({ ...fieldErrors, requirements: undefined });
                      }}
                      placeholder={isEn ? 'Please describe your venue location, brand collaboration idea, or technical scope...' : '請簡述您的合作想法、場館地點或預期合作方向...'}
                      className={`w-full bg-[#FAF9F6] border p-3 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:bg-white transition-colors ${
                        fieldErrors.requirements
                          ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400'
                          : 'border-[#E5E5DF] focus:border-[#FF9F1C]'
                      }`}
                    />
                    {fieldErrors.requirements && (
                      <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                        <span>{fieldErrors.requirements}</span>
                      </p>
                    )}
                  </div>

                  {/* 備註 */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2">
                      {isEn ? 'Additional Notes (Optional)' : '備註 (選填)'}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={isEn ? 'Any additional remarks, preferred contact times, etc...' : '任何補充資訊，例如方便聯繫的時段...'}
                      className="w-full bg-[#FAF9F6] border border-[#E5E5DF] p-3 text-xs text-[#141413] placeholder-[#A0A09A] focus:outline-none focus:border-[#FF9F1C] focus:bg-white"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF9F1C] hover:bg-[#F08C00] transition-colors cursor-pointer shadow-md shadow-[#FF9F1C]/25 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? (isEn ? 'Sending...' : '傳送中...') : (isEn ? 'Submit Inquiry' : '送出合作洽詢')}</span>
                    </button>
                    <span className="text-[11px] text-[#7A7A74]">
                      {isEn ? '* Marked fields are strictly required' : '* 標記為必填項目未填妥將無法送出'}
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 sm:p-9 bg-white border border-[#E5E5DF] shadow-xs space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#FF9F1C] font-semibold uppercase tracking-wider">
                    CONTACT INFORMATION
                  </div>
                  <h3 className="text-xl font-bold text-[#141413]">
                    {isEn ? 'Beat Technology Co., Ltd.' : '比忒科技有限公司'}
                  </h3>
                  <p className="text-xs text-[#6C6C66] tracking-wide">
                    {isEn ? 'Technology That Moves.' : 'Beat Technology Co., Ltd.'}
                  </p>
                </div>

                <div className="space-y-6 pt-6 text-xs text-[#4A4A46] border-t border-[#F0F0EB]">
                  <div className="flex items-start gap-4 pb-5 border-b border-[#F7F7F5]">
                    <Mail className="w-4 h-4 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-[#7A7A74] text-xs font-medium">{isEn ? 'Partnerships & BD' : '商務合作 (Partnerships)'}</div>
                      <a
                        href="mailto:beat.tech.co@beatpasstw.com"
                        className="font-mono text-[#141413] text-sm font-medium hover:text-[#FF9F1C] transition-colors break-all"
                      >
                        beat.tech.co@beatpasstw.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-5 border-b border-[#F7F7F5]">
                    <Mail className="w-4 h-4 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-[#7A7A74] text-xs font-medium">{isEn ? 'Press & Media' : '公關與媒體 (Press & Media)'}</div>
                      <div className="font-mono text-[#141413] text-sm font-medium">beatpass.tw@beatpasstw.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-5 border-b border-[#F7F7F5]">
                    <Clock className="w-4 h-4 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-[#7A7A74] text-xs font-medium">{isEn ? 'Business Hours' : '服務時間'}</div>
                      <div className="text-[#141413] text-xs sm:text-sm font-medium">{isEn ? 'Mon - Fri 09:30 - 18:30 (GMT+8)' : '週一至週五 09:30 - 18:30 (GMT+8)'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="w-4 h-4 text-[#FF9F1C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-[#7A7A74] text-xs font-medium">{isEn ? 'Operating Model' : '團隊型態'}</div>
                      <div className="text-[#141413] text-xs sm:text-sm font-medium">{isEn ? 'Remote-First Team' : '全遠端協作團隊 (Remote-First)'}</div>
                      <div className="text-[11px] text-[#7A7A74] leading-relaxed">
                        {isEn ? '100% digital operations, no physical office.' : '全數位化高效協作，無實體辦公門市'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality note */}
              <div className="p-6 sm:p-7 bg-white border border-[#E5E5DF] text-xs text-[#6C6C66] leading-relaxed shadow-2xs space-y-2">
                <span className="text-[#141413] font-semibold block text-xs">
                  {isEn ? 'Privacy & Confidentiality Guarantee' : '隱私與商業保密承諾'}
                </span>
                <p>
                  {isEn
                    ? 'BEAT Technology strictly adheres to privacy protection and nondisclosure standards. All information provided is utilized solely for partnership assessment and will never be shared without consent.'
                    : '比忒科技嚴格遵守保密協定與個資保護規範。您所填寫之合作需求與聯絡方式僅供商務洽談評估，絕不對外揭露或用於未經許可之用途。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
