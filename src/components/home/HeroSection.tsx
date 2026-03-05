'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(252,201,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(252,201,0,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-8 -translate-y-1/2 w-[560px] h-[560px] bg-navy-800/40 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-28">

          {/* 좌측: 텍스트 콘텐츠 */}
          <div className="flex flex-col justify-center">
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
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-white mb-6"
              style={{
                letterSpacing: '-0.02em',
                lineHeight: '1.18',
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
              className="text-text-secondary text-base sm:text-[1.05rem] max-w-md mb-10 leading-[1.75] font-normal"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-16"
            >
              <Link
                href="/products"
                className="bg-gold-500 text-navy-900 font-bold px-7 py-3.5 rounded-lg hover:bg-gold-400 transition-all duration-200 inline-flex items-center gap-2 text-sm tracking-wide shadow-lg shadow-gold-500/20 group"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/[0.07] transition-all duration-200 inline-flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t('cta_secondary')}
              </Link>
            </motion.div>

            {/* 통계 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-sm border-t border-white/10 pt-8"
            >
              {[
                { value: '500+', label: '납품 실적' },
                { value: '20+', label: '업계 선도 특허 및 기술 인증' },
                { value: '99.9%', label: '측정 신뢰성' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl sm:text-3xl font-bold text-gold-500"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-text-secondary text-xs mt-1.5 leading-snug"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 우측: 장식 영역 (Clean whitespace + 데이터 시각화) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="relative w-full aspect-square max-w-[420px]"
            >
              {/* 동심원 장식 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-white/[0.06]" />
                <div className="absolute w-52 h-52 rounded-full border border-gold-500/[0.12]" />
                <div className="absolute w-32 h-32 rounded-full border border-gold-500/[0.18]" />
                <div className="absolute w-16 h-16 rounded-full bg-gold-500/[0.08] border border-gold-500/30 flex items-center justify-center">
                  <span className="text-gold-500 font-black text-xl tracking-tight">W</span>
                </div>
              </div>

              {/* 부유 데이터 카드 — 잔류염소 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-6 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 shadow-xl"
              >
                <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">잔류염소</div>
                <div className="text-white font-semibold text-sm">
                  0.01 – 2.00 <span className="text-gold-500 font-normal text-xs">mg/L</span>
                </div>
              </motion.div>

              {/* 부유 데이터 카드 — 측정 신뢰성 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 left-4 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 shadow-xl"
              >
                <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">측정 신뢰성</div>
                <div className="text-white font-semibold text-sm">
                  99.9 <span className="text-gold-500 font-normal text-xs">%</span>
                </div>
              </motion.div>

              {/* 부유 데이터 카드 — 특허 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-28 right-2 bg-navy-800/80 backdrop-blur-md border border-gold-500/20 rounded-xl px-5 py-3.5 shadow-xl"
              >
                <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">특허 · 기술 인증</div>
                <div className="text-gold-500 font-bold text-sm">20+</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-8 sm:left-12 lg:left-16 flex flex-col items-start gap-2 text-text-secondary text-xs"
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
