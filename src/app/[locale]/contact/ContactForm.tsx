'use client'

import { useState, useMemo, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { sendContactEmail } from '@/lib/sendEmail'
import { contactSubjects } from '@/lib/contact'
import { Link } from '@/i18n/navigation'
import { clsx } from 'clsx'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  subject: string
  message: string
  consent: boolean
  website: string
}

const inputClass = clsx(
  'w-full border border-[#bfc7c4] bg-white px-4 py-3 text-base text-[#202725] sm:text-sm',
  'placeholder:text-[#9aa3a0]',
  'focus:outline-none focus:border-[#151a19] focus:ring-1 focus:ring-[#151a19]/10',
  'transition-colors duration-200',
)

const errorClass = 'border-red-500 focus:border-red-500'

export default function ContactForm({ deliveryReady }: { deliveryReady: boolean }) {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isKo = locale === 'ko'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const request = useRef<{ payload: string; id: string }>()
  const sending = useRef(false)

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, t('form.validation.name_min')).max(80),
        company: z.string().trim().min(1, t('form.validation.company_required')).max(160),
        email: z.string().trim().email(t('form.validation.email_invalid')).max(254),
        phone: z.string().trim().min(9, t('form.validation.phone_required')).max(40),
        subject: z.enum(contactSubjects, { errorMap: () => ({ message: t('form.validation.subject_required') }) }),
        message: z.string().trim().min(10, t('form.validation.message_min')).max(5000),
        consent: z.boolean().refine(Boolean, isKo ? '개인정보 수집·이용 동의 필요' : 'Consent required'),
        website: z.string().max(0),
      }),
    [t, isKo],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, website: '' },
  })

  const onSubmit = async (data: FormData) => {
    if (sending.current) return
    sending.current = true
    setStatus('loading')
    try {
      const payload = JSON.stringify(data)
      if (request.current?.payload !== payload) request.current = { payload, id: crypto.randomUUID() }
      const result = await sendContactEmail({ ...data, requestId: request.current.id })
      if (result.success) {
        setStatus('success')
        reset()
        request.current = undefined
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      sending.current = false
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <div className="border-b border-[#d7dcda] bg-[#f1f3f1] py-8 lg:py-12">
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

      <div className="container-custom py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          {/* 문의 폼 */}
          <div>
            <AnimatedSection>
              {deliveryReady ? <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-busy={status === 'loading'}>
                <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" {...register('website')} tabIndex={-1} autoComplete="off" /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#596361]">
                      {t('form.name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('name')}
                      aria-label={t('form.name')} autoComplete="name" maxLength={80} aria-invalid={!!errors.name}
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
                      aria-label={t('form.company')} autoComplete="organization" maxLength={160} aria-invalid={!!errors.company}
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
                      aria-label={t('form.email')} autoComplete="email" maxLength={254} aria-invalid={!!errors.email}
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
                      aria-label={t('form.phone')} type="tel" autoComplete="tel" maxLength={40} aria-invalid={!!errors.phone}
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
                    aria-label={t('form.subject')} aria-invalid={!!errors.subject}
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
                    aria-label={t('form.message')} maxLength={5000} aria-invalid={!!errors.message}
                    rows={6}
                    placeholder={t('form.message_placeholder')}
                    className={clsx(inputClass, 'resize-none', errors.message && errorClass)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* 상태 메시지 */}
                <div className="border-t border-[#d7dcda] pt-4 text-sm leading-6 text-[#596361]">
                  <p>{isKo ? '수집 항목: 성함·회사·이메일·연락처·문의 내용' : 'Collected: name, company, email, phone and inquiry'}</p>
                  <p>{isKo ? '목적: 문의 응대 및 견적 상담' : 'Purpose: inquiry handling and quotation support'}</p>
                  <p>{isKo ? '보유기간: 문의 처리 완료 후 1년' : 'Retention: one year after inquiry resolution'}</p>
                  <p>{isKo ? '동의 거부 시 전화 상담 이용: 1555-3534' : 'Phone consultation without form consent: +82 1555-3534'}</p>
                  <label htmlFor="consent" className="mt-3 flex items-start gap-2">
                    <input id="consent" type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 shrink-0 accent-[#151a19]" />
                    <span><Link href="/privacy" target="_blank" className="font-semibold underline underline-offset-4">{isKo ? '개인정보처리방침' : 'Privacy policy'}</Link>{isKo ? ' 확인 및 수집·이용 동의 (필수)' : ' reviewed; consent to collection and use (required)'}</span>
                  </label>
                  {errors.consent && <p role="alert" className="mt-2 text-xs text-red-700">{errors.consent.message}</p>}
                </div>
                {status === 'success' && (
                  <div role="status" className="flex items-center gap-3 border border-green-700/30 bg-green-50 px-5 py-4 text-sm text-green-800">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t('form.success')}
                  </div>
                )}
                {status === 'error' && (
                  <div role="alert" className="flex items-start gap-3 border border-red-700/30 bg-red-50 px-5 py-4 text-sm text-red-800">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <div>{t('form.error')}<a href="mailto:support@waterbee.co.kr" className="contact-email mt-2 block font-semibold underline">support@waterbee.co.kr</a></div>
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
              </form> : <section className="border-t border-[#9fa8a5] py-7">
                <h2 className="text-xl font-semibold">{isKo ? '제품·기술 상담' : 'Product & technical inquiries'}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#596361]">
                  <li>{isKo ? '제품 선정 · 견적 · 납기' : 'Product selection · quotations · lead times'}</li>
                  <li>{isKo ? '설치 검토 · 도면 · 시스템 연동' : 'Installation review · drawings · system integration'}</li>
                  <li>{isKo ? '교정 · 점검 · 교체 부품' : 'Calibration · inspection · replacement parts'}</li>
                </ul>
                <a href="mailto:support@waterbee.co.kr" className="btn-primary mt-7"><Mail className="h-4 w-4" />{isKo ? '이메일로 문의' : 'Email us'}</a>
                <p className="mt-4 text-sm text-[#68716f]"><a href="mailto:support@waterbee.co.kr" className="contact-email">support@waterbee.co.kr</a></p>
              </section>}
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
                      <a href="mailto:support@waterbee.co.kr" className="contact-email text-sm font-semibold text-[#202725] transition-colors hover:text-[#8c7200]">
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
