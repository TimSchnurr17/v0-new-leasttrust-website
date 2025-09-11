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
        <h2 className="value-prop-section__title">Revolutionary Insider Threat Management</h2>
        <p className="value-prop-section__subtitle">
          LeastTrust's partnership with Uno.AI brings holistic orchestration, assessment, planning, documentation, and
          reporting to the management of an Insider Threat Program. Our comprehensive platform provides the tools and
          insights needed to protect your organization's most valuable assets.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">Comprehensive GRC Platform</h3>
              <p className="service-card__text">
                The first platform specifically designed for insider threat governance, risk management, and compliance.
                Our solution integrates seamlessly with your existing security infrastructure while providing
                specialized capabilities for managing internal risks.
              </p>

              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", margin: "2rem 0 1rem 0", color: "#1f2937" }}>
                Partnership with Uno.AI
              </h4>
              <p className="service-card__text">
                Through our strategic partnership with Uno.AI, we deliver cutting-edge technology that combines
                artificial intelligence with proven insider threat methodologies. This collaboration ensures you have
                access to the most advanced tools for protecting your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview
