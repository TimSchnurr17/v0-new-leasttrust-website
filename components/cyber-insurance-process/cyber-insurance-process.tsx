"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Search, BarChart, Settings, FileText, Handshake, TrendingUp } from "lucide-react"

interface ProcessStep {
  icon: React.ReactNode
  title: string
  description: string
  items: string[]
}

const CyberInsuranceProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const processSteps: ProcessStep[] = [
    {
      icon: <Search size={40} />,
      title: "Business Impact Assessment",
      description: "Identify and quantify the risks that matter most to your specific business operations.",
      items: [
        "Analyze critical business processes and dependencies",
        "Quantify potential financial impact of cyber incidents",
        "Identify key assets and data that drive business value",
        "Assess current risk exposure and vulnerabilities",
      ],
    },
    {
      icon: <BarChart size={40} />,
      title: "Risk Prioritization",
      description: "Focus resources on the risks that pose the greatest threat to your business continuity.",
      items: [
        "Rank risks by business impact and likelihood",
        "Identify quick wins and high-impact improvements",
        "Develop risk tolerance thresholds aligned with business goals",
        "Create a risk register tailored to your industry",
      ],
    },
    {
      icon: <Settings size={40} />,
      title: "Tailored Control Implementation",
      description: "Deploy security controls that match your business needs and risk profile.",
      items: [
        "Select controls based on business impact, not compliance checklists",
        "Implement cost-effective solutions with measurable ROI",
        "Ensure controls integrate with existing business processes",
        "Focus on controls that insurance underwriters value most",
      ],
    },
    {
      icon: <FileText size={40} />,
      title: "System Security Plan Development",
      description: "Create documentation that tells a compelling story to insurance underwriters.",
      items: [
        "Document risk management approach and rationale",
        "Quantify risk reduction achieved through implemented controls",
        "Create clear metrics and KPIs for ongoing monitoring",
        "Develop incident response and business continuity plans",
      ],
    },
    {
      icon: <Handshake size={40} />,
      title: "Insurance Positioning",
      description: "Present your security posture in a way that resonates with insurance professionals.",
      items: [
        "Prepare compelling narratives for insurance applications",
        "Quantify risk reduction in terms underwriters understand",
        "Benchmark against industry standards and best practices",
        "Provide evidence of ongoing risk management commitment",
      ],
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Continuous Improvement",
      description: "Maintain and enhance your risk management program for ongoing insurance benefits.",
      items: [
        "Regular risk assessments and control effectiveness reviews",
        "Update documentation to reflect changing business needs",
        "Monitor industry trends and insurance market changes",
        "Prepare for annual insurance renewals and reviews",
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`cyber-insurance-process-section ${isIntersecting ? "cyber-insurance-process-section--visible" : ""}`}
    >
      <div className="cyber-insurance-process-section__container">
        <h2 className="cyber-insurance-process-section__title">Our Cyber Insurance Readiness Process</h2>
        <p className="cyber-insurance-process-section__subtitle">
          A systematic approach to business-focused risk management that delivers insurance results
        </p>

        <div className="cyber-insurance-process-section__steps">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`cyber-insurance-process-step ${isIntersecting ? "cyber-insurance-process-step--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="cyber-insurance-process-step__header">
                <div className="cyber-insurance-process-step__icon">{step.icon}</div>
                <h3 className="cyber-insurance-process-step__title">{step.title}</h3>
              </div>
              <p className="cyber-insurance-process-step__description">{step.description}</p>
              <ul className="cyber-insurance-process-step__items">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="cyber-insurance-process-step__item">
                    {item}
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

export default CyberInsuranceProcess
