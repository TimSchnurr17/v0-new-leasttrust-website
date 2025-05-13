"use client"

import { useState } from "react"
import { sendContactEmail } from "@/actions/contact"

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(formData)
      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent. We'll get back to you shortly.",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`contact-form ${className}`}>
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Security Consultation"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Tell us about your security needs..."
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn--primary py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {formStatus.type && (
          <div
            className={`mt-4 p-4 rounded-md ${
              formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}
