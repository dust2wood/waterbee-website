import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

  const product = getProductBySlug(slug)
  if (!product) notFound()

  return <ProductDetailClient product={product} />
}
