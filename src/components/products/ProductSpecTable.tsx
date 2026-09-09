'use client'

import { useLocale, useTranslations } from 'next-intl'
import type { ProductSpec } from '@/lib/products'

export default function ProductSpecTable({ specs }: { specs: ProductSpec[] }) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const t = useTranslations('products')

  return (
    <div className="max-w-4xl">
      <div className="mb-7 text-xs font-bold uppercase text-[#8c7200]">{t('spec_table')}</div>
      <table className="w-full table-fixed border-collapse border-t border-[#9fa8a5] text-sm">
        <caption className="sr-only">{t('spec_table')}</caption>
        <colgroup>
          <col className="w-[38%] sm:w-[240px]" />
          <col />
        </colgroup>
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.label} className="border-b border-[#cfd5d2]">
              <th scope="row" className="px-0 py-4 pr-3 text-left align-top font-medium leading-6 text-[#707a77]">
                {isKo ? spec.label : spec.labelEn}
              </th>
              <td className="break-keep py-4 pl-2 align-top font-semibold leading-6 text-[#202725] sm:pl-8">
                {isKo ? spec.value : spec.valueEn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
