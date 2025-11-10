"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Calendar, Users, BarChart, FileText, ArrowRight } from "lucide-react"

const AssessmentProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`} style={{ background: "#f9fafb" }}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">The Assessment Process</h2>
        <p className="value-prop-section__subtitle">
          Our CMMI-based insider threat assessment uses over 400 questions developed by working backward from
          trade secret litigation. We validate your defenses against the same criteria courts use to determine
          if you took "reasonable measures" to protect your proprietary data.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          marginTop: "3rem",
          marginBottom: "3rem"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "white",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <Calendar size={36} style={{ color: "#2563eb" }} />
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>1. Schedule or Self-Assess</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Choose guided interviews with our team or use our platform to self-assess at your own pace.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "white",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <Users size={36} style={{ color: "#2563eb" }} />
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>2. Stakeholder Coordination</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              We coordinate with Legal, HR, IT, Security, and other stakeholders to gather evidence and validate controls.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "white",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <BarChart size={36} style={{ color: "#2563eb" }} />
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>3. Scoring & Analysis</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Each control is scored across 30+ areas in 7 domains. Maturity levels (Tier 0-4) are assigned based on implementation evidence.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "white",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <FileText size={36} style={{ color: "#2563eb" }} />
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>4. Report & Strategy Workshop</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Receive a comprehensive report with spider charts, gap analysis, and prioritized recommendations by department.
            </p>
          </div>
        </div>

        <div style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#1f2937" }}>
            Investment & Timeline
          </h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2563eb", marginBottom: "0.5rem" }}>
            $8,000
          </p>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            Includes platform access and 20 hours of expert consultation
          </p>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Additional hours available at $300/hour if needed (no client has exceeded 20 hours yet)
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn--primary btn--large" style={{ display: "inline-flex", alignItems: "center" }}>
              Schedule Free Consultation
              <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
            </a>
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "1rem", fontStyle: "italic" }}>
            Flexible engagement: Direct our team or use the platform for self-assessment
          </p>
        </div>
      </div>
    </section>
  )
}

export default AssessmentProcessSection
