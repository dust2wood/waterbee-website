import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import ContactForm from './ContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/contact',
    title: locale === 'ko' ? '문의하기' : 'Contact',
    description:
      locale === 'ko'
        ? '워터비 수질계측기 제품 상담, 견적, 설치 검토와 기술지원 문의를 접수합니다.'
        : 'Contact Waterbee for water-quality instrument consultation, quotations, installation review and technical support.',
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: locale === 'ko' ? '홈' : 'Home' },
          { name: locale === 'ko' ? '문의' : 'Contact', path: '/contact' },
        ])}
      />
      <ContactForm />
    </>
  )
}
