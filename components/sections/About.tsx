'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '@/components/ui/Card'
import GeometricShape from '@/components/ui/GeometricShape'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 pointer-events-none">
        <GeometricShape shape="circle" size={120} color="sage-200" />
      </div>
      <div className="absolute bottom-20 left-10 pointer-events-none">
        <GeometricShape shape="organic" size={150} color="gold-200" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-sage-400 to-gold-400 rounded-organic animate-blob" />
              {/* Add your profile image here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-earth-100 rounded-organic flex items-center justify-center text-earth-400">
                  <span className="text-6xl">👤</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="elevated">
              <h3 className="font-display text-2xl font-semibold text-earth-900 mb-4">
                Hello! I&apos;m Carter
              </h3>
              <div className="space-y-4 text-earth-700 leading-relaxed">
                <p>
                  I&apos;m a Computer Science student with a deep passion for creating
                  elegant software solutions and uncovering meaningful insights
                  from data.
                </p>
                <p>
                  My journey in technology has led me to explore various aspects
                  of software development, from building full-stack web
                  applications to diving deep into data analysis and machine
                  learning.
                </p>
                <p>
                  I believe in writing clean, maintainable code and continuously
                  learning new technologies to stay at the forefront of the
                  ever-evolving tech landscape.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new programming
                  paradigms, contributing to open-source projects, or analyzing
                  datasets to solve real-world problems.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
