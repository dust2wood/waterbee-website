'use server'

import { contactSchema, buildContactMessage, type ContactResult } from './contact'

export async function sendContactEmail(input: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) return { success: false, error: 'validation' }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.CONTACT_FROM_EMAIL?.trim()
  const to = process.env.CONTACT_TO_EMAIL?.trim() || 'support@waterbee.co.kr'
  if (!apiKey || !from) {
    console.error('Contact delivery unavailable: mail configuration missing')
    return { success: false, error: 'unavailable' }
  }

  const data = parsed.data
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `contact/${data.requestId}`,
      },
      body: JSON.stringify({
        from: `Waterbee Website <${from}>`,
        to: [to],
        reply_to: data.email,
        ...buildContactMessage(data),
      }),
      signal: AbortSignal.timeout(15000),
      cache: 'no-store',
    })
    const result = await response.json()
    if (!response.ok || typeof result.id !== 'string') {
      console.error('Contact delivery rejected', { status: response.status })
      return { success: false, error: 'delivery' }
    }
    // Log only the provider receipt ID; keep customer details out of runtime logs.
    console.info('Contact delivery accepted', { id: result.id })
    return { success: true }
  } catch {
    console.error('Contact delivery failed: request timeout or network error')
    return { success: false, error: 'delivery' }
  }
}
