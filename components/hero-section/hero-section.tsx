"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Phone, ArrowRight } from "lucide-react"

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] bg-navy-900 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />

      {/* Mesh gradient overlay for depth */}
      <div className="absolute inset-0 bg-mesh" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-30" />

      {/* Floating decorative orbs */}
      <div
        className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full animate-float"
        style={{ background: "rgba(212, 168, 83, 0.08)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full animate-float-delayed"
        style={{ background: "rgba(59, 130, 246, 0.06)", filter: "blur(80px)" }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full animate-float"
        style={{ background: "rgba(212, 168, 83, 0.04)", filter: "blur(60px)", animationDelay: "-2s" }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-40 pb-24 lg:pt-48 lg:pb-32">
        {/* Eyebrow label */}
        <div
          className={`
            mb-6 transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="inline-block px-4 py-2 bg-gold-400/10 border border-gold-400/20 rounded-sm">
            <span className="label-caps text-gold-400">Insider Threat Advisory</span>
          </span>
        </div>

        {/* Main headline with serif elegance */}
        <h1
          className={`
            heading-display text-ivory-50 max-w-4xl mb-8
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "400ms" }}
        >
          Protect the 90% of Your Data
          <span className="block text-gold-400 italic mt-2">That Drives Everything</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`
            body-large text-slate-400 max-w-2xl mb-12
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "600ms" }}
        >
          Regulations cover about 10% of your data. The other 90%—trade secrets,
          IP, strategic plans, and competitive intelligence—is what insiders target most.
          We help you build mature programs to protect your crown jewels.
        </p>

        {/* CTA buttons */}
        <div
          className={`
            flex flex-wrap gap-4
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="#contact"
            className="
              group inline-flex items-center gap-3 px-8 py-4
              bg-gradient-gold text-navy-900 font-medium
              rounded-sm shadow-gold-glow
              transition-all duration-300 ease-out
              hover:shadow-gold-glow-lg hover:-translate-y-0.5
            "
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="tel:5517510010"
            className="
              inline-flex items-center gap-3 px-8 py-4
              border border-ivory-200/20 text-ivory-100 font-medium
              rounded-sm backdrop-blur-sm
              transition-all duration-300 ease-out
              hover:bg-ivory-50/5 hover:border-ivory-200/40
            "
          >
            <Phone className="w-5 h-5" />
            551-751-0010
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className={`
            mt-20 pt-12 border-t border-ivory-200/10
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="label-caps text-slate-500 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
            {/* Trust badges / stats */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy-800/50 border border-ivory-200/10 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-lg font-semibold">90%</span>
              </div>
              <span className="text-sm text-slate-400">Proprietary data<br />at risk</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy-800/50 border border-ivory-200/10 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-lg font-semibold">CMMI</span>
              </div>
              <span className="text-sm text-slate-400">Maturity<br />framework</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy-800/50 border border-ivory-200/10 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-lg font-semibold">4</span>
              </div>
              <span className="text-sm text-slate-400">Pillars of<br />protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  )
}

export default HeroSection
