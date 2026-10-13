export interface DrawingMetric {
  label: string
  labelEn: string
  value: string
}

export interface ProductDrawing {
  slug: string
  model: string
  name: string
  nameEn: string
  views: number
  metrics: DrawingMetric[]
  note: string
  noteEn: string
}

export const drawingRevision = '2026-09-17'
export const drawingBase = '/downloads/drawings/2026-09'
export const drawingFormats = ['PDF', 'DWG', 'DXF'] as const

export const productDrawings: ProductDrawing[] = [
  {
    slug: 'wbsc10', model: 'WBSC10', name: '스마트 컨트롤러', nameEn: 'Smart Controller', views: 2,
    metrics: [
      { label: '도면 적용 본체', labelEn: 'Enclosure shown', value: '190 × 180 mm' },
      { label: '벽 고정홀 간격', labelEn: 'Mounting centres', value: '148 × 166 mm' },
      { label: '벽 고정홀', labelEn: 'Mounting holes', value: '4 × Ø4.2 mm' },
    ],
    note: '190 × 180 mm 본체 기준 · 깊이 86.5 mm 및 측면·하부·등각도: 참고값(REF) · 납품 하우징 실측 확인 · 글랜드·버튼 캡 제외',
    noteEn: '190 × 180 mm enclosure · 86.5 mm depth and side/bottom/isometric views: REF · Supplied-housing measurement check · Glands and button caps excluded',
  },
  {
    slug: 'wbtu10', model: 'WBTU10', name: '온라인 탁도계', nameEn: 'Online Turbidity Meter', views: 1,
    metrics: [
      { label: '본체 지름', labelEn: 'Body diameter', value: 'Ø100 mm' },
      { label: '도면 기준 높이', labelEn: 'Height shown', value: '272.50 mm' },
      { label: '고정홀 간격', labelEn: 'Mounting centres', value: '170 × 70 mm' },
      { label: '고정홀 지름', labelEn: 'Mounting-hole diameter', value: 'Ø5.5 mm' },
    ],
    note: '배관·피팅 구성별 설치 공간 확인 · 배관 연결 및 하부 점검 공간 추가 확보',
    noteEn: 'Installation space varies with the piping and fittings supplied. Allow additional clearance for pipe connections and maintenance below the instrument.',
  },
  {
    slug: 'wbfc10', model: 'WBFC10', name: '잔류염소계', nameEn: 'Residual Chlorine Meter', views: 1,
    metrics: [
      { label: '본체 지름', labelEn: 'Body diameter', value: 'Ø100 mm' },
      { label: '도면 기준 높이', labelEn: 'Height shown', value: '278.50 mm' },
      { label: '고정홀 간격', labelEn: 'Mounting centres', value: '150 × 70 mm' },
      { label: '고정홀 지름', labelEn: 'Mounting-hole diameter', value: 'Ø5.5 mm' },
    ],
    note: '배관·피팅 구성별 설치 공간 확인 · 전극·측정조 점검 및 교체 공간 추가 확보',
    noteEn: 'Installation space varies with the piping and fittings supplied. Allow additional clearance for electrode and measurement-chamber maintenance.',
  },
  {
    slug: 'wbph10', model: 'WBPH10', name: 'pH계', nameEn: 'pH Sensor', views: 1,
    metrics: [
      { label: '센서 지름', labelEn: 'Sensor diameter', value: 'Ø20 mm' },
      { label: '체결 나사', labelEn: 'Connection', value: 'NPT 3/4' },
      { label: '본체 구간 (참고)', labelEn: 'Body segment (reference)', value: '110 mm (REF)' },
    ],
    note: '본체 구간 110 mm: 참고치수(REF) · 설치 전 납품 센서의 실제 형상 및 치수 확인',
    noteEn: 'The 110 mm body segment is a reference dimension (REF). Confirm the supplied sensor configuration and dimensions before installation.',
  },
  {
    slug: 'wbec10', model: 'WBEC10', name: '전기전도도계', nameEn: 'Conductivity Sensor', views: 1,
    metrics: [
      { label: '도면 표시 구간 길이', labelEn: 'Indicated length', value: '184 mm' },
      { label: '본체 지름', labelEn: 'Body diameter', value: 'Ø32 mm' },
      { label: '체결 나사', labelEn: 'Connection', value: 'NPT 3/4' },
      { label: '공구 체결부', labelEn: 'Wrench size', value: 'SW29' },
    ],
    note: '표시 구간 합계: 68 + 101 + 15 = 184 mm · 끝단 글랜드 및 케이블 인출 공간 별도 확보',
    noteEn: '184 mm is the sum of the indicated 68 + 101 + 15 mm segments. The end gland and cable-exit clearance are not included.',
  },
]

export function getProductDrawing(slug: string) {
  return productDrawings.find((drawing) => drawing.slug === slug)
}

export function drawingFile(model: string, format: typeof drawingFormats[number]) {
  return `${drawingBase}/${model}_Outline.${format.toLowerCase()}`
}

export function drawingPreview(model: string, view: number) {
  return `${drawingBase}/${model}_view_${view}.svg`
}
