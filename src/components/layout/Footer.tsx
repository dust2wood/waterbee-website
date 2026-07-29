'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const navLinks = [
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="bg-[#151a19] text-white">
      <div className="container-custom py-14 lg:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Image
              src="/images/logo-new.png"
              alt="WATERBEE"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#aeb8b5]">{t('description')}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[0.7fr_1.3fr]">
            <nav>
              <div className="mb-4 text-[11px] font-bold uppercase text-[#f5c400]">{t('links')}</div>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="text-sm text-[#c8cfcd] transition-colors hover:text-white">
                      {tNav(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <div className="mb-4 text-[11px] font-bold uppercase text-[#f5c400]">Contact</div>
              <div className="space-y-3 text-sm leading-6 text-[#c8cfcd]">
                <a href="tel:1555-3534" className="block hover:text-white">1555-3534</a>
                <a href="mailto:support@waterbee.co.kr" className="block break-all hover:text-white">support@waterbee.co.kr</a>
                <p>{t('address_value')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-[#8f9996] sm:flex-row sm:items-center sm:justify-between">
          <p>{t('copyright')}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>{t('business_number')} 291-87-02513</span>
            <Link href="/privacy" className="hover:text-white">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-white">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
