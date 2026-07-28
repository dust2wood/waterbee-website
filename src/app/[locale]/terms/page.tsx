import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

type TermsSectionProps = {
  id: string
  number: number
  title: string
  children: ReactNode
}

function TermsSection({ id, number, title, children }: TermsSectionProps) {
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'ko' ? '이용약관' : 'Terms of Service',
    description:
      locale === 'ko'
        ? '주식회사 워터비 홈페이지 이용약관'
        : 'Website Terms of Service of Waterbee Co., Ltd.',
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isKo = locale === 'ko'

  const toc = isKo
    ? [
        ['purpose', '목적 및 정의'],
        ['effect', '약관의 효력과 변경'],
        ['services', '제공 서비스'],
        ['product-info', '제품정보와 견적'],
        ['user-duties', '이용자의 의무'],
        ['intellectual-property', '지식재산권'],
        ['availability', '서비스 변경·중단'],
        ['external-links', '외부 사이트'],
        ['liability', '책임의 범위'],
        ['law-contact', '준거법·문의·시행일'],
      ]
    : [
        ['purpose', 'Purpose and definitions'],
        ['effect', 'Effect and amendments'],
        ['services', 'Services provided'],
        ['product-info', 'Product information and quotations'],
        ['user-duties', 'User obligations'],
        ['intellectual-property', 'Intellectual property'],
        ['availability', 'Changes and interruptions'],
        ['external-links', 'Third-party websites'],
        ['liability', 'Limitation of liability'],
        ['law-contact', 'Law, contact and effective date'],
      ]

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <header className="border-b border-[#d7dcda] bg-[#f3f5f3]">
        <div className="container-custom max-w-6xl py-14 lg:py-16">
          <div className="text-xs font-bold uppercase text-[#8c7200]">Legal</div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#151a19] sm:text-4xl">
            {isKo ? '이용약관' : 'Terms of Service'}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#596361] sm:text-base">
            {isKo
              ? '본 약관은 주식회사 워터비가 운영하는 공식 홈페이지의 이용조건과 회사 및 이용자의 권리·의무를 정합니다.'
              : 'These Terms govern use of the official website operated by Waterbee Co., Ltd. and set out the rights and responsibilities of the Company and its users.'}
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
          <nav aria-label={isKo ? '이용약관 목차' : 'Terms of service contents'}>
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
              [isKo ? '사이트 성격' : 'Website type', isKo ? '제품정보·기술문의' : 'Product information and inquiries'],
              [isKo ? '회원가입·결제' : 'Accounts and payments', isKo ? '운영하지 않음' : 'Not provided'],
              [isKo ? '운영자' : 'Operator', isKo ? '주식회사 워터비' : 'Waterbee Co., Ltd.'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-[#e0e4e2] py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              >
                <div className="text-xs font-bold text-[#68716f]">{label}</div>
                <div className="mt-2 text-sm font-semibold leading-6 text-[#202725]">{value}</div>
              </div>
            ))}
          </div>

          <TermsSection id="purpose" number={1} title={isKo ? '목적 및 정의' : 'Purpose and definitions'}>
            <p>
              {isKo
                ? '본 약관은 회사가 홈페이지를 통해 제공하는 제품·기술·회사 정보와 문의 서비스의 이용조건을 정하는 것을 목적으로 합니다.'
                : 'These Terms set the conditions for using the product, technology and company information and inquiry services provided through the website.'}
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#8c7200]">
              <li>{isKo ? '“회사”란 주식회사 워터비를 말합니다.' : '“Company” means Waterbee Co., Ltd.'}</li>
              <li>{isKo ? '“홈페이지”란 회사가 운영하는 www.waterbee.co.kr 및 이에 연결된 국문·영문 페이지를 말합니다.' : '“Website” means www.waterbee.co.kr and its Korean and English pages operated by the Company.'}</li>
              <li>{isKo ? '“이용자”란 홈페이지에 접속하여 정보 또는 문의 서비스를 이용하는 사람을 말합니다.' : '“User” means any person who accesses the Website or uses its information or inquiry services.'}</li>
            </ul>
          </TermsSection>

          <TermsSection id="effect" number={2} title={isKo ? '약관의 효력과 변경' : 'Effect and amendments'}>
            <p>
              {isKo
                ? '본 약관은 홈페이지 하단에 게시되며 이용자가 홈페이지를 이용하는 동안 적용됩니다. 개별 견적서, 계약서 또는 별도 서면 합의가 본 약관과 다른 경우에는 해당 개별 합의가 우선합니다.'
                : 'These Terms are posted in the Website footer and apply while a User uses the Website. A quotation, contract or other written agreement takes precedence if it differs from these Terms.'}
            </p>
            <p>
              {isKo
                ? '회사는 관계 법령을 위반하지 않는 범위에서 약관을 변경할 수 있습니다. 변경 시 변경 내용과 시행일을 홈페이지에 공개하며, 이용자 권리에 중대한 영향을 미치는 내용은 시행 전 또는 시행 즉시 알립니다.'
                : 'The Company may amend these Terms to the extent permitted by law. The amended terms and effective date will be published on the Website, and material changes affecting User rights will be announced before or immediately upon taking effect.'}
            </p>
          </TermsSection>

          <TermsSection id="services" number={3} title={isKo ? '제공 서비스' : 'Services provided'}>
            <p>{isKo ? '회사는 홈페이지에서 다음 서비스를 제공합니다.' : 'The Company provides the following services through the Website.'}</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#8c7200]">
              <li>{isKo ? '수질계측기, 센서 및 관련 솔루션의 제품·기술 정보' : 'Product and technical information about water-quality instruments, sensors and related solutions'}</li>
              <li>{isKo ? '회사 소개, 인증·특허 및 사업 관련 공개 정보' : 'Public information about the Company, certifications, patents and business activities'}</li>
              <li>{isKo ? '제품 상담, 견적, 기술지원 및 제휴 문의 접수' : 'Product consultation, quotation, technical support and partnership inquiries'}</li>
            </ul>
            <p className="text-xs leading-6 text-[#68716f]">
              {isKo
                ? '현재 홈페이지에서는 회원가입, 온라인 주문 또는 결제 기능을 제공하지 않습니다. 향후 이러한 기능을 제공하는 경우 관련 조건을 별도로 고지하거나 약관을 개정합니다.'
                : 'The Website currently does not provide account registration, online ordering or payment. If these features are introduced, the Company will provide additional terms or amend these Terms.'}
            </p>
          </TermsSection>

          <TermsSection id="product-info" number={4} title={isKo ? '제품정보와 견적의 성격' : 'Product information and quotations'}>
            <p>
              {isKo
                ? '회사는 홈페이지 정보의 정확성과 최신성을 유지하기 위해 노력합니다. 다만 제품 개선, 형식승인 범위, 설치환경 또는 공급 사양에 따라 화면의 이미지·규격·구성·설명이 실제 공급 제품과 달라질 수 있습니다.'
                : 'The Company seeks to keep Website information accurate and current. Images, specifications, configurations and descriptions may differ from the supplied product due to improvements, approval scope, installation conditions or agreed supply specifications.'}
            </p>
            <p>
              {isKo
                ? '구매·설치·운영 시에는 회사가 발행한 최신 견적서, 계약서, 승인도서, 제품 라벨 및 공식 매뉴얼을 우선 확인해야 합니다. 홈페이지의 일반 정보만으로 특정 현장에 대한 설계·시공 또는 안전 판단을 대신할 수 없습니다.'
                : 'For purchasing, installation and operation, Users must refer to the latest quotation, contract, approved documents, product label and official manual issued by the Company. General Website information is not a substitute for site-specific engineering, installation or safety decisions.'}
            </p>
            <p>
              {isKo
                ? '문의 또는 견적 요청은 주문의 확정이나 계약의 성립을 의미하지 않습니다. 거래 조건은 회사와 고객이 별도로 합의한 서면 견적서 또는 계약서에 따라 확정됩니다.'
                : 'An inquiry or quotation request does not constitute a confirmed order or contract. Commercial terms are established only through a separate written quotation or contract agreed between the Company and the customer.'}
            </p>
          </TermsSection>

          <TermsSection id="user-duties" number={5} title={isKo ? '이용자의 의무' : 'User obligations'}>
            <p>{isKo ? '이용자는 홈페이지 이용 시 관계 법령과 본 약관을 준수해야 하며 다음 행위를 해서는 안 됩니다.' : 'Users must comply with applicable law and these Terms and must not engage in the following activities.'}</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#8c7200]">
              <li>{isKo ? '타인의 명의·연락처를 도용하거나 허위 정보를 제출하는 행위' : 'Impersonating another person or submitting false identity or contact information'}</li>
              <li>{isKo ? '홈페이지의 정상 작동을 방해하거나 비정상적인 방식으로 접근하는 행위' : 'Interfering with Website operation or attempting unauthorized access'}</li>
              <li>{isKo ? '악성코드, 자동화 도구 또는 과도한 요청으로 시스템에 부담을 주는 행위' : 'Using malware, automated tools or excessive requests that burden the system'}</li>
              <li>{isKo ? '회사 또는 제3자의 지식재산권, 개인정보, 명예나 기타 권리를 침해하는 행위' : 'Infringing the intellectual property, privacy, reputation or other rights of the Company or any third party'}</li>
              <li>{isKo ? '문의 처리에 필요하지 않은 주민등록번호, 금융정보, 건강정보 등 민감한 정보를 입력하는 행위' : 'Submitting sensitive information not required for an inquiry, such as national identifiers, financial data or health information'}</li>
            </ul>
          </TermsSection>

          <TermsSection id="intellectual-property" number={6} title={isKo ? '지식재산권' : 'Intellectual property'}>
            <p>
              {isKo
                ? '홈페이지의 문구, 사진, 렌더링, 도면, 로고, 상표, 영상, 편집 구성 및 소프트웨어에 관한 권리는 회사 또는 정당한 권리자에게 있습니다.'
                : 'Rights in Website text, photographs, renderings, drawings, logos, trademarks, video, layout and software belong to the Company or the applicable rights holder.'}
            </p>
            <p>
              {isKo
                ? '이용자는 제품 검토와 정상적인 업무 문의 범위에서 홈페이지를 열람하고 회사가 제공한 자료를 사용할 수 있습니다. 회사의 사전 서면 허락 없이 콘텐츠를 복제·수정·배포·판매하거나 다른 상품·서비스의 홍보에 사용할 수 없습니다.'
                : 'Users may view the Website and use materials supplied by the Company for ordinary product review and business inquiries. Content may not be copied, modified, distributed, sold or used to promote another product or service without the Company’s prior written permission.'}
            </p>
          </TermsSection>

          <TermsSection id="availability" number={7} title={isKo ? '서비스의 변경·중단' : 'Service changes and interruptions'}>
            <p>
              {isKo
                ? '회사는 제품 개편, 시스템 점검, 보안 대응, 통신 장애, 천재지변 또는 그 밖의 운영상 필요한 사유로 홈페이지의 전부 또는 일부를 변경하거나 일시 중단할 수 있습니다. 예측 가능한 경우에는 홈페이지 등을 통해 미리 알리도록 노력합니다.'
                : 'The Company may change or temporarily suspend all or part of the Website due to product revisions, maintenance, security response, network failure, force majeure or other operational needs. Where reasonably foreseeable, the Company will endeavor to provide advance notice on the Website.'}
            </p>
          </TermsSection>

          <TermsSection id="external-links" number={8} title={isKo ? '외부 사이트와 자료' : 'Third-party websites and materials'}>
            <p>
              {isKo
                ? '홈페이지에는 이용 편의를 위해 외부 사이트 또는 제3자 자료로 연결되는 링크가 포함될 수 있습니다. 해당 사이트와 자료는 각 운영자 또는 권리자가 관리하며, 회사는 그 내용·보안·개인정보 처리방침을 통제하지 않습니다.'
                : 'The Website may contain links to third-party websites or materials for convenience. Those sites and materials are controlled by their respective operators or rights holders, and the Company does not control their content, security or privacy practices.'}
            </p>
          </TermsSection>

          <TermsSection id="liability" number={9} title={isKo ? '책임의 범위' : 'Limitation of liability'}>
            <p>
              {isKo
                ? '회사는 고의 또는 중대한 과실로 이용자에게 직접적인 손해를 발생시킨 경우 관계 법령에 따라 책임을 부담합니다. 다만 회사의 책임 없는 사유, 이용자의 본 약관 위반, 부정확한 정보 제출, 공식 문서와 다른 임의 사용 또는 제3자 서비스로 인해 발생한 손해에 대해서는 법령이 허용하는 범위에서 책임을 부담하지 않습니다.'
                : 'The Company is responsible under applicable law for direct loss caused by its willful misconduct or gross negligence. To the extent permitted by law, the Company is not liable for loss caused without its fault, by a User’s breach of these Terms, inaccurate information, use inconsistent with official documents or third-party services.'}
            </p>
            <p>
              {isKo
                ? '본 조항은 관계 법령상 제한하거나 배제할 수 없는 회사의 책임 또는 이용자의 권리를 제한하지 않습니다.'
                : 'Nothing in this section limits any Company liability or User right that cannot lawfully be limited or excluded.'}
            </p>
          </TermsSection>

          <TermsSection id="law-contact" number={10} title={isKo ? '준거법, 분쟁해결, 문의 및 시행일' : 'Governing law, disputes, contact and effective date'}>
            <p>
              {isKo
                ? '본 약관은 대한민국 법률에 따라 해석됩니다. 회사와 이용자는 분쟁이 발생한 경우 상호 협의를 통해 해결하도록 노력하며, 해결되지 않는 경우 관계 법령과 민사소송법에 따른 관할법원에서 해결합니다.'
                : 'These Terms are governed by the laws of the Republic of Korea. The Company and User will first attempt to resolve disputes through good-faith consultation; unresolved disputes will be submitted to the court having jurisdiction under applicable law and the Korean Civil Procedure Act.'}
            </p>
            <dl className="border-y border-[#bfc7c4]">
              {[
                [isKo ? '회사' : 'Company', isKo ? '주식회사 워터비' : 'Waterbee Co., Ltd.'],
                [isKo ? '사업자등록번호' : 'Business registration no.', '291-87-02513'],
                [isKo ? '주소' : 'Address', isKo ? '부산광역시 강서구 에코델타스마트로 39, 3동 2호' : '39, Ecodeltasmart-ro, Gangseo-gu, Busan, Building 3, Unit 2, Republic of Korea'],
                [isKo ? '전화' : 'Phone', '1555-3534'],
                [isKo ? '이메일' : 'Email', 'support@waterbee.co.kr'],
                [isKo ? '시행일' : 'Effective date', isKo ? '2026. 7. 28.' : 'July 28, 2026'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-[#e0e4e2] py-4 last:border-b-0 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="text-xs font-bold leading-6 text-[#596361]">{label}</dt>
                  <dd className="min-w-0 break-words leading-6 text-[#303936]">
                    {label === (isKo ? '전화' : 'Phone') ? (
                      <a className="font-semibold text-[#315d70] underline decoration-[#9fb4bd] underline-offset-4" href="tel:1555-3534">{value}</a>
                    ) : label === (isKo ? '이메일' : 'Email') ? (
                      <a className="font-semibold text-[#315d70] underline decoration-[#9fb4bd] underline-offset-4" href="mailto:support@waterbee.co.kr">{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-6 text-[#68716f]">
              {isKo ? '개인정보 처리에 관한 사항은 ' : 'For information about personal data processing, see the '}
              <Link href="/privacy" className="font-semibold text-[#315d70] underline decoration-[#9fb4bd] underline-offset-4">
                {isKo ? '개인정보처리방침' : 'Privacy Policy'}
              </Link>
              {isKo ? '을 확인해 주세요.' : '.'}
            </p>
            {!isKo && (
              <p className="text-xs leading-6 text-[#68716f]">
                The Korean version governs if there is any inconsistency between language versions.
              </p>
            )}
          </TermsSection>
        </article>
      </div>
    </div>
  )
}
