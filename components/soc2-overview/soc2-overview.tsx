"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Shield, FileCheck, TrendingUp, Clock } from "lucide-react"

const SOC2Overview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">The Continuous Journey of Cybersecurity</h2>
        <p className="value-prop-section__subtitle">
          Cybersecurity is a continuous journey of managing an organization's critical risks and investing in people,
          processes, and technology that can reduce risk. Not only is implementing controls critical to value creation,
          but so is the ability to document and evidence your company's security efforts.
        </p>
        <p className="value-prop-section__subtitle">
          Cybersecurity evidence can help: maintain leadership backing, achieve favorable cyber insurance rates, satisfy
          customer due diligence, appease regulators, and attract investment.
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">Comprehensive Protection</h3>
              <p className="service-card__text">
                Develop robust security controls that protect your organization's data and systems while meeting
                compliance requirements.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <FileCheck size={48} />
              </div>
              <h3 className="service-card__title">Evidence-Based Compliance</h3>
              <p className="service-card__text">
                Create and maintain documentation that demonstrates your security controls and practices to auditors and
                insurers.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <TrendingUp size={48} />
              </div>
              <h3 className="service-card__title">Risk Reduction</h3>
              <p className="service-card__text">
                Identify and mitigate security risks before they become costly incidents or compliance violations.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Clock size={48} />
              </div>
              <h3 className="service-card__title">Continuous Improvement</h3>
              <p className="service-card__text">
                Establish processes for ongoing monitoring, assessment, and enhancement of your security posture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SOC2Overview
