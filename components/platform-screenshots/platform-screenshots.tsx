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
        <h2 className="value-prop-section__title">Platform In Action</h2>
        <p className="value-prop-section__subtitle">
          See how our platform streamlines insider threat management and assessment
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-21%20at%209.09.44%E2%80%AFPM-Mi52xFahte31RMN700H3C4gBXwSe8K.png"
                alt="Platform dashboard showing maturity assessment overview"
                width={800}
                height={450}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">Assessment Dashboard</h3>
              <p className="service-card__text">
                Comprehensive overview of your organization's insider threat maturity across all dimensions.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-23%20at%205.21.26%E2%80%AFPM-plpPLYWFcAutF6lyhI0Yqw3lV7OStz.png"
                alt="Platform interface showing detailed maturity assessment with Tier 3 adaptive level, observations, and analysis conclusions"
                width={800}
                height={450}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">Questionnaire & Assessment Tools</h3>
              <p className="service-card__text">
                Detailed assessment interface with adaptive questioning and AI-powered analysis of your security
                posture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformScreenshots
