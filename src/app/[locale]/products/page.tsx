import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import SectionTitle from '@/components/ui/SectionTitle'
import ProductGrid from '@/components/products/ProductGrid'
import JsonLd from '@/components/seo/JsonLd'
import { getAllProducts } from '@/lib/products'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, productCollectionJsonLd } from '@/lib/structuredData'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/products',
    title: locale === 'ko' ? '수질계측기 제품' : 'Water Quality Instruments',
    description:
      locale === 'ko'
        ? '워터비 온라인 탁도계, 회전전극식 잔류염소계, 스마트 컨트롤러, pH계, 전기전도도계와 수질 모니터링 시스템 제품 목록입니다.'
        : 'Explore Waterbee online turbidity meters, rotating-electrode residual chlorine analyzers, smart controllers, pH and conductivity meters, and monitoring systems.',
    keywords:
      locale === 'ko'
        ? ['수질계측기', '온라인 탁도계', '잔류염소계', '스마트 컨트롤러', 'pH계', '전기전도도계']
        : ['water quality instruments', 'online turbidity meter', 'residual chlorine analyzer', 'smart controller', 'pH meter', 'conductivity meter'],
  })
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'products' })
  const products = getAllProducts()

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: locale === 'ko' ? '홈' : 'Home' },
          { name: locale === 'ko' ? '제품' : 'Products', path: '/products' },
        ])}
      />
      <JsonLd data={productCollectionJsonLd(locale, products)} />
      <div className="border-b border-[#d7dcda] bg-[#f3f5f3] py-12 lg:py-14">
        <div className="container-custom">
          <SectionTitle
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
            as="h1"
            align="left"
            className="mb-0"
          />
        </div>
      </div>

      <div className="container-custom py-16 lg:py-20">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
