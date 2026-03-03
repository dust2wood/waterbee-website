import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '개인정보처리방침' : 'Privacy Policy',
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-navy-900">
      <div className="container-custom py-16 max-w-3xl">
        <h1 className="text-2xl font-bold text-white mb-6">
          {isKo ? '개인정보처리방침' : 'Privacy Policy'}
        </h1>
        <p className="text-text-secondary leading-relaxed">
          {isKo
            ? '개인정보처리방침은 준비 중입니다. 문의사항은 support@waterbee.co.kr로 연락해 주세요.'
            : 'Privacy policy is being prepared. For inquiries, please contact support@waterbee.co.kr.'}
        </p>
      </div>
    </div>
  )
}
