'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Droplets, Radio, ShieldCheck } from 'lucide-react'

const icons = [Droplets, ShieldCheck, Radio]

export default function HeroSection() {
  const t = useTranslations('hero')
  const pillars = [0, 1, 2].map((index) => ({
    title: t(`pillars.${index}.title`),
    description: t(`pillars.${index}.description`),
    Icon: icons[index],
  }))
  const highlights = [0, 1, 2].map((index) => t(`highlights.${index}`))

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,201,0,0.16),transparent_24%),radial-gradient(circle_at_85%_16%,rgba(74,154,202,0.16),transparent_20%),linear-gradient(180deg,rgba(7,18,31,0.35),rgba(7,18,31,0.78))]" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(252,201,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(252,201,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute left-1/2 top-32 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-44 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full border border-gold-500/10" />
        <div className="absolute left-[18%] top-[26%] h-3 w-3 rounded-full bg-gold-400/60 shadow-[0_0_30px_rgba(252,201,0,0.5)]" />
        <div className="absolute right-[22%] top-[30%] h-3 w-3 rounded-full bg-cyan-300/70 shadow-[0_0_30px_rgba(111,217,255,0.45)]" />
        <div className="absolute left-1/2 top-[60%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/60" />
      </div>

      <div className="container-custom relative z-10 flex min-h-[92vh] items-center justify-center pt-28 pb-20 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" />
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            style={{
              letterSpacing: '-0.03em',
              lineHeight: '1.14',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
            }}
          >
            {t('title').split('\n').map((line, index) => (
              <span key={index}>
                {index === 0 ? (
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

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg"
            style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/technology"
              className="group inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/20 transition-all duration-200 hover:bg-gold-400"
            >
              {t('cta_primary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.07]"
            >
              {t('cta_secondary')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {pillars.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                  <Icon className="h-5 w-5 text-gold-400" />
                </div>
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-3 text-sm leading-7 text-text-secondary">{description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-text-secondary"
      >
        <span className="tracking-widest uppercase text-[10px]">{t('scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
