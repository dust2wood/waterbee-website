import type { Metadata } from 'next'

export type SiteLocale = 'ko' | 'en'

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.waterbee.co.kr'

export const SITE_URL = configuredSiteUrl.replace(/\/$/, '')
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/images/home/water-landscape.jpg`

export const siteIdentity = {
  name: 'Waterbee',
  legalName: '주식회사 워터비',
  businessNumber: '291-87-02513',
  telephone: '1555-3534',
  telephoneIntl: '+82-1555-3534',
  email: 'support@waterbee.co.kr',
  addressKo: '부산광역시 강서구 에코델타스마트로 39, 3동 2호',
  addressEn: 'Building 3, Unit 2, 39 Ecodeltasmart-ro, Gangseo-gu, Busan, Republic of Korea',
} as const

export function toSiteLocale(locale: string): SiteLocale {
  return locale === 'en' ? 'en' : 'ko'
}

export function localizedPath(locale: SiteLocale, path = ''): string {
  const cleanPath = path === '' || path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`
  return `/${locale}${cleanPath}`
}

export function absoluteUrl(path = ''): string {
  if (/^https?:\/\//.test(path)) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

export function localizedUrl(locale: SiteLocale, path = ''): string {
  return absoluteUrl(localizedPath(locale, path))
}

export function languageAlternates(path = ''): Record<string, string> {
  return {
    'ko-KR': localizedUrl('ko', path),
    'en-US': localizedUrl('en', path),
    'x-default': localizedUrl('ko', path),
  }
}

type PageMetadataOptions = {
  locale: string
  path?: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  absoluteTitle?: boolean
  keywords?: string[]
  index?: boolean
}

export function createPageMetadata({
  locale: requestedLocale,
  path = '',
  title,
  description,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt,
  absoluteTitle = false,
  keywords,
  index = true,
}: PageMetadataOptions): Metadata {
  const locale = toSiteLocale(requestedLocale)
  const brandName = locale === 'ko' ? '워터비' : 'Waterbee'
  const fullTitle = absoluteTitle || title.includes(brandName) ? title : `${title} | ${brandName}`
  const canonical = localizedUrl(locale, path)
  const socialImage = absoluteUrl(image)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Waterbee',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      alternateLocale: locale === 'ko' ? ['en_US'] : ['ko_KR'],
      type: 'website',
      images: [
        {
          url: socialImage,
          alt: imageAlt || fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [socialImage],
    },
    robots: {
      index,
      follow: index,
      googleBot: {
        index,
        follow: index,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}
