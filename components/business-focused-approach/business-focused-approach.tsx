"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { X, Check } from "lucide-react"

const BusinessFocusedApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Business-Focused vs. Framework-Driven</h2>
        <p className="value-prop-section__subtitle">
          Our approach prioritizes your business needs over checkbox compliance
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <X size={32} style={{ color: "#dc2626" }} />
                <h3 className="service-card__title">Traditional Framework Approach</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#dc2626",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  One-size-fits-all compliance requirements
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#dc2626",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Generic controls that may not fit your business
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#dc2626",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Focus on passing audits rather than reducing risk
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#dc2626",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Expensive implementations with unclear ROI
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#dc2626",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  May not address your actual business risks
                </li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Check size={32} style={{ color: "#16a34a" }} />
                <h3 className="service-card__title">Our Business-Focused Approach</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#16a34a",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Tailored to your specific business operations
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#16a34a",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Controls matched to your actual risk profile
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#16a34a",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Focus on measurable business impact reduction
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#16a34a",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Cost-effective solutions with clear ROI
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#16a34a",
                      borderRadius: "50%",
                      marginTop: "0.375rem",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                    }}
                  ></span>
                  Directly addresses your most critical risks
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
            Why This Matters for Insurance
          </h3>
          <p>
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
