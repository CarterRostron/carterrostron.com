'use client'

import React, { useState } from 'react'
import { sendEmail, type EmailFormData } from '@/lib/emailjs'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    // Send email
    const result = await sendEmail(formData)

    if (result.success) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact me directly.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-sage-100 text-sage-700 rounded-2xl">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-2xl">
          {errorMessage}
        </div>
      )}
    </form>
  )
}
