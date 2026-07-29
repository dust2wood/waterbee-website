import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { createPageMetadata } from '@/lib/seo'

type PolicyRow = {
  label: string
  value: ReactNode
}

type PolicySectionProps = {
  id: string
  number: number
  title: string
  children: ReactNode
}

const externalLinkClass =
  'font-semibold text-[#315d70] underline decoration-[#9fb4bd] underline-offset-4 transition-colors hover:text-[#151a19]'

function PolicySection({ id, number, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-[#d2d7d4] py-10 first:border-t-0 first:pt-0">
      <div className="flex gap-4 sm:gap-6">
        <span className="pt-1 text-xs font-bold tabular-nums text-[#8c7200]">
          {String(number).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold leading-8 text-[#151a19] sm:text-2xl">{title}</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#4f5956] sm:text-[15px]">{children}</div>
        </div>
      </div>
    </section>
  )
}

function PolicyRows({ rows }: { rows: PolicyRow[] }) {
  return (
    <dl className="border-y border-[#bfc7c4]">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-2 border-b border-[#e0e4e2] py-4 last:border-b-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="text-xs font-bold leading-6 text-[#596361]">{row.label}</dt>
          <dd className="min-w-0 leading-6 text-[#303936]">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata({
    locale,
    path: '/privacy',
    title: locale === 'ko' ? '개인정보처리방침' : 'Privacy Policy',
    description:
      locale === 'ko'
        ? '주식회사 워터비 개인정보처리방침'
        : 'Privacy Policy of Waterbee Co., Ltd.',
  })
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'

  const toc = isKo
    ? [
        ['processing', '처리 목적·항목·기간'],
        ['third-parties', '제3자 제공'],
        ['outsourcing', '처리업무 위탁'],
        ['overseas', '개인정보 국외 이전'],
        ['destruction', '개인정보 파기'],
        ['rights', '정보주체의 권리'],
        ['security', '안전성 확보조치'],
        ['automatic', '자동 수집 정보'],
        ['officer', '개인정보 보호책임자'],
        ['remedies', '권익침해 구제'],
        ['changes', '처리방침 변경'],
      ]
    : [
        ['processing', 'Purpose, data and retention'],
        ['third-parties', 'Third-party disclosure'],
        ['outsourcing', 'Service providers'],
        ['overseas', 'International transfers'],
        ['destruction', 'Data deletion'],
        ['rights', 'Your rights'],
        ['security', 'Security measures'],
        ['automatic', 'Automatically collected data'],
        ['officer', 'Privacy officer'],
        ['remedies', 'Complaints and remedies'],
        ['changes', 'Policy changes'],
      ]

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <header className="border-b border-[#d7dcda] bg-[#f3f5f3]">
        <div className="container-custom max-w-6xl py-14 lg:py-16">
          <div className="text-xs font-bold uppercase text-[#8c7200]">Legal</div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#151a19] sm:text-4xl">
            {isKo ? '개인정보처리방침' : 'Privacy Policy'}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#596361] sm:text-base">
            {isKo
              ? '주식회사 워터비는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 관련 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.'
              : 'Waterbee Co., Ltd. establishes and publishes this Privacy Policy to protect personal information and handle related requests promptly and fairly in accordance with the Personal Information Protection Act of Korea.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-[#cfd5d2] pt-4 text-xs text-[#68716f]">
            <span>{isKo ? '공고일자 2026. 7. 28.' : 'Published July 28, 2026'}</span>
            <span>{isKo ? '시행일자 2026. 7. 28.' : 'Effective July 28, 2026'}</span>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-6xl py-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <aside className="mb-12 self-start lg:sticky lg:top-28 lg:mb-0">
          <div className="mb-4 text-xs font-bold uppercase text-[#596361]">
            {isKo ? '목차' : 'Contents'}
          </div>
          <nav aria-label={isKo ? '개인정보처리방침 목차' : 'Privacy policy contents'}>
            <ol className="grid grid-cols-2 gap-x-5 gap-y-3 border-l-2 border-[#d2a526] pl-4 text-xs leading-5 text-[#68716f] lg:block lg:space-y-3">
              {toc.map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition-colors hover:text-[#151a19]">
                    <span className="mr-1.5 tabular-nums text-[#9aa3a0]">{index + 1}.</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="mb-12 grid border-y border-[#bfc7c4] sm:grid-cols-3">
            {[
              [isKo ? '처리 정보' : 'Data processed', isKo ? '홈페이지 문의정보·접속기록' : 'Inquiry data and access logs'],
              [isKo ? '문의정보 보유' : 'Inquiry retention', isKo ? '처리 완료 후 1년' : '1 year after resolution'],
              [isKo ? '보호책임자' : 'Privacy officer', isKo ? '손호정' : 'Son Ho-jeong'],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-[#e0e4e2] py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                <div className="text-xs font-bold text-[#68716f]">{label}</div>
                <div className="mt-2 text-sm font-semibold leading-6 text-[#202725]">{value}</div>
              </div>
            ))}
          </div>

          <PolicySection
            id="processing"
            number={1}
            title={isKo ? '개인정보의 처리 목적, 항목 및 보유기간' : 'Purpose, categories and retention period'}
          >
            <p>
              {isKo
                ? '회사는 아래 목적에 필요한 최소한의 개인정보를 처리합니다. 처리 목적이 변경되는 경우에는 관계 법령에 따라 필요한 조치를 이행합니다.'
                : 'The Company processes only the minimum personal information necessary for the purposes below. If a purpose changes, the Company will take the steps required by applicable law.'}
            </p>
            <PolicyRows
              rows={
                isKo
                  ? [
                      { label: '처리 업무', value: '홈페이지 제품·견적·기술지원 및 제휴 문의' },
                      { label: '법적 근거', value: '개인정보 보호법 제15조제1항제4호(정보주체가 요청한 문의 처리 및 계약 체결·이행)' },
                      { label: '처리 목적', value: '문의 접수, 상담 및 견적 제공, 기술지원, 처리 결과 회신' },
                      { label: '처리 항목', value: '성명, 회사명, 이메일, 전화번호, 문의 유형, 문의 내용' },
                      { label: '보유기간', value: '문의 처리 완료 후 1년' },
                    ]
                  : [
                      { label: 'Service', value: 'Product, quotation, technical support and partnership inquiries' },
                      { label: 'Legal basis', value: 'Article 15(1)(4) of the Korean Personal Information Protection Act (steps requested by the data subject and contract performance)' },
                      { label: 'Purpose', value: 'Receiving inquiries, consultation, quotations, technical support and responding with results' },
                      { label: 'Data categories', value: 'Name, company, email, phone number, inquiry type and inquiry details' },
                      { label: 'Retention', value: 'One year after the inquiry is resolved' },
                    ]
              }
            />
            <p className="text-xs leading-6 text-[#68716f]">
              {isKo
                ? '관계 법령에 따라 별도 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 분리하여 보관합니다.'
                : 'Where retention is required by law, the relevant data will be stored separately for the legally required period.'}
            </p>
          </PolicySection>

          <PolicySection id="third-parties" number={2} title={isKo ? '개인정보의 제3자 제공' : 'Disclosure to third parties'}>
            <p>
              {isKo
                ? '회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 정보주체가 별도로 동의한 경우 또는 법령에 특별한 규정이 있는 경우에는 필요한 범위에서 제공할 수 있습니다.'
                : 'The Company does not disclose personal information to third parties as a general rule. Disclosure may occur only with separate consent or where specifically permitted or required by law.'}
            </p>
            <p>
              {isKo
                ? '회사는 개인정보를 판매하거나 맞춤형 광고 목적으로 제공하지 않습니다.'
                : 'The Company does not sell personal information or disclose it for targeted advertising.'}
            </p>
          </PolicySection>

          <PolicySection id="outsourcing" number={3} title={isKo ? '개인정보 처리업무의 위탁' : 'Processing by service providers'}>
            <p>
              {isKo
                ? '회사는 안정적인 홈페이지 운영과 문의 전달을 위해 다음 업무를 외부 전문업체에 위탁합니다.'
                : 'The Company uses the following service providers to operate the website and deliver inquiries.'}
            </p>
            <PolicyRows
              rows={
                isKo
                  ? [
                      { label: 'Vercel Inc.', value: '홈페이지 호스팅, 서버 운영, 보안 및 접속기록 처리' },
                      { label: 'Plus Five Five, Inc. (Resend)', value: '홈페이지 문의 이메일 전송' },
                    ]
                  : [
                      { label: 'Vercel Inc.', value: 'Website hosting, server operations, security and access-log processing' },
                      { label: 'Plus Five Five, Inc. (Resend)', value: 'Delivery of website inquiry emails' },
                    ]
              }
            />
            <p>
              {isKo
                ? '회사는 위탁계약 및 서비스 약관을 통해 목적 외 처리 금지, 안전성 확보조치, 재위탁 관리, 개인정보 파기 등 보호 의무를 확인하고 수탁자를 관리·감독합니다.'
                : 'The Company reviews and supervises its processors through applicable agreements and service terms, including purpose limitation, security, subprocessor controls and deletion obligations.'}
            </p>
          </PolicySection>

          <PolicySection id="overseas" number={4} title={isKo ? '개인정보의 국외 이전' : 'International transfers'}>
            <p>
              {isKo
                ? '홈페이지 운영 및 문의 처리를 위해 개인정보가 아래와 같이 국외에서 처리·보관될 수 있습니다. 이전 근거는 개인정보 보호법 제28조의8제1항제3호이며, 정보주체가 요청한 문의 처리 및 계약 체결·이행에 필요한 위탁·보관에 해당합니다.'
                : 'Personal information may be processed or stored outside Korea to operate the website and handle inquiries. The transfer is based on Article 28-8(1)(3) of the Korean Personal Information Protection Act and is necessary to handle a request or perform a contract.'}
            </p>

            <div className="border-y border-[#bfc7c4]">
              <div className="border-b border-[#dfe3e1] py-6">
                <h3 className="font-bold text-[#202725]">Vercel Inc.</h3>
                <PolicyRows
                  rows={
                    isKo
                      ? [
                          { label: '이전 국가·연락처', value: <><span>미국 · </span><a className={externalLinkClass} href="mailto:privacy@vercel.com">privacy@vercel.com</a></> },
                          { label: '이전 항목', value: '문의 입력정보, IP 주소, 접속 일시, 브라우저·기기 정보, 요청 및 오류 기록' },
                          { label: '목적', value: '홈페이지 호스팅, 서버 처리, 보안 및 장애 대응' },
                          { label: '시기·방법', value: '홈페이지 접속 또는 문의 제출 시 암호화된 네트워크를 통한 전송' },
                          { label: '보유기간', value: '서비스 제공 및 계약 기간 동안 처리하며, 목적 달성 또는 계약 종료 후 합리적인 기간 내 삭제·익명화' },
                        ]
                      : [
                          { label: 'Country / contact', value: <><span>United States · </span><a className={externalLinkClass} href="mailto:privacy@vercel.com">privacy@vercel.com</a></> },
                          { label: 'Data transferred', value: 'Inquiry data, IP address, access time, browser and device data, request and error logs' },
                          { label: 'Purpose', value: 'Website hosting, server processing, security and incident response' },
                          { label: 'Timing / method', value: 'Encrypted network transfer when the site is accessed or an inquiry is submitted' },
                          { label: 'Retention', value: 'Processed during the service and contract period, then deleted or anonymized within a commercially reasonable period after the purpose ends or the contract terminates' },
                        ]
                  }
                />
              </div>

              <div className="py-6">
                <h3 className="font-bold text-[#202725]">Plus Five Five, Inc. (Resend)</h3>
                <PolicyRows
                  rows={
                    isKo
                      ? [
                          { label: '이전 국가·연락처', value: <><span>미국 · </span><a className={externalLinkClass} href="mailto:privacy@resend.com">privacy@resend.com</a></> },
                          { label: '이전 항목', value: '성명, 회사명, 이메일, 전화번호, 문의 유형, 문의 내용 및 이메일 메타데이터' },
                          { label: '목적', value: '홈페이지 문의 이메일 전송' },
                          { label: '시기·방법', value: '문의 제출 시 암호화된 네트워크를 통한 전송' },
                          { label: '보유기간', value: '서비스 계약 기간 동안 처리하며, 계정 종료 후 고객 데이터는 90일 이내 삭제' },
                        ]
                      : [
                          { label: 'Country / contact', value: <><span>United States · </span><a className={externalLinkClass} href="mailto:privacy@resend.com">privacy@resend.com</a></> },
                          { label: 'Data transferred', value: 'Name, company, email, phone number, inquiry type, inquiry details and email metadata' },
                          { label: 'Purpose', value: 'Delivery of website inquiry emails' },
                          { label: 'Timing / method', value: 'Encrypted network transfer when an inquiry is submitted' },
                          { label: 'Retention', value: 'Processed during the service agreement; customer data is deleted within 90 days after account termination' },
                        ]
                  }
                />
              </div>
            </div>

            <p className="text-xs leading-6 text-[#68716f]">
              {isKo
                ? '국외 이전을 원하지 않는 경우 홈페이지 문의 폼 대신 전화(1555-3534)로 문의할 수 있습니다. 국외 이전을 거부하면 홈페이지 문의 폼 이용이 제한됩니다.'
                : 'If you do not want your data transferred overseas, you may contact us by phone at 1555-3534 instead of using the web form. Refusing the transfer prevents use of the web inquiry form.'}
            </p>
          </PolicySection>

          <PolicySection id="destruction" number={5} title={isKo ? '개인정보의 파기절차 및 방법' : 'Deletion of personal information'}>
            <p>
              {isKo
                ? '보유기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 다른 법령에 따라 보존해야 하는 경우에는 해당 개인정보를 다른 정보와 분리하여 보관합니다.'
                : 'Personal information is deleted without undue delay when the retention period expires or the processing purpose is fulfilled. Data required to be retained by law is stored separately.'}
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#8c7200]">
              <li>{isKo ? '전자적 파일: 복구 또는 재생이 어렵도록 안전한 방법으로 삭제' : 'Electronic files: securely deleted so that recovery is impracticable'}</li>
              <li>{isKo ? '종이 문서: 분쇄 또는 소각' : 'Paper records: shredded or incinerated'}</li>
            </ul>
          </PolicySection>

          <PolicySection id="rights" number={6} title={isKo ? '정보주체와 법정대리인의 권리 및 행사방법' : 'Your rights and how to exercise them'}>
            <p>
              {isKo
                ? '정보주체는 회사에 개인정보의 열람, 정정·삭제, 처리정지 및 동의 철회를 요구할 수 있습니다. 법정대리인이나 위임받은 사람을 통해서도 권리를 행사할 수 있습니다.'
                : 'You may request access to, correction or deletion of, suspension of processing of, or withdrawal of consent for your personal information. These rights may also be exercised through a legal representative or authorized agent.'}
            </p>
            <p>
              {isKo
                ? '요청은 아래 개인정보 보호책임자에게 전화 또는 이메일로 접수할 수 있으며, 회사는 본인 또는 정당한 대리인 여부를 확인한 후 관계 법령에서 정한 절차에 따라 지체 없이 처리합니다.'
                : 'Requests may be submitted to the privacy officer below by phone or email. The Company will verify the identity or authority of the requester and respond without undue delay as required by law.'}
            </p>
          </PolicySection>

          <PolicySection id="security" number={7} title={isKo ? '개인정보의 안전성 확보조치' : 'Security measures'}>
            <p>{isKo ? '회사는 개인정보의 안전성 확보를 위해 다음 조치를 시행합니다.' : 'The Company applies the following safeguards to protect personal information.'}</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#8c7200]">
              <li>{isKo ? '개인정보 취급자와 접근권한의 최소화 및 정기적인 관리·교육' : 'Limiting personnel and access rights and providing regular management and training'}</li>
              <li>{isKo ? '전송구간 암호화, 계정 접근통제 및 비밀번호 관리' : 'Encryption in transit, account access controls and credential management'}</li>
              <li>{isKo ? '접속기록 점검, 보안 업데이트 및 악성프로그램 방지' : 'Log review, security updates and malware protection'}</li>
              <li>{isKo ? '수탁자 보안조치 확인 및 개인정보 처리 현황 점검' : 'Reviewing processor safeguards and data-processing practices'}</li>
            </ul>
          </PolicySection>

          <PolicySection id="automatic" number={8} title={isKo ? '자동으로 수집되는 정보 및 쿠키' : 'Automatically collected information and cookies'}>
            <p>
              {isKo
                ? '서비스 이용 과정에서 IP 주소, 접속 일시, 브라우저·기기 정보, 요청 및 오류 기록이 자동으로 생성되어 보안, 장애 대응 및 안정적인 서비스 운영을 위해 처리될 수 있습니다.'
                : 'IP address, access time, browser and device information, request logs and error logs may be generated automatically for security, incident response and reliable service operation.'}
            </p>
            <p>
              {isKo
                ? '회사는 현재 맞춤형 광고나 이용자 행태 추적을 위한 쿠키를 설치·운영하지 않습니다.'
                : 'The Company does not currently use cookies for targeted advertising or behavioral tracking.'}
            </p>
          </PolicySection>

          <PolicySection id="officer" number={9} title={isKo ? '개인정보 보호책임자 및 고충처리' : 'Privacy officer and complaints'}>
            <p>
              {isKo
                ? '개인정보 처리에 관한 문의, 불만, 피해구제 및 권리행사 요청은 아래 연락처로 접수해 주세요.'
                : 'For privacy questions, complaints, remedies or rights requests, please use the contact details below.'}
            </p>
            <PolicyRows
              rows={
                isKo
                  ? [
                      { label: '개인정보 보호책임자', value: '손호정' },
                      { label: '전화', value: <a className={externalLinkClass} href="tel:1555-3534">1555-3534</a> },
                      { label: '이메일', value: <a className={externalLinkClass} href="mailto:support@waterbee.co.kr">support@waterbee.co.kr</a> },
                      { label: '주소', value: '부산광역시 강서구 에코델타스마트로 39, 3동 2호' },
                    ]
                  : [
                      { label: 'Privacy officer', value: 'Son Ho-jeong' },
                      { label: 'Phone', value: <a className={externalLinkClass} href="tel:1555-3534">1555-3534</a> },
                      { label: 'Email', value: <a className={externalLinkClass} href="mailto:support@waterbee.co.kr">support@waterbee.co.kr</a> },
                      { label: 'Address', value: '39, Ecodeltasmart-ro, Gangseo-gu, Busan, Building 3, Unit 2, Republic of Korea' },
                    ]
              }
            />
          </PolicySection>

          <PolicySection id="remedies" number={10} title={isKo ? '개인정보 권익침해 구제방법' : 'Complaints and remedies'}>
            <p>
              {isKo
                ? '개인정보 침해에 대한 상담이나 분쟁조정이 필요한 경우 아래 기관에 문의할 수 있습니다.'
                : 'You may contact the following Korean authorities for advice or dispute resolution concerning privacy infringements.'}
            </p>
            <PolicyRows
              rows={
                isKo
                  ? [
                      { label: '개인정보침해 신고센터', value: <><a className={externalLinkClass} href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">privacy.kisa.or.kr</a><span> · 국번 없이 118</span></> },
                      { label: '개인정보분쟁조정위원회', value: <><a className={externalLinkClass} href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">www.kopico.go.kr</a><span> · 1833-6972</span></> },
                    ]
                  : [
                      { label: 'Privacy Infringement Report Center', value: <><a className={externalLinkClass} href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">privacy.kisa.or.kr</a><span> · 118</span></> },
                      { label: 'Personal Information Dispute Mediation Committee', value: <><a className={externalLinkClass} href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">www.kopico.go.kr</a><span> · +82-1833-6972</span></> },
                    ]
              }
            />
          </PolicySection>

          <PolicySection id="changes" number={11} title={isKo ? '개인정보처리방침의 변경' : 'Changes to this policy'}>
            <p>
              {isKo
                ? '이 처리방침의 내용이 변경되는 경우 홈페이지를 통해 변경 내용과 시행일을 공개합니다. 정보주체의 권리에 중대한 영향을 미치는 변경은 시행 전 또는 시행 즉시 알립니다.'
                : 'If this Policy changes, the Company will publish the changes and effective date on this website. Changes materially affecting your rights will be announced before or immediately upon taking effect.'}
            </p>
            <PolicyRows
              rows={
                isKo
                  ? [
                      { label: '공고일자', value: '2026. 7. 28.' },
                      { label: '시행일자', value: '2026. 7. 28.' },
                    ]
                  : [
                      { label: 'Published', value: 'July 28, 2026' },
                      { label: 'Effective', value: 'July 28, 2026' },
                    ]
              }
            />
            {!isKo && (
              <p className="text-xs leading-6 text-[#68716f]">
                The Korean version governs if there is any inconsistency between language versions.
              </p>
            )}
          </PolicySection>
        </article>
      </div>
    </div>
  )
}
