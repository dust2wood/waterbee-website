import { clsx } from 'clsx'

interface RotatingElectrodeDiagramProps {
  locale: string
  className?: string
}

export default function RotatingElectrodeDiagram({
  locale: _locale,
  className,
}: RotatingElectrodeDiagramProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-[#f8fbfd] p-4 shadow-[0_24px_56px_rgba(15,23,42,0.12)] sm:p-5',
        className,
      )}
    >
      <svg
        viewBox="0 0 760 430"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chlorineWater" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9fddf1" />
            <stop offset="100%" stopColor="#51a8cd" />
          </linearGradient>
          <linearGradient id="chlorineMetal" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#e8edf2" />
            <stop offset="100%" stopColor="#aeb9c4" />
          </linearGradient>
          <linearGradient id="chlorineGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f7d779" />
            <stop offset="100%" stopColor="#c9971f" />
          </linearGradient>
        </defs>

        <rect x="32" y="30" width="696" height="370" rx="28" fill="#ffffff" stroke="#d8e3eb" strokeWidth="2" />

        <rect x="86" y="102" width="188" height="224" rx="26" fill="#182b3d" />
        <rect x="110" y="126" width="140" height="76" rx="14" fill="#e8f5fb" />
        <path d="M130 160h82" stroke="#55aacd" strokeWidth="8" strokeLinecap="round" />
        <path d="M130 182h48" stroke="#f2c550" strokeWidth="8" strokeLinecap="round" />
        <circle cx="230" cy="178" r="10" fill="#55aacd" />
        <rect x="116" y="236" width="42" height="42" rx="12" fill="#2f4659" />
        <rect x="168" y="236" width="42" height="42" rx="12" fill="#2f4659" />
        <rect x="220" y="236" width="28" height="42" rx="12" fill="#f0bd3c" />

        <path d="M274 214 C326 214 334 122 394 122" fill="none" stroke="#8eb6cf" strokeWidth="5" strokeLinecap="round" />
        <path d="M274 246 C326 246 342 316 390 316" fill="none" stroke="#8eb6cf" strokeWidth="5" strokeLinecap="round" />

        <rect x="402" y="92" width="206" height="276" rx="30" fill="#f5f9fc" stroke="#86adc6" strokeWidth="4" />
        <path d="M420 176 H590 V328 H420 Z" fill="url(#chlorineWater)" opacity="0.78" />
        <path d="M424 192 C456 180 482 204 514 192 C540 182 562 198 588 188" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.75" />

        <rect x="460" y="68" width="28" height="244" rx="14" fill="url(#chlorineMetal)" />
        <rect x="523" y="68" width="28" height="244" rx="14" fill="url(#chlorineGold)" />
        <rect x="512" y="304" width="50" height="42" rx="16" fill="url(#chlorineGold)" />
        <circle cx="537" cy="326" r="54" fill="none" stroke="#f1bd34" strokeWidth="5" strokeLinecap="round" strokeDasharray="110 62" />
        <path d="M575 360l-24 2 10-20" fill="none" stroke="#f1bd34" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M493 296 C515 272 550 270 574 292" fill="none" stroke="#247fa7" strokeWidth="5" strokeLinecap="round" />
        <path d="M574 292l-22 2 10-18" fill="none" stroke="#247fa7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

        <circle cx="474" cy="58" r="28" fill="#d7dde4" stroke="#9ca9b5" strokeWidth="3" />
        <circle cx="538" cy="58" r="28" fill="#e5b64b" stroke="#b88720" strokeWidth="3" />
        <circle cx="474" cy="58" r="8" fill="#8b97a3" />
        <circle cx="538" cy="58" r="8" fill="#8f6818" />

        <path d="M610 222 H680" stroke="#9fbdd0" strokeWidth="5" strokeLinecap="round" />
        <rect x="654" y="174" width="60" height="96" rx="20" fill="#203548" />
        <path d="M670 220 C680 196 690 240 704 214" fill="none" stroke="#f3c14b" strokeWidth="5" strokeLinecap="round" />
        <path d="M670 196h26" stroke="#6e879a" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  )
}
