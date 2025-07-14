"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

const DataCentricSecurity: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">AI Readiness & Data-Centric Security</h2>
        <p className="value-prop-section__subtitle">
          How prepared is your organization for the shift to data-centric security?
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"
                alt="AI and data security concept"
                width={400}
                height={225}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">AI Accelerates Data Search and Inference</h3>
              <p className="service-card__text">
                In the past, unstructured data would be very difficult to find ("security by obscurity") - AI skips the
                data structuring necessity, making all your data potentially accessible and analyzable.
              </p>

              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", margin: "1.5rem 0 1rem 0", color: "#1f2937" }}>
                How to Fuel AI While Ensuring Optimal Security
              </h4>
              <p className="service-card__text">Classify and tag all data with essential tags including:</p>

              <div style={{ margin: "1.5rem 0" }}>
                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      flexShrink: 0,
                    }}
                  >
                    Privacy
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                    Social Security numbers, credit card data (easily identified with regex patterns)
                  </span>
                </div>

                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#d97706",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      flexShrink: 0,
                    }}
                  >
                    Sensitive
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                    CUI (Controlled Unclassified Information), requires manual procedures
                  </span>
                </div>

                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#7c3aed",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      flexShrink: 0,
                    }}
                  >
                    Proprietary
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                    Trade secrets, arbitrary tags (most difficult to classify)
                  </span>
                </div>

                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#16a34a",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      flexShrink: 0,
                    }}
                  >
                    Public
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>All other data</span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#fef3c7",
                  border: "1px solid #f59e0b",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <AlertTriangle size={24} style={{ color: "#f59e0b", flexShrink: 0, marginTop: "0.125rem" }} />
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", margin: "0 0 0.5rem 0", color: "#92400e" }}>
                    Inference Cannot Be Underestimated
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "#92400e", margin: 0 }}>
                    S.E.C. Mosaic Theory: Data classified as non-material, non-public can infer material, non-public
                    information when combined with other data points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataCentricSecurity
