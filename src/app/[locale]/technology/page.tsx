import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { ArrowRight, Bluetooth, BrainCircuit, Gauge, ShieldCheck, Wifi, Wrench } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, technologyPageJsonLd } from '@/lib/structuredData'
import { getTechnologyContent } from '@/lib/technologyContent'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/technology',
    title: locale === 'ko' ? '수질계측 핵심 기술' : 'Water-Quality Measurement Technology',
    description:
      locale === 'ko'
        ? '회전전극식 잔류염소 측정, 기포 저감형 탁도 광학계, 소모품 수명과 Wi-Fi·Bluetooth 무선 연결 및 설명 가능한 엣지 AI 개발 방향을 소개합니다.'
        : 'Explore rotating-electrode chlorine measurement, bubble-reduced turbidity optics, consumable lifecycles, and the Wi-Fi, Bluetooth and explainable edge-AI roadmap.',
    keywords:
      locale === 'ko'
        ? ['회전전극식 잔류염소', '탁도 기포 저감', '수질계측기 소모품 수명', '수질계측기 무선 연결', '수질 엣지 AI']
        : ['rotating electrode residual chlorine', 'turbidity bubble reduction', 'instrument consumable life', 'wireless water monitoring', 'edge AI water quality'],
  })
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const copy = getTechnologyContent(locale)

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: isKo ? '홈' : 'Home' },
          { name: isKo ? '기술' : 'Technology', path: '/technology' },
        ])}
      />
      <JsonLd data={technologyPageJsonLd(locale)} />

      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-10 lg:py-14">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.eyebrow}</div>
            <h1 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-normal text-[#151a19] lg:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-[#596361] lg:text-lg">{copy.intro}</p>
            <div className="mt-5 text-xs font-medium text-[#7a8380]">
              {isKo ? '기술자료 · 발행 주식회사 워터비 · 최종 업데이트 ' : 'Technical reference · Published by Waterbee · Updated '}
              <time dateTime="2026-09-18">{isKo ? '2026.09.18' : 'September 18, 2026'}</time>
            </div>
          </div>

          <div className="mt-8 grid border-t border-[#9fa8a5] sm:grid-cols-2 lg:grid-cols-4">
            {copy.pillars.map(([number, title, description]) => (
              <div key={number} className="border-b border-[#cbd1ce] py-6 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <div className="text-xs font-semibold text-[#8c7200]">{number}</div>
                <h2 className="mt-4 break-keep text-lg font-semibold leading-7 text-[#202725]">{title}</h2>
                <p className="mt-3 break-keep text-sm leading-6 text-[#68716f]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-10 lg:pt-16">
        <div className="container-custom grid gap-6 border-b border-[#9fa8a5] pb-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.measurementEyebrow}</div>
            <h2 className="mt-4 max-w-md break-keep text-2xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:text-3xl">
              {copy.measurementTitle}
            </h2>
          </div>
          <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-7 lg:text-base">{copy.measurementIntro}</p>
        </div>
      </section>

      {copy.measurementSections.map((section, index) => (
        <section key={section.eyebrow} className="border-b border-[#e4e8e5] bg-white">
          <div className={`container-custom grid items-center gap-6 py-8 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:py-12 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <figure className="min-w-0">
              <div className={`relative mx-auto w-full ${index === 0 ? 'aspect-[4/5] max-w-[480px]' : 'aspect-[4/3]'}`}>
                <Image src={section.image} alt={section.imageCaption} fill className="object-contain" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw" />
              </div>
              <figcaption className="mt-4 text-center text-xs leading-5 text-[#68716f]">{section.imageCaption}</figcaption>
            </figure>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{section.eyebrow}</div>
              <h2 className="mt-5 break-keep text-2xl font-bold leading-[1.35] tracking-normal text-[#151a19]">{section.title}</h2>
              <p className="mt-6 break-keep text-base leading-8 text-[#596361]">{section.description}</p>

              <div className="mt-6 grid grid-cols-3 border-y border-[#aeb6b3]">
                {section.metrics.map(([value, label]) => (
                  <div key={label} className="flex min-h-[112px] flex-col items-center justify-center border-r border-[#d2d7d4] px-2 py-4 text-center last:border-r-0 sm:px-4">
                    <div className="break-keep text-sm font-bold leading-6 text-[#202725] sm:text-base lg:text-lg">{value}</div>
                    <div className="mt-2 min-h-8 break-keep text-[11px] leading-4 text-[#7a8380]">{label}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-6 border-t border-[#d2d7d4]">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 border-b border-[#d2d7d4] py-4 text-sm leading-6 text-[#303735]">
                    <span aria-hidden="true" className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-[#8c7200]" />
                    <span className="break-keep">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#151a19] py-10 text-white lg:py-16">
        <div className="container-custom">
          <div className="grid gap-6 border-b border-white/20 pb-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c400]">
                <Wrench className="h-4 w-4" />
                {copy.lifecycle.eyebrow}
              </div>
              <h2 className="mt-4 max-w-lg break-keep text-2xl font-bold leading-[1.25] tracking-normal lg:text-3xl">{copy.lifecycle.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#b7c0bd] lg:pt-7 lg:text-base">{copy.lifecycle.intro}</p>
          </div>

          <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {copy.lifecycle.items.map((item) => (
              <article key={item.subject} className="bg-[#151a19] p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5c400]">{item.kind}</div>
                <h3 className="mt-5 break-keep text-lg font-semibold leading-7 text-white">{item.subject}</h3>
                <div className="mt-4 text-2xl font-bold text-white">{item.cycle}</div>
                <p className="mt-4 break-keep text-sm leading-7 text-[#aeb8b5]">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex gap-3 border-l-2 border-[#f5c400] pl-5 text-xs leading-6 text-[#aeb8b5] sm:text-sm">
            <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#f5c400]" />
            <p className="break-keep">{copy.lifecycle.note}</p>
          </div>
        </div>
      </section>

      <section id="controller" className="scroll-mt-24 bg-[#f5f6f4] py-10 lg:py-16">
        <div className="container-custom">
          <div className="grid gap-6 border-b border-[#9fa8a5] pb-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
                <Gauge className="h-4 w-4" />
                {copy.controller.eyebrow}
              </div>
              <h2 className="mt-4 max-w-lg break-keep text-2xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:text-3xl">{copy.controller.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-7 lg:text-base">{copy.controller.intro}</p>
          </div>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <article className="border border-[#d0d6d3] bg-white p-7 lg:p-10">
              <div className="inline-flex rounded-full bg-[#eef1ef] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#596361]">
                {copy.controller.current.badge}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#151a19]">{copy.controller.current.title}</h3>
              <p className="mt-4 break-keep text-sm leading-7 text-[#68716f]">{copy.controller.current.description}</p>
              <ul className="mt-7 border-t border-[#d2d7d4]">
                {copy.controller.current.features.map((feature) => (
                  <li key={feature} className="border-b border-[#d2d7d4] py-3 text-sm leading-6 text-[#303735]">{feature}</li>
                ))}
              </ul>
              <Link href="/products/wbsc10" className="mt-7 inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
                {copy.controller.current.link}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="min-w-0 bg-[#202725] p-5 text-white sm:p-7 lg:p-10">
              <div className="inline-flex rounded-full border border-[#f5c400]/50 bg-[#f5c400]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#f5c400]">
                {copy.controller.next.badge}
              </div>
              <h3 className="mt-6 break-keep text-2xl font-bold">{copy.controller.next.title}</h3>
              <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-[#b7c0bd]">{copy.controller.next.description}</p>

              <figure className="mt-8">
                <div className="relative aspect-[3/2] w-full bg-white">
                  <Image
                    src="/images/technology/controller-wireless-concept-20260918.webp"
                    alt={copy.controller.next.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1023px) 100vw, 55vw"
                  />
                </div>
                <figcaption className="mt-4 break-keep text-xs leading-6 text-[#b7c0bd]">{copy.controller.next.visualNote}</figcaption>
              </figure>

              <div className="mt-7 grid gap-px bg-white/15 sm:grid-cols-2">
                {copy.controller.next.features.map(([title, description], index) => (
                  <div key={title} className="min-h-[130px] bg-[#202725] p-5">
                    <div className="flex items-start gap-3 text-[#f5c400]">
                      {index === 0 ? <Bluetooth className="mt-0.5 h-5 w-5 shrink-0" /> : null}
                      {index === 1 ? <Wifi className="mt-0.5 h-5 w-5 shrink-0" /> : null}
                      {index > 1 ? <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" /> : null}
                      <h4 className="break-keep font-semibold text-white">{title}</h4>
                    </div>
                    <p className="mt-4 break-keep text-sm leading-6 text-[#aeb8b5]">{description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
                <BrainCircuit className="h-4 w-4" />
                {copy.ai.eyebrow}
              </div>
              <div className="mt-5 inline-flex rounded-full bg-[#f6edbd] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#695600]">
                {copy.ai.badge}
              </div>
              <h2 className="mt-6 max-w-lg break-keep text-2xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:text-3xl">{copy.ai.title}</h2>
              <p className="mt-6 max-w-xl break-keep text-sm leading-7 text-[#68716f] lg:text-base">{copy.ai.intro}</p>
            </div>

            <div>
              <div className="grid border-t border-[#9fa8a5] sm:grid-cols-2">
                {copy.ai.steps.map(([number, title, description]) => (
                  <article key={number} className="border-b border-[#d2d7d4] py-7 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0">
                    <div className="text-xs font-bold text-[#8c7200]">{number}</div>
                    <h3 className="mt-6 text-lg font-semibold text-[#202725]">{title}</h3>
                    <p className="mt-3 break-keep text-sm leading-6 text-[#68716f]">{description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex gap-4 bg-[#f1f3f1] p-6">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#8c7200]" />
                <p className="break-keep text-sm font-medium leading-7 text-[#303735]">{copy.ai.principle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d2d7d4] bg-[#f1f3f1] py-10 lg:py-12">
        <div className="container-custom flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl break-keep text-2xl font-bold leading-[1.35] text-[#151a19] lg:text-3xl">{copy.closing.title}</h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-[#151a19] px-5 py-3 text-sm font-semibold text-white">
              {copy.closing.products}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 border border-[#9fa8a5] px-5 py-3 text-sm font-semibold text-[#151a19]">
              {copy.closing.about}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
