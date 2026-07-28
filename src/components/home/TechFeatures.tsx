'use client'

import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function TechFeatures() {
  const t = useTranslations('tech_features')
  const items = [0, 1, 2].map((index) => ({
    tag: t(`items.${index}.tag`),
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
  }))

  return (
    <section className="bg-[#f5f6f4] py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
          <div>
            <div className="mb-4 text-xs font-bold uppercase text-[#8c7200]">{t('badge')}</div>
            <h2
              className="text-3xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:text-4xl"
              dangerouslySetInnerHTML={{ __html: t('title').replace(/\n/g, '<br/>') }}
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-[#68716f] sm:text-base">{t('subtitle')}</p>
            <Link
              href="/technology"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]"
            >
              {t('cta')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid border-t border-[#aeb6b3] md:grid-cols-3">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-[#cbd1ce] py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-[#8c7200]">{item.tag}</span>
                  <span className="text-xs tabular-nums text-[#89918f]">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-xl font-semibold leading-7 text-[#171c1b]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#68716f]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
