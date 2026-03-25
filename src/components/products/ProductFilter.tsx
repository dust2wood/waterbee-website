'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { clsx } from 'clsx'
import { Filter, ChevronDown } from 'lucide-react'
import { getAllProducts } from '@/lib/products'

const applications = ['all', 'water_treatment', 'smart_farm', 'smart_filter_drain', 'industrial_wastewater']

interface ProductFilterProps {
  selectedCategory: string
  selectedApplication: string
  onCategoryChange: (cat: string) => void
  onApplicationChange: (app: string) => void
  resultCount: number
}

export default function ProductFilter({
  selectedCategory,
  selectedApplication,
  onCategoryChange,
  onApplicationChange,
  resultCount,
}: ProductFilterProps) {
  const t = useTranslations('products.filter')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const allProducts = getAllProducts()
  const categories = ['all', ...Array.from(new Set(allProducts.map((p) => isKo ? p.category : p.categoryEn)))]
  const [mobileOpen, setMobileOpen] = useState(false)
  const hasActiveFilter = selectedCategory !== 'all' || selectedApplication !== 'all'

  const filterContent = (
    <>
      {/* 카테고리 */}
      <div className="mb-6">
        <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
          {t('category')}
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150',
                selectedCategory === cat
                  ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
                  : 'text-text-secondary hover:text-white hover:bg-white/5',
              )}
            >
              {cat === 'all' ? t('all') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 적용 분야 */}
      <div>
        <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
          {t('application')}
        </h3>
        <div className="space-y-1">
          {applications.map((app) => {
            const label =
              app === 'all'
                ? t('all')
                : app === 'water_treatment'
                ? t('water_treatment')
                : app === 'smart_farm'
                ? t('smart_farm')
                : app === 'smart_filter_drain'
                ? t('smart_filter_drain')
                : t('industrial_wastewater')
            return (
              <button
                key={app}
                type="button"
                onClick={() => onApplicationChange(app)}
                className={clsx(
                  'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150',
                  selectedApplication === app
                    ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
                    : 'text-text-secondary hover:text-white hover:bg-white/5',
                )}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 초기화 */}
      {hasActiveFilter && (
        <button
          type="button"
          onClick={() => {
            onCategoryChange('all')
            onApplicationChange('all')
          }}
          className="mt-6 w-full text-center text-text-secondary text-xs hover:text-gold-500 transition-colors py-2 border border-white/10 rounded-lg hover:border-gold-500/30"
        >
          {t('reset')}
        </button>
      )}
    </>
  )

  return (
    <aside className="w-full lg:w-64 shrink-0">
      {/* 모바일: 탭 토글 */}
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
          <span>{t('filter_title')}</span>
          {hasActiveFilter && (
            <span className="bg-gold-500 text-navy-900 text-xs rounded-full px-1.5 py-0.5 font-bold leading-none">
              ON
            </span>
          )}
          <span className="ml-auto text-text-secondary text-xs">{t('result_count', { count: resultCount })}</span>
          <ChevronDown className={clsx('w-4 h-4 transition-transform duration-200', mobileOpen && 'rotate-180')} />
        </button>

        {mobileOpen && (
          <div className="mt-2 bg-navy-800 border border-white/10 rounded-2xl p-4">
            {filterContent}
          </div>
        )}
      </div>

      {/* PC: 기존 sticky 사이드바 */}
      <div className="hidden lg:block">
        <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 sticky top-24">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-gold-500" />
            <h2 className="text-white font-semibold text-sm">{t('filter_title')}</h2>
            <span className="ml-auto text-text-secondary text-xs">{t('result_count', { count: resultCount })}</span>
          </div>
          {filterContent}
        </div>
      </div>
    </aside>
  )
}
