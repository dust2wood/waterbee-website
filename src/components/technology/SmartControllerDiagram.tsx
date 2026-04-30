import {
  Bluetooth,
  BrainCircuit,
  Database,
  ShieldCheck,
  Signal,
  Wifi,
  Workflow,
} from 'lucide-react'
import { clsx } from 'clsx'

interface SmartControllerDiagramProps {
  locale: string
  className?: string
}

function Node({
  icon: Icon,
  className,
  tone = 'cyan',
}: {
  icon: typeof Wifi
  className?: string
  tone?: 'cyan' | 'gold'
}) {
  const tones =
    tone === 'gold'
      ? 'border-gold-500/22 bg-gold-500/12 text-gold-400'
      : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100'

  return (
    <div
      className={clsx(
        'absolute flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-sm shadow-[0_18px_40px_rgba(2,8,15,0.28)]',
        tones,
        className,
      )}
    >
      <Icon className="h-7 w-7" />
    </div>
  )
}

function LinkLine({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'absolute rounded-full bg-[linear-gradient(90deg,rgba(111,217,255,0.75),rgba(252,201,0,0.7))]',
        className,
      )}
    />
  )
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
          { label: 'Python 환경', Icon: Workflow, tone: 'gold' as const },
          { label: 'AI 검증', Icon: BrainCircuit, tone: 'cyan' as const },
          { label: 'Wi‑Fi / Bluetooth', Icon: Wifi, tone: 'cyan' as const },
        ],
      }
    : {
        badge: 'Next Controller',
        status: 'Coming Soon',
        legends: [
          { label: 'Python Runtime', Icon: Workflow, tone: 'gold' as const },
          { label: 'AI Validation', Icon: BrainCircuit, tone: 'cyan' as const },
          { label: 'Wi‑Fi / Bluetooth', Icon: Wifi, tone: 'cyan' as const },
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

      <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(111,217,255,0.08),transparent_38%)]">
        <LinkLine className="left-[50%] top-[31%] h-[3px] w-[18%]" />
        <LinkLine className="left-[50%] top-[48%] h-[3px] w-[22%]" />
        <LinkLine className="left-[28%] top-[48%] h-[3px] w-[18%]" />
        <LinkLine className="left-[38%] top-[29%] h-[3px] w-[12%] -rotate-[35deg]" />
        <LinkLine className="left-[38%] top-[63%] h-[3px] w-[12%] rotate-[35deg]" />
        <LinkLine className="left-[49.8%] top-[67%] h-[18%] w-[3px]" />

        <Node icon={BrainCircuit} className="left-[18%] top-[18%]" />
        <Node icon={Wifi} className="right-[16%] top-[20%]" />
        <Node icon={Bluetooth} className="right-[18%] top-[44%]" />
        <Node icon={ShieldCheck} className="left-[22%] top-[56%]" tone="gold" />
        <Node icon={Signal} className="left-[44%] bottom-[11%]" tone="gold" />

        <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,34,64,0.96),rgba(9,24,39,0.96))] shadow-[0_24px_70px_rgba(2,8,15,0.42)]">
          <div className="absolute inset-4 rounded-[24px] border border-cyan-300/15" />
          <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-cyan-300/22 bg-cyan-300/10 text-cyan-100">
            <Workflow className="h-10 w-10" />
          </div>
        </div>

        <div className="absolute left-[34%] top-[35%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80">
          <Database className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {copy.legends.map(({ label, Icon, tone }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
          >
            <div
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-xl border',
                tone === 'gold'
                  ? 'border-gold-500/16 bg-gold-500/10'
                  : 'border-cyan-300/16 bg-cyan-300/10',
              )}
            >
              <Icon
                className={clsx(
                  'h-4 w-4',
                  tone === 'gold' ? 'text-gold-400' : 'text-cyan-100',
                )}
              />
            </div>
            <span className="text-sm font-medium text-white/90">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
