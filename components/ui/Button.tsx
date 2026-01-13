import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'bg-sage-500 text-white hover:bg-sage-600 hover:shadow-glow-green transition-all duration-300',
    secondary:
      'bg-gold-400 text-white hover:bg-gold-500 hover:shadow-glow-gold transition-all duration-300',
    outline:
      'border-2 border-sage-500 text-sage-700 hover:bg-sage-50 transition-all duration-300',
  }

  return (
    <button
      className={cn(
        'px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-transform',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
