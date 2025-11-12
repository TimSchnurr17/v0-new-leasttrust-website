"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Scale, Shield, FileCheck, TrendingUp } from "lucide-react"
import Link from "next/link"

interface Persona {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  link: string
  linkText: string
}

const PersonaEntryPoints: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const personas: Persona[] = [
    {
      icon: <Scale size={48} />,
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
    },
    {
      icon: <Shield size={48} />,
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
    },
    {
      icon: <FileCheck size={48} />,
      title: "Internal Audit (3rd Line of Defense)",
      description: "Understand the difference makers in insider threat and validate fiduciary duty",
      benefits: [
        "Advocate, expose, or validate that the company takes fiduciary duty seriously",
        "Comprehensive assessment of cross-department insider threat controls",
        "Deep resources and expertise to evaluate program maturity",
        "Independent validation of protection measures and gaps",
      ],
      link: "/insider-platform",
      linkText: "Assessment Resources",
    },
    {
      icon: <TrendingUp size={48} />,
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
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="personas"
      className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}
    >
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Who We Serve</h2>
        <p className="value-prop-section__subtitle">
          Specialized insider threat and proprietary data protection for decision-makers
        </p>

        <div
          className="value-prop-section__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "100%"
          }}
        >
          {personas.map((persona, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon">{persona.icon}</div>
                <h3 className="service-card__title">{persona.title}</h3>
                <p className="service-card__text" style={{ marginBottom: "1rem", fontWeight: 500 }}>
                  {persona.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", textAlign: "left" }}>
                  {persona.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#2563eb",
                          borderRadius: "50%",
                          marginTop: "0.375rem",
                          marginRight: "0.75rem",
                          flexShrink: 0,
                        }}
                      ></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={persona.link} className="btn btn--primary btn--small">
                  {persona.linkText}
                  <span className="btn__icon ml-2">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonaEntryPoints
