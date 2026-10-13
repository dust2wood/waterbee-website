import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { ArrowUpRight, Bluetooth, BrainCircuit, Download, ShieldCheck, Wifi } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, technologyPageJsonLd } from '@/lib/structuredData'
import { getTechnologyContent } from '@/lib/technologyContent'
import { products } from '@/lib/products'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({ locale, path: '/technology',
    title: locale === 'ko' ? '수질계측 핵심 기술' : 'Water-Quality Measurement Technology',
    description: locale === 'ko' ? '회전전극식 잔류염소, 기포 저감형 탁도, 현장 컨트롤러와 센서별 유지관리. Wi-Fi·Bluetooth 및 AI 진단 개발.' : 'Rotating-electrode chlorine, bubble-reduced turbidity, field control and sensor maintenance. Wireless connectivity and AI diagnostic development.',
  })
}

const sectionIds = ['measurement', 'controller', 'connectivity', 'maintenance']
const featureIcons = [Bluetooth, Wifi, BrainCircuit, ShieldCheck]
const partSlugs = ['wbtu10-lamp-kit', 'wbfc10-electrode-kit', 'wbfc10-ceramic-beads']

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const copy = getTechnologyContent(locale)
  const parts = products.filter(p => partSlugs.includes(p.slug))

  return (
    <div className="technology-page bg-white pt-16 lg:pt-20">
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: isKo ? '홈' : 'Home' }, { name: isKo ? '기술' : 'Technology', path: '/technology' }])} />
      <JsonLd data={technologyPageJsonLd(locale)} />
      <header className="border-b border-[#d7dcda] bg-[#f1f3f1] py-8 lg:py-12">
        <div className="container-custom">
          <p className="tech-kicker">Technology</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#596361] sm:text-base">{copy.intro}</p>
          <nav aria-label={isKo ? '기술 바로가기' : 'Technology sections'} className="mt-6 grid grid-cols-2 border-t border-[#bfc7c4] sm:flex sm:flex-wrap sm:gap-x-8">
            {copy.nav.map((label, i) => <a key={label} href={`#${sectionIds[i]}`} className="flex min-h-12 items-center gap-2 text-sm font-semibold hover:text-[#8c7200]"><span className="text-xs text-[#8c7200]">0{i + 1}</span>{label}<ArrowUpRight className="h-3.5 w-3.5" /></a>)}
          </nav>
        </div>
      </header>
      <section id="measurement" className="tech-section">
        <div className="container-custom">
          <p className="tech-kicker">01 / Measurement</p>
          <h2 className="tech-heading">{copy.measurementTitle}</h2>
          <div className="mt-6 divide-y divide-[#d7dcda]">
            {copy.measurements.map(item => (
              <article key={item.model} className="grid gap-5 py-6 first:pt-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-9">
                <figure className="relative h-64 sm:h-80 lg:h-[360px]">
                  <Image src={item.image} alt={item.alt} fill className="object-contain" sizes="(max-width: 1023px) 90vw, 45vw" />
                </figure>
                <div className="min-w-0">
                  <p className="tech-kicker">{item.model}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug lg:text-2xl">{item.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#596361]">{item.points.map(point => <li className="flex gap-2" key={point}><span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 bg-[#8c7200]" /><span>{point}</span></li>)}</ul>
                  <dl className="mt-5 grid grid-cols-3 divide-x divide-[#d7dcda] border-y border-[#d7dcda] py-4">
                    {item.metrics.map(([value, label]) => <div key={label} className="px-2 text-center first:pl-0 last:pr-0"><dt className="text-xs text-[#68716f]">{label}</dt><dd className="mt-2 text-sm font-bold sm:text-base">{value}</dd></div>)}
                  </dl>
                  <p className="mt-4 text-sm leading-6 text-[#596361]"><span className="mr-2 font-semibold text-[#202725]">{copy.care}</span>{item.careText}</p>
                  <Link href={`/products/${item.slug}`} className="tech-link mt-2">{copy.detail}<ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="grid border-t border-[#bfc7c4] sm:grid-cols-2 sm:gap-8">
            {copy.sensors.map(sensor => <Link key={sensor.model} href={`/products/${sensor.slug}`} className="group flex items-start justify-between gap-4 border-b border-[#d7dcda] py-5"><div><h3 className="font-semibold">{sensor.model} <span className="ml-2 text-[#596361]">{sensor.title}</span></h3><p className="mt-2 text-sm leading-6 text-[#68716f]">{sensor.text}</p></div><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 group-hover:text-[#8c7200]" /></Link>)}
          </div>
        </div>
      </section>
      <section id="controller" className="tech-section bg-[#f3f5f3]">
        <div className="container-custom">
          <p className="tech-kicker">02 / Controller</p>
          <h2 className="tech-heading">{copy.controller.title}</h2>
          <p className="tech-intro">{copy.controller.intro}</p>
          <div className="mt-6 grid items-center gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div className="relative h-52 lg:h-72"><Image src="/images/products/wbsc10-front.png" alt="WBSC10" fill className="object-contain mix-blend-multiply" sizes="(max-width: 1023px) 280px, 360px" /></div>
            <div className="min-w-0">
              <dl className="grid grid-cols-2 border-t border-[#bfc7c4] sm:grid-cols-4">{copy.controller.specs.map(([value, label]) => <div key={label} className="border-b border-[#bfc7c4] px-2 py-4 text-center"><dt className="text-xs text-[#68716f]">{label}</dt><dd className="mt-2 text-lg font-bold">{value}</dd></div>)}</dl>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#596361]">{copy.controller.points.map(point => <li key={point}>{point}</li>)}</ul>
              <Link href="/products/wbsc10" className="tech-link mt-3">{copy.detail}<ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section id="connectivity" className="tech-section">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3"><p className="tech-kicker">03 / Connectivity & Diagnostics</p><span className="border-l-2 border-[#d3ac00] pl-3 text-xs font-semibold text-[#68716f]">{copy.connected.badge}</span></div>
          <h2 className="tech-heading">{copy.connected.title}</h2>
          <p className="tech-intro">{copy.connected.intro}</p>
          <div className="mt-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[3/2]"><Image src="/images/technology/controller-wireless-concept-20260918.webp" alt={copy.connected.imageAlt} fill className="object-contain" sizes="(max-width: 1023px) 90vw, 45vw" /></div>
            <div>
              <div className="divide-y divide-[#d7dcda] border-y border-[#bfc7c4]">{copy.connected.features.map(([title, description], i) => { const Icon = featureIcons[i]; return <div key={title} className="flex gap-4 py-4"><Icon className="mt-1 h-5 w-5 shrink-0 text-[#8c7200]" /><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#68716f]">{description}</p></div></div>})}</div>
              <p className="mt-3 text-xs leading-5 text-[#68716f]">{copy.connected.validation}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="maintenance" className="tech-section border-t border-[#d7dcda]">
        <div className="container-custom">
          <p className="tech-kicker">04 / Maintenance</p>
          <h2 className="tech-heading">{copy.maintenance.title}</h2>
          <p className="tech-intro">{copy.maintenance.intro}</p>
          <div className="mt-6 border-t border-[#9fa8a5]">
            {copy.maintenance.items.map(([model, name, inspection, interval]) => <div key={model} className="grid gap-2 border-b border-[#d7dcda] py-4 sm:grid-cols-[170px_1fr_1fr] sm:gap-5"><h3 className="text-sm font-semibold">{model}<span className="ml-2 font-normal text-[#68716f] sm:ml-0 sm:block">{name}</span></h3><p className="text-sm leading-6 text-[#596361]">{inspection}</p><p className="text-sm leading-6 text-[#596361]">{interval}</p></div>)}
          </div>
          <p className="mt-3 text-xs leading-5 text-[#68716f]">{copy.maintenance.condition}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {parts.map(part => <Link key={part.slug} href={`/products/${part.slug}`} className="flex min-w-0 items-center gap-4 border-y border-[#d7dcda] py-3 sm:flex-col sm:items-start"><div className="relative h-20 w-24 shrink-0 sm:h-28 sm:w-full"><Image src={part.image} alt={isKo ? part.name : part.nameEn} fill className="object-contain" sizes="(max-width: 639px) 96px, 240px" /></div><div className="flex w-full min-w-0 items-center justify-between gap-2 text-sm font-semibold"><span>{isKo ? part.name : part.nameEn}</span><ArrowUpRight className="h-4 w-4 shrink-0" /></div></Link>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 bg-[#f3f5f3] px-5 py-4"><div><h3 className="text-sm font-semibold">{copy.maintenance.filter}</h3><p className="mt-1 text-sm leading-6 text-[#68716f]">{copy.maintenance.filterText}</p></div><Link href="/products/filter-drain" className="tech-link">{copy.detail}<ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
      <section className="border-t border-[#d7dcda] bg-[#f3f5f3] py-7 lg:py-9">
        <div className="container-custom flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-xl font-bold">{copy.resources.title}</h2><p className="mt-2 text-sm leading-6 text-[#68716f]">{copy.resources.intro}</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/downloads" className="btn-primary"><Download className="h-4 w-4" />{copy.resources.drawings}</Link><Link href="/contact" className="btn-secondary">{copy.resources.contact}<ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </div>
  )
}
