'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { useState, useEffect } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionVariants = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 40, opacity: 0 },
  right: { x: -40, opacity: 0 },
  none: { opacity: 0 },
}

const visibleVariant = { x: 0, y: 0, opacity: 1 }

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={clsx(className)}>{children}</div>
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={visibleVariant}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
