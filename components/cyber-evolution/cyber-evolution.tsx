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
    <section
      ref={sectionRef}
      className={`cyber-evolution-section ${isIntersecting ? "cyber-evolution-section--visible" : ""}`}
    >
      <div className="cyber-evolution-section__container">
        <h2 className="cyber-evolution-section__title">Evolving Cyber Strategy</h2>
        <p className="cyber-evolution-section__subtitle">The journey from perimeter defense to data-centric security</p>

        <div className="cyber-evolution-section__timeline">
          {eras.map((era, index) => (
            <div
              key={index}
              className={`era-card ${isIntersecting ? "era-card--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="era-card__header">
                <span className="era-card__era">{era.era}</span>
                <span className="era-card__period">{era.period}</span>
              </div>
              <div className="era-card__icon">{era.icon}</div>
              <h3 className="era-card__title">{era.title}</h3>
              <p className="era-card__description">{era.description}</p>
              <ul className="era-card__features">
                {era.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="era-card__feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CyberEvolution
