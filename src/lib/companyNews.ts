export type LocalizedText = {
  ko: string
  en: string
}

export type CompanyNewsItem = {
  id: string
  date: string
  category: LocalizedText
  publisher: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  url: string
}

export const companyNewsItems: CompanyNewsItem[] = [
  {
    id: 'vietnam-suseuro-2026',
    date: '2026-07-03',
    category: { ko: '글로벌', en: 'Global' },
    publisher: { ko: '브릿지경제', en: 'Bridge Economy' },
    title: {
      ko: '베트남 스스로 프로젝트 3기 참여',
      en: 'Selected for the third Suseuro Project in Vietnam',
    },
    summary: {
      ko: '워터비는 비수도권 스타트업의 베트남 진출을 지원하는 2026 스스로 프로젝트 참여기업으로, 호찌민 InnoEX 2026 공동관과 현지 IR, 바이어 상담 및 PoC 연계를 준비하고 있습니다.',
      en: 'Waterbee is participating in the 2026 Suseuro Project for non-capital-region startups, preparing for InnoEX 2026 in Ho Chi Minh, local IR sessions, buyer meetings and PoC opportunities.',
    },
    url: 'https://www.viva100.com/article/20260703500497',
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
      ko: '한국상하수도협회와 워터비를 포함한 물기업 6개사가 해외 물시장 공동사업과 상생협력을 위한 다자간 업무협약을 체결했습니다.',
      en: 'The Korea Water and Wastewater Works Association and six water-sector companies, including Waterbee, signed a multilateral agreement for joint global-market projects and cooperation.',
    },
    url: 'https://www.ikld.kr/news/articleView.html?idxno=331527',
  },
  {
    id: 'wilo-open-innovation-result-2025',
    date: '2025-12-10',
    category: { ko: '오픈이노베이션', en: 'Open Innovation' },
    publisher: { ko: '메트로신문', en: 'Metro Seoul' },
    title: {
      ko: '윌로펌프와 스마트팜 측정센서 PoC 완료',
      en: 'Smart-farm measurement sensor PoC completed with Wilo Pump',
    },
    summary: {
      ko: '부산창조경제혁신센터 오픈이노베이션 프로그램에서 윌로펌프와 약 6개월간 스마트팜 측정센서의 현장 적용성과 시장성을 검증하고 협업 성과를 공유했습니다.',
      en: 'Through the Busan Center for Creative Economy & Innovation program, Waterbee worked with Wilo Pump for about six months to validate its smart-farm measurement sensors and present the collaboration results.',
    },
    url: 'https://www.metroseoul.co.kr/article/20251209500526',
  },
  {
    id: 'wilo-open-innovation-selected-2025',
    date: '2025-07-24',
    category: { ko: '기술 실증', en: 'Technology Validation' },
    publisher: { ko: '국제신문', en: 'The Kookje Daily News' },
    title: {
      ko: '부산창경 오픈이노베이션, 윌로펌프 협업기업 선정',
      en: 'Selected as Wilo Pump collaboration partner in Busan open innovation program',
    },
    summary: {
      ko: '워터비는 국산 센서와 ICT 기반 수질관리 기술의 정밀도와 신뢰도를 검증하기 위해 윌로펌프의 PoC 파트너로 선정됐습니다.',
      en: 'Waterbee was selected as Wilo Pump\'s PoC partner to validate the precision and reliability of its domestically developed sensors and ICT-based water-quality technology.',
    },
    url: 'https://kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20250724.22010007728',
  },
  {
    id: 'waterbee-founded-2021',
    date: '2021-10-15',
    category: { ko: '기업', en: 'Company' },
    publisher: { ko: '한국경제', en: 'Korea Economic Daily' },
    title: {
      ko: '주식회사 워터비 설립',
      en: 'Waterbee Co., Ltd. established',
    },
    summary: {
      ko: '환경 엔지니어링 관련 제품의 제조와 유통을 사업 목적으로 주식회사 워터비가 2021년 10월 설립됐습니다.',
      en: 'Waterbee Co., Ltd. was established in October 2021 to manufacture and distribute environmental engineering products.',
    },
    url: 'https://www.hankyung.com/article/202110158887i',
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
