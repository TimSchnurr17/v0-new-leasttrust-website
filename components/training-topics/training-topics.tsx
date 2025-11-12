"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CheckCircle } from "lucide-react"

const TrainingTopics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const topicItems = [
    {
      title: "IP Awareness: Recognizing Your Proprietary Data",
      description:
        "Train employees to identify trade secrets, proprietary methodologies, customer intelligence, and strategic data—the 90% that drives your business value but isn't regulated.",
    },
    {
      title: "Insider Threat Indicators & Early Warning Signs",
      description:
        "Recognize behavioral indicators of insider threats: departing employees, financial stress, policy violations, and unusual data access patterns. Know when and how to report concerns.",
    },
    {
      title: "Data Classification & Handling Procedures",
      description:
        "How to properly classify, label, store, share, and dispose of proprietary data. Understand acceptable use policies and need-to-know principles for trade secrets.",
    },
    {
      title: "Third-Party Risk: Contractors, Vendors, & Partners",
      description:
        "Protecting proprietary data when working with external parties. NDA awareness, access controls, and managing insider risk beyond your walls.",
    },
    {
      title: "Legal Consequences: Trade Secret Theft & IP Litigation",
      description:
        "Understand the Economic Espionage Act, DTSA, and consequences of IP theft. How your actions support legal defensibility and 'reasonable measures' for trade secret protection.",
    },
    {
      title: "Role-Based IP Protection Training",
      description:
        "Customized training for specific roles: executives (governance), engineers (trade secrets), sales (customer data), HR (departing employees), legal (IP enforcement).",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">IP Awareness & Insider Threat Training Topics</h2>
        <p className="value-prop-section__subtitle">
          Specialized training focused on protecting proprietary data, recognizing insider threats, and building a security-conscious culture around your crown jewels
        </p>
        <div className="value-prop-section__grid">
          {topicItems.map((item, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <CheckCircle size={24} style={{ color: "#265e72" }} />
                  <h3 className="service-card__title">{item.title}</h3>
                </div>
                <p className="service-card__text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Need a Custom Topic?</h3>
          <p style={{ marginBottom: "2rem" }}>
            We can develop tailored training content to address your organization's specific security challenges and
            objectives.
          </p>
          <a href="#contact" className="btn btn--primary">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrainingTopics
