'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { clsx } from 'clsx'
import LanguageSwitcher from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { key: 'home', href: '/' },
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'about', href: '/about' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
] as const

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav')
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/45 lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[86vw] max-w-sm flex-col bg-white lg:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-[#dce1de] px-5">
              <Image src="/images/logo-transparent.png" alt="WATERBEE" width={126} height={64} className="h-auto w-[112px]" />
              <button type="button" onClick={onClose} className="p-2 text-[#303735]" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 px-5 py-8">
              <ul className="border-t border-[#dce1de]">
                {navItems.map((item) => (
                  <li key={item.key} className="border-b border-[#dce1de]">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={clsx(
                        'flex min-h-14 items-center text-base font-semibold',
                        pathname === item.href ? 'text-[#8c7200]' : 'text-[#202725]',
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-[#dce1de] p-5">
              <div className="mb-5 flex items-center justify-between">
                <LanguageSwitcher />
                <a href="tel:1555-3534" className="text-sm font-semibold text-[#202725]">1555-3534</a>
              </div>
              <Link href="/contact" onClick={onClose} className="flex h-12 items-center justify-center bg-[#151a19] text-sm font-semibold text-white">
                {t('contact')}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
