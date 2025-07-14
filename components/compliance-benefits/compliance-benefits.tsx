"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { DollarSign, Users, FileText, Award, Building } from "lucide-react"

interface BenefitItem {
  icon: React.ReactNode
  title: string
  description: string
}

const ComplianceBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const benefits: BenefitItem[] = [
    {
      icon: <DollarSign size={48} />,
      title: "Favorable Insurance Rates",
      description:
        "Demonstrate your security posture to insurers and qualify for better cyber insurance premiums and coverage terms.",
    },
    {
      icon: <Users size={48} />,
      title: "Customer Trust",
      description:
        "Meet customer due diligence requirements and build trust by proving your commitment to data security and privacy.",
    },
    {
      icon: <FileText size={48} />,
      title: "Regulatory Compliance",
      description:
        "Stay ahead of regulatory requirements and avoid costly penalties by maintaining proper security documentation.",
    },
    {
      icon: <Award size={48} />,
      title: "Competitive Advantage",
      description:
        "Stand out from competitors by achieving recognized security certifications and standards compliance.",
    },
    {
      icon: <Building size={48} />,
      title: "Investment Attraction",
      description: "Enhance your company's valuation and attract investors by demonstrating mature security practices.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">The Business Value of Compliance</h2>
        <p className="value-prop-section__subtitle">
          Beyond security, SOC2 compliance and cyber insurance readiness deliver tangible business benefits
        </p>

        <div className="value-prop-section__grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon">{benefit.icon}</div>
                <h3 className="service-card__title">{benefit.title}</h3>
                <p className="service-card__text">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComplianceBenefits
