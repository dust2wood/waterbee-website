import { clsx } from 'clsx'

interface TurbidityScatteringDiagramProps {
  locale: string
  className?: string
}

export default function TurbidityScatteringDiagram({
  locale,
  className,
}: TurbidityScatteringDiagramProps) {
  const isKo = locale === 'ko'

  const copy = isKo
    ? {
        title: '90° 산란광 탁도계 구조',
        subtitle: '광원, 측정셀, 검출기 위치를 한눈에 보여주는 광학 계측 다이어그램입니다.',
        source: '텅스텐 광원',
        sample: '측정셀',
        detector: '90° 검출기',
        scatter: '산란광',
        transmitted: '투과광',
        particles: '입자 · 미세기포',
        lamp: '580 nm',
      }
    : {
        title: '90° Scattered-Light Turbidity Layout',
        subtitle: 'An optical measurement diagram showing the light source, sample cell, and detector positions.',
        source: 'Tungsten Lamp',
        sample: 'Sample Cell',
        detector: '90° Detector',
        scatter: 'Scattered Light',
        transmitted: 'Transmitted Light',
        particles: 'Particles · Microbubbles',
        lamp: '580 nm',
      }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[30px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(74,154,202,0.22),transparent_28%),linear-gradient(160deg,rgba(9,25,41,0.98),rgba(7,18,31,0.98))] p-6 shadow-[0_30px_80px_rgba(2,8,15,0.45)]',
        className,
      )}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <div className="mb-5 flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/75">
          WBTU10
        </span>
        <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">{copy.subtitle}</p>
      </div>

      <svg viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="beam" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <linearGradient id="scatterBeam" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#7BE3FF" />
            <stop offset="100%" stopColor="#C9F6FF" />
          </linearGradient>
        </defs>

        <rect x="70" y="204" width="118" height="110" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(252,201,0,0.35)" />
        <circle cx="126" cy="258" r="22" fill="#FCC900" opacity="0.85" />
        <circle cx="126" cy="258" r="10" fill="#FFF0A3" />
        <rect x="102" y="330" width="50" height="24" rx="12" fill="rgba(252,201,0,0.18)" />

        <rect x="284" y="142" width="180" height="236" rx="36" fill="rgba(5,16,28,0.82)" stroke="rgba(255,255,255,0.08)" />
        <rect x="316" y="178" width="116" height="164" rx="28" fill="rgba(111,217,255,0.18)" stroke="rgba(111,217,255,0.46)" />
        <circle cx="366" cy="236" r="6" fill="#7BE3FF" opacity="0.95" />
        <circle cx="352" cy="260" r="5" fill="#7BE3FF" opacity="0.72" />
        <circle cx="392" cy="256" r="6" fill="#7BE3FF" opacity="0.82" />
        <circle cx="380" cy="282" r="5" fill="#7BE3FF" opacity="0.6" />
        <circle cx="344" cy="290" r="7" fill="#B0F0FF" opacity="0.4" />
        <circle cx="408" cy="220" r="5" fill="#B0F0FF" opacity="0.45" />

        <rect x="302" y="58" width="144" height="74" rx="26" fill="rgba(17,34,64,0.95)" stroke="rgba(123,227,255,0.3)" />
        <circle cx="374" cy="95" r="18" fill="rgba(123,227,255,0.16)" stroke="rgba(123,227,255,0.45)" />

        <path d="M188 258 H316" fill="none" stroke="url(#beam)" strokeWidth="10" strokeLinecap="round" />
        <path d="M430 258 H582" fill="none" stroke="rgba(255,224,102,0.25)" strokeWidth="8" strokeLinecap="round" strokeDasharray="16 14" />
        <path d="M374 178 V132" fill="none" stroke="url(#scatterBeam)" strokeWidth="9" strokeLinecap="round" />

        <rect x="560" y="214" width="126" height="88" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(255,255,255,0.08)" />
        <rect x="514" y="74" width="162" height="80" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(123,227,255,0.35)" />
        <circle cx="592" cy="114" r="18" fill="rgba(123,227,255,0.16)" stroke="rgba(123,227,255,0.45)" />

        <text x="126" y="194" fill="#A8B8C8" fontSize="16">
          {copy.source}
        </text>
        <text x="111" y="372" fill="#FCC900" fontSize="15" fontWeight="600">
          {copy.lamp}
        </text>

        <text x="330" y="406" fill="#A8B8C8" fontSize="16">
          {copy.sample}
        </text>
        <text x="506" y="60" fill="#A8B8C8" fontSize="16">
          {copy.detector}
        </text>
        <text x="545" y="184" fill="#7BE3FF" fontSize="16">
          {copy.scatter}
        </text>
        <text x="556" y="332" fill="#6A7A88" fontSize="16">
          {copy.transmitted}
        </text>
        <text x="318" y="162" fill="#7BE3FF" fontSize="15">
          {copy.particles}
        </text>

        <path d="M126 204 V172 H206" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />
        <path d="M374 178 H474 V150" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />
        <path d="M430 258 H514" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />

        <rect x="522" y="354" width="142" height="42" rx="18" fill="rgba(11,25,41,0.88)" stroke="rgba(252,201,0,0.18)" />
        <text x="543" y="381" fill="#FFFFFF" fontSize="16" fontWeight="600">
          Nephelometry
        </text>
      </svg>
    </div>
  )
}
