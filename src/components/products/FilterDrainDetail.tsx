'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  XCircle,
  Filter,
  Droplets,
  Zap,
  BarChart3,
  Wrench,
  Globe,
  Phone,
  ChevronDown,
  ChevronUp,
  Award,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Breadcrumb from '@/components/ui/Breadcrumb'

// ─── 데이터 ────────────────────────────────────────────────────────

const PIPE_OPTIONS = ['50A', '80A', '100A', '125A', '150A', '200A'] as const
type Pipe = typeof PIPE_OPTIONS[number]

const FILTER_OPTIONS = [
  { code: 'F-100', micron: 100, label: '100μm', sub: '1차 여과', cycle: '6~12개월', use: '농업·공업용수, 1차 전처리' },
  { code: 'F-50',  micron: 50,  label: '50μm',  sub: '표준 여과', cycle: '3~6개월',  use: '상수도 배수지, 가압장 표준' },
  { code: 'F-10',  micron: 10,  label: '10μm',  sub: '정밀 여과', cycle: '1~3개월',  use: '고수질 요구 현장, K-water 기준' },
  { code: 'F-Custom', micron: null, label: '커스텀', sub: '맞춤형', cycle: '협의', use: '특수 환경, 다단 복합 배열' },
] as const

type FilterCode = 'F-100' | 'F-50' | 'F-10' | 'F-Custom'
type Measurement = 'Basic' | 'Standard' | 'Smart'
type Control = 'basic' | 'plc' | 'smart'

const SERIES = [
  {
    id: 'A',
    name: 'PVC 경량형',
    nameEn: 'PVC Lightweight',
    code: 'WB-FD-50P',
    pipes: ['50A'],
    material: 'PVC',
    target: '소규모 민간·아파트·소형 저수조',
    targetEn: 'Residential, apartment, small reservoir',
    config: ['후단 탁도계', '전동밸브 자동드레인', '50μm 필터'],
    configEn: ['Post-filter turbidity meter', 'Motorized valve auto-drain', '50μm filter'],
    options: ['잔류염소계 추가', '필터 등급 변경'],
    optionsEn: ['Add residual chlorine meter', 'Change filter grade'],
    badge: null,
    color: 'border-white/20',
    flow: '~20 m³/h',
  },
  {
    id: 'B',
    name: 'SUS 표준형',
    nameEn: 'SUS304 Standard',
    code: 'WB-FD-[관경]S',
    codeEn: 'WB-FD-[pipe]S',
    pipes: ['50A', '80A', '100A', '125A'],
    material: 'STS304',
    target: '지자체 배수지·가압장·공공시설',
    targetEn: 'Municipal distribution tanks, booster stations, public facilities',
    config: ['전단 탁도계', '후단 탁도계', '후단 잔류염소계', 'PLC + HMI 터치패널', '50μm 필터 3×4'],
    configEn: ['Pre-filter turbidity meter', 'Post-filter turbidity meter', 'Post-filter CL₂ meter', 'PLC + HMI touch panel', '50μm filter 3×4'],
    options: ['원격감시·제어', '다중필터 2단 배열', '필터 등급 변경'],
    optionsEn: ['Remote monitoring & control', 'Dual-stage filter array', 'Change filter grade'],
    badge: '추천',
    badgeEn: 'Recommended',
    color: 'border-gold-500/50',
    flow: '~20 ~ 120 m³/h',
  },
  {
    id: 'C',
    name: 'SUS 대형형',
    nameEn: 'SUS304 Large-Scale',
    code: 'WB-FD-[관경]L',
    codeEn: 'WB-FD-[pipe]L',
    pipes: ['150A', '200A'],
    material: 'STS304',
    target: 'K-water 가압장·광역상수도·산업단지',
    targetEn: 'K-water booster stations, regional waterworks, industrial complexes',
    config: ['전단 탁도계', '후단 탁도계', '후단 잔류염소계', 'PLC + HMI', '원격감시제어', '데이터 로깅'],
    configEn: ['Pre-filter turbidity meter', 'Post-filter turbidity meter', 'Post-filter CL₂ meter', 'PLC + HMI', 'Remote monitoring & control', 'Data logging'],
    options: ['다중필터 배열', 'SCADA 연동', '커스텀 필터'],
    optionsEn: ['Multi-filter array', 'SCADA integration', 'Custom filter'],
    badge: '대형',
    badgeEn: 'Large',
    color: 'border-white/20',
    flow: '~200 ~ 350 m³/h',
  },
]

const FEATURES = [
  {
    icon: Filter,
    title: '정밀여과 + 자동드레인 일체형',
    titleEn: 'Integrated Filtration + Auto-Drain',
    desc: '설치비 기존 대비 50% 절감',
    descEn: '50% reduction in installation cost vs. separate equipment',
  },
  {
    icon: BarChart3,
    title: '전·후단 탁도 실시간 비교',
    titleEn: 'Pre/Post Turbidity Real-Time Comparison',
    desc: '여과효율 95% 이상 상시 검증',
    descEn: 'Continuously verified filtration efficiency ≥95%',
  },
  {
    icon: Zap,
    title: '5분 이내 고탁도 즉각 대응',
    titleEn: 'Response Within 5 Minutes',
    desc: '자동드레인 정확도 100% (반복 시험)',
    descEn: '100% auto-drain accuracy in repeated tests',
  },
  {
    icon: Wrench,
    title: '현장 맞춤 필터 무단수 교체',
    titleEn: 'On-Site Filter Replacement',
    desc: '10 / 50 / 100μm 필터, 단수 없이 교체',
    descEn: '10 / 50 / 100μm filter swap with no water shutdown',
  },
  {
    icon: Droplets,
    title: '센서 수명 2~3배 연장',
    titleEn: 'Sensor Lifespan 2–3× Longer',
    desc: '이온코팅 기술 적용',
    descEn: 'Ion-coating technology applied',
  },
  {
    icon: Globe,
    title: '50A ~ 200A 전 규격 대응',
    titleEn: 'Full Range 50A–200A',
    desc: 'PVC 경량형부터 대형 가압장까지',
    descEn: 'From PVC lightweight to large-scale booster stations',
  },
]

type CompareRow = {
  label: string
  labelEn: string
  competitor: boolean | string
  competitorEn?: string
  waterbee: string
  waterbeeEn: string
}

const COMPARE_ROWS: CompareRow[] = [
  { label: '여과 기능', labelEn: 'Filtration', competitor: false, waterbee: '정밀여과 + 자동드레인', waterbeeEn: 'Precision filtration + auto-drain' },
  { label: '탁도계 위치', labelEn: 'Turbidity Meters', competitor: '1개소', competitorEn: '1 point', waterbee: '전단 + 후단 2개소', waterbeeEn: 'Pre + post (2 points)' },
  { label: '잔류염소 감시', labelEn: 'Residual Cl₂', competitor: true, waterbee: '후단 잔류염소계 기본', waterbeeEn: 'Post-filter Cl₂ meter standard' },
  { label: '관경 라인업', labelEn: 'Pipe Range', competitor: '50A, 80A (2종)', competitorEn: '50A, 80A (2 sizes)', waterbee: '50A~200A (7종)', waterbeeEn: '50A–200A (7 sizes)' },
  { label: '소재 선택', labelEn: 'Material', competitor: 'SUS 단일', competitorEn: 'SUS only', waterbee: 'PVC (저가형) / SUS 선택', waterbeeEn: 'PVC (budget) / SUS selectable' },
  { label: '필터 현장 교체', labelEn: 'Filter Replacement', competitor: false, waterbee: '10 / 50 / 100μm 무단수 교체', waterbeeEn: '10 / 50 / 100μm no-shutdown swap' },
  { label: '다중필터 구성', labelEn: 'Multi-stage Filter', competitor: false, waterbee: '2단 복합 배열 가능', waterbeeEn: 'Dual-stage array available' },
  { label: '원격 제어', labelEn: 'Remote Control', competitor: true, waterbee: '옵션 선택 가능', waterbeeEn: 'Selectable option' },
  { label: '설치비', labelEn: 'Installation Cost', competitor: '개별 장비 조합', competitorEn: 'Separate equipment', waterbee: '기존 대비 50% 절감', waterbeeEn: '50% savings vs. existing' },
  { label: '유지비 절감', labelEn: 'Maintenance Savings', competitor: '기준', competitorEn: 'Baseline', waterbee: '연간 약 1,200만 원/개소', waterbeeEn: '~₩12M/year per site' },
]

const PERF_SPECS = [
  { label: '시스템 응답속도', value: '5분 이내 자동드레인', sub: '탁도 0.5 NTU 초과 후' },
  { label: '여과 효율', value: '95% 이상', sub: '원수 1±0.5 NTU 조건' },
  { label: '자동드레인 정확도', value: '100%', sub: '0.5 NTU 초과 반복시험' },
  { label: '여과수 탁도', value: '0.5 NTU 이하', sub: '연속 유지' },
  { label: '탁도 측정 정확도', value: '±0.05 NTU', sub: '이내' },
  { label: '잔류염소 정확도', value: '±0.05 mg/L', sub: '이내' },
]

// ─── 구성 선택기 결과 계산 ─────────────────────────────────────────

function resolveModel(pipe: Pipe, filter: FilterCode, measurement: Measurement, control: Control) {
  const isLarge = pipe === '150A' || pipe === '200A'
  const isPVC = !isLarge && pipe === '50A'
  const seriesId = isLarge ? 'C' : 'B'

  if (isPVC && measurement === 'Basic' && control === 'basic') {
    return { code: 'WB-FD-50P', series: 'A', name: 'PVC 경량형' }
  }
  if (isLarge) {
    return { code: `WB-FD-${pipe}L`, series: 'C', name: 'SUS 대형형' }
  }
  return { code: `WB-FD-${pipe}S`, series: seriesId, name: 'SUS 표준형' }
}

// ─── 컴포넌트 ──────────────────────────────────────────────────────

export default function FilterDrainDetail() {
  const locale = useLocale()
  const isKo = locale === 'ko'

  // 구성 선택기 state
  const [selPipe, setSelPipe] = useState<Pipe>('100A')
  const [selFilter, setSelFilter] = useState<FilterCode>('F-50')
  const [selMeasurement, setSelMeasurement] = useState<Measurement>('Standard')
  const [selControl, setSelControl] = useState<Control>('plc')
  const [showCompareDetail, setShowCompareDetail] = useState(false)

  // 계열 B/C 관경 자동 제한
  const isLarge = selPipe === '150A' || selPipe === '200A'
  const resolved = resolveModel(selPipe, selFilter, selMeasurement, selControl)

  const measurementOptions: { key: Measurement; label: string; desc: string }[] = [
    { key: 'Basic',    label: 'Basic',    desc: isKo ? '후단 탁도계' : 'Post-filter turbidity' },
    { key: 'Standard', label: 'Standard', desc: isKo ? '전·후단 탁도계 + 잔류염소계' : 'Pre/post turbidity + Cl₂' },
    { key: 'Smart',    label: 'Smart',    desc: isKo ? 'Standard + 원격감시·제어' : 'Standard + remote monitoring' },
  ]
  const controlOptions: { key: Control; label: string; desc: string }[] = [
    { key: 'basic', label: isKo ? '기본 제어' : 'Basic Control', desc: isKo ? '전동밸브 + 자동드레인 로직' : 'Motorized valve + auto-drain logic' },
    { key: 'plc',   label: 'PLC 제어',                           desc: isKo ? 'PLC + HMI 터치패널' : 'PLC + HMI touch panel' },
    { key: 'smart', label: isKo ? '스마트 제어' : 'Smart Control', desc: isKo ? 'PLC + HMI + 원격통신(LTE/유선)' : 'PLC + HMI + remote comm. (LTE/wired)' },
  ]

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-navy-900">

      {/* 브레드크럼 */}
      <div className="bg-navy-800 border-b border-white/10 py-4">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: isKo ? '홈' : 'Home', href: '/' },
              { label: isKo ? '제품' : 'Products', href: '/products' },
              { label: isKo ? '스마트 여과드레인 시스템' : 'Smart Filter-Drain System' },
            ]}
          />
        </div>
      </div>

      {/* ── 히어로 섹션 ── */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* 이미지 갤러리 */}
          <AnimatedSection direction="left">
            <div className="aspect-[4/3] bg-navy-800 rounded-2xl border border-white/10 relative overflow-hidden">
              <Image
                src="/images/products/filter-drain-1.jpg"
                alt={isKo ? '스마트 여과드레인 시스템' : 'Smart Filter-Drain System'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-2 mt-3">
              {['/images/products/filter-drain-1.jpg', '/images/products/filter-drain-2.jpg', '/images/products/filter-drain-3.jpg'].map((img, i) => (
                <div key={i} className="relative w-20 h-16 rounded-lg overflow-hidden border border-white/10">
                  <Image src={img} alt={`filter-drain-${i + 1}`} fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* 제품 기본 정보 */}
          <AnimatedSection direction="right">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-medium px-3 py-1 rounded-full">
                  {isKo ? '여과/드레인' : 'Filtration/Drain'}
                </span>
                <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {isKo ? 'K-water 공동특허' : 'K-water Joint Patent'}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-2">
                {isKo ? '스마트 여과드레인 시스템' : 'Smart Filter-Drain System'}
                <span className="block text-base text-text-secondary font-normal mt-1 font-mono">WB-FD Series</span>
              </h1>

              <p className="text-text-secondary leading-relaxed mb-6 text-sm" style={{ wordBreak: 'keep-all' }}>
                {isKo
                  ? '정밀여과·수질측정·자동드레인을 하나의 모듈로 통합. 탁도 0.5 NTU 초과 시 5분 이내 자동 대응, 전·후단 탁도 실시간 비교로 여과효율 95% 이상 상시 검증.'
                  : 'Integrates precision filtration, water quality monitoring, and auto-drain in one module. Auto-responds within 5 minutes of 0.5 NTU exceedance; real-time pre/post turbidity comparison verifies ≥95% filtration efficiency continuously.'}
              </p>

              {/* 핵심 수치 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { v: '95%', l: isKo ? '여과 효율' : 'Filtration' },
                  { v: '5분', l: isKo ? '자동 대응' : 'Auto Response' },
                  { v: '7종', l: isKo ? '관경 라인업' : 'Pipe Sizes' },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-navy-800 border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-gold-500 text-xl font-bold">{v}</div>
                    <div className="text-text-secondary text-xs mt-0.5">{l}</div>
                  </div>
                ))}
              </div>

              {/* 특허 번호 */}
              <div className="bg-navy-800 border border-white/10 rounded-xl p-4 mb-6">
                <div className="text-text-secondary text-xs mb-1">{isKo ? '특허 정보' : 'Patent Info'}</div>
                <div className="text-white text-sm font-medium">
                  {isKo
                    ? '스마트 수질측정 및 정밀여과 시스템 — 제10-2658845호'
                    : 'Smart Water Quality Measurement & Precision Filtration System — No. 10-2658845'}
                </div>
                <div className="text-text-secondary text-xs mt-1">{isKo ? 'K-water 공동특허' : 'Joint patent with K-water'}</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {isKo ? '견적 문의하기' : 'Request a Quote'}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 모델 계열 비교 ── */}
      <section className="bg-navy-800/50 border-y border-white/10 py-14">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {isKo ? '모델 계열 선택' : 'Select a Series'}
              </h2>
              <p className="text-text-secondary text-sm">
                {isKo ? '적용 현장 규모에 맞는 계열을 선택하세요' : 'Choose the series that matches your site scale'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERIES.map((s, idx) => (
              <AnimatedSection key={s.id} delay={idx * 0.1}>
                <div className={`bg-navy-800 border-2 ${s.color} rounded-2xl p-6 flex flex-col h-full relative`}>
                  {s.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`text-xs font-bold px-4 py-1 rounded-full ${s.badge === '추천' ? 'bg-gold-500 text-navy-900' : 'bg-blue-500 text-white'}`}>
                        {isKo ? s.badge : s.badgeEn}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="text-gold-500 text-xs font-mono mb-1">{isKo ? `계열 ${s.id}` : `Series ${s.id}`}</div>
                    <h3 className="text-white text-lg font-bold">{isKo ? s.name : s.nameEn}</h3>
                    <div className="text-text-secondary font-mono text-xs mt-1">{isKo ? s.code : (s.codeEn ?? s.code)}</div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm flex-1">
                    <div className="flex gap-2">
                      <span className="text-text-secondary shrink-0">{isKo ? '관경' : 'Pipe'}</span>
                      <span className="text-white">{s.pipes.join(' / ')}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary shrink-0">{isKo ? '소재' : 'Material'}</span>
                      <span className="text-white">{s.material}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary shrink-0">{isKo ? '유량' : 'Flow'}</span>
                      <span className="text-white">{s.flow}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary shrink-0">{isKo ? '대상' : 'Target'}</span>
                      <span className="text-white text-xs leading-relaxed" style={{ wordBreak: 'keep-all' }}>{isKo ? s.target : s.targetEn}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="text-xs text-text-secondary mb-2">{isKo ? '기본 구성' : 'Base Config'}</div>
                    <ul className="space-y-1">
                      {(isKo ? s.config : s.configEn).map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-xs text-white">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <div className="text-xs text-text-secondary mt-3 mb-2">{isKo ? '옵션 추가' : 'Optional Add-ons'}</div>
                    <ul className="space-y-1">
                      {(isKo ? s.options : s.optionsEn).map((o) => (
                        <li key={o} className="flex items-start gap-1.5 text-xs text-text-secondary">
                          <span className="text-gold-500 shrink-0">+</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 구성 선택기 ── */}
      <section className="container-custom py-14">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              {isKo ? '맞춤 구성 선택기' : 'Product Configurator'}
            </h2>
            <p className="text-text-secondary text-sm">
              {isKo ? '현장 조건에 맞게 선택하면 추천 모델 코드가 자동으로 생성됩니다' : 'Select your site conditions to get a recommended model code'}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">

          {/* Step 1: 관경 */}
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <div className="text-xs text-gold-500 font-mono mb-1">STEP 1</div>
            <h3 className="text-white font-semibold mb-4">{isKo ? '관경 선택' : 'Select Pipe Size'}</h3>
            <div className="flex flex-wrap gap-2">
              {PIPE_OPTIONS.map((p) => {
                const isDisabled = false
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setSelPipe(p)
                      if ((p === '150A' || p === '200A') && selMeasurement === 'Basic') setSelMeasurement('Standard')
                      if ((p === '150A' || p === '200A') && selControl === 'basic') setSelControl('plc')
                    }}
                    disabled={isDisabled}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                      selPipe === p
                        ? 'bg-gold-500 border-gold-500 text-navy-900'
                        : 'border-white/20 text-white hover:border-gold-500/50'
                    }`}
                  >
                    {p}
                  </button>
                )
              })}
            </div>
            <div className="mt-3 text-xs text-text-secondary">
              {selPipe === '50A' && !isLarge
                ? isKo ? 'PVC 경량형 또는 SUS304 표준형 적용 가능' : 'PVC Lightweight or SUS304 Standard applicable'
                : isLarge
                  ? isKo ? 'SUS304 대형형 (계열 C)' : 'SUS304 Large-Scale (Series C)'
                  : isKo ? 'SUS304 표준형 (계열 B)' : 'SUS304 Standard (Series B)'}
            </div>
          </div>

          {/* Step 2: 필터 등급 */}
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <div className="text-xs text-gold-500 font-mono mb-1">STEP 2</div>
            <h3 className="text-white font-semibold mb-4">{isKo ? '필터 등급 선택' : 'Select Filter Grade'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FILTER_OPTIONS.map((f) => (
                <button
                  key={f.code}
                  type="button"
                  onClick={() => setSelFilter(f.code as FilterCode)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selFilter === f.code
                      ? 'border-gold-500 bg-gold-500/10'
                      : 'border-white/20 hover:border-gold-500/40'
                  }`}
                >
                  <div className="text-white font-bold text-sm">{f.label}</div>
                  <div className="text-text-secondary text-xs mt-0.5">{isKo ? f.sub : f.sub}</div>
                  <div className="text-text-secondary text-xs mt-1">{isKo ? `교체: ${f.cycle}` : `Cycle: ${f.cycle}`}</div>
                </button>
              ))}
            </div>
            {selFilter !== 'F-Custom' && (
              <div className="mt-3 text-xs text-text-secondary">
                {isKo
                  ? `추천 용도: ${FILTER_OPTIONS.find(f => f.code === selFilter)?.use}`
                  : `Recommended for: ${FILTER_OPTIONS.find(f => f.code === selFilter)?.use}`}
              </div>
            )}
          </div>

          {/* Step 3: 계측 구성 */}
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <div className="text-xs text-gold-500 font-mono mb-1">STEP 3</div>
            <h3 className="text-white font-semibold mb-4">{isKo ? '계측 구성 선택' : 'Select Measurement Setup'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {measurementOptions.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  disabled={isLarge && m.key === 'Basic'}
                  onClick={() => setSelMeasurement(m.key)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selMeasurement === m.key
                      ? 'border-gold-500 bg-gold-500/10'
                      : isLarge && m.key === 'Basic'
                        ? 'border-white/10 opacity-30 cursor-not-allowed'
                        : 'border-white/20 hover:border-gold-500/40'
                  }`}
                >
                  <div className="text-white font-bold text-sm">{m.label}</div>
                  <div className="text-text-secondary text-xs mt-1 leading-relaxed">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: 제어 방식 */}
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <div className="text-xs text-gold-500 font-mono mb-1">STEP 4</div>
            <h3 className="text-white font-semibold mb-4">{isKo ? '제어 방식 선택' : 'Select Control Method'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {controlOptions.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  disabled={isLarge && c.key === 'basic'}
                  onClick={() => setSelControl(c.key)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selControl === c.key
                      ? 'border-gold-500 bg-gold-500/10'
                      : isLarge && c.key === 'basic'
                        ? 'border-white/10 opacity-30 cursor-not-allowed'
                        : 'border-white/20 hover:border-gold-500/40'
                  }`}
                >
                  <div className="text-white font-bold text-sm">{c.label}</div>
                  <div className="text-text-secondary text-xs mt-1 leading-relaxed">{c.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 결과 */}
          <motion.div
            key={resolved.code}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gold-500/10 border border-gold-500/40 rounded-2xl p-6"
          >
            <div className="text-gold-500 text-xs font-mono mb-2">{isKo ? '추천 모델' : 'Recommended Model'}</div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-white text-2xl font-bold font-mono">{resolved.code}</div>
                <div className="text-text-secondary text-sm mt-1">
                  {isKo ? `계열 ${resolved.series} — ${resolved.name}` : `Series ${resolved.series} — ${resolved.name}`}
                  {' · '}
                  {isKo ? `필터 ${FILTER_OPTIONS.find(f => f.code === selFilter)?.label}` : `Filter ${FILTER_OPTIONS.find(f => f.code === selFilter)?.label}`}
                  {' · '}
                  {selMeasurement}
                  {' · '}
                  {controlOptions.find(c => c.key === selControl)?.label}
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                {isKo ? '견적 문의' : 'Get a Quote'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 핵심 성능 수치 ── */}
      <section className="bg-navy-800/50 border-y border-white/10 py-14">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
              {isKo ? '핵심 성능 수치' : 'Key Performance Figures'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PERF_SPECS.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-navy-800 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-gold-500 text-xl font-bold leading-tight">{s.value}</div>
                  <div className="text-text-secondary text-xs mt-1">{s.sub}</div>
                  <div className="text-white text-xs font-medium mt-2 leading-snug" style={{ wordBreak: 'keep-all' }}>{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 핵심 특장점 ── */}
      <section className="container-custom py-14">
        <AnimatedSection>
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
            {isKo ? '핵심 특장점' : 'Key Features'}
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 flex gap-4 items-start h-full">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ wordBreak: 'keep-all' }}>
                    {isKo ? f.title : f.titleEn}
                  </div>
                  <div className="text-text-secondary text-xs leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                    {isKo ? f.desc : f.descEn}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 경쟁 비교표 ── */}
      <section className="bg-navy-800/50 border-y border-white/10 py-14">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {isKo ? '왜 워터비인가?' : 'Why Waterbee?'}
              </h2>
              <p className="text-text-secondary text-sm">
                {isKo ? '기존 타사 제품과의 기능 비교' : 'Feature comparison with existing products'}
              </p>
            </div>
          </AnimatedSection>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-text-secondary font-normal py-3 pr-4 min-w-[130px]">
                    {isKo ? '항목' : 'Item'}
                  </th>
                  <th className="text-center text-text-secondary font-normal py-3 px-4 min-w-[160px]">
                    {isKo ? '타사 제품' : 'Competitor'}
                  </th>
                  <th className="text-center py-3 px-4 min-w-[200px]">
                    <span className="text-gold-500 font-bold">{isKo ? '워터비' : 'Waterbee'}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(showCompareDetail ? COMPARE_ROWS : COMPARE_ROWS.slice(0, 6)).map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2">
                    <td className="py-3 pr-4 text-text-secondary">{isKo ? row.label : row.labelEn}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.competitor === 'boolean' ? (
                        row.competitor
                          ? <CheckCircle className="w-4 h-4 text-white/40 mx-auto" />
                          : <XCircle className="w-4 h-4 text-red-400/60 mx-auto" />
                      ) : (
                        <span className="text-white/50">{isKo ? row.competitor : (row.competitorEn ?? String(row.competitor))}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-white font-medium">{isKo ? row.waterbee : row.waterbeeEn}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setShowCompareDetail(!showCompareDetail)}
              className="inline-flex items-center gap-1.5 text-text-secondary text-sm hover:text-white transition-colors"
            >
              {showCompareDetail
                ? <><ChevronUp className="w-4 h-4" />{isKo ? '접기' : 'Show less'}</>
                : <><ChevronDown className="w-4 h-4" />{isKo ? '전체 비교 보기' : 'Show full comparison'}</>}
            </button>
          </div>
        </div>
      </section>

      {/* ── 필터 등급표 ── */}
      <section className="container-custom py-14">
        <AnimatedSection>
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
            {isKo ? '필터 등급 선택 가이드' : 'Filter Grade Selection Guide'}
          </h2>
        </AnimatedSection>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-text-secondary">
                <th className="text-left py-3 pr-4 font-normal">{isKo ? '등급' : 'Grade'}</th>
                <th className="text-left py-3 px-4 font-normal">{isKo ? '여과 정밀도' : 'Precision'}</th>
                <th className="text-left py-3 px-4 font-normal">{isKo ? '교체 주기' : 'Replace Cycle'}</th>
                <th className="text-left py-3 px-4 font-normal hidden sm:table-cell">{isKo ? '추천 용도' : 'Recommended Use'}</th>
              </tr>
            </thead>
            <tbody>
              {FILTER_OPTIONS.map((f) => (
                <tr key={f.code} className="border-b border-white/5 hover:bg-white/2">
                  <td className="py-3 pr-4">
                    <span className="text-gold-500 font-mono font-bold">{f.code}</span>
                  </td>
                  <td className="py-3 px-4 text-white">{f.micron ? `${f.micron} μm` : isKo ? '협의' : 'Negotiable'}</td>
                  <td className="py-3 px-4 text-white">{f.cycle}</td>
                  <td className="py-3 px-4 text-text-secondary hidden sm:table-cell" style={{ wordBreak: 'keep-all' }}>{f.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-secondary text-xs mt-3">
          {isKo
            ? '* 다단 복합 배열: F-100 + F-10 조합 등 전처리-정밀여과 2단 구성 가능'
            : '* Multi-stage array: e.g. F-100 + F-10 dual-stage pre-treatment and precision filtration'}
        </p>
      </section>

      {/* ── 견적 문의 CTA ── */}
      <section className="bg-navy-800 border-t border-white/10 py-14">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isKo ? '현장에 맞는 구성으로 견적을 받아보세요' : 'Get a quote tailored to your site'}
            </h2>
            <p className="text-text-secondary text-sm mb-6">
              {isKo
                ? '관경·소재·필터·제어 옵션을 고려한 최적 구성을 제안해 드립니다'
                : 'We will propose the optimal configuration considering pipe size, material, filter, and control options'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              {isKo ? '견적 문의하기' : 'Request a Quote'}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
