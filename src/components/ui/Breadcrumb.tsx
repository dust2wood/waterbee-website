import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-[#7a8380]">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3 w-3 text-[#a5adaa]" />}
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-[#151a19]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#303735]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
