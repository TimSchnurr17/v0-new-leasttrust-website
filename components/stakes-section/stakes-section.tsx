"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import {
  Users,
  FileText,
  AlertTriangle,
  DollarSign,
  Handshake,
  BarChart2,
  Shield,
  Building,
  ArrowRight,
} from "lucide-react"

interface StakeItem {
  icon: React.ElementType
  text: string
}

const StakesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const stakeItems: StakeItem[] = [
    {
      icon: Users,
      text: "Departing employees downloading customer lists and proprietary data",
    },
    {
      icon: FileText,
      text: "Trade secrets and IP stolen by insiders and shared with competitors",
    },
    {
      icon: AlertTriangle,
      text: "Contractors and third parties with unauthorized access to crown jewels",
    },
    {
      icon: DollarSign,
      text: "Inability to demonstrate 'reasonable measures' for IP protection",
    },
    {
      icon: Handshake,
      text: "M&A due diligence failures exposing weak insider threat programs",
    },
    {
      icon: BarChart2,
      text: "Strategic plans and product roadmaps leaked before launch",
    },
    {
      icon: Shield,
      text: "Loss of competitive advantage from proprietary methodology theft",
    },
    {
      icon: Building,
      text: "Reduced company valuation due to inadequate data protection",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="stakes"
      className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-20" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "rgba(239, 68, 68, 0.05)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.04)", filter: "blur(80px)" }}
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
          <span className="label-caps text-ruby-400 mb-4 block">The Threat Is Real</span>
          <h2 className="heading-1 text-ivory-50 mb-6">
            The Real Cost of Insider Threats
            <span className="text-ruby-400 italic"> to Proprietary Data</span>
          </h2>
          <p className="body-large text-slate-400">
            Insiders—malicious or negligent—target your most valuable unregulated data.
            What risks are you willing to take with your competitive advantage?
          </p>
        </div>

        {/* Stakes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className={`
                  relative p-6 lg:p-8 rounded-lg
                  bg-navy-900/50 backdrop-blur-sm
                  border border-ruby-500/20
                  transition-all duration-500 ease-out
                  hover:bg-navy-900/80 hover:border-ruby-500/40 hover:-translate-y-1
                  group
                  ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                {/* Glow effect on hover */}
                <div
                  className="
                    absolute -inset-px rounded-lg opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    bg-ruby-500/5
                  "
                  style={{ filter: "blur(20px)" }}
                />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-ruby-500/10 border border-ruby-500/20">
                    <IconComponent className="w-6 h-6 text-ruby-400" />
                  </div>
                </div>

                {/* Text */}
                <p className="relative z-10 text-slate-300 leading-relaxed text-sm lg:text-base">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`
            text-center mt-16
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Don't wait for an incident to expose the gaps in your insider threat program.
          </p>
          <a
            href="#contact"
            className="
              group inline-flex items-center gap-3 px-8 py-4
              bg-gradient-gold text-navy-900 font-medium
              rounded shadow-gold-glow
              transition-all duration-300 ease-out
              hover:shadow-gold-glow-lg hover:-translate-y-0.5
            "
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default StakesSection
