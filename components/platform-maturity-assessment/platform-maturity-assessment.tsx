"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { CheckCircle, BarChart3, Users, Shield, FileText, Building, AlertCircle } from "lucide-react"

const PlatformMaturityAssessment: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const assessmentDimensions = [
    {
      icon: <Shield size={24} />,
      title: "Governance",
      description: "Leadership oversight, program structure, policies, procedures, and strategic alignment",
    },
    {
      icon: <Users size={24} />,
      title: "Human Resource",
      description: "Employee lifecycle management, background checks, and ongoing education",
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Cybersecurity & IR",
      description: "Logging, detection, response, recovery, & forensics for insider incidents",
    },
    {
      icon: <FileText size={24} />,
      title: "Legal",
      description: "Legal frameworks, compliance requirements, and incentive alignment",
    },
    {
      icon: <Building size={24} />,
      title: "Physical",
      description: "Physical security controls and access management",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Technical",
      description: "Workflow deterrents, nudging, monitoring, and data protection",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Insider Threat Maturity Assessment</h2>
        <p className="value-prop-section__subtitle">
          With over 400 questions examining employee incentives and data protection controls across HR, legal,
          cybersecurity, IT, risk, and facilities, our CMMI (Capability Maturity Model Integration) assessment can put
          your organization on track to protect its proprietary data.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__content">
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ flex: 1 }}>
                  <h3 className="service-card__title">Comprehensive Multi-Dimensional Assessment</h3>
                  <p className="service-card__text">
                    Our assessment evaluates your organization across seven critical dimensions of insider threat
                    management. Each dimension is thoroughly examined through targeted questions that reveal your
                    current maturity level and identify specific areas for improvement.
                  </p>

                  <div style={{ marginTop: "2rem" }}>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-21%20at%209.09.44%E2%80%AFPM-Mi52xFahte31RMN700H3C4gBXwSe8K.png"
                      alt="Insider Threat Maturity Assessment radar chart showing seven dimensions: Administrative, Governance, Human Resource, Incident Response, Legal, Physical, and Technical"
                      width={300}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px",
                        margin: "0 auto",
                        display: "block",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-prop-section__grid">
          {assessmentDimensions.map((dimension, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__content">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ color: "#265e72" }}>{dimension.icon}</div>
                  <h3 className="service-card__title">{dimension.title}</h3>
                </div>
                <p className="service-card__text">{dimension.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">Assessment Benefits</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={24} style={{ color: "#16a34a", flexShrink: 0, marginTop: "0.125rem" }} />
                  <div>
                    <p className="service-card__text">
                      <strong>Baseline Your Current State:</strong> Understand where your organization stands today
                      across all critical dimensions of insider threat management
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={24} style={{ color: "#16a34a", flexShrink: 0, marginTop: "0.125rem" }} />
                  <div>
                    <p className="service-card__text">
                      <strong>Identify Gaps:</strong> Pinpoint specific weaknesses and vulnerabilities in your current
                      insider threat program
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={24} style={{ color: "#16a34a", flexShrink: 0, marginTop: "0.125rem" }} />
                  <div>
                    <p className="service-card__text">
                      <strong>Prioritize Improvements:</strong> Receive a roadmap of recommended actions ranked by
                      impact and feasibility
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={24} style={{ color: "#16a34a", flexShrink: 0, marginTop: "0.125rem" }} />
                  <div>
                    <p className="service-card__text">
                      <strong>Track Progress:</strong> Measure improvement over time with follow-up assessments and
                      benchmark against industry standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformMaturityAssessment
