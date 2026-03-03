'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CtaBanner() {
  const t = useTranslations('cta_banner')

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(252,201,0,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-navy-800 to-navy-800/90 border border-white/10 rounded-3xl p-10 lg:p-16 text-center shadow-xl">
            {/* 골드 악센트 라인 */}
            <div className="w-12 h-0.5 bg-gold-500/80 rounded-full mx-auto mb-8" />

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold-500 text-navy-900 font-bold px-10 py-4 rounded-xl hover:bg-gold-400 transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-gold-500/25 group text-base"
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1555-3534"
                className="border border-white/20 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                {t('phone')}: 1555-3534
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
