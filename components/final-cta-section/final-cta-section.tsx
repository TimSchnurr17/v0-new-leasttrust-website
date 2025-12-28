"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CalendarDays, Phone, ArrowRight } from "lucide-react"

const FinalCTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<"call" | "calendar">("call")

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-20" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.05)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div
          className={`
            text-center max-w-3xl mx-auto mb-12
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="label-caps text-gold-400 mb-4 block">Get Started</span>
          <h2 className="heading-1 text-ivory-50 mb-6">
            Ready to Protect Your
            <span className="text-gold-400 italic"> Crown Jewels?</span>
          </h2>
          <p className="body-large text-slate-400">
            Get in touch with our insider threat experts to discuss your specific needs
            and how we can help protect your proprietary data.
          </p>
        </div>

        {/* Contact card */}
        <div
          className={`
            max-w-2xl mx-auto
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bg-ivory-50 rounded-lg shadow-premium-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200">
              <button
                className={`
                  flex-1 py-4 px-6 text-center font-medium transition-all duration-300
                  ${activeTab === "call"
                    ? "bg-navy-900 text-ivory-50"
                    : "bg-ivory-100 text-slate-600 hover:bg-ivory-200"
                  }
                `}
                onClick={() => setActiveTab("call")}
              >
                <Phone className="w-5 h-5 inline-block mr-2 -mt-0.5" />
                Give us a Call
              </button>
              <button
                className={`
                  flex-1 py-4 px-6 text-center font-medium transition-all duration-300
                  ${activeTab === "calendar"
                    ? "bg-navy-900 text-ivory-50"
                    : "bg-ivory-100 text-slate-600 hover:bg-ivory-200"
                  }
                `}
                onClick={() => setActiveTab("calendar")}
              >
                <CalendarDays className="w-5 h-5 inline-block mr-2 -mt-0.5" />
                Schedule a Call
              </button>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              {activeTab === "call" ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gold-400/10 border border-gold-400/20">
                    <Phone className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                    Call Us Directly
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Speak with our insider threat experts immediately during business hours.
                  </p>
                  <a
                    href="tel:5517510010"
                    className="
                      inline-flex items-center gap-3 text-3xl font-serif font-semibold text-navy-900
                      hover:text-gold-500 transition-colors duration-300
                    "
                  >
                    <Phone className="w-7 h-7" />
                    551-751-0010
                  </a>
                  <p className="mt-6 text-sm text-slate-500">
                    Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gold-400/10 border border-gold-400/20">
                    <CalendarDays className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                    Schedule a Consultation
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Choose a convenient time for a call with our insider threat experts.
                  </p>
                  <a
                    href="https://calendar.app.google/53yGP58pPZiY8XEN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center gap-3 px-8 py-4
                      bg-gradient-gold text-navy-900 font-medium
                      rounded shadow-gold-glow
                      transition-all duration-300 ease-out
                      hover:shadow-gold-glow-lg hover:-translate-y-0.5
                    "
                  >
                    <CalendarDays className="w-5 h-5" />
                    Open Calendar
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <p className="mt-6 text-sm text-slate-500">
                    You'll be redirected to select a time that works for you.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional trust message */}
          <p
            className={`
              text-center text-sm text-slate-500 mt-8
              transition-all duration-700 ease-out
              ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: "400ms" }}
          >
            Consultations are complimentary and confidential. We'll assess your current
            insider threat posture and provide actionable recommendations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
