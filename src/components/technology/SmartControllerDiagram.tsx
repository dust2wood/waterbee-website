import { BrainCircuit, ShieldCheck, Workflow } from 'lucide-react'
import { clsx } from 'clsx'

interface SmartControllerDiagramProps {
  locale: string
  className?: string
}

export default function SmartControllerDiagram({
  locale,
  className,
}: SmartControllerDiagramProps) {
  const isKo = locale === 'ko'

  const copy = isKo
    ? {
        badge: '차세대 제어기',
        status: '출시 예정',
        legends: [
          { label: 'Python 환경', Icon: Workflow },
          { label: 'AI 검증', Icon: BrainCircuit },
          { label: '현장 연동', Icon: ShieldCheck },
        ],
      }
    : {
        badge: 'Next Controller',
        status: 'Coming Soon',
        legends: [
          { label: 'Python Runtime', Icon: Workflow },
          { label: 'AI Validation', Icon: BrainCircuit },
          { label: 'Field Integration', Icon: ShieldCheck },
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
          {copy.status}
        </span>
      </div>

      <svg viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="ctrlFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6FD9FF" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
          <filter id="ctrlGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="250" y="118" width="220" height="194" rx="40" fill="rgba(11,25,41,0.94)" stroke="rgba(255,255,255,0.08)" />
        <rect x="290" y="158" width="140" height="114" rx="28" fill="rgba(17,34,64,0.96)" stroke="rgba(123,227,255,0.34)" />
        <rect x="324" y="186" width="72" height="58" rx="18" fill="rgba(123,227,255,0.12)" stroke="rgba(123,227,255,0.46)" />

        <circle cx="360" cy="70" r="26" fill="rgba(123,227,255,0.12)" stroke="rgba(123,227,255,0.35)" />
        <circle cx="320" cy="54" r="8" fill="#6FD9FF" opacity="0.72" filter="url(#ctrlGlow)" />
        <circle cx="402" cy="56" r="8" fill="#FCC900" opacity="0.82" filter="url(#ctrlGlow)" />
        <circle cx="360" cy="32" r="7" fill="#7BE3FF" opacity="0.72" filter="url(#ctrlGlow)" />
        <path d="M360 118 V96" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <path d="M338 58 H346" fill="none" stroke="rgba(123,227,255,0.38)" strokeWidth="3" strokeLinecap="round" />
        <path d="M374 58 H384" fill="none" stroke="rgba(252,201,0,0.38)" strokeWidth="3" strokeLinecap="round" />
        <path d="M360 42 V50" fill="none" stroke="rgba(123,227,255,0.38)" strokeWidth="3" strokeLinecap="round" />

        <path d="M250 186 H150" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <path d="M250 230 H120" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <path d="M250 274 H150" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="126" cy="230" r="20" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="156" cy="186" r="16" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="156" cy="274" r="16" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="126" cy="230" r="6" fill="#FCC900" />
        <circle cx="156" cy="186" r="5" fill="#7BE3FF" />
        <circle cx="156" cy="274" r="5" fill="#7BE3FF" />

        <path d="M470 186 H580" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <path d="M470 248 H604" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <rect x="580" y="156" width="72" height="58" rx="22" fill="rgba(17,34,64,0.96)" stroke="rgba(123,227,255,0.32)" />
        <circle cx="616" cy="185" r="14" fill="rgba(123,227,255,0.12)" stroke="rgba(123,227,255,0.38)" />
        <rect x="584" y="226" width="92" height="62" rx="24" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.08)" />
        <path d="M610 248c8-10 16-10 24 0" fill="none" stroke="#7BE3FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M604 256c12-16 28-16 40 0" fill="none" stroke="#7BE3FF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="624" cy="264" r="3" fill="#7BE3FF" />

        <path d="M360 312 V382" fill="none" stroke="url(#ctrlFlow)" strokeWidth="6" strokeLinecap="round" />
        <rect x="260" y="382" width="200" height="42" rx="20" fill="rgba(17,34,64,0.96)" stroke="rgba(255,255,255,0.08)" />
        <circle cx="310" cy="403" r="6" fill="#FCC900" />
        <circle cx="360" cy="403" r="6" fill="#7BE3FF" />
        <circle cx="410" cy="403" r="6" fill="#FCC900" />
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
