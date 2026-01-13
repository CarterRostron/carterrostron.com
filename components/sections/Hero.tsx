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
          Computer Science @ Haverford College
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-earth-600 mb-12 max-w-2xl mx-auto"
        >
          Computational Biology Researcher | Machine Learning | Software Development
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
          <a
            href="/resume/carter-rostron-resume.pdf"
            download="Carter_Rostron_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Wave Decoration */}
      <WaveDecoration position="bottom" color="cream-50" />
    </section>
  )
}
