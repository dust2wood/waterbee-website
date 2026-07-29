import type { Product } from '@/lib/products'
import type { CompanyNewsItem } from '@/lib/companyNews'
import {
  absoluteUrl,
  localizedUrl,
  ORGANIZATION_ID,
  SITE_URL,
  siteIdentity,
  toSiteLocale,
  WEBSITE_ID,
} from '@/lib/seo'

export function organizationJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Waterbee',
    legalName: siteIdentity.legalName,
    alternateName: isKo ? ['워터비', 'Waterbee Co., Ltd.'] : ['Waterbee Co., Ltd.', '워터비'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/logo-transparent.png'),
      width: 558,
      height: 283,
    },
    description: isKo
      ? '회전전극식 잔류염소계, 온라인 탁도계, pH계, 전기전도도계와 수질 모니터링 시스템을 개발하는 수질계측 전문기업입니다.'
      : 'A water-quality instrumentation company developing rotating-electrode residual chlorine analyzers, online turbidity meters, pH and conductivity meters, and monitoring systems.',
    slogan: 'Right Technology, Bright Environment',
    foundingDate: '2021-10-05',
    taxID: siteIdentity.businessNumber,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'KR Business Registration Number',
      value: siteIdentity.businessNumber,
    },
    email: siteIdentity.email,
    telephone: siteIdentity.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: isKo ? siteIdentity.addressKo : siteIdentity.addressEn,
      addressLocality: isKo ? '부산광역시 강서구' : 'Gangseo-gu, Busan',
      addressRegion: isKo ? '부산광역시' : 'Busan',
      addressCountry: 'KR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: siteIdentity.telephone,
      email: siteIdentity.email,
      areaServed: 'KR',
      availableLanguage: ['Korean', 'English'],
    },
    knowsAbout: [
      'Water quality instrumentation',
      'Residual chlorine measurement',
      'Turbidity measurement',
      'pH measurement',
      'Electrical conductivity measurement',
      'Smart water monitoring',
    ],
    keywords: isKo
      ? ['여성기업', '중소기업', '수질계측기', '탁도계', '잔류염소계', '스마트 수질관리']
      : ['women-owned business', 'SME', 'water-quality instrumentation', 'turbidity', 'residual chlorine', 'smart water monitoring'],
  }
}

export function websiteJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Waterbee',
    alternateName: '워터비',
    description: isKo
      ? '워터비 수질계측기 및 수질 모니터링 솔루션 공식 홈페이지'
      : 'Official website for Waterbee water-quality instruments and monitoring solutions',
    inLanguage: ['ko-KR', 'en-US'],
    publisher: {
      '@id': ORGANIZATION_ID,
    },
  }
}

export type BreadcrumbItem = {
  name: string
  path?: string
}

export function breadcrumbJsonLd(locale: string, items: BreadcrumbItem[]) {
  const siteLocale = toSiteLocale(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: localizedUrl(siteLocale, item.path || ''),
    })),
  }
}

export function productJsonLd(locale: string, product: Product) {
  const siteLocale = toSiteLocale(locale)
  const isKo = siteLocale === 'ko'
  const productUrl = localizedUrl(siteLocale, `/products/${product.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    url: productUrl,
    name: isKo ? product.name : product.nameEn,
    alternateName: `${product.model} ${isKo ? product.nameEn : product.name}`,
    description: isKo ? product.description : product.descriptionEn,
    image: product.gallery.map((image) => absoluteUrl(image)),
    sku: product.model,
    mpn: product.model,
    model: product.model,
    category: isKo ? product.category : product.categoryEn,
    brand: {
      '@type': 'Brand',
      name: 'Waterbee',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Waterbee',
    },
    additionalProperty: product.specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: isKo ? spec.label : spec.labelEn,
      value: isKo ? spec.value : spec.valueEn,
    })),
  }
}

export function productCollectionJsonLd(locale: string, products: Product[]) {
  const siteLocale = toSiteLocale(locale)
  const isKo = siteLocale === 'ko'
  const collectionUrl = localizedUrl(siteLocale, '/products')

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${collectionUrl}#collection`,
    url: collectionUrl,
    name: isKo ? '워터비 제품 카탈로그' : 'Waterbee Product Catalog',
    description: isKo
      ? '워터비 수질계측기, 스마트팜 센서, 시스템 및 유지관리 부품 목록'
      : 'Waterbee water-quality instruments, smart-farm sensors, systems and maintenance parts',
    inLanguage: isKo ? 'ko-KR' : 'en-US',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: isKo ? `${product.name} (${product.model})` : `${product.nameEn} (${product.model})`,
        url: localizedUrl(siteLocale, `/products/${product.slug}`),
      })),
    },
  }
}

export function companyNewsCollectionJsonLd(locale: string, items: CompanyNewsItem[]) {
  const siteLocale = toSiteLocale(locale)
  const isKo = siteLocale === 'ko'
  const collectionUrl = localizedUrl(siteLocale, '/news')

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${collectionUrl}#collection`,
    url: collectionUrl,
    name: isKo ? '워터비 회사 소식 및 언론보도' : 'Waterbee Company News and Media',
    description: isKo
      ? '워터비의 회사 현황, 협업, 글로벌 활동과 주요 언론보도 목록'
      : 'Waterbee company status, partnerships, global activity and media coverage',
    inLanguage: isKo ? 'ko-KR' : 'en-US',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': ORGANIZATION_ID,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          headline: isKo ? item.title.ko : item.title.en,
          description: isKo ? item.summary.ko : item.summary.en,
          datePublished: item.date,
          url: item.url,
          publisher: {
            '@type': 'Organization',
            name: isKo ? item.publisher.ko : item.publisher.en,
          },
          about: {
            '@id': ORGANIZATION_ID,
          },
        },
      })),
    },
  }
}
