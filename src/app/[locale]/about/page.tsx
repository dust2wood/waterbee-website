import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/about',
    title: locale === 'ko' ? '회사소개' : 'About',
    description:
      locale === 'ko'
        ? '부산 소재 여성기업 주식회사 워터비의 수질계측 기술, 현재 회사 정보, 주요 연혁과 사업 성과를 소개합니다.'
        : 'Learn about Waterbee Co., Ltd., a women-owned water-quality instrumentation company in Busan, its current profile, milestones and business achievements.',
  })
}

const history = {
  ko: [
    ['2026', ['2026 스스로 프로젝트 3기 참여기업 선정 및 베트남 진출 프로그램 참여', 'WATER KOREA 2026 글로벌 시장 진출 상생협력 업무협약 체결', '스마트 여과드레인 시스템 성과공유제 과제 선정', '우즈베키스탄 지역난방 시스템용 정밀 여과 솔루션 공급 및 설치']],
    ['2025', ['부산창조경제혁신센터 오픈이노베이션에서 윌로펌프와 스마트팜 측정센서 PoC 수행', 'HSCMT-워터비 스마트 여과드레인 기술 고도화 및 유지관리 협력 MOU 체결', '필리핀 뉴클락시티 취수장 스마트 여과드레인 및 수질계측 시스템 구축']],
    ['2024', ['대한민국 발명특허대전 특허청장상 수상', 'K-water 협력 스타트업 육성 지원 업무협약 체결', '중소벤처기업부 시범구매제품 선정', '조달청 벤처나라 혁신조달상품 지정', '잔류염소계 형식승인 취득(국립환경과학원)']],
    ['2023', ['SK하이닉스 제2정수장 K-테스트베드 실증', '탁도계 형식승인 취득(국립환경과학원)', '대한민국 물산업 혁신창업대전 수상']],
    ['2022', ['중소벤처기업부 R&D 디딤돌 과제 선정', '클라우드 수질 모니터링 서비스 WATERROUND 출시', 'K-water 협력 스타트업 선정']],
    ['2021', ['주식회사 워터비 설립', '수질계측 ICT 센서 개발 착수']],
  ],
  en: [
    ['2026', ['Selected for the third Suseuro Project and joined its Vietnam market-development program', 'Signed a global market cooperation MOU at WATER KOREA 2026', 'Selected for the Smart Filter-Drain performance-sharing project', 'Supplied and installed a precision filtration solution for an Uzbekistan district-heating system']],
    ['2025', ['Conducted a smart-farm measurement sensor PoC with Wilo Pump through the Busan CCEI open innovation program', 'Signed an HSCMT-Waterbee technology and maintenance cooperation MOU', 'Built a smart filter-drain and instrumentation system at the New Clark City intake facility']],
    ['2024', ["Won the Commissioner's Award at the Korea Invention Patent Exhibition", 'Signed a collaborative startup support agreement with K-water', 'Selected for the public pilot-purchase program', 'Designated as an innovative procurement product', 'Obtained residual chlorine analyzer type approval from NIER']],
    ['2023', ['Completed a K-Testbed demonstration at SK Hynix Water Treatment Plant No. 2', 'Obtained turbidity meter type approval from NIER', 'Won the Korea Water Industry Innovation Startup Competition']],
    ['2022', ['Selected for the MSS R&D Stepping Stone project', 'Launched WATERROUND cloud water-quality monitoring', 'Selected as a K-water partner startup']],
    ['2021', ['Waterbee Co., Ltd. established', 'Started development of ICT water-quality instruments']],
  ],
} as const

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })
  const isKo = locale === 'ko'
  const historyItems = isKo ? history.ko : history.en

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: isKo ? '홈' : 'Home' },
          { name: isKo ? '회사소개' : 'About', path: '/about' },
        ])}
      />
      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase text-[#8c7200]">{t('badge')}</div>
            <h1 className="mt-5 text-4xl font-bold tracking-normal text-[#151a19] lg:text-6xl">{t('title')}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#596361] lg:text-lg">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">Waterbee</div>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-[#151a19]">
              {isKo ? '정확한 계측에서 시작하는 물 관리' : 'Water management starts with dependable measurement'}
            </h2>
          </div>

          <div className="border-t border-[#9fa8a5]">
            <div className="grid gap-5 border-b border-[#d2d7d4] py-7 sm:grid-cols-[120px_1fr]">
              <div className="text-xs font-bold uppercase text-[#8c7200]">{t('mission.title')}</div>
              <div className="text-xl font-semibold leading-8 text-[#202725]">{t('mission.description')}</div>
            </div>
            <div className="grid gap-5 border-b border-[#d2d7d4] py-7 sm:grid-cols-[120px_1fr]">
              <div className="text-xs font-bold uppercase text-[#8c7200]">{t('vision.title')}</div>
              <div className="text-xl font-semibold leading-8 text-[#202725]">{t('vision.description')}</div>
            </div>
            <div className="grid gap-5 border-b border-[#d2d7d4] py-7 sm:grid-cols-[120px_1fr]">
              <div className="text-xs font-bold uppercase text-[#8c7200]">2026</div>
              <div>
                <div className="text-xl font-semibold leading-8 text-[#202725]">{t('achievement.title')}</div>
                <p className="mt-3 text-sm leading-7 text-[#68716f]">{t('achievement.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f4] py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-xs font-bold uppercase text-[#8c7200]">History</div>
              <h2 className="mt-4 text-3xl font-bold tracking-normal text-[#151a19] lg:text-4xl">{isKo ? '워터비의 성장 과정' : 'Waterbee Milestones'}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#68716f]">
              {isKo ? '수질계측 기술 개발과 현장 실증, 제품 승인을 거쳐 시스템 솔루션으로 사업 영역을 확장해 왔습니다.' : 'Waterbee has expanded from instrumentation development and field validation to approved products and integrated system solutions.'}
            </p>
          </div>

          <div>
            {historyItems.map(([year, events]) => (
              <div key={year} className="grid border-b border-[#cfd5d2] py-7 md:grid-cols-[180px_1fr]">
                <div className="text-2xl font-bold text-[#202725]">{year}</div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#596361] md:mt-0">
                  {events.map((event) => <li key={event}>{event}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">Company Info</div>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-[#151a19]">{t('info_section')}</h2>
          </div>

          <div>
            <dl className="border-t border-[#9fa8a5] text-sm">
              {[
                [t('info.company_name_label'), t('info.company')],
                [t('info.ceo'), t('info.ceo_value')],
                [t('info.founded'), t('info.founded_value')],
                [t('info.company_type'), t('info.company_type_value')],
                [t('info.operating_status'), t('info.operating_status_value')],
                [t('info.business_number'), '291-87-02513'],
                [t('info.address'), t('info.address_value')],
                [t('info.phone'), '1555-3534'],
                [t('info.email'), 'support@waterbee.co.kr'],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#d2d7d4] py-4 sm:grid-cols-[160px_1fr]">
                  <dt className="text-[#7a8380]">{label}</dt>
                  <dd className="font-semibold leading-6 text-[#202725]">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
                {t('contact_card.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/news" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
                {isKo ? '회사 소식 보기' : 'View company news'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
