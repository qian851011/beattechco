export type PageId = 'home' | 'about' | 'beat-pass' | 'partners' | 'news' | 'contact';

export type Language = 'zh-TW' | 'en';

export type NewsCategory = 'All' | 'Company' | 'BEAT PASS' | 'Partnership' | 'Commerce' | 'Technology';

export interface NewsItem {
  id: string;
  category: 'Company' | 'BEAT PASS' | 'Partnership' | 'Commerce' | 'Technology';
  categoryZh: string;
  date: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  content: string[];
  contentEn?: string[];
}

export interface FAQItem {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | 'rights';

export type CollaborationType = 
  | 'BEAT PASS 場館合作'
  | '品牌合作'
  | '企業合作'
  | '電商合作'
  | '技術合作'
  | '系統服務'
  | '其他';

export interface ContactFormData {
  companyName: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  collaborationType: CollaborationType;
  requirements: string;
  notes: string;
}
