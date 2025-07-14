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
      title: "Innovation vs Cybersecurity",
      description:
        "Explore the balance between fostering innovation and maintaining robust security measures in your organization.",
    },
    {
      title: "AI: Walk, Crawl, Run",
      description:
        "A practical framework for implementing AI technologies while ensuring appropriate security controls at each stage.",
    },
    {
      title: "Insider Controls Change Management",
      description:
        "Strategies for implementing and managing insider threat controls while minimizing disruption to business operations.",
    },
    {
      title: "Achieving Tolerable Friction in a Cybersecurity Program",
      description:
        "Finding the right balance between security measures and user experience to ensure both protection and productivity.",
    },
    {
      title: "IP Strategies for Your Company",
      description:
        "Developing comprehensive intellectual property protection strategies tailored to your organization's specific needs.",
    },
    {
      title: "Building a Security-Conscious Culture",
      description:
        "Practical approaches to fostering a culture where security awareness is integrated into everyday operations.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Popular Training Topics</h2>
        <p className="value-prop-section__subtitle">
          Our expert-led sessions cover a wide range of relevant security topics to address your organization's needs
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
