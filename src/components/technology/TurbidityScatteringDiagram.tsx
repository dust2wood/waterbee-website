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
        'relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,#faf5ee,#f1eadf)] p-4 shadow-[0_26px_60px_rgba(15,23,42,0.12)] sm:p-5',
        className,
      )}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

      <div
        className="relative h-[300px] overflow-hidden rounded-[24px] border border-slate-200/90 bg-[linear-gradient(180deg,#fcfaf6,#f1eadf)] sm:h-[340px]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(129, 155, 181, 0.18) 1px, transparent 1px), linear-gradient(180deg, #fcfaf6, #f1eadf)',
          backgroundSize: '18px 18px, auto',
        }}
      >
        <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="turbidityBeam" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#8be0f3" />
              <stop offset="100%" stopColor="#4aa7cf" />
            </linearGradient>
            <linearGradient id="turbidityModule" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#a8e4af" />
              <stop offset="100%" stopColor="#72c884" />
            </linearGradient>
          </defs>

          <rect x="96" y="96" width="72" height="84" rx="28" fill="#f7fafc" stroke="#8aa9bf" strokeWidth="3" />
          <circle cx="128" cy="116" r="6" fill="rgba(113,186,141,0.45)" />
          <circle cx="120" cy="138" r="5" fill="rgba(113,186,141,0.36)" />
          <circle cx="132" cy="160" r="7" fill="rgba(113,186,141,0.3)" />
          <path d="M168 182 H208" fill="none" stroke="#94b8d1" strokeWidth="8" strokeLinecap="round" />

          <path d="M182 224 H272" fill="none" stroke="url(#turbidityBeam)" strokeWidth="10" strokeLinecap="round" />
          <rect x="94" y="196" width="74" height="56" rx="24" fill="url(#turbidityModule)" stroke="#88b59a" strokeWidth="2" />
          <rect x="84" y="212" width="16" height="24" rx="8" fill="#cfd5db" />
          <path d="M168 224 H182" fill="none" stroke="#7dc78b" strokeWidth="8" strokeLinecap="round" />

          <circle cx="392" cy="224" r="112" fill="rgba(255,255,255,0.82)" stroke="#8aa9bf" strokeWidth="3" />
          <circle cx="392" cy="224" r="98" fill="#ffffff" />
          <path d="M278 224 H506" fill="none" stroke="url(#turbidityBeam)" strokeWidth="16" strokeLinecap="round" />

          <circle cx="364" cy="176" r="5" fill="#27313b" />
          <circle cx="390" cy="164" r="4" fill="#27313b" />
          <circle cx="426" cy="186" r="5" fill="#27313b" />
          <circle cx="348" cy="212" r="4" fill="#27313b" />
          <circle cx="392" cy="196" r="5" fill="#27313b" />
          <circle cx="420" cy="230" r="5" fill="#27313b" />
          <circle cx="360" cy="248" r="5" fill="#27313b" />
          <circle cx="398" cy="248" r="4" fill="#27313b" />
          <circle cx="438" cy="258" r="5" fill="#27313b" />
          <circle cx="372" cy="278" r="5" fill="#27313b" />
          <circle cx="408" cy="286" r="4" fill="#27313b" />
          <circle cx="432" cy="304" r="5" fill="#27313b" />

          <path d="M392 224 L352 306" fill="none" stroke="#27313b" strokeWidth="2.4" strokeDasharray="6 6" />
          <path d="M392 224 L392 318" fill="none" stroke="#27313b" strokeWidth="2.4" strokeDasharray="6 6" />
          <path d="M392 224 L420 312" fill="none" stroke="#27313b" strokeWidth="2.4" strokeDasharray="6 6" />

          <path d="M510 224 H572" fill="none" stroke="#9bc4da" strokeWidth="8" strokeLinecap="round" />
          <rect x="574" y="196" width="74" height="56" rx="24" fill="url(#turbidityModule)" stroke="#88b59a" strokeWidth="2" />
          <rect x="648" y="212" width="16" height="24" rx="8" fill="#cfd5db" />

          <path d="M392 336 V382" fill="none" stroke="#8faec4" strokeWidth="8" strokeLinecap="round" />
          <rect x="356" y="382" width="72" height="56" rx="24" fill="url(#turbidityModule)" stroke="#88b59a" strokeWidth="2" />
          <rect x="384" y="438" width="16" height="24" rx="8" fill="#cfd5db" />

          <path d="M208 138 C238 138 258 150 278 168" fill="none" stroke="#92b7cf" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="208" cy="138" r="4.5" fill="#92b7cf" />
          <circle cx="278" cy="168" r="4.5" fill="#92b7cf" />
        </svg>
      </div>
    </div>
  )
}
