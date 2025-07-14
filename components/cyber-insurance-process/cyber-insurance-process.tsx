"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Search, BarChart, Settings, FileText, Handshake, TrendingUp } from "lucide-react"

const CyberInsuranceProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const processSteps = [
    {
      icon: <Search size={48} />,
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
      icon: <BarChart size={48} />,
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
      icon: <Settings size={48} />,
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
      icon: <FileText size={48} />,
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
      icon: <Handshake size={48} />,
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
      icon: <TrendingUp size={48} />,
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
    <section ref={sectionRef} className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}>
      <div className="process-section__container">
        <h2 className="process-section__title">Our Cyber Insurance Readiness Process</h2>
        <p className="process-section__subtitle">
          A systematic approach to business-focused risk management that delivers insurance results
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

export default CyberInsuranceProcess
