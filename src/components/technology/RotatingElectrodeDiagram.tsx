'use client'

import { Activity, Cog, Orbit } from 'lucide-react'
import { clsx } from 'clsx'

interface RotatingElectrodeDiagramProps {
  locale: string
  className?: string
}

const gearAngles = Array.from({ length: 10 }, (_, index) => index * 36)

function Gear({
  x,
  y,
  size,
  fill,
  innerFill,
  stroke,
}: {
  x: number
  y: number
  size: number
  fill: string
  innerFill: string
  stroke: string
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {gearAngles.map((angle) => (
        <rect
          key={angle}
          x={-size * 0.08}
          y={-size * 0.62}
          width={size * 0.16}
          height={size * 0.22}
          rx={size * 0.03}
          fill={fill}
          stroke={stroke}
          strokeWidth="1"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={size * 0.42} fill={fill} stroke={stroke} strokeWidth="2" />
      <circle r={size * 0.14} fill={innerFill} />
    </g>
  )
}

export default function RotatingElectrodeDiagram({
  locale,
  className,
}: RotatingElectrodeDiagramProps) {
  const isKo = locale === 'ko'

  const copy = isKo
    ? {
        badge: 'WBCL10',
        accent: '회전전극 방식',
        drive: '기어 구동',
        fixed: '고정 전극',
        rotating: '회전 전극',
        legends: [
          { label: '기어 구동', Icon: Cog },
          { label: '회전 전극', Icon: Orbit },
          { label: '안정 신호', Icon: Activity },
        ],
      }
    : {
        badge: 'WBCL10',
        accent: 'Rotating Electrode',
        drive: 'Gear Drive',
        fixed: 'Fixed Probe',
        rotating: 'Rotating Electrode',
        legends: [
          { label: 'Gear Drive', Icon: Cog },
          { label: 'Rotation', Icon: Orbit },
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

      <svg viewBox="0 0 760 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="tankFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8A93A" />
            <stop offset="100%" stopColor="#C67C11" />
          </linearGradient>
          <linearGradient id="housingStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#8CEBFF" />
            <stop offset="100%" stopColor="#4AB6D8" />
          </linearGradient>
          <linearGradient id="signalStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6FD9FF" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <pattern id="basketMesh" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 10 L10 0 M-2 2 L2 -2 M8 12 L12 8" stroke="rgba(140,235,255,0.38)" strokeWidth="1.2" />
          </pattern>
        </defs>

        <path
          d="M122 52h208a26 26 0 0 1 26 26v88a20 20 0 0 1-20 20h-34v188a30 30 0 0 1-30 30H180a30 30 0 0 1-30-30V186h-28a20 20 0 0 1-20-20V78a26 26 0 0 1 20-26z"
          fill="rgba(9,24,39,0.95)"
          stroke="url(#housingStroke)"
          strokeWidth="4"
        />

        <path
          d="M132 70h188a18 18 0 0 1 18 18v68a16 16 0 0 1-16 16H138a16 16 0 0 1-16-16V88a18 18 0 0 1 18-18z"
          fill="url(#tankFill)"
          opacity="0.96"
        />

        <rect x="164" y="186" width="126" height="194" rx="26" fill="rgba(8,18,30,0.96)" stroke="rgba(255,255,255,0.08)" />
        <rect x="203" y="180" width="18" height="176" rx="9" fill="#D6DBE1" />
        <rect x="246" y="92" width="18" height="230" rx="9" fill="#D7B14A" />
        <rect x="242" y="316" width="26" height="40" rx="10" fill="#D7B14A" />
        <rect x="236" y="322" width="38" height="52" rx="12" fill="url(#basketMesh)" stroke="rgba(140,235,255,0.45)" strokeWidth="2" />

        <rect x="214" y="158" width="46" height="16" rx="8" fill="rgba(255,255,255,0.2)" />
        <rect x="236" y="158" width="20" height="18" rx="8" fill="rgba(252,201,0,0.28)" />

        <Gear x={216} y={30} size={54} fill="#CFC7B6" innerFill="#9A9388" stroke="rgba(255,255,255,0.2)" />
        <Gear x={260} y={30} size={54} fill="#D7B14A" innerFill="#A4791A" stroke="rgba(255,255,255,0.18)" />
        <path d="M216 58 V110" fill="none" stroke="rgba(209,216,222,0.5)" strokeWidth="5" strokeLinecap="round" />
        <path d="M260 58 V112" fill="none" stroke="rgba(215,177,74,0.55)" strokeWidth="5" strokeLinecap="round" />

        <ellipse cx="256" cy="348" rx="32" ry="16" fill="rgba(140,235,255,0.12)" />
        <path d="M290 334 A46 46 0 0 1 238 380" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" />
        <path d="M247 382l-18 0 8-12" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M357 94 H434" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <path d="M358 234 H462" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <path d="M298 348 H432" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />

        <rect x="446" y="76" width="120" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(140,235,255,0.18)" />
        <text x="506" y="99" textAnchor="middle" fill="#EAF9FF" fontSize="14" fontWeight="600">
          {copy.drive}
        </text>

        <rect x="474" y="216" width="122" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(140,235,255,0.18)" />
        <text x="535" y="239" textAnchor="middle" fill="#EAF9FF" fontSize="14" fontWeight="600">
          {copy.fixed}
        </text>

        <rect x="444" y="330" width="142" height="36" rx="18" fill="rgba(9,24,39,0.92)" stroke="rgba(252,201,0,0.18)" />
        <text x="515" y="353" textAnchor="middle" fill="#FFF5D2" fontSize="14" fontWeight="600">
          {copy.rotating}
        </text>

        <rect x="560" y="168" width="132" height="112" rx="28" fill="rgba(11,25,41,0.94)" stroke="rgba(255,255,255,0.08)" />
        <path
          d="M578 230 C594 192 616 264 636 216 S668 196 676 244"
          fill="none"
          stroke="url(#signalStroke)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="676" cy="244" r="6" fill="#FCC900" />

        <ellipse cx="610" cy="370" rx="78" ry="50" fill="rgba(255,255,255,0.08)" />
        <ellipse cx="610" cy="348" rx="86" ry="62" fill="rgba(231,164,57,0.92)" stroke="url(#housingStroke)" strokeWidth="3" />
        <Gear x={584} y={336} size={28} fill="#CFC7B6" innerFill="#9A9388" stroke="rgba(255,255,255,0.16)" />
        <Gear x={616} y={336} size={28} fill="#D7B14A" innerFill="#A4791A" stroke="rgba(255,255,255,0.16)" />
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
