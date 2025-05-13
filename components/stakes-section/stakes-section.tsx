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
      text: "Employees misappropriating your intellectual property",
    },
    {
      icon: "document",
      text: "Valuable trade secrets shared with competitors",
    },
    {
      icon: "alert",
      text: "Increased anxiety about insider threats",
    },
    {
      icon: "money",
      text: "Invested resources wasted on data breaches",
    },
    {
      icon: "handshake",
      text: "Loss of client trust and loyalty",
    },
    {
      icon: "chart",
      text: "Inability to competitively leverage your assets",
    },
    {
      icon: "shield",
      text: "Unforeseen regulatory penalties",
    },
    {
      icon: "building",
      text: "A tarnished reputation in the industry",
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
        <h2 className="stakes-section__title">The High Cost of Data Breaches</h2>
        <p className="stakes-section__subtitle">What risks are you willing to take with your proprietary data?</p>

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
