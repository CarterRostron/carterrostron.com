import emailjs from '@emailjs/browser'

export interface EmailFormData {
  name: string
  email: string
  message: string
}

export interface EmailResponse {
  success: boolean
  error?: unknown
}

/**
 * Sends an email using EmailJS service
 * Make sure to set up environment variables in .env.local:
 * - NEXT_PUBLIC_EMAILJS_SERVICE_ID
 * - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 * - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 */
export const sendEmail = async (formData: EmailFormData): Promise<EmailResponse> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.')
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    )

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}
