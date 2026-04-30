'use client'

import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight, Gauge, Orbit, ShieldCheck } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'
import RotatingElectrodeDiagram from '@/components/technology/RotatingElectrodeDiagram'

const icons = [Orbit, Gauge, ShieldCheck]

export default function TechnologySpotlight() {
  const t = useTranslations('technology.rotating_electrode')
  const locale = useLocale()

  const tags = [0, 1, 2].map((index) => t(`tags.${index}`))
  const steps = [0, 1, 2, 3].map((index) => ({
    title: t(`steps.${index}.title`),
    description: t(`steps.${index}.description`),
  }))
  const metrics = [0, 1, 2].map((index) => ({
    value: t(`metrics.${index}.value`),
    label: t(`metrics.${index}.label`),
    Icon: icons[index],
  }))

  return (
    <section className="section-padding relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-start gap-10 xl:grid-cols-[1.03fr,0.97fr] xl:gap-14">
          <AnimatedSection className="xl:sticky xl:top-28" direction="right">
            <RotatingElectrodeDiagram locale={locale} />
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1 text-sm font-semibold tracking-widest text-gold-400 uppercase">
                {t('eyebrow')}
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-5xl">
                {t('title')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-text-secondary">
                {t('subtitle')}
              </p>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                {t('description')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step, index) => (
                <AnimatedSection key={step.title} delay={0.15 + index * 0.07}>
                  <div className="group h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:bg-white/[0.05]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.3em] text-gold-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent ml-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map(({ value, label, Icon }, index) => (
                <AnimatedSection key={label} delay={0.2 + index * 0.07}>
                  <div className="rounded-[22px] border border-white/10 bg-navy-800/75 p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10">
                      <Icon className="h-5 w-5 text-gold-400" />
                    </div>
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="mt-1 text-sm text-text-secondary">{label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 rounded-xl border border-gold-500/25 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-400 transition-all duration-200 hover:bg-gold-500 hover:text-navy-900"
              >
                {t('cta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
