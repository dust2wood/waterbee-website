'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'
import Image from 'next/image'

// 깨끗한 물결 — Unsplash 고해상도 이미지
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1548919973-5cdf5916ad7a?q=80&w=2000&auto=format&fit=crop'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ── 우측 배경 이미지 (데스크탑: 우측 60% 커버, 모바일: 전체 배경) ── */}
      <div className="absolute inset-0 lg:left-[40%]">
        <Image
          src={HERO_IMAGE_URL}
          alt="clean water background"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.72 }}
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        {/* 모바일: 전체를 덮는 흰 오버레이 — 텍스트 가독성 보장 */}
        <div className="absolute inset-0 bg-white/80 lg:hidden" />
        {/* 데스크탑: 왼쪽 강한 페이드 — 텍스트 영역과 블렌딩 */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.92) 15%, rgba(255,255,255,0.55) 45%, transparent 75%)',
          }}
        />
        {/* 상단·하단 페이드 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, transparent 18%, transparent 78%, rgba(255,255,255,0.4) 100%)',
          }}
        />
      </div>

      {/* ── 텍스트 콘텐츠 ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="min-h-screen flex items-center py-32">
          <div className="max-w-xl">

            {/* 배지 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center text-gold-600 text-xs font-semibold tracking-widest uppercase border-l-2 border-gold-500 pl-3">
                {t('badge')}
              </span>
            </motion.div>

            {/* 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-[2.75rem] lg:text-5xl font-bold text-[#0B1929] mb-7"
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
              className="text-gray-500 text-base sm:text-lg max-w-md mb-12 leading-[1.8] font-normal"
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
                className="bg-gold-500 text-[#0B1929] font-bold px-7 py-3.5 rounded-lg hover:bg-gold-400 transition-all duration-200 inline-flex items-center gap-2 text-sm tracking-wide shadow-md shadow-gold-500/25 group"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border border-[#0B1929]/20 text-[#0B1929] font-medium px-7 py-3.5 rounded-lg hover:bg-[#0B1929]/5 transition-all duration-200 inline-flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t('cta_secondary')}
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 하단 전환 — 다음 섹션(dark)으로 자연스럽게 이어지도록 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(11,25,41,0.08))',
        }}
      />

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-8 sm:left-12 lg:left-16 flex flex-col items-start gap-2 text-gray-400 z-20"
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
