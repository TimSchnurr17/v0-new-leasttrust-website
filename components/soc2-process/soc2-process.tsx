"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ClipboardList, FileSearch, Settings, UserCheck, ShieldCheck, BarChart } from "lucide-react"

interface ProcessStep {
  icon: React.ReactNode
  title: string
  description: string
  items: string[]
}

const SOC2Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const processSteps: ProcessStep[] = [
    {
      icon: <ClipboardList size={40} />,
      title: "Gap Assessment",
      description: "Evaluate your current security posture against SOC2 requirements and cyber insurance standards.",
      items: [
        "Review existing security policies and procedures",
        "Identify compliance gaps and vulnerabilities",
        "Assess current documentation and evidence collection",
        "Determine risk exposure and prioritize remediation efforts",
      ],
    },
    {
      icon: <FileSearch size={40} />,
      title: "Policy Development",
      description: "Create or update security policies and procedures to meet compliance requirements.",
      items: [
        "Develop comprehensive security policies",
        "Establish incident response procedures",
        "Create access control and user management policies",
        "Document change management and system development lifecycle processes",
      ],
    },
    {
      icon: <Settings size={40} />,
      title: "Control Implementation",
      description: "Implement technical and administrative controls to address identified gaps.",
      items: [
        "Deploy security monitoring and logging solutions",
        "Implement encryption and data protection measures",
        "Establish vulnerability management processes",
        "Configure backup and disaster recovery systems",
      ],
    },
    {
      icon: <UserCheck size={40} />,
      title: "Training & Awareness",
      description: "Ensure all employees understand their security responsibilities and compliance requirements.",
      items: [
        "Conduct security awareness training",
        "Provide role-specific compliance training",
        "Establish security champions within departments",
        "Create a culture of security consciousness",
      ],
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Readiness Assessment",
      description: "Conduct a pre-audit assessment to ensure readiness for formal SOC2 audit or insurance review.",
      items: [
        "Perform internal audit of controls",
        "Test incident response procedures",
        "Validate evidence collection processes",
        "Address any remaining compliance gaps",
      ],
    },
    {
      icon: <BarChart size={40} />,
      title: "Continuous Monitoring",
      description: "Establish ongoing monitoring and improvement processes to maintain compliance.",
      items: [
        "Implement continuous control monitoring",
        "Conduct regular security assessments",
        "Update documentation as systems change",
        "Prepare for annual reassessments and audits",
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`soc2-process-section ${isIntersecting ? "soc2-process-section--visible" : ""}`}
    >
      <div className="soc2-process-section__container">
        <h2 className="soc2-process-section__title">Our Approach to Compliance Readiness</h2>
        <p className="soc2-process-section__subtitle">
          A structured methodology to prepare your organization for SOC2 compliance and cyber insurance requirements
        </p>

        <div className="soc2-process-section__steps">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`soc2-process-step ${isIntersecting ? "soc2-process-step--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="soc2-process-step__header">
                <div className="soc2-process-step__icon">{step.icon}</div>
                <h3 className="soc2-process-step__title">{step.title}</h3>
              </div>
              <p className="soc2-process-step__description">{step.description}</p>
              <ul className="soc2-process-step__items">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="soc2-process-step__item">
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

export default SOC2Process
