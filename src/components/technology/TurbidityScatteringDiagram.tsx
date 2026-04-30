import { Droplets, Lightbulb, ScanLine } from 'lucide-react'
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
        badge: 'WBTU10',
        accent: '90° 산란광 구조',
        source: '광원',
        transmitted: '투과광 감지기',
        scattered: '산란광 감지기',
        bubble: '탈부착식 기포제거부',
        legends: [
          { label: '기포 제거', Icon: Droplets },
          { label: '광원·투과광', Icon: Lightbulb },
          { label: '90° 산란광', Icon: ScanLine },
        ],
      }
    : {
        badge: 'WBTU10',
        accent: '90deg Scatter Optics',
        source: 'Light Source',
        transmitted: 'Transmitted Detector',
        scattered: 'Scattered Detector',
        bubble: 'Detachable Bubble Remover',
        legends: [
          { label: 'Bubble Removal', Icon: Droplets },
          { label: 'Source & Beam', Icon: Lightbulb },
          { label: '90deg Scatter', Icon: ScanLine },
        ],
      }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[30px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(74,154,202,0.22),transparent_28%),linear-gradient(160deg,rgba(9,25,41,0.98),rgba(7,18,31,0.98))] p-6 shadow-[0_30px_80px_rgba(2,8,15,0.45)]',
        className,
      )}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-gold-400">
          {copy.badge}
        </span>
        <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-cyan-100">
          {copy.accent}
        </span>
      </div>

      <svg viewBox="0 0 760 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="beamFill" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1BE4FF" />
            <stop offset="100%" stopColor="#08B5E9" />
          </linearGradient>
          <linearGradient id="lampBody" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#A2F2B0" />
            <stop offset="100%" stopColor="#5DC46E" />
          </linearGradient>
        </defs>

        <rect x="74" y="172" width="82" height="24" rx="12" fill="rgba(111,217,255,0.28)" stroke="rgba(111,217,255,0.3)" strokeWidth="2" />
        <rect x="96" y="102" width="64" height="76" rx="24" fill="rgba(12,27,45,0.94)" stroke="rgba(140,235,255,0.25)" />
        <circle cx="128" cy="118" r="6" fill="rgba(255,255,255,0.16)" />
        <circle cx="122" cy="138" r="5" fill="rgba(255,255,255,0.24)" />
        <circle cx="132" cy="160" r="7" fill="rgba(255,255,255,0.2)" />
        <path d="M160 184 H198" fill="none" stroke="rgba(140,235,255,0.35)" strokeWidth="10" strokeLinecap="round" />

        <path d="M184 226 H274" fill="none" stroke="url(#beamFill)" strokeWidth="12" strokeLinecap="round" />
        <rect x="92" y="198" width="72" height="56" rx="24" fill="rgba(93,196,110,0.96)" stroke="rgba(255,255,255,0.18)" />
        <rect x="84" y="214" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />
        <path d="M164 226 H182" fill="none" stroke="rgba(93,196,110,0.85)" strokeWidth="8" strokeLinecap="round" />

        <circle cx="392" cy="226" r="112" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="3" />
        <circle cx="392" cy="226" r="102" fill="rgba(247,247,247,0.98)" opacity="0.94" />
        <path d="M280 226 H504" fill="none" stroke="url(#beamFill)" strokeWidth="18" strokeLinecap="round" opacity="0.96" />

        <circle cx="366" cy="180" r="5" fill="#101010" />
        <circle cx="388" cy="164" r="4" fill="#101010" />
        <circle cx="424" cy="184" r="5" fill="#101010" />
        <circle cx="446" cy="212" r="5" fill="#101010" />
        <circle cx="350" cy="212" r="4" fill="#101010" />
        <circle cx="392" cy="196" r="5" fill="#101010" />
        <circle cx="420" cy="230" r="5" fill="#101010" />
        <circle cx="360" cy="248" r="5" fill="#101010" />
        <circle cx="396" cy="248" r="4" fill="#101010" />
        <circle cx="438" cy="256" r="5" fill="#101010" />
        <circle cx="372" cy="278" r="5" fill="#101010" />
        <circle cx="404" cy="286" r="4" fill="#101010" />
        <circle cx="430" cy="304" r="5" fill="#101010" />

        <path d="M394 226 L354 308" fill="none" stroke="#101010" strokeWidth="2.2" strokeDasharray="6 6" />
        <path d="M392 226 L384 314" fill="none" stroke="#101010" strokeWidth="2.2" strokeDasharray="6 6" />
        <path d="M392 226 L414 314" fill="none" stroke="#101010" strokeWidth="2.2" strokeDasharray="6 6" />

        <path d="M510 226 H574" fill="none" stroke="rgba(8,181,233,0.32)" strokeWidth="10" strokeLinecap="round" />
        <rect x="576" y="198" width="74" height="56" rx="24" fill="rgba(93,196,110,0.96)" stroke="rgba(255,255,255,0.18)" />
        <rect x="650" y="214" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />

        <path d="M392 338 V380" fill="none" stroke="rgba(16,16,16,0.38)" strokeWidth="8" strokeLinecap="round" />
        <rect x="356" y="382" width="72" height="56" rx="24" fill="rgba(93,196,110,0.96)" stroke="rgba(255,255,255,0.18)" />
        <rect x="384" y="438" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />

        <path d="M164 132 H236" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <path d="M164 244 H236" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <path d="M650 132 H548" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <path d="M452 422 H574" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />

        <rect x="238" y="114" width="130" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(140,235,255,0.18)" />
        <text x="303" y="137" textAnchor="middle" fill="#EAF9FF" fontSize="14" fontWeight="600">
          {copy.bubble}
        </text>

        <rect x="238" y="226" width="102" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(252,201,0,0.18)" />
        <text x="289" y="249" textAnchor="middle" fill="#FFF5D2" fontSize="14" fontWeight="600">
          {copy.source}
        </text>

        <rect x="530" y="114" width="154" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(140,235,255,0.18)" />
        <text x="607" y="137" textAnchor="middle" fill="#EAF9FF" fontSize="14" fontWeight="600">
          {copy.transmitted}
        </text>

        <rect x="576" y="404" width="136" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(140,235,255,0.18)" />
        <text x="644" y="427" textAnchor="middle" fill="#EAF9FF" fontSize="14" fontWeight="600">
          {copy.scattered}
        </text>
      </svg>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {copy.legends.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/16 bg-gold-500/10">
              <Icon className="h-4 w-4 text-gold-400" />
            </div>
            <span className="text-sm font-medium text-white/90">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
