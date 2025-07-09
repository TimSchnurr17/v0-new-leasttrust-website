"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, TrendingUp, Users, CheckCircle, Target, Lightbulb } from "lucide-react"

interface UseCase {
  id: number
  title: string
  subtitle: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  badge: string
  scenario: string
  challenge: string
  solution: string
  outcomes: string[]
}

const UseCasesContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const useCases: UseCase[] = [
    {
      id: 1,
      title: "CISO & Risk Officer",
      subtitle: "Augmenting Cybersecurity Programs",
      icon: Shield,
      badge: "Financial Services",
      scenario:
        "A Chief Information Security Officer and Risk Officer at a mid-sized financial institution seek to enhance their existing cybersecurity framework with specialized insider threat controls.",
      challenge:
        "While their organization has robust external threat defenses, they recognize that 58% of financial institutions experienced insider-related incidents in the past 24 months, with privileged credential abuse representing the highest risk vector (37% of cases).",
      solution:
        "The engagement begins with a comprehensive assessment including governance, procedures, employee contracts, and the review of existing security tools (SIEM, UEBA, DLP, IAM) to identify gaps in insider threat detection. The LeastTrust ControlSet integrates with current infrastructure while adding behavioral analytics, real-time interventions, and forensic capture.",
      outcomes: [
        "Formalized insider risk committee, reporting, and metrics",
        "Enhanced employee contract language and exit procedures",
        "Reduced mean time to detect insider threats through detection enrichment",
        "Seamless integration with existing security stack (Splunk, QRadar, CrowdStrike)",
        "Litigation-ready evidence packages with proper chain of custody",
        "Measurable reduction in data exfiltration risk through hardening controls",
        "Enhanced detection capabilities through AI-driven risk scoring",
      ],
    },
    {
      id: 2,
      title: "Venture Capital Firm",
      subtitle: "Scalable Portfolio Protection",
      icon: TrendingUp,
      badge: "Investment & Growth",
      scenario:
        "A venture capital firm managing 50+ portfolio companies seeks to implement standardized insider threat controls internally while creating a deployable framework for their investments.",
      challenge:
        "Portfolio companies often lack mature data protection programs, creating vulnerability to IP theft during critical growth phases or co-founder exits. The VC needs a scalable solution that can be rapidly deployed across diverse company sizes and industries.",
      solution:
        "The custom control set provides a modular, cloud-based framework that starts with the VC's internal operations as a proof of concept. Once validated, the same controls, policies, and governance structures are packaged as a standardized offering for portfolio companies.",
      outcomes: [
        "Standardized insider risk framework deployable across entire portfolio",
        "Reduced due diligence risk through consistent security posture & reporting",
        "Protection of valuable IP and trade secrets during high-turnover growth phases",
        "Demonstrable security maturity that attracts future investment rounds",
        "Centralized governance view across all portfolio companies",
      ],
    },
    {
      id: 3,
      title: "Enterprise HR Department",
      subtitle: "Culture & Awareness Transformation",
      icon: Users,
      badge: "Enterprise Culture",
      scenario:
        "The HR leadership at a large corporation (10,000+ employees) recognizes that employee awareness and culture are critical to preventing insider threats, particularly negligent data handling.",
      challenge:
        "Traditional security training has low engagement rates and fails to address sensitive data handling. The organization needs to shift from punitive approaches to creating a culture of data stewardship while maintaining employee satisfaction.",
      solution:
        "The platform emphasizes proactive education, visible deterrents, and positive reinforcement. Implementation includes role-based training modules, real-time coaching through managed browser warnings and document watermarks, and gamification of security behaviors.",
      outcomes: [
        "Measurable increase in employee incident reporting",
        "Positive culture shift through innovation awards and data stewardship recognition",
        "Reduced insider incidents through real-time interventions",
        "Integration with performance management systems to incentivize engagement",
        "Anonymous reporting channels that increase whistleblowing",
        "Employee sentiment & empowerment despite increased security measures",
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`use-cases-content-section ${isIntersecting ? "use-cases-content-section--visible" : ""}`}
    >
      <div className="use-cases-content-section__container">
        <div className="use-cases-content-section__grid">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <div
                key={useCase.id}
                className={`use-case-card ${isIntersecting ? "use-case-card--visible" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="use-case-card__header">
                  <div className="use-case-card__header-content">
                    <div className="use-case-card__icon-container">
                      <IconComponent size={32} className="use-case-card__icon" />
                    </div>
                    <div className="use-case-card__title-container">
                      <h3 className="use-case-card__title">{useCase.title}</h3>
                      <p className="use-case-card__subtitle">{useCase.subtitle}</p>
                    </div>
                  </div>
                  <div className="use-case-card__badge">{useCase.badge}</div>
                </div>

                <div className="use-case-card__content">
                  <div className="use-case-card__left-column">
                    {/* Scenario */}
                    <div className="use-case-section">
                      <div className="use-case-section__header">
                        <Target size={20} className="use-case-section__icon use-case-section__icon--scenario" />
                        <h4 className="use-case-section__title">Scenario</h4>
                      </div>
                      <p className="use-case-section__text">{useCase.scenario}</p>
                    </div>

                    {/* Challenge */}
                    <div className="use-case-section">
                      <div className="use-case-section__header">
                        <Shield size={20} className="use-case-section__icon use-case-section__icon--challenge" />
                        <h4 className="use-case-section__title">Challenge</h4>
                      </div>
                      <p className="use-case-section__text">{useCase.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="use-case-section">
                      <div className="use-case-section__header">
                        <Lightbulb size={20} className="use-case-section__icon use-case-section__icon--solution" />
                        <h4 className="use-case-section__title">Solution Approach</h4>
                      </div>
                      <p className="use-case-section__text">{useCase.solution}</p>
                    </div>
                  </div>

                  {/* Right Column - Key Outcomes */}
                  <div className="use-case-card__right-column">
                    <div className="use-case-section">
                      <div className="use-case-section__header">
                        <CheckCircle size={20} className="use-case-section__icon use-case-section__icon--outcomes" />
                        <h4 className="use-case-section__title">Key Outcomes</h4>
                      </div>
                      <ul className="use-case-outcomes">
                        {useCase.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="use-case-outcomes__item">
                            <div className="use-case-outcomes__bullet"></div>
                            <span className="use-case-outcomes__text">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UseCasesContent
