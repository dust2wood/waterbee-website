import { clsx } from 'clsx'

interface TurbidityScatteringDiagramProps {
  locale: string
  className?: string
}

export default function TurbidityScatteringDiagram({
  locale: _locale,
  className,
}: TurbidityScatteringDiagramProps) {
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
          <linearGradient id="turbidityBeam" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#57d4ee" />
            <stop offset="100%" stopColor="#2297c5" />
          </linearGradient>
          <linearGradient id="turbidityGlass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eaf5fb" />
          </linearGradient>
          <linearGradient id="turbidityModule" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#b8ecc1" />
            <stop offset="100%" stopColor="#6fca82" />
          </linearGradient>
        </defs>

        <rect x="32" y="30" width="696" height="370" rx="28" fill="#ffffff" stroke="#d8e3eb" strokeWidth="2" />

        <rect x="78" y="126" width="88" height="164" rx="30" fill="url(#turbidityGlass)" stroke="#9bb9ca" strokeWidth="4" />
        <circle cx="122" cy="158" r="7" fill="#9bd7a8" />
        <circle cx="110" cy="194" r="6" fill="#9bd7a8" opacity="0.75" />
        <circle cx="130" cy="232" r="8" fill="#9bd7a8" opacity="0.55" />
        <path d="M166 210 C194 210 204 228 228 228" fill="none" stroke="#9bb9ca" strokeWidth="5" strokeLinecap="round" />

        <rect x="96" y="304" width="70" height="54" rx="22" fill="url(#turbidityModule)" stroke="#7bb38d" strokeWidth="3" />
        <path d="M166 330 H218" stroke="#8eb7ce" strokeWidth="6" strokeLinecap="round" />
        <path d="M218 330 C252 330 272 290 304 290" fill="none" stroke="#8eb7ce" strokeWidth="5" strokeLinecap="round" />

        <rect x="90" y="184" width="76" height="54" rx="22" fill="url(#turbidityModule)" stroke="#7bb38d" strokeWidth="3" />
        <path d="M166 211 H258" stroke="#8eb7ce" strokeWidth="6" strokeLinecap="round" />

        <rect x="254" y="184" width="82" height="54" rx="22" fill="#24384b" />
        <path d="M286 210h24" stroke="#f3c14b" strokeWidth="6" strokeLinecap="round" />
        <path d="M336 211 H402" stroke="url(#turbidityBeam)" strokeWidth="14" strokeLinecap="round" />

        <circle cx="450" cy="211" r="112" fill="url(#turbidityGlass)" stroke="#8eb0c7" strokeWidth="4" />
        <path d="M350 211 H550" stroke="url(#turbidityBeam)" strokeWidth="18" strokeLinecap="round" opacity="0.95" />
        <circle cx="410" cy="168" r="5" fill="#26313b" />
        <circle cx="454" cy="158" r="5" fill="#26313b" />
        <circle cx="486" cy="184" r="5" fill="#26313b" />
        <circle cx="420" cy="214" r="5" fill="#26313b" />
        <circle cx="462" cy="216" r="5" fill="#26313b" />
        <circle cx="506" cy="238" r="5" fill="#26313b" />
        <circle cx="430" cy="260" r="5" fill="#26313b" />
        <circle cx="474" cy="278" r="5" fill="#26313b" />

        <path d="M450 211 L410 304" stroke="#26313b" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <path d="M450 211 V316" stroke="#26313b" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <path d="M450 211 L494 304" stroke="#26313b" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />

        <path d="M556 211 H606" stroke="#8eb7ce" strokeWidth="6" strokeLinecap="round" />
        <rect x="604" y="184" width="72" height="54" rx="22" fill="url(#turbidityModule)" stroke="#7bb38d" strokeWidth="3" />
        <circle cx="684" cy="211" r="11" fill="#cfd8df" />

        <path d="M450 323 V350" stroke="#8eb7ce" strokeWidth="6" strokeLinecap="round" />
        <rect x="414" y="350" width="72" height="54" rx="22" fill="url(#turbidityModule)" stroke="#7bb38d" strokeWidth="3" />
        <circle cx="450" cy="412" r="11" fill="#cfd8df" />
      </svg>
    </div>
  )
}
