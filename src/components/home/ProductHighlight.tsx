'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { getFeaturedProducts } from '@/lib/products'

const slugPadding: Record<string, string> = {
  'wbcl10':    'p-0',
  'wbtu10':    'p-0',
  'wbtu-pro':  'p-10',
  'wbph10':    'p-12',
  'wbec10':    'p-12',
  'wbph-pbs01':'p-12',
  'wbec-cond': 'p-12',
}

function ProductImage({ src, alt, slug }: { src: string; alt: string; slug: string }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center">
          <span className="text-gold-500 text-3xl font-bold">W</span>
        </div>
      </div>
    )
  }
  const pad = slugPadding[slug] ?? 'p-4'
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-contain ${pad}`}
      onError={() => setError(true)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  )
}

export default function ProductHighlight() {
  const t = useTranslations('product_highlight')
  const locale = useLocale()
  const isKo = locale === 'ko'
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
                    <ProductImage src={product.image} alt={isKo ? product.name : product.nameEn} slug={product.slug} />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-gold-500/20 border border-gold-500/30 text-gold-500 text-xs font-medium px-2.5 py-1 rounded-full">
                        {isKo ? product.category : product.categoryEn}
                      </span>
                    </div>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="p-5">
                    <div className="text-text-secondary text-xs font-mono mb-1 uppercase">{product.model}</div>
                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-500 transition-colors">
                      {isKo ? product.name : product.nameEn}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-4 line-clamp-2">
                      {isKo ? product.shortDescription : product.shortDescriptionEn}
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
