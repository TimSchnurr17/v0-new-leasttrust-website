"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Target, TrendingUp, Shield, DollarSign } from "lucide-react"

const CyberInsuranceOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const features = [
    {
      icon: <Target size={48} />,
      title: "Business Impact Assessment",
      description: "Identify and quantify the real business risks that matter to your operations and bottom line.",
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Tailored Risk Management",
      description:
        "Implement controls that match your business needs rather than checking boxes for compliance frameworks.",
    },
    {
      icon: <Shield size={48} />,
      title: "Strategic Security Planning",
      description:
        "Develop system security plans that demonstrate measurable risk reduction to insurance underwriters.",
    },
    {
      icon: <DollarSign size={48} />,
      title: "Insurance Optimization",
      description: "Position your organization for better coverage terms and more favorable premium rates.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Business-Driven Cyber Insurance Strategy</h2>
        <p className="value-prop-section__subtitle">
          Unlike traditional compliance frameworks like NIST or SOC2, our Cyber Insurance Readiness service focuses on
          what matters most to your business: protecting your operations while securing the best possible insurance
          coverage and rates.
        </p>
        <p className="value-prop-section__subtitle">
          We conduct thorough business impact assessments and implement risk management strategies that are tailored to
          your specific industry, operations, and risk profile. Our approach positions your organization for favorable
          insurance underwriting by demonstrating real, measurable risk reduction.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                alt="Business risk assessment and analysis"
                width={400}
                height={225}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <div className="value-prop-section__grid">
                {features.map((feature, index) => (
                  <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="service-card__content">
                      <div className="service-card__icon">{feature.icon}</div>
                      <h3 className="service-card__title">{feature.title}</h3>
                      <p className="service-card__text">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberInsuranceOverview
