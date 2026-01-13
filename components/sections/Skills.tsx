'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import WaveDecoration from '@/components/ui/WaveDecoration'
import { SKILLS } from '@/lib/constants'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  const categories = [
    { title: 'Programming Languages', skills: SKILLS.languages, color: 'sage' },
    { title: 'Frameworks & Libraries', skills: SKILLS.frameworks, color: 'gold' },
    { title: 'Data Skills', skills: SKILLS.data, color: 'earth' },
    { title: 'Tools & Technologies', skills: SKILLS.tools, color: 'sage' },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-cream-50"
    >
      <WaveDecoration position="top" color="gold-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            A diverse toolkit spanning software development, data analysis, and
            modern technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="font-display text-2xl font-semibold text-earth-900 mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="flex flex-wrap gap-3 justify-center md:justify-start"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className={`px-4 py-2 bg-${category.color}-100 text-${category.color}-700 rounded-full font-medium hover:bg-${category.color}-200 hover:shadow-soft transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Wavy Divider (except for last category) */}
              {categoryIndex < categories.length - 1 && (
                <div className="mt-8 relative h-8">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q25,0 50,5 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-sage-300"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDecoration position="bottom" color="sage-100" />
    </section>
  )
}
