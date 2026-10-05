import { FAQItem } from '../types';

// News articles are managed in Notion and served by /api/news (see functions/api/news.ts).

export const BEAT_PASS_FAQS: FAQItem[] = [
  {
    question: 'BEAT PASS 是什麼？',
    questionEn: 'What is BEAT PASS?',
    answer: 'BEAT PASS 是比忒科技旗下的運動會員服務。透過單一數位憑證，串聯不同型態的優質運動空間，讓使用者能依據生活日程、興趣愛好與體能目標，隨時自由探索多元運動。',
    answerEn: 'BEAT PASS is BEAT Technology’s premier sports membership. With a single digital pass, members enjoy flexible access to a curated network of movement spaces tailored to their lifestyle.'
  },
  {
    question: '哪些類型的運動場館可以使用？',
    questionEn: 'What types of venues can I explore with BEAT PASS?',
    answer: 'BEAT PASS 生態涵蓋多種運動領域，包括自由重量與體能訓練健身房、瑜伽與皮拉提斯會館、室內抱石攀岩館、拳擊格鬥空間、游泳池以及風格運動工作室等，且合作場域持續拓展中。',
    answerEn: 'Our network includes fitness gyms, yoga and Pilates studios, indoor bouldering gyms, boxing arenas, swimming pools, and specialized boutique studios, continually expanding across urban hubs.'
  },
  {
    question: '如何加入 BEAT PASS？',
    questionEn: 'How do I get started with BEAT PASS?',
    answer: '使用者可直接於官方網頁或數位應用平台完成註冊開通，即可即時啟用會員帳號，自由瀏覽周邊合作場館，並安排專屬於自己的運動時段。',
    answerEn: 'Users can register and activate membership seamlessly through our official web or mobile experience, immediately discovering nearby venues and scheduling activities.'
  },
  {
    question: '如何使用會員服務進行現場入場？',
    questionEn: 'How does digital check-in work at partner venues?',
    answer: '抵達合作場館時，僅需開啟手機出示專屬數位 QR Code 憑證，由場館人員或感應設備完成掃描核驗，流程直覺快速，免去繁瑣紙本登記或個別場館繁雜程序。',
    answerEn: 'Upon arrival at any partner venue, simply present your digital QR Code on your mobile device for rapid, contactless check-in without cumbersome paperwork.'
  },
  {
    question: '什麼是「啾啾幣」？',
    questionEn: 'What is "Chiu Chiu Coin" (啾啾幣)?',
    answer: '「啾啾幣」是運動與 BEAT 生態中的專屬回饋機制。我們相信運動不只是完成一次訓練，每一次的投入與探索都值得被記錄與賦予價值。啾啾幣將運動體驗、會員回饋與 BEAT 數位生態緊密連結，為使用者創造持續前進的動力。',
    answerEn: '"Chiu Chiu Coin" (啾啾幣) is the proprietary rewards mechanism within the BEAT ecosystem. It bridges workout activities, member benefits, and ecosystem perks, ensuring every movement generates lasting value.'
  },
  {
    question: '什麼是「會員卡」、「點數」與「啾啾幣」？分別幹嘛用、在哪裡使用？',
    questionEn: 'What are Member Cards, Pass Points, and Chiu Chiu Coins? How and where are they used?',
    answer: '【會員卡】為全生態運動身分通行證，於全台合作場館櫃檯或閘門出示手機 QR Code 即可快速核銷入場；【點數】為彈性扣抵額度，於 BEAT 平台線上預約各場館團課、教練課或自由訓練時扣抵；【啾啾幣】為運動獎勵回饋，完成訓練或挑戰即可累積，可用於 BEAT Commerce 商城折抵裝備選品與合作品牌專屬禮遇。',
    answerEn: '【Member Pass】serves as your universal digital entry pass at all partner venues via QR code. 【Pass Points】are flexible credits deducted when booking group classes or sessions online. 【Chiu Chiu Coin】is an activity-earned reward used in BEAT Commerce for gear discounts and partner perks.'
  },
  {
    question: '如何線上預約課程？會有即時訊息提醒嗎？',
    questionEn: 'How does online class booking work, and are there instant notifications?',
    answer: '會員可在 BEAT PASS 介面瀏覽各場館課表、師資與即時剩餘名額，線上預約一目了然、一鍵完成。系統將透過「即時訊息」發送預約確認、課前提醒與場館臨時變動通知，讓運動排程輕鬆掌握絕不錯過。',
    answerEn: 'Members can view live schedules, instructors, and availability across venues to book instantly. Our Instant Messaging feature sends booking confirmations, reminder alerts, and venue updates straight to your mobile device.'
  },
  {
    question: '運動場館如何成為合作夥伴？',
    questionEn: 'How can a sports venue become a partner?',
    answer: '各類型運動空間經營者可透過網站「合作洽詢」頁面提交基本資訊，比忒科技商務拓展團隊將於 1-2 個工作日內與您聯繫，共同探討場館曝光、數位工具導入與生態合作可能。',
    answerEn: 'Venue operators can submit an inquiry through our Partners or Contact page. Our Business Development team will reach out within 1-2 business days to discuss collaboration opportunities.'
  }
];

export const VENUE_CATEGORIES = [
  { id: 'fitness', name: '體能訓練 / 健身', nameEn: 'Fitness & Conditioning', icon: 'Dumbbell', count: '45+ 場館' },
  { id: 'yoga', name: '瑜伽 / 伸展冥想', nameEn: 'Yoga & Mindfulness', icon: 'Sparkles', count: '30+ 場館' },
  { id: 'climbing', name: '抱石 / 室內攀岩', nameEn: 'Bouldering & Climbing', icon: 'Mountain', count: '18+ 場館' },
  { id: 'boxing', name: '拳擊 / 格鬥對練', nameEn: 'Boxing & Martial Arts', icon: 'Flame', count: '15+ 場館' },
  { id: 'pilates', name: '器械皮拉提斯', nameEn: 'Reformer Pilates', icon: 'Activity', count: '22+ 場館' },
  { id: 'aquatic', name: '潛水 / 游泳', nameEn: 'Diving & Swimming', icon: 'Waves', count: '12+ 場館' }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    en: 'TECHNOLOGY',
    zhTitle: '讓複雜的事情變得簡單。',
    enTitle: 'Simplify Complexity Through Engineering.',
    desc: '以技術化解繁雜的壁壘，把流暢直覺的體驗交到使用者與場館手中。',
    descEn: 'Dissolving friction with modern software, delivering intuitive and reliable experiences for users and venues.',
    number: '01'
  },
  {
    en: 'MOVEMENT',
    zhTitle: '讓人擁有更多選擇。',
    enTitle: 'Empower People with Freedom of Choice.',
    desc: '運動不再被固定時空侷限，自主決定今天在何處揮灑汗水。',
    descEn: 'Movement free from rigid contracts or fixed locations. You decide when and where to train.',
    number: '02'
  },
  {
    en: 'DESIGN',
    zhTitle: '讓科技自然融入生活。',
    enTitle: 'Seamlessly Integrate Technology into Daily Living.',
    desc: '不盲目堆疊功能，專注於美學、細節與現代人生活的真實連結。',
    descEn: 'No feature bloat. Focused strictly on aesthetics, kinetic details, and genuine connections to urban life.',
    number: '03'
  },
  {
    en: 'PARTNERSHIP',
    zhTitle: '創造長期且有價值的合作。',
    enTitle: 'Cultivate Sustainable Long-Term Partnerships.',
    desc: '與場館、品牌與企業同向而行，互信互惠，建立長青商業夥伴關係。',
    descEn: 'Moving hand-in-hand with venue owners and brands to establish enduring, mutually beneficial ecosystems.',
    number: '04'
  },
  {
    en: 'POSSIBILITY',
    zhTitle: '持續探索下一個可能。',
    enTitle: 'Relentlessly Explore What’s Next.',
    desc: '從運動出發，不設限於單一產品，向更寬廣的數位生態持續躍進。',
    descEn: 'Starting with fitness, expanding beyond a single product into an interconnected lifestyle ecosystem.',
    number: '05'
  }
];
