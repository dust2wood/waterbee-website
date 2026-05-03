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
            <linearGradient id="rotatingHousing" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#7fa2bf" />
              <stop offset="100%" stopColor="#5f87a7" />
            </linearGradient>
            <linearGradient id="rotatingWater" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e3b157" />
              <stop offset="100%" stopColor="#cd8c22" />
            </linearGradient>
            <linearGradient id="rotatingSignal" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#77c2df" />
              <stop offset="100%" stopColor="#f2bc3f" />
            </linearGradient>
            <pattern id="rotatingBasket" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M0 10 L10 0 M-2 2 L2 -2 M8 12 L12 8"
                stroke="rgba(117,157,186,0.55)"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>

          <path
            d="M122 58h214a24 24 0 0 1 24 24v88a18 18 0 0 1-18 18h-38v190a28 28 0 0 1-28 28H186a28 28 0 0 1-28-28V188h-28a18 18 0 0 1-18-18V82a24 24 0 0 1 24-24z"
            fill="#f7fafc"
            stroke="url(#rotatingHousing)"
            strokeWidth="4"
          />

          <path
            d="M138 74h182a20 20 0 0 1 20 20v58a18 18 0 0 1-18 18H140a18 18 0 0 1-18-18V94a20 20 0 0 1 16-20z"
            fill="url(#rotatingWater)"
          />
          <path
            d="M128 118 C162 104 188 126 220 116 C250 108 280 126 316 114"
            fill="none"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <rect x="170" y="188" width="132" height="192" rx="30" fill="#203244" />
          <rect x="206" y="180" width="18" height="174" rx="9" fill="#cfd5db" />
          <rect x="252" y="88" width="18" height="230" rx="9" fill="#d2a33f" />
          <rect x="246" y="314" width="30" height="42" rx="10" fill="#d2a33f" />
          <rect x="240" y="322" width="42" height="56" rx="12" fill="url(#rotatingBasket)" stroke="#769dbc" strokeWidth="2" />
          <rect x="216" y="154" width="44" height="15" rx="8" fill="rgba(255,255,255,0.24)" />
          <rect x="238" y="154" width="20" height="17" rx="8" fill="rgba(255,230,167,0.72)" />

          <Gear x={220} y={36} size={56} fill="#dad2c6" innerFill="#9f978a" stroke="rgba(92,112,130,0.25)" />
          <Gear x={266} y={36} size={56} fill="#d7ae55" innerFill="#9f7721" stroke="rgba(92,112,130,0.2)" />
          <path d="M220 62 V112" fill="none" stroke="#bfc7ce" strokeWidth="5" strokeLinecap="round" />
          <path d="M266 62 V114" fill="none" stroke="#c99529" strokeWidth="5" strokeLinecap="round" />

          <ellipse cx="262" cy="350" rx="42" ry="18" fill="rgba(120, 170, 200, 0.18)" />
          <circle cx="262" cy="350" r="72" fill="none" stroke="rgba(119,170,202,0.38)" strokeWidth="2.5" strokeDasharray="12 12" />
          <path
            d="M314 320 A72 72 0 0 1 246 420"
            fill="none"
            stroke="#e7a924"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M244 420l-15-2 10-12"
            fill="none"
            stroke="#e7a924"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M208 314 A72 72 0 0 1 274 282"
            fill="none"
            stroke="#77b9d8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M276 282l14 5-10 10"
            fill="none"
            stroke="#77b9d8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path d="M378 230 H556" fill="none" stroke="#91b4cd" strokeWidth="3" strokeLinecap="round" />

          <rect x="560" y="164" width="134" height="108" rx="24" fill="#24384a" stroke="#8aa7bc" strokeWidth="3" />
          <path
            d="M580 232 C596 200 616 258 636 218 S668 200 678 246"
            fill="none"
            stroke="url(#rotatingSignal)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="678" cy="246" r="6" fill="#e7b343" />
          <path d="M580 186h84" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
          <path d="M580 202h62" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />

          <ellipse cx="610" cy="344" rx="82" ry="56" fill="rgba(123,163,190,0.12)" />
          <ellipse cx="610" cy="336" rx="84" ry="56" fill="#efbc57" stroke="#7da0bb" strokeWidth="3" />
          <Gear x={584} y={324} size={28} fill="#dad2c6" innerFill="#9f978a" stroke="rgba(92,112,130,0.2)" />
          <Gear x={616} y={324} size={28} fill="#d7ae55" innerFill="#9f7721" stroke="rgba(92,112,130,0.2)" />
          <path d="M548 336h126" fill="none" stroke="rgba(83,107,129,0.2)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
