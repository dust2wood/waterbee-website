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
    publisher: { ko: '브릿지경제', en: 'Bridge Economy' },
    title: {
      ko: '베트남 스스로 프로젝트 3기 참여',
      en: 'Selected for the third Suseuro Project in Vietnam',
    },
    summary: {
      ko: '워터비는 비수도권 스타트업의 베트남 시장 진출을 지원하는 프로그램에 참여해 현지 IR, 바이어 상담과 PoC 연계를 준비하고 있습니다.',
      en: 'Waterbee joined a Vietnam market-development program for regional startups, preparing for local IR sessions, buyer meetings and PoC opportunities.',
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
      en: 'The Korea Water and Wastewater Works Association and six water-sector companies, including Waterbee, signed a multilateral cooperation agreement.',
    },
    url: 'https://www.ikld.kr/news/articleView.html?idxno=331527',
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
