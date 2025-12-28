"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { TrendingUp, Shield, AlertTriangle } from "lucide-react"

interface ValueCard {
  icon: React.ElementType
  title: string
  description: string
  accentColor: string
  accentBg: string
  accentBorder: string
}

const IntangibleValueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const valueCards: ValueCard[] = [
    {
      icon: TrendingUp,
      title: "Uncapped Damages",
      description:
        "When employees join or create competitors with your data, damages aren't limited to breach notification costs. Lost market share, eroded pricing power, and stolen competitive advantage can destroy years of investment.",
      accentColor: "text-ruby-400",
      accentBg: "bg-ruby-500/10",
      accentBorder: "border-ruby-500/30",
    },
    {
      icon: AlertTriangle,
      title: "Why Cases Fail",
      description:
        "Top 3 reasons trade secret litigation fails: (1) Plaintiff couldn't identify what was stolen, (2) Failed to implement reasonable protection measures, (3) Never contracted legal obligations with employees. Don't wait until litigation to discover these gaps.",
      accentColor: "text-amber-400",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/30",
    },
    {
      icon: Shield,
      title: "Hidden Threat",
      description:
        "FBI and Verizon reports barely mention insider threats (less than 2% of incidents). Why? Organizations have zero incentive to disclose. There's no breach notification law, no ISAC, and no shared intelligence—making insider threat the invisible risk.",
      accentColor: "text-sapphire-400",
      accentBg: "bg-sapphire-500/10",
      accentBorder: "border-sapphire-500/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="intangible-value"
      className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-20" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.05)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "rgba(59, 130, 246, 0.04)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div
          className={`
            text-center max-w-4xl mx-auto mb-16
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="label-caps text-gold-400 mb-4 block">The Hidden Risk</span>
          <h2 className="heading-1 text-ivory-50 mb-6">
            90% of Your Company Value Is
            <span className="text-gold-400 italic"> Intangible—And Unregulated</span>
          </h2>
          <p className="body-large text-slate-400">
            Your balance sheet shows only 4% tangible assets. The other 90%+ consists of data: trade secrets,
            competitive intelligence, strategic plans, customer lists, proprietary processes, and IP.
            Employees routinely take this proprietary data to their next job—erasing your competitive advantage overnight.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.title}
                className={`
                  relative p-8 lg:p-10 rounded-lg
                  bg-navy-800/50 backdrop-blur-sm
                  border border-ivory-100/10
                  transition-all duration-500 ease-out
                  hover:bg-navy-800/70 hover:border-ivory-100/20 hover:-translate-y-1
                  group
                  ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute -inset-px rounded-lg opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    ${card.accentBg}
                  `}
                  style={{ filter: "blur(20px)" }}
                />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`
                      inline-flex p-4 rounded-lg
                      ${card.accentBg}
                      border ${card.accentBorder}
                    `}
                  >
                    <IconComponent className={`w-8 h-8 ${card.accentColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`relative z-10 font-serif text-2xl font-semibold ${card.accentColor} mb-4`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom stat callout */}
        <div
          className={`
            mt-16 p-8 lg:p-10 rounded-lg
            bg-gold-400/5 backdrop-blur-sm
            border border-gold-400/20
            text-center
            transition-all duration-700 ease-out
            ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
            <div>
              <span className="font-serif text-5xl lg:text-6xl font-bold text-gold-400">90%</span>
              <p className="text-slate-400 mt-2">Intangible Assets</p>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gold-400/30" />
            <div>
              <span className="font-serif text-5xl lg:text-6xl font-bold text-gold-400">&lt;2%</span>
              <p className="text-slate-400 mt-2">Reported in Security Studies</p>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gold-400/30" />
            <div>
              <span className="font-serif text-5xl lg:text-6xl font-bold text-gold-400">$0</span>
              <p className="text-slate-400 mt-2">Breach Notification Required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntangibleValueSection
