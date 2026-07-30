'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function ApplicationsSection() {
  const t = useTranslations('applications')

  return (
    <section className="bg-[#161c1b] text-white">
      <div className="grid min-h-[640px] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-[max(3rem,calc((100vw-80rem)/2))] lg:py-24 lg:pr-16">
          <div className="max-w-lg">
            <div className="mb-5 text-xs font-bold uppercase text-[#f5c400]">{t('badge')}</div>
            <h2 className="text-3xl font-bold leading-[1.2] tracking-normal lg:text-5xl">{t('title')}</h2>
            <p className="mt-6 text-base leading-8 text-[#b7c0bd]">{t('subtitle')}</p>

            <dl className="mt-10 border-t border-white/25">
              {[0, 1, 2].map((index) => (
                <div key={index} className="grid grid-cols-[72px_1fr] gap-4 border-b border-white/15 py-5">
                  <dt className="text-xs font-semibold text-[#f5c400]">0{index + 1}</dt>
                  <dd>
                    <div className="text-sm font-semibold text-white">{t(`items.${index}.title`)}</div>
                    <div className="mt-1 text-sm leading-6 text-[#aeb8b5]">{t(`items.${index}.description`)}</div>
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/products/filter-drain"
              className="mt-9 inline-flex h-12 items-center gap-2 bg-[#f5c400] px-6 text-sm font-semibold text-[#151a19] transition-colors hover:bg-[#ffd633]"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="/images/products/filter-drain-1.jpg"
            alt="Waterbee Smart Filter-Drain System"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7 [text-shadow:0_1px_5px_rgba(0,0,0,0.72)]">
            <div className="text-[11px] font-bold uppercase text-[#f5c400]">WB-FD</div>
            <div className="mt-1 text-sm font-semibold">SMART FILTER-DRAIN SYSTEM</div>
          </div>
        </div>
      </div>
    </section>
  )
}
