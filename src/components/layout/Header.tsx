'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Menu, Phone } from 'lucide-react'
import { clsx } from 'clsx'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

const navItems = [
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const

export default function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 로고 */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="text-navy-900 font-black text-sm">W</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wider group-hover:text-gold-500 transition-colors">
                WATERBEE
              </span>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors duration-200 relative py-1',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-500 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100',
                    pathname.startsWith(item.href)
                      ? 'text-gold-500 after:scale-x-100'
                      : 'text-text-secondary hover:text-white',
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* 우측 액션 */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href="tel:1555-3534"
                className="flex items-center gap-1.5 text-text-secondary hover:text-gold-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>1555-3534</span>
              </a>
              <Link
                href="/contact"
                className="bg-gold-500 text-navy-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gold-400 transition-all duration-200"
              >
                {t('contact')}
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-text-secondary hover:text-white transition-colors p-1"
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
