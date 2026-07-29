import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { getProductBySlug, getAllProducts } from '@/lib/products'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, productJsonLd } from '@/lib/structuredData'
import ProductDetailClient from './ProductDetailClient'

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return createPageMetadata({
    locale,
    path: `/products/${product.slug}`,
    title: locale === 'ko' ? `${product.name} (${product.model})` : `${product.nameEn} (${product.model})`,
    description: locale === 'ko' ? product.shortDescription : product.shortDescriptionEn,
    image: product.image,
    imageAlt: locale === 'ko' ? `${product.model} ${product.name}` : `${product.model} ${product.nameEn}`,
    keywords:
      locale === 'ko'
        ? [product.model, product.name, product.category, '워터비']
        : [product.model, product.nameEn, product.categoryEn, 'Waterbee'],
  })
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: locale === 'ko' ? '홈' : 'Home' },
          { name: locale === 'ko' ? '제품' : 'Products', path: '/products' },
          {
            name: locale === 'ko' ? `${product.name} (${product.model})` : `${product.nameEn} (${product.model})`,
            path: `/products/${product.slug}`,
          },
        ])}
      />
      <JsonLd data={productJsonLd(locale, product)} />
      <ProductDetailClient product={product} />
    </>
  )
}
