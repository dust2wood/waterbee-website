import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Award,
  Eye,
  Gauge,
  Orbit,
  Radio,
  Shield,
  ShieldCheck,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import RotatingElectrodeDiagram from '@/components/technology/RotatingElectrodeDiagram'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '기술 소개' : 'Technology',
    description:
      locale === 'ko'
        ? '워터비의 핵심 수질 측정 기술 소개'
        : 'Introduction to Waterbee core water quality measurement technology',
  }
}

const patentsKo = [
  { no: '제10-1132985호', name: '릴레이 감시 시스템' },
  { no: '제10-2532710호', name: '탁도 및 잔류염소 측정 시스템' },
  { no: '제10-2570508호', name: '비교측정 및 셀프교정 기능을 보유한 잔류염소 측정장치' },
  { no: '제10-2615508호', name: '탁도 이상진단 시스템' },
  { no: '제10-2607667호', name: '탁도 측정 방법' },
  { no: '제10-2658845호', name: '스마트 수질 측정 정밀여과시스템' },
]

const patentsEn = [
  { no: 'Patent No. 10-1132985', name: 'Relay Monitoring System' },
  { no: 'Patent No. 10-2532710', name: 'Turbidity and Residual Chlorine Measurement System' },
  { no: 'Patent No. 10-2570508', name: 'Residual Chlorine Analyzer with Comparative Measurement and Self-Calibration' },
  { no: 'Patent No. 10-2615508', name: 'Turbidity Abnormality Diagnosis System' },
  { no: 'Patent No. 10-2607667', name: 'Turbidity Measurement Method' },
  { no: 'Patent No. 10-2658845', name: 'Smart Water Quality Measurement Precision Filtration System' },
]

const certificationsKo = [
  { name: '환경부 형식승인 — 잔류염소계', desc: '수질오염공정시험기준 형식승인 (국립환경과학원)' },
  { name: '환경부 형식승인 — 탁도계', desc: '수질오염공정시험기준 형식승인 (국립환경과학원)' },
  { name: 'EMC 인증', desc: '전자파 적합성 인증 (KC 인증)' },
  { name: '벤처기업 확인', desc: '중소벤처기업부 벤처기업 인증' },
  { name: '혁신조달상품 지정', desc: '조달청 벤처나라 혁신조달상품' },
  { name: '시범구매제품 선정', desc: '중소벤처기업부 공공구매 시범제품 (잔류염소계·탁도계)' },
]

const certificationsEn = [
  { name: 'MOE Type Approval — Residual Cl₂', desc: 'Type approval under Korean water quality testing standards (NIER)' },
  { name: 'MOE Type Approval — Turbidity Meter', desc: 'Type approval under Korean water quality testing standards (NIER)' },
  { name: 'EMC Certification', desc: 'Electromagnetic Compatibility Certification (KC Mark)' },
  { name: 'Venture Company Certification', desc: 'Certified venture company by Ministry of SMEs and Startups' },
  { name: 'Innovative Procurement Product', desc: 'Designated by PPS VenturaNara as innovative procurement product' },
  { name: 'Pilot Purchase Product', desc: 'Selected by Ministry of SMEs and Startups (residual Cl₂ & turbidity)' },
]

const pointIcons = [Orbit, Gauge, ShieldCheck]

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'technology' })
  const isKo = locale === 'ko'
  const patents = isKo ? patentsKo : patentsEn
  const certifications = isKo ? certificationsKo : certificationsEn

  const rotatingTags = [0, 1, 2].map((index) => t(`rotating_electrode.tags.${index}`))
  const rotatingPoints = [0, 1, 2].map((index) => ({
    title: t(`rotating_electrode.points.${index}.title`),
    description: t(`rotating_electrode.points.${index}.description`),
    Icon: pointIcons[index],
  }))
  const rotatingSteps = [0, 1, 2, 3].map((index) => ({
    title: t(`rotating_electrode.steps.${index}.title`),
    description: t(`rotating_electrode.steps.${index}.description`),
  }))
  const rotatingMetrics = [0, 1, 2].map((index) => ({
    value: t(`rotating_electrode.metrics.${index}.value`),
    label: t(`rotating_electrode.metrics.${index}.label`),
  }))
  const rotatingAdvantages = [0, 1, 2].map((index) =>
    t(`rotating_electrode.comparison.rotating_items.${index}`),
  )
  const rotatingRisks = [0, 1, 2].map((index) =>
    t(`rotating_electrode.comparison.fixed_items.${index}`),
  )

  return (
    <div className="min-h-screen bg-navy-900 pt-20 lg:pt-24">
      <div className="relative overflow-hidden border-b border-white/10 bg-navy-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,201,0,0.12),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(74,154,202,0.16),transparent_20%)]" />
        <div className="container-custom relative py-16">
          <AnimatedSection>
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-10"
            />
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-3">
            {rotatingMetrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.08}>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white lg:text-3xl">{metric.value}</div>
                  <div className="mt-2 text-sm text-text-secondary">{metric.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-16 space-y-24">
        <AnimatedSection>
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr,1.08fr] xl:gap-14">
            <div className="space-y-7">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                <Orbit className="h-7 w-7 text-gold-500" />
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
                  {t('rotating_electrode.eyebrow')}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                  {t('rotating_electrode.title')}
                </h2>
                <p className="mt-4 text-lg leading-8 text-text-secondary">
                  {t('rotating_electrode.subtitle')}
                </p>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  {t('rotating_electrode.description')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {rotatingTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-4">
                {rotatingPoints.map(({ title, description, Icon }) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/15 bg-gold-500/10">
                        <Icon className="h-5 w-5 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-text-secondary">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <RotatingElectrodeDiagram locale={locale} className="lg:mt-2" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {rotatingSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={0.08 + index * 0.07}>
                <div className="h-full rounded-[24px] border border-white/10 bg-navy-800/70 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.28em] text-gold-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent ml-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(252,201,0,0.12),rgba(252,201,0,0.03))] p-7">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold-400" />
                <h3 className="text-xl font-semibold text-white">
                  {t('rotating_electrode.comparison.rotating_title')}
                </h3>
              </div>
              <div className="space-y-3">
                {rotatingAdvantages.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-7 text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-5 flex items-center gap-3">
                <Shield className="h-5 w-5 text-text-secondary" />
                <h3 className="text-xl font-semibold text-white">
                  {t('rotating_electrode.comparison.fixed_title')}
                </h3>
              </div>
              <div className="space-y-3">
                {rotatingRisks.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-7 text-text-secondary">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="order-2 flex items-center justify-center rounded-[28px] border border-white/10 bg-navy-800 p-6 lg:order-1">
              <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-56">
                <rect x="20" y="108" width="60" height="44" rx="8" fill="#0d2d4a" stroke="#1e5080" strokeWidth="1.5" />
                <ellipse cx="50" cy="130" rx="14" ry="14" fill="#c49a10" opacity="0.9" />
                <ellipse cx="50" cy="130" rx="8" ry="8" fill="#ffe066" />
                <text x="50" y="164" textAnchor="middle" fill="#888" fontSize="8">
                  {isKo ? '텅스텐 광원' : 'Tungsten'}
                </text>
                <text x="50" y="174" textAnchor="middle" fill="#888" fontSize="8">
                  580 nm
                </text>
                <line x1="80" y1="130" x2="168" y2="130" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="80" y1="127" x2="168" y2="127" stroke="#ffe066" strokeWidth="1" opacity="0.4" />
                <line x1="80" y1="133" x2="168" y2="133" stroke="#ffe066" strokeWidth="1" opacity="0.4" />
                <rect x="168" y="100" width="60" height="60" rx="8" fill="#071f30" stroke="#1e6090" strokeWidth="1.5" />
                <circle cx="198" cy="130" r="3" fill="#4a9aca" opacity="0.9" />
                <circle cx="188" cy="122" r="2" fill="#4a9aca" opacity="0.6" />
                <circle cx="207" cy="138" r="2" fill="#4a9aca" opacity="0.6" />
                <circle cx="193" cy="140" r="1.5" fill="#4a9aca" opacity="0.5" />
                <circle cx="204" cy="120" r="1.5" fill="#4a9aca" opacity="0.5" />
                <text x="198" y="172" textAnchor="middle" fill="#4a9aca" fontSize="8">
                  {isKo ? '시료수' : 'Sample'}
                </text>
                <line x1="228" y1="130" x2="310" y2="130" stroke="#ffe066" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                <text x="330" y="134" fill="#555" fontSize="8">
                  {isKo ? '투과광' : 'Transmitted'}
                </text>
                <line x1="198" y1="100" x2="198" y2="30" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="168" y="10" width="60" height="36" rx="8" fill="#0d2d4a" stroke="#D4A017" strokeWidth="1.5" />
                <text x="198" y="26" textAnchor="middle" fill="#D4A017" fontSize="9" fontWeight="bold">
                  {isKo ? '검출기' : 'Detector'}
                </text>
                <text x="198" y="38" textAnchor="middle" fill="#888" fontSize="8">
                  90°
                </text>
                <path d="M 198 100 L 198 115 L 213 115" fill="none" stroke="#D4A017" strokeWidth="1.2" opacity="0.6" />
                <text x="218" y="113" fill="#D4A017" fontSize="9" fontWeight="600">
                  90°
                </text>
                <rect x="270" y="95" width="90" height="36" rx="6" fill="#0a1e30" stroke="#D4A017" strokeWidth="1" opacity="0.8" />
                <text x="315" y="110" textAnchor="middle" fill="#D4A017" fontSize="9" fontWeight="bold">
                  ISO 7027
                </text>
                <text x="315" y="122" textAnchor="middle" fill="#888" fontSize="8">
                  EPA 180.1
                </text>
                <text x="190" y="248" textAnchor="middle" fill="#445566" fontSize="9">
                  {isKo ? '90° 산란광 탁도 측정 원리 (Nephelometry)' : '90° Scattered Light Turbidity Measurement (Nephelometry)'}
                </text>
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                <Eye className="h-7 w-7 text-gold-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                {t('scattering.title')}
              </h2>
              <p className="text-base leading-8 text-text-secondary">
                {t('scattering.description')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                <Radio className="h-7 w-7 text-gold-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                {t('communication.title')}
              </h2>
              <p className="mb-6 text-base leading-8 text-text-secondary">
                {t('communication.description')}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {['RS-485 / Modbus', 'LTE · WiFi · Ethernet', '4~20mA'].map((proto) => (
                  <div key={proto} className="rounded-xl border border-white/10 bg-navy-800 p-3 text-center">
                    <span className="font-mono text-sm font-semibold text-gold-500">{proto}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center rounded-[28px] border border-white/10 bg-navy-800 p-6">
              <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-56">
                <rect x="12" y="60" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5" />
                <text x="48" y="74" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">
                  WBCL10
                </text>
                <text x="48" y="86" textAnchor="middle" fill="#667788" fontSize="8">
                  {isKo ? '잔류염소계' : 'Cl₂ Analyzer'}
                </text>

                <rect x="12" y="110" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5" />
                <text x="48" y="124" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">
                  WBTU10
                </text>
                <text x="48" y="136" textAnchor="middle" fill="#667788" fontSize="8">
                  {isKo ? '탁도계' : 'Turbidity'}
                </text>

                <rect x="12" y="160" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5" />
                <text x="48" y="174" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">
                  WBPH10
                </text>
                <text x="48" y="186" textAnchor="middle" fill="#667788" fontSize="8">
                  pH / EC
                </text>

                <line x1="84" y1="77" x2="140" y2="120" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="84" y1="127" x2="140" y2="127" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="84" y1="177" x2="140" y2="134" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />

                <rect x="140" y="96" width="90" height="62" rx="10" fill="#0a1e30" stroke="#D4A017" strokeWidth="2" />
                <text x="185" y="115" textAnchor="middle" fill="#D4A017" fontSize="10" fontWeight="bold">
                  WBSC10
                </text>
                <text x="185" y="128" textAnchor="middle" fill="#aaa" fontSize="8">
                  {isKo ? '스마트 컨트롤러' : 'Smart Controller'}
                </text>
                <text x="185" y="148" textAnchor="middle" fill="#556677" fontSize="8">
                  4.3&quot; TFT LCD
                </text>

                <line x1="230" y1="107" x2="280" y2="65" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="230" y1="127" x2="280" y2="127" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="230" y1="147" x2="280" y2="190" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2" />

                <rect x="280" y="44" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5" />
                <text x="323" y="58" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">
                  RS-485
                </text>
                <text x="323" y="70" textAnchor="middle" fill="#667788" fontSize="8">
                  Modbus RTU/TCP
                </text>

                <rect x="280" y="110" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5" />
                <text x="323" y="124" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">
                  LTE · WiFi
                </text>
                <text x="323" y="136" textAnchor="middle" fill="#667788" fontSize="8">
                  {isKo ? '클라우드·앱' : 'Cloud / App'}
                </text>

                <rect x="280" y="176" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5" />
                <text x="323" y="190" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">
                  4~20 mA
                </text>
                <text x="323" y="202" textAnchor="middle" fill="#667788" fontSize="8">
                  Analog Out
                </text>

                <text x="190" y="248" textAnchor="middle" fill="#445566" fontSize="9">
                  {isKo ? '다중 프로토콜 동시 출력 — ICT 수질 원격관제 시스템' : 'Multi-protocol simultaneous output — ICT Remote Monitoring'}
                </text>
              </svg>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="border-t border-white/10 pt-16">
            <SectionTitle
              badge={t('patents.title')}
              title={t('patents.title')}
              subtitle={t('patents.subtitle')}
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold-500" />
                  <h3 className="font-semibold text-white">{t('patents_section')}</h3>
                </div>
                <div className="space-y-3">
                  {patents.map((patent) => (
                    <div key={patent.no} className="rounded-xl border border-white/10 bg-navy-800 p-4">
                      <div className="mb-1 font-mono text-xs text-gold-500">{patent.no}</div>
                      <div className="text-sm text-white">{patent.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gold-500" />
                  <h3 className="font-semibold text-white">{t('certifications_section')}</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((certification) => (
                    <div
                      key={certification.name}
                      className="rounded-xl border border-white/10 bg-navy-800 p-4"
                    >
                      <div className="mb-1 text-sm font-semibold text-gold-500">
                        {certification.name}
                      </div>
                      <div className="text-sm text-text-secondary">{certification.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
