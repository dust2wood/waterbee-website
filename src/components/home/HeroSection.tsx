'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 그리드 패턴 */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(252,201,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,201,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* 방사형 그라디언트 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        {/* 물결 애니메이션 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-navy-800/50 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-semibold px-5 py-2 rounded-full tracking-wide">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            {t('badge')}
          </span>
        </motion.div>

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight mb-8 uppercase"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl hover:bg-gold-400 transition-all duration-200 inline-flex items-center gap-2 text-base shadow-lg shadow-gold-500/20 group"
          >
            {t('cta_primary')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 text-base"
          >
            <Phone className="w-5 h-5" />
            {t('cta_secondary')}
          </Link>
        </motion.div>

        {/* 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-10 max-w-lg mx-auto border-t border-white/10 pt-10"
        >
          {[
            { value: '500+', label: '납품 실적' },
            { value: '20+', label: '업계 선도 특허 및 기술 인증' },
            { value: '99.9%', label: '측정 신뢰성' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gold-500 tracking-tight">{stat.value}</div>
              <div className="text-text-secondary text-xs mt-2 leading-snug" style={{ wordBreak: 'keep-all' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary text-xs"
      >
        <span className="tracking-widest uppercase text-xs">{t('scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
