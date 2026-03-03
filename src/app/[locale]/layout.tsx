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

export const metadata: Metadata = {
  title: {
    default: '워터비 - 수질 측정 전문기업',
    template: '%s | 워터비',
  },
  description:
    '주식회사 워터비는 회전전극식 잔류염소계, 탁도계, pH/EC계를 전문으로 하는 수질 측정 솔루션 기업입니다.',
  keywords: ['잔류염소계', '탁도계', 'pH계', 'EC계', '수질측정', '수질모니터링', '정수장', '워터비'],
  openGraph: {
    siteName: '워터비 (Waterbee)',
    locale: 'ko_KR',
    type: 'website',
  },
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
