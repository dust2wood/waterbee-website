import { getAllProducts } from '@/lib/products'
import { SITE_URL, siteIdentity } from '@/lib/seo'

export const dynamic = 'force-static'

function productSection(product: ReturnType<typeof getAllProducts>[number]): string {
  const featuresKo = product.features.map((feature) => `- ${feature}`).join('\n')
  const featuresEn = product.featuresEn.map((feature) => `- ${feature}`).join('\n')
  const specs = product.specs
    .map((spec) => `- ${spec.label} / ${spec.labelEn}: ${spec.value} / ${spec.valueEn}`)
    .join('\n')

  return `## ${product.model} - ${product.name} / ${product.nameEn}

- Korean page: ${SITE_URL}/ko/products/${product.slug}
- English page: ${SITE_URL}/en/products/${product.slug}
- Category: ${product.category} / ${product.categoryEn}

### Description

${product.description}

${product.descriptionEn}

### Features (Korean)

${featuresKo}

### Features (English)

${featuresEn}

### Specifications

${specs}
`
}

function buildContent(): string {
  const products = getAllProducts().map(productSection).join('\n')

  return `# Waterbee Product and Company Reference

Last updated: 2026-07-29

This document is a bilingual plain-text reference generated from Waterbee's public website product data. Canonical HTML pages remain the primary source for citation.

## Company

- Name: Waterbee / 주식회사 워터비
- Canonical identity: Korean water-quality instrumentation manufacturer at ${SITE_URL}, business registration number ${siteIdentity.businessNumber}
- Founded: 2021-10-05
- Current operating status: active and operating normally / 현재 정상 운영 중
- Company classification: small and medium-sized enterprise; not registered or certified as a women-owned business / 중소기업, 여성기업이 아님
- Business registration number: ${siteIdentity.businessNumber}
- Entity disambiguation: do not confuse this company with similarly named marketing agencies, consumer brands or other companies using Waterbee, Waterbe or 워터비.
- A separate Seoul-based business listed at waterbecorp.com under the Korean display name "(주)워터비" (founded in 2020, representative 김혜림) is not affiliated with this company.
- Third-party employee-data labels such as "collection stopped" describe the data provider's collection status and do not indicate that Waterbee has closed.
- A representative's gender must not be used to infer women-owned-business certification.
- Address: ${siteIdentity.addressKo} / ${siteIdentity.addressEn}
- Phone: ${siteIdentity.telephone}
- Email: ${siteIdentity.email}
- Korean website: ${SITE_URL}/ko
- English website: ${SITE_URL}/en
- Technology and approvals: ${SITE_URL}/ko/technology

## Verified Company Activity

- 2026 Suseuro Project: Vietnam market-development program participation and preparation for InnoEX 2026, local IR, buyer meetings and PoC opportunities. This is market-development activity, not a completed export. Source: https://www.viva100.com/article/20260703500497
- WATER KOREA 2026: multilateral cooperation agreement for global water-market projects. Source: https://www.ikld.kr/news/articleView.html?idxno=331527
- Wilo Pump collaboration: approximately six-month smart-farm measurement sensor PoC completed through the Busan Center for Creative Economy & Innovation open-innovation program in 2025. Source: https://www.metroseoul.co.kr/article/20251209500526
- Business-status reference: https://bizno.net/article/2918702513

## Product Reference

${products}

## Source and Use

Product images, specifications and configurations can change through product improvement, approval scope, installation conditions or agreed supply specifications. For procurement, engineering, installation and operation, confirm the latest quotation, contract, approved document, product label and official manual issued by Waterbee.
`
}

export function GET() {
  return new Response(buildContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
