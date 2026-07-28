'use client'

import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const heroProducts = [
  {
    slug: 'wbsc10',
    model: 'WBSC10',
    nameKo: '스마트 컨트롤러',
    nameEn: 'Smart Controller',
    image: '/images/products/wbsc10-front.png',
  },
  {
    slug: 'wbtu10',
    model: 'WBTU10',
    nameKo: '온라인 탁도계',
    nameEn: 'Online Turbidity Meter',
    image: '/images/products/wbtu10-photo-front.png',
  },
  {
    slug: 'wbcl10',
    model: 'WBCL10',
    nameKo: '온라인 잔류염소계',
    nameEn: 'Residual Chlorine Analyzer',
    image: '/images/products/wbcl10-photo-front.png',
  },
] as const

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const isKo = locale === 'ko'

  return (
    <section className="relative overflow-hidden bg-[#102019] pt-16 lg:pt-20">
      <div className="relative min-h-[700px] lg:min-h-[570px] xl:min-h-[650px] 2xl:min-h-[clamp(720px,70vh,820px)]">
        <Image
          src="/images/home/water-landscape.jpg"
          alt="Forested watershed and clear lake"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c1814]/45" />

        <div className="container-custom relative z-10 pt-14 sm:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase text-white/80">
            <span className="h-0.5 w-8 bg-gold-500" />
            {t('badge')}
          </div>

          <h1
            className={`max-w-[760px] font-bold leading-[1.12] tracking-normal text-white sm:text-5xl lg:text-6xl ${isKo ? 'text-[40px]' : 'text-[36px]'}`}
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
            className="mt-5 max-w-[610px] text-[15px] leading-7 text-white/80 sm:text-base"
            style={{ wordBreak: 'keep-all' }}
          >
            {t('subtitle')}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 bg-white px-6 text-sm font-semibold text-[#151a19] transition-colors hover:bg-[#f1f3f1]"
            >
              {t('cta_primary')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t('cta_secondary')}
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 h-[205px] border-t border-white/20 bg-white lg:h-[170px]">
          <div className="container-custom grid h-full grid-cols-3 border-l border-[#d7dcda]">
            {heroProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative flex min-w-0 items-center justify-center border-r border-[#d7dcda] px-2 pb-5 lg:justify-start lg:gap-5 lg:px-7 lg:pb-0"
              >
                <div className="relative h-[138px] w-[82px] shrink-0 sm:h-[150px] sm:w-[96px] lg:h-[150px] lg:w-[108px]">
                  <Image
                    src={product.image}
                    alt={isKo ? product.nameKo : product.nameEn}
                    fill
                    priority
                    className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 28vw, 110px"
                  />
                </div>
                <div className="hidden min-w-0 lg:block">
                  <div className="text-xs font-bold text-[#8c7200]">{product.model}</div>
                  <div className="mt-2 text-sm font-semibold leading-5 text-[#202725]">
                    {isKo ? product.nameKo : product.nameEn}
                  </div>
                </div>
                <div className="absolute bottom-3 text-[10px] font-bold text-[#596361] lg:hidden">
                  {product.model}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
