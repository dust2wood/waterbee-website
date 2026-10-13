import { z } from 'zod'

export const contactSubjects = ['product', 'quote', 'technical', 'partnership', 'other'] as const
const singleLine = z.string().trim().regex(/^[^\r\n\x00-\x1f]*$/)

export const contactSchema = z.object({
  name: singleLine.min(2).max(80),
  company: singleLine.min(1).max(160),
  email: z.string().trim().email().max(254),
  phone: singleLine.min(9).max(40),
  subject: z.enum(contactSubjects),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
  requestId: z.string().uuid(),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type ContactResult = { success: true } | { success: false; error: 'validation' | 'unavailable' | 'delivery' }

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!))
}

export function buildContactMessage(data: ContactFormData) {
  const labels = { product: '제품 문의', quote: '견적 요청', technical: '기술 지원', partnership: '파트너십', other: '기타' }
  const subject = `[홈페이지 문의] ${labels[data.subject]} - ${data.company} / ${data.name}`
  const fields = [['성함', data.name], ['회사', data.company], ['이메일', data.email], ['연락처', data.phone], ['문의 유형', labels[data.subject]], ['문의 내용', data.message]]
  const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n\n')
  const html = `<html lang="ko"><body style="font-family:Arial,sans-serif;color:#202725;line-height:1.7"><h2>WATERBEE 홈페이지 문의</h2><table style="width:100%;max-width:680px;border-collapse:collapse">${fields.map(([label, value]) => `<tr><th style="width:90px;padding:12px;text-align:left;vertical-align:top;border-bottom:1px solid #d7dcda">${label}</th><td style="padding:12px;border-bottom:1px solid #d7dcda;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table><p style="font-size:12px;color:#68716f">www.waterbee.co.kr · 개인정보 수집·이용 동의 확인</p></body></html>`
  return { subject, text, html }
}
