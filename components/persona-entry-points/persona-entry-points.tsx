"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Scale, Shield, FileCheck, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Persona {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  link: string
  linkText: string
  accentColor: string
  accentBg: string
  accentBorder: string
}

const PersonaEntryPoints: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const personas: Persona[] = [
    {
      icon: Scale,
      title: "General Counsels",
      description: "Establish legally defensible IP protection and trade secret programs",
      benefits: [
        "Demonstrate 'reasonable measures' for trade secret protection",
        "Legal defensibility for IP litigation (DTSA, Economic Espionage Act)",
        "M&A due diligence and third-party risk management",
        "Board reporting and governance frameworks",
      ],
      link: "/insider-threat",
      linkText: "IP Strategy & Enforcement",
      accentColor: "text-sapphire-400",
      accentBg: "bg-sapphire-500/10",
      accentBorder: "border-sapphire-500/30",
    },
    {
      icon: Shield,
      title: "CISOs & Security Leaders",
      description: "Build mature insider risk programs with detection and response capabilities",
      benefits: [
        "Insider threat maturity progression (CMMI framework)",
        "Behavioral analytics and early warning indicators",
        "Risk quantification and measurable outcomes",
        "Integration with SIEM, DLP, and IAM tools",
      ],
      link: "/insider-threat",
      linkText: "Insider Risk Programs",
      accentColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/30",
    },
    {
      icon: FileCheck,
      title: "Compliance Leaders",
      description: "Implement structured CMMI-based insider threat frameworks",
      benefits: [
        "CMMI maturity assessment and gap analysis",
        "Structured program development and policies",
        "Continuous improvement methodology",
        "Third-party and vendor risk management",
      ],
      link: "/insider-platform",
      linkText: "Maturity Assessment",
      accentColor: "text-amber-400",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/30",
    },
    {
      icon: TrendingUp,
      title: "VCs & Investors",
      description: "Protect portfolio investments with mature insider threat controls",
      benefits: [
        "Due diligence assessment of portfolio company security",
        "Increase valuation through mature risk programs",
        "Protect proprietary data and competitive advantages",
        "Reduce investment risk from insider threats",
      ],
      link: "/insider-platform",
      linkText: "Portfolio Protection",
      accentColor: "text-gold-400",
      accentBg: "bg-gold-400/10",
      accentBorder: "border-gold-400/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="personas"
      className="relative py-24 lg:py-32 bg-ivory-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.03)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "rgba(59, 130, 246, 0.03)", filter: "blur(80px)" }}
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
          <span className="label-caps text-gold-500 mb-4 block">Who We Serve</span>
          <h2 className="heading-1 text-navy-900 mb-6">
            Tailored Solutions for
            <span className="text-gold-500 italic"> Decision-Makers</span>
          </h2>
          <p className="body-large text-slate-600">
            Specialized insider threat and proprietary data protection for executives
            who need to protect their organization's most valuable assets.
          </p>
        </div>

        {/* Persona cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon
            return (
              <div
                key={persona.title}
                className={`
                  relative p-8 lg:p-10 rounded-lg
                  bg-white
                  border border-slate-200/60
                  shadow-premium-sm
                  transition-all duration-500 ease-out
                  hover:shadow-premium-lg hover:-translate-y-1 hover:border-slate-300/80
                  group
                  ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Top accent line */}
                <div
                  className={`
                    absolute top-0 left-0 right-0 h-1 rounded-t-lg
                    ${persona.accentBg.replace("/10", "")}
                    opacity-80
                  `}
                  style={{
                    background: persona.accentColor.includes("sapphire")
                      ? "linear-gradient(to right, #3b82f6, transparent)"
                      : persona.accentColor.includes("emerald")
                      ? "linear-gradient(to right, #10b981, transparent)"
                      : persona.accentColor.includes("amber")
                      ? "linear-gradient(to right, #f59e0b, transparent)"
                      : "linear-gradient(to right, #d4a853, transparent)"
                  }}
                />

                {/* Icon */}
                <div
                  className={`
                    inline-flex p-4 mb-6 rounded-lg
                    ${persona.accentBg}
                    border ${persona.accentBorder}
                  `}
                >
                  <IconComponent className={`w-8 h-8 ${persona.accentColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-navy-900 mb-3">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                  {persona.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-3 mb-8">
                  {persona.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div
                        className={`
                          w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                          ${persona.accentColor.replace("text-", "bg-")}
                        `}
                      />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={persona.link}
                  className={`
                    inline-flex items-center gap-2 text-sm font-medium
                    ${persona.accentColor}
                    transition-all duration-300
                    group-hover:gap-3
                  `}
                >
                  {persona.linkText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PersonaEntryPoints
