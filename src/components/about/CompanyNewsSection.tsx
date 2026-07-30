import { ArrowUpRight } from 'lucide-react'
import { companyNewsItems, localizeCompanyNews } from '@/lib/companyNews'

export default function CompanyNewsSection({ locale }: { locale: string }) {
  const isKo = locale === 'ko'
  const items = companyNewsItems.map((item) => localizeCompanyNews(item, locale))

  return (
    <section className="border-b border-[#d7dcda] bg-white py-16 lg:py-24">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div className="text-xs font-bold uppercase text-[#8c7200]">News &amp; Activity</div>
          <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.3] tracking-normal text-[#151a19] lg:text-4xl">
            {isKo ? '워터비의 최근 소식' : 'Latest from Waterbee'}
          </h2>
          <p className="mt-5 max-w-md break-keep text-sm leading-7 text-[#68716f] sm:text-base">
            {isKo
              ? '기술 실증과 글로벌 협력, 해외시장 진출 활동을 전합니다.'
              : 'Updates on technology validation, global partnerships and market development.'}
          </p>
        </div>

        <div className="border-t border-[#9fa8a5]">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 border-b border-[#d2d7d4] py-6 transition-colors hover:bg-[#f7f8f6] sm:grid-cols-[124px_1fr_24px] sm:px-2"
            >
              <div className="text-xs leading-6 text-[#737c79]">
                <time dateTime={item.date}>{item.date.replaceAll('-', '.')}</time>
                <div className="font-semibold text-[#8c7200]">{item.publisher}</div>
              </div>
              <div>
                <div className="break-keep text-lg font-semibold leading-7 text-[#202725]">{item.title}</div>
                <p className="mt-2 line-clamp-2 break-keep text-sm leading-6 text-[#68716f]">{item.summary}</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 text-[#7a8380] transition-colors group-hover:text-[#151a19]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
