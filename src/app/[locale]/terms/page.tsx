import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '이용약관' : 'Terms of Service',
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <div className="container-custom max-w-3xl py-16 lg:py-20">
        <h1 className="mb-6 text-2xl font-bold text-[#151a19]">
          {isKo ? '이용약관' : 'Terms of Service'}
        </h1>
        <p className="leading-relaxed text-[#68716f]">
          {isKo
            ? '이용약관은 준비 중입니다. 문의사항은 support@waterbee.co.kr로 연락해 주세요.'
            : 'Terms of service are being prepared. For inquiries, please contact support@waterbee.co.kr.'}
        </p>
      </div>
    </div>
  )
}
