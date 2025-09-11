"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const PlatformScreenshots: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Platform Interface</h2>
        <p className="value-prop-section__subtitle">
          Experience our intuitive, comprehensive platform designed for insider threat management
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">Entities, Risks, & Controls Management</h3>
              <p className="service-card__text">
                Comprehensive view of your organization's entities, risk landscape, and control framework. Manage
                evidence, attachments, and document requests all in one centralized location.
              </p>
            </div>
            <div className="service-card__image-container" style={{ height: "auto", minHeight: "500px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-11%20at%2010.43.50%E2%80%AFAM-IMlQF4TwHzViAIIWmWRZcOXKe2agDH.png"
                alt="Platform interface showing Entities, Risks, & Controls management with evidence attachments"
                width={800}
                height={600}
                className="service-card__image"
                style={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  height: "auto",
                  maxHeight: "600px",
                }}
              />
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">Questionnaire & Assessment Tools</h3>
              <p className="service-card__text">
                Advanced questionnaire system with AI-powered contextual scoring. Create, manage, and analyze insider
                threat assessments with comprehensive question banks and automated evaluation.
              </p>
            </div>
            <div className="service-card__image-container" style={{ height: "auto", minHeight: "500px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-11%20at%2010.24.20%E2%80%AFAM-R4tKgJB3cRNvYHBiBEXhaTz1CHYb2B.png"
                alt="Platform interface showing questionnaire and RFP management with insider threat assessments"
                width={800}
                height={600}
                className="service-card__image"
                style={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  height: "auto",
                  maxHeight: "600px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformScreenshots
