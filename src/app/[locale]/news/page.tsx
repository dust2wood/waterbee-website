import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { ArrowUpRight } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { companyNewsItems, localizeCompanyNews } from '@/lib/companyNews'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, companyNewsCollectionJsonLd } from '@/lib/structuredData'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isKo = locale === 'ko'

  return createPageMetadata({
    locale,
    path: '/news',
    title: isKo ? '언론보도 및 소식' : 'News and Press',
    description: isKo
      ? '워터비의 수질계측 기술 실증, 윌로펌프 협업, WATER KOREA 업무협약과 베트남 진출 관련 언론보도를 확인하세요.'
      : 'Read press coverage of Waterbee technology validation, Wilo Pump collaboration, WATER KOREA partnership and Vietnam market development.',
    keywords: isKo
      ? ['워터비 뉴스', '워터비 언론보도', '수질계측기 기업', '윌로펌프 워터비', '워터비 베트남']
      : ['Waterbee news', 'Waterbee press', 'water instrumentation company', 'Wilo Pump Waterbee'],
  })
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  const items = companyNewsItems.map((item) => localizeCompanyNews(item, locale))
  const years = Array.from(new Set(items.map((item) => item.date.slice(0, 4))))

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: isKo ? '홈' : 'Home' },
          { name: isKo ? '소식' : 'News', path: '/news' },
        ])}
      />
      <JsonLd data={companyNewsCollectionJsonLd(locale, companyNewsItems)} />

      <section className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">News &amp; Press</div>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.2] tracking-normal text-[#151a19] lg:text-6xl">
              {isKo ? '워터비 소식' : 'Waterbee News'}
            </h1>
          </div>
          <div className="max-w-2xl">
            <p className="break-keep text-base leading-8 text-[#596361] lg:text-lg">
              {isKo
                ? '수질계측 기술 실증과 기업 협력, 국내외 시장에서 이어지는 워터비의 활동을 언론보도 원문과 함께 전합니다.'
                : 'Press coverage of Waterbee technology validation, corporate collaboration and market development in Korea and abroad.'}
            </p>
            <div className="mt-7 flex gap-8 border-t border-[#c8cecb] pt-5 text-sm text-[#68716f]">
              <div><strong className="mr-2 text-xl text-[#202725]">{items.length}</strong>{isKo ? '건의 기사' : 'articles'}</div>
              <div><strong className="mr-2 text-xl text-[#202725]">{years.length}</strong>{isKo ? '개 연도' : 'years'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          {years.map((year) => {
            const yearItems = items.filter((item) => item.date.startsWith(year))

            return (
              <div key={year} className="grid gap-6 border-b border-[#cfd5d2] py-10 first:pt-0 lg:grid-cols-[180px_1fr] lg:gap-12">
                <h2 className="text-3xl font-bold tracking-normal text-[#202725]">{year}</h2>
                <div className="border-t border-[#9fa8a5]">
                  {yearItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid gap-4 border-b border-[#d2d7d4] px-1 py-7 transition-colors hover:bg-[#f7f8f6] sm:grid-cols-[132px_1fr_24px] sm:px-3"
                    >
                      <div className="text-xs leading-6 text-[#737c79]">
                        <time dateTime={item.date}>{item.date.replaceAll('-', '.')}</time>
                        <div className="break-keep font-semibold text-[#8c7200]">{item.publisher}</div>
                        <div className="mt-1 break-keep text-[#7a8380]">{item.category}</div>
                      </div>
                      <div>
                        <h3 className="break-keep text-lg font-semibold leading-7 text-[#202725] sm:text-xl">{item.title}</h3>
                        <p className="mt-3 break-keep text-sm leading-7 text-[#68716f]">{item.summary}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 text-[#7a8380] transition-colors group-hover:text-[#151a19]" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
