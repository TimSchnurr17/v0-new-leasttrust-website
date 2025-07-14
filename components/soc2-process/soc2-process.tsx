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
      icon: <ClipboardList size={48} />,
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
      icon: <FileSearch size={48} />,
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
      icon: <Settings size={48} />,
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
      icon: <UserCheck size={48} />,
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
      icon: <ShieldCheck size={48} />,
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
      icon: <BarChart size={48} />,
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
    <section ref={sectionRef} className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}>
      <div className="process-section__container">
        <h2 className="process-section__title">Our Approach to Compliance Readiness</h2>
        <p className="process-section__subtitle">
          A structured methodology to prepare your organization for SOC2 compliance and cyber insurance requirements
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          {processSteps.map((step, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ color: "#265e72" }}>{step.icon}</div>
                  <h3 className="service-card__title">{step.title}</h3>
                </div>
                <p className="service-card__text">{step.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0 0" }}>
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SOC2Process
