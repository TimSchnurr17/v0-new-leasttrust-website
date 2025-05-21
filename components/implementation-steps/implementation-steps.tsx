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
      icon: <CheckCircle size={40} />,
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
      icon: <FileText size={40} />,
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
      icon: <Users size={40} />,
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
      icon: <Database size={40} />,
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
      icon: <BarChart2 size={40} />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="implementation"
      className={`implementation-steps-section ${isIntersecting ? "implementation-steps-section--visible" : ""}`}
    >
      <div className="implementation-steps-section__container">
        <h2 className="implementation-steps-section__title">Implementation Roadmap</h2>
        <p className="implementation-steps-section__subtitle">
          A systematic approach to implementing data-centric security in your organization
        </p>

        <div className="implementation-steps-section__steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`implementation-step ${isIntersecting ? "implementation-step--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="implementation-step__header">
                <div className="implementation-step__number">{step.number}</div>
                <div className="implementation-step__icon">{step.icon}</div>
              </div>
              <div className="implementation-step__content">
                <h3 className="implementation-step__title">{step.title}</h3>
                <p className="implementation-step__description">{step.description}</p>
                <ul className="implementation-step__points">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="implementation-step__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="implementation-steps-section__download">
          <h3 className="implementation-steps-section__download-title">Want to learn more?</h3>
          <p className="implementation-steps-section__download-text">
            Download our comprehensive guide on AI readiness and data-centric security.
          </p>
          <a
            href="/downloads/cybersecurity-ai-readiness.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary implementation-steps-section__download-button"
          >
            Download Presentation
          </a>
        </div>
      </div>
    </section>
  )
}

export default ImplementationSteps
