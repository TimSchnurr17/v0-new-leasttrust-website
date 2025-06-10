"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { X, Check } from "lucide-react"

const BusinessFocusedApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`business-focused-approach-section ${isIntersecting ? "business-focused-approach-section--visible" : ""}`}
    >
      <div className="business-focused-approach-section__container">
        <h2 className="business-focused-approach-section__title">Business-Focused vs. Framework-Driven</h2>
        <p className="business-focused-approach-section__subtitle">
          Our approach prioritizes your business needs over checkbox compliance
        </p>

        <div className="business-focused-approach-section__comparison">
          <div className="approach-comparison">
            <div className="approach-card approach-card--traditional">
              <div className="approach-card__header">
                <X size={32} className="approach-card__icon approach-card__icon--negative" />
                <h3 className="approach-card__title">Traditional Framework Approach</h3>
              </div>
              <ul className="approach-card__list">
                <li className="approach-card__item">One-size-fits-all compliance requirements</li>
                <li className="approach-card__item">Generic controls that may not fit your business</li>
                <li className="approach-card__item">Focus on passing audits rather than reducing risk</li>
                <li className="approach-card__item">Expensive implementations with unclear ROI</li>
                <li className="approach-card__item">May not address your actual business risks</li>
              </ul>
            </div>

            <div className="approach-card approach-card--business">
              <div className="approach-card__header">
                <Check size={32} className="approach-card__icon approach-card__icon--positive" />
                <h3 className="approach-card__title">Our Business-Focused Approach</h3>
              </div>
              <ul className="approach-card__list">
                <li className="approach-card__item">Tailored to your specific business operations</li>
                <li className="approach-card__item">Controls matched to your actual risk profile</li>
                <li className="approach-card__item">Focus on measurable business impact reduction</li>
                <li className="approach-card__item">Cost-effective solutions with clear ROI</li>
                <li className="approach-card__item">Directly addresses your most critical risks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="business-focused-approach-section__benefits">
          <h3 className="business-focused-approach-section__benefits-title">Why This Matters for Insurance</h3>
          <p className="business-focused-approach-section__benefits-text">
            Insurance underwriters care about real risk reduction, not compliance certificates. Our business-focused
            approach demonstrates tangible improvements to your risk profile, which translates directly into better
            coverage terms and lower premiums. We help you tell a compelling story about your security posture that
            resonates with insurance professionals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BusinessFocusedApproach
