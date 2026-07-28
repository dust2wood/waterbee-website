'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import type { Product, ProductGroup } from '@/lib/products'
import ProductCard from './ProductCard'

type GroupFilter = 'all' | ProductGroup

const groupCopy = {
  instrumentation: {
    ko: '수질계측기',
    en: 'Water Quality Instruments',
    descriptionKo: '컨트롤러, 탁도, 잔류염소, pH 및 전기전도도',
    descriptionEn: 'Controller, turbidity, residual chlorine, pH and conductivity',
  },
  smartfarm: {
    ko: '스마트팜 pH·EC',
    en: 'Smart Farm pH & EC',
    descriptionKo: '양액과 관수 수질 관리를 위한 pH·EC 센서와 RS-485 컨버터',
    descriptionEn: 'pH and conductivity sensors with RS-485 converters for nutrient solution and irrigation water',
  },
  system: {
    ko: '여과드레인 시스템',
    en: 'Filter-Drain System',
    descriptionKo: '정밀여과와 수질계측, 자동 배수 제어를 결합한 시스템 제품',
    descriptionEn: 'System products combining filtration, monitoring and automatic drain control',
  },
  accessory: {
    ko: '샘플링 및 유지보수 부품',
    en: 'Sampling & Maintenance Parts',
    descriptionKo: '샘플 공급 장치와 전용 교체 부품',
    descriptionEn: 'Sample supply equipment and dedicated replacement parts',
  },
} as const

const groupOrder: ProductGroup[] = ['instrumentation', 'smartfarm', 'system', 'accessory']

export default function ProductGrid({ products }: { products: Product[] }) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [selectedGroup, setSelectedGroup] = useState<GroupFilter>('all')

  const visibleGroups = selectedGroup === 'all' ? groupOrder : [selectedGroup]

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-x-7 gap-y-3 border-b border-[#cfd5d2]">
        {(['all', ...groupOrder] as GroupFilter[]).map((group) => {
          const label = group === 'all' ? (isKo ? '전체 제품' : 'All Products') : (isKo ? groupCopy[group].ko : groupCopy[group].en)
          const active = selectedGroup === group
          return (
            <button
              key={group}
              type="button"
              onClick={() => setSelectedGroup(group)}
              className={`relative pb-4 text-sm font-semibold transition-colors ${active ? 'text-[#151a19]' : 'text-[#7a8380] hover:text-[#303735]'}`}
            >
              {label}
              {active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />}
            </button>
          )
        })}
      </div>

      <div className="space-y-20">
        {visibleGroups.map((group) => {
          const groupProducts = products.filter((product) => product.group === group)
          if (groupProducts.length === 0) return null
          const copy = groupCopy[group]

          return (
            <section key={group}>
              <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-normal text-[#151a19]">
                    {isKo ? copy.ko : copy.en}
                  </h2>
                  <p className="mt-2 text-sm text-[#68716f]">
                    {isKo ? copy.descriptionKo : copy.descriptionEn}
                  </p>
                </div>
                <div className="text-xs text-[#8a9390]">{String(groupProducts.length).padStart(2, '0')}</div>
              </div>

              <div className={`grid border-l border-t border-[#d7dcda] sm:grid-cols-2 ${group === 'instrumentation' || group === 'smartfarm' || group === 'accessory' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                {groupProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
