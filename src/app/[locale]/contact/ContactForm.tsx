'use client'

import { useState, useMemo } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { sendContactEmail } from '@/lib/sendEmail'
import { clsx } from 'clsx'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  subject: string
  message: string
}

const inputClass = clsx(
  'w-full bg-navy-900 border border-white/20 rounded-xl px-4 py-3 text-white text-sm',
  'placeholder:text-text-secondary/50',
  'focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30',
  'transition-colors duration-200',
)

const errorClass = 'border-red-500/50 focus:border-red-500'

export default function ContactForm() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('form.validation.name_min')),
        company: z.string().min(1, t('form.validation.company_required')),
        email: z.string().email(t('form.validation.email_invalid')),
        phone: z.string().min(9, t('form.validation.phone_required')),
        subject: z.string().min(1, t('form.validation.subject_required')),
        message: z.string().min(10, t('form.validation.message_min')),
      }),
    [t],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const result = await sendContactEmail(data)
      if (result.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-navy-900">
      {/* 헤더 */}
      <div className="bg-navy-800 border-b border-white/10 py-16">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-0"
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 문의 폼 */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      {t('form.name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('name')}
                      placeholder={t('form.name_placeholder')}
                      className={clsx(inputClass, errors.name && errorClass)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      {t('form.company')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('company')}
                      placeholder={t('form.company_placeholder')}
                      className={clsx(inputClass, errors.company && errorClass)}
                    />
                    {errors.company && (
                      <p className="mt-1 text-red-400 text-xs">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      {t('form.email')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('form.email_placeholder')}
                      className={clsx(inputClass, errors.email && errorClass)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      {t('form.phone')}
                    </label>
                    <input
                      {...register('phone')}
                      placeholder={t('form.phone_placeholder')}
                      className={clsx(inputClass, errors.phone && errorClass)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-400 text-xs">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                    {t('form.subject')} <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register('subject')}
                    className={clsx(inputClass, errors.subject && errorClass)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t('form.subject_placeholder')}
                    </option>
                    <option value="product">{t('form.subjects.product')}</option>
                    <option value="quote">{t('form.subjects.quote')}</option>
                    <option value="technical">{t('form.subjects.technical')}</option>
                    <option value="partnership">{t('form.subjects.partnership')}</option>
                    <option value="other">{t('form.subjects.other')}</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                    {t('form.message')} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    placeholder={t('form.message_placeholder')}
                    className={clsx(inputClass, 'resize-none', errors.message && errorClass)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>
                  )}
                </div>

                {/* 상태 메시지 */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-5 py-4 text-sm">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t('form.success')}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {t('form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('form.submitting')}
                    </>
                  ) : (
                    t('form.submit')
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>

          {/* 연락처 정보 */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-semibold mb-6">{t('info.title')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs mb-0.5">{t('info.phone')}</div>
                      <a href="tel:031-000-0000" className="text-white font-semibold hover:text-gold-500 transition-colors">
                        031-000-0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs mb-0.5">{t('info.email')}</div>
                      <a href="mailto:support@waterbee.co.kr" className="text-white font-semibold hover:text-gold-500 transition-colors text-sm">
                        support@waterbee.co.kr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs mb-0.5">{t('info.address')}</div>
                      <p className="text-white text-sm leading-relaxed">
                        {isKo ? '경기도 화성시' : 'Hwaseong-si, Gyeonggi-do'}<br />
                        {isKo ? '(상세 주소 입력)' : 'South Korea'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs mb-0.5">{t('info.hours')}</div>
                      <p className="text-white text-sm leading-relaxed">{t('info.hours_value')}</p>
                    </div>
                  </div>
                </div>

                {/* 구분선 */}
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {t('info.emergency')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
