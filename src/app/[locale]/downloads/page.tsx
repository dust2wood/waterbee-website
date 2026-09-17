import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import DownloadsClient from './DownloadsClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale, path: '/downloads',
    title: locale === 'ko' ? '자료실 | CAD·외형도' : 'Downloads | CAD & Dimensions',
    description: locale === 'ko' ? '워터비 수질계측기 외형 치수와 설치홀 도면. 스마트 컨트롤러, 탁도계, 잔류염소계, pH계, 전기전도도계의 PDF·DWG·DXF 자료.' : 'Waterbee instrument outline dimensions and mounting drawings. PDF, DWG and DXF files for the smart controller, turbidity, residual chlorine, pH and conductivity instruments.',
  })
}

export default async function DownloadsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'
  return (
    <div className="min-h-screen bg-white pt-16 text-[#202725] lg:pt-20">
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: isKo ? '홈' : 'Home' }, { name: isKo ? '자료실' : 'Downloads', path: '/downloads' }])} />
      <div className="border-b border-[#d7dcda] py-4"><div className="container-custom"><Breadcrumb items={[{ label: isKo ? '홈' : 'Home', href: '/' }, { label: isKo ? '자료실' : 'Downloads' }]} /></div></div>
      <section className="border-b border-[#d7dcda] bg-[#f3f5f3] py-10 lg:py-14">
        <div className="container-custom">
          <p className="text-xs font-bold text-[#8c7200]">WATERBEE / DOWNLOADS</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{isKo ? '자료실' : 'Downloads'}</h1>
          <p className="mt-4 text-base leading-7 text-[#596361]">{isKo ? '수질계측기 외형 치수와 설치용 CAD 도면' : 'Outline dimensions and installation CAD for water quality instruments'}</p>
        </div>
      </section>
      <DownloadsClient isKo={isKo} />
    </div>
  )
}
