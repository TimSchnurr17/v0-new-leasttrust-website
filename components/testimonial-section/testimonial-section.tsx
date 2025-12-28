"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  position: string
  company?: string
}

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonials: Testimonial[] = [
    {
      quote:
        "The team at LeastTrust provided us with a comprehensive security assessment that revealed critical gaps we weren't aware of. Their remediation plan was practical, right-sized, and effective.",
      author: "Jennifer Willans",
      position: "VP of Operations",
      company: "HealthBefore Partner",
    },
    {
      quote:
        "Working with LeastTrust transformed our approach and culture to data security. Their tailored solutions and ongoing support have been instrumental in protecting our sensitive information.",
      author: "Robert Garcia",
      position: "CEO",
      company: "Innovating Disciplines",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-32 bg-ivory-50 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.03)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div
          className={`
            text-center max-w-3xl mx-auto mb-16
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="label-caps text-gold-500 mb-4 block">Client Success</span>
          <h2 className="heading-1 text-navy-900 mb-6">
            What Our
            <span className="text-gold-500 italic"> Clients Say</span>
          </h2>
          <p className="body-large text-slate-600">
            Trusted by organizations committed to protecting their most valuable assets.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                relative p-8 lg:p-10 rounded-lg
                bg-white
                border border-slate-200/60
                shadow-premium-md
                transition-all duration-700 ease-out
                hover:shadow-premium-lg
                ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Decorative accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                style={{ background: "linear-gradient(to right, #d4a853, transparent)" }}
              />

              {/* Quote icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-full bg-gold-400/10 border border-gold-400/20">
                  <Quote className="w-8 h-8 text-gold-500" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-xl lg:text-2xl text-navy-900 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Author avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-lg font-semibold">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                {/* Author details */}
                <div>
                  <cite className="not-italic font-semibold text-navy-900 block">
                    {testimonial.author}
                  </cite>
                  <p className="text-slate-600 text-sm">
                    {testimonial.position}
                    {testimonial.company && (
                      <span className="text-slate-400"> | {testimonial.company}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`
            mt-16 text-center
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="label-caps text-slate-500 mb-6">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center">
            {/* Trust badge placeholders */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ivory-200 border border-slate-200 flex items-center justify-center">
                <span className="text-navy-600 font-serif text-sm font-semibold">CMMI</span>
              </div>
              <span className="text-sm text-slate-500">Maturity<br />Framework</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ivory-200 border border-slate-200 flex items-center justify-center">
                <span className="text-navy-600 font-serif text-sm font-semibold">DTSA</span>
              </div>
              <span className="text-sm text-slate-500">Legal<br />Defensibility</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ivory-200 border border-slate-200 flex items-center justify-center">
                <span className="text-navy-600 font-serif text-sm font-semibold">IP</span>
              </div>
              <span className="text-sm text-slate-500">Trade Secret<br />Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
