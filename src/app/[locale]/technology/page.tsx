import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '기술 소개' : 'Technology',
    description: locale === 'ko' ? '워터비 핵심 수질계측 기술' : 'Waterbee core water-quality instrumentation technology',
  }
}

const patents = {
  ko: [
    ['제10-1132985호', '릴레이 감시 시스템'],
    ['제10-2532710호', '탁도 및 잔류염소 측정 시스템'],
    ['제10-2570508호', '비교측정 및 셀프교정 기능을 보유한 잔류염소 측정장치'],
    ['제10-2615508호', '탁도 이상진단 시스템'],
    ['제10-2607667호', '탁도 측정 방법'],
    ['제10-2658845호', '스마트 수질 측정 정밀여과시스템'],
  ],
  en: [
    ['Patent No. 10-1132985', 'Relay Monitoring System'],
    ['Patent No. 10-2532710', 'Turbidity and Residual Chlorine Measurement System'],
    ['Patent No. 10-2570508', 'Residual Chlorine Analyzer with Comparative Measurement and Self-Calibration'],
    ['Patent No. 10-2615508', 'Turbidity Abnormality Diagnosis System'],
    ['Patent No. 10-2607667', 'Turbidity Measurement Method'],
    ['Patent No. 10-2658845', 'Smart Water-Quality Precision Filtration System'],
  ],
}

const certifications = {
  ko: [
    ['잔류염소계 형식승인', '국립환경과학원'],
    ['탁도계 형식승인', '국립환경과학원'],
    ['전자파 적합성', 'KC 인증'],
    ['벤처기업 확인', '중소벤처기업부'],
  ],
  en: [
    ['Residual Chlorine Type Approval', 'National Institute of Environmental Research'],
    ['Turbidity Meter Type Approval', 'National Institute of Environmental Research'],
    ['Electromagnetic Compatibility', 'KC Certification'],
    ['Venture Company Confirmation', 'Ministry of SMEs and Startups'],
  ],
}

const content = {
  ko: {
    eyebrow: 'Technology',
    title: '워터비 핵심 기술',
    intro: '센서의 측정 원리부터 시료 흐름, 현장 교정과 출력 신호까지 실제 운전 환경을 기준으로 설계합니다.',
    overview: [
      ['회전전극식 잔류염소', '전극 회전으로 표면 오염을 줄이는 무시약 연속 측정'],
      ['기포 저감형 저농도 탁도', '90° 산란광 검출과 탈부착식 기포 저감 구조'],
      ['현장 제어 인터페이스', '표시·교정·4~20 mA·RS-485 통합 운전'],
    ],
    sections: [
      {
        eyebrow: 'Residual Chlorine',
        title: '전극 표면을 스스로 관리하는 회전 구조',
        description: 'WBCL10은 회전전극식 폴라로그래프 방식을 사용합니다. 측정 중 전극을 회전시켜 표면 오염의 누적을 줄이고, 멤브레인 소모품 없이 잔류염소를 연속 측정하도록 설계했습니다.',
        image: '/images/products/wbcl10-front.png',
        metrics: [['0.01~2.00 mg/L', '측정 범위'], ['±0.02 mg/L', '정확도(typ.)'], ['2분 이내', '90% 응답']],
        points: ['무시약 연속 측정', '회전 구조를 통한 전극 표면 관리', 'WBSC10과 연동되는 현장 교정 및 출력'],
      },
      {
        eyebrow: 'Turbidity',
        title: '미세기포 영향을 줄이는 저농도 탁도 광학계',
        description: 'WBTU10은 텅스텐 램프와 90° 산란광 검출 구조를 사용합니다. 측정셀 앞단의 탈부착식 기포 저감 구조가 시료 내 미세기포에 의한 간섭을 줄여 정수장과 배수지의 저농도 탁도 모니터링을 지원합니다.',
        image: '/images/products/wbtu10-front.png',
        metrics: [['0~10 NTU', '측정 범위'], ['0.001 NTU', '분해능'], ['90°', '검출 각도']],
        points: ['580 nm 텅스텐 램프 광원', '탈부착 가능한 기포 저감 구조', '시료 유로와 광학부의 유지관리 구조'],
      },
      {
        eyebrow: 'Field Controller',
        title: '측정값 표시부터 상위 시스템 통신까지',
        description: 'WBSC10은 워터비 센서의 측정값 표시, 현장 교정, 경보와 제어 출력을 담당합니다. 기존 수처리 설비에서 사용하는 4~20 mA와 RS-485 신호를 지원해 현장 제어반과 상위 시스템에 연결할 수 있습니다.',
        image: '/images/products/wbsc10-front.png',
        metrics: [['4.3 inch', 'TFT LCD'], ['4~20 mA', '아날로그 출력'], ['RS-485', '현장 통신']],
        points: ['현장 키패드를 이용한 교정과 설정', '릴레이 경보 및 제어 출력', 'Modbus RTU/TCP 연동'],
      },
    ],
    patentTitle: '등록 특허',
    certTitle: '인증 및 승인',
    proofTitle: '검증된 기술 기반',
    proofIntro: '핵심 측정 구조와 시스템 기술에 대한 등록 특허, 수질계측기 형식승인 현황입니다.',
  },
  en: {
    eyebrow: 'Technology',
    title: 'Waterbee Core Technology',
    intro: 'We design from the measurement principle through sample flow, field calibration and output signals around real operating conditions.',
    overview: [
      ['Rotating-Electrode Residual Chlorine', 'Reagent-free continuous measurement that helps limit electrode fouling'],
      ['Bubble-Reduced Low-Range Turbidity', '90° scattered-light detection with a detachable bubble-reduction structure'],
      ['Field Control Interface', 'Integrated display, calibration, 4–20 mA and RS-485 operation'],
    ],
    sections: [
      {
        eyebrow: 'Residual Chlorine',
        title: 'A rotating structure that conditions the electrode surface',
        description: 'The WBCL10 uses a rotating-electrode polarographic method. Electrode rotation helps limit surface fouling during measurement and supports continuous residual chlorine monitoring without a membrane consumable.',
        image: '/images/products/wbcl10-front.png',
        metrics: [['0.01–2.00 mg/L', 'Measuring Range'], ['±0.02 mg/L', 'Accuracy (typ.)'], ['Within 2 min', '90% Response']],
        points: ['Reagent-free continuous measurement', 'Electrode-surface management through rotation', 'Field calibration and output through the WBSC10'],
      },
      {
        eyebrow: 'Turbidity',
        title: 'Low-range optics designed to reduce microbubble interference',
        description: 'The WBTU10 uses a tungsten lamp and 90° scattered-light detection. A detachable bubble-reduction structure ahead of the flow cell helps limit microbubble interference in low-range monitoring at water treatment plants and clearwells.',
        image: '/images/products/wbtu10-front.png',
        metrics: [['0–10 NTU', 'Measuring Range'], ['0.001 NTU', 'Resolution'], ['90°', 'Detection Angle']],
        points: ['580 nm tungsten lamp', 'Detachable bubble-reduction structure', 'Maintainable sample path and optical arrangement'],
      },
      {
        eyebrow: 'Field Controller',
        title: 'From local display to supervisory communication',
        description: 'The WBSC10 handles measurement display, field calibration, alarms and control outputs for Waterbee sensors. Its 4–20 mA and RS-485 interfaces connect with conventional treatment panels and supervisory systems.',
        image: '/images/products/wbsc10-front.png',
        metrics: [['4.3 inch', 'TFT LCD'], ['4–20 mA', 'Analog Output'], ['RS-485', 'Field Communication']],
        points: ['Calibration and settings through a field keypad', 'Relay alarm and control outputs', 'Modbus RTU/TCP integration'],
      },
    ],
    patentTitle: 'Registered Patents',
    certTitle: 'Certification & Approval',
    proofTitle: 'Technology with documented validation',
    proofIntro: 'Registered patents for core measurement and system structures, together with type approvals for Waterbee instruments.',
  },
} as const

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const copy = isKo ? content.ko : content.en
  const patentList = isKo ? patents.ko : patents.en
  const certificationList = isKo ? certifications.ko : certifications.en

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase text-[#8c7200]">{copy.eyebrow}</div>
            <h1 className="mt-5 text-4xl font-bold tracking-normal text-[#151a19] lg:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#596361] lg:text-lg">{copy.intro}</p>
          </div>

          <div className="mt-14 grid border-t border-[#9fa8a5] md:grid-cols-3">
            {copy.overview.map(([title, description], index) => (
              <div key={title} className="border-b border-[#cbd1ce] py-6 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="text-xs text-[#8a9390]">0{index + 1}</div>
                <h2 className="mt-8 text-lg font-semibold text-[#202725]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#68716f]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {copy.sections.map((section, index) => (
        <section key={section.eyebrow} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f5f6f4]'}>
          <div className={`container-custom grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative flex h-[420px] items-center justify-center bg-[#eaeeeb] sm:h-[540px]">
              <div className={`relative ${section.eyebrow === 'Field Controller' ? 'h-[72%] w-[76%]' : 'h-[86%] w-[78%]'}`}>
                <Image src={section.image} alt={section.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase text-[#8c7200]">{section.eyebrow}</div>
              <h2 className="mt-5 text-3xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:text-4xl">{section.title}</h2>
              <p className="mt-6 text-base leading-8 text-[#596361]">{section.description}</p>

              <div className="mt-9 grid grid-cols-3 border-y border-[#aeb6b3]">
                {section.metrics.map(([value, label]) => (
                  <div key={label} className="border-r border-[#d2d7d4] py-5 pr-3 last:border-r-0 last:pl-4">
                    <div className="text-base font-bold leading-6 text-[#202725] lg:text-lg">{value}</div>
                    <div className="mt-2 text-[11px] leading-4 text-[#7a8380]">{label}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-0 border-t border-[#d2d7d4]">
                {section.points.map((point) => (
                  <li key={point} className="border-b border-[#d2d7d4] py-4 text-sm leading-6 text-[#303735]">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#151a19] py-20 text-white lg:py-28">
        <div className="container-custom">
          <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs font-bold uppercase text-[#f5c400]">Patents & Approvals</div>
              <h2 className="mt-5 text-3xl font-bold tracking-normal lg:text-4xl">{copy.proofTitle}</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#aeb8b5]">{copy.proofIntro}</p>
          </div>

          <div className="grid gap-14 pt-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">{copy.patentTitle}</h3>
              <div className="border-t border-white/25">
                {patentList.map(([number, name]) => (
                  <div key={number} className="grid grid-cols-[138px_1fr] gap-4 border-b border-white/15 py-4 text-sm">
                    <div className="text-[#f5c400]">{number}</div>
                    <div className="leading-6 text-[#c4ccca]">{name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-white">{copy.certTitle}</h3>
              <div className="border-t border-white/25">
                {certificationList.map(([name, issuer]) => (
                  <div key={name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/15 py-4 text-sm">
                    <div className="leading-6 text-[#c4ccca]">{name}</div>
                    <div className="text-right leading-6 text-[#8f9a97]">{issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
