export interface ProductSpec {
  label: string
  labelEn: string
  value: string
  valueEn: string
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
  /** 소모품 구매 관련 (선택) */
  price?: string
  priceEn?: string
  purchasable?: boolean
  compatibility?: string
  compatibilityEn?: string
}

export const products: Product[] = [
  {
    slug: 'wbcl10',
    model: 'WBCL10',
    name: '잔류염소계',
    nameEn: 'Residual Chlorine Analyzer',
    category: '잔류염소',
    categoryEn: 'Residual Chlorine',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '특허 회전전극(Polarograph) 방식, 전극 자동 세척, ±0.02 mg/L 고정밀 연속식 잔류염소계',
    shortDescriptionEn: 'Patented polarograph rotating electrode, auto-cleaning electrode, ±0.02 mg/L high-precision residual chlorine analyzer',
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
      '전극 자동 세척(회전전극)으로 전극 오염 최소화',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      'IP65 방진·방수 등급',
    ],
    featuresEn: [
      'No consumables (membrane) — dramatically reduced maintenance cost',
      'Ion-coated electrode maintains stability for 6+ months',
      'No pH compensation needed in pH 6–8 range',
      'Stable measurement independent of flow rate',
      'Auto-cleaning (rotating) electrode minimizes fouling',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'IP65 dust and water protection',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '회전전극식 Polarograph (무시약)', valueEn: 'Rotating electrode Polarograph (reagent-free)' },
      { label: '측정 형태', labelEn: 'Measurement Type', value: 'pH 미보상 (pH 6.5~7.5)', valueEn: 'pH uncompensated (pH 6.5~7.5)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.01 ~ 2.00 mg/L (잔류염소), 수온(℃)', valueEn: '0.01 ~ 2.00 mg/L (residual chlorine), temp.(℃)' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 mg/L, 0.1℃', valueEn: '0.01 mg/L, 0.1℃' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.02 mg/L (typ.)', valueEn: '±0.02 mg/L (typ.)' },
      { label: '응답 시간', labelEn: 'Response Time', value: '90%, 2분 이내', valueEn: '90%, within 2 min' },
      { label: '샘플 유량', labelEn: 'Sample Flow Rate', value: '200 ~ 700 mL/min', valueEn: '200 ~ 700 mL/min' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 110~240V ±10%, 50/60Hz, DC 12V', valueEn: 'AC 110~240V ±10%, 50/60Hz, DC 12V' },
      { label: '통신', labelEn: 'Communication', value: 'RS-232, RS-485, Modbus RTU/TCP, 이더넷(옵션)', valueEn: 'RS-232, RS-485, Modbus RTU/TCP, Ethernet (optional)' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA 2CH', valueEn: '4~20mA 2CH' },
      { label: '릴레이', labelEn: 'Relay', value: '자동세정, 경보, 릴레이 (3CH)', valueEn: 'Auto-cleaning, alarm, relay (3CH)' },
      { label: '컨트롤러', labelEn: 'Controller', value: 'WBSC10 스마트 컨트롤러 (4.3" TFT LCD)', valueEn: 'WBSC10 smart controller (4.3" TFT LCD)' },
      { label: '재질', labelEn: 'Material', value: '외함 Acetal/Aluminum, 측정 수조 Acrylic, 전극 Gold/Silver', valueEn: 'Housing Acetal/Aluminum, cell Acrylic, electrode Gold/Silver' },
      { label: '크기 (컨트롤러)', labelEn: 'Dimensions (Controller)', value: '210 × 180 × 86.5 mm', valueEn: '210 × 180 × 86.5 mm' },
      { label: '사용환경', labelEn: 'Operating Environment', value: '수중 -5~50℃, 대기 -20~60℃, 최대압력 65 Psig', valueEn: 'In water -5~50℃, ambient -20~60℃, max 65 Psig' },
    ],
    image: '/images/products/wbcl10-main.png',
    gallery: ['/images/products/wbcl10-main.png'],
  },
  {
    slug: 'wbtu10',
    model: 'WBTU10',
    name: '저농도 탁도계',
    nameEn: 'Low-Range Turbidity Meter',
    category: '탁도',
    categoryEn: 'Turbidity',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '0~10 NTU 정밀 측정, 90° 산란광(EPA 180.1), 배수지·정수장 최적화',
    shortDescriptionEn: '0–10 NTU precision, 90° scattered light (EPA 180.1), optimized for clearwells and waterworks',
    description: `WBTU10은 ISO 7027 규격에 준거한 90도 산란광 방식의 연속식 탁도계입니다.
텅스텐 램프(Tungsten Lamp) 광원을 채용하여 정밀하고 안정적인 측정값을 제공하며, 특허 적용 미세기포 제거 기능으로 간섭 오차를 원천 차단합니다.
자동 세정 기능으로 광학계 오염에 의한 측정 오류를 방지하고 장기간 안정적인 운전이 가능합니다.`,
    descriptionEn: `The WBTU10 is a continuous turbidity meter based on the ISO 7027 standard using 90° scattered light measurement.
Equipped with a Tungsten Lamp light source for precise and stable readings, and features a patented micro-bubble elimination system to prevent measurement interference.
The auto-cleaning function prevents optical contamination errors for long-term stable operation.`,
    features: [
      'ISO 7027 준수, 90° 산란광 (EPA 180.1)',
      '0~10 NTU 정밀 측정, 배수지·정수장 최적화',
      '특허 미세기포 제거 기능으로 간섭 오차 차단',
      '자동 세정 기능으로 유지보수 최소화',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      '접점 경보 출력',
      '소형화 설계로 협소 공간 설치 용이',
    ],
    featuresEn: [
      'ISO 7027 compliant, 90° scattered light (EPA 180.1)',
      '0–10 NTU precision, clearwell and waterworks optimized',
      'Patented micro-bubble elimination eliminates interference',
      'Auto-cleaning minimizes maintenance',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Relay alarm output',
      'Compact design for installation in tight spaces',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '90° 산란광 (EPA 180.1)', valueEn: '90° scattered light (EPA 180.1)' },
      { label: '광원', labelEn: 'Light Source', value: 'Tungsten Lamp (580nm)', valueEn: 'Tungsten Lamp (580nm)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0 ~ 10 NTU', valueEn: '0 ~ 10 NTU' },
      { label: '분해능', labelEn: 'Resolution', value: '0.001 NTU', valueEn: '0.001 NTU' },
      { label: '정확도', labelEn: 'Accuracy', value: '±2% or ±0.01 NTU', valueEn: '±2% or ±0.01 NTU' },
      { label: '응답 시간', labelEn: 'Response Time', value: '90%, 10분 이내', valueEn: '90%, within 10 min' },
      { label: '샘플 유량', labelEn: 'Sample Flow Rate', value: '50 ~ 300 mL/min', valueEn: '50 ~ 300 mL/min' },
      { label: '전원', labelEn: 'Power Supply', value: 'AC 110~240V ±10%, 50/60Hz, DC 12V', valueEn: 'AC 110~240V ±10%, 50/60Hz, DC 12V' },
      { label: '통신', labelEn: 'Communication', value: 'RS-232, RS-485, Modbus RTU/TCP, 이더넷(옵션)', valueEn: 'RS-232, RS-485, Modbus RTU/TCP, Ethernet (optional)' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA 2CH', valueEn: '4~20mA 2CH' },
      { label: '릴레이', labelEn: 'Relay', value: '자동세정, 경보, 릴레이 (3CH)', valueEn: 'Auto-cleaning, alarm, relay (3CH)' },
      { label: '컨트롤러', labelEn: 'Controller', value: 'WBSC10 스마트 컨트롤러 (4.3" TFT LCD)', valueEn: 'WBSC10 smart controller (4.3" TFT LCD)' },
      { label: '재질', labelEn: 'Material', value: '측정부 ABS/Acetal, 램프부 Aluminium', valueEn: 'Sensor ABS/Acetal, lamp Aluminium' },
      { label: '구조', labelEn: 'Structure', value: '기포제거 유동 구조 (탈부착 가능)', valueEn: 'Bubble-removal flow structure (removable)' },
      { label: '사용환경', labelEn: 'Operating Environment', value: '수중 -5~50℃, 대기 -20~60℃, 최대압력 65 Psig (50℃)', valueEn: 'In water -5~50℃, ambient -20~60℃, max 65 Psig (50℃)' },
    ],
    image: '/images/products/wbtu10-main.png',
    gallery: ['/images/products/wbtu10-main.png'],
  },
  {
    slug: 'wbtu-pro',
    model: 'WBTU-PRO',
    name: '고농도 탁도계',
    nameEn: 'High-Range Turbidity Meter',
    category: '탁도',
    categoryEn: 'Turbidity',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '0.01~4,000 NTU 광범위 측정, SS316 바디, 자동 와이퍼 세척',
    shortDescriptionEn: '0.01–4,000 NTU wide range, SS316 body, auto wiper cleaning',
    description: `WBTU-PRO는 고농도·열악한 환경용 연속 탁도계입니다. SS316 스테인리스 바디와 자동 와이퍼(Wiper) 세척으로 하폐수 및 산업 공정에 적합합니다.`,
    descriptionEn: `The WBTU-PRO is a continuous turbidity meter for high-load and harsh environments. SS316 stainless steel body and automatic wiper cleaning suit wastewater and industrial process applications.`,
    features: [
      '0.01 ~ 4,000 NTU 광범위 측정 (ISO 7027 유형)',
      'SS316 스테인리스 바디, 내식·내구성',
      '자동 와이퍼(Wiper) 세척 장치 내장',
      'RS-485 Modbus RTU/TCP, 4~20mA',
      'IP65 이상 방수 설계',
    ],
    featuresEn: [
      '0.01–4,000 NTU wide range (ISO 7027 type)',
      'SS316 stainless steel body, corrosion and abrasion resistant',
      'Built-in automatic wiper cleaning',
      'RS-485 Modbus RTU/TCP, 4~20mA',
      'IP65 or higher enclosure',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '90° 산란광 (ISO 7027)', valueEn: '90° scattered light (ISO 7027)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.01 ~ 4,000 NTU', valueEn: '0.01 ~ 4,000 NTU' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 NTU (저구간)', valueEn: '0.01 NTU (low range)' },
      { label: '정확도', labelEn: 'Accuracy', value: '±2% FS or ±0.5 NTU', valueEn: '±2% FS or ±0.5 NTU' },
      { label: '재질', labelEn: 'Material', value: 'SS316 스테인리스 (Wetted)', valueEn: 'SS316 stainless steel (wetted)' },
      { label: '세정', labelEn: 'Cleaning', value: '자동 와이퍼 (Wiper)', valueEn: 'Automatic wiper' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '출력', labelEn: 'Output', value: '4~20mA', valueEn: '4~20mA' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
    ],
    image: '/images/products/wbtu-pro-main.png',
    gallery: ['/images/products/wbtu-pro-main.png'],
  },
  {
    slug: 'wbss10',
    model: 'WBSS10',
    name: '부유물질계 (SS)',
    nameEn: 'Suspended Solids Meter',
    category: '탁도',
    categoryEn: 'Turbidity',
    application: ['water_treatment', 'industrial_wastewater'],
    featured: false,
    shortDescription: '광학식 부유물질(SS) 연속 측정기 — 하폐수·공정수 SS 농도 실시간 모니터링',
    shortDescriptionEn: 'Optical suspended solids (SS) continuous analyzer — real-time SS monitoring for wastewater and process water',
    description: `WBSS10은 광학식 방식의 연속식 부유물질(SS) 측정기입니다.
하폐수 처리장 및 산업 공정수의 SS 농도를 실시간으로 연속 모니터링하며, 안정적인 측정 성능과 간편한 유지보수를 제공합니다.`,
    descriptionEn: `The WBSS10 is a continuous optical suspended solids (SS) analyzer.
It provides real-time continuous SS concentration monitoring for wastewater treatment and industrial process water with stable performance and easy maintenance.`,
    features: [
      '광학식 연속 측정 방식',
      '하폐수·공정수 SS 농도 실시간 모니터링',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      '자동 교정 기능',
    ],
    featuresEn: [
      'Optical continuous measurement method',
      'Real-time SS monitoring for wastewater and process water',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Auto-calibration function',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '광학식 (근적외선)', valueEn: 'Optical (Near-IR)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '스펙 업데이트 예정', valueEn: 'Spec to be updated' },
      { label: '분해능', labelEn: 'Resolution', value: '스펙 업데이트 예정', valueEn: 'Spec to be updated' },
      { label: '정확도', labelEn: 'Accuracy', value: '스펙 업데이트 예정', valueEn: 'Spec to be updated' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '출력', labelEn: 'Output', value: '4~20mA', valueEn: '4~20mA' },
    ],
    image: '/images/products/wbss-main.png',
    gallery: ['/images/products/wbss-main.png'],
  },
  {
    slug: 'wbdo10',
    model: 'WBDO10',
    name: '광학식 용존산소계',
    nameEn: 'Optical Dissolved Oxygen Meter',
    category: '용존산소',
    categoryEn: 'Dissolved Oxygen',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '2세대 형광식(Optical) 측정, IP68, 전해액 교체 없는 저보수 설계',
    shortDescriptionEn: '2nd-gen optical (luminescence) DO, IP68, no electrolyte replacement — low maintenance',
    description: `WBDO10은 형광식(광학식) 용존산소계로, 전해액 교체가 필요 없는 저보수 설계입니다. IP68 등급으로 하폐수·산업 공정의 DO 연속 모니터링에 적합합니다.`,
    descriptionEn: `The WBDO10 is an optical (luminescence) dissolved oxygen meter with no electrolyte replacement for low maintenance. IP68 rating suits continuous DO monitoring in wastewater and industrial process.`,
    features: [
      '2세대 형광식(Optical) 측정, 드리프트 최소화',
      '전해액 교체 불필요 — 저보수',
      'IP68 방수, 잠수형 센서',
      'RS-485 Modbus, 4~20mA',
      '온도 보정 내장',
    ],
    featuresEn: [
      '2nd-gen optical (luminescence) measurement, minimal drift',
      'No electrolyte replacement — low maintenance',
      'IP68 submersible sensor',
      'RS-485 Modbus, 4~20mA',
      'Built-in temperature compensation',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '형광식 (Luminescence)', valueEn: 'Optical (luminescence)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0 ~ 20 mg/L, 0 ~ 200% sat.', valueEn: '0 ~ 20 mg/L, 0 ~ 200% sat.' },
      { label: '분해능', labelEn: 'Resolution', value: '0.01 mg/L, 0.1% sat.', valueEn: '0.01 mg/L, 0.1% sat.' },
      { label: '정확도', labelEn: 'Accuracy', value: '±0.3 mg/L or ±2% sat.', valueEn: '±0.3 mg/L or ±2% sat.' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP68', valueEn: 'IP68' },
      { label: '유지보수', labelEn: 'Maintenance', value: '전해액 교체 불필요', valueEn: 'No electrolyte replacement' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '출력', labelEn: 'Output', value: '4~20mA', valueEn: '4~20mA' },
    ],
    image: '/images/products/wbdo10-main.png',
    gallery: ['/images/products/wbdo10-main.png'],
  },
  {
    slug: 'wbno3',
    model: 'WBNO3',
    name: '질산성 질소 이온계',
    nameEn: 'Nitrate Ion Meter',
    category: '이온',
    categoryEn: 'Ion',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '이중 접합(Double Junction) 구조, PVC 멤브레인, 하수 처리 프로세스 최적화',
    shortDescriptionEn: 'Double junction, PVC membrane, wastewater process optimized',
    description: `WBNO3은 질산성 질소(NO3-) 이온 선택 전극 방식의 연속 측정기입니다. 이중 접합 구조와 PVC 멤브레인으로 하수 처리 공정의 질소 모니터링에 최적화되어 있습니다.`,
    descriptionEn: `The WBNO3 is a continuous nitrate (NO3-) ion-selective electrode analyzer. Double junction and PVC membrane design is optimized for nitrogen monitoring in wastewater treatment processes.`,
    features: [
      '이중 접합(Double Junction) 구조, 오염 저항',
      'PVC 멤브레인, 장수명',
      '하수 처리 프로세스 최적화',
      'RS-485 Modbus, 4~20mA',
      '온도 보정 내장',
    ],
    featuresEn: [
      'Double junction structure, fouling resistant',
      'PVC membrane, long service life',
      'Wastewater treatment process optimized',
      'RS-485 Modbus, 4~20mA',
      'Built-in temperature compensation',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '이온 선택 전극 (ISE)', valueEn: 'Ion-selective electrode (ISE)' },
      { label: '측정 종', labelEn: 'Analyte', value: '질산성 질소 (NO3-)', valueEn: 'Nitrate (NO3-)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.1 ~ 100 mg/L NO3-N', valueEn: '0.1 ~ 100 mg/L NO3-N' },
      { label: '분해능', labelEn: 'Resolution', value: '0.1 mg/L', valueEn: '0.1 mg/L' },
      { label: '정확도', labelEn: 'Accuracy', value: '±5% FS or ±0.5 mg/L', valueEn: '±5% FS or ±0.5 mg/L' },
      { label: '전극 구조', labelEn: 'Electrode Structure', value: '이중 접합 (Double Junction)', valueEn: 'Double junction' },
      { label: '멤브레인', labelEn: 'Membrane', value: 'PVC', valueEn: 'PVC' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
    ],
    image: '/images/products/wbno3-main.png',
    gallery: ['/images/products/wbno3-main.png'],
  },
  {
    slug: 'wbnh4',
    model: 'WBNH4',
    name: '암모늄 이온계',
    nameEn: 'Ammonium Ion Meter',
    category: '이온',
    categoryEn: 'Ion',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: 'PT1000 온도 보정 내장, 실시간 하폐수 질소 농도 모니터링',
    shortDescriptionEn: 'PT1000 temperature compensation, real-time wastewater nitrogen monitoring',
    description: `WBNH4는 암모늄(NH4+) 이온 선택 전극 방식의 연속 측정기입니다. PT1000 온도 보정을 내장하여 하폐수 및 산업 공정의 실시간 질소 농도 모니터링에 적합합니다.`,
    descriptionEn: `The WBNH4 is a continuous ammonium (NH4+) ion-selective electrode analyzer. Built-in PT1000 temperature compensation suits real-time nitrogen concentration monitoring in wastewater and industrial process.`,
    features: [
      'PT1000 온도 보정 내장',
      '실시간 하폐수 질소(NH4+) 모니터링',
      '이온 선택 전극(ISE) 방식',
      'RS-485 Modbus, 4~20mA',
      '하수·산업 공정 적용',
    ],
    featuresEn: [
      'Built-in PT1000 temperature compensation',
      'Real-time wastewater NH4+ monitoring',
      'Ion-selective electrode (ISE) method',
      'RS-485 Modbus, 4~20mA',
      'Wastewater and industrial process application',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '이온 선택 전극 (ISE)', valueEn: 'Ion-selective electrode (ISE)' },
      { label: '측정 종', labelEn: 'Analyte', value: '암모늄 (NH4+)', valueEn: 'Ammonium (NH4+)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0.1 ~ 100 mg/L NH4-N', valueEn: '0.1 ~ 100 mg/L NH4-N' },
      { label: '분해능', labelEn: 'Resolution', value: '0.1 mg/L', valueEn: '0.1 mg/L' },
      { label: '정확도', labelEn: 'Accuracy', value: '±5% FS or ±0.5 mg/L', valueEn: '±5% FS or ±0.5 mg/L' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: 'PT1000 내장', valueEn: 'PT1000 built-in' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
    ],
    image: '/images/products/wbnh4-main.png',
    gallery: ['/images/products/wbnh4-main.png'],
  },
  {
    slug: 'wbph10',
    model: 'WBPH10',
    name: 'pH계',
    nameEn: 'pH Meter',
    category: 'pH',
    categoryEn: 'pH',
    application: ['water_treatment', 'smart_farm'],
    featured: true,
    shortDescription: '연속식 pH 측정기 (현장 교정·온도 보정 지원)',
    shortDescriptionEn: 'Continuous pH meter with calibration and temperature compensation',
    description: `WBPH10은 현장 수질 관리에 최적화된 연속식 pH 측정기입니다.
온도 자동 보정과 간편한 교정 기능을 지원하여 정수장, 하폐수처리장, 산업용 공정수 관리에 활용됩니다.`,
    descriptionEn: `The WBPH10 is a continuous pH meter optimized for field water quality monitoring.
It supports automatic temperature compensation and easy calibration, suitable for waterworks, wastewater treatment, and industrial process water management.`,
    features: [
      '연속식 pH 측정',
      '온도 자동 보정 (NTC 또는 PT-100)',
      '2점 또는 3점 pH 자동 교정',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      '접점 경보 출력',
      'IP65 방수 외함',
    ],
    featuresEn: [
      'Continuous pH measurement',
      'Automatic temperature compensation (NTC or PT-100)',
      '2-point or 3-point automatic pH calibration',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Relay alarm output',
      'IP65 waterproof enclosure',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '유리 전극식', valueEn: 'Glass electrode' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0 ~ 14 pH', valueEn: '0 ~ 14 pH' },
      { label: '분해능/정확도', labelEn: 'Resolution/Accuracy', value: '0.01 pH / ±0.1 pH', valueEn: '0.01 pH / ±0.1 pH' },
      { label: '출력', labelEn: 'Output', value: '4~20mA, RS-485', valueEn: '4~20mA, RS-485' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
    ],
    image: '/images/products/wbph10-main.png',
    gallery: [
      '/images/products/wbph10-main.png',
    ],
  },
  {
    slug: 'wbph-pbs01',
    model: 'WBPH-E01',
    name: 'pH 복합전극',
    nameEn: 'pH Composite Electrode',
    category: 'pH',
    categoryEn: 'pH',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '12mm × 120mm, 청색 투명 폴리카보네이트, PT1000 온도보정, Ag/AgCl 참조 (복합전극)',
    shortDescriptionEn: '12mm × 120mm, blue transparent polycarbonate, PT1000 temp. compensation, Ag/AgCl reference (combination electrode)',
    description: `WBPH-E01은 12mm 외경×120mm 길이의 소형 복합 전극입니다. 청색 투명 폴리카보네이트 케이스, ASI 5호 감응 유리, PT1000 온도 보정 및 Ag/AgCl 참조 겔을 내장했습니다. pH7 영점 0±15mV, 기울기 ≥170mV(pH4~pH7), 95% 응답 5초 이내.`,
    descriptionEn: `The WBPH-E01 is a compact 12mm OD × 120mm combination electrode with blue transparent polycarbonate casing, ASI No.5 sensitive glass, PT1000 temperature compensation, and Ag/AgCl reference. Zero point 0±15mV at pH7, slope ≥170mV (pH4–pH7), 95% response within 5s.`,
    features: [
      '12mm 외경 × 120mm, 소형 복합전극',
      '청색 투명 폴리카보네이트 케이스',
      'PT1000 온도 보정 내장',
      'Ag/AgCl 참조 겔, 비탈착형 보호캡',
      '동축 케이블 5m (TC·pH·REF 배선)',
    ],
    featuresEn: [
      '12mm OD × 120mm, compact combination electrode',
      'Blue transparent polycarbonate casing',
      'PT1000 temperature compensation',
      'Ag/AgCl reference gel, non-removable protective cap',
      '5m coaxial cable (TC, pH, REF leads)',
    ],
    specs: [
      { label: '형식', labelEn: 'Type', value: 'pH 복합전극', valueEn: 'pH combination electrode' },
      { label: '치수', labelEn: 'Dimensions', value: '12mm 외경 × 120mm', valueEn: '12mm OD × 120mm' },
      { label: '케이스', labelEn: 'Casing', value: '청색 투명 폴리카보네이트', valueEn: 'Blue transparent polycarbonate' },
      { label: '영점 전위', labelEn: 'Zero Point', value: 'pH7 완충액: 0±15mV', valueEn: 'pH7 buffer: 0±15mV' },
      { label: '기울기', labelEn: 'Slope', value: 'pH4.0–pH7.0 완충: ≥170mV', valueEn: 'pH4.0–pH7.0 buffer: ≥170mV' },
      { label: '응답 시간', labelEn: 'Response Time', value: '95% 도달 5초', valueEn: '95% within 5s' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: 'PT1000', valueEn: 'PT1000' },
      { label: '참조', labelEn: 'Reference', value: 'Ag/AgCl 겔', valueEn: 'Ag/AgCl gel' },
      { label: '케이블', labelEn: 'Cable', value: '동축 5m (COAX+3)', valueEn: 'Coaxial 5m (COAX+3)' },
    ],
    image: '/images/products/wbph-pbs01-main.png',
    gallery: ['/images/products/wbph-pbs01-main.png'],
  },
  {
    slug: 'wbec10',
    model: 'WBEC10',
    name: 'EC계',
    nameEn: 'EC Meter',
    category: 'EC',
    categoryEn: 'EC',
    application: ['water_treatment', 'smart_farm'],
    featured: true,
    shortDescription: '연속식 전기전도도(EC/TDS) 측정기 (온도 보정 지원)',
    shortDescriptionEn: 'Continuous electrical conductivity (EC/TDS) meter with temperature compensation',
    description: `WBEC10은 연속식 전기전도도(EC/TDS) 측정기입니다.
온도 자동 보정 기능과 안정적인 측정 성능으로 정수장, 하폐수처리장, 산업용 공정수 관리에 활용됩니다.`,
    descriptionEn: `The WBEC10 is a continuous electrical conductivity (EC/TDS) meter.
With automatic temperature compensation and stable performance, it is used for waterworks, wastewater treatment, and industrial process water management.`,
    features: [
      '연속식 EC/TDS 측정',
      '온도 자동 보정 (NTC 또는 PT-100)',
      'RS-485 Modbus RTU/TCP 통신',
      '4~20mA 아날로그 출력',
      '접점 경보 출력',
      'IP65 방수 외함',
    ],
    featuresEn: [
      'Continuous EC/TDS measurement',
      'Automatic temperature compensation (NTC or PT-100)',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Relay alarm output',
      'IP65 waterproof enclosure',
    ],
    specs: [
      { label: '측정 방식', labelEn: 'Measurement Method', value: '교류 2전극식', valueEn: 'AC 2-electrode' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '0 ~ 2,000 μS/cm', valueEn: '0 ~ 2,000 μS/cm' },
      { label: '분해능/정확도', labelEn: 'Resolution/Accuracy', value: '0.1 μS/cm / 1.5%FS, ±0.3℃', valueEn: '0.1 μS/cm / 1.5%FS, ±0.3℃' },
      { label: '출력', labelEn: 'Output', value: '4~20mA, RS-485', valueEn: '4~20mA, RS-485' },
      { label: '보호 등급', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
    ],
    image: '/images/products/wbec10-main.png',
    gallery: [
      '/images/products/wbec10-main.png',
    ],
  },
  {
    slug: 'wbec-cond',
    model: 'WBEC-COND',
    name: '전도도 전극',
    nameEn: 'Conductivity Electrode',
    category: 'EC',
    categoryEn: 'EC',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '12mm × 120mm, Black ABS, 흑연 원판 감응부, K=1, PT1000 온도보정, 1 μS/cm~20 mS/cm',
    shortDescriptionEn: '12mm × 120mm, Black ABS body, graphite disc sensing, K=1, PT1000, 1 μS/cm–20 mS/cm',
    description: `전도도 전극은 12mm 외경의 Black ABS 본체에 흑연 원판(Graphite disc) 감응부를 적용한 전기전도도 센서입니다. 셀 상수 K=1(±20%), PT1000 온도 보정, 사용 온도 0~80℃, 측정 범위 1 μS/cm~20 mS/cm. 배선 250mm.`,
    descriptionEn: `Conductivity electrode with 12mm Black ABS body and graphite disc sensing element. Cell constant K=1 (±20%), PT1000 temperature compensation, 0–80°C application, 1 μS/cm–20 mS/cm range. Lead length 250mm.`,
    features: [
      '12mm 외경, Black ABS 본체',
      '흑연 원판(Graphite disc) 감응부',
      '셀 상수 K=1 (±20%)',
      'PT1000 온도 보정',
      '저유지보수, 0~80℃ 적용',
    ],
    featuresEn: [
      '12mm OD, Black ABS body',
      'Graphite disc sensing element',
      'Cell constant K=1 (±20%)',
      'PT1000 temperature compensation',
      'Low maintenance, 0–80°C application',
    ],
    specs: [
      { label: '형식', labelEn: 'Type', value: '전도도 전극', valueEn: 'Conductivity sensor' },
      { label: '치수', labelEn: 'Dimensions', value: '12mm 외경 × 120mm', valueEn: '12mm OD × 120mm' },
      { label: '본체', labelEn: 'Body', value: 'Black ABS', valueEn: 'Black ABS' },
      { label: '감응부', labelEn: 'Sensing Element', value: '흑연 원판 (Graphite disc)', valueEn: 'Graphite disc' },
      { label: '셀 상수', labelEn: 'Cell Constant', value: 'K=1 (±20% cm⁻¹)', valueEn: 'K=1 (±20% cm⁻¹)' },
      { label: '측정 범위', labelEn: 'Measurement Range', value: '1 μS/cm ~ 20 mS/cm', valueEn: '1 μS/cm ~ 20 mS/cm' },
      { label: '사용 온도', labelEn: 'Application Temp.', value: '0 ~ 80℃', valueEn: '0 ~ 80°C' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: 'PT1000 (스테인리스관 내장)', valueEn: 'PT1000 (in stainless tube)' },
      { label: '배선', labelEn: 'Leads', value: 'TC 2선, Cond 2선, 250mm', valueEn: 'TC 2-wire, Cond 2-wire, 250mm' },
    ],
    image: '/images/products/wbec-cond-main.png',
    gallery: ['/images/products/wbec-cond-main.png'],
  },
  {
    slug: 'sampling-tank',
    model: 'WB-ST',
    name: '샘플링수조',
    nameEn: 'Sampling Tank',
    category: '샘플링',
    categoryEn: 'Sampling',
    application: ['water_treatment', 'smart_filter_drain'],
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
      { label: '재질', labelEn: 'Material', value: 'SUS 304 (경면 연마)', valueEn: 'SUS 304 (mirror finish)' },
      { label: '수조 용량', labelEn: 'Tank Capacity', value: '5L / 10L (선택)', valueEn: '5L / 10L (optional)' },
      { label: '유입 연결', labelEn: 'Inlet Connection', value: '1/2" PT 내나사', valueEn: '1/2" PT female' },
      { label: '배출 포트', labelEn: 'Outlet Ports', value: '최대 4포트 (1/4" PT)', valueEn: 'Up to 4 ports (1/4" PT)' },
      { label: '오버플로우', labelEn: 'Overflow', value: '1/2" PT 내나사', valueEn: '1/2" PT female' },
      { label: '드레인', labelEn: 'Drain', value: '볼밸브 포함', valueEn: 'With ball valve' },
      { label: '레벨 스위치', labelEn: 'Level Switch', value: '플로트식 (선택 사양)', valueEn: 'Float type (optional)' },
      { label: '설치 방식', labelEn: 'Installation', value: '벽걸이형 / 스탠드형', valueEn: 'Wall-mount / stand-alone' },
      { label: '크기 (W×H×D)', labelEn: 'Dimensions (W×H×D)', value: '300 × 400 × 200 mm (표준형)', valueEn: '300 × 400 × 200 mm (standard)' },
      { label: '중량', labelEn: 'Weight', value: '약 4.5 kg (표준형)', valueEn: 'Approx. 4.5 kg (standard)' },
    ],
    image: '/images/products/wbst-main.png',
    gallery: [
      '/images/products/wbst-main.png',
    ],
  },
  {
    slug: 'filter-drain',
    model: 'WB-FD',
    name: '스마트 여과드레인 시스템',
    nameEn: 'Smart Filter-Drain System',
    category: '여과/드레인',
    categoryEn: 'Filtration/Drain',
    application: ['smart_filter_drain'],
    featured: false,
    shortDescription: '정밀여과 + 자동드레인 일체형, 50A~200A 전 규격 대응 (특허 제10-2658845호)',
    shortDescriptionEn: 'Integrated precision filtration + auto-drain, 50A–200A full range (Patent No. 10-2658845)',
    description: `스마트 여과드레인 시스템은 정밀여과·수질측정·자동드레인을 하나의 모듈로 통합한 K-water 공동특허(제10-2658845호) 제품입니다.
전·후단 탁도계와 후단 잔류염소계를 기본 탑재해 여과 전후 수질을 실시간 비교하고, 탁도 0.5 NTU 초과 시 5분 이내 자동드레인을 실행합니다.
PVC 경량형(계열 A)부터 SUS304 표준형(계열 B), 대형 가압장용(계열 C)까지 관경 50A~200A 전 규격을 지원합니다.`,
    descriptionEn: `The Smart Filter-Drain System integrates precision filtration, water quality measurement, and automatic drain in a single module — a joint patent with K-water (No. 10-2658845). Pre- and post-filter turbidity meters plus a post-filter residual chlorine meter are standard, enabling real-time comparison. Auto-drain triggers within 5 minutes when turbidity exceeds 0.5 NTU. Available in PVC lightweight (Series A), SUS304 standard (Series B), and large-scale (Series C) variants covering 50A–200A pipe sizes.`,
    features: [
      '정밀여과 + 자동드레인 일체형 — 설치비 기존 대비 50% 절감',
      '전·후단 탁도 실시간 비교 — 여과효율 95% 이상 검증',
      '탁도 0.5 NTU 초과 후 5분 이내 자동드레인 (정확도 100%)',
      '10 / 50 / 100 μm 필터 현장 무단수 교체 가능',
      '센서 수명 2~3배 연장 — 이온코팅 기술 적용',
      '관경 50A ~ 200A, PVC / SUS304 소재 선택',
      'PLC + HMI 자동제어, 원격 SCADA 연동 (계열 B/C)',
      'K-water 공동특허 (제10-2658845호)',
    ],
    featuresEn: [
      'Integrated filtration + auto-drain — 50% reduction in installation cost',
      'Pre/post turbidity real-time comparison — verified filtration efficiency ≥95%',
      'Auto-drain within 5 minutes of 0.5 NTU exceedance (100% accuracy)',
      '10 / 50 / 100 μm filter on-site replacement without water shutdown',
      'Sensor lifespan 2–3× longer — ion-coating technology',
      'Pipe sizes 50A–200A, PVC or SUS304 material',
      'PLC + HMI auto-control, remote SCADA integration (Series B/C)',
      'Joint patent with K-water (No. 10-2658845)',
    ],
    specs: [
      { label: '관경 범위', labelEn: 'Pipe Size Range', value: '50A ~ 200A (7종)', valueEn: '50A – 200A (7 sizes)' },
      { label: '소재', labelEn: 'Material', value: 'PVC (계열 A) / STS304 (계열 B·C)', valueEn: 'PVC (Series A) / STS304 (Series B·C)' },
      { label: '여과 정밀도', labelEn: 'Filter Precision', value: '10 / 50 / 100 μm 선택', valueEn: '10 / 50 / 100 μm selectable' },
      { label: '여과 효율', labelEn: 'Filtration Efficiency', value: '95% 이상', valueEn: '≥95%' },
      { label: '자동드레인 응답', labelEn: 'Auto-Drain Response', value: '5분 이내 (0.5 NTU 초과 시)', valueEn: 'Within 5 min (above 0.5 NTU)' },
      { label: '탁도 측정 정확도', labelEn: 'Turbidity Accuracy', value: '±0.05 NTU', valueEn: '±0.05 NTU' },
      { label: '잔류염소 정확도', labelEn: 'Cl₂ Accuracy', value: '±0.05 mg/L', valueEn: '±0.05 mg/L' },
      { label: '제어 방식', labelEn: 'Control', value: '전동밸브 / PLC+HMI / 스마트 원격', valueEn: 'Motorized valve / PLC+HMI / Smart remote' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 / LTE / 이더넷 (계열 B·C)', valueEn: 'RS-485 / LTE / Ethernet (Series B·C)' },
      { label: '특허', labelEn: 'Patent', value: '제10-2658845호 (K-water 공동특허)', valueEn: 'No. 10-2658845 (K-water joint patent)' },
    ],
    image: '/images/products/filter-drain-1.jpg',
    gallery: [
      '/images/products/filter-drain-1.jpg',
      '/images/products/filter-drain-2.jpg',
      '/images/products/filter-drain-3.jpg',
    ],
  },
  {
    slug: 'ph-ec-board',
    model: 'WB-PES',
    name: 'pH/EC 센서보드',
    nameEn: 'pH/EC Sensor Board',
    category: '스마트팜',
    categoryEn: 'Smart Farm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '윌로펌프 협업 — 펌프 일체형 pH·전기전도도 측정 센서보드',
    shortDescriptionEn: 'Wilo Pump collaboration — pump-integrated pH & conductivity sensor board',
    description: `WB-PES는 윌로펌프(Wilo)와 공동 개발한 pH·전기전도도(EC) 측정 센서보드입니다.
펌프 제어반 내장형으로 설계되어 별도의 분석기 설치 없이 펌프 시스템과 수질 측정을 하나의 패키지로 제공합니다.
낮은 전기전도도(10~200 μS/cm) 환경에서도 정밀 측정이 가능하여 정수 처리·순수 제조 공정에 적합합니다.`,
    descriptionEn: `The WB-PES is a pH and electrical conductivity (EC) measurement sensor board co-developed with Wilo Pump.
Designed to be built into pump control panels, it delivers water quality measurement and pump control as a single package without a separate analyzer.
Capable of precise measurement in low-conductivity environments (10–200 μS/cm), making it ideal for water treatment and ultrapure water processes.`,
    features: [
      '윌로펌프(Wilo) 공동 개발·공동 판매 제품',
      '펌프 제어반 내장형 — 별도 분석기 불필요',
      '저전도도(10~200 μS/cm) 정밀 측정',
      'pH + EC 동시 측정 (단일 보드)',
      '온도 자동 보정 내장',
      'RS-485 Modbus RTU 출력',
      '4~20mA 아날로그 출력 (선택)',
      '소형 보드 설계로 제어반 내 공간 최소화',
    ],
    featuresEn: [
      'Co-developed and co-marketed with Wilo Pump',
      'Built into pump control panel — no separate analyzer needed',
      'Precise low-conductivity measurement (10–200 μS/cm)',
      'Simultaneous pH + EC measurement on a single board',
      'Built-in automatic temperature compensation',
      'RS-485 Modbus RTU output',
      '4~20mA analog output (optional)',
      'Compact board design minimizes panel space',
    ],
    specs: [
      { label: 'pH 측정 범위', labelEn: 'pH Range', value: '0.00 ~ 14.00 pH', valueEn: '0.00 ~ 14.00 pH' },
      { label: 'pH 정확도', labelEn: 'pH Accuracy', value: '±0.01 pH', valueEn: '±0.01 pH' },
      { label: 'EC 측정 범위', labelEn: 'EC Range', value: '10 ~ 20,000 μS/cm', valueEn: '10 ~ 20,000 μS/cm' },
      { label: '저전도도 특화', labelEn: 'Low Conductivity', value: '10 ~ 200 μS/cm 정밀 측정', valueEn: '10 ~ 200 μS/cm precise measurement' },
      { label: 'EC 정확도', labelEn: 'EC Accuracy', value: '±1% FS', valueEn: '±1% FS' },
      { label: '온도 보정', labelEn: 'Temp. Compensation', value: '0 ~ 60°C (자동)', valueEn: '0 ~ 60°C (auto)' },
      { label: '통신', labelEn: 'Communication', value: 'RS-485 Modbus RTU', valueEn: 'RS-485 Modbus RTU' },
      { label: '아날로그 출력', labelEn: 'Analog Output', value: '4~20mA (선택 사양)', valueEn: '4~20mA (optional)' },
      { label: '전원', labelEn: 'Power Supply', value: 'DC 12V / 24V', valueEn: 'DC 12V / 24V' },
      { label: '폼팩터', labelEn: 'Form Factor', value: 'DIN Rail 모듈 / 기판 내장형', valueEn: 'DIN Rail module / board mount' },
      { label: '협업사', labelEn: 'Partner', value: 'Wilo Pump (윌로펌프)', valueEn: 'Wilo Pump' },
    ],
    image: '/images/products/ph-ec-board-main.svg',
    gallery: [
      '/images/products/ph-ec-board-main.svg',
    ],
  },
  {
  // ─── 소모품 ───────────────────────────────────────────────────
  {
    slug: 'wbcl10-electrode-kit',
    model: 'WBCL10-EK',
    name: '잔류염소계 전극 교체 세트',
    nameEn: 'Residual Chlorine Analyzer Electrode Replacement Kit',
    category: '소모품',
    categoryEn: 'Consumables',
    application: ['water_treatment', 'industrial_wastewater'],
    featured: false,
    shortDescription: 'WBCL10 잔류염소계 전용 이온전극 교체 세트 — 측정 안정성 회복을 위한 정품 소모품',
    shortDescriptionEn: 'Genuine electrode replacement kit for WBCL10 residual chlorine analyzer — restores measurement stability',
    description: `WBCL10 잔류염소계에 사용되는 정품 이온전극 교체 세트입니다.
전극 수명(약 6개월~1년)이 다하거나 측정값 드리프트가 발생할 경우 교체하여 새 장비 수준의 측정 성능을 회복합니다.
워터비 정품 부품만을 사용하여 호환성 및 측정 정확도를 보장합니다.`,
    descriptionEn: `Genuine ion electrode replacement kit for the WBCL10 residual chlorine analyzer.
Replace when the electrode lifespan (approx. 6–12 months) is reached or measurement drift occurs to restore factory-level performance.
Only genuine Waterbee parts are used to ensure compatibility and measurement accuracy.`,
    features: [
      'WBCL10 정품 이온전극 세트 (Gold/Silver 전극)',
      '교체 후 즉시 측정 성능 회복',
      '간단한 현장 교체 — 공구 불필요',
      '교체 주기: 6개월~1년 (수질 조건에 따라 상이)',
    ],
    featuresEn: [
      'Genuine WBCL10 ion electrode set (Gold/Silver)',
      'Immediate performance restoration after replacement',
      'Easy field replacement — no tools required',
      'Replacement interval: 6–12 months (varies by water quality)',
    ],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBCL10', valueEn: 'WBCL10' },
      { label: '전극 재질', labelEn: 'Electrode Material', value: 'Gold / Silver', valueEn: 'Gold / Silver' },
      { label: '교체 주기', labelEn: 'Replacement Cycle', value: '6개월~1년', valueEn: '6–12 months' },
      { label: '포함 구성', labelEn: 'Package Contents', value: '전극 세트, 교체 가이드', valueEn: 'Electrode set, replacement guide' },
    ],
    image: '/images/products/wbcl10-electrode-kit.svg',
    gallery: ['/images/products/wbcl10-electrode-kit.svg'],
    price: '가격 문의',
    priceEn: 'Contact for Price',
    purchasable: true,
    compatibility: 'WBCL10 잔류염소계',
    compatibilityEn: 'WBCL10 Residual Chlorine Analyzer',
  },
  {
    slug: 'wbtu10-lamp-kit',
    model: 'WBTU10-LK',
    name: '탁도계 텅스텐 램프 교체 세트',
    nameEn: 'Turbidity Meter Tungsten Lamp Replacement Kit',
    category: '소모품',
    categoryEn: 'Consumables',
    application: ['water_treatment', 'industrial_wastewater'],
    featured: false,
    shortDescription: 'WBTU10 탁도계 전용 텅스텐 램프(580nm) 교체 세트 — 광원 열화 시 측정 정확도 회복',
    shortDescriptionEn: 'Genuine tungsten lamp (580nm) replacement kit for WBTU10 turbidity meter — restores accuracy when light source degrades',
    description: `WBTU10 탁도계에 사용되는 정품 텅스텐 램프(580nm) 교체 세트입니다.
광원 수명(약 1년)이 다하거나 자동 보정 한계 초과 시 교체하여 ISO 7027 규격 수준의 측정 정확도를 유지합니다.
워터비 정품 부품 사용으로 광학 특성 및 측정 파장이 정확히 일치합니다.`,
    descriptionEn: `Genuine tungsten lamp (580nm) replacement kit for the WBTU10 turbidity meter.
Replace when the lamp lifespan (approx. 1 year) is reached or auto-correction reaches its limit to maintain ISO 7027-level accuracy.
Genuine Waterbee parts ensure exact optical properties and measurement wavelength match.`,
    features: [
      'WBTU10 정품 텅스텐 램프 (580nm)',
      '교체 후 ISO 7027 기준 측정 정확도 회복',
      '현장 교체 용이 — 광학계 재조정 불필요',
      '교체 주기: 약 1년 (운전 환경에 따라 상이)',
    ],
    featuresEn: [
      'Genuine WBTU10 tungsten lamp (580nm)',
      'ISO 7027 accuracy restored after replacement',
      'Easy field replacement — no optical recalibration needed',
      'Replacement interval: approx. 1 year (varies by operating environment)',
    ],
    specs: [
      { label: '호환 기종', labelEn: 'Compatible Model', value: 'WBTU10', valueEn: 'WBTU10' },
      { label: '램프 파장', labelEn: 'Lamp Wavelength', value: '580 nm (텅스텐)', valueEn: '580 nm (Tungsten)' },
      { label: '교체 주기', labelEn: 'Replacement Cycle', value: '약 1년', valueEn: 'Approx. 1 year' },
      { label: '포함 구성', labelEn: 'Package Contents', value: '텅스텐 램프, 교체 가이드', valueEn: 'Tungsten lamp, replacement guide' },
    ],
    image: '/images/products/wbtu10-lamp-kit.svg',
    gallery: ['/images/products/wbtu10-lamp-kit.svg'],
    price: '가격 문의',
    priceEn: 'Contact for Price',
    purchasable: true,
    compatibility: 'WBTU10 탁도계',
    compatibilityEn: 'WBTU10 Turbidity Meter',
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
