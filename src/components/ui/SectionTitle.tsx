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
        <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3 border border-gold-500/30 bg-gold-500/10 px-4 py-1 rounded-full">
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
        <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
