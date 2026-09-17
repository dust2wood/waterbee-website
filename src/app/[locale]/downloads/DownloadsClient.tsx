'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Download, Search, X } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { drawingBase, drawingFile, drawingFormats, drawingPreview, productDrawings } from '@/lib/productDrawings'

export default function DownloadsClient({ isKo }: { isKo: boolean }) {
  const [query, setQuery] = useState('')
  const [model, setModel] = useState('all')
  const search = query.trim().toLocaleLowerCase()
  const items = productDrawings.filter((item) => (model === 'all' || item.slug === model)
    && `${item.model} ${item.name} ${item.nameEn}`.toLocaleLowerCase().includes(search))

  return (
    <div className="container-custom py-9 lg:py-12">
      <div className="grid gap-4 border-b border-[#aeb6b3] pb-6 sm:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <label htmlFor="drawing-search" className="mb-2 block text-sm font-semibold">{isKo ? '모델·제품명' : 'Model or product name'}</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-[#68716f]" />
            <input id="drawing-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isKo ? '예: WBTU10, 탁도계' : 'e.g. WBTU10, turbidity'} className="h-12 w-full border border-[#aeb6b3] bg-white pl-12 pr-12 text-base outline-offset-2 focus:outline-[#8c7200]" />
            {query && <button type="button" onClick={() => setQuery('')} title={isKo ? '검색어 지우기' : 'Clear search'} className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center"><X className="h-4 w-4" /></button>}
          </div>
        </div>
        <div>
          <label htmlFor="drawing-model" className="mb-2 block text-sm font-semibold">{isKo ? '제품 선택' : 'Product'}</label>
          <select id="drawing-model" value={model} onChange={(event) => setModel(event.target.value)} className="h-12 w-full border border-[#aeb6b3] bg-white px-4 text-base outline-offset-2 focus:outline-[#8c7200]">
            <option value="all">{isKo ? '전체 제품' : 'All products'}</option>
            {productDrawings.map((item) => <option key={item.slug} value={item.slug}>{item.model}</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 py-5 text-sm">
        <p role="status" className="text-[#68716f]">{isKo ? '외형도 · CAD' : 'Outline drawings & CAD'} <strong className="ml-2 text-[#202725]">{items.length}</strong></p>
        <a href={`${drawingBase}/Waterbee_Outline_Drawings.pdf`} download className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#202725]"><Download className="h-4 w-4" />{isKo ? '전체 외형도 PDF' : 'All drawings · PDF'}</a>
      </div>
      <div className="hidden grid-cols-[130px_minmax(0,1fr)_260px] gap-7 border-y border-[#aeb6b3] bg-[#f3f5f3] px-5 py-3 text-xs font-semibold text-[#68716f] lg:grid">
        <span>{isKo ? '도면' : 'Drawing'}</span><span>{isKo ? '제품 / 적용 치수' : 'Product / dimensions shown'}</span><span>{isKo ? '다운로드' : 'Download'}</span>
      </div>
      <div className="border-t border-[#aeb6b3] lg:border-t-0">
        {items.map((item) => (
          <article key={item.slug} className="grid gap-5 border-b border-[#d7dcda] py-6 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[130px_minmax(0,1fr)_260px] lg:items-center lg:px-5">
            <Link href={`/products/${item.slug}#drawings`} className="relative block aspect-[1.4] w-36 border border-[#e3e7e5] bg-white sm:w-full" aria-label={`${item.model} ${isKo ? '외형도 보기' : 'view drawing'}`}>
              <Image src={drawingPreview(item.model, 1)} alt={`${item.model} ${isKo ? '외형도' : 'outline'}`} fill unoptimized sizes="144px" className="object-contain p-2" />
            </Link>
            <div className="min-w-0">
              <Link href={`/products/${item.slug}#drawings`} className="inline-flex items-center gap-3 text-xl font-bold text-[#202725] hover:text-[#8c7200]">{item.model}<ArrowUpRight className="h-4 w-4" /></Link>
              <h2 className="mt-1 text-sm font-semibold text-[#596361]">{isKo ? item.name : item.nameEn}</h2>
              <p className="mt-3 text-sm leading-6 text-[#68716f]">{item.metrics.slice(0, 2).map((metric) => `${isKo ? metric.label : metric.labelEn} ${metric.value}`).join(' · ')}</p>
              {item.slug === 'wbsc10' && <p className="mt-1 text-xs leading-5 text-[#68716f]">{isKo ? '190 × 180 mm 본체형 · 깊이와 등각도는 REF' : '190 × 180 mm enclosure · depth and isometric view are REF'}</p>}
            </div>
            <div className="sm:col-start-2 lg:col-start-auto">
              <div className="flex gap-2">
                {drawingFormats.map((format) => (
                  <a key={format} href={drawingFile(item.model, format)} download aria-label={`${item.model} ${format} ${isKo ? '다운로드' : 'download'}`} className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 border border-[#aeb6b3] px-2 text-sm font-semibold text-[#202725] hover:bg-[#f1f3f1]"><Download className="h-3.5 w-3.5" />{format}</a>
                ))}
              </div>
              <p className="mt-2 text-xs text-[#68716f]">{isKo ? 'PDF A4 가로 · CAD mm / 1:1' : 'PDF A4 landscape · CAD mm / 1:1'}</p>
            </div>
          </article>
        ))}
        {!items.length && <div className="py-16 text-center"><p className="text-[#596361]">{isKo ? '일치하는 공개 도면이 없습니다.' : 'No matching drawings.'}</p><button type="button" onClick={() => { setQuery(''); setModel('all') }} className="mt-4 text-sm font-semibold underline underline-offset-4">{isKo ? '검색 초기화' : 'Reset filters'}</button></div>}
      </div>
      <div className="mt-8 grid gap-6 text-sm leading-7 text-[#68716f] lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
        <p>{isKo ? '치수는 각 도면의 적용 형상 기준입니다. 설치·제작 전 납품 제품의 하우징, 센서 및 배관 구성을 확인해 주세요. PDF는 축척 측정용이 아닙니다.' : 'Dimensions apply to the configuration shown in each drawing. Confirm the housing, sensor and piping supplied before installation or fabrication. Do not scale the PDF.'}</p>
        <div><p className="font-semibold text-[#202725]">{isKo ? '다른 구성의 도면이 필요하신가요?' : 'Need a different configuration?'}</p><Link href="/contact" className="inline-flex min-h-11 items-center gap-2 text-[#202725]">{isKo ? '도면 문의' : 'Request a drawing'}<ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </div>
  )
}
