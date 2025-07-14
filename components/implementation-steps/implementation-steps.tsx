"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CheckCircle, FileText, Users, Database, BarChart2 } from "lucide-react"

interface StepItem {
  number: number
  title: string
  description: string
  points: string[]
  icon: React.ReactNode
}

const ImplementationSteps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const steps: StepItem[] = [
    {
      number: 1,
      title: "Maintain Existing Defenses",
      description:
        "Don't retire historical defenses. They are considered necessary cyber hygiene and will continue to deter attacks and data leaks.",
      points: [
        "Continue using firewalls, antivirus, and other perimeter defenses",
        "Leverage existing telemetry and logging to complement data tracking",
        "Maintain access tracking and usage monitoring",
        "Enforce retention policies and audit trails",
      ],
      icon: <CheckCircle size={48} />,
    },
    {
      number: 2,
      title: "Classify Your Data",
      description:
        "Set a goal to classify as much data as economically viable. Start with regex-based privacy data, then move to sensitive and proprietary information.",
      points: [
        "Use SaaS tools to automate privacy data tagging (Microsoft Purview, Varonis, Netrix, Cavelo)",
        "Implement human tagging for non-repetitive patterns or sensitive data",
        "Develop policies and procedures to classify, watermark, and secure data",
        "Create a corporate culture that recognizes and self-classifies data",
      ],
      icon: <FileText size={48} />,
    },
    {
      number: 3,
      title: "Train Your Team",
      description:
        "Develop and educate corporate culture that recognizes and self-classifies data. Test, measure, audit, and iterate for improvement over time.",
      points: [
        "Implement comprehensive training programs for all employees",
        "Create incentives to drive intended behavior",
        "Establish clear guidelines for data handling",
        "Regularly test and assess employee knowledge and compliance",
      ],
      icon: <Users size={48} />,
    },
    {
      number: 4,
      title: "Leverage AI for Classification",
      description:
        "Eventually, manual tagging logs can be utilized for supervised learning and model training that will offload and assist the task.",
      points: [
        "Use context, edits, and tracking history as valuable datasets for machine learning",
        "Implement supervised machine learning for tagging",
        "Continuously improve classification models",
        "Automate routine classification tasks while maintaining human oversight",
      ],
      icon: <Database size={48} />,
    },
    {
      number: 5,
      title: "Measure and Improve",
      description:
        "Continuously measure, audit, and track classification progress to ensure effectiveness and identify areas for improvement.",
      points: [
        "Establish key performance indicators for data protection",
        "Regularly audit classification accuracy and coverage",
        "Track incidents and near-misses to identify patterns",
        "Continuously refine your approach based on results and emerging threats",
      ],
      icon: <BarChart2 size={48} />,
    },
  ]

  return (
    <section ref={sectionRef} className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}>
      <div className="process-section__container">
        <h2 className="process-section__title">Implementation Roadmap</h2>
        <p className="process-section__subtitle">
          A systematic approach to implementing data-centric security in your organization
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginBottom: "3rem" }}>
          {steps.map((step, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "#265e72",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  <div style={{ color: "#265e72" }}>{step.icon}</div>
                </div>
                <h3 className="service-card__title">{step.title}</h3>
                <p className="service-card__text">{step.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0 0" }}>
                  {step.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
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
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <h3 className="value-prop-section__title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Want to learn more?
          </h3>
          <p className="value-prop-section__subtitle" style={{ marginBottom: "2rem" }}>
            Download our comprehensive guide on AI readiness and data-centric security.
          </p>
          <a
            href="https://github.com/TimSchnurr17/AIreadiness/blob/4f6d88e82b1ca7ef259e68326fe6654c10ca4eb5/Maturing%20from%20perimeter%20defense%20to%20data-centric%20security.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Download Presentation
          </a>
        </div>
      </div>
    </section>
  )
}

export default ImplementationSteps
