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
  color: string
}

const InsiderThreatPhases: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const phases: PhaseItem[] = [
    {
      icon: <Search size={32} />,
      title: "Scoping",
      description:
        "Define the scope of your insider threat program, identifying critical assets and potential vulnerabilities.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Assessment",
      description:
        "Evaluate your current security posture, identify gaps, and determine the level of risk to your organization.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <PlaneTakeoff size={32} />,
      title: "Live Planning",
      description: "Develop a comprehensive strategy and roadmap for implementing your insider threat program.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Building size={32} />,
      title: "Governance",
      description:
        "Establish policies, procedures, and oversight mechanisms to ensure program effectiveness and compliance.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <PuzzlePiece size={32} />,
      title: "Integration",
      description:
        "Integrate your insider threat program with existing security systems, HR processes, and business operations.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <FileBarChart size={32} />,
      title: "Reporting",
      description:
        "Implement reporting mechanisms to track incidents, monitor program effectiveness, and inform stakeholders.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Metrics",
      description:
        "Establish key performance indicators to measure the success of your insider threat program and identify areas for improvement.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`insider-threat-phases-section ${isIntersecting ? "insider-threat-phases-section--visible" : ""}`}
    >
      <div className="insider-threat-phases-section__container">
        <h2 className="insider-threat-phases-section__title">Our Phased Engagement Approach</h2>
        <p className="insider-threat-phases-section__subtitle">
          LeastTrust implements insider threat programs through a structured, phased approach that ensures comprehensive
          protection while minimizing disruption to your business operations.
        </p>

        <div className="insider-threat-phases-section__infographic">
          <div className="insider-threat-phases-section__timeline">
            <div className="insider-threat-phases-section__timeline-line"></div>
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`insider-threat-phase ${isIntersecting ? "insider-threat-phase--visible" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`insider-threat-phase__icon-container ${phase.color}`}>
                  <div className="insider-threat-phase__icon">{phase.icon}</div>
                </div>
                <div className="insider-threat-phase__content">
                  <h3 className="insider-threat-phase__title">
                    Phase {index + 1}: {phase.title}
                  </h3>
                  <p className="insider-threat-phase__description">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatPhases
