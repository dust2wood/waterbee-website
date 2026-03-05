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
          {/* colgroup으로 라벨 열 너비를 브라우저에 명시적으로 선언 */}
          <colgroup>
            <col style={{ width: '210px' }} />
            <col />
          </colgroup>
          <tbody>
            {specs.map((spec, index) => (
              <tr
                key={index}
                className={`border-b border-white/[0.06] last:border-0 ${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                }`}
              >
                {/* 라벨 열: colgroup 너비 준수, 수직 상단 정렬 */}
                <td
                  className="py-4 pl-6 pr-4 text-text-secondary text-sm border-r border-white/[0.06]"
                  style={{ verticalAlign: 'top' }}
                >
                  {isKo ? spec.label : spec.labelEn}
                </td>
                {/* 값 열: 들여쓰기, 수직 상단 정렬 */}
                <td
                  className="py-4 pl-6 pr-6 text-white text-sm font-medium leading-relaxed"
                  style={{ verticalAlign: 'top' }}
                >
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
