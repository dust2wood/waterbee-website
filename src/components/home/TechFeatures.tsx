'use client'

import { useTranslations } from 'next-intl'
import { RotateCcw, Wrench, Wifi } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const icons = [RotateCcw, Wrench, Wifi]

export default function TechFeatures() {
  const t = useTranslations('tech_features')

  const items = [0, 1, 2].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    Icon: icons[i],
  }))

  return (
    <section className="section-padding bg-navy-800">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ title, description, Icon }, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="group relative bg-navy-900 border border-white/10 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5">
                {/* 아이콘 */}
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>

                {/* 번호 */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{description}</p>

                {/* 바텀 라인 */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
