"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const PlatformOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">From Assessment to Mature Program</h2>
        <p className="value-prop-section__subtitle">
          The Insider Platform enables your entire insider threat journey—from CMMI maturity assessment to operating
          a structured Level 3+ program. Assess where you are, build what you need, and operate with confidence.
          All Four Pillars (Train, Deter, Detect, Enforce) in one platform.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">CMMI-Based Maturity Assessment</h3>
              <p className="service-card__text">
                Start with a comprehensive assessment of your current insider threat program maturity (Tier 0-4).
                Our assessment uses <strong>over 400 questions</strong> developed by working backward from trade secret
                litigation outcomes and combining best practices from Counter-Intelligence, Cybersecurity, Third-Party
                Risk Management, Legal, HR, and Governance.
              </p>
              <p className="service-card__text">
                The platform guides stakeholder interviews, collects evidence, and validates controls across 30+ areas
                in 7 domains: Administrative, Governance, Human Resource, Incident Response, Legal, Physical, and Technical.
                Dependency-driven questions adapt based on your responses—eliminating irrelevant questions while ensuring
                comprehensive coverage.
              </p>

              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", margin: "2rem 0 1rem 0", color: "#1f2937" }}>
                Assessment Deliverables
              </h4>
              <p className="service-card__text">
                Receive a detailed report featuring:
              </p>
              <ul style={{ marginLeft: "1.5rem", marginTop: "1rem", lineHeight: "1.8" }}>
                <li><strong>Executive Summary</strong> with overall maturity findings and strategic recommendations</li>
                <li><strong>Spider Charts</strong> visualizing your maturity across all 7 control domains</li>
                <li><strong>Control-by-Control Analysis</strong> with tier assignments (0-4), observations, and conclusions</li>
                <li><strong>Gap Analysis</strong> identifying missing controls and implementation weaknesses</li>
                <li><strong>Prioritized Recommendations</strong> organized by department with actionable improvement areas</li>
                <li><strong>Evidence Repository</strong> documenting your "reasonable measures" for legal defensibility</li>
              </ul>
              <p className="service-card__text" style={{ marginTop: "1rem", fontStyle: "italic" }}>
                Reports can be re-weighted to align with your risk register and compliance requirements.
              </p>

              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", margin: "2rem 0 1rem 0", color: "#1f2937" }}>
                Four Pillars Program Management
              </h4>
              <p className="service-card__text">
                Manage your complete insider threat lifecycle: Train employees on IP protection, Deter malicious behavior
                with policies and controls, Detect threats early with behavioral analytics, and Enforce consequences with
                incident response and case management. The platform supports all four pillars—not just detection technology.
              </p>

              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", margin: "2rem 0 1rem 0", color: "#1f2937" }}>
                Integration with Existing Tools
              </h4>
              <p className="service-card__text">
                Works with your existing SIEM, DLP, IAM, and HR systems. The platform orchestrates your insider threat
                program without requiring you to rip and replace existing investments. Focus on proprietary data protection—
                not just regulated data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview
