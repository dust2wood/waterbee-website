import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { ArrowRight, Bluetooth, BrainCircuit, Gauge, ShieldCheck, Wifi, Wrench } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { getTechnologyContent } from '@/lib/technologyContent'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/technology',
    title: locale === 'ko' ? '수질계측 핵심 기술' : 'Water-Quality Measurement Technology',
    description:
      locale === 'ko'
        ? '회전전극식 잔류염소 측정, 기포 저감형 탁도 광학계, 소모품 수명과 ESP32-S3 Wi-Fi·BLE 및 설명 가능한 엣지 AI 개발 방향을 소개합니다.'
        : 'Explore rotating-electrode chlorine measurement, bubble-reduced turbidity optics, consumable lifecycles, and the ESP32-S3 Wi-Fi, BLE and explainable edge-AI roadmap.',
    keywords:
      locale === 'ko'
        ? ['회전전극식 잔류염소', '탁도 기포 저감', '수질계측기 소모품 수명', 'ESP32 수질계측', '수질 엣지 AI']
        : ['rotating electrode residual chlorine', 'turbidity bubble reduction', 'instrument consumable life', 'ESP32 water monitoring', 'edge AI water quality'],
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

      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl whitespace-nowrap text-[clamp(1rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-normal text-[#151a19]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-[#596361] lg:text-lg">{copy.intro}</p>
          </div>

          <div className="mt-14 grid border-t border-[#9fa8a5] sm:grid-cols-2 lg:grid-cols-4">
            {copy.pillars.map(([number, title, description]) => (
              <div key={number} className="border-b border-[#cbd1ce] py-6 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <div className="text-xs font-semibold text-[#8c7200]">{number}</div>
                <h2 className="mt-8 break-keep text-lg font-semibold leading-7 text-[#202725]">{title}</h2>
                <p className="mt-3 break-keep text-sm leading-6 text-[#68716f]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 lg:pt-28">
        <div className="container-custom grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.measurementEyebrow}</div>
            <h2 className="mt-4 max-w-md whitespace-nowrap text-[clamp(0.95rem,3.5vw,2.1rem)] font-bold leading-[1.25] tracking-normal text-[#151a19]">
              {copy.measurementTitle}
            </h2>
          </div>
          <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-7 lg:text-base">{copy.measurementIntro}</p>
        </div>
      </section>

      {copy.measurementSections.map((section, index) => (
        <section key={section.eyebrow} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f5f6f4]'}>
          <div className={`container-custom grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative aspect-[3/2] overflow-hidden bg-[#e7ebe8]">
              <Image src={section.image} alt={section.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{section.eyebrow}</div>
              <h2 className="mt-5 whitespace-nowrap text-[clamp(0.9rem,4.2vw,1.75rem)] font-bold leading-[1.25] tracking-normal text-[#151a19]">{section.title}</h2>
              <p className="mt-6 break-keep text-base leading-8 text-[#596361]">{section.description}</p>

              <div className="mt-9 grid grid-cols-3 border-y border-[#aeb6b3]">
                {section.metrics.map(([value, label]) => (
                  <div key={label} className="flex min-h-[112px] flex-col items-center justify-center border-r border-[#d2d7d4] px-2 py-4 text-center last:border-r-0 sm:px-4">
                    <div className="break-keep text-sm font-bold leading-6 text-[#202725] sm:text-base lg:text-lg">{value}</div>
                    <div className="mt-2 min-h-8 break-keep text-[11px] leading-4 text-[#7a8380]">{label}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-8 border-t border-[#d2d7d4]">
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

      <section className="bg-[#151a19] py-20 text-white lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c400]">
                <Wrench className="h-4 w-4" />
                {copy.lifecycle.eyebrow}
              </div>
              <h2 className="mt-5 max-w-lg whitespace-nowrap text-[clamp(1rem,3.5vw,2.1rem)] font-bold leading-[1.25] tracking-normal">{copy.lifecycle.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#b7c0bd] lg:pt-7 lg:text-base">{copy.lifecycle.intro}</p>
          </div>

          <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {copy.lifecycle.items.map((item) => (
              <article key={item.subject} className="min-h-[230px] bg-[#151a19] p-7 lg:p-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5c400]">{item.kind}</div>
                <h3 className="mt-5 break-keep text-lg font-semibold leading-7 text-white">{item.subject}</h3>
                <div className="mt-6 text-2xl font-bold text-white">{item.cycle}</div>
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

      <section className="bg-[#f5f6f4] py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
                <Gauge className="h-4 w-4" />
                {copy.controller.eyebrow}
              </div>
              <h2 className="mt-5 max-w-lg whitespace-nowrap text-[clamp(0.95rem,3.5vw,2.1rem)] font-bold leading-[1.25] tracking-normal text-[#151a19]">{copy.controller.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-7 lg:text-base">{copy.controller.intro}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
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

            <article className="bg-[#202725] p-7 text-white lg:p-10">
              <div className="inline-flex rounded-full border border-[#f5c400]/50 bg-[#f5c400]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#f5c400]">
                {copy.controller.next.badge}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{copy.controller.next.title}</h3>
              <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-[#b7c0bd]">{copy.controller.next.description}</p>

              <div className="mt-8 grid gap-px bg-white/15 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[420px] bg-white p-6">
                  <Image
                    src="/images/products/wbsc10-front.png"
                    alt={isKo ? '워터비 WBSC10 컨트롤러 실제 외형' : 'Actual Waterbee WBSC10 controller enclosure'}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 36vw"
                  />
                </div>

                <div className="grid gap-px bg-white/15 sm:grid-cols-2 md:grid-cols-1">
                {copy.controller.next.features.map(([title, description], index) => (
                  <div key={title} className="min-h-[130px] bg-[#202725] p-5">
                    <div className="flex items-center gap-3 text-[#f5c400]">
                      {index === 0 ? <Bluetooth className="h-5 w-5" /> : null}
                      {index === 1 ? <Wifi className="h-5 w-5" /> : null}
                      {index > 1 ? <ShieldCheck className="h-5 w-5" /> : null}
                      <h4 className="font-semibold text-white">{title}</h4>
                    </div>
                    <p className="mt-4 break-keep text-sm leading-6 text-[#aeb8b5]">{description}</p>
                  </div>
                ))}
                </div>
              </div>
              <p className="mt-4 break-keep text-xs leading-6 text-[#899491]">{copy.controller.next.visualNote}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
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
              <h2 className="mt-6 max-w-lg whitespace-nowrap text-[clamp(0.95rem,3.2vw,2rem)] font-bold leading-[1.25] tracking-normal text-[#151a19]">{copy.ai.title}</h2>
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

      <section className="border-t border-[#d2d7d4] bg-[#f1f3f1] py-16 lg:py-20">
        <div className="container-custom flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl whitespace-nowrap text-[clamp(0.9rem,3.2vw,1.875rem)] font-bold leading-[1.35] text-[#151a19]">{copy.closing.title}</h2>
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
