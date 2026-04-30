import { clsx } from 'clsx'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        className,
      )}
    >
      {badge && (
        <span className="mb-3 inline-flex rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-400">
          {badge}
        </span>
      )}
      <h2
        className={clsx(
          'text-3xl lg:text-4xl font-bold text-white leading-tight',
          titleClassName,
        )}
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }}
      />
      {subtitle && (
        <p
          className={clsx(
            'mt-4 max-w-2xl text-base text-text-secondary lg:text-lg',
            align === 'center' && 'mx-auto',
            align === 'left' && 'mx-0',
            align === 'right' && 'ml-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
