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
      {badge && <div className="mb-3 text-xs font-bold uppercase text-[#8c7200]">{badge}</div>}
      <h2
        className={clsx(
          'text-3xl lg:text-4xl font-bold text-[#151a19] leading-tight tracking-normal',
          titleClassName,
        )}
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }}
      />
      {subtitle && (
        <p
          className={clsx(
            'mt-4 max-w-2xl text-base leading-7 text-[#68716f] lg:text-lg',
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
