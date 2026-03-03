import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import TechFeatures from '@/components/home/TechFeatures'
import ProductHighlight from '@/components/home/ProductHighlight'
import ClientLogos from '@/components/home/ClientLogos'
import CtaBanner from '@/components/home/CtaBanner'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '워터비 - 수질 측정 전문기업' : 'Waterbee - Water Quality Measurement Specialist',
    description:
      locale === 'ko'
        ? '워터비는 회전전극식 잔류염소계, 탁도계, pH/EC계를 전문으로 하는 수질 자동화 모니터링 기업입니다.'
        : 'Waterbee specializes in rotating electrode residual chlorine analyzers, turbidity meters, and pH/EC meters for automated water quality monitoring.',
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <TechFeatures />
      <ProductHighlight />
      <ClientLogos />
      <CtaBanner />
    </>
  )
}
