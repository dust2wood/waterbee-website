import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: {
      default: isEn ? 'Waterbee - Water Quality Measurement Specialist' : '워터비 - 수질 측정 전문기업',
      template: isEn ? '%s | Waterbee' : '%s | 워터비',
    },
    description: isEn
      ? 'Waterbee specializes in rotating electrode residual chlorine analyzers, turbidity meters, pH meters, and EC meters for automated water quality monitoring.'
      : '주식회사 워터비는 회전전극식 잔류염소계, 탁도계, pH계, EC계를 전문으로 하는 수질 측정 솔루션 기업입니다.',
    keywords: isEn
      ? ['residual chlorine analyzer', 'turbidity meter', 'pH meter', 'EC meter', 'water quality monitoring', 'waterworks', 'Waterbee']
      : ['잔류염소계', '탁도계', 'pH계', 'EC계', '수질측정', '수질모니터링', '정수장', '워터비'],
    verification: {
      google: 'FKdDoHEMxiQtzhQJgZfIfWPREXEe0tizZl4JGfGgWLQ',
    },
    alternates: {
      canonical: `https://www.waterbee.co.kr/${locale}`,
      languages: {
        'ko': 'https://www.waterbee.co.kr/ko',
        'en': 'https://www.waterbee.co.kr/en',
      },
    },
    openGraph: {
      siteName: 'Waterbee',
      locale: isEn ? 'en_US' : 'ko_KR',
      alternateLocale: isEn ? 'ko_KR' : 'en_US',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'ko' | 'en')) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
