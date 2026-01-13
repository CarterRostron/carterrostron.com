'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-br from-sage-50 via-cream-50 to-gold-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated">
              <h3 className="font-display text-2xl font-semibold text-earth-900 mb-6">
                Send Me a Message
              </h3>
              <ContactForm />
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="elevated" className="h-full">
              <h3 className="font-display text-2xl font-semibold text-earth-900 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-6">
                {/* Email */}
                {SITE_CONFIG.social.email && (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-earth-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${SITE_CONFIG.social.email}`}
                        className="text-earth-600 hover:text-sage-700 transition-colors"
                      >
                        {SITE_CONFIG.social.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* GitHub */}
                {SITE_CONFIG.social.github && (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center text-earth-700">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-earth-900 mb-1">GitHub</h4>
                      <a
                        href={SITE_CONFIG.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-earth-600 hover:text-sage-700 transition-colors"
                      >
                        {SITE_CONFIG.social.github.replace('https://github.com/', '@')}
                      </a>
                    </div>
                  </div>
                )}

                {/* LinkedIn */}
                {SITE_CONFIG.social.linkedin && (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-700">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-earth-900 mb-1">LinkedIn</h4>
                      <a
                        href={SITE_CONFIG.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-earth-600 hover:text-sage-700 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-earth-200">
                  <p className="text-earth-600 leading-relaxed">
                    I&apos;m always interested in hearing about new projects and
                    opportunities. Whether you have a question or just want to
                    say hi, feel free to get in touch!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
