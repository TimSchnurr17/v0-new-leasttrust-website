"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { GraduationCap, ShieldAlert, Eye, Gavel, ChevronRight } from "lucide-react"

interface Pillar {
  icon: React.ElementType
  title: string
  description: string
  details: string[]
  colorClass: string
  bgClass: string
  borderClass: string
}

const FourPillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const pillars: Pillar[] = [
    {
      icon: GraduationCap,
      title: "Train",
      description: "Educate and empower your workforce",
      details: [
        "IP awareness and data classification training",
        "Insider threat indicators recognition",
        "Acceptable use policies and procedures",
        "Role-based training programs",
      ],
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/30",
    },
    {
      icon: ShieldAlert,
      title: "Deter",
      description: "Implement preventive controls",
      details: [
        "Access controls and least privilege",
        "Monitoring and audit logging",
        "Clear policies with consequences",
        "NDA enforcement and separation of duties",
      ],
      colorClass: "text-amber-400",
      bgClass: "bg-amber-500/10",
      borderClass: "border-amber-500/30",
    },
    {
      icon: Eye,
      title: "Detect",
      description: "Identify threats early",
      details: [
        "Behavioral analytics and anomaly detection",
        "Early warning indicators and alerts",
        "Data exfiltration monitoring",
        "Continuous risk assessment",
      ],
      colorClass: "text-sapphire-400",
      bgClass: "bg-sapphire-500/10",
      borderClass: "border-sapphire-500/30",
    },
    {
      icon: Gavel,
      title: "Enforce",
      description: "Respond and remediate effectively",
      details: [
        "Incident response procedures",
        "Forensic readiness and documentation",
        "IP rights enforcement and legal action",
        "Post-incident analysis and improvement",
      ],
      colorClass: "text-ruby-400",
      bgClass: "bg-ruby-500/10",
      borderClass: "border-ruby-500/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="four-pillars"
      className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-20" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "rgba(59, 130, 246, 0.08)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.05)", filter: "blur(80px)" }}
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
          <span className="label-caps text-gold-400 mb-4 block">Our Methodology</span>
          <h2 className="heading-1 text-ivory-50 mb-6">
            The Four Pillars of
            <span className="text-gold-400 italic"> Insider Threat Protection</span>
          </h2>
          <p className="body-large text-slate-400">
            A complete lifecycle approach that goes beyond technology to build
            mature, legally defensible protection programs.
          </p>
        </div>

        {/* Horizontal flow visualization */}
        <div
          className={`
            flex items-center justify-center gap-3 lg:gap-4 mb-16 flex-wrap lg:flex-nowrap
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "200ms" }}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <React.Fragment key={pillar.title}>
                {/* Pillar node */}
                <div
                  className={`
                    relative flex flex-col items-center p-6 lg:p-8
                    bg-navy-800/50 backdrop-blur-sm
                    border ${pillar.borderClass}
                    rounded min-w-[160px] lg:min-w-[200px]
                    transition-all duration-500 ease-out
                    hover:bg-navy-800 hover:scale-105
                    group cursor-default
                  `}
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`
                      absolute -inset-px rounded opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      ${pillar.bgClass}
                    `}
                    style={{ filter: "blur(20px)" }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <IconComponent className={`w-10 h-10 lg:w-12 lg:h-12 ${pillar.colorClass} mb-3`} />
                    <h3 className={`font-serif text-2xl lg:text-3xl font-semibold ${pillar.colorClass}`}>
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < pillars.length - 1 && (
                  <div className="hidden lg:flex items-center px-1">
                    <div className="w-8 h-px bg-gradient-to-r from-slate-600 to-slate-700" />
                    <ChevronRight className="w-5 h-5 text-slate-600 -ml-1" />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Detailed cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`
                  relative p-8 rounded
                  bg-gradient-card-dark
                  border border-ivory-100/10
                  transition-all duration-500 ease-out
                  hover:border-ivory-100/20 hover:-translate-y-1
                  group
                  ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Top accent line on hover */}
                <div
                  className={`
                    absolute top-0 left-0 right-0 h-1 rounded-t
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                    ${pillar.bgClass.replace("/10", "")}
                  `}
                  style={{ background: `linear-gradient(to right, ${pillar.colorClass.includes("emerald") ? "#10b981" : pillar.colorClass.includes("amber") ? "#f59e0b" : pillar.colorClass.includes("sapphire") ? "#3b82f6" : "#ef4444"}, transparent)` }}
                />

                {/* Icon with glow */}
                <div
                  className={`
                    inline-flex p-4 mb-6 rounded
                    ${pillar.bgClass}
                    border ${pillar.borderClass}
                  `}
                >
                  <IconComponent className={`w-8 h-8 ${pillar.colorClass}`} />
                </div>

                {/* Title */}
                <h3 className={`font-serif text-2xl font-semibold ${pillar.colorClass} mb-3`}>
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-3">
                  {pillar.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className={`
                          w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                          ${pillar.colorClass.replace("text-", "bg-")}
                        `}
                      />
                      <span className="text-slate-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Why it matters section */}
        <div
          className={`
            mt-16 p-10 lg:p-12 rounded
            bg-navy-800/50 backdrop-blur-sm
            border border-gold-400/20
            text-center
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="font-serif text-2xl lg:text-3xl font-medium text-gold-400 mb-4">
            Why All Four Pillars Matter
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Most vendors focus only on detection technology. But effective insider threat protection requires a
            complete program: training employees to recognize risks, deterring malicious behavior through controls,
            detecting anomalies early, and enforcing consequences when incidents occur.{" "}
            <span className="text-ivory-100">
              Our CMMI-based approach helps you mature across all four pillars—not just deploy more tools.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FourPillarsSection
