'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  company: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const toEmail = process.env.CONTACT_TO_EMAIL || 'support@waterbee.co.kr'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'noreply@waterbee.co.kr'

  try {
    const { error } = await resend.emails.send({
      from: `워터비 홈페이지 <${fromEmail}>`,
      to: [toEmail],
      reply_to: data.email,
      subject: `[홈페이지 문의] ${data.subject} - ${data.name} (${data.company})`,
      html: `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #0B1929; padding: 30px; text-align: center; }
            .logo { color: #FCC900; font-size: 24px; font-weight: bold; letter-spacing: 2px; }
            .tagline { color: #A8B8C8; font-size: 12px; margin-top: 4px; }
            .content { padding: 30px; }
            .title { color: #0B1929; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #FCC900; padding-bottom: 10px; }
            .field { margin-bottom: 16px; }
            .label { color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .value { color: #222; font-size: 14px; padding: 8px 12px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #FCC900; }
            .message-box { color: #222; font-size: 14px; padding: 12px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #FCC900; white-space: pre-wrap; line-height: 1.6; }
            .footer { background: #f0f0f0; padding: 20px; text-align: center; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WATERBEE</div>
              <div class="tagline">수질 측정 전문기업</div>
            </div>
            <div class="content">
              <div class="title">새로운 문의가 접수되었습니다</div>
              <div class="field">
                <div class="label">성함</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">회사명</div>
                <div class="value">${data.company}</div>
              </div>
              <div class="field">
                <div class="label">이메일</div>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <div class="label">연락처</div>
                <div class="value">${data.phone}</div>
              </div>
              <div class="field">
                <div class="label">문의 유형</div>
                <div class="value">${data.subject}</div>
              </div>
              <div class="field">
                <div class="label">문의 내용</div>
                <div class="message-box">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              이 메일은 워터비 공식 홈페이지 (www.waterbee.co.kr) 문의 폼에서 자동 발송되었습니다.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Email send error:', err)
    return { success: false, error: 'Failed to send email' }
  }
}
