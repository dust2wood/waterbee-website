'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const stats = [0, 1, 2].map((index) => ({
    value: t(`stats.${index}.value`),
    label: t(`stats.${index}.label`),
  }))
  const highlights = [0, 1, 2].map((index) => t(`highlights.${index}`))

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(252,201,0,0.18),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(74,154,202,0.2),transparent_24%),linear-gradient(180deg,rgba(7,18,31,0.35),rgba(7,18,31,0.72))]" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(252,201,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(252,201,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 flex min-h-screen items-center pt-28 pb-20 lg:pt-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr,0.98fr] xl:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-500 uppercase">
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
              className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
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
              className="mt-10 flex flex-col items-start gap-3 sm:flex-row"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold tracking-wide text-navy-900 shadow-lg shadow-gold-500/20 transition-all duration-200 hover:bg-gold-400"
              >
                {t('cta_primary')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.07]"
              >
                <Phone className="h-4 w-4" />
                {t('cta_secondary')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(2,8,15,0.45)] backdrop-blur-sm lg:p-8">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />

              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
                    {t('panel.eyebrow')}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {t('panel.title')}
                  </h2>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  WBCL10
                </div>
              </div>

              <p className="max-w-lg text-sm leading-7 text-text-secondary">
                {t('panel.description')}
              </p>

              <div className="relative mt-8 min-h-[430px]">
                <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl" />
                <div className="absolute inset-x-10 top-12 h-56 rounded-full border border-white/10 bg-white/[0.03]" />

                <div className="absolute left-0 top-8 rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 backdrop-blur-sm">
                  <div className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
                    01
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">{t('panel.labels.motor')}</div>
                </div>

                <div className="absolute right-0 top-36 rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 backdrop-blur-sm">
                  <div className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
                    02
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">{t('panel.labels.electrode')}</div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 rounded-[24px] border border-cyan-300/15 bg-cyan-300/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                        03
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">{t('panel.labels.signal')}</div>
                    </div>
                    <div className="flex items-end gap-2">
                      {[32, 22, 38, 28, 44, 40].map((height, index) => (
                        <div
                          key={`${height}-${index}`}
                          className="w-2 rounded-full bg-gradient-to-t from-cyan-200/80 to-gold-400"
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto h-[360px] w-full max-w-[360px] pt-4">
                  <Image
                    src="/images/products/wbcl10-main.png"
                    alt={t('panel.image_alt')}
                    fill
                    priority={locale === 'ko'}
                    className="object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
                    sizes="(max-width: 1024px) 80vw, 34vw"
                  />
                </div>
              </div>
            </div>
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
