import { clsx } from 'clsx'

interface RotatingElectrodeDiagramProps {
  locale: string
  className?: string
}

const gearAngles = Array.from({ length: 10 }, (_, index) => index * 36)

function Gear({
  x,
  y,
  size,
  fill,
  innerFill,
  stroke,
}: {
  x: number
  y: number
  size: number
  fill: string
  innerFill: string
  stroke: string
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {gearAngles.map((angle) => (
        <rect
          key={angle}
          x={-size * 0.08}
          y={-size * 0.62}
          width={size * 0.16}
          height={size * 0.22}
          rx={size * 0.03}
          fill={fill}
          stroke={stroke}
          strokeWidth="1"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={size * 0.42} fill={fill} stroke={stroke} strokeWidth="2" />
      <circle r={size * 0.14} fill={innerFill} />
    </g>
  )
}

export default function RotatingElectrodeDiagram({
  locale: _locale,
  className,
}: RotatingElectrodeDiagramProps) {
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
            <linearGradient id="rotatingTankFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#EDA93A" />
              <stop offset="100%" stopColor="#C67A12" />
            </linearGradient>
            <linearGradient id="rotatingHousingStroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#8CEBFF" />
              <stop offset="100%" stopColor="#49A9D1" />
            </linearGradient>
            <linearGradient id="rotatingSignalStroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#6FD9FF" />
              <stop offset="100%" stopColor="#FCC900" />
            </linearGradient>
            <pattern id="rotatingMesh" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M0 10 L10 0 M-2 2 L2 -2 M8 12 L12 8"
                stroke="rgba(140,235,255,0.34)"
                strokeWidth="1.2"
              />
            </pattern>
            <radialGradient id="rotatingGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(252,201,0,0.18)" />
              <stop offset="100%" stopColor="rgba(252,201,0,0)" />
            </radialGradient>
          </defs>

          <circle cx="290" cy="240" r="122" fill="url(#rotatingGlow)" />

          <path
            d="M126 54h208a26 26 0 0 1 26 26v88a20 20 0 0 1-20 20h-34v190a30 30 0 0 1-30 30H184a30 30 0 0 1-30-30V188h-28a20 20 0 0 1-20-20V80a26 26 0 0 1 20-26z"
            fill="rgba(9,24,39,0.96)"
            stroke="url(#rotatingHousingStroke)"
            strokeWidth="4"
          />

          <path
            d="M138 72h184a20 20 0 0 1 20 20v64a18 18 0 0 1-18 18H140a18 18 0 0 1-18-18V92a20 20 0 0 1 16-20z"
            fill="url(#rotatingTankFill)"
            opacity="0.98"
          />

          <path
            d="M124 108 C160 96 188 118 222 108 C250 100 280 118 314 106"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <rect x="170" y="188" width="126" height="192" rx="28" fill="rgba(7,17,30,0.98)" stroke="rgba(255,255,255,0.08)" />
          <rect x="206" y="180" width="18" height="176" rx="9" fill="#D6DBE1" />
          <rect x="250" y="88" width="18" height="234" rx="9" fill="#D7B14A" />
          <rect x="244" y="314" width="30" height="44" rx="12" fill="#D7B14A" />
          <rect x="238" y="322" width="42" height="58" rx="12" fill="url(#rotatingMesh)" stroke="rgba(140,235,255,0.42)" strokeWidth="2" />

          <rect x="216" y="156" width="46" height="16" rx="8" fill="rgba(255,255,255,0.18)" />
          <rect x="238" y="156" width="20" height="18" rx="8" fill="rgba(252,201,0,0.3)" />

          <Gear x={220} y={32} size={54} fill="#CFC7B6" innerFill="#9A9388" stroke="rgba(255,255,255,0.18)" />
          <Gear x={264} y={32} size={54} fill="#D7B14A" innerFill="#A4791A" stroke="rgba(255,255,255,0.18)" />
          <path d="M220 60 V112" fill="none" stroke="rgba(209,216,222,0.48)" strokeWidth="5" strokeLinecap="round" />
          <path d="M264 60 V114" fill="none" stroke="rgba(215,177,74,0.58)" strokeWidth="5" strokeLinecap="round" />

          <ellipse cx="258" cy="350" rx="40" ry="18" fill="rgba(140,235,255,0.12)" />
          <circle cx="258" cy="350" r="72" fill="none" stroke="rgba(252,201,0,0.22)" strokeWidth="2.5" strokeDasharray="12 12" />
          <path
            d="M312 316 A74 74 0 0 1 246 421"
            fill="none"
            stroke="#FCC900"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M244 420l-16-3 10-12"
            fill="none"
            stroke="#FCC900"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M205 312 A74 74 0 0 1 272 280"
            fill="none"
            stroke="rgba(111,217,255,0.92)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M275 280l14 6-12 10"
            fill="none"
            stroke="rgba(111,217,255,0.92)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect x="560" y="154" width="134" height="114" rx="28" fill="rgba(11,25,41,0.95)" stroke="rgba(255,255,255,0.08)" />
          <path
            d="M578 230 C594 192 616 264 636 216 S668 196 676 244"
            fill="none"
            stroke="url(#rotatingSignalStroke)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="676" cy="244" r="6" fill="#FCC900" />
          <path d="M578 180h86" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />
          <path d="M578 198h64" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />

          <ellipse cx="608" cy="346" rx="84" ry="58" fill="rgba(255,255,255,0.05)" />
          <ellipse cx="608" cy="338" rx="84" ry="56" fill="rgba(230,164,57,0.92)" stroke="url(#rotatingHousingStroke)" strokeWidth="3" />
          <Gear x={582} y={326} size={28} fill="#CFC7B6" innerFill="#9A9388" stroke="rgba(255,255,255,0.18)" />
          <Gear x={614} y={326} size={28} fill="#D7B14A" innerFill="#A4791A" stroke="rgba(255,255,255,0.18)" />
          <path d="M542 338h132" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
