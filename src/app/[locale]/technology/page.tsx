import type { Metadata } from 'next'
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
            {/* 회전전극 측정셀 단면도 */}
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 flex items-center justify-center">
              <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-56">
                {/* 측정셀 외함 */}
                <rect x="120" y="20" width="140" height="210" rx="12" fill="#071726" stroke="#1e4060" strokeWidth="1.5"/>
                {/* 전극 바디 */}
                <rect x="160" y="38" width="60" height="158" rx="30" fill="#0d2d4a" stroke="#1e5080" strokeWidth="1.5"/>
                {/* 작용전극 (Au) */}
                <ellipse cx="190" cy="187" rx="20" ry="7" fill="#c49a10"/>
                <text x="190" y="191" textAnchor="middle" fill="#fff8e1" fontSize="9" fontWeight="bold">Au</text>
                {/* 기준전극 (Ag) */}
                <ellipse cx="190" cy="47" rx="15" ry="5" fill="#b0b0b0"/>
                <text x="190" y="51" textAnchor="middle" fill="#111" fontSize="8">Ag</text>
                {/* 회전 방향 화살표 */}
                <path d="M 153 118 A 37 37 0 0 1 227 118" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <polygon points="227,118 218,110 230,108" fill="#D4A017"/>
                <text x="190" y="138" textAnchor="middle" fill="#D4A017" fontSize="9" fontWeight="600">AUTO ROTATION</text>
                {/* 유입 화살표 */}
                <line x1="40" y1="95" x2="115" y2="95" stroke="#3a8fc0" strokeWidth="2"/>
                <polygon points="115,95 106,90 106,100" fill="#3a8fc0"/>
                <text x="35" y="92" textAnchor="end" fill="#3a8fc0" fontSize="10" fontWeight="500">{isKo ? '유입' : 'IN'}</text>
                {/* 배출 화살표 */}
                <line x1="265" y1="155" x2="340" y2="155" stroke="#3a8fc0" strokeWidth="2"/>
                <polygon points="340,155 331,150 331,160" fill="#3a8fc0"/>
                <text x="345" y="159" fill="#3a8fc0" fontSize="10" fontWeight="500">{isKo ? '배출' : 'OUT'}</text>
                {/* 라벨 주석선 */}
                <line x1="205" y1="47" x2="270" y2="42" stroke="#444" strokeWidth="1" strokeDasharray="3 2"/>
                <text x="272" y="40" fill="#888" fontSize="9">Ag/AgCl</text>
                <text x="272" y="51" fill="#888" fontSize="9">{isKo ? '기준전극' : 'Reference'}</text>
                <line x1="210" y1="187" x2="270" y2="192" stroke="#444" strokeWidth="1" strokeDasharray="3 2"/>
                <text x="272" y="190" fill="#D4A017" fontSize="9">Au</text>
                <text x="272" y="201" fill="#D4A017" fontSize="9">{isKo ? '작용전극' : 'Working'}</text>
                {/* 하단 캡션 */}
                <text x="190" y="248" textAnchor="middle" fill="#445566" fontSize="9">{isKo ? 'Polarograph 회전전극식 측정셀 단면' : 'Polarograph Rotating Electrode Cell Cross-section'}</text>
              </svg>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* 90° 산란광 측정 원리 다이어그램 */}
            <div className="order-2 lg:order-1 bg-navy-800 border border-white/10 rounded-2xl p-6 flex items-center justify-center">
              <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-56">
                {/* 광원 (Tungsten Lamp) */}
                <rect x="20" y="108" width="60" height="44" rx="8" fill="#0d2d4a" stroke="#1e5080" strokeWidth="1.5"/>
                <ellipse cx="50" cy="130" rx="14" ry="14" fill="#c49a10" opacity="0.9"/>
                <ellipse cx="50" cy="130" rx="8" ry="8" fill="#ffe066"/>
                <text x="50" y="164" textAnchor="middle" fill="#888" fontSize="8">{isKo ? '텅스텐 광원' : 'Tungsten'}</text>
                <text x="50" y="174" textAnchor="middle" fill="#888" fontSize="8">580 nm</text>
                {/* 입사광 빔 */}
                <line x1="80" y1="130" x2="168" y2="130" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="80" y1="127" x2="168" y2="127" stroke="#ffe066" strokeWidth="1" opacity="0.4"/>
                <line x1="80" y1="133" x2="168" y2="133" stroke="#ffe066" strokeWidth="1" opacity="0.4"/>
                {/* 측정셀 */}
                <rect x="168" y="100" width="60" height="60" rx="8" fill="#071f30" stroke="#1e6090" strokeWidth="1.5"/>
                {/* 물 파티클 (산란점) */}
                <circle cx="198" cy="130" r="3" fill="#4a9aca" opacity="0.9"/>
                <circle cx="188" cy="122" r="2" fill="#4a9aca" opacity="0.6"/>
                <circle cx="207" cy="138" r="2" fill="#4a9aca" opacity="0.6"/>
                <circle cx="193" cy="140" r="1.5" fill="#4a9aca" opacity="0.5"/>
                <circle cx="204" cy="120" r="1.5" fill="#4a9aca" opacity="0.5"/>
                <text x="198" y="172" textAnchor="middle" fill="#4a9aca" fontSize="8">{isKo ? '시료수' : 'Sample'}</text>
                {/* 투과광 (직진) */}
                <line x1="228" y1="130" x2="310" y2="130" stroke="#ffe066" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
                <text x="330" y="134" fill="#555" fontSize="8">{isKo ? '투과광' : 'Transmitted'}</text>
                {/* 90° 산란광 */}
                <line x1="198" y1="100" x2="198" y2="30" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="195" y1="30" x2="198" y2="30" stroke="#D4A017" strokeWidth="1" opacity="0.4"/>
                {/* 검출기 */}
                <rect x="168" y="10" width="60" height="36" rx="8" fill="#0d2d4a" stroke="#D4A017" strokeWidth="1.5"/>
                <text x="198" y="26" textAnchor="middle" fill="#D4A017" fontSize="9" fontWeight="bold">{isKo ? '검출기' : 'Detector'}</text>
                <text x="198" y="38" textAnchor="middle" fill="#888" fontSize="8">90°</text>
                {/* 90° 각도 표시 */}
                <path d="M 198 100 L 198 115 L 213 115" fill="none" stroke="#D4A017" strokeWidth="1.2" opacity="0.6"/>
                <text x="218" y="113" fill="#D4A017" fontSize="9" fontWeight="600">90°</text>
                {/* ISO 7027 배지 */}
                <rect x="270" y="95" width="90" height="36" rx="6" fill="#0a1e30" stroke="#D4A017" strokeWidth="1" opacity="0.8"/>
                <text x="315" y="110" textAnchor="middle" fill="#D4A017" fontSize="9" fontWeight="bold">ISO 7027</text>
                <text x="315" y="122" textAnchor="middle" fill="#888" fontSize="8">EPA 180.1</text>
                {/* 하단 캡션 */}
                <text x="190" y="248" textAnchor="middle" fill="#445566" fontSize="9">{isKo ? '90° 산란광 탁도 측정 원리 (Nephelometry)' : '90° Scattered Light Turbidity Measurement (Nephelometry)'}</text>
              </svg>
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
            {/* 시스템 연동 아키텍처 다이어그램 */}
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 flex items-center justify-center">
              <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-56">
                {/* 센서 노드들 */}
                <rect x="12" y="60" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5"/>
                <text x="48" y="74" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">WBCL10</text>
                <text x="48" y="86" textAnchor="middle" fill="#667788" fontSize="8">{isKo ? '잔류염소계' : 'Cl₂ Analyzer'}</text>

                <rect x="12" y="110" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5"/>
                <text x="48" y="124" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">WBTU10</text>
                <text x="48" y="136" textAnchor="middle" fill="#667788" fontSize="8">{isKo ? '탁도계' : 'Turbidity'}</text>

                <rect x="12" y="160" width="72" height="34" rx="7" fill="#071726" stroke="#1e5080" strokeWidth="1.5"/>
                <text x="48" y="174" textAnchor="middle" fill="#4a9aca" fontSize="9" fontWeight="600">WBPH10</text>
                <text x="48" y="186" textAnchor="middle" fill="#667788" fontSize="8">pH / EC</text>

                {/* 연결선 → 컨트롤러 */}
                <line x1="84" y1="77" x2="140" y2="120" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>
                <line x1="84" y1="127" x2="140" y2="127" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>
                <line x1="84" y1="177" x2="140" y2="134" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>

                {/* 컨트롤러 */}
                <rect x="140" y="96" width="90" height="62" rx="10" fill="#0a1e30" stroke="#D4A017" strokeWidth="2"/>
                <text x="185" y="115" textAnchor="middle" fill="#D4A017" fontSize="10" fontWeight="bold">WBSC10</text>
                <text x="185" y="128" textAnchor="middle" fill="#aaa" fontSize="8">{isKo ? '스마트 컨트롤러' : 'Smart Controller'}</text>
                <text x="185" y="148" textAnchor="middle" fill="#556677" fontSize="8">4.3&quot; TFT LCD</text>

                {/* 출력 연결선 */}
                <line x1="230" y1="107" x2="280" y2="65" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>
                <line x1="230" y1="127" x2="280" y2="127" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>
                <line x1="230" y1="147" x2="280" y2="190" stroke="#1e5080" strokeWidth="1.5" strokeDasharray="4 2"/>

                {/* 출력 노드들 */}
                <rect x="280" y="44" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5"/>
                <text x="323" y="58" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">RS-485</text>
                <text x="323" y="70" textAnchor="middle" fill="#667788" fontSize="8">Modbus RTU/TCP</text>

                <rect x="280" y="110" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5"/>
                <text x="323" y="124" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">LTE · WiFi</text>
                <text x="323" y="136" textAnchor="middle" fill="#667788" fontSize="8">{isKo ? '클라우드·앱' : 'Cloud / App'}</text>

                <rect x="280" y="176" width="86" height="34" rx="7" fill="#071726" stroke="#2a6a2a" strokeWidth="1.5"/>
                <text x="323" y="190" textAnchor="middle" fill="#4ac44a" fontSize="9" fontWeight="600">4~20 mA</text>
                <text x="323" y="202" textAnchor="middle" fill="#667788" fontSize="8">Analog Out</text>

                {/* 하단 캡션 */}
                <text x="190" y="248" textAnchor="middle" fill="#445566" fontSize="9">{isKo ? '다중 프로토콜 동시 출력 — ICT 수질 원격관제 시스템' : 'Multi-protocol simultaneous output — ICT Remote Monitoring'}</text>
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
