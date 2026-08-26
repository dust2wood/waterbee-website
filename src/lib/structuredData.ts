import type { Product } from '@/lib/products'
import type { CompanyNewsItem } from '@/lib/companyNews'
import { getCompanyProfile, getPatentRecordUrl } from '@/lib/companyProfile'
import {
  absoluteUrl,
  localizedUrl,
  ORGANIZATION_ID,
  SITE_URL,
  siteIdentity,
  toSiteLocale,
  WEBSITE_ID,
} from '@/lib/seo'

const BRAND_ID = `${SITE_URL}/#brand`

function pageLanguage(locale: string) {
  return toSiteLocale(locale) === 'ko' ? 'ko-KR' : 'en-US'
}

function pageReference(locale: string, path = '') {
  const url = localizedUrl(toSiteLocale(locale), path)

  return {
    url,
    id: `${url}#webpage`,
  }
}

export function productEntityId(product: Product) {
  return `${SITE_URL}/#product-${product.slug}`
}

export function organizationJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'

  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': ORGANIZATION_ID,
    name: isKo ? '워터비' : 'Waterbee',
    legalName: siteIdentity.legalName,
    alternateName: isKo
      ? ['Waterbee', 'WATERBEE', 'WaterBee', '(주)워터비']
      : ['워터비', 'WATERBEE', 'WaterBee', '(주)워터비'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/logo-transparent.png'),
      contentUrl: absoluteUrl('/images/logo-transparent.png'),
      width: 558,
      height: 283,
    },
    description: isKo
      ? '부산에 기반을 두고 회전전극식 잔류염소계, 온라인 탁도계, pH계, 전기전도도계와 수질 모니터링 시스템을 개발·제조하는 수질계측 전문기업입니다.'
      : 'A Busan-based developer and manufacturer of rotating-electrode residual chlorine analyzers, online turbidity meters, pH and conductivity meters, and monitoring systems.',
    slogan: 'Right Technology, Bright Environment',
    foundingDate: '2021-10-05',
    taxID: siteIdentity.businessNumber,
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'KR Business Registration Number',
        value: siteIdentity.businessNumber,
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'KR Corporate Registration Number',
        value: siteIdentity.corporationNumber,
      },
    ],
    email: siteIdentity.generalEmail,
    telephone: siteIdentity.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: isKo ? '에코델타스마트로 39, 3동 2호(명지동)' : 'Building 3, Unit 2, 39 Eco Delta Smart-ro',
      addressLocality: isKo ? '강서구' : 'Gangseo-gu',
      addressRegion: isKo ? '부산광역시' : 'Busan',
      addressCountry: 'KR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: siteIdentity.telephone,
        email: siteIdentity.generalEmail,
        areaServed: 'KR',
        availableLanguage: ['Korean', 'English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: siteIdentity.telephone,
        email: siteIdentity.email,
        areaServed: 'KR',
        availableLanguage: ['Korean', 'English'],
      },
    ],
    brand: {
      '@type': 'Brand',
      '@id': BRAND_ID,
      name: 'WATERBEE',
      alternateName: ['Waterbee', '워터비'],
      logo: absoluteUrl('/images/logo-transparent.png'),
    },
    knowsAbout: [
      'Water quality instrumentation',
      'Residual chlorine measurement',
      'Turbidity measurement',
      'pH measurement',
      'Electrical conductivity measurement',
      'Smart water monitoring',
    ],
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

export function homePageJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'
  const page = pageReference(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.id,
    url: page.url,
    name: isKo ? '수질계측기 전문기업 워터비' : 'Water Quality Instruments by Waterbee',
    description: isKo
      ? '워터비는 회전전극식 잔류염소계, 온라인 탁도계, pH계, 전기전도도계와 스마트 수질 모니터링 시스템을 개발하는 수질계측 전문기업입니다.'
      : 'Waterbee develops rotating-electrode residual chlorine analyzers, online turbidity meters, pH and conductivity meters, and smart water-quality monitoring systems.',
    inLanguage: pageLanguage(locale),
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': ORGANIZATION_ID,
    },
    mainEntity: {
      '@id': ORGANIZATION_ID,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/home/water-landscape.jpg'),
      contentUrl: absoluteUrl('/images/home/water-landscape.jpg'),
    },
  }
}

export function aboutPageJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'
  const page = pageReference(locale, '/about')
  const patentCitations = getCompanyProfile(locale).patents.registered
    .map((patent) => getPatentRecordUrl(patent.number, locale))
    .filter((url): url is string => Boolean(url))

  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': page.id,
    url: page.url,
    name: isKo ? '회사 연혁·특허·인증' : 'Company History, Patents & Certifications',
    description: isKo
      ? '주식회사 워터비의 회사 연혁, 수질계측기 형식승인, 기업·제품 인증, 등록특허와 출원 현황을 소개합니다.'
      : 'Waterbee company history, instrument type approvals, certifications, registered patents and pending application.',
    inLanguage: pageLanguage(locale),
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': ORGANIZATION_ID,
    },
    mainEntity: {
      '@id': ORGANIZATION_ID,
    },
    citation: patentCitations,
  }
}

export function contactPageJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'
  const page = pageReference(locale, '/contact')

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': page.id,
    url: page.url,
    name: isKo ? '워터비 문의하기' : 'Contact Waterbee',
    description: isKo
      ? '워터비 수질계측기 제품 상담, 견적, 설치 검토와 기술지원 문의를 접수합니다.'
      : 'Contact Waterbee for water-quality instrument consultation, quotations, installation review and technical support.',
    inLanguage: pageLanguage(locale),
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': ORGANIZATION_ID,
    },
    mainEntity: {
      '@id': ORGANIZATION_ID,
    },
  }
}

export function technologyPageJsonLd(locale: string) {
  const isKo = toSiteLocale(locale) === 'ko'
  const page = pageReference(locale, '/technology')
  const articleId = `${page.url}#article`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': page.id,
        url: page.url,
        name: isKo ? '수질계측 핵심 기술' : 'Water-Quality Measurement Technology',
        description: isKo
          ? '회전전극식 잔류염소 측정, 기포 저감형 탁도 광학계, 소모품 수명과 ESP32-S3 Wi-Fi·BLE 및 설명 가능한 엣지 AI 개발 방향을 소개합니다.'
          : 'Rotating-electrode chlorine measurement, bubble-reduced turbidity optics, consumable lifecycles, and the ESP32-S3 Wi-Fi, BLE and explainable edge-AI roadmap.',
        inLanguage: pageLanguage(locale),
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        mainEntity: {
          '@id': articleId,
        },
      },
      {
        '@type': 'TechArticle',
        '@id': articleId,
        headline: isKo ? '워터비 수질계측 핵심 기술' : 'Waterbee Water-Quality Measurement Technology',
        description: isKo
          ? '워터비의 잔류염소·탁도 측정 원리, 소모품 수명, 연결형 컨트롤러와 설명 가능한 엣지 AI 개발 방향을 설명합니다.'
          : 'An overview of Waterbee residual-chlorine and turbidity measurement, consumable lifecycles, connected controllers and explainable edge AI.',
        inLanguage: pageLanguage(locale),
        mainEntityOfPage: {
          '@id': page.id,
        },
        author: {
          '@id': ORGANIZATION_ID,
        },
        publisher: {
          '@id': ORGANIZATION_ID,
        },
        datePublished: '2026-08-23',
        dateModified: '2026-08-26',
        image: [
          absoluteUrl('/images/technology/residual-chlorine-rotation-cutaway.png'),
          absoluteUrl('/images/technology/turbidity-bubble-removal-module.png'),
        ],
        about: [
          { '@type': 'Thing', name: isKo ? '회전전극식 잔류염소 측정' : 'Rotating-electrode residual chlorine measurement' },
          { '@type': 'Thing', name: isKo ? '기포 저감형 탁도 측정' : 'Bubble-reduced turbidity measurement' },
          { '@type': 'Thing', name: 'ESP32-S3 Wi-Fi and Bluetooth Low Energy' },
          { '@type': 'Thing', name: isKo ? '수질 엣지 AI' : 'Water-quality edge AI' },
        ],
      },
    ],
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

export function productPageJsonLd(locale: string, product: Product) {
  const siteLocale = toSiteLocale(locale)
  const isKo = siteLocale === 'ko'
  const productUrl = localizedUrl(siteLocale, `/products/${product.slug}`)
  const equipmentId = productEntityId(product)
  const productName = isKo ? product.name : product.nameEn
  const productCategory = isKo ? product.category : product.categoryEn
  const specificationId = `${equipmentId}-specifications`
  const images = Array.from(new Set([product.image, ...product.gallery])).map((image) => absoluteUrl(image))

  // These are quote-only B2B model pages. Keep the entity as Thing so Google does not
  // treat pages without price, review or rating data as incomplete Product rich results.
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${productUrl}#webpage`,
    url: productUrl,
    name: isKo ? `${product.name} (${product.model})` : `${product.nameEn} (${product.model})`,
    description: isKo ? product.description : product.descriptionEn,
    inLanguage: isKo ? 'ko-KR' : 'en-US',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    mentions: [
      { '@id': BRAND_ID },
      { '@id': ORGANIZATION_ID },
      { '@type': 'Thing', name: productCategory },
    ],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(product.image),
      contentUrl: absoluteUrl(product.image),
      caption: isKo ? `${product.model} ${product.name}` : `${product.model} ${product.nameEn}`,
    },
    about: {
      '@id': equipmentId,
    },
    mainEntity: {
      '@type': 'Thing',
      '@id': equipmentId,
      name: productName,
      alternateName: [product.model, isKo ? product.nameEn : product.name],
      description: isKo ? product.description : product.descriptionEn,
      url: productUrl,
      image: images,
      mainEntityOfPage: {
        '@id': `${productUrl}#webpage`,
      },
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'model',
          name: isKo ? '모델' : 'Model',
          value: product.model,
        },
        {
          '@type': 'PropertyValue',
          propertyID: 'mpn',
          name: isKo ? '제조사 부품 번호' : 'Manufacturer part number',
          value: product.model,
        },
        {
          '@type': 'PropertyValue',
          propertyID: 'sku',
          name: 'SKU',
          value: product.model,
        },
      ],
      subjectOf: {
        '@type': 'Dataset',
        '@id': specificationId,
        name: isKo ? `${product.model} 제품 정보 및 사양` : `${product.model} product information and specifications`,
        description: isKo
          ? `${productName}의 브랜드, 제조사, 제품군과 공개 기술 사양입니다.`
          : `Published brand, manufacturer, category and technical specifications for the ${productName}.`,
        creator: {
          '@id': ORGANIZATION_ID,
        },
        publisher: {
          '@id': ORGANIZATION_ID,
        },
        about: {
          '@id': equipmentId,
        },
        keywords: [product.model, 'WATERBEE', productCategory],
        variableMeasured: product.specs.map((specification) => ({
          '@type': 'PropertyValue',
          name: isKo ? specification.label : specification.labelEn,
          value: isKo ? specification.value : specification.valueEn,
        })),
      },
    },
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
    name: isKo ? '워터비 언론보도 및 소식' : 'Waterbee News and Press',
    description: isKo
      ? '워터비의 수질계측 기술 실증, 기업 협력과 글로벌 시장 진출 관련 언론보도 모음'
      : 'Press coverage of Waterbee technology validation, corporate collaboration and global market development',
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
          '@type': 'NewsArticle',
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
