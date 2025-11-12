"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { StakeItem } from "@/types"
import { Users, FileText, AlertCircle, DollarSign, Handshake, BarChart2, Shield, Building } from "lucide-react"

const StakesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const stakeItems: StakeItem[] = [
    {
      icon: "users",
      text: "Departing employees downloading customer lists and proprietary data",
    },
    {
      icon: "document",
      text: "Trade secrets and IP stolen by insiders and shared with competitors",
    },
    {
      icon: "alert",
      text: "Contractors and third parties with unauthorized access to crown jewels",
    },
    {
      icon: "money",
      text: "Inability to demonstrate 'reasonable measures' for IP protection",
    },
    {
      icon: "handshake",
      text: "M&A due diligence failures exposing weak insider threat programs",
    },
    {
      icon: "chart",
      text: "Strategic plans and product roadmaps leaked before launch",
    },
    {
      icon: "shield",
      text: "Loss of competitive advantage from proprietary methodology theft",
    },
    {
      icon: "building",
      text: "Reduced company valuation due to inadequate data protection",
    },
  ]

  // Render appropriate icon based on icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users size={40} />
      case "document":
        return <FileText size={40} />
      case "alert":
        return <AlertCircle size={40} />
      case "money":
        return <DollarSign size={40} />
      case "handshake":
        return <Handshake size={40} />
      case "chart":
        return <BarChart2 size={40} />
      case "shield":
        return <Shield size={40} />
      case "building":
        return <Building size={40} />
      default:
        return <AlertCircle size={40} />
    }
  }

  return (
    <section
      ref={sectionRef}
      id="stakes"
      className={`stakes-section ${isIntersecting ? "stakes-section--visible" : ""}`}
    >
      <div className="stakes-section__container">
        <h2 className="stakes-section__title">The Real Cost of Insider Threats to Proprietary Data</h2>
        <p className="stakes-section__subtitle">
          Insiders—malicious or negligent—target your most valuable unregulated data.
          What risks are you willing to take with your competitive advantage?
        </p>

        <div className="stakes-section__grid">
          {stakeItems.map((item, index) => (
            <div key={index} className="stake-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stake-card__icon">{renderIcon(item.icon)}</div>
              <p className="stake-card__text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="stakes-section__cta">
          <a href="#contact" className="btn btn--primary">
            Schedule a Call
            <span className="btn__icon">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default StakesSection
