'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { clsx } from 'clsx'
import { Filter, ChevronDown, ChevronRight, Sparkles } from 'lucide-react'

export const APP_CONFIG = [
  {
    key: 'water_treatment',
    labelKo: '정수처리·상수도',
    labelEn: 'Water Treatment',
    subs: [
      { ko: '센서부',     en: 'Sensors' },
      { ko: '샘플링 수조', en: 'Sampling Tank' },
      { ko: '소모품',     en: 'Consumables' },
    ],
  },
  {
    key: 'industrial_wastewater',
    labelKo: '산업·원수·하수처리',
    labelEn: 'Industrial & Wastewater',
    subs: [
      { ko: '광학계', en: 'Optical' },
      { ko: '이온계', en: 'Ion Meter' },
    ],
  },
  {
    key: 'smart_filter_drain',
    labelKo: '스마트 여과드레인',
    labelEn: 'Smart Filter Drain',
    subs: [
      { ko: '여과/드레인', en: 'Filtration/Drain' },
      { ko: '센서부',     en: 'Sensors' },
    ],
  },
  {
    key: 'smart_farm',
    labelKo: '스마트팜',
    labelEn: 'Smart Farm',
    subs: [],
  },
]

interface ProductFilterProps {
  selectedApplication: string
  selectedSubCategory: string
  onApplicationChange: (app: string, defaultSub: string) => void
  onSubCategoryChange: (sub: string) => void
  resultCount: number
}

export default function ProductFilter({
  selectedApplication,
  selectedSubCategory,
  onApplicationChange,
  onSubCategoryChange,
  resultCount,
}: ProductFilterProps) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [mobileOpen, setMobileOpen] = useState(false)
  const hasActiveFilter = selectedApplication !== 'all'

  const filterContent = (
    <>
      {/* 추천 제품 버튼 */}
      <button
        type="button"
        onClick={() => onApplicationChange('all', 'all')}
        className={clsx(
          'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-2 mb-4',
          !hasActiveFilter
            ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
            : 'text-text-secondary hover:text-white hover:bg-white/5',
        )}
      >
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>{isKo ? '추천 제품' : 'Featured Products'}</span>
      </button>

      <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider px-1 mb-2">
        {isKo ? '적용 분야' : 'Application'}
      </p>

      <div className="space-y-1">
        {APP_CONFIG.map((app) => {
          const isOpen = selectedApplication === app.key
          const label = isKo ? app.labelKo : app.labelEn
          const firstSub = app.subs.length > 0
            ? (isKo ? app.subs[0].ko : app.subs[0].en)
            : 'all'

          return (
            <div key={app.key}>
              <button
                type="button"
                onClick={() => {
                  if (isOpen) {
                    onApplicationChange('all', 'all')
                  } else {
                    onApplicationChange(app.key, firstSub)
                  }
                }}
                className={clsx(
                  'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-2',
                  isOpen
                    ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
                    : 'text-text-secondary hover:text-white hover:bg-white/5',
                )}
              >
                {isOpen
                  ? <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                  : <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                }
                <span className="whitespace-nowrap">{label}</span>
              </button>

              {/* 하위 카테고리 (전체 없음, 자동 선택) */}
              {isOpen && app.subs.length > 0 && (
                <div className="mt-1 ml-4 space-y-0.5 border-l border-gold-500/20 pl-3">
                  {app.subs.map((sub) => {
                    const subLabel = isKo ? sub.ko : sub.en
                    return (
                      <button
                        key={sub.ko}
                        type="button"
                        onClick={() => onSubCategoryChange(subLabel)}
                        className={clsx(
                          'w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-150',
                          selectedSubCategory === subLabel
                            ? 'text-gold-500 font-semibold'
                            : 'text-text-secondary hover:text-white',
                        )}
                      >
                        {subLabel}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <aside className="w-full lg:w-60 shrink-0">
      {/* 모바일 */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={clsx(
            'w-full flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all',
            hasActiveFilter
              ? 'bg-gold-500/10 text-gold-500 border-gold-500/30'
              : 'bg-navy-800 text-white border-white/10',
          )}
        >
          <Filter className="w-4 h-4" />
          <span>{isKo ? '적용 분야 필터' : 'Filter'}</span>
          {hasActiveFilter && (
            <span className="bg-gold-500 text-navy-900 text-xs rounded-full px-1.5 py-0.5 font-bold leading-none">ON</span>
          )}
          <span className="ml-auto text-text-secondary text-xs">{resultCount}{isKo ? '개' : ''}</span>
          <ChevronDown className={clsx('w-4 h-4 transition-transform duration-200', mobileOpen && 'rotate-180')} />
        </button>
        {mobileOpen && (
          <div className="mt-2 bg-navy-800 border border-white/10 rounded-2xl p-4">{filterContent}</div>
        )}
      </div>

      {/* PC 사이드바 */}
      <div className="hidden lg:block">
        <div className="bg-navy-800 border border-white/10 rounded-2xl p-5 sticky top-24">
          <div className="flex items-center gap-2 mb-5">
            <Filter className="w-4 h-4 text-gold-500" />
            <h2 className="text-white font-semibold text-sm">{isKo ? '제품 필터' : 'Filter'}</h2>
            <span className="ml-auto text-text-secondary text-xs">{resultCount}{isKo ? '개' : ''}</span>
          </div>
          {filterContent}
        </div>
      </div>
    </aside>
  )
}
