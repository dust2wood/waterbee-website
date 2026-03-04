'use client'

import { useTranslations } from 'next-intl'
import { Droplets, Sprout, Filter, Factory } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const icons = [Droplets, Factory, Filter]

export default function ApplicationsSection() {
  const t = useTranslations('applications')

  const items = [0, 1, 2].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    products: t(`items.${i}.products`),
    Icon: icons[i],
  }))

  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ title, description, products, Icon }, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-navy-800 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5">
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{description}</p>
                {products && (
                  <p className="mt-4 text-gold-500/90 text-xs font-mono uppercase tracking-wide">
                    {products}
                  </p>
                )}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
