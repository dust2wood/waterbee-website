import { clsx } from 'clsx'

interface SmartControllerDiagramProps {
  locale: string
  className?: string
}

export default function SmartControllerDiagram({
  locale: _locale,
  className,
}: SmartControllerDiagramProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-[#f8fbfd] p-4 shadow-[0_22px_55px_rgba(15,38,58,0.12)] sm:p-5',
        className,
      )}
    >
      <svg
        viewBox="0 0 760 430"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full min-h-[280px] w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="controllerCase" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dce8ee" />
          </linearGradient>
          <linearGradient id="controllerScreen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#173047" />
            <stop offset="100%" stopColor="#091c2f" />
          </linearGradient>
          <linearGradient id="controllerSignal" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#48a9c5" />
            <stop offset="100%" stopColor="#f2c94c" />
          </linearGradient>
          <filter id="controllerShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#123047" floodOpacity="0.16" />
          </filter>
        </defs>

        <rect x="20" y="20" width="720" height="390" rx="34" fill="#ffffff" />
        <ellipse cx="377" cy="356" rx="270" ry="28" fill="#d7e2e7" opacity="0.62" />

        <path
          d="M180 264 C230 248 258 235 302 226"
          fill="none"
          stroke="#6aa9bb"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M462 211 C505 190 532 177 573 157"
          fill="none"
          stroke="#6aa9bb"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M468 243 C518 250 546 263 589 294"
          fill="none"
          stroke="#6aa9bb"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M392 142 C426 114 459 101 499 100"
          fill="none"
          stroke="#6aa9bb"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <g filter="url(#controllerShadow)">
          <rect x="82" y="238" width="102" height="62" rx="31" fill="url(#controllerCase)" stroke="#6aa9bb" strokeWidth="4" />
          <rect x="107" y="258" width="52" height="18" rx="9" fill="#173047" opacity="0.92" />
          <circle cx="133" cy="267" r="5" fill="#f2c94c" />
          <path d="M133 238 L133 215" stroke="#6aa9bb" strokeWidth="4" strokeLinecap="round" />
          <circle cx="133" cy="210" r="8" fill="#f2c94c" stroke="#173047" strokeWidth="3" />
        </g>

        <g filter="url(#controllerShadow)">
          <rect x="305" y="139" width="163" height="180" rx="28" fill="url(#controllerCase)" stroke="#24465e" strokeWidth="5" />
          <rect x="326" y="163" width="121" height="88" rx="18" fill="url(#controllerScreen)" />
          <path d="M343 221 C361 205 375 213 390 197 C406 181 421 190 433 176" fill="none" stroke="url(#controllerSignal)" strokeWidth="5" strokeLinecap="round" />
          <circle cx="352" cy="186" r="9" fill="#48a9c5" />
          <circle cx="420" cy="226" r="9" fill="#f2c94c" />
          <rect x="333" y="270" width="42" height="12" rx="6" fill="#48a9c5" opacity="0.82" />
          <rect x="387" y="270" width="24" height="12" rx="6" fill="#f2c94c" opacity="0.9" />
          <rect x="422" y="270" width="18" height="12" rx="6" fill="#24465e" opacity="0.28" />
          <circle cx="340" cy="302" r="6" fill="#24465e" opacity="0.55" />
          <circle cx="365" cy="302" r="6" fill="#24465e" opacity="0.35" />
          <circle cx="390" cy="302" r="6" fill="#24465e" opacity="0.35" />
          <path d="M386 139 L386 112" stroke="#24465e" strokeWidth="5" strokeLinecap="round" />
          <circle cx="386" cy="102" r="13" fill="#48a9c5" opacity="0.18" stroke="#48a9c5" strokeWidth="4" />
        </g>

        <g fill="none" stroke="#48a9c5" strokeLinecap="round" strokeWidth="6" opacity="0.9">
          <path d="M243 167 C271 139 302 139 330 167" />
          <path d="M261 186 C280 168 293 168 312 186" />
          <path d="M280 204 C287 198 292 198 299 204" />
        </g>

        <g transform="translate(462 294)" fill="none" stroke="#24465e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
          <circle cx="0" cy="0" r="31" fill="#eaf4f7" stroke="#6aa9bb" strokeWidth="5" />
          <path d="M-7 -20 V20 L15 3 L-7 -12 L15 -28 L-7 -12 L-27 4" />
          <path d="M-27 -4 L-7 12" />
        </g>

        <g filter="url(#controllerShadow)">
          <path
            d="M502 119 C512 92 537 79 562 88 C575 62 615 65 626 95 C649 96 668 113 668 137 C668 164 647 181 620 181 H523 C497 181 478 165 478 141 C478 129 487 121 502 119Z"
            fill="#e8f4f7"
            stroke="#6aa9bb"
            strokeWidth="5"
          />
          <rect x="550" y="120" width="48" height="42" rx="10" fill="#ffffff" stroke="#24465e" strokeWidth="4" />
          <path d="M559 141 H589 M574 128 V154" stroke="#48a9c5" strokeWidth="5" strokeLinecap="round" />
          <circle cx="552" cy="120" r="4" fill="#f2c94c" />
          <circle cx="598" cy="162" r="4" fill="#f2c94c" />
        </g>

        <g filter="url(#controllerShadow)">
          <rect x="582" y="96" width="109" height="82" rx="14" fill="#24465e" />
          <rect x="592" y="106" width="89" height="55" rx="8" fill="#11263a" />
          <rect x="603" y="123" width="12" height="26" rx="6" fill="#48a9c5" />
          <rect x="625" y="115" width="12" height="34" rx="6" fill="#f2c94c" />
          <rect x="647" y="130" width="12" height="19" rx="6" fill="#8fd1df" />
          <path d="M596 166 H678" stroke="#d8e5eb" strokeWidth="5" strokeLinecap="round" />
          <path d="M637 178 V199" stroke="#24465e" strokeWidth="7" strokeLinecap="round" />
          <path d="M611 202 H663" stroke="#24465e" strokeWidth="8" strokeLinecap="round" />
        </g>

        <g filter="url(#controllerShadow)">
          <rect x="595" y="250" width="72" height="112" rx="21" fill="#f2c94c" />
          <rect x="603" y="261" width="56" height="87" rx="14" fill="#11263a" />
          <circle cx="631" cy="354" r="4" fill="#ffffff" opacity="0.72" />
          <path d="M614 315 C624 306 634 312 641 300 C646 291 653 294 655 289" fill="none" stroke="#48a9c5" strokeWidth="4" strokeLinecap="round" />
          <rect x="614" y="278" width="31" height="8" rx="4" fill="#ffffff" opacity="0.22" />
          <rect x="614" y="292" width="21" height="8" rx="4" fill="#ffffff" opacity="0.16" />
        </g>

        <g fill="#24465e" opacity="0.16">
          <circle cx="302" cy="226" r="7" />
          <circle cx="573" cy="157" r="7" />
          <circle cx="589" cy="294" r="7" />
          <circle cx="499" cy="100" r="7" />
        </g>
      </svg>
    </div>
  )
}
