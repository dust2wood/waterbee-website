'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/lib/products'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
import { PackageSearch } from 'lucide-react'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const t = useTranslations('products')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState('all')

  const filtered = products.filter((p) => {
    const catValue = isKo ? p.category : p.categoryEn
    const catMatch = selectedCategory === 'all' || catValue === selectedCategory
    const appMatch =
      selectedApplication === 'all' || p.application.includes(selectedApplication)
    return catMatch && appMatch
  })

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ProductFilter
        selectedCategory={selectedCategory}
        selectedApplication={selectedApplication}
        onCategoryChange={setSelectedCategory}
        onApplicationChange={setSelectedApplication}
        resultCount={filtered.length}
      />

      <div className="flex-1">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((product, index) => (
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
