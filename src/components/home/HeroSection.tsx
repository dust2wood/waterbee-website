'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden bg-[#eef1ef] pt-16 lg:pt-20">
      <div className="container-custom relative min-h-[720px] sm:min-h-[720px] lg:min-h-[610px]">
        <div className="relative z-10 max-w-[620px] pt-16 sm:pt-20 lg:pt-28">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase text-[#48514f]">
            <span className="h-0.5 w-8 bg-gold-500" />
            {t('badge')}
          </div>

          <h1
            className="text-[40px] font-bold leading-[1.14] tracking-normal text-[#151a19] sm:text-5xl lg:text-6xl"
            style={{ wordBreak: 'keep-all' }}
          >
            {t('title').split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-[540px] text-[15px] leading-7 text-[#596361] sm:text-base"
            style={{ wordBreak: 'keep-all' }}
          >
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 bg-[#161b1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#303735]"
            >
              {t('cta_primary')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center border border-[#aab2af] px-6 text-sm font-semibold text-[#1d2422] transition-colors hover:border-[#1d2422]"
            >
              {t('cta_secondary')}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 h-[270px] sm:h-[300px] lg:bottom-5 lg:left-[48%] lg:h-[540px]">
          <div className="absolute right-[4%] top-0 h-[48%] w-[47%] lg:right-[2%] lg:top-[3%] lg:h-[45%] lg:w-[54%]">
            <Image
              src="/images/products/wbsc10-front.png"
              alt="WBSC10 Smart Controller"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 48vw, 30vw"
            />
          </div>
          <div className="absolute bottom-0 left-[4%] h-[68%] w-[43%] lg:left-[1%] lg:h-[66%] lg:w-[47%]">
            <Image
              src="/images/products/wbtu10-front.png"
              alt="WBTU10 Online Turbidity Meter"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 44vw, 27vw"
            />
          </div>
          <div className="absolute bottom-0 right-[3%] h-[67%] w-[42%] lg:right-[1%] lg:h-[69%] lg:w-[46%]">
            <Image
              src="/images/products/wbcl10-front.png"
              alt="WBCL10 Online Residual Chlorine Analyzer"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 43vw, 26vw"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-4 z-10 hidden border-l border-[#9ca5a2] pl-4 text-xs leading-5 text-[#596361] lg:block">
          WBSC10 / WBTU10 / WBCL10
          <br />
          ONLINE WATER QUALITY INSTRUMENTS
        </div>
      </div>
    </section>
  )
}
