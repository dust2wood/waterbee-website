'use client'

import { useTranslations } from 'next-intl'
import { BrainCircuit, Eye, Orbit, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { Link } from '@/i18n/navigation'

const icons = [Orbit, Eye, BrainCircuit]

export default function TechFeatures() {
  const t = useTranslations('tech_features')

  const items = [0, 1, 2].map((i) => ({
    tag: t(`items.${i}.tag`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    Icon: icons[i],
  }))

  return (
    <section className="section-padding relative overflow-hidden bg-navy-800">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(252,201,0,0.08),transparent_24%)]" />
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-0"
            />
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-all duration-200 hover:gap-3"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ tag, title, description, Icon }, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/35 hover:shadow-[0_24px_60px_rgba(2,8,15,0.28)]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>

                <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gold-400/80">
                  {tag}
                </div>

                <div className="absolute top-6 right-6 text-5xl font-bold text-white/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-7">{description}</p>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
