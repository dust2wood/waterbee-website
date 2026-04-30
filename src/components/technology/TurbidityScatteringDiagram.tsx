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
        'relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(74,154,202,0.18),transparent_28%),linear-gradient(160deg,rgba(9,25,41,0.98),rgba(7,18,31,0.98))] p-4 shadow-[0_28px_70px_rgba(2,8,15,0.42)] sm:p-5',
        className,
      )}
    >
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="relative h-[290px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(111,217,255,0.08),transparent_34%),linear-gradient(180deg,rgba(10,22,36,0.98),rgba(6,15,26,0.98))] sm:h-[330px]">
        <svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="turbidityBeam" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#1BE4FF" />
              <stop offset="100%" stopColor="#08B5E9" />
            </linearGradient>
            <linearGradient id="turbidityModule" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#A2F2B0" />
              <stop offset="100%" stopColor="#5DC46E" />
            </linearGradient>
            <radialGradient id="turbidityGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(27,228,255,0.14)" />
              <stop offset="100%" stopColor="rgba(27,228,255,0)" />
            </radialGradient>
          </defs>

          <circle cx="392" cy="218" r="126" fill="url(#turbidityGlow)" />

          <rect x="92" y="98" width="70" height="82" rx="26" fill="rgba(10,22,36,0.95)" stroke="rgba(140,235,255,0.22)" />
          <circle cx="127" cy="118" r="6" fill="rgba(255,255,255,0.16)" />
          <circle cx="120" cy="140" r="5" fill="rgba(255,255,255,0.24)" />
          <circle cx="131" cy="161" r="7" fill="rgba(255,255,255,0.2)" />
          <path d="M162 184 H204" fill="none" stroke="rgba(140,235,255,0.34)" strokeWidth="10" strokeLinecap="round" />

          <rect x="94" y="196" width="72" height="58" rx="24" fill="url(#turbidityModule)" stroke="rgba(255,255,255,0.18)" />
          <rect x="84" y="214" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />
          <path d="M166 226 H182" fill="none" stroke="rgba(93,196,110,0.9)" strokeWidth="8" strokeLinecap="round" />

          <path d="M184 226 H274" fill="none" stroke="url(#turbidityBeam)" strokeWidth="12" strokeLinecap="round" />

          <circle cx="392" cy="226" r="110" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="3" />
          <circle cx="392" cy="226" r="100" fill="rgba(247,247,247,0.98)" opacity="0.96" />
          <path d="M280 226 H504" fill="none" stroke="url(#turbidityBeam)" strokeWidth="18" strokeLinecap="round" />

          <circle cx="364" cy="178" r="5" fill="#101010" />
          <circle cx="390" cy="164" r="4" fill="#101010" />
          <circle cx="426" cy="186" r="5" fill="#101010" />
          <circle cx="348" cy="214" r="4" fill="#101010" />
          <circle cx="392" cy="196" r="5" fill="#101010" />
          <circle cx="420" cy="230" r="5" fill="#101010" />
          <circle cx="360" cy="248" r="5" fill="#101010" />
          <circle cx="398" cy="248" r="4" fill="#101010" />
          <circle cx="438" cy="258" r="5" fill="#101010" />
          <circle cx="372" cy="278" r="5" fill="#101010" />
          <circle cx="408" cy="286" r="4" fill="#101010" />
          <circle cx="432" cy="304" r="5" fill="#101010" />

          <path d="M392 226 L350 308" fill="none" stroke="#101010" strokeWidth="2.4" strokeDasharray="6 6" />
          <path d="M392 226 L390 318" fill="none" stroke="#101010" strokeWidth="2.4" strokeDasharray="6 6" />
          <path d="M392 226 L418 314" fill="none" stroke="#101010" strokeWidth="2.4" strokeDasharray="6 6" />

          <path d="M510 226 H574" fill="none" stroke="rgba(8,181,233,0.34)" strokeWidth="10" strokeLinecap="round" />
          <rect x="576" y="198" width="74" height="58" rx="24" fill="url(#turbidityModule)" stroke="rgba(255,255,255,0.18)" />
          <rect x="650" y="215" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />

          <path d="M392 338 V382" fill="none" stroke="rgba(16,16,16,0.36)" strokeWidth="8" strokeLinecap="round" />
          <rect x="356" y="382" width="72" height="56" rx="24" fill="url(#turbidityModule)" stroke="rgba(255,255,255,0.18)" />
          <rect x="384" y="438" width="16" height="24" rx="8" fill="rgba(215,215,215,0.88)" />

          <path d="M232 128 H292" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
          <path d="M236 244 H288" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
          <path d="M522 128 H582" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
          <path d="M478 408 H560" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
