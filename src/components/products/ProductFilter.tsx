'use client'

import { useTranslations, useLocale } from 'next-intl'
import { clsx } from 'clsx'
import { Filter } from 'lucide-react'
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

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-4 h-4 text-gold-500" />
          <h2 className="text-white font-semibold text-sm">{t('filter_title')}</h2>
          <span className="ml-auto text-text-secondary text-xs">{t('result_count', { count: resultCount })}</span>
        </div>

        {/* 카테고리 */}
        <div className="mb-6">
          <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
            {t('category')}
          </h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
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
        {(selectedCategory !== 'all' || selectedApplication !== 'all') && (
          <button
            onClick={() => {
              onCategoryChange('all')
              onApplicationChange('all')
            }}
            className="mt-6 w-full text-center text-text-secondary text-xs hover:text-gold-500 transition-colors py-2 border border-white/10 rounded-lg hover:border-gold-500/30"
          >
            {t('reset')}
          </button>
        )}
      </div>
    </aside>
  )
}
