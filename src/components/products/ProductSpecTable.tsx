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
    <div className="max-w-3xl">
      <h3 className="text-white font-semibold text-lg mb-5">{t('spec_table')}</h3>
      <div className="bg-navy-800 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <tbody>
            {specs.map((spec, index) => (
              <tr
                key={index}
                className={`border-b border-white/[0.06] last:border-0 ${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                }`}
              >
                {/* 라벨 열: 고정 너비 + 수직 상단 정렬 */}
                <td
                  className="py-3.5 pl-6 pr-4 text-text-secondary text-sm align-top border-r border-white/[0.06]"
                  style={{ width: '200px', minWidth: '160px' }}
                >
                  {isKo ? spec.label : spec.labelEn}
                </td>
                {/* 값 열: 들여쓰기 + 수직 상단 정렬 */}
                <td className="py-3.5 pl-6 pr-6 text-white text-sm font-medium align-top leading-relaxed">
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
