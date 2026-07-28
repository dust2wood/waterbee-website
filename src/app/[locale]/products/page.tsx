import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import SectionTitle from '@/components/ui/SectionTitle'
import ProductGrid from '@/components/products/ProductGrid'
import { getAllProducts } from '@/lib/products'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '제품 카탈로그' : 'Product Catalog',
    description:
      locale === 'ko'
        ? '워터비의 수질 측정 장비 전 제품 카탈로그'
        : 'Full catalog of Waterbee water quality measurement instruments',
  }
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
      <div className="border-b border-[#d7dcda] bg-[#f3f5f3] py-12 lg:py-14">
        <div className="container-custom">
          <SectionTitle
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
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
