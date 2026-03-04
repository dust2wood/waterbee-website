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
}

export const products: Product[] = [
  {
    slug: 'wbcl10',
    model: 'WBCL10',
    name: '?????',
    nameEn: 'Residual Chlorine Analyzer',
    category: '????',
    categoryEn: 'Residual Chlorine',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '?? ????(Polarograph) ??, ?? ?? ??, ?0.02 mg/L ??? ??? ?????',
    shortDescriptionEn: 'Patented polarograph rotating electrode, auto-cleaning electrode, ?0.02 mg/L high-precision residual chlorine analyzer',
    description: `WBCL10? ??? ?? ??? ???? ??? ???? ?? ??? ??? ??? ???? ??????.
?? ???? ??? ???? ??? ???? ?? ??? ?? ???? ??? ????? ?????.
???? ???? ?? ???? 6?? ?? ????, pH 6~8 ???? pH ?? ?? ??? ??? ?????.`,
    descriptionEn: `The WBCL10 combines Waterbee's patented rotating electrode with ion-electrode coating technology for a maintenance-free continuous residual chlorine analyzer.
By completely eliminating the consumable membrane of conventional systems, it dramatically reduces replacement costs and field maintenance burden.
Ion-coated electrodes maintain measurement stability for over 6 months, with accurate measurement in pH 6?8 range without pH compensation.`,
    features: [
      '???(????) ?? ??? ? ???? ??? ??',
      '???? ???? ?? ??? 6?? ?? ??',
      'pH 6~8 ?? pH ?? ???',
      '?? ?? ?? ?? ?? (?? ??? ?? ??)',
      '?? ?? ??(????)?? ?? ?? ???',
      'RS-485 Modbus RTU/TCP ??',
      '4~20mA ???? ??',
      'IP65 ????? ??',
    ],
    featuresEn: [
      'No consumables (membrane) ? dramatically reduced maintenance cost',
      'Ion-coated electrode maintains stability for 6+ months',
      'No pH compensation needed in pH 6?8 range',
      'Stable measurement independent of flow rate',
      'Auto-cleaning (rotating) electrode minimizes fouling',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'IP65 dust and water protection',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: 'Polarograph Amperometric ????? (????)', valueEn: 'Polarograph Amperometric rotating electrode (reagent-free)' },
      { label: '?? ??', labelEn: 'Measurement Type', value: 'pH ??? (pH 6.5~7.5)', valueEn: 'pH uncompensated (pH 6.5~7.5)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0 ~ 2 mg/L (????), ??(?)', valueEn: '0 ~ 2 mg/L (residual chlorine), temp.(?)' },
      { label: '???', labelEn: 'Resolution', value: '0.01 mg/L, 0.1?', valueEn: '0.01 mg/L, 0.1?' },
      { label: '???', labelEn: 'Accuracy', value: '?0.02 mg/L (typ.)', valueEn: '?0.02 mg/L (typ.)' },
      { label: '?? ??', labelEn: 'Response Time', value: '90%, 2? ??', valueEn: '90%, within 2 min' },
      { label: '?? ??', labelEn: 'Sample Flow Rate', value: '200 ~ 700 mL/min', valueEn: '200 ~ 700 mL/min' },
      { label: '??', labelEn: 'Power Supply', value: 'AC 110~240V ?10%, 50/60Hz, DC 12V', valueEn: 'AC 110~240V ?10%, 50/60Hz, DC 12V' },
      { label: '??', labelEn: 'Communication', value: 'RS-232, RS-485, Modbus RTU/TCP, ???(??)', valueEn: 'RS-232, RS-485, Modbus RTU/TCP, Ethernet (optional)' },
      { label: '???? ??', labelEn: 'Analog Output', value: '4~20mA 2CH', valueEn: '4~20mA 2CH' },
      { label: '???', labelEn: 'Relay', value: '????, ??, ??? (3CH)', valueEn: 'Auto-cleaning, alarm, relay (3CH)' },
      { label: '????', labelEn: 'Controller', value: 'WBSC10 ??? ???? (4.3" TFT LCD)', valueEn: 'WBSC10 smart controller (4.3" TFT LCD)' },
      { label: '??', labelEn: 'Material', value: '?? Acetal/Aluminum, ?? ?? Acrylic, ?? Gold/Silver', valueEn: 'Housing Acetal/Aluminum, cell Acrylic, electrode Gold/Silver' },
      { label: '?? (????)', labelEn: 'Dimensions (Controller)', value: '210 ? 180 ? 86.5 mm', valueEn: '210 ? 180 ? 86.5 mm' },
      { label: '????', labelEn: 'Operating Environment', value: '?? -5~50?, ?? -20~60?, ???? 65 Psig', valueEn: 'In water -5~50?, ambient -20~60?, max 65 Psig' },
    ],
    image: '/images/products/wbcl10-main.png',
    gallery: [
      '/images/products/wbcl10-main.png',
      '/images/products/wbcl10-side.png',
      '/images/products/wbcl10-install.png',
    ],
  },
  {
    slug: 'wbtu10',
    model: 'WBTU10',
    name: '??? ???',
    nameEn: 'Low-Range Turbidity Meter',
    category: '??',
    categoryEn: 'Turbidity',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '0~10 NTU ?? ??, 90? ???(EPA 180.1), ??????? ???',
    shortDescriptionEn: '0?10 NTU precision, 90? scattered light (EPA 180.1), optimized for clearwells and waterworks',
    description: `WBTU10? ISO 7027 ??? ??? 90? ??? ??? ??? ??????.
??? ??(Tungsten Lamp) ??? ???? ???? ???? ???? ????, ?? ?? ???? ?? ???? ?? ??? ?? ?????.
?? ?? ???? ??? ??? ?? ?? ??? ???? ??? ???? ??? ?????.`,
    descriptionEn: `The WBTU10 is a continuous turbidity meter based on the ISO 7027 standard using 90? scattered light measurement.
Equipped with a Tungsten Lamp light source for precise and stable readings, and features a patented micro-bubble elimination system to prevent measurement interference.
The auto-cleaning function prevents optical contamination errors for long-term stable operation.`,
    features: [
      'ISO 7027 ??, 90? ??? (EPA 180.1)',
      '0~10 NTU ?? ??, ??????? ???',
      '?? ???? ?? ???? ?? ?? ??',
      '?? ?? ???? ???? ???',
      'RS-485 Modbus RTU/TCP ??',
      '4~20mA ???? ??',
      '?? ?? ??',
      '??? ??? ?? ?? ?? ??',
    ],
    featuresEn: [
      'ISO 7027 compliant, 90? scattered light (EPA 180.1)',
      '0?10 NTU precision, clearwell and waterworks optimized',
      'Patented micro-bubble elimination eliminates interference',
      'Auto-cleaning minimizes maintenance',
      'RS-485 Modbus RTU/TCP communication',
      '4~20mA analog output',
      'Relay alarm output',
      'Compact design for installation in tight spaces',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: '90? ??? (EPA 180.1)', valueEn: '90? scattered light (EPA 180.1)' },
      { label: '??', labelEn: 'Light Source', value: 'Tungsten Lamp (580nm)', valueEn: 'Tungsten Lamp (580nm)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0 ~ 10 NTU', valueEn: '0 ~ 10 NTU' },
      { label: '???', labelEn: 'Resolution', value: '0.001 NTU', valueEn: '0.001 NTU' },
      { label: '???', labelEn: 'Accuracy', value: '?2% or ?0.01 NTU', valueEn: '?2% or ?0.01 NTU' },
      { label: '?? ??', labelEn: 'Response Time', value: '90%, 10? ??', valueEn: '90%, within 10 min' },
      { label: '?? ??', labelEn: 'Sample Flow Rate', value: '50 ~ 300 mL/min', valueEn: '50 ~ 300 mL/min' },
      { label: '??', labelEn: 'Power Supply', value: 'AC 110~240V ?10%, 50/60Hz, DC 12V', valueEn: 'AC 110~240V ?10%, 50/60Hz, DC 12V' },
      { label: '??', labelEn: 'Communication', value: 'RS-232, RS-485, Modbus RTU/TCP, ???(??)', valueEn: 'RS-232, RS-485, Modbus RTU/TCP, Ethernet (optional)' },
      { label: '???? ??', labelEn: 'Analog Output', value: '4~20mA 2CH', valueEn: '4~20mA 2CH' },
      { label: '???', labelEn: 'Relay', value: '????, ??, ??? (3CH)', valueEn: 'Auto-cleaning, alarm, relay (3CH)' },
      { label: '????', labelEn: 'Controller', value: 'WBSC10 ??? ???? (4.3" TFT LCD)', valueEn: 'WBSC10 smart controller (4.3" TFT LCD)' },
      { label: '??', labelEn: 'Material', value: '??? ABS/Acetal, ??? Aluminium', valueEn: 'Sensor ABS/Acetal, lamp Aluminium' },
      { label: '??', labelEn: 'Structure', value: '???? ?? ?? (??? ??)', valueEn: 'Bubble-removal flow structure (removable)' },
      { label: '????', labelEn: 'Operating Environment', value: '?? -5~50?, ?? -20~60?, ???? 65 Psig (50?)', valueEn: 'In water -5~50?, ambient -20~60?, max 65 Psig (50?)' },
    ],
    image: '/images/products/wbtu10-main.png',
    gallery: [
      '/images/products/wbtu10-main.png',
      '/images/products/wbtu10-side.png',
    ],
  },
  {
    slug: 'wbtu-pro',
    model: 'WBTU-PRO',
    name: '??? ???',
    nameEn: 'High-Range Turbidity Meter',
    category: '??',
    categoryEn: 'Turbidity',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '0.01~4,000 NTU ??? ??, SS316 ??, ?? ??? ?? (SD-11A)',
    shortDescriptionEn: '0.01?4,000 NTU wide range, SS316 body, auto wiper (SD-11A)',
    description: `WBTU-PRO? ??????? ??? ?? ??????. SS316 ????? ??? ?? ???(Wiper) ???? ??? ? ?? ??? ?????.`,
    descriptionEn: `The WBTU-PRO is a continuous turbidity meter for high-load and harsh environments. SS316 stainless steel body and automatic wiper cleaning suit wastewater and industrial process applications.`,
    features: [
      '0.01 ~ 4,000 NTU ??? ?? (ISO 7027 ??)',
      'SS316 ????? ??, ??????',
      '?? ???(Wiper) ?? ?? ??',
      'RS-485 Modbus RTU/TCP, 4~20mA',
      'IP65 ?? ?? ??',
    ],
    featuresEn: [
      '0.01?4,000 NTU wide range (ISO 7027 type)',
      'SS316 stainless steel body, corrosion and abrasion resistant',
      'Built-in automatic wiper cleaning',
      'RS-485 Modbus RTU/TCP, 4~20mA',
      'IP65 or higher enclosure',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: '90? ??? (ISO 7027)', valueEn: '90? scattered light (ISO 7027)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0.01 ~ 4,000 NTU', valueEn: '0.01 ~ 4,000 NTU' },
      { label: '???', labelEn: 'Resolution', value: '0.01 NTU (???)', valueEn: '0.01 NTU (low range)' },
      { label: '???', labelEn: 'Accuracy', value: '?2% FS or ?0.5 NTU', valueEn: '?2% FS or ?0.5 NTU' },
      { label: '??', labelEn: 'Material', value: 'SS316 ????? (Wetted)', valueEn: 'SS316 stainless steel (wetted)' },
      { label: '??', labelEn: 'Cleaning', value: '?? ??? (Wiper)', valueEn: 'Automatic wiper' },
      { label: '??', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '??', labelEn: 'Output', value: '4~20mA', valueEn: '4~20mA' },
      { label: '?? ??', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
      { label: '?? ??', labelEn: 'Reference Model', value: 'SD-11A', valueEn: 'SD-11A' },
    ],
    image: '/images/products/wbtu-pro-main.png',
    gallery: ['/images/products/wbtu-pro-main.png'],
  },
  {
    slug: 'wbdo10',
    model: 'WBDO10',
    name: '??? ?????',
    nameEn: 'Optical Dissolved Oxygen Meter',
    category: '????',
    categoryEn: 'Dissolved Oxygen',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '2?? ???(Optical) ??, IP68, ??? ?? ?? ??? ?? (DOGB-00001)',
    shortDescriptionEn: '2nd-gen optical (luminescence) DO, IP68, no electrolyte replacement ? low maintenance (DOGB-00001)',
    description: `WBDO10? ???(???) ??????, ??? ??? ?? ?? ??? ?????. IP68 ???? ?????? ??? DO ?? ????? ?????.`,
    descriptionEn: `The WBDO10 is an optical (luminescence) dissolved oxygen meter with no electrolyte replacement for low maintenance. IP68 rating suits continuous DO monitoring in wastewater and industrial process.`,
    features: [
      '2?? ???(Optical) ??, ???? ???',
      '??? ?? ??? ? ???',
      'IP68 ??, ??? ??',
      'RS-485 Modbus, 4~20mA',
      '?? ?? ??',
    ],
    featuresEn: [
      '2nd-gen optical (luminescence) measurement, minimal drift',
      'No electrolyte replacement ? low maintenance',
      'IP68 submersible sensor',
      'RS-485 Modbus, 4~20mA',
      'Built-in temperature compensation',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: '??? (Luminescence)', valueEn: 'Optical (luminescence)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0 ~ 20 mg/L, 0 ~ 200% sat.', valueEn: '0 ~ 20 mg/L, 0 ~ 200% sat.' },
      { label: '???', labelEn: 'Resolution', value: '0.01 mg/L, 0.1% sat.', valueEn: '0.01 mg/L, 0.1% sat.' },
      { label: '???', labelEn: 'Accuracy', value: '?0.3 mg/L or ?2% sat.', valueEn: '?0.3 mg/L or ?2% sat.' },
      { label: '?? ??', labelEn: 'Protection Rating', value: 'IP68', valueEn: 'IP68' },
      { label: '????', labelEn: 'Maintenance', value: '??? ?? ???', valueEn: 'No electrolyte replacement' },
      { label: '??', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '??', labelEn: 'Output', value: '4~20mA', valueEn: '4~20mA' },
      { label: '?? ??', labelEn: 'Reference Model', value: 'DOGB-00001', valueEn: 'DOGB-00001' },
    ],
    image: '/images/products/wbdo10-main.png',
    gallery: ['/images/products/wbdo10-main.png'],
  },
  {
    slug: 'wbno3',
    model: 'WBNO3',
    name: '??? ?? ???',
    nameEn: 'Nitrate Ion Meter',
    category: '??',
    categoryEn: 'Ion',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: '?? ??(Double Junction) ??, PVC ????, ?? ?? ???? ??? (NO61)',
    shortDescriptionEn: 'Double junction, PVC membrane, wastewater process optimized (NO61)',
    description: `WBNO3? ??? ??(NO3-) ?? ?? ?? ??? ?? ??????. ?? ?? ??? PVC ?????? ?? ?? ??? ?? ????? ????? ????.`,
    descriptionEn: `The WBNO3 is a continuous nitrate (NO3-) ion-selective electrode analyzer. Double junction and PVC membrane design is optimized for nitrogen monitoring in wastewater treatment processes.`,
    features: [
      '?? ??(Double Junction) ??, ?? ??',
      'PVC ????, ???',
      '?? ?? ???? ???',
      'RS-485 Modbus, 4~20mA',
      '?? ?? ??',
    ],
    featuresEn: [
      'Double junction structure, fouling resistant',
      'PVC membrane, long service life',
      'Wastewater treatment process optimized',
      'RS-485 Modbus, 4~20mA',
      'Built-in temperature compensation',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: '?? ?? ?? (ISE)', valueEn: 'Ion-selective electrode (ISE)' },
      { label: '?? ?', labelEn: 'Analyte', value: '??? ?? (NO3-)', valueEn: 'Nitrate (NO3-)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0.1 ~ 100 mg/L NO3-N', valueEn: '0.1 ~ 100 mg/L NO3-N' },
      { label: '???', labelEn: 'Resolution', value: '0.1 mg/L', valueEn: '0.1 mg/L' },
      { label: '???', labelEn: 'Accuracy', value: '?5% FS or ?0.5 mg/L', valueEn: '?5% FS or ?0.5 mg/L' },
      { label: '?? ??', labelEn: 'Electrode Structure', value: '?? ?? (Double Junction)', valueEn: 'Double junction' },
      { label: '????', labelEn: 'Membrane', value: 'PVC', valueEn: 'PVC' },
      { label: '??', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '?? ??', labelEn: 'Reference Model', value: 'NO61', valueEn: 'NO61' },
    ],
    image: '/images/products/wbno3-main.png',
    gallery: ['/images/products/wbno3-main.png'],
  },
  {
    slug: 'wbnh4',
    model: 'WBNH4',
    name: '??? ???',
    nameEn: 'Ammonium Ion Meter',
    category: '??',
    categoryEn: 'Ion',
    application: ['industrial_wastewater'],
    featured: false,
    shortDescription: 'PT1000 ?? ?? ??, ??? ??? ?? ?? ???? (NH61)',
    shortDescriptionEn: 'PT1000 temperature compensation, real-time wastewater nitrogen monitoring (NH61)',
    description: `WBNH4? ???(NH4+) ?? ?? ?? ??? ?? ??????. PT1000 ?? ??? ???? ??? ? ?? ??? ??? ?? ?? ????? ?????.`,
    descriptionEn: `The WBNH4 is a continuous ammonium (NH4+) ion-selective electrode analyzer. Built-in PT1000 temperature compensation suits real-time nitrogen concentration monitoring in wastewater and industrial process.`,
    features: [
      'PT1000 ?? ?? ??',
      '??? ??? ??(NH4+) ????',
      '?? ?? ??(ISE) ??',
      'RS-485 Modbus, 4~20mA',
      '????? ?? ??',
    ],
    featuresEn: [
      'Built-in PT1000 temperature compensation',
      'Real-time wastewater NH4+ monitoring',
      'Ion-selective electrode (ISE) method',
      'RS-485 Modbus, 4~20mA',
      'Wastewater and industrial process application',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement Method', value: '?? ?? ?? (ISE)', valueEn: 'Ion-selective electrode (ISE)' },
      { label: '?? ?', labelEn: 'Analyte', value: '??? (NH4+)', valueEn: 'Ammonium (NH4+)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0.1 ~ 100 mg/L NH4-N', valueEn: '0.1 ~ 100 mg/L NH4-N' },
      { label: '???', labelEn: 'Resolution', value: '0.1 mg/L', valueEn: '0.1 mg/L' },
      { label: '???', labelEn: 'Accuracy', value: '?5% FS or ?0.5 mg/L', valueEn: '?5% FS or ?0.5 mg/L' },
      { label: '?? ??', labelEn: 'Temp. Compensation', value: 'PT1000 ??', valueEn: 'PT1000 built-in' },
      { label: '??', labelEn: 'Communication', value: 'RS-485, Modbus RTU/TCP', valueEn: 'RS-485, Modbus RTU/TCP' },
      { label: '?? ??', labelEn: 'Reference Model', value: 'NH61', valueEn: 'NH61' },
    ],
    image: '/images/products/wbnh4-main.png',
    gallery: ['/images/products/wbnh4-main.png'],
  },
  {
    slug: 'wbph10',
    model: 'WBPH10',
    name: 'pH?',
    nameEn: 'pH Meter',
    category: 'pH',
    categoryEn: 'pH',
    application: ['water_treatment', 'smart_farm'],
    featured: true,
    shortDescription: '??? pH ??? (?? ????? ?? ??)',
    shortDescriptionEn: 'Continuous pH meter with calibration and temperature compensation',
    description: `WBPH10? ?? ?? ??? ???? ??? pH ??????.
?? ?? ??? ??? ?? ??? ???? ???, ??????, ??? ??? ??? ?????.`,
    descriptionEn: `The WBPH10 is a continuous pH meter optimized for field water quality monitoring.
It supports automatic temperature compensation and easy calibration, suitable for waterworks, wastewater treatment, and industrial process water management.`,
    features: [
      '??? pH ??',
      '?? ?? ?? (NTC ?? PT-100)',
      '2? ?? 3? pH ?? ??',
      'RS-485 Modbus RTU/TCP ??',
      '4~20mA ???? ??',
      '?? ?? ??',
      'IP65 ?? ??',
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
      { label: '?? ??', labelEn: 'Measurement Method', value: '?? ???', valueEn: 'Glass electrode' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0 ~ 14 pH', valueEn: '0 ~ 14 pH' },
      { label: '???/???', labelEn: 'Resolution/Accuracy', value: '0.01 pH / ?0.1 pH', valueEn: '0.01 pH / ?0.1 pH' },
      { label: '??', labelEn: 'Output', value: '4~20mA, RS-485', valueEn: '4~20mA, RS-485' },
      { label: '?? ??', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
    ],
    image: '/images/products/wbph10-main.png',
    gallery: [
      '/images/products/wbph10-main.png',
    ],
  },
  {
    slug: 'wbph-pbs01',
    model: 'HT35-PBS01',
    name: 'pH ????',
    nameEn: 'pH Composite Electrode',
    category: 'pH',
    categoryEn: 'pH',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '12mm ? 120mm, ?? ?? ???????, PT1000 ????, Ag/AgCl ?? (????)',
    shortDescriptionEn: '12mm ? 120mm, blue transparent polycarbonate, PT1000 temp. compensation, Ag/AgCl reference (combination electrode)',
    description: `pH ????(HT35-PBS01)? 12mm ???120mm ??? ?? ?? ?????. ?? ?? ??????? ???, ASI 5? ?? ??, PT1000 ?? ?? ? Ag/AgCl ?? ?? ??????. pH7 ?? 0?15mV, ??? ?170mV(pH4~pH7), 95% ?? 5? ??.`,
    descriptionEn: `The pH composite electrode (HT35-PBS01) is a compact 12mm OD ? 120mm combination electrode with blue transparent polycarbonate casing, ASI No.5 sensitive glass, PT1000 temperature compensation, and Ag/AgCl reference. Zero point 0?15mV at pH7, slope ?170mV (pH4?pH7), 95% response within 5s.`,
    features: [
      '12mm ?? ? 120mm, ?? ????',
      '?? ?? ??????? ???',
      'PT1000 ?? ?? ??',
      'Ag/AgCl ?? ?, ???? ???',
      '?? ??? 5m (TC?pH?REF ??)',
    ],
    featuresEn: [
      '12mm OD ? 120mm, compact combination electrode',
      'Blue transparent polycarbonate casing',
      'PT1000 temperature compensation',
      'Ag/AgCl reference gel, non-removable protective cap',
      '5m coaxial cable (TC, pH, REF leads)',
    ],
    specs: [
      { label: '??', labelEn: 'Type', value: 'pH ????', valueEn: 'pH combination electrode' },
      { label: '??', labelEn: 'Dimensions', value: '12mm ?? ? 120mm', valueEn: '12mm OD ? 120mm' },
      { label: '???', labelEn: 'Casing', value: '?? ?? ???????', valueEn: 'Blue transparent polycarbonate' },
      { label: '?? ??', labelEn: 'Zero Point', value: 'pH7 ???: 0?15mV', valueEn: 'pH7 buffer: 0?15mV' },
      { label: '???', labelEn: 'Slope', value: 'pH4.0?pH7.0 ??: ?170mV', valueEn: 'pH4.0?pH7.0 buffer: ?170mV' },
      { label: '?? ??', labelEn: 'Response Time', value: '95% ?? 5?', valueEn: '95% within 5s' },
      { label: '?? ??', labelEn: 'Temp. Compensation', value: 'PT1000', valueEn: 'PT1000' },
      { label: '??', labelEn: 'Reference', value: 'Ag/AgCl ?', valueEn: 'Ag/AgCl gel' },
      { label: '???', labelEn: 'Cable', value: '?? 5m (COAX+3)', valueEn: 'Coaxial 5m (COAX+3)' },
    ],
    image: '/images/products/wbph-pbs01-main.png',
    gallery: ['/images/products/wbph-pbs01-main.png'],
  },
  {
    slug: 'wbec10',
    model: 'WBEC10',
    name: 'EC?',
    nameEn: 'EC Meter',
    category: 'EC',
    categoryEn: 'EC',
    application: ['water_treatment', 'smart_farm'],
    featured: true,
    shortDescription: '??? ?????(EC/TDS) ??? (?? ?? ??)',
    shortDescriptionEn: 'Continuous electrical conductivity (EC/TDS) meter with temperature compensation',
    description: `WBEC10? ??? ?????(EC/TDS) ??????.
?? ?? ?? ??? ???? ?? ???? ???, ??????, ??? ??? ??? ?????.`,
    descriptionEn: `The WBEC10 is a continuous electrical conductivity (EC/TDS) meter.
With automatic temperature compensation and stable performance, it is used for waterworks, wastewater treatment, and industrial process water management.`,
    features: [
      '??? EC/TDS ??',
      '?? ?? ?? (NTC ?? PT-100)',
      'RS-485 Modbus RTU/TCP ??',
      '4~20mA ???? ??',
      '?? ?? ??',
      'IP65 ?? ??',
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
      { label: '?? ??', labelEn: 'Measurement Method', value: '?? 2???', valueEn: 'AC 2-electrode' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '0 ~ 2,000 ?S/cm', valueEn: '0 ~ 2,000 ?S/cm' },
      { label: '???/???', labelEn: 'Resolution/Accuracy', value: '0.1 ?S/cm / 1.5%FS, ?0.3?', valueEn: '0.1 ?S/cm / 1.5%FS, ?0.3?' },
      { label: '??', labelEn: 'Output', value: '4~20mA, RS-485', valueEn: '4~20mA, RS-485' },
      { label: '?? ??', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
    ],
    image: '/images/products/wbec10-main.png',
    gallery: [
      '/images/products/wbec10-main.png',
    ],
  },
  {
    slug: 'wbec-cond',
    model: 'WBEC-COND',
    name: '??? ??',
    nameEn: 'Conductivity Electrode',
    category: 'EC',
    categoryEn: 'EC',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '12mm ? 120mm, Black ABS, ?? ?? ???, K=1, PT1000 ????, 1 ?S/cm~20 mS/cm',
    shortDescriptionEn: '12mm ? 120mm, Black ABS body, graphite disc sensing, K=1, PT1000, 1 ?S/cm?20 mS/cm',
    description: `??? ??? 12mm ??? Black ABS ??? ?? ??(Graphite disc) ???? ??? ????? ?????. ? ?? K=1(?20%), PT1000 ?? ??, ?? ?? 0~80?, ?? ?? 1 ?S/cm~20 mS/cm. ?? 250mm.`,
    descriptionEn: `Conductivity electrode with 12mm Black ABS body and graphite disc sensing element. Cell constant K=1 (?20%), PT1000 temperature compensation, 0?80?C application, 1 ?S/cm?20 mS/cm range. Lead length 250mm.`,
    features: [
      '12mm ??, Black ABS ??',
      '?? ??(Graphite disc) ???',
      '? ?? K=1 (?20%)',
      'PT1000 ?? ??',
      '?????, 0~80? ??',
    ],
    featuresEn: [
      '12mm OD, Black ABS body',
      'Graphite disc sensing element',
      'Cell constant K=1 (?20%)',
      'PT1000 temperature compensation',
      'Low maintenance, 0?80?C application',
    ],
    specs: [
      { label: '??', labelEn: 'Type', value: '??? ??', valueEn: 'Conductivity sensor' },
      { label: '??', labelEn: 'Dimensions', value: '12mm ?? ? 120mm', valueEn: '12mm OD ? 120mm' },
      { label: '??', labelEn: 'Body', value: 'Black ABS', valueEn: 'Black ABS' },
      { label: '???', labelEn: 'Sensing Element', value: '?? ?? (Graphite disc)', valueEn: 'Graphite disc' },
      { label: '? ??', labelEn: 'Cell Constant', value: 'K=1 (?20% cm??)', valueEn: 'K=1 (?20% cm??)' },
      { label: '?? ??', labelEn: 'Measurement Range', value: '1 ?S/cm ~ 20 mS/cm', valueEn: '1 ?S/cm ~ 20 mS/cm' },
      { label: '?? ??', labelEn: 'Application Temp.', value: '0 ~ 80?', valueEn: '0 ~ 80?C' },
      { label: '?? ??', labelEn: 'Temp. Compensation', value: 'PT1000 (?????? ??)', valueEn: 'PT1000 (in stainless tube)' },
      { label: '??', labelEn: 'Leads', value: 'TC 2?, Cond 2?, 250mm', valueEn: 'TC 2-wire, Cond 2-wire, 250mm' },
    ],
    image: '/images/products/wbec-cond-main.png',
    gallery: ['/images/products/wbec-cond-main.png'],
  },
  {
    slug: 'sampling-tank',
    model: 'WB-ST',
    name: '?????',
    nameEn: 'Sampling Tank',
    category: '???',
    categoryEn: 'Sampling',
    application: ['water_treatment', 'smart_filter_drain'],
    featured: true,
    shortDescription: '?? ????? ?? ?? ? ????? ?? ???',
    shortDescriptionEn: 'Sample supply and overflow tank system for water quality instruments',
    description: `WB-ST ?????? ?????, ???, pH/EC? ? ?? ????? ??? ??? ????? ???? ?? ??? ?????.
????? ???? ?? ??? ??? ??? ????, ??? ?? ??? ???? ????.
SUS 304 ????? ??? ???? ???? ?????.`,
    descriptionEn: `The WB-ST sampling tank is a pre-treatment tank that stably supplies uniform samples to water quality instruments such as residual chlorine analyzers, turbidity meters, and pH/EC meters.
The overflow method ensures fresh samples are always supplied to the instruments, with built-in suspended solids settling.
Made of SUS 304 stainless steel for excellent corrosion resistance and durability.`,
    features: [
      'SUS 304 ????? ??',
      '????? ???? ??? ?? ?? ??',
      '??? ?? ?? ??',
      '?? ?? ?? ?? ?? (?? 4??)',
      '??? ?? ? ?? ??? ??',
      '???? ?? ???? ??',
      '?? ??? ?? ?? ??',
      '?? ??? ?? ?? ?? ??',
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
      { label: '??', labelEn: 'Material', value: 'SUS 304 (?? ??)', valueEn: 'SUS 304 (mirror finish)' },
      { label: '?? ??', labelEn: 'Tank Capacity', value: '5L / 10L (??)', valueEn: '5L / 10L (optional)' },
      { label: '?? ??', labelEn: 'Inlet Connection', value: '1/2" PT ???', valueEn: '1/2" PT female' },
      { label: '?? ??', labelEn: 'Outlet Ports', value: '?? 4?? (1/4" PT)', valueEn: 'Up to 4 ports (1/4" PT)' },
      { label: '?????', labelEn: 'Overflow', value: '1/2" PT ???', valueEn: '1/2" PT female' },
      { label: '???', labelEn: 'Drain', value: '??? ??', valueEn: 'With ball valve' },
      { label: '?? ???', labelEn: 'Level Switch', value: '???? (?? ??)', valueEn: 'Float type (optional)' },
      { label: '?? ??', labelEn: 'Installation', value: '???? / ????', valueEn: 'Wall-mount / stand-alone' },
      { label: '?? (W?H?D)', labelEn: 'Dimensions (W?H?D)', value: '300 ? 400 ? 200 mm (???)', valueEn: '300 ? 400 ? 200 mm (standard)' },
      { label: '??', labelEn: 'Weight', value: '? 4.5 kg (???)', valueEn: 'Approx. 4.5 kg (standard)' },
    ],
    image: '/images/products/sampling-tank-main.png',
    gallery: [
      '/images/products/sampling-tank-main.png',
    ],
  },
  {
    slug: 'filter-drain',
    model: 'WB-FDS',
    name: '??? ????? ???',
    nameEn: 'Smart Filter Drain System',
    category: '??/???',
    categoryEn: 'Filtration/Drain',
    application: ['smart_filter_drain'],
    featured: false,
    shortDescription: '?? ?? ?? ?? ?? ??, ?? ?????? ?? ?? ????',
    shortDescriptionEn: 'Water quality sensor?linked automatic drain control; early stormwater and storage tank pollution management',
    description: `??? ????? ???? ?? ??? ??? ?? ?? ???, ?? ?? ? ??? ?? ??? ?? ?? ???????.
??????????? ?? ??? ????, ???? ??????? ???? ?? ?? ??? ??? ??? ?????.`,
    descriptionEn: `The Smart Filter Drain System provides water quality sensor?linked automatic drain control for early stormwater and storage tank pollution management. It integrates filtration, drainage, and water quality in one module and supports filter diagnosis and no-shutdown operation via pre/post turbidity and residual chlorine data.`,
    features: [
      '????: ?????????? ?? ?? ?? ??',
      '??? ??: ??? ?? ???? ?? ?? ???? ??',
      '???? ?? ?? ??: ?? ????? ?? ?? (?? ?? 2% ??)',
      '????: ?? ??? ?? ?? ????? ?? ??',
      'AI ??: ?? ??? ?? ????, ?? AI ????????? ??',
      'ICT ?? ??? ?? ?? ?? (4~20mA, RS-485, Modbus)',
      '?? ???? ? ?? ?? (????/?)',
      'LTE?WiFi?????RS-485 ??, ?? ?? ??',
    ],
    featuresEn: [
      'Integrated control: filtration, drain, and water quality in a single module',
      'No-shutdown operation: independent modules allow maintenance without water shutdown',
      'Pre- and post-filter turbidity measurement: precise filter fouling and condition diagnosis (?2% accuracy)',
      'Smart diagnosis: filter condition and replacement timing prediction from water quality data',
      'AI-ready: automatic control from water quality data; future AI-based predictive maintenance and auto-cleaning',
      'ICT-linked automatic control (4~20mA, RS-485, Modbus)',
      'Remote monitoring and manual control (cloud/app)',
      'LTE/WiFi/Ethernet/RS-485 communication, integration with existing facilities',
    ],
    specs: [
      { label: '??? ??', labelEn: 'System Configuration', value: '??+???+???? ???', valueEn: 'Integrated filtration + drain + water quality' },
      { label: '?? ??', labelEn: 'Control Method', value: 'ICT ?? ?? / ?? ??', valueEn: 'ICT auto link / manual select' },
      { label: '?? ??', labelEn: 'Linked Sensors', value: '???, ????? (???)', valueEn: 'Turbidity, residual chlorine (Waterbee)' },
      { label: '?? ??', labelEn: 'Turbidity Measurement', value: '???? ?? ?? (2% ?? ??)', valueEn: 'Pre- and post-filter simultaneous (?2%)' },
      { label: '??', labelEn: 'Communication', value: 'LTE / WiFi / ??? / RS-485', valueEn: 'LTE / WiFi / Ethernet / RS-485' },
      { label: '?? ??', labelEn: 'Control Output', value: '??? 4? (???/???/??)', valueEn: 'Relay 4pt (backwash/drain/alarm)' },
      { label: '??? ??', labelEn: 'Data Management', value: '???? ?? + ? ??', valueEn: 'Cloud server + app' },
      { label: '??', labelEn: 'Power Supply', value: 'AC 220V, 50/60Hz', valueEn: 'AC 220V, 50/60Hz' },
      { label: '?? ??', labelEn: 'Protection Rating', value: 'IP65', valueEn: 'IP65' },
      { label: '?? ??', labelEn: 'Installation', value: '??????? ??', valueEn: 'Modular, linear design' },
    ],
    image: '/images/products/filter-drain-main.png',
    gallery: [
      '/images/products/filter-drain-main.png',
    ],
  },
  {
    slug: 'ph-ec-board',
    model: 'WB-PES',
    name: 'pH/EC ????',
    nameEn: 'pH/EC Sensor Board',
    category: '????',
    categoryEn: 'Smart Farm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '???? ?? ? ?? ??? pH?????? ?? ????',
    shortDescriptionEn: 'Wilo Pump collaboration ? pump-integrated pH & conductivity sensor board',
    description: `WB-PES? ????(Wilo)? ?? ??? pH??????(EC) ?? ???????.
?? ??? ????? ???? ??? ??? ?? ?? ?? ???? ?? ??? ??? ???? ?????.
?? ?????(10~200 ?S/cm) ????? ?? ??? ???? ?? ????? ?? ??? ?????.`,
    descriptionEn: `The WB-PES is a pH and electrical conductivity (EC) measurement sensor board co-developed with Wilo Pump.
Designed to be built into pump control panels, it delivers water quality measurement and pump control as a single package without a separate analyzer.
Capable of precise measurement in low-conductivity environments (10?200 ?S/cm), making it ideal for water treatment and ultrapure water processes.`,
    features: [
      '????(Wilo) ?? ????? ?? ??',
      '?? ??? ??? ? ?? ??? ???',
      '????(10~200 ?S/cm) ?? ??',
      'pH + EC ?? ?? (?? ??)',
      '?? ?? ?? ??',
      'RS-485 Modbus RTU ??',
      '4~20mA ???? ?? (??)',
      '?? ?? ??? ??? ? ?? ???',
    ],
    featuresEn: [
      'Co-developed and co-marketed with Wilo Pump',
      'Built into pump control panel ? no separate analyzer needed',
      'Precise low-conductivity measurement (10?200 ?S/cm)',
      'Simultaneous pH + EC measurement on a single board',
      'Built-in automatic temperature compensation',
      'RS-485 Modbus RTU output',
      '4~20mA analog output (optional)',
      'Compact board design minimizes panel space',
    ],
    specs: [
      { label: 'pH ?? ??', labelEn: 'pH Range', value: '0.00 ~ 14.00 pH', valueEn: '0.00 ~ 14.00 pH' },
      { label: 'pH ???', labelEn: 'pH Accuracy', value: '?0.01 pH', valueEn: '?0.01 pH' },
      { label: 'EC ?? ??', labelEn: 'EC Range', value: '10 ~ 20,000 ?S/cm', valueEn: '10 ~ 20,000 ?S/cm' },
      { label: '???? ??', labelEn: 'Low Conductivity', value: '10 ~ 200 ?S/cm ?? ??', valueEn: '10 ~ 200 ?S/cm precise measurement' },
      { label: 'EC ???', labelEn: 'EC Accuracy', value: '?1% FS', valueEn: '?1% FS' },
      { label: '?? ??', labelEn: 'Temp. Compensation', value: '0 ~ 60?C (??)', valueEn: '0 ~ 60?C (auto)' },
      { label: '??', labelEn: 'Communication', value: 'RS-485 Modbus RTU', valueEn: 'RS-485 Modbus RTU' },
      { label: '???? ??', labelEn: 'Analog Output', value: '4~20mA (?? ??)', valueEn: '4~20mA (optional)' },
      { label: '??', labelEn: 'Power Supply', value: 'DC 12V / 24V', valueEn: 'DC 12V / 24V' },
      { label: '???', labelEn: 'Form Factor', value: 'DIN Rail ?? / ?? ???', valueEn: 'DIN Rail module / board mount' },
      { label: '???', labelEn: 'Partner', value: 'Wilo Pump (????)', valueEn: 'Wilo Pump' },
    ],
    image: '/images/products/ph-ec-board-main.png',
    gallery: [
      '/images/products/ph-ec-board-main.png',
    ],
  },
  {
    slug: 'smartfarm-io',
    model: 'WB-SFIO',
    name: '???? ?? ?? ??',
    nameEn: 'SmartFarm IO Board',
    category: '????',
    categoryEn: 'Smart Farm',
    application: ['smart_farm'],
    featured: false,
    shortDescription: '??(pH/EC) ? ?? ??? ?? ????, ??????? ?? ???',
    shortDescriptionEn: 'Nutrient (pH/EC) and environmental data integrated monitoring; low-cost control system',
    description: `???? ?? ?? ??? ?? ??(pH/EC)? ?? ???? ?? ?????? ??????? ?? ??????. ???? ? ?? ?? ??? ????? ????.`,
    descriptionEn: `The SmartFarm IO Board is a low-cost, entry-level control system that integrates nutrient (pH/EC) and environmental data monitoring, optimized for smart farms and facility cultivation.`,
    features: [
      '?? ??(pH/EC) ?? ??',
      '?? ???(???? ?) ??',
      '??????? ?? ???',
      'RS-485/Modbus ?? GPIO ??',
      '????????? ???',
    ],
    featuresEn: [
      'Integrated nutrient (pH/EC) measurement',
      'Environmental data (temp, humidity, etc.) link',
      'Low-cost, entry-level control system',
      'RS-485/Modbus or GPIO interface',
      'Smart farm and facility cultivation optimized',
    ],
    specs: [
      { label: '?? ??', labelEn: 'Measurement', value: 'pH, EC, ??', valueEn: 'pH, EC, temperature' },
      { label: '??', labelEn: 'Application', value: '?????? ??', valueEn: 'Nutrient and irrigation water management' },
      { label: '??', labelEn: 'Communication', value: 'RS-485, Modbus ?? GPIO', valueEn: 'RS-485, Modbus or GPIO' },
      { label: '??', labelEn: 'Target', value: '????, ?? ??', valueEn: 'Smart farm, facility cultivation' },
    ],
    image: '/images/products/smartfarm-io-main.png',
    gallery: ['/images/products/smartfarm-io-main.png'],
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
  return ['??', ...Array.from(cats)]
}

export function getAllApplications(): string[] {
  const apps = new Set(products.flatMap((p) => p.application))
  return ['all', ...Array.from(apps)]
}
