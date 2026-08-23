export type SiteLanguage = 'ko' | 'en'

export const technologyContent = {
  ko: {
    eyebrow: 'Technology',
    title: '신뢰를 지키는 수질계측 기술',
    intro:
      '제품 모델을 다시 나열하는 대신, 센서가 오염과 기포를 다루는 방식부터 유지관리 기준, 연결형 제어와 AI 검증 방향까지 운전 신뢰성을 만드는 기술을 설명합니다.',
    pillars: [
      ['01', '오염에 강한 측정 구조', '회전전극과 관리 가능한 유로로 현장 오염의 영향을 줄입니다.'],
      ['02', '기포 영향을 줄인 광학계', '90° 산란광 검출과 기포 저감 구조로 저농도 탁도를 읽습니다.'],
      ['03', '수명 기준이 있는 유지관리', '고정 교체와 상태 기반 점검을 구분해 관리 계획을 세울 수 있습니다.'],
      ['04', '연결형 제어와 AI 로드맵', 'ESP32-S3 기반 Wi-Fi·BLE와 설명 가능한 엣지 분석을 검증하고 있습니다.'],
    ],
    measurementEyebrow: 'Measurement Principles',
    measurementTitle: '센서 구조가 만드는 측정 신뢰도',
    measurementIntro:
      '각 제품의 판매 사양은 제품 페이지에서, 측정 원리와 현장 우수성은 이곳에서 확인할 수 있습니다.',
    measurementSections: [
      {
        eyebrow: 'Rotating Electrode',
        title: '회전전극식 잔류염소 측정',
        description:
          '측정 중 전극을 회전시켜 표면 오염의 누적을 줄입니다. 고정 주기로 교체하는 멤브레인과 시약을 사용하지 않으며, 진단 결과에 따라 전극과 측정조를 점검·세정하는 구조입니다.',
        image: '/images/technology/residual-chlorine-rotation-cutaway.png',
        metrics: [
          ['무시약', '연속 측정'],
          ['멤브레인 없음', '고정 교체 부담 저감'],
          ['2분 이내', '90% 응답 기준'],
        ],
        points: [
          '회전 운동으로 전극 표면의 오염 누적 저감',
          '진단값을 기준으로 전극과 측정조 점검·세정',
          '현장 교정과 4–20 mA·RS-485 기반 설비 연동',
        ],
      },
      {
        eyebrow: 'Low-range Turbidity',
        title: '기포 저감형 90° 산란광 탁도',
        description:
          '텅스텐 램프와 90° 산란광 검출 구조를 사용하고, 측정셀 앞단에 탈부착식 기포 저감 구조를 배치합니다. 정수장과 배수지의 저농도 영역에서 기포가 측정값에 미치는 영향을 줄이도록 설계했습니다.',
        image: '/images/technology/turbidity-bubble-removal-module.png',
        metrics: [
          ['0–10 NTU', '측정 범위'],
          ['0.001 NTU', '분해능'],
          ['90°', '산란광 검출'],
        ],
        points: [
          '탈부착식 기포 저감 구조로 점검과 세정 용이',
          '±2% 또는 ±0.01 NTU 정확도 기준',
          '시료 유로와 광학부를 분리해 유지관리 가능',
        ],
      },
    ],
    lifecycle: {
      eyebrow: 'Lifecycle & Maintenance',
      title: '소모품 수명과 관리 기준',
      intro:
        '교체 주기가 있는 부품과 상태를 보고 관리하는 부품을 구분했습니다. 실제 수명은 원수 수질, 유량, 가동시간, 세정 및 설치 조건에 따라 달라질 수 있습니다.',
      items: [
        {
          subject: '회전전극식 잔류염소 측정부',
          cycle: '고정 교체주기 없음',
          detail: '멤브레인·시약을 사용하지 않습니다. 진단 이상 시 전극과 측정조를 점검·세정합니다.',
          kind: '상태 기반',
        },
        {
          subject: 'WBTU10 텅스텐 램프',
          cycle: '권장 2년',
          detail: '광량과 진단 상태를 확인해 사용자가 교체할 수 있습니다.',
          kind: '권장 교체',
        },
        {
          subject: 'WBTU10 광검출기',
          cycle: '5년 이상',
          detail: '검출기 이상이 의심되면 워터비 점검을 권장합니다.',
          kind: '기대 수명',
        },
        {
          subject: 'WBPH10 pH 센서',
          cycle: '권장 2년',
          detail: '유리전극 파손 시 즉시 교체하며, 월 1회 교정을 권장합니다.',
          kind: '권장 교체',
        },
        {
          subject: 'WBEC10 EC 센서',
          cycle: '권장 5년',
          detail: '오염과 측정 편차를 확인해 세정·교정 후 교체 여부를 판단합니다.',
          kind: '권장 교체',
        },
        {
          subject: '스마트 여과드레인 필터',
          cycle: '운전 상태에 따라',
          detail: '차압, 전·후단 수질과 운전 이력을 함께 보고 교체 시점을 판단합니다.',
          kind: '상태 기반',
        },
      ],
      note: '위 수치는 보증 수명이 아닌 매뉴얼의 권장 관리 기준입니다. 현장 조건과 최신 제품 매뉴얼을 우선해 주세요.',
    },
    controller: {
      eyebrow: 'Connected Controller',
      title: '현행 제어와 차세대 연결 기술',
      intro:
        '현재 공급 중인 WBSC10과 개발 중인 ESP32-S3 기반 제어기를 분리해 안내합니다. 개발 기능은 EVT와 현장 검증을 거쳐 최종 사양이 확정됩니다.',
      current: {
        badge: '현재 공급',
        title: 'WBSC10 현장 컨트롤러',
        description:
          '현장 표시·교정·기록과 기존 제어 설비 연동에 집중한 현재 제품입니다.',
        features: ['4.3인치 현장 화면', '4–20 mA 2채널', 'RS-485 Modbus', '릴레이 3채널', 'SD 저장 및 Ethernet 옵션'],
        link: '현행 제품 사양 보기',
      },
      next: {
        badge: '개발 중 · EVT 검증 예정',
        title: 'ESP32-S3 연결형 제어기',
        description:
          '기존 현장 신호를 유지하면서 무선 설정과 원격 상태 확인을 더하는 차세대 구조를 개발하고 있습니다.',
        features: [
          ['Bluetooth Low Energy', '초기 설정, 현장 점검과 서비스 연결'],
          ['Wi-Fi', '로컬 웹 화면과 상태·계측 데이터 전송'],
          ['기존 설비 연동', '4–20 mA, RS-485, 릴레이·PLC 신호 통합'],
          ['검증 우선', 'RF, 동시 통신, 부하와 노이즈 시험 후 사양 확정'],
        ],
        visualNote: '실제 WBSC10 외형을 기준으로 연결 기능만 표현한 개발 콘셉트입니다.',
      },
    },
    ai: {
      eyebrow: 'Explainable Edge AI',
      badge: 'R&D 로드맵 · 검증 전',
      title: '설명 가능한 AI·독립 안전 제어',
      intro:
        '장기 수질 데이터에서 이상징후와 센서 드리프트를 찾는 설명 가능한 경량 분석 구조를 개발하고 있습니다. 서버에서 학습·검증하고 ESP32에서는 위험도 추론만 수행하도록 역할을 나눕니다.',
      steps: [
        ['01', '데이터 품질 판정', '결측·고정값·범위 이탈과 동시 이상을 먼저 걸러냅니다.'],
        ['02', '강건한 이상 탐지', 'Hampel, MAD, EWMA·CUSUM 등 설명 가능한 통계를 적용합니다.'],
        ['03', '경량 위험도 추론', '검증된 얕은 모델을 ESP32에 배치해 현장 위험도를 계산합니다.'],
        ['04', '독립 안전 제어', 'AI와 분리된 상태 머신이 릴레이 한도와 복구 조건을 최종 판단합니다.'],
      ],
      principle:
        '초기에는 제어에 개입하지 않는 관찰 모드로 검증하고, 재현성과 오경보 수준이 확인된 기능만 단계적으로 적용합니다.',
    },
    closing: {
      title: '제품 사양과 기술 근거를 구분했습니다.',
      products: '제품 라인업 보기',
      about: '특허·인증과 회사 연혁 보기',
    },
  },
  en: {
    eyebrow: 'Technology',
    title: 'Reliable Water-Quality Measurement',
    intro:
      'Rather than repeating product models, this page explains how Waterbee manages fouling and bubbles, defines maintenance lifecycles, and validates connected control and AI for dependable operation.',
    pillars: [
      ['01', 'Fouling-resilient measurement', 'Rotating electrodes and serviceable flow paths help reduce field fouling.'],
      ['02', 'Bubble-reduced optics', '90° scattered-light detection and a bubble-reduction stage support low-range turbidity.'],
      ['03', 'Lifecycle-based maintenance', 'Fixed replacement and condition-based inspection are clearly separated.'],
      ['04', 'Connected control and AI roadmap', 'ESP32-S3 Wi-Fi, BLE and explainable edge analytics are under validation.'],
    ],
    measurementEyebrow: 'Measurement Principles',
    measurementTitle: 'Sensor Design Builds Confidence',
    measurementIntro:
      'Product pages provide model specifications and configurations; this page explains measurement principles and field advantages.',
    measurementSections: [
      {
        eyebrow: 'Rotating Electrode',
        title: 'Rotating-Electrode Chlorine',
        description:
          'The electrode rotates during measurement to help limit surface fouling. There is no fixed-cycle membrane or reagent; the electrode and measuring cell are inspected and cleaned in response to diagnostics.',
        image: '/images/technology/residual-chlorine-rotation-cutaway.png',
        metrics: [
          ['Reagent-free', 'Continuous measurement'],
          ['No membrane', 'Lower fixed replacement burden'],
          ['Within 2 min', '90% response criterion'],
        ],
        points: [
          'Rotation helps limit contamination on the electrode surface',
          'Diagnostics guide electrode and measuring-cell inspection',
          'Field calibration plus 4–20 mA and RS-485 integration',
        ],
      },
      {
        eyebrow: 'Low-range Turbidity',
        title: 'Bubble-Reduced 90° Turbidity',
        description:
          'A tungsten lamp and 90° scattered-light detector are paired with a detachable bubble-reduction stage ahead of the flow cell. The architecture is designed to reduce bubble interference in low-range monitoring at treatment plants and clearwells.',
        image: '/images/technology/turbidity-bubble-removal-module.png',
        metrics: [
          ['0–10 NTU', 'Measuring range'],
          ['0.001 NTU', 'Resolution'],
          ['90°', 'Scattered-light detection'],
        ],
        points: [
          'Detachable bubble-reduction stage for easier inspection and cleaning',
          'Accuracy criterion of ±2% or ±0.01 NTU',
          'Serviceable sample path and optical arrangement',
        ],
      },
    ],
    lifecycle: {
      eyebrow: 'Lifecycle & Maintenance',
      title: 'Consumable Life & Maintenance',
      intro:
        'Components with a recommended replacement interval are separated from condition-based items. Actual life varies with sample quality, flow, operating hours, cleaning and installation.',
      items: [
        {
          subject: 'Rotating-electrode chlorine measurement unit',
          cycle: 'No fixed interval',
          detail: 'No membrane or reagent is used. Inspect and clean the electrode and measuring cell when diagnostics indicate an issue.',
          kind: 'Condition-based',
        },
        {
          subject: 'WBTU10 tungsten lamp',
          cycle: '2 years recommended',
          detail: 'Check light output and diagnostics; the lamp is user-replaceable.',
          kind: 'Recommended replacement',
        },
        {
          subject: 'WBTU10 photodetector',
          cycle: '5+ years',
          detail: 'Contact Waterbee for inspection if detector performance is in question.',
          kind: 'Expected life',
        },
        {
          subject: 'WBPH10 pH sensor',
          cycle: '2 years recommended',
          detail: 'Replace immediately if the glass electrode breaks; monthly calibration is recommended.',
          kind: 'Recommended replacement',
        },
        {
          subject: 'WBEC10 EC sensor',
          cycle: '5 years recommended',
          detail: 'Inspect contamination and measurement offset, then clean and calibrate before deciding on replacement.',
          kind: 'Recommended replacement',
        },
        {
          subject: 'Smart Filter-Drain element',
          cycle: 'By operating condition',
          detail: 'Use differential pressure, upstream/downstream water quality and operating history to decide replacement timing.',
          kind: 'Condition-based',
        },
      ],
      note: 'These are maintenance recommendations, not warranted service-life values. Site conditions and the latest product manual take precedence.',
    },
    controller: {
      eyebrow: 'Connected Controller',
      title: 'Control Today, Connectivity Next',
      intro:
        'The shipping WBSC10 and the ESP32-S3 controller under development are presented separately. Development features will be finalized only after EVT and field validation.',
      current: {
        badge: 'Shipping now',
        title: 'WBSC10 field controller',
        description:
          'The current product focuses on local display, calibration, recording and integration with conventional plant controls.',
        features: ['4.3-inch local display', 'Two 4–20 mA channels', 'RS-485 Modbus', 'Three relay channels', 'SD storage and Ethernet option'],
        link: 'View current product specifications',
      },
      next: {
        badge: 'In development · EVT pending',
        title: 'ESP32-S3 connected controller',
        description:
          'The next-generation architecture is being developed to add wireless setup and remote status visibility while retaining conventional field signals.',
        features: [
          ['Bluetooth Low Energy', 'Initial setup, local inspection and service connection'],
          ['Wi-Fi', 'Local web interface and status/measurement telemetry'],
          ['Plant integration', '4–20 mA, RS-485, relay and PLC signal integration'],
          ['Validation first', 'Final specifications follow RF, concurrent communication, load and noise testing'],
        ],
        visualNote: 'Development concept using the actual WBSC10 enclosure to show connectivity functions only.',
      },
    },
    ai: {
      eyebrow: 'Explainable Edge AI',
      badge: 'R&D roadmap · not yet validated',
      title: 'Explainable AI & Safe Control',
      intro:
        'Waterbee is developing explainable lightweight analytics for abnormal water-quality signals and sensor drift. Training and validation run on a server, while the ESP32 performs risk-score inference only.',
      steps: [
        ['01', 'Data quality gate', 'Screen missing, stuck, out-of-range and simultaneous abnormal values first.'],
        ['02', 'Robust anomaly detection', 'Apply explainable statistics such as Hampel, MAD, EWMA and CUSUM.'],
        ['03', 'Lightweight risk inference', 'Deploy a validated shallow model to calculate a field risk score on the ESP32.'],
        ['04', 'Independent safety control', 'A separate state machine enforces relay limits and recovery conditions.'],
      ],
      principle:
        'Validation starts in shadow mode with no control authority. Only functions with demonstrated reproducibility and acceptable false-alarm behavior advance in stages.',
    },
    closing: {
      title: 'Product Specs & Engineering Evidence',
      products: 'Explore products',
      about: 'View patents, approvals and company history',
    },
  },
} as const

export function getTechnologyContent(locale: string) {
  return technologyContent[locale === 'ko' ? 'ko' : 'en']
}
