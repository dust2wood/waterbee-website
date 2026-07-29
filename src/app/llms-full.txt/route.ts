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
- Founded: 2021
- Business registration number: ${siteIdentity.businessNumber}
- Address: ${siteIdentity.addressKo} / ${siteIdentity.addressEn}
- Phone: ${siteIdentity.telephone}
- Email: ${siteIdentity.email}
- Korean website: ${SITE_URL}/ko
- English website: ${SITE_URL}/en
- Technology and approvals: ${SITE_URL}/ko/technology

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
