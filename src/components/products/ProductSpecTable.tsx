'use client'

import { useLocale } from 'next-intl'
import type { ProductSpec } from '@/lib/products'
import { useTranslations } from 'next-intl'

interface ProductSpecTableProps {
  specs: ProductSpec[]
}

export default function ProductSpecTable({ specs }: ProductSpecTableProps) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const t = useTranslations('products')

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">{t('spec_table')}</h3>
      <div className="bg-navy-800 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <tbody>
            {specs.map((spec, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                }
              >
                <td className="py-3 px-5 text-text-secondary text-sm border-r border-white/10 w-40 sm:w-48">
                  {isKo ? spec.label : spec.labelEn}
                </td>
                <td className="py-3 px-5 text-white text-sm font-medium">
                  {isKo ? spec.value : spec.valueEn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
