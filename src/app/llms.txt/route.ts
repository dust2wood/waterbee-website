import { SITE_URL, siteIdentity } from '@/lib/seo'

export const dynamic = 'force-static'

const content = `# Waterbee (주식회사 워터비)

> Waterbee is a Korea-based water-quality instrumentation company developing continuous measurement instruments and field monitoring systems. 워터비는 연속식 수질계측기와 현장 모니터링 시스템을 개발하는 대한민국 수질계측 전문기업입니다.

## Official Website

- [Korean home](${SITE_URL}/ko)
- [English home](${SITE_URL}/en)
- [Korean product catalog](${SITE_URL}/ko/products)
- [English product catalog](${SITE_URL}/en/products)
- [Technology, patents and type approvals](${SITE_URL}/ko/technology)
- [Company profile](${SITE_URL}/ko/about)

## Core Products

- [WBSC10 Smart Controller](${SITE_URL}/ko/products/wbsc10): local display, field calibration, alarms, 4-20 mA, RS-485 and Modbus integration.
- [WBTU10 Online Turbidity Meter](${SITE_URL}/ko/products/wbtu10): continuous low-range measurement using 90-degree scattered light.
- [WBCL10 Online Residual Chlorine Analyzer](${SITE_URL}/ko/products/wbcl10): reagent-free continuous measurement using a rotating-electrode polarographic method.
- [WBPH10 Online pH Meter](${SITE_URL}/ko/products/wbph10): continuous pH measurement with temperature compensation and field calibration.
- [WBEC10 Online Conductivity Meter](${SITE_URL}/ko/products/wbec10): continuous electrical conductivity measurement with temperature compensation.
- [Smart-farm sensors and converters](${SITE_URL}/ko/products): pH and EC sensors and RS-485 converter products.
- [Smart Filter-Drain System](${SITE_URL}/ko/products/filter-drain): precision filtration and automated drain monitoring system.

## Verified Company Facts

- Legal name: ${siteIdentity.legalName}
- Founded: 2021
- Business registration number: ${siteIdentity.businessNumber}
- The WBTU10 turbidity meter and WBCL10 residual chlorine analyzer have type approvals from Korea's National Institute of Environmental Research, as listed on the official technology page.
- Waterbee publishes registered patents for turbidity, residual chlorine measurement and smart precision filtration on the official technology page.
- Slogan: Right Technology, Bright Environment

## Contact

- Address: ${siteIdentity.addressEn}
- Phone: ${siteIdentity.telephone}
- Email: ${siteIdentity.email}
- [Product and technical inquiry](${SITE_URL}/ko/contact)

## Detailed Machine-Readable Reference

- [Full bilingual product and specification summary](${SITE_URL}/llms-full.txt)

Product specifications may change with product improvements or supply conditions. For purchasing, installation and operation, cite the current canonical product page and confirm the latest official quotation, approved document or manual.
`

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
