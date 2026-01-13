import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'organic'
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  variant = 'default',
  className,
  hover = false,
}: CardProps) {
  const variants = {
    default: 'rounded-2xl shadow-soft',
    elevated: 'rounded-2xl shadow-lifted',
    organic: 'rounded-organic shadow-soft animate-blob',
  }

  const hoverEffect = hover
    ? 'hover:shadow-lifted hover:-translate-y-2 transition-all duration-300'
    : ''

  return (
    <div
      className={cn(
        'bg-white p-6',
        variants[variant],
        hoverEffect,
        className
      )}
    >
      {children}
    </div>
  )
}
