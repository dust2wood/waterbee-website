import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { Product } from '@/lib/products'

export default function InstrumentGuide({ products, isKo }: { products: Product[]; isKo: boolean }) {
  const instruments = products.filter((p) => ['wbtu10', 'wbfc10', 'wbph10', 'wbec10'].includes(p.slug))
  return (
    <section aria-labelledby="instrument-guide" className="mb-12 border-y border-[#cfd5d2] py-7">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="instrument-guide" className="text-xl font-semibold text-[#151a19]">{isKo ? '측정 항목별 주요 사양' : 'Measurement at a glance'}</h2>
        <span className="text-xs text-[#68716f]">{isKo ? 'WBSC10 컨트롤러 연동' : 'With the WBSC10 controller'}</span>
      </div>
      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {instruments.map((p) => {
          const range = p.specs.find((s) => s.labelEn === 'Measurement Range')
          const resolution = p.specs.find((s) => s.labelEn === 'Resolution')
          return (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group border-t border-[#e0e4e2] py-5 focus-visible:outline-2 focus-visible:outline-offset-4">
              <span className="flex items-center justify-between gap-3 text-sm font-semibold">{p.model}<ArrowUpRight className="h-4 w-4 text-[#8c7200]" /></span>
              <p className="mt-1 text-sm text-[#68716f]">{isKo ? p.category : p.categoryEn}</p>
              <p className="mt-4 text-xl font-semibold tabular-nums">{isKo ? range?.value : range?.valueEn}</p>
              <p className="mt-2 text-xs leading-5 text-[#68716f]">{isKo ? '분해능' : 'Resolution'} · {isKo ? resolution?.value : resolution?.valueEn}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
