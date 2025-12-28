"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, Lock, Users, Database, FileText, BarChart2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceItem {
  title: string
  description: string
  icon: React.ElementType
  image: string
  link: string
}

const ValuePropSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const serviceItems: ServiceItem[] = [
    {
      title: "Insider Threat Maturity Assessment",
      description: "CMMI-based assessment to measure your current insider threat program maturity and identify gaps.",
      icon: BarChart2,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
      link: "/insider-platform",
    },
    {
      title: "Proprietary Data Protection",
      description: "Protect the 90% of your data that isn't regulated—trade secrets, IP, and competitive intelligence.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
      link: "/data-protection",
    },
    {
      title: "Insider Threat Programs",
      description: "Build mature programs with the Four Pillars: Train, Deter, Detect, and Enforce protection.",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop",
      link: "/insider-threat",
    },
    {
      title: "IP Strategy & Legal Defensibility",
      description: "Establish 'reasonable measures' for trade secret protection and support IP litigation.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1470&auto=format&fit=crop",
      link: "/insider-threat",
    },
    {
      title: "Third-Party Risk Management",
      description: "Extend insider threat controls to contractors, vendors, and M&A due diligence scenarios.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
      link: "/data-protection",
    },
    {
      title: "Insider Threat Platform",
      description: "Technology platform to assess, build, monitor, and operate your insider threat program.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1476&auto=format&fit=crop",
      link: "/insider-platform",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 bg-ivory-100 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-40" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.04)", filter: "blur(100px)" }}
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
          <span className="label-caps text-gold-500 mb-4 block">Our Services</span>
          <h2 className="heading-1 text-navy-900 mb-6">
            Insider Threat &
            <span className="text-gold-500 italic"> Proprietary Data Protection</span>
          </h2>
          <p className="body-large text-slate-600">
            Mature your insider threat program to protect trade secrets, IP, and the
            unregulated data that drives your competitive advantage.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.title}
                href={item.link}
                className={`
                  group relative rounded-lg overflow-hidden
                  bg-white
                  border border-slate-200/60
                  shadow-premium-sm
                  transition-all duration-500 ease-out
                  hover:shadow-premium-lg hover:-translate-y-1 hover:border-slate-300/80
                  ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex p-3 rounded-lg bg-gold-400/20 backdrop-blur-sm border border-gold-400/30">
                      <IconComponent className="w-6 h-6 text-gold-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Learn more link */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuePropSection
