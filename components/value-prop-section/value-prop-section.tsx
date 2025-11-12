"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ServiceItem } from "@/types"
import { Shield, Lock, Users, Database, FileText, BarChart2 } from "lucide-react"
import Image from "next/image"

const ValuePropSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const serviceItems: ServiceItem[] = [
    {
      title: "Insider Threat Maturity Assessment",
      description: "CMMI-based assessment to measure your current insider threat program maturity and identify gaps.",
      icon: "chart",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Proprietary Data Protection",
      description: "Protect the 90% of your data that isn't regulated—trade secrets, IP, and competitive intelligence.",
      icon: "shield",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Insider Threat Programs",
      description: "Build mature programs with the Four Pillars: Train, Deter, Detect, and Enforce protection.",
      icon: "lock",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop",
    },
    {
      title: "IP Strategy & Legal Defensibility",
      description: "Establish 'reasonable measures' for trade secret protection and support IP litigation.",
      icon: "file",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Third-Party Risk Management",
      description: "Extend insider threat controls to contractors, vendors, and M&A due diligence scenarios.",
      icon: "users",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Insider Threat Platform",
      description: "Technology platform to assess, build, monitor, and operate your insider threat program.",
      icon: "database",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1476&auto=format&fit=crop",
    },
  ]

  // Render appropriate icon based on icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield size={48} />
      case "lock":
        return <Lock size={48} />
      case "users":
        return <Users size={48} />
      case "database":
        return <Database size={48} />
      case "file":
        return <FileText size={48} />
      case "chart":
        return <BarChart2 size={48} />
      default:
        return <Shield size={48} />
    }
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}
    >
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Insider Threat & Proprietary Data Protection</h2>
        <p className="value-prop-section__subtitle">
          Mature your insider threat program to protect trade secrets, IP, and the unregulated data that drives your competitive advantage
        </p>

        <div className="value-prop-section__grid">
          {serviceItems.map((item, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__image-container">
                <Image
                  src={item.image || ""}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="service-card__image"
                />
              </div>
              <div className="service-card__content">
                <div className="service-card__icon">{renderIcon(item.icon)}</div>
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuePropSection
