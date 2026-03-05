'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

function HeroProductImage() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    // 이미지 로드 실패 시 — 미세 그라디언트 장식으로 대체
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-gold-500/[0.08]" />
        <div className="absolute w-40 h-40 rounded-full border border-gold-500/[0.14]" />
        <div className="absolute w-20 h-20 rounded-full bg-gold-500/[0.06] border border-gold-500/20 flex items-center justify-center">
          <span className="text-gold-500 font-black text-xl">W</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* 제품 이미지 */}
      <Image
        src="/images/products/wbcl10-main.png"
        alt="WBCL10 잔류염소계"
        fill
        className="object-contain object-center"
        style={{ opacity: 0.88 }}
        sizes="50vw"
        priority
        onError={() => setImgError(true)}
      />

      {/* 왼쪽 페이드 — 텍스트와 자연스럽게 블렌딩 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #0B1929 0%, rgba(11,25,41,0.75) 20%, rgba(11,25,41,0.2) 50%, transparent 75%)',
        }}
      />
      {/* 상단 페이드 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0B1929 0%, transparent 18%)',
        }}
      />
      {/* 하단 페이드 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0B1929 0%, transparent 22%)',
        }}
      />
    </div>
  )
}

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
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

      {/* 2단 그리드 */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── 좌측: 텍스트 콘텐츠 ── */}
        <div className="flex items-center px-6 sm:px-8 lg:px-12 py-32 lg:py-0">
          <div className="max-w-xl">

            {/* 배지 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center text-gold-500 text-xs font-semibold tracking-widest uppercase border-l-2 border-gold-500 pl-3">
                {t('badge')}
              </span>
            </motion.div>

            {/* 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-[2.75rem] lg:text-5xl font-bold text-white mb-7"
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
              className="text-text-secondary text-base sm:text-lg max-w-md mb-12 leading-[1.8] font-normal"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-3"
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

          </div>
        </div>

        {/* ── 우측: 제품 이미지 (데스크탑 전용) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <HeroProductImage />
        </motion.div>

      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-8 sm:left-12 lg:left-16 flex flex-col items-start gap-2 text-text-secondary z-20"
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
