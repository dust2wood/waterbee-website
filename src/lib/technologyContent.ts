export const technologyContent = {
  ko: {
    title: '측정부터 유지관리까지',
    intro: '회전전극 · 기포 저감 광학계 · 현장 제어 · 상태 기반 점검',
    nav: ['측정 원리', '컨트롤러', '연결 기술', '유지관리'],
    measurementTitle: '현장 조건에 대응하는 센서 구조',
    measurements: [
      {
        model: 'WBTU10', slug: 'wbtu10', title: '기포 영향을 줄인 탁도 측정',
        image: '/images/technology/turbidity-module-20260917.webp',
        alt: '탁도계의 탈부착식 기포 저감 모듈과 측정 유로',
        points: ['텅스텐 광원과 90° 산란광 검출', '측정셀 앞단의 탈부착식 기포 저감 구조', '광학부와 시료 유로의 분리 점검·세정'],
        metrics: [['0–10 NTU', '측정 범위'], ['0.001 NTU', '분해능'], ['90°', '산란광 검출']],
        careText: '램프 광량 · 광학부 오염 · 유로 상태',
      },
      {
        model: 'WBFC10', slug: 'wbfc10', title: '회전전극식 잔류염소 측정',
        image: '/images/technology/chlorine-rotation-20260917.webp',
        alt: '잔류염소계의 회전전극과 측정조 구조',
        points: ['무시약 폴라로그래프 방식의 연속 측정', '전극 회전과 세정용 비즈를 통한 표면 오염 저감', '진단값에 따른 전극·측정조 점검 및 세정'],
        metrics: [['0–2.00 mg/L', '측정 범위'], ['0.01 mg/L', '분해능'], ['2분 이내', '90% 응답']],
        careText: '전극 상태 · 측정조 오염 · 세라믹 비즈',
      },
    ],
    sensors: [
      {model: 'WBPH10', slug: 'wbph10', title: 'pH', text: '유리전극식 측정 · 자동 온도 보정 · 버퍼 2점 교정'},
      {model: 'WBEC10', slug: 'wbec10', title: '전기전도도', text: '전극식 EC/TDS 측정 · 자동 온도 보정 · 현장 교정'},
    ],
    care: '관리 항목', detail: '제품 사양',
    controller: {
      title: '측정값 표시부터 상위 시스템 통신까지',
      intro: 'WBSC10 기반 표시·교정·기록·경보 통합',
      specs: [['4.3 inch', 'TFT LCD'], ['4–20 mA', '아날로그 출력 2CH'], ['RS-485', 'Modbus 통신'], ['3CH', '릴레이 출력']],
      points: ['현장 키패드 기반 설정·교정', 'SD 데이터 저장 및 Ethernet 선택 사양', '제어반·PLC·상위 시스템 연동'],
    },
    connected: {
      title: '무선 연결과 지능형 진단', badge: '개발 중',
      intro: '현장 점검의 간소화와 수질 데이터 활용 확대',
      imageAlt: '컨트롤러, 스마트폰과 PC의 Wi-Fi·Bluetooth 연결 개발 개념',
      features: [
        ['Bluetooth', '스마트폰 초기 설정·근거리 서비스 연결'],
        ['Wi-Fi', '로컬 웹 화면·계측 데이터 전송'],
        ['AI 상태 분석', '이상징후·센서 드리프트 탐지 연구'],
        ['독립 안전 제어', '계측 분석과 릴레이 보호 로직 분리 설계'],
      ],
      validation: '통신·부하·노이즈 시험 및 현장 검증 단계',
    },
    maintenance: {
      title: '센서별 점검과 교체 부품',
      intro: '측정 원리에 맞춘 부품 관리 · 진단값과 교정 이력 기반 점검',
      items: [
        ['WBTU10', '탁도계', '광량·측정 편차 점검', '램프 모듈 권장 교체: 2년'],
        ['WBFC10', '잔류염소계', '전극·측정조 세정', '전극 및 세라믹 비즈 상태 점검'],
        ['WBPH10', 'pH계', '월 1회 교정 권장', '센서 권장 교체: 2년'],
        ['WBEC10', '전기전도도계', '전극 오염·교정 편차 점검', '센서 권장 교체: 5년'],
      ],
      condition: '권장 주기: 원수 수질·유량·가동시간에 따라 조정',
      filter: '여과드레인 시스템', filterText: '차압·전후단 수질·운전 이력 기반 필터 점검',
    },
    resources: { title: '기술 자료실', intro: '외형 치수 · CAD 도면 · 제품별 사양', drawings: '외형도·CAD', contact: '기술 문의' },
  },
  en: {
    title: 'From Measurement to Maintenance',
    intro: 'Rotating electrodes · Bubble-reduced optics · Field control · Condition-based service',
    nav: ['Measurement', 'Controller', 'Connectivity', 'Maintenance'],
    measurementTitle: 'Sensor Design for Field Conditions',
    measurements: [
      {
        model: 'WBTU10', slug: 'wbtu10', title: 'Bubble-Reduced Turbidity',
        image: '/images/technology/turbidity-module-20260917.webp',
        alt: 'Detachable bubble-reduction module and turbidity sample path',
        points: ['Tungsten light source and 90° scattered-light detection', 'Detachable bubble-reduction stage ahead of the flow cell', 'Separate access to optics and sample path for inspection'],
        metrics: [['0–10 NTU', 'Measuring range'], ['0.001 NTU', 'Resolution'], ['90°', 'Detection angle']],
        careText: 'Lamp output · Optical fouling · Sample flow',
      },
      {
        model: 'WBFC10', slug: 'wbfc10', title: 'Rotating-Electrode Chlorine',
        image: '/images/technology/chlorine-rotation-20260917.webp',
        alt: 'Rotating electrode and residual chlorine measuring cell',
        points: ['Reagent-free continuous polarographic measurement', 'Electrode rotation and cleaning beads for reduced fouling', 'Diagnostic-led electrode and cell inspection and cleaning'],
        metrics: [['0–2.00 mg/L', 'Measuring range'], ['0.01 mg/L', 'Resolution'], ['Within 2 min', '90% response']],
        careText: 'Electrode condition · Cell fouling · Ceramic beads',
      },
    ],
    sensors: [
      {model: 'WBPH10', slug: 'wbph10', title: 'pH', text: 'Glass electrode · Automatic temperature compensation · Two-point buffer calibration'},
      {model: 'WBEC10', slug: 'wbec10', title: 'Conductivity', text: 'Electrode-based EC/TDS · Automatic temperature compensation · Field calibration'},
    ],
    care: 'Service points', detail: 'Product specifications',
    controller: {
      title: 'Local Display to Plant Communication',
      intro: 'WBSC10 integration of display, calibration, recording and alarms',
      specs: [['4.3 inch', 'TFT LCD'], ['4–20 mA', 'Two analog outputs'], ['RS-485', 'Modbus communication'], ['3CH', 'Relay outputs']],
      points: ['Local keypad setup and calibration', 'SD logging and optional Ethernet', 'Control panel, PLC and supervisory system integration'],
    },
    connected: {
      title: 'Wireless Access & Intelligent Diagnostics', badge: 'In development',
      intro: 'Simplified field service and extended use of measurement data',
      imageAlt: 'Development concept of Wi-Fi and Bluetooth links between a controller, smartphone and PC',
      features: [
        ['Bluetooth', 'Smartphone setup and local service access'],
        ['Wi-Fi', 'Local web interface and measurement telemetry'],
        ['AI condition analysis', 'Research into anomaly and sensor-drift detection'],
        ['Independent safety control', 'Separate analytics and relay-protection logic'],
      ],
      validation: 'Communication, load, noise and field validation phase',
    },
    maintenance: {
      title: 'Sensor Service & Replacement Parts',
      intro: 'Maintenance matched to each measuring principle · Diagnostics and calibration history',
      items: [
        ['WBTU10', 'Turbidity', 'Lamp output and measurement drift', 'Recommended lamp interval: 2 years'],
        ['WBFC10', 'Residual chlorine', 'Electrode and cell cleaning', 'Electrode and ceramic bead inspection'],
        ['WBPH10', 'pH', 'Monthly calibration recommended', 'Recommended sensor interval: 2 years'],
        ['WBEC10', 'Conductivity', 'Electrode fouling and calibration drift', 'Recommended sensor interval: 5 years'],
      ],
      condition: 'Recommended intervals adjusted to sample quality, flow and operating hours',
      filter: 'Filter-Drain System', filterText: 'Filter inspection based on differential pressure, water quality and operating history',
    },
    resources: { title: 'Technical Resources', intro: 'Outline dimensions · CAD drawings · Product specifications', drawings: 'Drawings & CAD', contact: 'Technical inquiry' },
  },
} as const

export function getTechnologyContent(locale: string) {
  return technologyContent[locale === 'ko' ? 'ko' : 'en']
}
