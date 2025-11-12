"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { GraduationCap, ShieldAlert, Eye, Gavel } from "lucide-react"

interface Pillar {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  color: string
}

const FourPillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const pillars: Pillar[] = [
    {
      icon: <GraduationCap size={48} />,
      title: "Train",
      description: "Educate employees on IP protection and acceptable use",
      details: [
        "IP awareness and data classification training",
        "Insider threat indicators recognition",
        "Acceptable use policies and procedures",
        "Role-based training programs",
      ],
      color: "#10b981", // green
    },
    {
      icon: <ShieldAlert size={48} />,
      title: "Deter",
      description: "Implement controls that discourage malicious behavior",
      details: [
        "Access controls and least privilege",
        "Monitoring and audit logging",
        "Clear policies with consequences",
        "NDA enforcement and separation of duties",
      ],
      color: "#f59e0b", // amber
    },
    {
      icon: <Eye size={48} />,
      title: "Detect",
      description: "Identify insider threats early through monitoring and analytics",
      details: [
        "Behavioral analytics and anomaly detection",
        "Early warning indicators and alerts",
        "Data exfiltration monitoring",
        "Continuous risk assessment",
      ],
      color: "#3b82f6", // blue
    },
    {
      icon: <Gavel size={48} />,
      title: "Enforce",
      description: "Respond effectively when threats materialize",
      details: [
        "Incident response procedures",
        "Forensic readiness and documentation",
        "IP rights enforcement and legal action",
        "Post-incident analysis and improvement",
      ],
      color: "#dc2626", // red
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="four-pillars"
      className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">The Four Pillars of Insider Threat Protection</h2>
        <p className="value-prop-section__subtitle">
          A complete lifecycle approach to protecting your proprietary data and crown jewels
        </p>

        {/* Arrow flow visualization */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 0 3rem 0",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {pillars.map((pillar, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1.5rem",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  border: `3px solid ${pillar.color}`,
                  minWidth: "180px",
                }}
              >
                <div style={{ color: pillar.color, marginBottom: "0.5rem" }}>{pillar.icon}</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: pillar.color, margin: 0 }}>
                  {pillar.title}
                </h3>
              </div>
              {index < pillars.length - 1 && (
                <svg width="40" height="40" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path
                    fill="#6b7280"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Detailed cards */}
        <div
          className="value-prop-section__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "100%"
          }}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon" style={{ color: pillar.color }}>
                  {pillar.icon}
                </div>
                <h3 className="service-card__title" style={{ color: pillar.color }}>
                  {pillar.title}
                </h3>
                <p className="service-card__text" style={{ marginBottom: "1rem", fontWeight: 500 }}>
                  {pillar.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
                  {pillar.details.map((detail, idx) => (
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
                          backgroundColor: pillar.color,
                          borderRadius: "50%",
                          marginTop: "0.375rem",
                          marginRight: "0.75rem",
                          flexShrink: 0,
                        }}
                      ></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            border: "2px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
            Why All Four Pillars Matter
          </h3>
          <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Most vendors focus only on detection technology. But effective insider threat protection requires a
            complete program: training employees to recognize risks, deterring malicious behavior through controls,
            detecting anomalies early, and enforcing consequences when incidents occur. Our CMMI-based approach helps
            you mature across all four pillars—not just deploy more tools.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FourPillarsSection
