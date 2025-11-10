"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, Users, Database, Tag } from "lucide-react"

const DataProtectionOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Why Proprietary Data Requires Different Protection</h2>
        <p className="value-prop-section__subtitle">
          HIPAA, PCI, and GDPR don't protect trade secrets. They don't protect your customer lists, strategic plans,
          product roadmaps, or competitive intelligence. This unregulated proprietary data is what drives your business
          value—and what insiders target most. Traditional security focuses on compliance. We focus on protecting what
          matters: your competitive advantage.
        </p>
        <p className="value-prop-section__subtitle">
          Our data-centric approach helps you identify, classify, control access to, monitor, and defend your crown
          jewels. From establishing "reasonable measures" for legal defensibility to detecting unauthorized access by
          insiders, we help you protect the 90% that regulations ignore.
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Tag size={48} />
              </div>
              <h3 className="service-card__title">Proprietary Data Identification</h3>
              <p className="service-card__text">
                Identify what's truly proprietary—trade secrets, IP, competitive intelligence, strategic plans. Not
                all data is equal. Classify and tag what drives your business value.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Users size={48} />
              </div>
              <h3 className="service-card__title">Access Controls & Least Privilege</h3>
              <p className="service-card__text">
                Who needs access to your crown jewels? Implement need-to-know controls, monitor access patterns,
                and detect anomalies before data walks out the door.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Database size={48} />
              </div>
              <h3 className="service-card__title">DLP for Proprietary Data</h3>
              <p className="service-card__text">
                Traditional DLP focuses on PII. We configure DLP to detect trade secrets, proprietary methodologies,
                customer intelligence, and strategic data exfiltration.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">Legal Defensibility</h3>
              <p className="service-card__text">
                Document "reasonable measures" to protect trade secrets. Support IP litigation under DTSA and
                Economic Espionage Act. Forensic readiness for insider investigations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataProtectionOverview
