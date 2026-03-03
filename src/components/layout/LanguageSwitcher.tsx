'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleSwitch = () => {
    const nextLocale = locale === 'ko' ? 'en' : 'ko'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1.5 text-text-secondary hover:text-gold-500 transition-colors text-sm font-medium"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'ko' ? 'EN' : '한국어'}</span>
    </button>
  )
}
