'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function CtaBanner() {
  const t = useTranslations('cta_banner')

  return (
    <section className="bg-[#f5c400] py-14 lg:py-16">
      <div className="container-custom flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-normal text-[#151a19] lg:text-4xl">{t('title')}</h2>
          <p className="mt-3 text-base text-[#4c4630]">{t('subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 bg-[#151a19] px-6 text-sm font-semibold text-white hover:bg-[#303634]"
          >
            {t('cta')}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:1555-3534"
            className="inline-flex h-12 items-center gap-2 border border-[#151a19] px-6 text-sm font-semibold text-[#151a19]"
          >
            <Phone className="h-4 w-4" />
            1555-3534
          </a>
        </div>
      </div>
    </section>
  )
}
