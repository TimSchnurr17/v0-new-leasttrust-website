"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { DollarSign, Shield, TrendingDown, FileCheck, Award, Clock } from "lucide-react"

const InsuranceBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const benefits = [
    {
      icon: <DollarSign size={48} />,
      title: "Lower Premium Rates",
      description:
        "Demonstrate measurable risk reduction to secure more favorable premium pricing from insurance carriers.",
    },
    {
      icon: <Shield size={48} />,
      title: "Better Coverage Terms",
      description:
        "Qualify for enhanced coverage options and higher policy limits by showing effective risk management.",
    },
    {
      icon: <TrendingDown size={48} />,
      title: "Reduced Deductibles",
      description: "Lower your out-of-pocket costs with reduced deductibles based on your improved security posture.",
    },
    {
      icon: <FileCheck size={48} />,
      title: "Streamlined Underwriting",
      description: "Accelerate the insurance application process with well-documented risk management practices.",
    },
    {
      icon: <Award size={48} />,
      title: "Competitive Advantage",
      description:
        "Stand out in the insurance marketplace with a compelling risk management story that differentiates you.",
    },
    {
      icon: <Clock size={48} />,
      title: "Faster Claims Processing",
      description: "Expedite claims resolution with documented security controls and incident response procedures.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Insurance Benefits You Can Expect</h2>
        <p className="value-prop-section__subtitle">
          Our business-focused approach delivers tangible improvements to your insurance outcomes
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

export default InsuranceBenefits
