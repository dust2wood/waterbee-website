export interface ProductSpec {
  label: string
  labelEn: string
  value: string
  valueEn: string
}

export type ProductGroup = 'instrumentation' | 'smartfarm' | 'system' | 'accessory'

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
    description: '센서 측정값 표시·현장 교정·경보 출력 통합\n4.3인치 TFT LCD와 현장용 키패드\n4–20 mA·RS-485 기반 제어반 및 상위 시스템 연동',
    descriptionEn: 'Integrated measurement display, calibration and alarms\n4.3-inch TFT LCD and field keypad\n4–20 mA and RS-485 plant-system integration',
    features: [
      '4.3인치 TFT LCD와 현장용 키패드',
      '센서 측정값 표시 및 현장 교정',
      '4~20 mA 아날로그 출력',
      'RS-232 / RS-485 통신',
      'Modbus RTU 연동, Ethernet 구성은 공급 사양 확인',
      '경보 및 제어용 릴레이 출력',
      'AC 110~240 V 및 DC 12 V 전원',
    ],
    featuresEn: [
      '4.3-inch TFT LCD with field keypad',
      'Sensor measurement display and field calibration',
      '4–20 mA analog output',
      'RS-232 / RS-485 communication',
      'Modbus RTU integration; Ethernet depends on the supplied configuration',
      'Alarm and control relay outputs',
      'AC 110–240 V and DC 12 V power',
    ],
    specs: [
      { label: '디스플레이', labelEn: 'Display', value: '4.3인치 TFT LCD', valueEn: '4.3-inch TFT LCD' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20 mA, 2CH', valueEn: '4–20 mA, 2CH' },
      { label: '통신', labelEn: 'Communication', value: 'RS-232, RS-485 / Ethernet 선택 사양', valueEn: 'RS-232, RS-485 / optional Ethernet' },
      { label: '릴레이 출력', labelEn: 'Relay Output', value: '3CH', valueEn: '3CH' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 110~240 V, DC 12 V', valueEn: 'AC 110–240 V, DC 12 V' },
      { label: '크기', labelEn: 'Dimensions', value: '외형도 적용 형상 및 납품 사양 확인', valueEn: 'See the applicable outline drawing and supplied configuration' },
    ],
    image: '/images/products/wbsc10-front.png',
    gallery: [
      '/images/products/wbsc10-front.png',
      '/images/products/wbsc10-side-left.png',
      '/images/products/wbsc10-side-right.png',
    ],
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
    description: '정수장·배수지 저농도 탁도 연속 측정\n텅스텐 광원과 90° 산란광 검출\n탈부착식 기포 저감 구조를 통한 미세기포 간섭 저감',
    descriptionEn: 'Continuous low-range monitoring at treatment plants and clearwells\nTungsten source and 90° scattered-light detection\nDetachable bubble-reduction stage for reduced microbubble interference',
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
    image: '/images/products/wbtu10-photo-front.png',
    gallery: ['/images/products/wbtu10-photo-front.png', '/images/products/wbtu10-photo-side.png'],
  },
  {
    slug: 'wbfc10',
    model: 'WBFC10',
    name: '온라인 잔류염소계',
    nameEn: 'Online Residual Chlorine Analyzer',
    category: '잔류염소',
    categoryEn: 'Residual Chlorine',
    group: 'instrumentation',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '무시약 회전전극식으로 잔류염소를 연속 측정하는 현장 계측기',
    shortDescriptionEn: 'Reagent-free rotating-electrode analyzer for continuous residual chlorine measurement',
    description: '회전전극식 폴라로그래프 기반 잔류염소 연속 측정\n전극 자동 회전으로 표면 오염 저감\n무시약·비멤브레인 구조의 정수 공정 모니터링',
    descriptionEn: 'Continuous rotating-electrode polarographic measurement\nElectrode rotation for reduced surface fouling\nReagent-free, membrane-free treatment-process monitoring',
    features: [
      '무시약 회전전극식 폴라로그래프 방식',
      '0~2.00 mg/L 측정 범위',
      '전극 회전을 통한 표면 오염 저감',
      '멤브레인 소모품 불필요',
      '현장 교정 및 자동 세정 지원',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      'Reagent-free rotating-electrode polarographic method',
      '0–2.00 mg/L measuring range',
      'Rotating electrode helps limit surface fouling',
      'No membrane consumable required',
      'Field calibration and automatic cleaning support',
      '4–20 mA and RS-485 output',
      'Works with the WBSC10 smart controller',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '회전전극식 폴라로그래프', valueEn: 'Rotating-electrode polarographic' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0~2.00 mg/L', valueEn: '0–2.00 mg/L' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 mg/L', valueEn: '0.01 mg/L' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.02 mg/L (typ.)', valueEn: '±0.02 mg/L (typ.)' },
      { label: '응답 시간', labelEn: 'Response Time', value: '90%, 2분 이내', valueEn: '90%, within 2 min' },
      { label: '샘플 유량', labelEn: 'Sample Flow', value: '200~700 mL/min', valueEn: '200–700 mL/min' },
      { label: '출력 및 통신', labelEn: 'Output & Communication', value: '4~20 mA, RS-485', valueEn: '4–20 mA, RS-485' },
    ],
    image: '/images/products/wbcl10-photo-front.png',
    gallery: ['/images/products/wbcl10-photo-front.png', '/images/products/wbcl10-photo-side.png'],
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
    description: '정수 공정 및 수질 관리 현장 pH 연속 측정\n자동 온도 보정·버퍼 2점 교정·스팬 1점 교정\nWBSC10 기반 측정값·출력 신호 통합 관리',
    descriptionEn: 'Continuous pH monitoring for water-treatment processes\nAutomatic temperature compensation; two-point buffer and one-point span calibration\nWBSC10 measurement and output integration',
    features: [
      '0~14 pH 연속 측정',
      '온도 자동 보정',
      '버퍼 2점 교정 및 스팬 1점 교정',
      '4~20 mA 및 RS-485 출력',
      'WBSC10 스마트 컨트롤러 연동',
    ],
    featuresEn: [
      '0–14 pH continuous measurement',
      'Automatic temperature compensation',
      'Two-point buffer and one-point span calibration',
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
    description: '정수 공정 및 수질 관리 현장 전기전도도 연속 측정\n교류 2전극 방식·자동 온도 보정\nWBSC10 기반 EC/TDS 측정값·출력 신호 통합 관리',
    descriptionEn: 'Continuous conductivity monitoring for water-treatment processes\nAC two-electrode method and automatic temperature compensation\nWBSC10 EC/TDS measurement and output integration',
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
    slug: 'wbph-pbs01',
    model: 'WBPH-E01',
    name: '스마트팜 pH 센서',
    nameEn: 'Smart Farm pH Sensor',
    category: '스마트팜 pH',
    categoryEn: 'Smart Farm pH',
    group: 'smartfarm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '양액과 관수 수질 측정을 위한 PT1000 내장형 소형 pH 복합전극',
    shortDescriptionEn: 'Compact pH combination electrode with PT1000 for nutrient solution and irrigation water',
    description: '스마트팜 양액·관수용 소형 pH 복합전극\n외경 12 mm 투명 폴리카보네이트 케이스\nPT1000 온도 보정·Ag/AgCl 참조 겔 내장',
    descriptionEn: 'Compact pH combination electrode for nutrient solutions and irrigation\n12 mm transparent polycarbonate casing\nIntegrated PT1000 compensation and Ag/AgCl gel reference',
    features: [
      '12 mm 외경 × 120 mm 소형 복합전극',
      '투명 폴리카보네이트 케이스',
      'PT1000 온도 보정 내장',
      'Ag/AgCl 참조 겔',
      '95% 응답 5초 이내',
    ],
    featuresEn: [
      '12 mm OD × 120 mm compact combination electrode',
      'Transparent polycarbonate casing',
      'Built-in PT1000 temperature compensation',
      'Ag/AgCl gel reference',
      '95% response within 5 seconds',
    ],
    specs: [
      { label: '형식', labelEn: 'Type', value: 'pH 복합전극', valueEn: 'pH combination electrode' },
      { label: '치수', labelEn: 'Dimensions', value: 'Ø12 × 120 mm', valueEn: 'Ø12 × 120 mm' },
      { label: '영점 전위', labelEn: 'Zero Point', value: 'pH 7: 0±15 mV', valueEn: 'pH 7: 0±15 mV' },
      { label: '응답 시간', labelEn: 'Response Time', value: '95%, 5초 이내', valueEn: '95%, within 5 s' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: 'PT1000', valueEn: 'PT1000' },
      { label: '케이블', labelEn: 'Cable', value: '동축 5 m', valueEn: 'Coaxial, 5 m' },
    ],
    image: '/images/products/wbph-pbs01-main.png',
    gallery: ['/images/products/wbph-pbs01-main.png'],
  },
  {
    slug: 'wbec-cond',
    model: 'WBEC-COND',
    name: '스마트팜 EC 센서',
    nameEn: 'Smart Farm EC Sensor',
    category: '스마트팜 EC',
    categoryEn: 'Smart Farm EC',
    group: 'smartfarm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '양액 농도 관리를 위한 흑연 감응부와 PT1000 내장형 전기전도도 전극',
    shortDescriptionEn: 'Conductivity electrode with graphite sensing element and PT1000 for nutrient management',
    description: '스마트팜 양액·관수용 소형 전기전도도 센서\n흑연 원판 감응부·K=1 셀 상수·PT1000 온도 보정\n1 μS/cm–20 mS/cm 측정 범위',
    descriptionEn: 'Compact EC sensor for nutrient solutions and irrigation\nGraphite disc, K=1 cell constant and PT1000 compensation\n1 μS/cm–20 mS/cm measuring range',
    features: [
      'Ø12 × 120 mm Black ABS 본체',
      '흑연 원판 감응부',
      '셀 상수 K=1',
      'PT1000 온도 보정 내장',
      '1 μS/cm~20 mS/cm 측정 범위',
    ],
    featuresEn: [
      'Ø12 × 120 mm Black ABS body',
      'Graphite disc sensing element',
      'K=1 cell constant',
      'Built-in PT1000 temperature compensation',
      '1 μS/cm–20 mS/cm measuring range',
    ],
    specs: [
      { label: '형식', labelEn: 'Type', value: '전기전도도 전극', valueEn: 'Conductivity electrode' },
      { label: '치수', labelEn: 'Dimensions', value: 'Ø12 × 120 mm', valueEn: 'Ø12 × 120 mm' },
      { label: '감응부', labelEn: 'Sensing Element', value: '흑연 원판', valueEn: 'Graphite disc' },
      { label: '셀 상수', labelEn: 'Cell Constant', value: 'K=1 (±20%)', valueEn: 'K=1 (±20%)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '1 μS/cm~20 mS/cm', valueEn: '1 μS/cm–20 mS/cm' },
      { label: '사용 온도', labelEn: 'Operating Temp.', value: '0~80℃', valueEn: '0–80°C' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: 'PT1000', valueEn: 'PT1000' },
    ],
    image: '/images/products/wbec-cond-main.png',
    gallery: ['/images/products/wbec-cond-main.png'],
  },
  {
    slug: 'ph-ec-board',
    model: 'pH·EC / RS485',
    name: 'pH·EC 센서 컨버터',
    nameEn: 'pH & EC Sensor Converters',
    category: '스마트팜 컨버터',
    categoryEn: 'Smart Farm Converter',
    group: 'smartfarm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: 'pH·EC 센서 신호와 온도를 RS-485/Modbus RTU로 변환하는 현장용 컨버터',
    shortDescriptionEn: 'Field converters for pH, EC and temperature signals over RS-485/Modbus RTU',
    description: 'pH·EC·PT1000 신호의 RS-485/Modbus RTU 변환\npH·EC 독립 보드 및 12–24 VDC 전원\n현장 설치용 소형 방수 케이스 구성',
    descriptionEn: 'RS-485/Modbus RTU conversion of pH, EC and PT1000 signals\nDedicated pH and EC boards; 12–24 VDC supply\nCompact weather-resistant enclosure configuration',
    features: [
      'pH 및 EC 전용 컨버터 보드 구성',
      'PT1000 온도 입력 및 보정',
      'RS-485 / Modbus RTU 통신',
      '12~24 VDC 전원 입력',
      '교정값 비휘발성 저장',
      '현장 설치용 방수 케이스 구성',
    ],
    featuresEn: [
      'Dedicated converter boards for pH and EC',
      'PT1000 temperature input and compensation',
      'RS-485 / Modbus RTU communication',
      '12–24 VDC power input',
      'Non-volatile calibration storage',
      'Compact weather-resistant enclosure configuration',
    ],
    specs: [
      { label: '센서 입력', labelEn: 'Sensor Inputs', value: 'pH / EC / PT1000', valueEn: 'pH / EC / PT1000' },
      { label: '전원', labelEn: 'Power Supply', value: '12~24 VDC', valueEn: '12–24 VDC' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 / Modbus RTU', valueEn: 'RS-485 / Modbus RTU' },
      { label: '통신 설정', labelEn: 'Serial Settings', value: '9600 bps, 8-N-1', valueEn: '9600 bps, 8-N-1' },
      { label: '장치 주소', labelEn: 'Device Address', value: 'pH 31 / EC 32', valueEn: 'pH 31 / EC 32' },
      { label: '설치 구성', labelEn: 'Installation', value: '소형 방수 케이스', valueEn: 'Compact weather-resistant enclosure' },
    ],
    image: '/images/products/wb-ph-ec-converter-main.png',
    gallery: ['/images/products/wb-ph-ec-converter-main.png', '/images/products/wb-ph-ec-converter-board.png'],
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
    description: '정밀여과·수질계측·자동 드레인 통합 관로 관리\nPVC / STS304 재질 및 현장 관경별 구성\n필터 정밀도·계측 항목·제어 방식 선택',
    descriptionEn: 'Integrated filtration, water-quality measurement and automatic drain control\nPVC / STS304 construction configured to pipe size\nSelectable filtration grade, instruments and control method',
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
    description: '탁도·잔류염소·pH·전기전도도 계측용 시료 전처리\n투명 아크릴 구조와 오버플로우 방식\n현장 배관·계측기 구성에 따른 맞춤 제작',
    descriptionEn: 'Sample pretreatment for turbidity, chlorine, pH and conductivity\nTransparent acrylic body and overflow supply\nSite-specific piping and instrument configuration',
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
    image: '/images/products/wbst-render-20260917.png',
    gallery: ['/images/products/wbst-render-20260917.png'],
  },
  {
    slug: 'wbtu10-lamp-kit',
    model: 'WBTU10-LK',
    name: '탁도계 램프 모듈',
    nameEn: 'Turbidity Lamp Module',
    category: '유지보수 부품',
    categoryEn: 'Maintenance Parts',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: 'WBTU10 전용 소형 보드 일체형 텅스텐 램프 모듈',
    shortDescriptionEn: 'Compact board-mounted tungsten lamp module for the WBTU10',
    description: 'WBTU10 전용 보드 일체형 텅스텐 램프\n소형 보드 직접 장착·모듈 단위 교체',
    descriptionEn: 'WBTU10 board-mounted tungsten lamp\nCompact dedicated board and module-level replacement',
    features: ['WBTU10 전용', '약 17 x 17 mm 소형 보드', '580 nm 텅스텐 램프'],
    featuresEn: ['For WBTU10', 'Approx. 17 x 17 mm compact board', '580 nm tungsten lamp'],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBTU10', valueEn: 'WBTU10' },
      { label: '광원', labelEn: 'Light Source', value: '텅스텐 램프, 580 nm', valueEn: 'Tungsten lamp, 580 nm' },
      { label: '구성', labelEn: 'Construction', value: '소형 보드 일체형', valueEn: 'Compact board-mounted module' },
      { label: '보드 크기', labelEn: 'Board Size', value: '약 17 x 17 mm', valueEn: 'Approx. 17 x 17 mm' },
    ],
    image: '/images/products/wbtu10-lamp-module.png',
    gallery: ['/images/products/wbtu10-lamp-module.png'],
    price: '가격 문의',
    priceEn: 'Contact for price',
    purchasable: true,
    compatibility: 'WBTU10 온라인 탁도계',
    compatibilityEn: 'WBTU10 online turbidity meter',
  },
  {
    slug: 'wbfc10-electrode-kit',
    model: 'WBFC10-EK',
    name: '잔류염소계 전극 교체 세트',
    nameEn: 'Residual Chlorine Electrode Kit',
    category: '유지보수 부품',
    categoryEn: 'Maintenance Parts',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: 'WBFC10 전용 정품 전극 교체 부품',
    shortDescriptionEn: 'Genuine replacement electrode kit for the WBFC10',
    description: 'WBFC10 잔류염소계 전용 측정 전극\n정품 유지보수·교체 부품',
    descriptionEn: 'WBFC10 replacement measuring electrode\nGenuine service part',
    features: ['WBFC10 전용', 'Gold / Silver 전극 구성', '현장 교체 지원'],
    featuresEn: ['For WBFC10', 'Gold / Silver electrode set', 'Field replacement support'],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBFC10', valueEn: 'WBFC10' },
      { label: '전극 재질', labelEn: 'Electrode Material', value: 'Gold / Silver', valueEn: 'Gold / Silver' },
    ],
    image: '/images/products/wbcl10-electrode-kit.png',
    gallery: ['/images/products/wbcl10-electrode-kit.png'],
    price: '가격 문의',
    priceEn: 'Contact for price',
    purchasable: true,
    compatibility: 'WBFC10 잔류염소계',
    compatibilityEn: 'WBFC10 residual chlorine analyzer',
  },
  {
    slug: 'wbfc10-ceramic-beads',
    model: 'WBFC10-CB',
    name: '잔류염소계 세정용 세라믹 비즈',
    nameEn: 'Residual Chlorine Cleaning Beads',
    category: '유지보수 부품',
    categoryEn: 'Maintenance Parts',
    group: 'accessory',
    application: ['water_treatment'],
    featured: false,
    shortDescription: 'WBFC10 회전전극 표면 세정을 위한 지르코니아 세라믹 비즈',
    shortDescriptionEn: 'Zirconia ceramic cleaning beads for the WBFC10 rotating electrode',
    description: 'WBFC10 필터 하우징용 세정 소모품\n회전전극 표면의 이물질 부착 저감',
    descriptionEn: 'Cleaning consumable for the WBFC10 filter housing\nReduced deposits on the rotating-electrode surface',
    features: ['WBFC10 전용', '이트리아 안정화 지르코니아', '직경 1.0-1.2 mm 구형 비즈'],
    featuresEn: ['For WBFC10', 'Yttria-stabilized zirconia', '1.0-1.2 mm spherical beads'],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBFC10', valueEn: 'WBFC10' },
      { label: '재질', labelEn: 'Material', value: '이트리아 안정화 지르코니아', valueEn: 'Yttria-stabilized zirconia' },
      { label: '직경', labelEn: 'Diameter', value: '1.0-1.2 mm', valueEn: '1.0-1.2 mm' },
      { label: '용도', labelEn: 'Purpose', value: '회전전극 표면 세정', valueEn: 'Rotating-electrode surface cleaning' },
    ],
    image: '/images/products/wbcl10-ceramic-beads.png',
    gallery: ['/images/products/wbcl10-ceramic-beads.png'],
    price: '가격 문의',
    priceEn: 'Contact for price',
    purchasable: true,
    compatibility: 'WBFC10 잔류염소계',
    compatibilityEn: 'WBFC10 residual chlorine analyzer',
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
