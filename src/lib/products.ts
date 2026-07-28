export interface ProductSpec {
  label: string
  labelEn: string
  value: string
  valueEn: string
}

export type ProductGroup = 'instrumentation' | 'system' | 'accessory'

export interface Product {
  slug: string
  model: string
  name: string
  nameEn: string
  category: string
  categoryEn: string
  group: ProductGroup
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
  price?: string
  priceEn?: string
  purchasable?: boolean
  compatibility?: string
  compatibilityEn?: string
}

export const products: Product[] = [
  {
    slug: 'wbsc10',
    model: 'WBSC10',
    name: '스마트 컨트롤러',
    nameEn: 'Smart Controller',
    category: '컨트롤러',
    categoryEn: 'Controller',
    group: 'instrumentation',
    application: ['water_treatment'],
    featured: true,
    shortDescription: '센서 표시, 교정, 출력 및 통신을 하나의 현장 제어기로 통합',
    shortDescriptionEn: 'Integrated field controller for sensor display, calibration, output and communication',
    description: `WBSC10은 워터비 수질 센서의 측정값 표시와 현장 교정, 경보 출력, 상위 시스템 통신을 담당하는 스마트 컨트롤러입니다.
4.3인치 TFT LCD와 직관적인 키패드를 적용했으며, 4~20 mA와 RS-485 기반의 기존 제어 설비에 연결할 수 있습니다.`,
    descriptionEn: `The WBSC10 is a smart field controller for Waterbee instruments, combining measurement display, field calibration, alarm output and communication with supervisory systems.
Its 4.3-inch TFT LCD and keypad support clear local operation, while 4–20 mA and RS-485 interfaces connect to existing plant control systems.`,
    features: [
      '4.3인치 TFT LCD와 현장용 키패드',
      '센서 측정값 표시 및 현장 교정',
      '4~20 mA 아날로그 출력',
      'RS-232 / RS-485 통신',
      'Modbus RTU/TCP 연동',
      '경보 및 제어용 릴레이 출력',
      'AC 110~240 V 및 DC 12 V 전원',
    ],
    featuresEn: [
      '4.3-inch TFT LCD with field keypad',
      'Sensor measurement display and field calibration',
      '4–20 mA analog output',
      'RS-232 / RS-485 communication',
      'Modbus RTU/TCP integration',
      'Alarm and control relay outputs',
      'AC 110–240 V and DC 12 V power',
    ],
    specs: [
      { label: '디스플레이', labelEn: 'Display', value: '4.3인치 TFT LCD', valueEn: '4.3-inch TFT LCD' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20 mA, 2CH', valueEn: '4–20 mA, 2CH' },
      { label: '통신', labelEn: 'Communication', value: 'RS-232, RS-485, Modbus RTU/TCP', valueEn: 'RS-232, RS-485, Modbus RTU/TCP' },
      { label: '릴레이 출력', labelEn: 'Relay Output', value: '3CH', valueEn: '3CH' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 110~240 V, DC 12 V', valueEn: 'AC 110–240 V, DC 12 V' },
      { label: '크기', labelEn: 'Dimensions', value: '210 × 180 × 86.5 mm', valueEn: '210 × 180 × 86.5 mm' },
    ],
    image: '/images/products/wbsc10-front.png',
    gallery: ['/images/products/wbsc10-front.png', '/images/products/wbsc10-main.png'],
  },
  {
    slug: 'wbtu10',
    model: 'WBTU10',
    name: '온라인 탁도계',
    nameEn: 'Online Turbidity Meter',
    category: '탁도',
    categoryEn: 'Turbidity',
    group: 'instrumentation',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '저농도 수질을 위한 90° 산란광 방식 연속 탁도 측정',
    shortDescriptionEn: 'Continuous low-range turbidity measurement using 90° scattered light',
    description: `WBTU10은 정수장과 배수지의 저농도 탁도를 연속 측정하는 온라인 탁도계입니다.
텅스텐 램프 광원과 90도 산란광 검출 구조를 적용했으며, 탈부착 가능한 기포 저감 구조로 미세기포에 의한 측정 간섭을 줄였습니다.`,
    descriptionEn: `The WBTU10 is an online turbidity meter for continuous low-range monitoring at water treatment plants and clearwells.
It uses a tungsten lamp and 90-degree scattered-light detection, together with a detachable bubble-reduction structure that helps limit microbubble interference.`,
    features: [
      '90° 산란광 방식의 저농도 연속 측정',
      '0~10 NTU 측정 범위',
      '0.001 NTU 분해능',
      '탈부착식 기포 저감 구조',
      '현장 교정 및 자동 세정 지원',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      '90° scattered-light continuous low-range measurement',
      '0–10 NTU measuring range',
      '0.001 NTU resolution',
      'Detachable bubble-reduction structure',
      'Field calibration and automatic cleaning support',
      '4–20 mA and RS-485 output',
      'Works with the WBSC10 smart controller',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '90° 산란광', valueEn: '90° scattered light' },
      { label: '광원', labelEn: 'Light Source', value: '텅스텐 램프, 580 nm', valueEn: 'Tungsten lamp, 580 nm' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0~10 NTU', valueEn: '0–10 NTU' },
      { label: '분해능', labelEn: 'Resolution', value: '0.001 NTU', valueEn: '0.001 NTU' },
      { label: '정확도', labelEn: 'Accuracy', value: '±2% 또는 ±0.01 NTU', valueEn: '±2% or ±0.01 NTU' },
      { label: '샘플 유량', labelEn: 'Sample Flow', value: '50~300 mL/min', valueEn: '50–300 mL/min' },
      { label: '출력 및 통신', labelEn: 'Output & Communication', value: '4~20 mA, RS-485', valueEn: '4–20 mA, RS-485' },
    ],
    image: '/images/products/wbtu10-front.png',
    gallery: ['/images/products/wbtu10-front.png', '/images/products/wbtu10-main.png'],
  },
  {
    slug: 'wbcl10',
    model: 'WBCL10',
    name: '온라인 잔류염소계',
    nameEn: 'Online Residual Chlorine Analyzer',
    category: '잔류염소',
    categoryEn: 'Residual Chlorine',
    group: 'instrumentation',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '무시약 회전전극식으로 잔류염소를 연속 측정하는 현장 계측기',
    shortDescriptionEn: 'Reagent-free rotating-electrode analyzer for continuous residual chlorine measurement',
    description: `WBCL10은 회전전극식 폴라로그래프 방식을 적용한 온라인 잔류염소계입니다.
측정 전극의 자동 회전 구조로 표면 오염을 줄이고, 멤브레인 교체 부담 없이 정수 공정의 잔류염소를 연속 모니터링할 수 있습니다.`,
    descriptionEn: `The WBCL10 is an online residual chlorine analyzer based on a rotating-electrode polarographic method.
Continuous electrode rotation helps limit surface fouling and supports reagent-free monitoring without the membrane replacement burden of conventional analyzers.`,
    features: [
      '무시약 회전전극식 폴라로그래프 방식',
      '0.01~2.00 mg/L 측정 범위',
      '전극 회전을 통한 표면 오염 저감',
      '멤브레인 소모품 불필요',
      '현장 교정 및 자동 세정 지원',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      'Reagent-free rotating-electrode polarographic method',
      '0.01–2.00 mg/L measuring range',
      'Rotating electrode helps limit surface fouling',
      'No membrane consumable required',
      'Field calibration and automatic cleaning support',
      '4–20 mA and RS-485 output',
      'Works with the WBSC10 smart controller',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '회전전극식 폴라로그래프', valueEn: 'Rotating-electrode polarographic' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.01~2.00 mg/L', valueEn: '0.01–2.00 mg/L' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 mg/L', valueEn: '0.01 mg/L' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.02 mg/L (typ.)', valueEn: '±0.02 mg/L (typ.)' },
      { label: '응답 시간', labelEn: 'Response Time', value: '90%, 2분 이내', valueEn: '90%, within 2 min' },
      { label: '샘플 유량', labelEn: 'Sample Flow', value: '200~700 mL/min', valueEn: '200–700 mL/min' },
      { label: '출력 및 통신', labelEn: 'Output & Communication', value: '4~20 mA, RS-485', valueEn: '4–20 mA, RS-485' },
    ],
    image: '/images/products/wbcl10-front.png',
    gallery: ['/images/products/wbcl10-front.png', '/images/products/wbcl10-main.png'],
  },
  {
    slug: 'wbph10',
    model: 'WBPH10',
    name: '온라인 pH계',
    nameEn: 'Online pH Meter',
    category: 'pH',
    categoryEn: 'pH',
    group: 'instrumentation',
    application: ['water_treatment'],
    featured: true,
    shortDescription: '온도 보정과 현장 교정을 지원하는 연속식 pH 측정기',
    shortDescriptionEn: 'Continuous pH meter with temperature compensation and field calibration',
    description: `WBPH10은 정수 공정과 수질 관리 현장의 pH를 연속 측정하는 온라인 계측기입니다.
온도 자동 보정과 2점 또는 3점 교정을 지원하며, WBSC10 컨트롤러를 통해 측정값과 출력 신호를 통합 관리할 수 있습니다.`,
    descriptionEn: `The WBPH10 continuously measures pH in water treatment and water-quality monitoring applications.
It supports automatic temperature compensation and two- or three-point calibration, with measurement and output management through the WBSC10 controller.`,
    features: [
      '0~14 pH 연속 측정',
      '온도 자동 보정',
      '2점 또는 3점 교정',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      '0–14 pH continuous measurement',
      'Automatic temperature compensation',
      'Two- or three-point calibration',
      '4–20 mA and RS-485 output',
      'Works with the WBSC10 smart controller',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '유리 전극식', valueEn: 'Glass electrode' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0~14 pH', valueEn: '0–14 pH' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 pH', valueEn: '0.01 pH' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.1 pH', valueEn: '±0.1 pH' },
      { label: '출력 및 통신', labelEn: 'Output & Communication', value: '4~20 mA, RS-485', valueEn: '4–20 mA, RS-485' },
    ],
    image: '/images/products/wbph10-main.png',
    gallery: ['/images/products/wbph10-main.png'],
  },
  {
    slug: 'wbec10',
    model: 'WBEC10',
    name: '온라인 전기전도도계',
    nameEn: 'Online Conductivity Meter',
    category: '전기전도도',
    categoryEn: 'Conductivity',
    group: 'instrumentation',
    application: ['water_treatment'],
    featured: true,
    shortDescription: '온도 보정을 지원하는 연속식 전기전도도(EC/TDS) 측정기',
    shortDescriptionEn: 'Continuous electrical conductivity meter with temperature compensation',
    description: `WBEC10은 정수 공정과 수질 관리 현장의 전기전도도를 연속 측정하는 온라인 계측기입니다.
온도 자동 보정 기능을 지원하며, WBSC10 컨트롤러를 통해 EC/TDS 측정값과 출력 신호를 통합 관리할 수 있습니다.`,
    descriptionEn: `The WBEC10 continuously measures electrical conductivity in water treatment and water-quality monitoring applications.
It supports automatic temperature compensation and integrates EC/TDS measurement and output management through the WBSC10 controller.`,
    features: [
      '전기전도도(EC/TDS) 연속 측정',
      '온도 자동 보정',
      '0~2,000 μS/cm 측정 범위',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      'Continuous electrical conductivity (EC/TDS) measurement',
      'Automatic temperature compensation',
      '0–2,000 μS/cm measuring range',
      '4–20 mA and RS-485 output',
      'Works with the WBSC10 smart controller',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '교류 2전극식', valueEn: 'AC two-electrode' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0~2,000 μS/cm', valueEn: '0–2,000 μS/cm' },
      { label: '분해능', labelEn: 'Resolution', value: '0.1 μS/cm', valueEn: '0.1 μS/cm' },
      { label: '정확도', labelEn: 'Accuracy', value: '1.5% F.S.', valueEn: '1.5% F.S.' },
      { label: '출력 및 통신', labelEn: 'Output & Communication', value: '4~20 mA, RS-485', valueEn: '4–20 mA, RS-485' },
    ],
    image: '/images/products/wbec10-main.png',
    gallery: ['/images/products/wbec10-main.png'],
  },
  {
    slug: 'filter-drain',
    model: 'WB-FD',
    name: '스마트 여과드레인 시스템',
    nameEn: 'Smart Filter-Drain System',
    category: '여과·드레인',
    categoryEn: 'Filter-Drain',
    group: 'system',
    application: ['smart_filter_drain'],
    featured: false,
    shortDescription: '정밀여과와 수질 계측, 자동 배수 제어를 결합한 관로 관리 시스템',
    shortDescriptionEn: 'Pipeline management system combining precision filtration, monitoring and automatic drain control',
    description: `스마트 여과드레인 시스템은 정밀여과, 수질 계측, 자동 드레인 제어를 하나의 설비로 구성한 관로 수질 관리 시스템입니다.
현장 관경과 요구 성능에 따라 PVC 또는 STS304 구조, 필터 정밀도, 계측 구성과 제어 방식을 선택할 수 있습니다.`,
    descriptionEn: `The Smart Filter-Drain System combines precision filtration, water-quality monitoring and automatic drain control in one pipeline-management package.
PVC or STS304 construction, filtration grade, instrument configuration and control method can be selected to match site requirements.`,
    features: [
      '정밀여과와 자동 드레인 통합',
      '여과 전후 수질 비교 계측',
      '현장 교체형 필터 구조',
      '관경과 유량에 따른 맞춤 설계',
      'PLC/HMI 및 상위 시스템 연동',
      'K-water 공동특허 제10-2658845호',
    ],
    featuresEn: [
      'Integrated precision filtration and automatic drain',
      'Pre- and post-filtration water-quality comparison',
      'Field-replaceable filter structure',
      'Configured to site pipe size and flow rate',
      'PLC/HMI and supervisory-system integration',
      'K-water joint patent No. 10-2658845',
    ],
    specs: [
      { label: '관경 범위', labelEn: 'Pipe Size Range', value: '50A~200A', valueEn: '50A–200A' },
      { label: '재질', labelEn: 'Material', value: 'PVC 또는 STS304', valueEn: 'PVC or STS304' },
      { label: '필터 정밀도', labelEn: 'Filtration Grade', value: '10 / 50 / 100 μm', valueEn: '10 / 50 / 100 μm' },
      { label: '계측 구성', labelEn: 'Instrumentation', value: '탁도·잔류염소 선택 구성', valueEn: 'Selectable turbidity and residual chlorine' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 / 이더넷 / LTE 선택', valueEn: 'RS-485 / Ethernet / LTE optional' },
    ],
    image: '/images/products/filter-drain-1.jpg',
    gallery: ['/images/products/filter-drain-1.jpg', '/images/products/filter-drain-2.jpg', '/images/products/filter-drain-3.jpg'],
  },
  {
    slug: 'sampling-tank',
    model: 'WB-ST',
    name: '샘플링 수조',
    nameEn: 'Sampling Tank',
    category: '샘플링',
    categoryEn: 'Sampling',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: '수질계측기에 안정적인 시료를 공급하는 오버플로우형 전처리 수조',
    shortDescriptionEn: 'Overflow pretreatment tank for stable sample supply to water-quality instruments',
    description: `WB-ST 샘플링 수조는 탁도계, 잔류염소계, pH계와 전기전도도계에 균일한 시료를 공급하기 위한 전처리 장치입니다.
투명 아크릴 구조로 수위와 내부 상태를 확인할 수 있으며, 현장 배관과 계측기 구성에 맞춰 제작할 수 있습니다.`,
    descriptionEn: `The WB-ST sampling tank supplies a stable sample to turbidity, residual chlorine, pH and conductivity instruments.
Its transparent acrylic body allows visual inspection and can be configured to match site piping and instrumentation.`,
    features: [
      '투명 아크릴 구조',
      '오버플로우 방식의 연속 시료 공급',
      '다중 계측기 연결 구성',
      '드레인 밸브 적용',
      '현장 조건에 따른 맞춤 제작',
    ],
    featuresEn: [
      'Transparent acrylic construction',
      'Continuous sample supply by overflow',
      'Multiple instrument connections',
      'Drain valve included',
      'Configurable to site requirements',
    ],
    specs: [
      { label: '재질', labelEn: 'Material', value: '투명 아크릴', valueEn: 'Transparent acrylic' },
      { label: '공급 방식', labelEn: 'Supply Method', value: '오버플로우', valueEn: 'Overflow' },
      { label: '연결 구성', labelEn: 'Connections', value: '현장 맞춤', valueEn: 'Site-configured' },
      { label: '설치 방식', labelEn: 'Installation', value: '벽걸이형 / 스탠드형', valueEn: 'Wall-mount / stand-alone' },
    ],
    image: '/images/products/wbst-main.png',
    gallery: ['/images/products/wbst-main.png'],
  },
  {
    slug: 'wbcl10-electrode-kit',
    model: 'WBCL10-EK',
    name: '잔류염소계 전극 교체 세트',
    nameEn: 'Residual Chlorine Electrode Kit',
    category: '유지보수 부품',
    categoryEn: 'Maintenance Parts',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: 'WBCL10 전용 정품 전극 교체 부품',
    shortDescriptionEn: 'Genuine replacement electrode kit for the WBCL10',
    description: 'WBCL10 잔류염소계의 측정 전극 교체를 위한 정품 유지보수 부품입니다.',
    descriptionEn: 'A genuine maintenance part for replacing the measuring electrodes in the WBCL10 analyzer.',
    features: ['WBCL10 전용', 'Gold / Silver 전극 구성', '현장 교체 지원'],
    featuresEn: ['For WBCL10', 'Gold / Silver electrode set', 'Field replacement support'],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBCL10', valueEn: 'WBCL10' },
      { label: '전극 재질', labelEn: 'Electrode Material', value: 'Gold / Silver', valueEn: 'Gold / Silver' },
    ],
    image: '/images/products/wbcl10-electrode-kit.svg',
    gallery: ['/images/products/wbcl10-electrode-kit.svg'],
    price: '가격 문의',
    priceEn: 'Contact for price',
    purchasable: true,
    compatibility: 'WBCL10 잔류염소계',
    compatibilityEn: 'WBCL10 residual chlorine analyzer',
  },
  {
    slug: 'wbtu10-lamp-kit',
    model: 'WBTU10-LK',
    name: '탁도계 램프 교체 세트',
    nameEn: 'Turbidity Lamp Kit',
    category: '유지보수 부품',
    categoryEn: 'Maintenance Parts',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: 'WBTU10 전용 텅스텐 램프 교체 부품',
    shortDescriptionEn: 'Genuine tungsten lamp replacement kit for the WBTU10',
    description: 'WBTU10 탁도계의 광원 교체를 위한 정품 텅스텐 램프 유지보수 부품입니다.',
    descriptionEn: 'A genuine tungsten lamp maintenance part for replacing the light source in the WBTU10.',
    features: ['WBTU10 전용', '580 nm 텅스텐 램프', '현장 교체 지원'],
    featuresEn: ['For WBTU10', '580 nm tungsten lamp', 'Field replacement support'],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBTU10', valueEn: 'WBTU10' },
      { label: '광원', labelEn: 'Light Source', value: '텅스텐 램프, 580 nm', valueEn: 'Tungsten lamp, 580 nm' },
    ],
    image: '/images/products/wbtu10-lamp-kit.svg',
    gallery: ['/images/products/wbtu10-lamp-kit.svg'],
    price: '가격 문의',
    priceEn: 'Contact for price',
    purchasable: true,
    compatibility: 'WBTU10 온라인 탁도계',
    compatibilityEn: 'WBTU10 online turbidity meter',
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((product) => product.category === category || product.categoryEn === category)
}

export function getProductsByApplication(application: string): Product[] {
  if (application === 'all') return products
  return products.filter((product) => product.application.includes(application))
}

export function getAllCategories(): string[] {
  return ['전체', ...Array.from(new Set(products.map((product) => product.category)))]
}

export function getAllApplications(): string[] {
  return ['all', ...Array.from(new Set(products.flatMap((product) => product.application)))]
}
