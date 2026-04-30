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
        title: 'ESP32 스마트 컨트롤러 아키텍처',
        subtitle: '센서 수집, 현장 제어, Wi-Fi · Bluetooth 연결을 하나의 컨트롤러 안에 담는 구상입니다.',
        status: '출시 예정',
        wifi: 'Wi-Fi 클라우드',
        ble: 'Bluetooth 현장 연결',
        sensor: '센서 입력',
        output: 'RS-485 · 4~20mA · Relay',
        mobile: '모바일/현장 UI',
        cloud: '원격 대시보드',
      }
    : {
        title: 'ESP32 Smart Controller Architecture',
        subtitle: 'A planned controller architecture that combines sensor acquisition, local control, and Wi-Fi · Bluetooth connectivity.',
        status: 'Coming Soon',
        wifi: 'Wi-Fi Cloud',
        ble: 'Bluetooth Local Link',
        sensor: 'Sensor Inputs',
        output: 'RS-485 · 4~20mA · Relay',
        mobile: 'Mobile / Local UI',
        cloud: 'Remote Dashboard',
      }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[30px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(74,154,202,0.22),transparent_28%),linear-gradient(160deg,rgba(9,25,41,0.98),rgba(7,18,31,0.98))] p-6 shadow-[0_30px_80px_rgba(2,8,15,0.45)]',
        className,
      )}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <div className="mb-5 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/75">
            WBSC-ESP32
          </span>
          <span className="rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-400">
            {copy.status}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">{copy.subtitle}</p>
      </div>

      <svg viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="ctrlBeam" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6FD9FF" />
            <stop offset="100%" stopColor="#FCC900" />
          </linearGradient>
        </defs>

        <rect x="258" y="146" width="244" height="220" rx="38" fill="rgba(11,25,41,0.92)" stroke="rgba(255,255,255,0.08)" />
        <rect x="296" y="194" width="168" height="124" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(123,227,255,0.32)" />
        <rect x="330" y="220" width="100" height="70" rx="18" fill="rgba(123,227,255,0.12)" stroke="rgba(123,227,255,0.45)" />
        <text x="348" y="248" fill="#7BE3FF" fontSize="16" fontWeight="700">
          ESP32
        </text>
        <text x="336" y="270" fill="#FFFFFF" fontSize="13">
          Wi-Fi / BLE
        </text>

        <path d="M258 256 H126" fill="none" stroke="url(#ctrlBeam)" strokeWidth="6" strokeLinecap="round" />
        <path d="M502 216 H618" fill="none" stroke="url(#ctrlBeam)" strokeWidth="6" strokeLinecap="round" />
        <path d="M380 146 V74" fill="none" stroke="url(#ctrlBeam)" strokeWidth="6" strokeLinecap="round" />
        <path d="M380 366 V438" fill="none" stroke="url(#ctrlBeam)" strokeWidth="6" strokeLinecap="round" />

        <rect x="52" y="212" width="136" height="88" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(255,255,255,0.08)" />
        <text x="78" y="248" fill="#FCC900" fontSize="16" fontWeight="700">
          {copy.sensor}
        </text>
        <text x="78" y="274" fill="#A8B8C8" fontSize="14">
          WBCL · WBTU · pH/EC
        </text>

        <rect x="572" y="172" width="144" height="88" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(123,227,255,0.35)" />
        <text x="598" y="208" fill="#7BE3FF" fontSize="16" fontWeight="700">
          {copy.wifi}
        </text>
        <text x="598" y="234" fill="#A8B8C8" fontSize="14">
          {copy.cloud}
        </text>

        <rect x="560" y="280" width="156" height="88" rx="28" fill="rgba(17,34,64,0.95)" stroke="rgba(123,227,255,0.22)" />
        <text x="586" y="316" fill="#7BE3FF" fontSize="16" fontWeight="700">
          {copy.ble}
        </text>
        <text x="586" y="342" fill="#A8B8C8" fontSize="14">
          {copy.mobile}
        </text>

        <rect x="272" y="414" width="216" height="70" rx="26" fill="rgba(17,34,64,0.95)" stroke="rgba(255,255,255,0.08)" />
        <text x="306" y="456" fill="#FCC900" fontSize="16" fontWeight="700">
          {copy.output}
        </text>

        <circle cx="380" cy="110" r="24" fill="rgba(123,227,255,0.12)" stroke="rgba(123,227,255,0.35)" />
        <path d="M366 111a20 20 0 0 1 28 0" fill="none" stroke="#7BE3FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M372 118a11 11 0 0 1 16 0" fill="none" stroke="#7BE3FF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="380" cy="124" r="3" fill="#7BE3FF" />
      </svg>
    </div>
  )
}
