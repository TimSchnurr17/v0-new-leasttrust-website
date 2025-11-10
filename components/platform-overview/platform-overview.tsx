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
                Start with a comprehensive assessment of your current insider threat program maturity (Level 1-5).
                Identify gaps, prioritize improvements, and create a roadmap to progress from ad-hoc security to
                quantitatively-managed, structured programs. Track your maturity progression over time with dashboards
                and executive reporting.
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
