import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BrainCircuit,
  Droplets,
  Eye,
  Gauge,
  Lightbulb,
  Network,
  Orbit,
  ScanLine,
  Shield,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

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

interface SectionPoint {
  title: string
  description: string
  Icon: LucideIcon
}

interface SectionMetric {
  value: string
  label: string
}

interface TechnologySectionContent {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  metrics: SectionMetric[]
  points: SectionPoint[]
  strengthsTitle: string
  strengths: string[]
  considerationsTitle: string
  considerations: string[]
  status?: string
}

function TechnologySection({
  content,
}: {
  content: TechnologySectionContent
}) {
  return (
    <AnimatedSection>
      <div className="space-y-8">
        <div className="max-w-5xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-400">
              {content.eyebrow}
            </span>
            {content.status && (
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-cyan-100">
                {content.status}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {content.subtitle}
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={0.05 + index * 0.05}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="mt-2 text-sm text-text-secondary">{metric.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.points.map(({ title, description, Icon }, index) => (
            <AnimatedSection key={title} delay={0.1 + index * 0.05}>
              <div className="h-full rounded-[24px] border border-white/10 bg-navy-800/70 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                  <Icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <div className="rounded-[28px] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(252,201,0,0.12),rgba(252,201,0,0.03))] p-7">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold-400" />
                <h3 className="text-xl font-semibold text-white">{content.strengthsTitle}</h3>
              </div>
              <div className="space-y-3">
                {content.strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-7 text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-5 flex items-center gap-3">
                <Shield className="h-5 w-5 text-text-secondary" />
                <h3 className="text-xl font-semibold text-white">{content.considerationsTitle}</h3>
              </div>
              <div className="space-y-3">
                {content.considerations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-7 text-text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'technology' })
  const isKo = locale === 'ko'
  const patents = isKo ? patentsKo : patentsEn
  const certifications = isKo ? certificationsKo : certificationsEn
  const overviewCards = [
    {
      title: t('overview.items.0.title'),
      description: t('overview.items.0.description'),
      Icon: Orbit,
    },
    {
      title: t('overview.items.1.title'),
      description: t('overview.items.1.description'),
      Icon: Eye,
    },
    {
      title: t('overview.items.2.title'),
      description: t('overview.items.2.description'),
      Icon: BrainCircuit,
    },
  ]

  const rotating = {
    eyebrow: t('rotating_electrode.eyebrow'),
    title: t('rotating_electrode.title'),
    subtitle: t('rotating_electrode.subtitle'),
    description: t('rotating_electrode.description'),
    tags: [0, 1, 2].map((index) => t(`rotating_electrode.tags.${index}`)),
    metrics: [0, 1, 2].map((index) => ({
      value: t(`rotating_electrode.metrics.${index}.value`),
      label: t(`rotating_electrode.metrics.${index}.label`),
    })),
    points: [
      {
        title: t('rotating_electrode.points.0.title'),
        description: t('rotating_electrode.points.0.description'),
        Icon: ShieldCheck,
      },
      {
        title: t('rotating_electrode.points.1.title'),
        description: t('rotating_electrode.points.1.description'),
        Icon: Gauge,
      },
      {
        title: t('rotating_electrode.points.2.title'),
        description: t('rotating_electrode.points.2.description'),
        Icon: Orbit,
      },
    ],
    strengthsTitle: t('rotating_electrode.strengths_title'),
    strengths: [0, 1, 2].map((index) => t(`rotating_electrode.strengths.${index}`)),
    considerationsTitle: t('rotating_electrode.considerations_title'),
    considerations: [0, 1, 2].map((index) => t(`rotating_electrode.considerations.${index}`)),
  }

  const turbidity = {
    eyebrow: t('scattering.eyebrow'),
    title: t('scattering.title'),
    subtitle: t('scattering.subtitle'),
    description: t('scattering.description'),
    tags: [0, 1, 2].map((index) => t(`scattering.tags.${index}`)),
    metrics: [0, 1, 2].map((index) => ({
      value: t(`scattering.metrics.${index}.value`),
      label: t(`scattering.metrics.${index}.label`),
    })),
    points: [
      {
        title: t('scattering.points.0.title'),
        description: t('scattering.points.0.description'),
        Icon: Droplets,
      },
      {
        title: t('scattering.points.1.title'),
        description: t('scattering.points.1.description'),
        Icon: ScanLine,
      },
      {
        title: t('scattering.points.2.title'),
        description: t('scattering.points.2.description'),
        Icon: Lightbulb,
      },
    ],
    strengthsTitle: t('scattering.strengths_title'),
    strengths: [0, 1, 2].map((index) => t(`scattering.strengths.${index}`)),
    considerationsTitle: t('scattering.considerations_title'),
    considerations: [0, 1, 2].map((index) => t(`scattering.considerations.${index}`)),
  }

  const controller = {
    status: t('controller.status'),
    eyebrow: t('controller.eyebrow'),
    title: t('controller.title'),
    subtitle: t('controller.subtitle'),
    description: t('controller.description'),
    tags: [0, 1, 2].map((index) => t(`controller.tags.${index}`)),
    metrics: [0, 1, 2].map((index) => ({
      value: t(`controller.metrics.${index}.value`),
      label: t(`controller.metrics.${index}.label`),
    })),
    points: [
      {
        title: t('controller.points.0.title'),
        description: t('controller.points.0.description'),
        Icon: Workflow,
      },
      {
        title: t('controller.points.1.title'),
        description: t('controller.points.1.description'),
        Icon: BrainCircuit,
      },
      {
        title: t('controller.points.2.title'),
        description: t('controller.points.2.description'),
        Icon: Network,
      },
    ],
    strengthsTitle: t('controller.strengths_title'),
    strengths: [0, 1, 2].map((index) => t(`controller.strengths.${index}`)),
    considerationsTitle: t('controller.considerations_title'),
    considerations: [0, 1, 2].map((index) => t(`controller.considerations.${index}`)),
  }

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
            {overviewCards.map(({ title, description, Icon }, index) => (
              <AnimatedSection key={title} delay={index * 0.08}>
                <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div className="text-xl font-semibold text-white">{title}</div>
                  <div className="mt-3 text-sm leading-7 text-text-secondary">{description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-16 space-y-24">
        <TechnologySection
          content={rotating}
        />

        <TechnologySection
          content={turbidity}
        />

        <TechnologySection
          content={controller}
        />

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
                      <div className="mb-1 text-xs font-semibold tracking-[0.08em] text-gold-500">{patent.no}</div>
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
