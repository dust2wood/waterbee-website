import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { ArrowRight, BadgeCheck, Building2, ExternalLink, FileCheck2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { getCompanyProfile, getPatentRecordUrl } from '@/lib/companyProfile'
import { createPageMetadata, siteIdentity } from '@/lib/seo'
import { aboutPageJsonLd, breadcrumbJsonLd } from '@/lib/structuredData'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/about',
    title: locale === 'ko' ? '회사 연혁·특허·인증' : 'Company History, Patents & Certifications',
    description:
      locale === 'ko'
        ? '주식회사 워터비의 회사 연혁, 수질계측기 형식승인, 기업·제품 인증, 등록특허와 출원 현황을 소개합니다.'
        : 'Explore Waterbee’s company history, instrument type approvals, certifications, registered patents and pending application.',
    keywords:
      locale === 'ko'
        ? ['워터비 회사 연혁', '워터비 특허', '수질계측기 형식승인', '벤처기업 확인', '수질계측 인증']
        : ['Waterbee company history', 'Waterbee patents', 'water instrument type approval', 'venture company certification'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const copy = getCompanyProfile(locale)

  const companyInfo = [
    [isKo ? '회사명' : 'Company', isKo ? siteIdentity.legalName : 'Waterbee Co., Ltd.'],
    [isKo ? '사업자등록번호' : 'Business registration no.', siteIdentity.businessNumber],
    [isKo ? '법인등록번호' : 'Corporate registration no.', siteIdentity.corporationNumber],
    [isKo ? '대표이사' : 'CEO', isKo ? siteIdentity.representativeKo : 'Hojung Son'],
    [isKo ? '주소' : 'Address', isKo ? siteIdentity.addressKo : siteIdentity.addressEn],
    [isKo ? '대표전화' : 'Phone', siteIdentity.telephone],
    [isKo ? '기업 문의' : 'General inquiries', siteIdentity.generalEmail],
    [isKo ? '고객지원' : 'Customer support', siteIdentity.email],
  ]

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: isKo ? '홈' : 'Home' },
          { name: isKo ? '회사소개' : 'About', path: '/about' },
        ])}
      />
      <JsonLd data={aboutPageJsonLd(locale)} />

      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.hero.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl whitespace-nowrap text-[clamp(1.35rem,5vw,3.75rem)] font-bold leading-[1.12] tracking-normal text-[#151a19]">{copy.hero.title}</h1>
            <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-[#596361] lg:text-lg">{copy.hero.intro}</p>
          </div>

          <dl className="grid grid-cols-3 border-y border-[#9fa8a5]">
            {copy.hero.metrics.map(([value, label]) => (
              <div key={label} className="border-r border-[#cbd1ce] px-3 py-6 text-center last:border-r-0 sm:px-5">
                <dt className="whitespace-nowrap text-[11px] leading-5 text-[#7a8380]">{label}</dt>
                <dd className="mt-3 whitespace-nowrap text-base font-bold text-[#202725] lg:text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">{copy.identity.eyebrow}</div>
            <h2 className="mt-4 max-w-lg whitespace-nowrap text-[clamp(1.12rem,4.8vw,1.875rem)] font-bold leading-[1.3] tracking-normal text-[#151a19]">{copy.identity.title}</h2>
            <p className="mt-6 max-w-lg break-keep text-sm leading-7 text-[#68716f]">{copy.identity.intro}</p>
          </div>

          <div className="border-t border-[#9fa8a5]">
            <div className="grid gap-5 border-b border-[#d2d7d4] py-7 sm:grid-cols-[120px_1fr]">
              <div className="text-xs font-bold uppercase text-[#8c7200]">{copy.identity.missionLabel}</div>
              <div className="break-keep text-xl font-semibold leading-8 text-[#202725]">{copy.identity.mission}</div>
            </div>
            <div className="grid gap-5 border-b border-[#d2d7d4] py-7 sm:grid-cols-[120px_1fr]">
              <div className="text-xs font-bold uppercase text-[#8c7200]">{copy.identity.visionLabel}</div>
              <div className="break-keep text-xl font-semibold leading-8 text-[#202725]">{copy.identity.vision}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="scroll-mt-24 bg-[#f5f6f4] py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
                <Building2 className="h-4 w-4" />
                {copy.history.eyebrow}
              </div>
              <h2 className="mt-4 whitespace-nowrap text-[clamp(1.12rem,4.8vw,2.25rem)] font-bold tracking-normal text-[#151a19]">{copy.history.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-6">{copy.history.intro}</p>
          </div>

          <div>
            {copy.history.items.map(([year, events]) => (
              <div key={year} className="grid border-b border-[#cfd5d2] py-7 md:grid-cols-[180px_1fr]">
                <div className="text-2xl font-bold text-[#202725]">{year}</div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#596361] md:mt-0">
                  {events.map((event) => (
                    <li key={event} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#8c7200]" />
                      <span className="break-keep">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="patents" className="scroll-mt-24 bg-[#151a19] py-20 text-white lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c400]">
                <FileCheck2 className="h-4 w-4" />
                {copy.patents.eyebrow}
              </div>
              <h2 className="mt-5 max-w-lg whitespace-nowrap text-[clamp(1.35rem,4.8vw,2.25rem)] font-bold leading-[1.25] tracking-normal">{copy.patents.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#b7c0bd] lg:pt-7 lg:text-base">{copy.patents.intro}</p>
          </div>

          <div className="pt-12">
            <h3 className="text-sm font-semibold text-white">{copy.patents.registeredLabel}</h3>
            <div className="mt-5 border-t border-white/25">
              {copy.patents.registered.map((patent) => (
                <article key={patent.number} className="grid gap-3 border-b border-white/15 py-5 md:grid-cols-[150px_1fr_150px] md:gap-6">
                  <div className="text-sm font-semibold text-[#f5c400]">{patent.number}</div>
                  <div>
                    <h4 className="break-keep text-sm font-semibold leading-6 text-white sm:text-base">{patent.title}</h4>
                    <p className="mt-1 break-keep text-xs leading-5 text-[#929d9a]">{patent.ownership}</p>
                    <a
                      href={getPatentRecordUrl(patent.number, locale)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#f5c400] hover:text-white"
                    >
                      {isKo ? '공개 특허 원문' : 'Public patent record'}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <time className="text-xs text-[#aeb8b5] md:text-right" dateTime={patent.date.replaceAll('.', '-')}>{patent.date}</time>
                </article>
              ))}
            </div>

            <div className="mt-12 border border-[#f5c400]/40 bg-[#f5c400]/5 p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#f5c400]">{copy.patents.pendingLabel}</div>
              {copy.patents.pending.map((patent) => (
                <article key={patent.number} className="mt-5 grid gap-3 md:grid-cols-[150px_1fr_150px] md:gap-6">
                  <div className="text-sm font-semibold text-[#f5c400]">{patent.number}</div>
                  <div>
                    <h4 className="break-keep text-sm font-semibold leading-6 text-white sm:text-base">{patent.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-[#929d9a]">{patent.ownership}</p>
                  </div>
                  <div className="text-xs text-[#aeb8b5] md:text-right">{patent.date}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
                <BadgeCheck className="h-4 w-4" />
                {copy.certifications.eyebrow}
              </div>
              <h2 className="mt-4 max-w-lg whitespace-nowrap text-[clamp(1.35rem,4.8vw,2.25rem)] font-bold leading-[1.25] tracking-normal text-[#151a19]">{copy.certifications.title}</h2>
            </div>
            <p className="max-w-2xl break-keep text-sm leading-7 text-[#68716f] lg:pt-6 lg:text-base">{copy.certifications.intro}</p>
          </div>

          <div className="grid gap-px bg-[#d2d7d4] sm:grid-cols-2 lg:grid-cols-4">
            {copy.certifications.items.map((item) => (
              <article key={item.number} className="min-h-[255px] bg-white p-6 lg:p-7">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8c7200]">{item.category}</div>
                <h3 className="mt-5 break-keep text-lg font-semibold leading-7 text-[#202725]">{item.title}</h3>
                <div className="mt-6 break-all text-sm font-semibold leading-6 text-[#303735]">{item.number}</div>
                <p className="mt-3 break-keep text-xs leading-5 text-[#68716f]">{item.detail}</p>
                <div className="mt-5 text-xs leading-5 text-[#8a9390]">{item.date}</div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex gap-3 border-l-2 border-[#8c7200] pl-5 text-xs leading-6 text-[#68716f] sm:text-sm">
            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[#8c7200]" />
            <p className="break-keep">{copy.certifications.note}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d2d7d4] bg-[#f5f6f4] py-20 lg:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">Company Info</div>
            <h2 className="mt-4 whitespace-nowrap text-3xl font-bold tracking-normal text-[#151a19]">{isKo ? '회사 기본정보' : 'Company information'}</h2>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link href="/news" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
                {copy.links.news}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
                {copy.links.contact}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <dl className="border-t border-[#9fa8a5] text-sm">
            {companyInfo.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[120px_1fr] gap-5 border-b border-[#d2d7d4] py-4 sm:grid-cols-[190px_1fr]">
                <dt className="text-[#7a8380]">{label}</dt>
                <dd className="break-keep font-semibold leading-6 text-[#202725]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
