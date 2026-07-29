import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import TechFeatures from '@/components/home/TechFeatures'
import ApplicationsSection from '@/components/home/ApplicationsSection'
import ProductHighlight from '@/components/home/ProductHighlight'
import NewsSection from '@/components/home/NewsSection'
import CtaBanner from '@/components/home/CtaBanner'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { organizationJsonLd, websiteJsonLd } from '@/lib/structuredData'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    title: locale === 'ko' ? '워터비 - 수질 측정 전문기업' : 'Waterbee - Water Quality Measurement Specialist',
    description:
      locale === 'ko'
        ? '워터비는 회전전극식 잔류염소계, 온라인 탁도계, pH계, 전기전도도계와 스마트 수질 모니터링 시스템을 개발하는 수질계측 전문기업입니다.'
        : 'Waterbee develops rotating-electrode residual chlorine analyzers, online turbidity meters, pH and conductivity meters, and smart water-quality monitoring systems.',
    absoluteTitle: true,
    imageAlt:
      locale === 'ko'
        ? '워터비 수질계측기와 수질 모니터링 솔루션'
        : 'Waterbee water-quality instruments and monitoring solutions',
    keywords:
      locale === 'ko'
        ? ['워터비', '여성기업', '수질계측기', '탁도계', '잔류염소계', 'pH계', '전기전도도계', '수질 모니터링']
        : ['Waterbee', 'women-owned business', 'water quality instruments', 'turbidity meter', 'residual chlorine analyzer', 'pH meter', 'conductivity meter'],
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale)} />
      <HeroSection />
      <ProductHighlight />
      <TechFeatures />
      <ApplicationsSection />
      <NewsSection locale={locale} />
      <CtaBanner />
    </>
  )
}
