'use client'

import { forwardRef } from 'react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gold-500 text-navy-900 font-semibold hover:bg-gold-400',
  secondary: 'border border-gold-500 text-gold-500 font-semibold hover:bg-gold-500 hover:text-navy-900',
  outline: 'border border-white/20 text-white font-medium hover:bg-white/10',
  ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
