"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, Users, FileText, Lock, AlertTriangle } from "lucide-react"

const InsiderThreatOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Protecting Your Proprietary Data from Insider Threats</h2>
        <p className="value-prop-section__subtitle">
          Most companies focus security on the 10% of data covered by regulations (PII, PHI, PCI). But insiders
          target the other 90%—your proprietary data. Trade secrets, product roadmaps, customer lists, strategic
          plans, and competitive intelligence. This unregulated data is what drives your business value and competitive advantage.
        </p>
        <p className="value-prop-section__subtitle">
          We help you build mature insider threat programs (CMMI-based) to protect these crown jewels. Progress
          from ad-hoc, reactive security to structured, proactive programs that train employees, deter malicious
          behavior, detect threats early, and enforce consequences when incidents occur.
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">CMMI Maturity Assessment</h3>
              <p className="service-card__text">
                Measure your current insider threat program maturity (Level 1-5) and identify gaps to progress
                from ad-hoc to structured, quantitatively-managed programs.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Users size={48} />
              </div>
              <h3 className="service-card__title">Proprietary Data Protection</h3>
              <p className="service-card__text">
                Protect the 90% of your data that isn't regulated—trade secrets, IP, strategic plans, customer
                intelligence—that drives your competitive advantage.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <FileText size={48} />
              </div>
              <h3 className="service-card__title">Legal Defensibility</h3>
              <p className="service-card__text">
                Establish "reasonable measures" for trade secret protection to support IP litigation under the
                Economic Espionage Act and Defend Trade Secrets Act (DTSA).
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Lock size={48} />
              </div>
              <h3 className="service-card__title">Four Pillars Approach</h3>
              <p className="service-card__text">
                Complete insider threat lifecycle: Train employees on IP protection, Deter malicious behavior,
                Detect threats early, and Enforce consequences.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <AlertTriangle size={48} />
              </div>
              <h3 className="service-card__title">Third-Party Risk</h3>
              <p className="service-card__text">
                Extend insider threat controls to contractors, vendors, and partners. Support M&A due diligence
                and investment security assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatOverview
