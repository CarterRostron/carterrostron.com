'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
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
                  I&apos;m a Computer Science student at Haverford College (Class of 2027)
                  with a 3.96 major GPA, passionate about computational biology, machine
                  learning, and software development.
                </p>
                <p>
                  Currently, I&apos;m an undergraduate researcher in Prof. Sara Mathieson&apos;s
                  computational biology lab, where I develop Python and Bash software for
                  machine learning research on mosquito populations in Africa, applying
                  MapNN neural networks and SLiM evolutionary simulations.
                </p>
                <p>
                  My technical interests span from low-level systems programming in C/C++
                  to high-level data analysis with Python. I&apos;ve built everything from
                  custom data structures to interactive games, always focusing on clean
                  code and elegant solutions.
                </p>
                <p>
                  Beyond coding, I&apos;m active in Havercode (our CS club), play ultimate
                  frisbee with Big Donkey Ultimate, and perform improv comedy with the
                  Lighted Fools, balancing technical work with creative pursuits.
                </p>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <a
                href="/resume/carter-rostron-resume.pdf"
                download="Carter_Rostron_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
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
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
