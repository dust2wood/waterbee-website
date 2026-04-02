'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { clsx } from 'clsx'
import { Filter, ChevronDown, ChevronRight } from 'lucide-react'

// 적용 분야 정의 (하위 카테고리는 products.ts의 category/categoryEn 값과 일치해야 함)
const APP_CONFIG = [
  {
    key: 'water_treatment',
    labelKo: '정수처리 · 상수도',
    labelEn: 'Water Treatment',
    subs: [
      { ko: '잔류염소', en: 'Residual Chlorine' },
      { ko: '탁도',    en: 'Turbidity' },
      { ko: 'pH',      en: 'pH' },
      { ko: 'EC',      en: 'EC' },
      { ko: '용존산소', en: 'Dissolved Oxygen' },
      { ko: '샘플링',   en: 'Sampling' },
      { ko: '소모품',   en: 'Consumables' },
    ],
  },
  {
    key: 'industrial_wastewater',
    labelKo: '산업 · 원수 · 하수처리',
    labelEn: 'Industrial & Wastewater',
    subs: [
      { ko: '탁도',    en: 'Turbidity' },
      { ko: '용존산소', en: 'Dissolved Oxygen' },
      { ko: '이온',    en: 'Ion' },
    ],
  },
  {
    key: 'smart_filter_drain',
    labelKo: '스마트 여과드레인',
    labelEn: 'Smart Filter Drain',
    subs: [
      { ko: '여과/드레인', en: 'Filtration/Drain' },
      { ko: '잔류염소',   en: 'Residual Chlorine' },
      { ko: '탁도',      en: 'Turbidity' },
    ],
  },
  {
    key: 'smart_farm',
    labelKo: '스마트팜',
    labelEn: 'Smart Farm',
    subs: [
      { ko: 'pH',     en: 'pH' },
      { ko: 'EC',     en: 'EC' },
      { ko: '스마트팜', en: 'Smart Farm' },
    ],
  },
]

interface ProductFilterProps {
  selectedApplication: string
  selectedSubCategory: string
  onApplicationChange: (app: string) => void
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
      {/* 전체 */}
      <button
        type="button"
        onClick={() => onApplicationChange('all')}
        className={clsx(
          'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 mb-2',
          selectedApplication === 'all'
            ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
            : 'text-text-secondary hover:text-white hover:bg-white/5',
        )}
      >
        {isKo ? '전체 제품' : 'All Products'}
      </button>

      {/* 적용 분야 아코디언 */}
      <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider px-1 mb-2 mt-4">
        {isKo ? '적용 분야' : 'Application'}
      </p>

      <div className="space-y-1">
        {APP_CONFIG.map((app) => {
          const isOpen = selectedApplication === app.key
          const label = isKo ? app.labelKo : app.labelEn

          return (
            <div key={app.key}>
              {/* 분야 버튼 */}
              <button
                type="button"
                onClick={() => onApplicationChange(isOpen ? 'all' : app.key)}
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
                <span>{label}</span>
              </button>

              {/* 하위 카테고리 */}
              {isOpen && (
                <div className="mt-1 ml-4 space-y-0.5 border-l border-gold-500/20 pl-3">
                  <button
                    type="button"
                    onClick={() => onSubCategoryChange('all')}
                    className={clsx(
                      'w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-150',
                      selectedSubCategory === 'all'
                        ? 'text-gold-500 font-semibold'
                        : 'text-text-secondary hover:text-white',
                    )}
                  >
                    {isKo ? '전체' : 'All'}
                  </button>
                  {app.subs.map((sub) => {
                    const subLabel = isKo ? sub.ko : sub.en
                    const isSubSelected = selectedSubCategory === subLabel
                    return (
                      <button
                        key={sub.ko}
                        type="button"
                        onClick={() => onSubCategoryChange(subLabel)}
                        className={clsx(
                          'w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-150',
                          isSubSelected
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

      {/* 초기화 */}
      {hasActiveFilter && (
        <button
          type="button"
          onClick={() => { onApplicationChange('all'); onSubCategoryChange('all') }}
          className="mt-6 w-full text-center text-text-secondary text-xs hover:text-gold-500 transition-colors py-2 border border-white/10 rounded-lg hover:border-gold-500/30"
        >
          {isKo ? '필터 초기화' : 'Reset Filter'}
        </button>
      )}
    </>
  )

  return (
    <aside className="w-full lg:w-56 shrink-0">
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
          <span>{isKo ? '적용 분야 필터' : 'Filter by Application'}</span>
          {hasActiveFilter && (
            <span className="bg-gold-500 text-navy-900 text-xs rounded-full px-1.5 py-0.5 font-bold leading-none">
              ON
            </span>
          )}
          <span className="ml-auto text-text-secondary text-xs">{resultCount}{isKo ? '개' : ' items'}</span>
          <ChevronDown className={clsx('w-4 h-4 transition-transform duration-200', mobileOpen && 'rotate-180')} />
        </button>

        {mobileOpen && (
          <div className="mt-2 bg-navy-800 border border-white/10 rounded-2xl p-4">
            {filterContent}
          </div>
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
