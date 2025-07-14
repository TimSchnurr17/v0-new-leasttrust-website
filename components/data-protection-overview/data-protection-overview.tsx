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
        <h2 className="value-prop-section__title">Comprehensive Data Protection</h2>
        <p className="value-prop-section__subtitle">
          Our Data Protection service partners your team to protect sensitive data. We will train your people and stand
          up the tools necessary to tag, track, protect, and monitor sensitive data.
        </p>
        <p className="value-prop-section__subtitle">
          In today's AI-driven landscape, organizations face unprecedented challenges in protecting their data while
          still leveraging powerful AI tools. LeastTrust helps you navigate this complex terrain with a comprehensive,
          data-centric approach to security.
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Tag size={48} />
              </div>
              <h3 className="service-card__title">Data Classification & Tagging</h3>
              <p className="service-card__text">
                Implement robust data classification systems to identify and tag sensitive information across your
                organization.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Users size={48} />
              </div>
              <h3 className="service-card__title">Employee Training</h3>
              <p className="service-card__text">
                Develop a security-conscious culture through comprehensive training programs tailored to your
                organization's needs.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Database size={48} />
              </div>
              <h3 className="service-card__title">Data Governance</h3>
              <p className="service-card__text">
                Establish clear policies and procedures for data access, usage, retention, and disposal.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">AI-Safe Implementation</h3>
              <p className="service-card__text">
                Leverage AI tools safely with proper guardrails and monitoring to prevent data leakage and security
                incidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataProtectionOverview
