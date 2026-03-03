'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { getFeaturedProducts } from '@/lib/products'

export default function ProductHighlight() {
  const t = useTranslations('product_highlight')
  const products = getFeaturedProducts()

  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-0"
            />
            <Link
              href="/products"
              className="shrink-0 inline-flex items-center gap-2 text-gold-500 font-semibold text-sm hover:gap-3 transition-all group"
            >
              {t('view_all')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <AnimatedSection key={product.slug} delay={index * 0.1}>
              <Link href={`/products/${product.slug}`} className="block group">
                <div className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5 h-full">
                  {/* 이미지 영역 */}
                  <div className="aspect-[4/3] bg-navy-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center">
                        <span className="text-gold-500 text-3xl font-bold">W</span>
                      </div>
                    </div>
                    {/* 제품 이미지 (실제 이미지 추가 시) */}
                    {/* <Image src={product.image} alt={product.name} fill className="object-cover" /> */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold-500/20 border border-gold-500/30 text-gold-500 text-xs font-medium px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="p-5">
                    <div className="text-text-secondary text-xs font-mono mb-1">{product.model}</div>
                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-500 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t('view_detail')}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
