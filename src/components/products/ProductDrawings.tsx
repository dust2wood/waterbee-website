'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Maximize2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { drawingFile, drawingFormats, drawingPreview, type ProductDrawing } from '@/lib/productDrawings'

export default function ProductDrawings({ drawing, isKo }: { drawing: ProductDrawing; isKo: boolean }) {
  const [view, setView] = useState(1)
  const viewName = (number: number) => number === 1
    ? (isKo ? '외형 치수' : 'Outline dimensions')
    : (isKo ? '설치홀 배치' : 'Mounting holes')

  return (
    <section id="drawings" className="scroll-mt-36 border-b border-[#d7dcda] py-12 lg:scroll-mt-40 lg:py-16">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#aeb6b3] pb-5">
          <div>
            <p className="text-xs font-bold text-[#8c7200]">{drawing.model}</p>
            <h2 className="mt-2 text-2xl font-bold text-[#151a19]">{isKo ? '외형 치수 · CAD' : 'Dimensions & CAD'}</h2>
          </div>
          <span className="text-sm text-[#68716f]">{isKo ? '단위 mm' : 'Dimensions in mm'}</span>
        </div>
        <div className="grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          <div className="min-w-0">
            {drawing.views > 1 && (
              <div className="mb-5 flex gap-5 border-b border-[#d7dcda]" role="tablist" aria-label={isKo ? '도면 종류' : 'Drawing view'}>
                {Array.from({ length: drawing.views }, (_, i) => i + 1).map((number) => (
                  <button key={number} id={`drawing-tab-${number}`} type="button" role="tab" aria-selected={number === view}
                    aria-controls="drawing-panel" onClick={() => setView(number)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                        event.preventDefault()
                        const next = view === 1 ? 2 : 1
                        setView(next)
                        document.getElementById(`drawing-tab-${next}`)?.focus()
                      }
                    }}
                    tabIndex={view === number ? 0 : -1}
                    className={`border-b-2 pb-3 text-sm font-semibold ${number === view ? 'border-[#a98b21] text-[#151a19]' : 'border-transparent text-[#68716f]'}`}>
                    {viewName(number)}
                  </button>
                ))}
              </div>
            )}
            <div id="drawing-panel" role={drawing.views > 1 ? 'tabpanel' : undefined} aria-labelledby={drawing.views > 1 ? `drawing-tab-${view}` : undefined}>
              <a href={drawingPreview(drawing.model, view)} target="_blank" rel="noopener noreferrer"
                title={isKo ? '도면 크게 보기 (새 창)' : 'Open full-size drawing (new tab)'}
                className="group relative block aspect-[1.6] bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8c7200]">
                <Image src={drawingPreview(drawing.model, view)} alt={`${drawing.model} ${viewName(view)}`} fill unoptimized className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 800px" />
                <span className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center border border-[#d7dcda] bg-white text-[#596361] group-hover:text-black"><Maximize2 className="h-4 w-4" /></span>
              </a>
            </div>
          </div>
          <div>
            <dl className="border-t border-[#aeb6b3]">
              {drawing.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-[#d7dcda] py-4 text-sm">
                  <dt className="text-[#68716f]">{isKo ? metric.label : metric.labelEn}</dt>
                  <dd className="font-semibold tabular-nums text-[#202725]">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-6 text-[#68716f]">{isKo ? drawing.note : drawing.noteEn}</p>
          </div>
        </div>
        <div id="downloads" className="scroll-mt-36 flex flex-col justify-between gap-5 border-t border-[#d7dcda] pt-6 sm:flex-row sm:items-center lg:scroll-mt-40">
          <div>
            <h3 className="font-semibold text-[#202725]">{isKo ? '도면 다운로드' : 'Drawing downloads'}</h3>
            <p className="mt-1 text-xs leading-5 text-[#68716f]">{isKo ? 'PDF · A4 가로 / DWG·DXF · AutoCAD 2018, mm, 1:1' : 'PDF · A4 landscape / DWG & DXF · AutoCAD 2018, mm, 1:1'}</p>
          </div>
          <div className="flex gap-2">
            {drawingFormats.map((format) => (
              <a key={format} href={drawingFile(drawing.model, format)} download aria-label={`${drawing.model} ${format} ${isKo ? '다운로드' : 'download'}`}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-[#aeb6b3] px-4 text-sm font-semibold text-[#202725] hover:bg-[#f1f3f1] sm:flex-none">
                <Download className="h-4 w-4" />{format}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-between gap-3 text-xs leading-5 text-[#68716f]">
          <p>{isKo ? 'PDF 축척 측정 금지. 제작·설치 전 납품 형상과 치수를 확인해 주세요.' : 'Do not scale the PDF. Confirm the supplied configuration and dimensions before fabrication or installation.'}</p>
          <Link href="/downloads" className="inline-flex items-center gap-2 font-semibold text-[#202725]">{isKo ? '전체 자료실' : 'All downloads'}<ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </div>
    </section>
  )
}
