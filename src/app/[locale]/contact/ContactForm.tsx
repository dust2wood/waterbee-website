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
  'w-full border border-[#bfc7c4] bg-white px-4 py-3 text-sm text-[#202725]',
  'placeholder:text-[#9aa3a0]',
  'focus:outline-none focus:border-[#151a19] focus:ring-1 focus:ring-[#151a19]/10',
  'transition-colors duration-200',
)

const errorClass = 'border-red-500 focus:border-red-500'

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
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <div className="border-b border-[#d7dcda] bg-[#f1f3f1] py-16 lg:py-20">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
              as="h1"
              align="left"
              className="mb-0"
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* 문의 폼 */}
          <div>
            <AnimatedSection>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#596361]">
                      {t('form.name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('name')}
                      placeholder={t('form.name_placeholder')}
                      className={clsx(inputClass, errors.name && errorClass)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#596361]">
                      {t('form.company')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('company')}
                      placeholder={t('form.company_placeholder')}
                      className={clsx(inputClass, errors.company && errorClass)}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#596361]">
                      {t('form.email')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('form.email_placeholder')}
                      className={clsx(inputClass, errors.email && errorClass)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#596361]">
                      {t('form.phone')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('phone')}
                      placeholder={t('form.phone_placeholder')}
                      className={clsx(inputClass, errors.phone && errorClass)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#596361]">
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
                    <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#596361]">
                    {t('form.message')} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    placeholder={t('form.message_placeholder')}
                    className={clsx(inputClass, 'resize-none', errors.message && errorClass)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* 상태 메시지 */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 border border-green-700/30 bg-green-50 px-5 py-4 text-sm text-green-800">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t('form.success')}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 border border-red-700/30 bg-red-50 px-5 py-4 text-sm text-red-800">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {t('form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50"
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
              <div className="sticky top-28 border-t border-[#9fa8a5] pt-7">
                <h3 className="mb-7 text-xl font-semibold text-[#202725]">{t('info.title')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f5c400]">
                      <Phone className="h-4 w-4 text-[#151a19]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-[#7a8380]">{t('info.phone')}</div>
                      <a href="tel:1555-3534" className="font-semibold text-[#202725] transition-colors hover:text-[#8c7200]">
                        1555-3534
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f5c400]">
                      <Mail className="h-4 w-4 text-[#151a19]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-[#7a8380]">{t('info.email')}</div>
                      <a href="mailto:support@waterbee.co.kr" className="break-all text-sm font-semibold text-[#202725] transition-colors hover:text-[#8c7200]">
                        support@waterbee.co.kr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f5c400]">
                      <MapPin className="h-4 w-4 text-[#151a19]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-[#7a8380]">{t('info.address')}</div>
                      <p className="text-sm leading-relaxed text-[#202725]">
                        {t('info.address_value')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f5c400]">
                      <Clock className="h-4 w-4 text-[#151a19]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-[#7a8380]">{t('info.hours')}</div>
                      <p className="text-sm leading-relaxed text-[#202725]">{t('info.hours_value')}</p>
                    </div>
                  </div>
                </div>

                {/* 구분선 */}
                <div className="mt-7 border-t border-[#d2d7d4] pt-6">
                  <p className="text-xs leading-relaxed text-[#68716f]">
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
