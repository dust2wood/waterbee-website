'use client'

import { useState, useCallback } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/lib/products'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
import { PackageSearch, Sparkles, ChevronRight } from 'lucide-react'

// 그룹 서브카테고리 매핑 (표시 레이블 → 실제 product category 값)
const SUB_CATEGORY_MAP: Record<string, string[]> = {
  '광학계':   ['탁도', '용존산소'],
  '이온계':   ['이온'],
  'Optical':   ['Turbidity', 'Dissolved Oxygen'],
  'Ion Meter': ['Ion'],
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const t = useTranslations('products')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [selectedApplication, setSelectedApplication] = useState('all')
  const [selectedSubCategory, setSelectedSubCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const handleApplicationChange = useCallback((app: string) => {
    const y = window.scrollY
    setSelectedApplication(app)
    setSelectedSubCategory('all')
    setShowAll(false)
    requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior }))
  }, [])

  const handleSubCategoryChange = useCallback((sub: string) => {
    const y = window.scrollY
    setSelectedSubCategory(sub)
    requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior }))
  }, [])

  const isDefaultView = selectedApplication === 'all' && !showAll

  const filtered = products.filter((p) => {
    const appMatch = selectedApplication === 'all' || p.application.includes(selectedApplication)
    const catVal = isKo ? p.category : p.categoryEn
    const mapped = SUB_CATEGORY_MAP[selectedSubCategory]
    const subMatch = selectedSubCategory === 'all' || (mapped ? mapped.includes(catVal) : catVal === selectedSubCategory)
    return appMatch && subMatch
  })

  const displayProducts = isDefaultView ? products.filter((p) => p.featured) : filtered

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ProductFilter
        selectedApplication={selectedApplication}
        selectedSubCategory={selectedSubCategory}
        onApplicationChange={handleApplicationChange}
        onSubCategoryChange={handleSubCategoryChange}
        resultCount={displayProducts.length}
      />

      <div className="flex-1">
        {/* 추천 제품 헤더 */}
        {isDefaultView && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-white font-semibold text-sm">
                {isKo ? '추천 제품' : 'Featured Products'}
              </span>
              <span className="text-text-secondary text-xs">
                {isKo ? '— 워터비 대표 라인업' : '— Waterbee core lineup'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-1 text-text-secondary text-xs hover:text-gold-500 transition-colors"
            >
              {isKo ? '전체 제품 보기' : 'View All'}
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {displayProducts.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <PackageSearch className="w-16 h-16 text-text-secondary/30 mb-4" />
              <p className="text-text-secondary text-base">{t('no_results')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
