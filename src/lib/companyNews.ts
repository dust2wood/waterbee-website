export type CompanyNewsItem = {
  id: string
  date: string
  category: { ko: string; en: string }
  publisher: { ko: string; en: string }
  title: { ko: string; en: string }
  summary: { ko: string; en: string }
  url: string
}

export const companyNewsItems: CompanyNewsItem[] = [
  {
    id: 'vietnam-suseuro-2026',
    date: '2026-07-03',
    category: { ko: '글로벌', en: 'Global' },
    publisher: { ko: '인더뉴스', en: 'InTheNews' },
    title: {
      ko: '베트남 스스로 프로젝트 3기 참여 기업 선정',
      en: 'Selected for the third Suseuro Project in Vietnam',
    },
    summary: {
      ko: '베트남 학교·공공시설 대상 스마트 여과드레인 진출 준비 · 현지 IR·바이어 상담·PoC 연계 참여',
      en: 'Vietnam market-entry preparation for smart filter-drain systems · Local IR, buyer meetings and PoC opportunities',
    },
    url: 'https://www.inthenews.co.kr/news/article.html?no=88923',
  },
  {
    id: 'uzbekistan-water-energy-2026',
    date: '2026-03-27',
    category: { ko: '글로벌 협력', en: 'Global Partnership' },
    publisher: { ko: '에코뉴스', en: 'Eco News' },
    title: {
      ko: '우즈베키스탄 거점 물·에너지 공동사업 추진',
      en: 'Joint water and energy initiative targeting Uzbekistan',
    },
    summary: {
      ko: '워터비 등 물기업 6개사·한국상하수도협회 협약 체결 · 우즈베키스탄 물·에너지 융합 시범사업 추진 계획',
      en: 'Agreement with six water-sector companies and KWWA · Planned water-quality, leak-detection and energy pilot in Uzbekistan',
    },
    url: 'https://econews.co.kr/boards/304/view',
  },
  {
    id: 'water-korea-global-mou-2026',
    date: '2026-03-25',
    category: { ko: '글로벌 협력', en: 'Global Partnership' },
    publisher: { ko: '국토일보', en: 'Korea Land Daily' },
    title: {
      ko: 'WATER KOREA 2026 글로벌 시장 진출 상생협력 MOU',
      en: 'Global market cooperation MOU at WATER KOREA 2026',
    },
    summary: {
      ko: '한국상하수도협회·워터비 등 물기업 6개사 다자간 업무협약 · 해외 물시장 공동사업·상생협력',
      en: 'Multilateral agreement between KWWA and six water-sector companies, including Waterbee · Overseas business cooperation',
    },
    url: 'https://www.ikld.kr/news/articleView.html?idxno=331527',
  },
  {
    id: 'water-energy-export-model-2026',
    date: '2026-03-25',
    category: { ko: '글로벌 협력', en: 'Global Partnership' },
    publisher: { ko: '에너지데일리', en: 'Energy Daily' },
    title: {
      ko: '물·에너지 융합 패키지형 해외진출 추진',
      en: 'Water-energy package export initiative begins',
    },
    summary: {
      ko: '물기업 6개사·한국상하수도협회 협력 · 수질관리·누수감지·에너지 효율 통합 해외사업 모델 구축 추진',
      en: 'Six-company cooperation with KWWA · Integrated overseas water-quality, leak-detection and energy-efficiency model development',
    },
    url: 'https://www.energydaily.co.kr/news/articleView.html?idxno=165635',
  },
  {
    id: 'open-innovation-results-2025',
    date: '2025-12-09',
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '서울경제', en: 'Seoul Economic Daily' },
    title: {
      ko: '윌로펌프 협업 기술 검증·사업화 성과 공개',
      en: 'Technology validation results from Wilo Pump collaboration',
    },
    summary: {
      ko: '윌로펌프 공동 스마트팜 측정센서 PoC 약 6개월 추진 · 부산창조경제혁신센터 피칭데이 성과 발표',
      en: 'Six-month smart-farm sensor PoC with Wilo Pump · Results presented at Busan CCEI pitching day',
    },
    url: 'https://www.sedaily.com/article/14155531',
  },
  {
    id: 'open-innovation-pitching-day-2025',
    date: '2025-12-09',
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '인더뉴스', en: 'InTheNews' },
    title: {
      ko: '오픈이노베이션 챌린지 2025 피칭데이 성료',
      en: 'Open Innovation Challenge 2025 pitching day completed',
    },
    summary: {
      ko: '워터비 등 스타트업 14개사 현장 실증 결과 발표 · 대·중견기업 협업 및 후속 사업화·투자 연계 논의',
      en: 'Corporate PoC results from 14 startups, including Waterbee · Follow-on commercialization and investment discussions',
    },
    url: 'https://www.inthenews.co.kr/news/article.html?no=80459',
  },
  {
    id: 'wilo-open-innovation-poc-2025',
    date: '2025-07-23',
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '메트로신문', en: 'Metro Seoul' },
    title: {
      ko: '윌로펌프와 스마트 수질관리 기술 실증 추진',
      en: 'Smart water-management technology PoC with Wilo Pump',
    },
    summary: {
      ko: '부산창조경제혁신센터 오픈이노베이션 참여 · 윌로펌프 공동 수질 측정 정밀도·현장 적용성 검증 추진',
      en: 'Busan CCEI open-innovation program · Joint measurement-precision and field-applicability validation with Wilo Pump',
    },
    url: 'https://www.metroseoul.co.kr/article/20250723500563',
  },
  {
    id: 'wilo-open-innovation-kookje-2025',
    date: '2025-07-23',
    category: { ko: '언론보도', en: 'Press' },
    publisher: { ko: '국제신문', en: 'The Kookje Daily News' },
    title: {
      ko: '중견기업·스타트업 협업으로 스마트 수질관리 고도화',
      en: 'Advancing smart water management through corporate collaboration',
    },
    summary: {
      ko: '윌로펌프·워터비 수질 측정 기술 협업 사례 보도 · 성능 검증과 공공·민간 현장 적용 확대 추진',
      en: 'Coverage of Waterbee–Wilo Pump collaboration · Measurement validation and expansion into public and private sites',
    },
    url: 'https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20250724.22010007728',
  },
  {
    id: 'water-tech-ir-2024',
    date: '2024-05-14',
    category: { ko: '기업활동', en: 'Company Activity' },
    publisher: { ko: '브릿지경제', en: 'Bridge Economy' },
    title: {
      ko: '도룡벤처포럼 워터테크 IR 참가',
      en: 'Water-tech IR presentation at Doryong Venture Forum',
    },
    summary: {
      ko: '워터테크 스페셜 IR 참가 · ICT 기반 스마트 수질모니터링 기술 및 사업 방향 발표',
      en: 'Water-tech IR participation · ICT-based smart water monitoring technology and business direction',
    },
    url: 'https://www.viva100.com/20240514010004346',
  },
  {
    id: 'water-startup-award-2023',
    date: '2023-12-06',
    category: { ko: '기술·수상', en: 'Technology & Awards' },
    publisher: { ko: '비석세스', en: 'beSUCCESS' },
    title: {
      ko: '물산업 혁신창업 대전 사업화부문 장려상 선정',
      en: 'Recognized in the Korea Water Industry Startup Competition',
    },
    summary: {
      ko: 'ICT 스마트 수질 측정·정밀여과기 시스템 · 제4회 대한민국 물산업 혁신창업 대전 사업화부문 장려상 선정',
      en: 'ICT smart water measurement and precision filtration · Commercialization-category encouragement award at the fourth Korea Water Industry Startup Competition',
    },
    url: 'https://besuccess.com/환경부-제4회-대한민국-물산업-혁신창업-대전-개최/',
  },
]

export function localizeCompanyNews(item: CompanyNewsItem, locale: string) {
  const language = locale === 'ko' ? 'ko' : 'en'

  return {
    ...item,
    category: item.category[language],
    publisher: item.publisher[language],
    title: item.title[language],
    summary: item.summary[language],
  }
}
