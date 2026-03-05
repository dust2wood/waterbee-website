'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* 미세 그리드 배경 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(252,201,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(252,201,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center py-32">

        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
            {t('badge')}
          </span>
        </motion.div>

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-7"
          style={{
            letterSpacing: '-0.02em',
            lineHeight: '1.22',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
          }}
        >
          {t('title').split('\n').map((line, i) => (
            <span key={i}>
              {i === 0 ? (
                line
              ) : (
                <>
                  <br />
                  <span className="text-gold-500">{line}</span>
                </>
              )}
            </span>
          ))}
        </motion.h1>

        {/* 서브타이틀 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-12 leading-[1.8] font-normal"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/products"
            className="bg-gold-500 text-navy-900 font-bold px-8 py-3.5 rounded-lg hover:bg-gold-400 transition-all duration-200 inline-flex items-center gap-2 text-sm tracking-wide shadow-lg shadow-gold-500/20 group"
          >
            {t('cta_primary')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/[0.07] transition-all duration-200 inline-flex items-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            {t('cta_secondary')}
          </Link>
        </motion.div>

      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary z-20"
      >
        <span className="tracking-widest uppercase text-[10px]">{t('scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
