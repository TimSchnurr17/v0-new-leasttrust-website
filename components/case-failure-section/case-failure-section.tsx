"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Scale, XCircle, FileX, UserX } from "lucide-react"

const CaseFailureSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`} style={{ background: "#f9fafb" }}>
      <div className="value-prop-section__container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Scale size={56} style={{ margin: "0 auto 1rem auto", color: "#dc2626" }} />
          <h2 className="value-prop-section__title">Top 3 Reasons Trade Secret Cases Fail</h2>
          <p className="value-prop-section__subtitle">
            We designed our assessment by working backward from trade secret litigation. Courts consistently
            reject claims for these three reasons—don't wait until litigation to discover your gaps.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "100%"
          }}
        >
          <div className="service-card" style={{ borderLeft: "4px solid #dc2626" }}>
            <div className="service-card__content">
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  background: "#fee2e2",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem"
                }}>
                  <FileX size={32} style={{ color: "#dc2626" }} />
                </div>
                <h3 className="service-card__title" style={{ marginBottom: 0, fontSize: "1.3rem" }}>
                  #1: Failed to Identify
                </h3>
              </div>
              <p className="service-card__text">
                <strong>The plaintiff failed to sufficiently identify the trade secret.</strong> You can't prove
                something was stolen if you can't articulate what it was. Courts require specificity—not just
                "customer lists" but which specific customers, what data, and why it's not publicly available.
              </p>
              <p className="service-card__text" style={{ marginTop: "1rem", fontStyle: "italic", color: "#dc2626" }}>
                Our assessment helps you identify and document your proprietary data assets before litigation.
              </p>
            </div>
          </div>

          <div className="service-card" style={{ borderLeft: "4px solid #dc2626" }}>
            <div className="service-card__content">
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  background: "#fee2e2",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem"
                }}>
                  <XCircle size={32} style={{ color: "#dc2626" }} />
                </div>
                <h3 className="service-card__title" style={{ marginBottom: 0, fontSize: "1.3rem" }}>
                  #2: Failed to Protect
                </h3>
              </div>
              <p className="service-card__text">
                <strong>Failed to implement reasonable measures to protect the trade secret.</strong> Courts dismiss
                cases when companies can't demonstrate technical and administrative controls—access restrictions,
                monitoring, classification, deterrent warnings, exit procedures, and documentation.
              </p>
              <p className="service-card__text" style={{ marginTop: "1rem", fontStyle: "italic", color: "#dc2626" }}>
                Our CMMI assessment validates your controls against the legal standard of "reasonable measures."
              </p>
            </div>
          </div>

          <div className="service-card" style={{ borderLeft: "4px solid #dc2626" }}>
            <div className="service-card__content">
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  background: "#fee2e2",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem"
                }}>
                  <UserX size={32} style={{ color: "#dc2626" }} />
                </div>
                <h3 className="service-card__title" style={{ marginBottom: 0, fontSize: "1.3rem" }}>
                  #3: No Legal Obligation
                </h3>
              </div>
              <p className="service-card__text">
                <strong>Never legally contracted an obligation with the employee.</strong> NDAs, employment
                agreements, and IP assignment clauses must exist and be properly executed. Courts can't enforce
                obligations that were never established. This includes contractors and third parties.
              </p>
              <p className="service-card__text" style={{ marginTop: "1rem", fontStyle: "italic", color: "#dc2626" }}>
                Our assessment reviews your contractual protections and identifies gaps in your legal framework.
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: "3rem",
          padding: "2rem",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#1f2937" }}>
            Our Methodology: Working Backward from Litigation
          </h3>
          <p style={{ color: "#4b5563", maxWidth: "900px", margin: "0 auto", lineHeight: "1.7" }}>
            We developed our 400+ question assessment framework by analyzing trade secret litigation outcomes and
            combining best practices from Counter-Intelligence, Cybersecurity, Third-Party Risk Management, Legal,
            HR, and Governance. In the absence of open-source insider threat intelligence (organizations have zero
            incentive to disclose), we built control validation based on what courts actually require to prove you
            took "reasonable measures" to protect your proprietary data.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseFailureSection
