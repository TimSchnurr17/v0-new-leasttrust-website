"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CalendarDays, Phone } from "lucide-react"

const FinalCTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<"call" | "calendar">("call")

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`final-cta-section ${isIntersecting ? "final-cta-section--visible" : ""}`}
    >
      <div className="final-cta-section__container">
        <h2 className="final-cta-section__title">Ready to Secure Your Data?</h2>
        <p className="final-cta-section__subtitle">
          Get in touch with our security experts to discuss your specific needs and how we can help protect your
          valuable assets.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "call" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("call")}
            >
              Give us a Call
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "calendar" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("calendar")}
            >
              Schedule a Call
            </button>
          </div>

          <div className="p-6">
            {activeTab === "call" ? (
              <div className="text-center py-8">
                <div className="inline-flex justify-center items-center mb-6 p-4 bg-primary/10 rounded-full">
                  <Phone size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Call Us Directly</h3>
                <p className="text-gray-600 mb-6">Speak with our security experts immediately during business hours.</p>
                <a
                  href="tel:5517510010"
                  className="text-3xl font-bold text-primary hover:underline flex items-center justify-center"
                >
                  <Phone size={24} className="mr-2" />
                  551-751-0010
                </a>
                <p className="mt-6 text-sm text-gray-500">
                  Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex justify-center items-center mb-6 p-4 bg-primary/10 rounded-full">
                  <CalendarDays size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Schedule a Call</h3>
                <p className="text-gray-600 mb-6">Choose a convenient time for a call with our security experts.</p>
                <a
                  href="https://calendar.app.google/53yGP58pPZiY8XEN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary inline-flex items-center"
                >
                  <CalendarDays size={20} className="mr-2" />
                  Open Calendar
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  You'll be redirected to our scheduling page to select a time that works for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
