'use client'

import { clsx } from 'clsx'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return <div className={clsx(className)}>{children}</div>
}
