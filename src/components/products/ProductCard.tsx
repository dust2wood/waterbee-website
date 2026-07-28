'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'
import { Link } from '@/i18n/navigation'
import type { Product } from '@/lib/products'

const imageSizing: Record<string, string> = {
  wbsc10: 'h-[72%] w-[72%]',
  wbtu10: 'h-[84%] w-[82%]',
  wbcl10: 'h-[84%] w-[82%]',
  wbph10: 'h-[62%] w-[42%]',
  wbec10: 'h-[54%] w-[35%]',
  'wbph-pbs01': 'h-[82%] w-[56%]',
  'wbec-cond': 'h-[82%] w-[56%]',
  'ph-ec-board': 'h-[78%] w-[92%]',
  'sampling-tank': 'h-[82%] w-[78%]',
  'wbcl10-electrode-kit': 'h-[74%] w-[82%]',
  'wbtu10-lamp-kit': 'h-[74%] w-[82%]',
}

export default function ProductCard({ product, className }: { product: Product; className?: string }) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const isPhoto = product.slug === 'filter-drain'

  return (
    <Link
      href={`/products/${product.slug}`}
      className={clsx('group flex min-h-[520px] flex-col border-b border-r border-[#d7dcda] bg-white', className)}
    >
      <div className="relative flex h-[330px] items-center justify-center overflow-hidden bg-[#f1f3f1]">
        {isPhoto ? (
          <Image
            src={product.image}
            alt={isKo ? product.name : product.nameEn}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className={`relative ${imageSizing[product.slug] ?? 'h-[75%] w-[72%]'}`}>
            <Image
              src={product.image}
              alt={isKo ? product.name : product.nameEn}
              fill
              unoptimized={product.image.endsWith('.svg')}
              className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase text-[#8c7200]">{product.model}</span>
          <span className="text-[11px] text-[#7b8481]">{isKo ? product.category : product.categoryEn}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-7 text-[#171c1b]">
          {isKo ? product.name : product.nameEn}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#68716f]">
          {isKo ? product.shortDescription : product.shortDescriptionEn}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#e0e4e2] pt-5">
          <div className="grid gap-1 text-xs">
            <span className="text-[#8a9390]">{isKo ? product.specs[0].label : product.specs[0].labelEn}</span>
            <span className="font-medium text-[#303735]">{isKo ? product.specs[0].value : product.specs[0].valueEn}</span>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8a9390] transition-colors group-hover:text-[#171c1b]" />
        </div>
      </div>
    </Link>
  )
}
