import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const publicRule = {
  allow: '/',
  disallow: ['/api/'],
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        ...publicRule,
      },
      {
        userAgent: 'OAI-SearchBot',
        ...publicRule,
      },
      {
        userAgent: 'ChatGPT-User',
        ...publicRule,
      },
      {
        userAgent: 'PerplexityBot',
        ...publicRule,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
