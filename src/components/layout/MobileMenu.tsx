'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  { key: 'contact', href: '/contact' },
] as const

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav')
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 max-w-full bg-navy-800 z-50 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-gold-500 font-bold text-lg">WATERBEE</span>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 p-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={clsx(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        pathname === item.href
                          ? 'text-gold-500 bg-gold-500/10'
                          : 'text-text-secondary hover:text-white hover:bg-white/5',
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-white/10 flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={onClose}
                className="bg-gold-500 text-navy-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gold-400 transition-colors"
              >
                {t('contact')}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
