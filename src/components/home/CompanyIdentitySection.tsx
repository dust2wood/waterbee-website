import { ArrowRight, Building2, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { siteIdentity } from '@/lib/seo'

export default function CompanyIdentitySection({ locale }: { locale: string }) {
  const isKo = locale === 'ko'
  const facts = isKo
    ? [
        ['법인명', siteIdentity.legalName],
        ['법인 설립', '2021년 10월 5일'],
        ['주요 제품', '탁도·잔류염소·pH·전기전도도 계측기'],
        ['핵심 분야', '온라인 수질계측·현장 모니터링'],
      ]
    : [
        ['Company', 'Waterbee / 주식회사 워터비'],
        ['Incorporated', 'October 5, 2021'],
        ['Products', 'Turbidity, residual chlorine, pH and conductivity instruments'],
        ['Focus', 'Online water measurement and field monitoring'],
      ]

  return (
    <section className="border-t border-[#d2d7d4] bg-[#f5f6f4] py-16 lg:py-28">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c7200]">
            <Building2 className="h-4 w-4" />
            {isKo ? '회사 정보' : 'Company Identity'}
          </div>
          <h2 className="mt-4 max-w-xl break-keep text-3xl font-bold leading-[1.25] tracking-normal text-[#151a19] lg:mt-5 lg:text-4xl">
            {isKo
              ? '수질계측기 개발·제조 기업, 워터비'
              : 'Waterbee, a water-quality instrumentation company'}
          </h2>
          <p className="mt-5 max-w-xl break-keep text-sm leading-7 text-[#68716f] lg:mt-6 lg:text-base">
            {isKo
              ? '주식회사 워터비는 센서의 측정 원리부터 현장 제어와 통신까지 직접 설계합니다. 제품 사양, 기술 근거, 특허·인증과 회사 연혁을 공식 홈페이지에서 확인할 수 있습니다.'
              : 'Waterbee designs measurement principles, field control and communications as one instrumentation system. Product specifications, technical evidence, patents, certifications and company history are published on this official website.'}
          </p>

          <div className="mt-7 flex flex-wrap gap-5 lg:mt-8">
            <Link href="/technology" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
              {isKo ? '기술 근거 보기' : 'Explore the technology'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 border-b border-[#151a19] pb-1 text-sm font-semibold text-[#151a19]">
              {isKo ? '연혁·특허·인증 보기' : 'History, patents and certifications'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <dl className="border-t border-[#9fa8a5]">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-[#d2d7d4] py-4 sm:grid-cols-[150px_1fr] sm:gap-8 lg:py-5">
                <dt className="text-xs font-semibold text-[#7a8380]">{label}</dt>
                <dd className="break-keep text-sm font-semibold leading-6 text-[#202725]">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-7">
            <div className="flex gap-3 bg-white p-4 lg:p-5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8c7200]" />
              <p className="break-keep text-xs leading-6 text-[#596361]">
                {isKo ? siteIdentity.addressKo : siteIdentity.addressEn}
              </p>
            </div>
            <div className="flex gap-3 bg-white p-4 lg:p-5">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#8c7200]" />
              <p className="break-keep text-xs leading-6 text-[#596361]">
                {isKo
                  ? `사업자등록번호 ${siteIdentity.businessNumber}`
                  : `Business registration no. ${siteIdentity.businessNumber}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
