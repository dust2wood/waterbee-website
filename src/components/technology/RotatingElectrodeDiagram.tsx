'use client'

import { Activity, Orbit, RefreshCw } from 'lucide-react'
import { clsx } from 'clsx'

interface RotatingElectrodeDiagramProps {
  locale: string
  className?: string
}

export default function RotatingElectrodeDiagram({
  locale,
  className,
}: RotatingElectrodeDiagramProps) {
  const isKo = locale === 'ko'

  const copy = isKo
    ? {
        badge: 'WBCL10',
        accent: '회전 전극 구조',
        legends: [
          { label: '회전 전극', Icon: Orbit },
          { label: '자동 세정', Icon: RefreshCw },
          { label: '안정 신호', Icon: Activity },
        ],
      }
    : {
        badge: 'WBCL10',
        accent: 'Rotating Electrode',
        legends: [
          { label: 'Rotation', Icon: Orbit },
          { label: 'Auto Cleaning', Icon: RefreshCw },
          { label: 'Stable Signal', Icon: Activity },
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
          <linearGradient id="rotCellFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(123,227,255,0.34)" />
            <stop offset="100%" stopColor="rgba(123,227,255,0.08)" />
          </linearGradient>
          <linearGradient id="rotSignalStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6FD9FF" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <filter id="rotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="90" y="74" width="386" height="310" rx="42" fill="rgba(5,16,28,0.78)" stroke="rgba(255,255,255,0.08)" />
        <rect x="124" y="136" width="318" height="186" rx="30" fill="url(#rotCellFill)" stroke="rgba(111,217,255,0.38)" />

        <rect x="210" y="34" width="148" height="78" rx="26" fill="rgba(17,34,64,0.96)" stroke="rgba(252,201,0,0.35)" />
        <circle cx="284" cy="74" r="18" fill="#FCC900" opacity="0.88" />
        <circle cx="284" cy="74" r="8" fill="#FFF0A3" />
        <rect x="278" y="112" width="12" height="72" rx="6" fill="#D7E0E8" opacity="0.92" />

        <circle cx="284" cy="230" r="76" fill="none" stroke="#FCC900" strokeWidth="4" strokeDasharray="12 12" opacity="0.78" />
        <path d="M340 188l16 6-10 12" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M228 272l-16-6 10-12" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="260" y="174" width="16" height="102" rx="8" fill="#E6D78C" opacity="0.96" />
        <rect x="292" y="174" width="16" height="102" rx="8" fill="#D2DCE7" opacity="0.96" />
        <rect x="254" y="286" width="60" height="18" rx="9" fill="rgba(252,201,0,0.24)" />
        <circle cx="284" cy="320" r="18" fill="rgba(255,255,255,0.2)" />

        <path d="M50 214 H124" fill="none" stroke="rgba(111,217,255,0.54)" strokeWidth="12" strokeLinecap="round" />
        <circle cx="50" cy="214" r="8" fill="#6FD9FF" filter="url(#rotGlow)" />
        <path d="M442 248 H528" fill="none" stroke="rgba(111,217,255,0.34)" strokeWidth="12" strokeLinecap="round" />
        <circle cx="528" cy="248" r="8" fill="#6FD9FF" opacity="0.76" filter="url(#rotGlow)" />

        <rect x="516" y="120" width="148" height="178" rx="34" fill="rgba(10,23,39,0.94)" stroke="rgba(255,255,255,0.08)" />
        <path
          d="M540 214 C556 176 584 252 606 202 S646 176 652 234"
          fill="none"
          stroke="url(#rotSignalStroke)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M442 228 H500 C510 228 516 234 516 244"
          fill="none"
          stroke="rgba(111,217,255,0.38)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="652" cy="234" r="6" fill="#FCC900" filter="url(#rotGlow)" />

        <circle cx="168" cy="176" r="6" fill="rgba(255,255,255,0.22)" />
        <circle cx="180" cy="206" r="5" fill="rgba(255,255,255,0.18)" />
        <circle cx="388" cy="286" r="6" fill="rgba(255,255,255,0.14)" />
        <circle cx="408" cy="254" r="5" fill="rgba(255,255,255,0.18)" />
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
