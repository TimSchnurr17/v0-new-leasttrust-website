"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const faqItems: FAQItem[] = [
    {
      question: "How are engagements structured?",
      answer:
        "Engagements vary widely based on client budget, value at risk, timeline, and risk tolerance. We tailor our approach to meet your specific needs and objectives.",
    },
    {
      question: "Where do you provide services?",
      answer:
        "Our engagements occur all over North America and Europe. We work with clients globally to address their security and data protection needs.",
    },
    {
      question: "What SaaS products do you work with?",
      answer:
        "We are vendor agnostic, but do have some partnerships that clients may consider. Our recommendations are always based on what best fits your specific requirements.",
    },
    {
      question: "How do you handle potential conflicts of interest?",
      answer:
        "We will disclose all conflicts before any engagement is initiated. Transparency is a core value at LeastTrust, and we ensure all potential conflicts are addressed upfront.",
    },
  ]

  return (
    <>
      {/* Floating FAQ Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Open FAQ"
      >
        <span className="font-bold">FAQ</span>
      </button>

      {/* FAQ Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="faq-title"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 id="faq-title" className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close FAQ"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="border-t p-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
