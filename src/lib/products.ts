export interface ProductSpec {
  label: string
  labelEn: string
  value: string
}

export interface Product {
  slug: string
  model: string
  name: string
  nameEn: string
  category: string
  categoryEn: string
  application: string[]
  featured: boolean
  shortDescription: string
  shortDescriptionEn: string
  description: string
  descriptionEn: string
  features: string[]
  featuresEn: string[]
  specs: ProductSpec[]
  image: string
  gallery: string[]
}

export const products: Product[] = [
  {
    slug: 'wbcl10',
    model: 'WBCL10',
    name: '잔류염소계',
    nameEn: 'Residual Chlorine Analyzer',
    category: '잔류염소',
    categoryEn: 'Residual Chlorine',
    application: ['water_treatment', 'industrial'],
    featured: true,
    shortDescription: '회전전극 + 이온코팅 기술로 소모품·멤브레인 교체가 필요 없는 연속식 잔류염소 측정기',
    shortDescriptionEn: 'Maintenance-free residual chlorine analyzer with rotating electrode & ion-coating — no membrane replacement',
    description: `WBCL10은 워터비 특허 기술인 회전전극 방식과 이온전극 코팅 기술을 결합한 연속식 잔류염소 측정기입니다.
기존 멤브레인 방식의 소모품을 완전히 제거하여 교체 비용과 현장 유지보수 부담을 획기적으로 줄였습니다.
이온코팅 전극으로 측정 안정성이 6개월 이상 유지되며, pH 6~8 구간에서 pH 보상 없이 정확한 측정이 가능합니다.`,
    descriptionEn: `The WBCL10 combines Waterbee's patented rotating electrode with ion-electrode coating technology for a maintenance-free continuous residual chlorine analyzer.
By completely eliminating the consumable membrane of conventional systems, it dramatically reduces replacement costs and field maintenance burden.
Ion-coated electrodes maintain measurement stability for over 6 months, with accurate measurement in pH 6–8 range without pH compensation.`,
    features: [
      '소모품(멤브레인) 교체 불필요 — 유지비용 획기적 절감',
      '이온전극 코팅으로 측정 안정성 6개월 이상 유지',
      'pH 6~8 구간 pH 보상 불필요',
      '유량 영향 없이 안정 측정 (흐름 없어도 정상 작동)',
      '회전전극 자동 세정으로 전극 오염 최소화',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      'IP65 방진·방수 등급',
    ],
    featuresEn: [
      'No consumables (membrane) — dramatically reduced maintenance cost',
      'Ion-coated electrode maintains stability for 6+ months',
      'No pH compensation needed in pH 6–8 range',
      'Stable measurement independent of flow rate',
      'Rotating electrode auto-cleaning minimizes fouling',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'IP65 dust and water protection',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '회전전극식 전기화학법' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.01 ~ 5.00 mg/L (Cl₂)' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 mg/L' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.02 mg/L 또는 ±2% FS' },
      { label: '응답 시간', labelEn: 'Response Time', value: 'T90 < 60초' },
      { label: '온도 보정', labelEn: 'Temperature Compensation', value: '0 ~ 50°C (자동)' },
      { label: '샘플 유량', labelEn: 'Sample Flow Rate', value: '0.3 ~ 1.0 L/min' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 220V, 50/60Hz' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 Modbus RTU/TCP' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA (1 채널)' },
      { label: '경보 접점', labelEn: 'Alarm Contact', value: 'Relay 2점 (상한/하한)' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65' },
      { label: '외함 재질', labelEn: 'Enclosure Material', value: 'ABS + 스테인리스 부품' },
      { label: '크기 (W×H×D)', labelEn: 'Dimensions (W×H×D)', value: '240 × 350 × 120 mm' },
      { label: '중량', labelEn: 'Weight', value: '약 3.5 kg' },
    ],
    image: '/images/products/wbcl10-main.jpg',
    gallery: [
      '/images/products/wbcl10-main.jpg',
      '/images/products/wbcl10-side.jpg',
      '/images/products/wbcl10-install.jpg',
    ],
  },
  {
    slug: 'wbtb10',
    model: 'WBTB10',
    name: '탁도계',
    nameEn: 'Turbidity Meter',
    category: '탁도',
    categoryEn: 'Turbidity',
    application: ['water_treatment', 'wastewater', 'industrial'],
    featured: true,
    shortDescription: 'ISO 7027 기반 90도 산란광식 연속 탁도 측정기 (텅스텐 램프, 미세기포 제거)',
    shortDescriptionEn: 'ISO 7027 compliant 90° scattered light continuous turbidity meter with bubble elimination',
    description: `WBTB10은 ISO 7027 규격에 준거한 90도 산란광 방식의 연속식 탁도계입니다.
텅스텐 램프(Tungsten Lamp) 광원을 채용하여 정밀하고 안정적인 측정값을 제공하며, 특허 적용 미세기포 제거 기능으로 간섭 오차를 원천 차단합니다.
자동 세정 기능으로 광학계 오염에 의한 측정 오류를 방지하고 장기간 안정적인 운전이 가능합니다.`,
    descriptionEn: `The WBTB10 is a continuous turbidity meter based on the ISO 7027 standard using 90° scattered light measurement.
Equipped with a Tungsten Lamp light source for precise and stable readings, and features a patented micro-bubble elimination system to prevent measurement interference.
The auto-cleaning function prevents optical contamination errors for long-term stable operation.`,
    features: [
      'ISO 7027 규격 준수 (90도 산란광식)',
      '텅스텐 램프 광원 채용으로 정밀 측정',
      '특허 미세기포 제거 기능으로 간섭 오차 차단',
      '자동 세정 기능으로 유지보수 최소화',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      '접점 경보 출력',
      '소형화 설계로 협소 공간 설치 용이',
    ],
    featuresEn: [
      'ISO 7027 compliant (90° scattered light)',
      'Tungsten lamp for precise measurement',
      'Patented micro-bubble elimination eliminates interference',
      'Auto-cleaning minimizes maintenance',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Relay alarm output',
      'Compact design for installation in tight spaces',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '90도 산란광식 (ISO 7027)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0 ~ 20 NTU' },
      { label: '분해능', labelEn: 'Resolution', value: '0.001 NTU' },
      { label: '정확도', labelEn: 'Accuracy', value: '±1% 또는 ±0.01 NTU' },
      { label: '광원', labelEn: 'Light Source', value: '텅스텐 램프 (Tungsten Lamp)' },
      { label: '샘플 온도', labelEn: 'Sample Temperature', value: '0 ~ 50°C' },
      { label: '샘플 유량', labelEn: 'Sample Flow Rate', value: '0.3 ~ 1.5 L/min' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 220V, 50/60Hz' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 Modbus RTU/TCP' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA (1 채널)' },
      { label: '경보 접점', labelEn: 'Alarm Contact', value: 'Relay 2점' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65' },
      { label: '크기 (W×H×D)', labelEn: 'Dimensions (W×H×D)', value: '240 × 350 × 120 mm' },
      { label: '중량', labelEn: 'Weight', value: '약 3.2 kg' },
    ],
    image: '/images/products/wbtb10-main.jpg',
    gallery: [
      '/images/products/wbtb10-main.jpg',
      '/images/products/wbtb10-side.jpg',
    ],
  },
  {
    slug: 'wbsc10',
    model: 'WBSC10',
    name: 'pH/EC계',
    nameEn: 'pH/EC Meter',
    category: 'pH/EC',
    categoryEn: 'pH/EC',
    application: ['water_treatment', 'wastewater', 'industrial'],
    featured: true,
    shortDescription: '연속식 pH 및 전기전도도(EC) 동시 측정기',
    shortDescriptionEn: 'Continuous pH and electrical conductivity (EC) simultaneous measurement meter',
    description: `WBSC10은 pH와 전기전도도(EC/TDS)를 하나의 장비로 동시에 측정하는 복합 수질 분석기입니다.
온도 자동 보정 기능과 우수한 전극 내구성으로 정수장, 하폐수처리장, 산업용 공정수 관리에 활용됩니다.
직관적인 디스플레이와 간편한 교정 기능으로 현장 운용이 편리합니다.`,
    descriptionEn: `The WBSC10 is a multi-parameter analyzer that simultaneously measures pH and electrical conductivity (EC/TDS) in a single unit.
With automatic temperature compensation and excellent electrode durability, it is used for waterworks, wastewater treatment, and industrial process water management.
An intuitive display and easy calibration make field operation convenient.`,
    features: [
      'pH + EC 동시 측정',
      '온도 자동 보정 (NTC 또는 PT-100)',
      '방오성 내구 전극 채용',
      '2점 또는 3점 pH 자동 교정',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA × 2채널 아날로그 출력',
      '접점 경보 출력 (pH/EC 각 독립)',
      'IP65 방수 외함',
    ],
    featuresEn: [
      'Simultaneous pH + EC measurement',
      'Automatic temperature compensation (NTC or PT-100)',
      'Durable anti-fouling electrodes',
      '2-point or 3-point automatic pH calibration',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA × 2ch analog output',
      'Independent relay alarm (pH/EC)',
      'IP65 waterproof enclosure',
    ],
    specs: [
      { label: 'pH 측정 범위', labelEn: 'pH Range', value: '0.00 ~ 14.00 pH' },
      { label: 'pH 정확도', labelEn: 'pH Accuracy', value: '±0.01 pH' },
      { label: 'EC 측정 범위', labelEn: 'EC Range', value: '0 ~ 20,000 μS/cm' },
      { label: 'EC 정확도', labelEn: 'EC Accuracy', value: '±1% FS' },
      { label: '온도 보정', labelEn: 'Temperature Compensation', value: '0 ~ 80°C (자동)' },
      { label: '샘플 유량', labelEn: 'Sample Flow Rate', value: '0.3 ~ 1.0 L/min' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 220V, 50/60Hz' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 Modbus RTU/TCP' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA × 2채널' },
      { label: '경보 접점', labelEn: 'Alarm Contact', value: 'Relay 4점 (각 상·하한)' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65' },
      { label: '크기 (W×H×D)', labelEn: 'Dimensions (W×H×D)', value: '260 × 380 × 130 mm' },
      { label: '중량', labelEn: 'Weight', value: '약 4.0 kg' },
    ],
    image: '/images/products/wbsc10-main.jpg',
    gallery: [
      '/images/products/wbsc10-main.jpg',
    ],
  },
  {
    slug: 'sampling-tank',
    model: 'WB-ST',
    name: '샘플링수조',
    nameEn: 'Sampling Tank',
    category: '샘플링',
    categoryEn: 'Sampling',
    application: ['water_treatment', 'wastewater'],
    featured: true,
    shortDescription: '수질 측정기기용 샘플 공급 및 오버플로우 수조 시스템',
    shortDescriptionEn: 'Sample supply and overflow tank system for water quality instruments',
    description: `WB-ST 샘플링수조는 잔류염소계, 탁도계, pH/EC계 등 수질 측정기기에 균일한 샘플을 안정적으로 공급하기 위한 전처리 수조입니다.
오버플로우 방식으로 항상 신선한 샘플이 기기에 공급되며, 부유물 침전 기능이 내장되어 있습니다.
SUS 304 스테인리스 재질로 내식성과 내구성이 우수합니다.`,
    descriptionEn: `The WB-ST sampling tank is a pre-treatment tank that stably supplies uniform samples to water quality instruments such as residual chlorine analyzers, turbidity meters, and pH/EC meters.
The overflow method ensures fresh samples are always supplied to the instruments, with built-in suspended solids settling.
Made of SUS 304 stainless steel for excellent corrosion resistance and durability.`,
    features: [
      'SUS 304 스테인리스 재질',
      '오버플로우 방식으로 신선한 샘플 연속 공급',
      '부유물 침전 기능 내장',
      '다중 기기 동시 연결 가능 (최대 4포트)',
      '드레인 밸브 및 레벨 스위치 내장',
      '벽걸이형 또는 스탠드형 선택',
      '취급 용이한 대형 점검 커버',
      '현장 조건에 따른 맞춤 제작 가능',
    ],
    featuresEn: [
      'SUS 304 stainless steel construction',
      'Continuous fresh sample supply via overflow',
      'Built-in suspended solids settling',
      'Multi-instrument connection (up to 4 ports)',
      'Built-in drain valve and level switch',
      'Wall-mount or stand-alone type available',
      'Large inspection cover for easy maintenance',
      'Custom fabrication available',
    ],
    specs: [
      { label: '재질', labelEn: 'Material', value: 'SUS 304 (경면 연마)' },
      { label: '수조 용량', labelEn: 'Tank Capacity', value: '5L / 10L (선택)' },
      { label: '유입 연결', labelEn: 'Inlet Connection', value: '1/2" PT 내나사' },
      { label: '배출 포트', labelEn: 'Outlet Ports', value: '최대 4포트 (1/4" PT)' },
      { label: '오버플로우', labelEn: 'Overflow', value: '1/2" PT 내나사' },
      { label: '드레인', labelEn: 'Drain', value: '볼밸브 포함' },
      { label: '레벨 스위치', labelEn: 'Level Switch', value: '플로트식 (선택 사양)' },
      { label: '설치 방식', labelEn: 'Installation', value: '벽걸이형 / 스탠드형' },
      { label: '크기 (W×H×D)', labelEn: 'Dimensions (W×H×D)', value: '300 × 400 × 200 mm (표준형)' },
      { label: '중량', labelEn: 'Weight', value: '약 4.5 kg (표준형)' },
    ],
    image: '/images/products/sampling-tank-main.jpg',
    gallery: [
      '/images/products/sampling-tank-main.jpg',
    ],
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category || p.categoryEn === category)
}

export function getProductsByApplication(application: string): Product[] {
  if (application === 'all') return products
  return products.filter((p) => p.application.includes(application))
}

export function getAllCategories(): string[] {
  const cats = new Set(products.map((p) => p.category))
  return ['전체', ...Array.from(cats)]
}

export function getAllApplications(): string[] {
  const apps = new Set(products.flatMap((p) => p.application))
  return ['all', ...Array.from(apps)]
}
