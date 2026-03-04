'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react'
import type { Product } from '@/lib/products'
import ProductSpecTable from '@/components/products/ProductSpecTable'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'

type TabKey = 'overview' | 'specs' | 'features'

function ProductImageWithFallback({ src, alt, model, slug }: { src: string; alt: string; model: string; slug: string }) {
  const [error, setError] = useState(false)
  const detailPadding: Record<string, string> = {
    'wbcl10':    'p-2',
    'wbtu10':    'p-2',
    'wbtu-pro':  'p-10',
    'wbph10':    'p-8',
    'wbec10':    'p-8',
    'wbph-pbs01':'p-8',
    'wbec-cond': 'p-8',
  }
  const imgPad = detailPadding[slug] ?? 'p-4'
  if (error) {
    return (
      <>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
            <span className="text-gold-500 text-5xl font-black">W</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-navy-900/90 backdrop-blur-sm rounded-xl px-4 py-2">
          <span className="text-gold-500 font-mono font-bold text-sm uppercase">{model}</span>
        </div>
      </>
    )
  }
  return (
    <>
      <Image src={src} alt={alt} fill className={`object-contain ${imgPad}`} onError={() => setError(true)} sizes="(max-width: 1024px) 100vw, 50vw" />
      <div className="absolute bottom-4 left-4 bg-navy-900/90 backdrop-blur-sm rounded-xl px-4 py-2">
        <span className="text-gold-500 font-mono font-bold text-sm uppercase">{model}</span>
      </div>
    </>
  )
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const t = useTranslations('products')
  const tNav = useTranslations('nav')

  const [activeTab, setActiveTab] = useState<TabKey>('overview')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'overview', label: t('overview') },
    { key: 'specs', label: t('spec_table') },
    { key: 'features', label: t('features') },
  ]

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-navy-900">
      {/* 브레드크럼 */}
      <div className="bg-navy-800 border-b border-white/10 py-4">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: tNav('home'), href: '/' },
              { label: tNav('products'), href: '/products' },
              { label: isKo ? product.name : product.nameEn },
            ]}
          />
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* 이미지 갤러리 */}
          <AnimatedSection direction="left">
            <div className="aspect-[4/3] bg-navy-800 rounded-2xl border border-white/10 relative overflow-hidden">
              <ProductImageWithFallback src={product.image} alt={isKo ? product.name : product.nameEn} model={product.model} slug={product.slug} />
            </div>
          </AnimatedSection>

          {/* 제품 기본 정보 */}
          <AnimatedSection direction="right">
            <div>
              <div className="mb-2">
                <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-medium px-3 py-1 rounded-full">
                  {isKo ? product.category : product.categoryEn}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
                {isKo ? product.name : product.nameEn}
                <span className="block text-base text-text-secondary font-normal mt-1 font-mono uppercase">
                  {product.model}
                </span>
              </h1>
              <p className="text-text-secondary leading-relaxed mb-8 text-base">
                {isKo ? product.shortDescription : product.shortDescriptionEn}
              </p>

              {/* 주요 스펙 요약 (처음 4개) */}
              <div className="bg-navy-800 border border-white/10 rounded-xl p-5 mb-8">
                <div className="grid grid-cols-2 gap-3">
                  {product.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label} className="text-sm">
                      <div className="text-text-secondary text-xs mb-0.5">
                        {isKo ? spec.label : spec.labelEn}
                      </div>
                      <div className="text-white font-semibold">{isKo ? spec.value : spec.valueEn}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary flex-1 justify-center">
                  <Mail className="w-4 h-4" />
                  {t('inquiry')}
                </Link>
                <a href="tel:1555-3534" className="btn-secondary flex-1 justify-center">
                  <Phone className="w-4 h-4" />
                  1555-3534
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 탭 */}
        <div className="border-b border-white/10 mb-8">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-sm font-medium transition-all relative ${
                  activeTab === tab.key ? 'text-gold-500' : 'text-text-secondary hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        <AnimatedSection key={activeTab} direction="none">
          {activeTab === 'overview' && (
            <div className="max-w-3xl">
              <p className="text-text-secondary leading-relaxed text-base whitespace-pre-line">
                {isKo ? product.description : product.descriptionEn}
              </p>
            </div>
          )}
          {activeTab === 'specs' && <ProductSpecTable specs={product.specs} />}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              {(isKo ? product.features : product.featuresEn).map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-navy-800 border border-white/10 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>

        {/* 뒤로 가기 */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-gold-500 transition-colors text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {isKo ? '전체 제품 목록으로' : 'Back to all products'}
          </Link>
        </div>
      </div>
    </div>
  )
}
