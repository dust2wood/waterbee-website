import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ContactForm from './ContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '문의하기' : 'Contact',
    description:
      locale === 'ko'
        ? '워터비 제품 및 기술 지원 문의'
        : 'Waterbee product and technical support inquiry',
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ContactForm />
}
