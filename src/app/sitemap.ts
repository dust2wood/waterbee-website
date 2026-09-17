import type { MetadataRoute } from 'next'
import { getAllProducts } from '@/lib/products'
import { getProductDrawing, drawingRevision } from '@/lib/productDrawings'
import {
  languageAlternates,
  localizedUrl,
  type SiteLocale,
} from '@/lib/seo'

const locales: SiteLocale[] = ['ko', 'en']
const lastContentUpdate = new Date('2026-08-26T00:00:00+09:00')
const newsAndTankUpdate = new Date('2026-09-17T12:00:00+09:00')

const staticPages = [
  { path: '', changeFrequency: 'monthly' as const, priority: 1 },
  { path: '/products', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/technology', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/downloads', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/news', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, page.path),
      lastModified: page.path === '/downloads' ? new Date(drawingRevision)
        : ['/news', '/about', '/products'].includes(page.path) ? newsAndTankUpdate : lastContentUpdate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: languageAlternates(page.path),
      },
    })),
  )

  const productEntries = getAllProducts().flatMap((product) => {
    const path = `/products/${product.slug}`

    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: getProductDrawing(product.slug) ? new Date(drawingRevision)
        : product.slug === 'sampling-tank' ? newsAndTankUpdate : lastContentUpdate,
      changeFrequency: 'monthly' as const,
      priority: product.featured ? 0.9 : 0.75,
      alternates: {
        languages: languageAlternates(path),
      },
    }))
  })

  return [...staticEntries, ...productEntries]
}
