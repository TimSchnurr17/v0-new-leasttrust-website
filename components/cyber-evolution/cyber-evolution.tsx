"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, Users, Database } from "lucide-react"

interface EraItem {
  era: string
  period: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const CyberEvolution: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const eras: EraItem[] = [
    {
      era: "Past",
      period: "1990s-2000s",
      title: "Perimeter Defense",
      description: 'Traditional "Castle and Moat" approach focused on defending the network perimeter.',
      icon: <Shield size={48} />,
      features: [
        "Firewalls as primary defense",
        "Clear network boundaries",
        "Antivirus solutions",
        "Password-based authentication",
        "Treats all data the same inside the walls",
      ],
    },
    {
      era: "Present",
      period: "2010s",
      title: "Identity-Centric Security",
      description: 'Zero Trust Architecture where "Never trust, always verify" is the guiding principle.',
      icon: <Users size={48} />,
      features: [
        "Identity as the new perimeter",
        "Multi-factor authentication",
        "Least privilege access",
        "Microsegmentation",
        "Data governed by access (file, folder, or SQL field)",
      ],
    },
    {
      era: "Future",
      period: "2020s",
      title: "Data-Centric Security",
      description: "Data as the Control Point with context, classification, and governance at its core.",
      icon: <Database size={48} />,
      features: [
        "Data discovery & tagging",
        "Continuous context & classification",
        "AI-driven rule creation & alerting",
        "Data lineage tracking and logging",
        "Data governed by context (unstructured search and inference)",
      ],
    },
  ]

  return (
    <section ref={sectionRef} className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}>
      <div className="process-section__container">
        <h2 className="process-section__title">Evolving Cyber Strategy</h2>
        <p className="process-section__subtitle">The journey from perimeter defense to data-centric security</p>

        <div className="process-section__steps">
          {eras.map((era, index) => (
            <div key={index} className="process-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="process-card__image-container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "200px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <div style={{ color: "#265e72" }}>{era.icon}</div>
                </div>
                <div className="process-card__number">{index + 1}</div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      color: "#265e72",
                      backgroundColor: "#f0f9ff",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      marginRight: "0.5rem",
                    }}
                  >
                    {era.era}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>{era.period}</span>
                </div>
                <h3 className="process-card__title">{era.title}</h3>
                <p className="process-card__text">{era.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0 0" }}>
                  {era.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#4b5563",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#265e72",
                          borderRadius: "50%",
                          marginTop: "0.375rem",
                          marginRight: "0.75rem",
                          flexShrink: 0,
                        }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CyberEvolution
