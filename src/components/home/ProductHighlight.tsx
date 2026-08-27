'use client'

import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getFeaturedProducts } from '@/lib/products'

const imageSizing: Record<string, string> = {
  wbsc10: 'h-[70%] w-[78%]',
  wbtu10: 'h-[87%] w-[85%]',
  wbfc10: 'h-[87%] w-[85%]',
  wbph10: 'h-[61%] w-[54%]',
  wbec10: 'h-[55%] w-[48%]',
}

export default function ProductHighlight() {
  const t = useTranslations('product_highlight')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const products = getFeaturedProducts()

  return (
    <section className="bg-white pb-16 pt-10 lg:pb-28 lg:pt-10">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#cfd5d2] pb-6 sm:flex-row sm:items-end sm:justify-between lg:mb-10 lg:pb-8">
          <div>
            <div className="mb-3 text-xs font-bold uppercase text-[#8c7200]">{t('badge')}</div>
            <h2 className="text-3xl font-bold tracking-normal text-[#151a19] lg:text-4xl">{t('title')}</h2>
            <p className="mt-3 text-sm leading-6 text-[#68716f] sm:text-base">{t('subtitle')}</p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f2927] hover:text-[#8c7200]"
          >
            {t('view_all')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#d8ddda] lg:grid-cols-5">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex min-h-[360px] flex-col border-b border-r border-[#d8ddda] bg-white transition-colors hover:bg-[#fafbf9] sm:min-h-[430px]"
            >
              <div className="relative flex h-[220px] items-center justify-center bg-[#f1f3f1] sm:h-[285px]">
                <div className={`relative ${imageSizing[product.slug] ?? 'h-[78%] w-[78%]'}`}>
                  <Image
                    src={product.image}
                    alt={isKo ? product.name : product.nameEn}
                    fill
                    className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.025]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="text-[11px] font-bold uppercase text-[#8c7200]">{product.model}</div>
                <h3 className="mt-2 min-h-12 text-base font-semibold leading-6 text-[#171c1b]">
                  {isKo ? product.name : product.nameEn}
                </h3>
                <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                  <div>
                    <div className="text-[11px] text-[#78817f]">
                      {isKo ? product.specs[0].label : product.specs[0].labelEn}
                    </div>
                    <div className="mt-1 text-xs font-medium leading-5 text-[#303836]">
                      {isKo ? product.specs[0].value : product.specs[0].valueEn}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8d9693] transition-colors group-hover:text-[#151a19]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
