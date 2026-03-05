'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import type { Product } from '@/lib/products'
import { clsx } from 'clsx'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations('products')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [imgError, setImgError] = useState(false)

  return (
    <Link href={`/products/${product.slug}`} className={clsx('block group', className)}>
      <div className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5 h-full flex flex-col">
        {/* 이미지: 해당 경로에 이미지가 있으면 표시, 없으면 W 플레이스홀더 */}
        <div className="aspect-[4/3] bg-navy-700 relative overflow-hidden">
          {!imgError && (
            <Image
              src={product.image}
              alt={isKo ? product.name : product.nameEn}
              fill
              className={(() => {
                const pad: Record<string, string> = {
                  'wbcl10': 'p-1',
                  'wbtu10': 'p-1',
                  'wbtu-pro': 'p-8',
                  'wbph10': 'p-10',
                  'wbec10': 'p-10',
                  'wbph-pbs01': 'p-10',
                  'wbec-cond': 'p-10',
                }
                const pos: Record<string, string> = {
                  'wbtu10': 'object-left',
                }
                return `object-contain ${pad[product.slug] ?? 'p-4'} ${pos[product.slug] ?? ''}`
              })()}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          )}
          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
                <span className="text-gold-500 text-4xl font-black">W</span>
              </div>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-gold-500/20 border border-gold-500/30 text-gold-500 text-xs font-medium px-2.5 py-1 rounded-full">
              {isKo ? product.category : product.categoryEn}
            </span>
          </div>
          <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-sm rounded-md px-2 py-1">
            <span className="text-text-secondary font-mono text-xs uppercase">{product.model}</span>
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-500 transition-colors">
            {isKo ? product.name : product.nameEn}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {isKo ? product.shortDescription : product.shortDescriptionEn}
          </p>

          {/* 주요 스펙 미리보기 (처음 2개) */}
          <div className="border-t border-white/10 pt-4 mb-4 space-y-1.5">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={spec.label} className="flex items-start justify-between gap-2 text-xs">
                <span className="text-text-secondary shrink-0">{isKo ? spec.label : spec.labelEn}</span>
                <span className="text-white font-medium text-right">{isKo ? spec.value : spec.valueEn}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            {product.purchasable ? (
              <div className="flex items-center justify-between w-full">
                <span className="text-gold-500 text-sm font-bold">
                  {isKo ? product.price : product.priceEn}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-text-secondary border border-white/20 rounded-md px-2.5 py-1 group-hover:border-gold-500/40 group-hover:text-gold-500 transition-all">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {isKo ? '구매 문의' : 'Inquire'}
                </span>
              </div>
            ) : (
              <span className="text-gold-500 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {t('overview')}
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
