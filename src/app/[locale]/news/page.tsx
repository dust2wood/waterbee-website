import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { companyNewsItems, localizeCompanyNews } from '@/lib/companyNews'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, companyNewsCollectionJsonLd } from '@/lib/structuredData'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  return createPageMetadata({
    locale,
    path: '/news',
    title: locale === 'ko' ? '회사 소식·언론보도' : 'Company News & Media',
    description:
      locale === 'ko'
        ? '여성기업 주식회사 워터비의 현재 운영 현황, 윌로펌프·부산창조경제혁신센터 협업, 베트남 진출 프로그램과 주요 언론보도를 확인하세요.'
        : 'Review Waterbee\'s current company status, women-owned business profile, collaboration with Wilo Pump and the Busan CCEI, Vietnam market program, and media coverage.',
    keywords:
      locale === 'ko'
        ? ['워터비', '여성기업', '워터비 소식', '윌로펌프 워터비', '부산창조경제혁신센터 워터비', '워터비 베트남']
        : ['Waterbee', 'women-owned business', 'Waterbee news', 'Wilo Pump Waterbee', 'Waterbee Vietnam'],
  })
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const items = companyNewsItems.map((item) => localizeCompanyNews(item, locale))
  const facts = isKo
    ? [
        ['설립', '2021.10.05'],
        ['운영 현황', '현재 정상 운영 중'],
        ['대표이사', '손호정'],
        ['기업 구분', '여성기업 · 중소기업'],
        ['본사', '부산광역시 강서구'],
        ['사업자등록번호', '291-87-02513'],
      ]
    : [
        ['Founded', 'October 5, 2021'],
        ['Operating status', 'Active operations'],
        ['CEO', 'Hojung Son'],
        ['Company type', 'Women-owned SME'],
        ['Headquarters', 'Gangseo-gu, Busan'],
        ['Business registration', '291-87-02513'],
      ]

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: isKo ? '홈' : 'Home' },
          { name: isKo ? '회사 소식' : 'News', path: '/news' },
        ])}
      />
      <JsonLd data={companyNewsCollectionJsonLd(locale, companyNewsItems)} />

      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">Company News</div>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.18] tracking-normal text-[#151a19] lg:text-6xl">
              {isKo ? '워터비의 현재와 다음 단계' : 'Waterbee today and what comes next'}
            </h1>
          </div>
          <p className="max-w-2xl break-keep text-base leading-8 text-[#596361] lg:text-lg">
            {isKo
              ? '수질계측 기술을 기반으로 이어가는 현장 실증, 기업 협업과 글로벌 시장 활동을 한곳에 정리했습니다.'
              : 'A clear record of field validation, corporate collaboration and global market activity built around Waterbee\'s water-quality instrumentation technology.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="text-xs font-bold uppercase text-[#8c7200]">Company Status</div>
              <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.3] tracking-normal text-[#151a19]">
                {isKo ? '2026년 7월 기준 회사 현황' : 'Company status as of July 2026'}
              </h2>
              <p className="mt-5 break-keep text-sm leading-7 text-[#68716f]">
                {isKo
                  ? '주식회사 워터비는 사업자등록번호 291-87-02513로 현재 정상 운영 중인 부산 소재 여성기업입니다.'
                  : 'Waterbee Co., Ltd. is an actively operating women-owned company headquartered in Busan under Korean business registration number 291-87-02513.'}
              </p>
            </div>

            <dl className="grid border-t border-l border-[#aeb6b3] sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="min-h-28 border-b border-r border-[#cfd5d2] px-5 py-5 sm:px-6">
                  <dt className="text-xs font-semibold text-[#7a8380]">{label}</dt>
                  <dd className="mt-3 break-keep text-lg font-semibold leading-7 text-[#202725]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#151a19] py-20 text-white lg:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#f5c400]">Current Focus · Vietnam</div>
            <div className="mt-5 text-sm tabular-nums text-[#aeb8b5]">2026.07</div>
          </div>
          <div>
            <h2 className="max-w-3xl break-keep text-3xl font-bold leading-[1.25] tracking-normal lg:text-5xl">
              {isKo ? '베트남 시장을 향한 현지 검증과 사업 연계' : 'Local validation and business development for Vietnam'}
            </h2>
            <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-[#c8cfcd]">
              {items[0].summary}
            </p>
            <div className="mt-10 grid border-t border-white/25 sm:grid-cols-3">
              {(
                isKo
                  ? [
                      ['프로그램', '2026 스스로 프로젝트 3기'],
                      ['현지 일정', 'InnoEX 2026 · 호찌민'],
                      ['사업 연계', 'IR · B2B · PoC'],
                    ]
                  : [
                      ['Program', '2026 Suseuro Project, Cohort 3'],
                      ['Local program', 'InnoEX 2026 · Ho Chi Minh'],
                      ['Business track', 'IR · B2B · PoC'],
                    ]
              ).map(([label, value]) => (
                <div key={label} className="border-b border-white/20 py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                  <div className="text-[11px] font-bold uppercase text-[#f5c400]">{label}</div>
                  <div className="mt-2 break-keep text-sm font-semibold leading-6 text-white">{value}</div>
                </div>
              ))}
            </div>
            <a
              href={items[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm font-semibold text-white"
            >
              {isKo ? '프로그램 관련 기사 보기' : 'Read the program coverage'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f4] py-20 lg:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">Open Innovation</div>
            <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.3] tracking-normal text-[#151a19]">
              {isKo ? '부산창경 × 윌로펌프 × 워터비' : 'Busan CCEI × Wilo Pump × Waterbee'}
            </h2>
          </div>
          <div className="border-t border-[#9fa8a5]">
            <div className="grid gap-5 border-b border-[#cfd5d2] py-7 sm:grid-cols-[130px_1fr]">
              <div className="text-xs font-semibold text-[#7a8380]">2025.07–12</div>
              <div>
                <h3 className="break-keep text-2xl font-semibold leading-8 text-[#202725]">
                  {isKo ? '스마트팜 측정센서 현장 적용성·시장성 검증' : 'Field and market validation for smart-farm measurement sensors'}
                </h3>
                <p className="mt-4 break-keep text-sm leading-7 text-[#68716f]">{items[2].summary}</p>
              </div>
            </div>
            <div className="grid gap-5 border-b border-[#cfd5d2] py-5 sm:grid-cols-[130px_1fr]">
              <div className="text-xs font-semibold text-[#7a8380]">Partner</div>
              <div className="break-keep text-sm font-semibold leading-6 text-[#202725]">
                {isKo ? '윌로펌프 · 부산창조경제혁신센터' : 'Wilo Pump · Busan Center for Creative Economy & Innovation'}
              </div>
            </div>
            <a
              href={items[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]"
            >
              {isKo ? '협업 성과 기사 보기' : 'Read the collaboration result'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 border-b border-[#9fa8a5] pb-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="text-xs font-bold uppercase text-[#8c7200]">Media Archive</div>
              <h2 className="mt-4 break-keep text-3xl font-bold tracking-normal text-[#151a19] lg:text-4xl">
                {isKo ? '주요 소식과 언론보도' : 'News and media coverage'}
              </h2>
            </div>
            <p className="max-w-xl break-keep text-sm leading-7 text-[#68716f]">
              {isKo
                ? '워터비의 설립부터 기술 실증, 협력 사업과 글로벌 활동까지 공개된 기록을 최신순으로 확인할 수 있습니다.'
                : 'Public coverage of Waterbee from its establishment through technology validation, partnerships and global activity.'}
            </p>
          </div>

          <div>
            {items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-5 border-b border-[#cfd5d2] py-7 transition-colors hover:bg-[#f7f8f6] md:grid-cols-[150px_1fr_28px] md:px-3"
              >
                <div className="text-xs leading-6 text-[#737c79]">
                  <time dateTime={item.date}>{item.date.replaceAll('-', '.')}</time>
                  <div className="font-semibold text-[#8c7200]">{item.publisher}</div>
                  <div>{item.category}</div>
                </div>
                <div>
                  <h3 className="break-keep text-xl font-semibold leading-8 text-[#202725]">{item.title}</h3>
                  <p className="mt-3 max-w-3xl break-keep text-sm leading-7 text-[#68716f]">{item.summary}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-[#7a8380] transition-colors group-hover:text-[#151a19]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d7dcda] bg-[#f1f3f1] py-14">
        <div className="container-custom flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="break-keep text-xl font-semibold text-[#202725]">
              {isKo ? '제품·기술·협업 관련 문의' : 'Product, technology and partnership inquiries'}
            </div>
            <p className="mt-2 break-keep text-sm leading-6 text-[#68716f]">
              {isKo ? '워터비 담당자가 문의 내용을 확인하고 안내드립니다.' : 'The Waterbee team will review your inquiry and respond.'}
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 self-start bg-[#151a19] px-6 py-3 text-sm font-semibold text-white sm:self-auto">
            {isKo ? '문의하기' : 'Contact us'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
