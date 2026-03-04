import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getProductBySlug, getAllProducts } from '@/lib/products'
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
  return {
    title: locale === 'ko' ? `${product.name} (${product.model})` : `${product.nameEn} (${product.model})`,
    description: locale === 'ko' ? product.shortDescription : product.shortDescriptionEn,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  // 기존 통합 제품(wbsc10)은 pH/EC 분리 이후 pH 제품으로 안내
  if (slug === 'wbsc10') {
    redirect(`/products/wbph10`)
  }

  const product = getProductBySlug(slug)
  if (!product) notFound()

  return <ProductDetailClient product={product} />
}
