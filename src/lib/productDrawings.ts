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
    note: '190 × 180 mm 본체 형상 기준. 납품 하우징과 형상을 대조해 주세요. 깊이 86.5 mm와 측면·하부·등각도는 참고값(REF)이며 조립품 실측값이 아닙니다. 글랜드·버튼 캡 등 부착품은 제외됩니다.',
    noteEn: 'Applies to the 190 × 180 mm enclosure shown. Check against the supplied housing. The 86.5 mm depth and side, bottom and isometric views are reference only (REF), not as-built measurements. Glands, button caps and accessories are excluded.',
  },
  {
    slug: 'wbtu10', model: 'WBTU10', name: '온라인 탁도계', nameEn: 'Online Turbidity Meter', views: 1,
    metrics: [
      { label: '본체 지름', labelEn: 'Body diameter', value: 'Ø100 mm' },
      { label: '도면 기준 높이', labelEn: 'Height shown', value: '272.50 mm' },
      { label: '고정홀 간격', labelEn: 'Mounting centres', value: '170 × 70 mm' },
      { label: '고정홀 지름', labelEn: 'Mounting-hole diameter', value: 'Ø5.5 mm' },
    ],
    note: '배관·피팅 구성에 따라 설치 공간이 달라질 수 있습니다. 배관 연결과 하부 점검 공간을 별도로 확보해 주세요.',
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
    note: '배관·피팅 구성에 따라 설치 공간이 달라질 수 있습니다. 전극과 측정조의 점검·교체 공간을 별도로 확보해 주세요.',
    noteEn: 'Installation space varies with the piping and fittings supplied. Allow additional clearance for electrode and measurement-chamber maintenance.',
  },
  {
    slug: 'wbec10', model: 'WBEC10', name: '전기전도도계', nameEn: 'Conductivity Sensor', views: 1,
    metrics: [
      { label: '도면 표시 구간 길이', labelEn: 'Indicated length', value: '184 mm' },
      { label: '본체 지름', labelEn: 'Body diameter', value: 'Ø32 mm' },
      { label: '체결 나사', labelEn: 'Connection', value: 'NPT 3/4' },
      { label: '공구 체결부', labelEn: 'Wrench size', value: 'SW29' },
    ],
    note: '184 mm는 도면의 68 + 101 + 15 mm 구간 합계입니다. 끝단 글랜드와 케이블 인출 공간은 포함하지 않습니다.',
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
