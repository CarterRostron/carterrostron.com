'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import GeometricShape from '@/components/ui/GeometricShape'
import WaveDecoration from '@/components/ui/WaveDecoration'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-sage-50 to-gold-50 overflow-hidden pt-20"
    >
      {/* Decorative Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10">
          <GeometricShape shape="circle" size={150} color="sage-300" />
        </div>
        <div className="absolute top-40 right-20">
          <GeometricShape shape="organic" size={200} color="gold-300" />
        </div>
        <div className="absolute bottom-40 left-1/4">
          <GeometricShape shape="hexagon" size={100} color="earth-300" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <GeometricShape shape="triangle" size={120} color="sage-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-earth-900 mb-6"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-earth-700 mb-8 font-light"
        >
          Computer Science Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-earth-600 mb-12 max-w-2xl mx-auto"
        >
          Passionate about building innovative software solutions and extracting
          insights from data
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" onClick={scrollToPortfolio}>
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>

      {/* Wave Decoration */}
      <WaveDecoration position="bottom" color="cream-50" />
    </section>
  )
}
