'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const clients = [
  { name: '수도권 정수사업소', category: '정수 처리' },
  { name: '한국수자원공사', category: '정수 처리' },
  { name: '지방 환경청', category: '산업용 및 하폐수' },
  { name: '산업단지 공단', category: '산업용 및 하폐수' },
  { name: '지자체 하수처리장', category: '산업용 및 하폐수' },
  { name: '식품·제약 업체', category: '산업용 및 하폐수' },
]

export default function ClientLogos() {
  const t = useTranslations('client_logos')

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <AnimatedSection key={index} delay={index * 0.07}>
              <div className="bg-navy-900 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 hover:border-gold-500/30 transition-all duration-300 aspect-square">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mb-1">
                  <span className="text-gold-500 font-bold text-lg">{client.name[0]}</span>
                </div>
                <span className="text-white text-xs font-medium leading-tight">{client.name}</span>
                <span className="text-text-secondary text-xs">{client.category}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 실적 카운터 */}
        <AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: '납품 현장' },
              { value: '15+', label: '협력 지자체' },
              { value: '100%', label: '품질 보증' },
              { value: '24/7', label: 'A/S 대응' },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy-900 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gold-500 mb-1">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
