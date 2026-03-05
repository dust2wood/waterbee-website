'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const navLinks = [
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
]

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 브랜드 */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                alt="WATERBEE"
                width={160}
                height={36}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <p className="text-text-secondary text-sm mb-6 max-w-sm leading-relaxed">
              {t('tagline')} — {t('description')}
            </p>
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:1555-3534" className="hover:text-gold-500 transition-colors">1555-3534</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:support@waterbee.co.kr" className="hover:text-gold-500 transition-colors">
                  support@waterbee.co.kr
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{t('address_value')}</span>
              </div>
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('links')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-gold-500 transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 법적 고지 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-text-secondary text-sm hover:text-gold-500 transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary text-sm hover:text-gold-500 transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10 space-y-1">
              <p className="text-text-secondary text-xs">
                {t('business_number')} 291-87-02513
              </p>
              <p className="text-text-secondary text-xs">
                {t('ceo')} {t('ceo_value')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs">{t('copyright')}</p>
          <div className="flex items-center gap-1 text-text-secondary text-xs">
            <span>Powered by</span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-500 transition-colors flex items-center gap-1"
            >
              Vercel <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
