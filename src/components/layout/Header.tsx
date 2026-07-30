'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Menu, Phone } from 'lucide-react'
import { clsx } from 'clsx'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

const navItems = [
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'news', href: '/news' },
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
          'fixed left-0 right-0 top-0 z-30 border-b bg-white transition-shadow duration-300',
          scrolled
            ? 'border-[#d7ddda] shadow-[0_8px_24px_rgba(21,26,25,0.06)]'
            : 'border-[#e3e7e5]',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* 로고 */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo-transparent.png"
                alt="WATERBEE"
                width={140}
                height={46}
                className="h-auto w-[116px] object-contain lg:w-[132px]"
                priority
              />
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={clsx(
                    'relative py-2 text-sm font-semibold transition-colors duration-200',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-500 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100',
                    pathname.startsWith(item.href)
                      ? 'text-[#151a19] after:scale-x-100'
                      : 'text-[#56605e] hover:text-[#151a19]',
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
                className="flex items-center gap-1.5 text-sm text-[#56605e] transition-colors hover:text-[#151a19]"
              >
                <Phone className="w-4 h-4" />
                <span>1555-3534</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#151a19] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#343a38]"
              >
                {t('contact')}
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[#353d3b] transition-colors hover:bg-[#f1f3f1] lg:hidden"
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
