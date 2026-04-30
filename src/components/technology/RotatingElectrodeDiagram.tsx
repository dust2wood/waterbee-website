'use client'

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
        title: '회전전극식 잔류염소계 구조',
        subtitle: '특허 회전전극이 전극 오염을 줄이며 안정적인 전류 신호를 유지합니다.',
        motor: '구동 모터',
        shaft: '회전축',
        electrode: 'Au/Ag 회전 전극',
        cleaning: '회전으로 표면 오염 완화',
        inlet: '시료 유입',
        outlet: '시료 배출',
        signal: '안정 전류 신호',
        controller: 'WBSC10 컨트롤러',
        membrane: '멤브레인 교체 없음',
      }
    : {
        title: 'Rotating Electrode Residual Chlorine Structure',
        subtitle: 'The patented rotating electrode suppresses fouling while keeping the current signal stable.',
        motor: 'Drive Motor',
        shaft: 'Rotary Shaft',
        electrode: 'Au/Ag Rotating Electrode',
        cleaning: 'Rotation reduces surface fouling',
        inlet: 'Sample Inlet',
        outlet: 'Sample Outlet',
        signal: 'Stable Current Signal',
        controller: 'WBSC10 Controller',
        membrane: 'No membrane replacement',
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
          WBCL10
        </span>
        <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">{copy.subtitle}</p>
      </div>

      <svg viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="cellFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(111,199,255,0.4)" />
            <stop offset="100%" stopColor="rgba(111,199,255,0.08)" />
          </linearGradient>
          <linearGradient id="signalStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6FD9FF" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="94" y="102" width="312" height="320" rx="36" fill="rgba(5,16,28,0.76)" stroke="rgba(255,255,255,0.08)" />
        <rect x="122" y="162" width="256" height="224" rx="28" fill="url(#cellFill)" stroke="rgba(111,217,255,0.45)" />
        <rect x="180" y="34" width="140" height="96" rx="26" fill="rgba(17,34,64,0.95)" stroke="rgba(252,201,0,0.35)" />
        <circle cx="250" cy="82" r="18" fill="#FCC900" opacity="0.85" />
        <circle cx="250" cy="82" r="8" fill="#FFE8A3" />
        <rect x="240" y="130" width="20" height="72" rx="10" fill="#BCC7D1" opacity="0.92" />
        <rect x="224" y="202" width="52" height="16" rx="8" fill="#8A97A6" opacity="0.9" />
        <ellipse cx="250" cy="276" rx="76" ry="76" fill="none" stroke="#FCC900" strokeWidth="4" strokeDasharray="10 12" opacity="0.75" />
        <path d="M301 224l20 4-13 14" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M199 328l-20-4 13-14" fill="none" stroke="#FCC900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="224" y="222" width="20" height="112" rx="10" fill="#E2D287" opacity="0.94" />
        <rect x="256" y="222" width="20" height="112" rx="10" fill="#C8D7E5" opacity="0.94" />
        <rect x="220" y="342" width="60" height="18" rx="9" fill="rgba(252,201,0,0.26)" />
        <circle cx="250" cy="368" r="18" fill="rgba(255,255,255,0.22)" />

        <path d="M122 274 H72 V236" fill="none" stroke="rgba(111,217,255,0.5)" strokeWidth="10" strokeLinecap="round" />
        <path d="M378 330 H430 V368" fill="none" stroke="rgba(111,217,255,0.32)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="72" cy="236" r="8" fill="#6FD9FF" filter="url(#softGlow)" />
        <circle cx="430" cy="368" r="8" fill="#6FD9FF" opacity="0.7" filter="url(#softGlow)" />

        <rect x="478" y="86" width="190" height="114" rx="28" fill="rgba(17,34,64,0.82)" stroke="rgba(255,255,255,0.08)" />
        <text x="510" y="124" fill="#FCC900" fontSize="18" fontWeight="700">
          {copy.controller}
        </text>
        <path
          d="M508 164 C540 148 554 180 584 164 S628 148 650 168"
          fill="none"
          stroke="url(#signalStroke)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="650" cy="168" r="6" fill="#FCC900" filter="url(#softGlow)" />

        <rect x="474" y="234" width="196" height="148" rx="28" fill="rgba(7,18,31,0.86)" stroke="rgba(255,255,255,0.08)" />
        <text x="506" y="278" fill="#6FD9FF" fontSize="18" fontWeight="700">
          {copy.signal}
        </text>
        <path
          d="M508 320 C532 286 558 342 584 306 S630 280 646 320"
          fill="none"
          stroke="url(#signalStroke)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M406 284 H452 C466 284 474 292 474 306"
          fill="none"
          stroke="rgba(111,217,255,0.46)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <g fill="#A8B8C8" fontSize="16">
          <text x="170" y="26">{copy.motor}</text>
          <text x="280" y="150">{copy.shaft}</text>
          <text x="106" y="214">{copy.cleaning}</text>
          <text x="78" y="222">↻</text>
          <text x="96" y="414">{copy.inlet}</text>
          <text x="352" y="414">{copy.outlet}</text>
          <text x="122" y="454">{copy.membrane}</text>
        </g>

        <path d="M224 64 H146 V100" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />
        <path d="M250 164 H332 V190" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />
        <path d="M222 280 H148" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 6" />

        <rect x="304" y="186" width="132" height="48" rx="18" fill="rgba(11,25,41,0.88)" stroke="rgba(252,201,0,0.18)" />
        <text x="322" y="215" fill="#FFFFFF" fontSize="16" fontWeight="600">
          {copy.electrode}
        </text>
      </svg>
    </div>
  )
}
