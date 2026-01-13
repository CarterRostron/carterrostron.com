'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GeometricShapeProps {
  shape?: 'circle' | 'triangle' | 'hexagon' | 'organic'
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

export default function GeometricShape({
  shape = 'circle',
  size = 100,
  color = 'sage-200',
  animate = true,
  className,
}: GeometricShapeProps) {
  const animationProps = animate
    ? {
        animate: {
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {}

  const shapes = {
    circle: (
      <motion.div
        className={cn(`w-${size} h-${size} rounded-full bg-${color} opacity-20`, className)}
        style={{ width: size, height: size }}
        {...animationProps}
      />
    ),
    triangle: (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={cn(`text-${color} opacity-20`, className)}
        {...animationProps}
      >
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </motion.svg>
    ),
    hexagon: (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={cn(`text-${color} opacity-20`, className)}
        {...animationProps}
      >
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="currentColor" />
      </motion.svg>
    ),
    organic: (
      <motion.div
        className={cn(`bg-${color} opacity-20 animate-blob`, className)}
        style={{
          width: size,
          height: size,
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
        }}
        {...animationProps}
      />
    ),
  }

  return shapes[shape]
}
