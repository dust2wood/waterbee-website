import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { MapPin, Phone, Mail, Building2, Target, Eye as EyeIcon } from 'lucide-react'
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

const historyItems = [
  {
    year: '2024',
    events: [
      'ICT 정밀여과기기 공동특허 등록',
      '에코스타트업, 대중소기업 혁신파트너십, 기술개발제품 시범구매 선정',
      '특허 등록 6건, 상표 등록 1건 달성',
    ],
  },
  {
    year: '2023',
    events: [
      'SK하이닉스 제2정수장 K-테스트베드 실증 완료 (2023.09~2024.02)',
      '환경측정기기 형식승인 취득',
      '벤처나라 등록, 직접생산 확인 등록',
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
      '스마트 컨트롤러 고도화 (이더넷·LTE·WiFi 통합 통신 지원)',
      '에코델타시티 어반테크하우스 리빙랩 실증',
    ],
  },
  {
    year: '2020',
    events: [
      '이온전극 코팅 기술 적용으로 측정 안정성 6개월 이상 달성',
      'K-water 정수장·재이용수 현장 납품 확대',
    ],
  },
  {
    year: '2018',
    events: [
      '회전전극식 잔류염소계 1세대 양산 및 판매 개시',
      '부산시 상수도사업본부 공급 실적 달성',
    ],
  },
]

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })

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
          <SectionTitle
            badge="History"
            title={t('history.title')}
            subtitle={t('history.subtitle')}
            align="left"
          />
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
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span className="text-gold-500 mt-1.5 shrink-0">·</span>
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
            <SectionTitle badge="Company Info" title="회사 정보" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">법인명</div>
                    <div className="text-white font-semibold">주식회사 워터비</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">주소</div>
                    <div className="text-white text-sm">경기도 화성시 (상세 주소 입력)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">전화</div>
                    <a href="tel:031-000-0000" className="text-white hover:text-gold-500 transition-colors text-sm">
                      031-000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-text-secondary text-xs mb-0.5">이메일</div>
                    <a href="mailto:support@waterbee.co.kr" className="text-white hover:text-gold-500 transition-colors text-sm">
                      support@waterbee.co.kr
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">문의하기</h4>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  제품 문의, 기술 지원, 견적 요청 등 모든 문의사항은 아래 버튼을 통해 접수해 주세요.
                </p>
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-4 h-4" />
                  문의 폼으로 이동
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
