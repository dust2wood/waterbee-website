import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { MapPin, Phone, Mail, Building2, Target, Eye as EyeIcon, UserCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '회사소개' : 'About',
    description:
      locale === 'ko'
        ? '주식회사 워터비 회사 소개 및 연혁'
        : 'About Waterbee Co., Ltd. and company history',
  }
}

const historyItemsKo = [
  {
    year: '2026',
    events: [
      '우즈베키스탄 지역난방 시스템용 정밀 여과 솔루션 공급 및 설치',
    ],
  },
  {
    year: '2025',
    events: [
      'HSCMT-워터비 스마트 여과드레인 기술 고도화 및 유지관리 협력 MOU 체결',
      '필리핀 뉴클락시티(NCC) 취수장 스마트 여과드레인 및 수질계측 시스템 구축',
    ],
  },
  {
    year: '2024',
    events: [
      '대한민국 발명특허대전 특허청장상 수상',
      'K-water(한국수자원공사) 협력 스타트업 육성 지원 업무협약 체결',
      '중소벤처기업부 시범구매제품 선정 (잔류염소계·탁도계)',
      '조달청 벤처나라 혁신조달상품 지정',
      '잔류염소계 측정기기 형식승인 취득 (국립환경과학원)',
    ],
  },
  {
    year: '2023',
    events: [
      'SK하이닉스 제2정수장 K-테스트베드 실증 완료 (2023.09~2024.02)',
      '탁도계 측정기기 형식승인 취득 (국립환경과학원)',
      '대한민국 물산업 혁신창업대전 수상',
    ],
  },
  {
    year: '2022',
    events: [
      '중소벤처기업부 R&D 디딤돌 과제 선정 (수질센서 핵심 R&D)',
      '네이버클라우드 연계 클라우드 수질 모니터링 서비스(WATERROUND) 런칭',
      'K-water 협력 스타트업 선정',
    ],
  },
  {
    year: '2021',
    events: [
      '(주)워터비 법인 설립',
      '수질 측정 ICT 센서 개발 착수',
    ],
  },
]

const historyItemsEn = [
  {
    year: '2026',
    events: [
      'Supply and installation of precision filtration solution for Uzbekistan district heating system',
    ],
  },
  {
    year: '2025',
    events: [
      'HSCMT–Waterbee Smart Filter-Drain Technology Advancement and Maintenance Cooperation MOU signed',
      'Smart filter-drain and water quality measurement system built at Philippines New Clark City (NCC) intake facility',
    ],
  },
  {
    year: '2024',
    events: [
      "Won Commissioner's Award at Korea Invention Patent Exhibition (KIPA)",
      'Signed MOU with K-water (Korea Water Resources Corporation) for collaborative startup support',
      'Selected as pilot purchase products by Ministry of SMEs and Startups (residual chlorine & turbidity analyzers)',
      'Designated as Innovative Procurement Product on PPS VenturaNara',
      'Obtained type approval for residual chlorine analyzer (National Institute of Environmental Research)',
    ],
  },
  {
    year: '2023',
    events: [
      'SK Hynix 2nd Water Treatment Plant K-Testbed demonstration completed (Sep 2023 – Feb 2024)',
      'Obtained type approval for turbidity meter (National Institute of Environmental Research)',
      'Won Korea Water Industry Innovation Startup Competition Award',
    ],
  },
  {
    year: '2022',
    events: [
      'Selected for MSS R&D Stepping Stone project (water quality sensor core R&D)',
      'Launched cloud-based water quality monitoring service (WATERROUND) linked with Naver Cloud',
      'Selected as K-water partner startup',
    ],
  },
  {
    year: '2021',
    events: [
      'Waterbee Co., Ltd. founded',
      'Development of water quality measurement ICT sensors commenced',
    ],
  },
]

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })
  const isKo = locale === 'ko'
  const historyItems = isKo ? historyItemsKo : historyItemsEn

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-navy-900">
      <div className="bg-navy-800 border-b border-white/10 py-16">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-0"
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="container-custom py-16 space-y-20">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800 border border-gold-500/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-2">
                {t('mission.title')}
              </h3>
              <p className="text-white text-xl font-bold">{t('mission.description')}</p>
            </div>
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-4">
                <EyeIcon className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-2">
                {t('vision.title')}
              </h3>
              <p className="text-white text-xl font-bold">{t('vision.description')}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* 성장여정 헤더 */}
          <div className="mb-10">
            <span className="inline-block text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 rounded-full">
              History
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-text-secondary text-sm font-medium tracking-wider uppercase mb-1">
                  {isKo ? '워터비의' : "Waterbee's"}
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  {isKo ? '성장 여정' : 'Growth Journey'}
                </h2>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-gold-500/60 font-mono text-sm tracking-widest">2021 — {new Date().getFullYear()}</span>
              </div>
            </div>
            <div className="mt-5 h-px bg-gradient-to-r from-gold-500/40 via-gold-500/10 to-transparent" />
          </div>

          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-6">
              {historyItems.map((item) => (
                <div key={item.year} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-24 shrink-0 flex items-start md:justify-end md:pt-4">
                    <span className="text-gold-500 font-bold text-lg md:text-xl">{item.year}</span>
                  </div>
                  <div className="hidden md:flex items-start pt-5">
                    <div className="w-3 h-3 bg-gold-500 rounded-full relative z-10 ring-4 ring-navy-900" />
                  </div>
                  <div className="flex-1 bg-navy-800 border border-white/10 rounded-xl p-5">
                    <ul className="space-y-1.5">
                      {item.events.map((event, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-baseline gap-2" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                          <span className="text-gold-500 shrink-0 leading-none">·</span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="border-t border-white/10 pt-16">
            <SectionTitle badge="Company Info" title={t('info_section')} align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">{t('info.company_name_label')}</div>
                    <div className="text-white font-semibold">{t('info.company')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <UserCircle className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">{t('info.ceo')}</div>
                    <div className="text-white text-sm">{t('info.ceo_value')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">{t('info.address')}</div>
                    <div className="text-white text-sm">{t('info.address_value')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">{t('info.phone')}</div>
                    <a href="tel:1555-3534" className="text-white hover:text-gold-500 transition-colors text-sm">
                      1555-3534
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">{t('info.email')}</div>
                    <a href="mailto:support@waterbee.co.kr" className="text-white hover:text-gold-500 transition-colors text-sm">
                      support@waterbee.co.kr
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">{t('contact_card.title')}</h4>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {t('contact_card.description')}
                </p>
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-4 h-4" />
                  {t('contact_card.button')}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
