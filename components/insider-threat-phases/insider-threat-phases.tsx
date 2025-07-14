"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import {
  Search,
  ClipboardCheck,
  PlaneTakeoff,
  Building,
  PuzzleIcon as PuzzlePiece,
  FileBarChart,
  BarChart3,
} from "lucide-react"

interface PhaseItem {
  icon: React.ReactNode
  title: string
  description: string
}

const InsiderThreatPhases: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const phases: PhaseItem[] = [
    {
      icon: <Search size={48} />,
      title: "Scoping",
      description:
        "Define the scope of your insider threat program, identifying critical assets and potential vulnerabilities.",
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: "Assessment",
      description:
        "Evaluate your current security posture, identify gaps, and determine the level of risk to your organization.",
    },
    {
      icon: <PlaneTakeoff size={48} />,
      title: "Live Planning",
      description: "Develop a comprehensive strategy and roadmap for implementing your insider threat program.",
    },
    {
      icon: <Building size={48} />,
      title: "Governance",
      description:
        "Establish policies, procedures, and oversight mechanisms to ensure program effectiveness and compliance.",
    },
    {
      icon: <PuzzlePiece size={48} />,
      title: "Integration",
      description:
        "Integrate your insider threat program with existing security systems, HR processes, and business operations.",
    },
    {
      icon: <FileBarChart size={48} />,
      title: "Reporting",
      description:
        "Implement reporting mechanisms to track incidents, monitor program effectiveness, and inform stakeholders.",
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Metrics",
      description:
        "Establish key performance indicators to measure the success of your insider threat program and identify areas for improvement.",
    },
  ]

  return (
    <section ref={sectionRef} className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}>
      <div className="process-section__container">
        <h2 className="process-section__title">Our Phased Engagement Approach</h2>
        <p className="process-section__subtitle">
          LeastTrust implements insider threat programs through a structured, phased approach that ensures comprehensive
          protection while minimizing disruption to your business operations.
        </p>

        <div className="process-section__steps">
          {phases.map((phase, index) => (
            <div key={index} className="process-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  <div style={{ color: "#265e72" }}>{phase.icon}</div>
                </div>
                <div className="process-card__number">{index + 1}</div>
              </div>
              <h3 className="process-card__title">{phase.title}</h3>
              <p className="process-card__text">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatPhases
