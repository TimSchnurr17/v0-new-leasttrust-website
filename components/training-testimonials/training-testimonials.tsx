"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Quote } from "lucide-react"

interface TestimonialItem {
  quote: string
  author: string
  position: string
  company: string
}

const TrainingTestimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonialItems: TestimonialItem[] = [
    {
      quote:
        "The cybersecurity awareness training provided by LeastTrust transformed how our team approaches security. The interactive format and real-world examples made complex concepts accessible to everyone.",
      author: "Michael Chen",
      position: "CTO",
      company: "TechInnovate Solutions",
    },
    {
      quote:
        "Their IP protection workshop gave us practical strategies we could implement immediately. The facilitators' Fortune 500 experience was evident in the quality and relevance of the content.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "Nexus Enterprises",
    },
    {
      quote:
        "The AI security brainstorming session helped us identify risks we hadn't considered and develop a comprehensive approach to securing our AI initiatives. Highly recommended for any organization implementing AI.",
      author: "David Rodriguez",
      position: "CISO",
      company: "DataFirst Analytics",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="training-testimonials"
      className="relative py-24 lg:py-32 bg-ivory-100 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-40" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.04)", filter: "blur(100px)" }}
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
          <span className="label-caps text-gold-500 mb-4 block">Training Feedback</span>
          <h2 className="heading-1 text-navy-900 mb-6">
            What Our
            <span className="text-gold-500 italic"> Clients Say</span>
          </h2>
          <p className="body-large text-slate-600">
            Hear from organizations that have benefited from our training programs
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-lg
                bg-white
                border border-slate-200/60
                shadow-premium-md
                transition-all duration-700 ease-out
                hover:shadow-premium-lg hover:-translate-y-1
                ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Decorative accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                style={{ background: "linear-gradient(to right, #d4a853, transparent)" }}
              />

              {/* Quote icon */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-full bg-gold-400/10 border border-gold-400/20">
                  <Quote className="w-6 h-6 text-gold-500" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-lg text-navy-900 leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* Author avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-serif text-sm font-semibold">
                    {item.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                {/* Author details */}
                <div>
                  <p className="font-semibold text-navy-900">{item.author}</p>
                  <p className="text-slate-600 text-sm">
                    {item.position}
                    <span className="text-slate-400"> | {item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingTestimonials
