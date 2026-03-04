import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { RotateCcw, Eye, Radio, Award, Shield } from 'lucide-react'
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
  { no: '제10-0000000호', name: '회전전극을 이용한 잔류염소 측정 장치 및 방법' },
  { no: '제10-0000001호', name: '수질 측정기용 자동 세정 시스템' },
  { no: '제10-0000002호', name: '연속식 탁도 측정기의 광원 보정 방법' },
]

const patentsEn = [
  { no: 'Patent No. 10-0000000', name: 'Residual Chlorine Measurement Device and Method Using Rotating Electrode' },
  { no: 'Patent No. 10-0000001', name: 'Automatic Cleaning System for Water Quality Meters' },
  { no: 'Patent No. 10-0000002', name: 'Light Source Correction Method for Continuous Turbidity Meters' },
]

const certificationsKo = [
  { name: 'ISO 9001:2015', desc: '품질경영시스템 인증' },
  { name: 'KS 인증', desc: '한국산업표준 인증' },
  { name: '환경부 형식승인', desc: '수질측정기기 형식승인' },
]

const certificationsEn = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System Certification' },
  { name: 'KS Certification', desc: 'Korean Industrial Standards Certification' },
  { name: 'MOE Type Approval', desc: 'Ministry of Environment Water Quality Meter Type Approval' },
]

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'technology' })
  const isKo = locale === 'ko'
  const patents = isKo ? patentsKo : patentsEn
  const certifications = isKo ? certificationsKo : certificationsEn

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                <RotateCcw className="w-7 h-7 text-gold-500" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('rotating_electrode.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed text-base">
                {t('rotating_electrode.description')}
              </p>
            </div>
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                  <RotateCcw className="w-12 h-12 text-gold-500" />
                </div>
                <p className="text-text-secondary text-sm">{isKo ? '회전전극 단면도 이미지' : 'Rotating electrode cross-section'}</p>
                <p className="text-text-secondary/50 text-xs">{isKo ? '(이미지 추가 예정)' : '(Image coming soon)'}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-navy-800 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/images/technology/tu-scattering.png"
                alt={isKo ? '90° 산란광식 탁도 측정 원리' : '90° Scattered Light Turbidity Measurement Principle'}
                width={600}
                height={400}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold-500" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('scattering.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed text-base">
                {t('scattering.description')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                <Radio className="w-7 h-7 text-gold-500" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('communication.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed text-base mb-6">
                {t('communication.description')}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {['RS-485 / Modbus', 'LTE · WiFi · Ethernet', '4~20mA'].map((proto) => (
                  <div key={proto} className="bg-navy-800 border border-white/10 rounded-xl p-3 text-center">
                    <span className="text-gold-500 font-mono text-sm font-semibold">{proto}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                  <Radio className="w-12 h-12 text-gold-500" />
                </div>
                <p className="text-text-secondary text-sm">{isKo ? '시스템 연동 다이어그램' : 'System integration diagram'}</p>
                <p className="text-text-secondary/50 text-xs">{isKo ? '(이미지 추가 예정)' : '(Image coming soon)'}</p>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-gold-500" />
                  <h3 className="text-white font-semibold">{t('patents_section')}</h3>
                </div>
                <div className="space-y-3">
                  {patents.map((p) => (
                    <div key={p.no} className="bg-navy-800 border border-white/10 rounded-xl p-4">
                      <div className="text-gold-500 font-mono text-xs mb-1">{p.no}</div>
                      <div className="text-white text-sm">{p.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-gold-500" />
                  <h3 className="text-white font-semibold">{t('certifications_section')}</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((c) => (
                    <div key={c.name} className="bg-navy-800 border border-white/10 rounded-xl p-4">
                      <div className="text-gold-500 font-semibold text-sm mb-1">{c.name}</div>
                      <div className="text-text-secondary text-sm">{c.desc}</div>
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
