import {
  Bluetooth,
  BrainCircuit,
  Cpu,
  MonitorSmartphone,
  Smartphone,
  Wifi,
} from 'lucide-react'
import { clsx } from 'clsx'

interface SmartControllerDiagramProps {
  locale: string
  className?: string
}

function FloatingIcon({
  icon: Icon,
  className,
  tone = 'cyan',
}: {
  icon: typeof Wifi
  className?: string
  tone?: 'cyan' | 'gold'
}) {
  return (
    <div
      className={clsx(
        'absolute flex h-11 w-11 items-center justify-center rounded-2xl border shadow-[0_18px_32px_rgba(2,8,15,0.26)] backdrop-blur-sm',
        tone === 'gold'
          ? 'border-gold-500/20 bg-gold-500/12 text-gold-400'
          : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  )
}

function MiniChart() {
  return (
    <div className="absolute inset-3 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,34,54,0.95),rgba(10,20,34,0.96))]">
      <div className="absolute left-3 right-3 top-4 h-px bg-white/10" />
      <div className="absolute left-3 right-3 top-8 h-px bg-white/10" />
      <div className="absolute left-3 right-3 top-12 h-px bg-white/10" />
      <div className="absolute bottom-3 left-4 flex items-end gap-1.5">
        <span className="h-3 w-2 rounded-full bg-cyan-300/80" />
        <span className="h-5 w-2 rounded-full bg-cyan-300/55" />
        <span className="h-7 w-2 rounded-full bg-gold-400/80" />
        <span className="h-4 w-2 rounded-full bg-cyan-300/45" />
      </div>
      <div className="absolute right-4 top-4 h-7 w-7 rounded-full border border-gold-500/18 bg-gold-500/10">
        <div className="absolute inset-[5px] rounded-full border-2 border-cyan-300/60 border-r-transparent border-b-transparent" />
      </div>
      <div className="absolute left-4 right-12 bottom-8 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(111,217,255,0.65),rgba(252,201,0,0.82))]" />
    </div>
  )
}

export default function SmartControllerDiagram({
  locale: _locale,
  className,
}: SmartControllerDiagramProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(74,154,202,0.18),transparent_28%),linear-gradient(160deg,rgba(9,25,41,0.98),rgba(7,18,31,0.98))] p-4 shadow-[0_28px_70px_rgba(2,8,15,0.42)] sm:p-5',
        className,
      )}
    >
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="relative h-[290px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(111,217,255,0.08),transparent_32%),linear-gradient(180deg,rgba(10,22,36,0.98),rgba(6,15,26,0.98))] sm:h-[330px]">
        <svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="controllerLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(111,217,255,0.3)" />
              <stop offset="45%" stopColor="rgba(111,217,255,0.75)" />
              <stop offset="100%" stopColor="rgba(252,201,0,0.75)" />
            </linearGradient>
            <radialGradient id="controllerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(111,217,255,0.22)" />
              <stop offset="100%" stopColor="rgba(111,217,255,0)" />
            </radialGradient>
          </defs>

          <circle cx="370" cy="192" r="132" fill="url(#controllerGlow)" />
          <path
            d="M118 278 C178 278 210 270 250 232"
            fill="none"
            stroke="url(#controllerLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M338 214 C392 164 420 134 474 126"
            fill="none"
            stroke="url(#controllerLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M530 128 C580 122 606 106 640 88"
            fill="none"
            stroke="url(#controllerLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M612 118 C656 112 688 108 716 104"
            fill="none"
            stroke="url(#controllerLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="118" cy="278" r="5" fill="#6FD9FF" />
          <circle cx="250" cy="232" r="5" fill="#6FD9FF" />
          <circle cx="474" cy="126" r="5" fill="#FCC900" />
          <circle cx="640" cy="88" r="5" fill="#6FD9FF" />
          <circle cx="716" cy="104" r="5" fill="#6FD9FF" />
        </svg>

        <FloatingIcon icon={Wifi} className="left-[10%] top-[16%]" />
        <FloatingIcon icon={Bluetooth} className="left-[42%] bottom-[12%]" tone="gold" />

        <div className="absolute bottom-[10%] left-[4%]">
          <div className="relative h-24 w-28">
            <div className="absolute inset-x-3 bottom-1 h-8 rounded-full bg-cyan-300/20 blur-xl" />
            <div className="absolute bottom-0 left-3 h-6 w-20 rounded-full bg-[#5d7f9b]" />
            <div className="absolute bottom-3 left-0 h-10 w-28 rounded-[999px] bg-[linear-gradient(180deg,#f6f7f8,#c9d0d7)] shadow-[0_18px_24px_rgba(2,8,15,0.22)]" />
            <div className="absolute bottom-5 left-5 h-6 w-[4.5rem] rounded-full border border-slate-500/20 bg-[linear-gradient(180deg,#15283a,#0c1a2a)]" />
            <div className="absolute bottom-7 left-10 h-2 w-8 rounded-full bg-cyan-300/40" />
            <div className="absolute left-8 top-0 flex flex-col items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              <span className="h-2 w-10 rounded-full border border-cyan-300/35" />
            </div>
          </div>
        </div>

        <div className="absolute left-[28%] top-[30%]">
          <div className="relative h-[148px] w-[122px]">
            <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,#7b8797,#545f6f)] shadow-[0_24px_40px_rgba(2,8,15,0.32)]" />
            <div className="absolute right-[-14px] top-[14px] h-[114px] w-[18px] skew-y-[20deg] rounded-r-[12px] bg-[#445062]" />
            <div className="absolute inset-x-4 top-5 h-[98px] rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(21,34,47,0.92),rgba(13,24,36,0.94))]" />
            <div className="absolute inset-x-6 top-10 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                <Cpu className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute left-9 top-[98px] flex gap-2">
              <span className="h-2 w-8 rounded-full bg-gold-400/75" />
              <span className="h-2 w-3 rounded-full bg-cyan-300/60" />
            </div>
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <span className="h-1.5 w-10 rounded-full bg-white/20" />
              <span className="h-1.5 w-12 rounded-full bg-white/12" />
            </div>
          </div>
        </div>

        <div className="absolute left-[53%] top-[20%]">
          <div className="relative h-24 w-32">
            <div className="absolute left-3 top-6 h-12 w-14 rounded-full border border-cyan-300/18 bg-[#4f7890]" />
            <div className="absolute left-11 top-0 h-16 w-16 rounded-full border border-cyan-300/18 bg-[#5d8ca5]" />
            <div className="absolute right-3 top-7 h-11 w-14 rounded-full border border-cyan-300/18 bg-[#4f7890]" />
            <div className="absolute inset-x-6 bottom-2 h-10 rounded-[18px] border border-cyan-300/18 bg-[#5f8ca1]" />
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-gold-500/22 bg-gold-500/12 text-gold-400 shadow-[0_18px_26px_rgba(2,8,15,0.22)]">
              <BrainCircuit className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="absolute right-[23%] top-[16%] rotate-[-8deg]">
          <div className="relative h-[126px] w-[76px] rounded-[20px] border border-gold-500/30 bg-[linear-gradient(180deg,#f1c34c,#d89b18)] p-[5px] shadow-[0_24px_32px_rgba(2,8,15,0.24)]">
            <div className="relative h-full rounded-[16px] border border-slate-800/20 bg-[linear-gradient(180deg,#102033,#091723)]">
              <MiniChart />
              <div className="absolute left-1/2 top-2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-white/20" />
              <Smartphone className="absolute bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-white/55" />
            </div>
          </div>
        </div>

        <div className="absolute right-[5%] top-[12%] rotate-[4deg]">
          <div className="relative h-[150px] w-[154px] rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,#555d69,#323944)] p-[7px] shadow-[0_28px_36px_rgba(2,8,15,0.26)]">
            <div className="relative h-full rounded-[12px] border border-white/8 bg-[linear-gradient(180deg,#0f1e31,#07131f)]">
              <MiniChart />
              <MonitorSmartphone className="absolute bottom-3 right-3 h-4 w-4 text-cyan-100/60" />
            </div>
            <div className="absolute bottom-[-18px] left-1/2 h-5 w-14 -translate-x-1/2 rounded-b-[16px] bg-[#657183]" />
          </div>
        </div>
      </div>
    </div>
  )
}
