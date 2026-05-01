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

function IconBubble({
  icon: Icon,
  className,
  tone = 'blue',
}: {
  icon: typeof Wifi
  className?: string
  tone?: 'blue' | 'gold' | 'rose'
}) {
  return (
    <div
      className={clsx(
        'absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_14px_24px_rgba(15,23,42,0.12)]',
        tone === 'gold' &&
          'border-amber-300 bg-[linear-gradient(180deg,#fff7dd,#f5df95)] text-amber-700',
        tone === 'rose' &&
          'border-rose-200 bg-[linear-gradient(180deg,#fff1f1,#ffd7d7)] text-rose-500',
        tone === 'blue' &&
          'border-sky-200 bg-[linear-gradient(180deg,#f6fbff,#dbefff)] text-sky-600',
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  )
}

function ScreenArtwork({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'absolute inset-[6px] overflow-hidden rounded-[12px] border border-slate-700/10 bg-[linear-gradient(180deg,#23364b,#152331)]',
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      <div className="absolute left-3 right-3 top-8 h-px bg-white/10" />
      <div className="absolute left-3 right-3 top-[3.4rem] h-px bg-white/10" />
      <div className="absolute left-3 right-3 top-[4.5rem] h-px bg-white/10" />
      <div className="absolute bottom-4 left-4 flex items-end gap-1.5">
        <span className="h-5 w-2 rounded-full bg-cyan-300/80" />
        <span className="h-8 w-2 rounded-full bg-cyan-300/50" />
        <span className="h-10 w-2 rounded-full bg-amber-300/90" />
        <span className="h-6 w-2 rounded-full bg-cyan-200/60" />
      </div>
      <div className="absolute left-3 right-14 bottom-7 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(125,211,252,0.9),rgba(251,191,36,0.95))]" />
      <div className="absolute right-4 top-9 h-11 w-11 rounded-full border border-amber-200/25 bg-amber-200/10">
        <div className="absolute inset-[8px] rounded-full border-2 border-cyan-200/80 border-r-transparent border-b-transparent" />
      </div>
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
        <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="smartFlow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#9BC2DE" />
              <stop offset="50%" stopColor="#76AAD0" />
              <stop offset="100%" stopColor="#69B8CC" />
            </linearGradient>
          </defs>

          <path
            d="M106 318 C168 318 194 306 240 274"
            fill="none"
            stroke="url(#smartFlow)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M334 254 C388 220 430 190 476 170"
            fill="none"
            stroke="url(#smartFlow)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M526 170 C582 170 612 150 648 116"
            fill="none"
            stroke="url(#smartFlow)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M528 188 C590 196 644 214 702 244"
            fill="none"
            stroke="url(#smartFlow)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle cx="106" cy="318" r="5" fill="#80b4d6" />
          <circle cx="240" cy="274" r="5" fill="#80b4d6" />
          <circle cx="476" cy="170" r="5" fill="#80b4d6" />
          <circle cx="648" cy="116" r="5" fill="#80b4d6" />
          <circle cx="702" cy="244" r="5" fill="#80b4d6" />
        </svg>

        <IconBubble icon={Wifi} className="left-[8%] top-[19%]" tone="rose" />
        <IconBubble icon={Bluetooth} className="left-[39%] bottom-[12%]" tone="blue" />

        <div className="absolute bottom-[11%] left-[4%]">
          <div className="relative h-24 w-28">
            <div className="absolute inset-x-4 bottom-0 h-6 rounded-full bg-[#7e92a7]" />
            <div className="absolute bottom-3 left-0 h-10 w-28 rounded-[999px] bg-[linear-gradient(180deg,#ffffff,#d9dfe4)] shadow-[0_16px_24px_rgba(15,23,42,0.12)]" />
            <div className="absolute bottom-5 left-6 h-6 w-16 rounded-full border border-slate-500/15 bg-[linear-gradient(180deg,#24384a,#152332)]" />
            <div className="absolute bottom-7 left-11 h-2 w-6 rounded-full bg-cyan-300/65" />
            <div className="absolute left-9 top-0 flex flex-col items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-10 rounded-full border border-sky-300/45" />
            </div>
          </div>
        </div>

        <div className="absolute left-[28%] top-[33%]">
          <div className="relative h-[150px] w-[118px]">
            <div className="absolute inset-0 rounded-[16px] bg-[linear-gradient(180deg,#8a96a6,#677383)] shadow-[0_18px_30px_rgba(15,23,42,0.16)]" />
            <div className="absolute right-[-10px] top-[16px] h-[110px] w-[12px] rounded-r-[10px] bg-[#5b6676]" />
            <div className="absolute inset-x-4 top-4 h-[88px] rounded-[12px] border border-white/20 bg-[linear-gradient(180deg,#1f3245,#13202d)]" />
            <div className="absolute left-1/2 top-[3.5rem] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-sky-200/25 bg-sky-100/10 text-sky-100">
              <Cpu className="h-6 w-6" />
            </div>
            <div className="absolute bottom-5 left-6 right-6 flex justify-between">
              <span className="h-2 w-10 rounded-full bg-amber-300/85" />
              <span className="h-2 w-3 rounded-full bg-sky-300/70" />
            </div>
            <div className="absolute bottom-10 left-6 flex flex-col gap-2">
              <span className="h-1.5 w-9 rounded-full bg-white/20" />
              <span className="h-1.5 w-12 rounded-full bg-white/12" />
            </div>
          </div>
        </div>

        <div className="absolute left-[53%] top-[24%]">
          <div className="relative h-24 w-32">
            <div className="absolute left-2 top-7 h-12 w-14 rounded-full bg-[#88b3c9]" />
            <div className="absolute left-10 top-0 h-16 w-16 rounded-full bg-[#79a8c4]" />
            <div className="absolute right-2 top-7 h-12 w-14 rounded-full bg-[#88b3c9]" />
            <div className="absolute inset-x-6 bottom-1 h-10 rounded-[18px] bg-[#7eaec4]" />
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-amber-200 bg-[linear-gradient(180deg,#fff5d5,#f0d88a)] text-amber-700 shadow-[0_14px_24px_rgba(15,23,42,0.12)]">
              <BrainCircuit className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="absolute right-[24%] top-[15%]">
          <div className="relative h-[130px] w-[78px] rounded-[18px] border border-amber-300 bg-[linear-gradient(180deg,#ffd767,#e7aa2d)] p-[5px] shadow-[0_18px_26px_rgba(15,23,42,0.14)]">
            <div className="relative h-full rounded-[14px] bg-[linear-gradient(180deg,#203348,#132130)]">
              <ScreenArtwork />
              <div className="absolute left-1/2 top-2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-white/20" />
              <Smartphone className="absolute bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-white/50" />
            </div>
          </div>
        </div>

        <div className="absolute right-[6%] top-[13%]">
          <div className="relative h-[156px] w-[160px] rounded-[18px] border border-slate-300 bg-[linear-gradient(180deg,#6e7683,#434c59)] p-[7px] shadow-[0_18px_26px_rgba(15,23,42,0.14)]">
            <div className="relative h-full rounded-[12px] bg-[linear-gradient(180deg,#223449,#111d29)]">
              <ScreenArtwork />
              <MonitorSmartphone className="absolute bottom-3 right-3 h-4 w-4 text-sky-100/60" />
            </div>
            <div className="absolute bottom-[-16px] left-1/2 h-5 w-16 -translate-x-1/2 rounded-b-[14px] bg-[#6f7784]" />
          </div>
        </div>
      </div>
    </div>
  )
}
