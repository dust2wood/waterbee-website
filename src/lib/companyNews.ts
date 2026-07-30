export type CompanyNewsItem = {
  id: string
  date: string
  featuredOnAbout?: boolean
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
    featuredOnAbout: true,
    category: { ko: '글로벌', en: 'Global' },
    publisher: { ko: '인더뉴스', en: 'InTheNews' },
    title: {
      ko: '베트남 스스로 프로젝트 3기 참여 기업 선정',
      en: 'Selected for the third Suseuro Project in Vietnam',
    },
    summary: {
      ko: '워터비는 베트남 학교와 공공시설을 대상으로 스마트 여과드레인 시스템의 현지 진출을 준비하며 IR, 바이어 상담과 PoC 연계에 참여합니다.',
      en: 'Waterbee is preparing its smart filter-drain system for schools and public facilities in Vietnam through local IR, buyer meetings and PoC opportunities.',
    },
    url: 'https://www.inthenews.co.kr/news/article.html?no=88923',
  },
  {
    id: 'water-korea-global-mou-2026',
    date: '2026-03-25',
    featuredOnAbout: true,
    category: { ko: '글로벌 협력', en: 'Global Partnership' },
    publisher: { ko: '국토일보', en: 'Korea Land Daily' },
    title: {
      ko: 'WATER KOREA 2026 글로벌 시장 진출 상생협력 MOU',
      en: 'Global market cooperation MOU at WATER KOREA 2026',
    },
    summary: {
      ko: '한국상하수도협회와 워터비를 포함한 물기업 6개사가 해외 물시장 공동사업과 상생협력을 위한 다자간 업무협약을 체결했습니다.',
      en: 'The Korea Water and Wastewater Works Association and six water-sector companies, including Waterbee, signed a multilateral cooperation agreement.',
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
      ko: '워터비를 포함한 6개 기업과 한국상하수도협회가 수질관리, 누수감지와 에너지 효율 기술을 결합한 해외 공동사업 모델 구축에 나섰습니다.',
      en: 'Waterbee and five other companies joined the Korea Water and Wastewater Works Association to develop an integrated overseas water-energy project model.',
    },
    url: 'http://www.energydaily.co.kr/news/articleView.html?idxno=165635',
  },
  {
    id: 'open-innovation-results-2025',
    date: '2025-12-09',
    featuredOnAbout: true,
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '서울경제', en: 'Seoul Economic Daily' },
    title: {
      ko: '윌로펌프 협업 기술 검증·사업화 성과 공개',
      en: 'Technology validation results from Wilo Pump collaboration',
    },
    summary: {
      ko: '부산창조경제혁신센터 피칭데이에서 워터비와 윌로펌프가 약 6개월간 추진한 스마트팜 측정센서 PoC 협업 성과를 공유했습니다.',
      en: 'Waterbee and Wilo Pump presented the results of their six-month smart-farm measurement sensor PoC at the Busan CCEI pitching day.',
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
      ko: '워터비를 포함한 14개 스타트업이 대·중견기업과 진행한 현장 실증 결과를 발표하고 후속 사업화와 투자 연계 가능성을 공유했습니다.',
      en: 'Fourteen startups, including Waterbee, presented corporate PoC results and discussed follow-on commercialization and investment opportunities.',
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
      ko: '부산창조경제혁신센터 오픈이노베이션 프로그램을 통해 윌로펌프와 국산 수질 측정·관리 기술의 정밀도와 현장 적용성을 검증합니다.',
      en: 'Waterbee is working with Wilo Pump through the Busan CCEI program to validate the precision and field applicability of its water-measurement technology.',
    },
    url: 'https://www.metroseoul.co.kr/article/20250723500563',
  },
  {
    id: 'wilo-open-innovation-venturesquare-2025',
    date: '2025-07-23',
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '벤처스퀘어', en: 'VentureSquare' },
    title: {
      ko: '오픈이노베이션 챌린지 2025 실증 파트너 선정',
      en: 'Selected for the Open Innovation Challenge 2025 PoC',
    },
    summary: {
      ko: '워터비는 윌로펌프의 실증 파트너로 선정돼 국산 센서와 ICT 기반 실시간 수질 측정·관리 솔루션의 정밀도와 현장 적용성을 검증했습니다.',
      en: 'Waterbee was selected as Wilo Pump\'s PoC partner to validate the precision and field applicability of its Korean-made sensor and ICT solution.',
    },
    url: 'https://www.venturesquare.net/995366',
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
      ko: '윌로펌프와 워터비가 수질 측정 기술의 성능을 검증하고 공공·민간 현장으로 스마트 수질관리 기술을 확대하는 협업 사례가 소개됐습니다.',
      en: 'The article highlights Waterbee and Wilo Pump\'s collaboration to validate measurement performance and expand smart water management into public and private sites.',
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
      ko: '워터비는 워터테크 스페셜 IR에서 ICT 기반 스마트 수질모니터링 시스템의 기술과 사업 방향을 소개했습니다.',
      en: 'Waterbee presented its ICT-based smart water-quality monitoring system and business direction in a water-tech focused IR session.',
    },
    url: 'https://www.viva100.com/20240514010004346',
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
