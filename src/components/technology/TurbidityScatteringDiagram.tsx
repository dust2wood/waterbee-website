import { Droplets, ScanLine, Sparkles } from 'lucide-react'
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
        accent: '기포제거형 광학 구조',
        legends: [
          { label: '기포 제거', Icon: Droplets },
          { label: '90° 산란광', Icon: ScanLine },
          { label: '저농도 안정', Icon: Sparkles },
        ],
      }
    : {
        badge: 'WBTU10',
        accent: 'Bubble-Removal Optics',
        legends: [
          { label: 'Bubble Removal', Icon: Droplets },
          { label: '90deg Scatter', Icon: ScanLine },
          { label: 'Low-Range Stable', Icon: Sparkles },
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

      <svg viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="turBeam" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <linearGradient id="turScatter" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#7BE3FF" />
            <stop offset="100%" stopColor="#C9F6FF" />
          </linearGradient>
          <filter id="turGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="250" y="124" width="220" height="212" rx="38" fill="rgba(5,16,28,0.82)" stroke="rgba(255,255,255,0.08)" />
        <rect x="286" y="158" width="148" height="144" rx="30" fill="rgba(123,227,255,0.18)" stroke="rgba(123,227,255,0.42)" />

        <rect x="194" y="70" width="56" height="146" rx="22" fill="rgba(17,34,64,0.96)" stroke="rgba(123,227,255,0.32)" strokeDasharray="8 8" />
        <rect x="210" y="94" width="24" height="98" rx="12" fill="rgba(123,227,255,0.16)" stroke="rgba(123,227,255,0.34)" />
        <path d="M222 70 V46" fill="none" stroke="rgba(123,227,255,0.34)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="222" cy="46" r="8" fill="#7BE3FF" filter="url(#turGlow)" />
        <path d="M250 184 H286" fill="none" stroke="rgba(123,227,255,0.42)" strokeWidth="10" strokeLinecap="round" />

        <circle cx="220" cy="176" r="5" fill="rgba(255,255,255,0.28)" />
        <circle cx="224" cy="156" r="4" fill="rgba(255,255,255,0.22)" />
        <circle cx="218" cy="132" r="6" fill="rgba(255,255,255,0.18)" />
        <circle cx="226" cy="110" r="4" fill="rgba(255,255,255,0.16)" />

        <rect x="68" y="198" width="96" height="76" rx="28" fill="rgba(17,34,64,0.96)" stroke="rgba(252,201,0,0.35)" />
        <circle cx="116" cy="236" r="18" fill="#FCC900" opacity="0.88" />
        <circle cx="116" cy="236" r="8" fill="#FFF0A3" />
        <path d="M164 236 H286" fill="none" stroke="url(#turBeam)" strokeWidth="10" strokeLinecap="round" />
        <path d="M434 236 H566" fill="none" stroke="rgba(255,224,102,0.24)" strokeWidth="8" strokeLinecap="round" strokeDasharray="16 14" />

        <rect x="314" y="48" width="92" height="64" rx="24" fill="rgba(17,34,64,0.96)" stroke="rgba(123,227,255,0.35)" />
        <circle cx="360" cy="80" r="16" fill="rgba(123,227,255,0.14)" stroke="rgba(123,227,255,0.46)" />
        <path d="M360 158 V112" fill="none" stroke="url(#turScatter)" strokeWidth="9" strokeLinecap="round" />

        <circle cx="344" cy="212" r="6" fill="#BFF4FF" opacity="0.58" />
        <circle cx="366" cy="236" r="5" fill="#7BE3FF" opacity="0.88" />
        <circle cx="394" cy="214" r="6" fill="#BFF4FF" opacity="0.42" />
        <circle cx="382" cy="264" r="5" fill="#7BE3FF" opacity="0.72" />
        <circle cx="336" cy="256" r="7" fill="#BFF4FF" opacity="0.35" />

        <rect x="578" y="204" width="82" height="62" rx="24" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.08)" />
        <circle cx="620" cy="236" r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
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
