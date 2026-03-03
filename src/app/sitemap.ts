import { MetadataRoute } from 'next'
import { getAllProducts } from '@/lib/products'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.waterbee.co.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts()

  const staticPages = ['', '/products', '/technology', '/about', '/contact']

  const koPages = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: {
        ko: `${baseUrl}${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
  }))

  const productPages = products.flatMap((product) => [
    {
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          ko: `${baseUrl}/products/${product.slug}`,
          en: `${baseUrl}/en/products/${product.slug}`,
        },
      },
    },
  ])

  return [...koPages, ...productPages]
}
