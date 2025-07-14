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
        <h2 className="value-prop-section__title">Protecting Your Crown Jewels</h2>
        <p className="value-prop-section__subtitle">
          LeastTrust helps organizations initiate and manage insider threat programs to protect their most valuable
          assets - their trade secrets and intellectual property. In today's hypercompetitive marketplace, organizations
          of all sizes often overlook their most valuable assets: their trade secrets.
        </p>
        <p className="value-prop-section__subtitle">
          These proprietary data assets - the "crown jewels" of your operation - can make the difference between
          thriving and merely surviving. Understanding how to identify, protect, and leverage these assets is crucial
          for sustainable business success in an economy increasingly driven by intellectual property.
        </p>

        <div className="value-prop-section__grid">
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">Comprehensive Protection</h3>
              <p className="service-card__text">
                Develop robust strategies to safeguard your organization's most sensitive information from internal
                threats.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Users size={48} />
              </div>
              <h3 className="service-card__title">Employee Awareness</h3>
              <p className="service-card__text">
                Create training programs that educate your team on the importance of data protection and security
                protocols.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <FileText size={48} />
              </div>
              <h3 className="service-card__title">Policy Development</h3>
              <p className="service-card__text">
                Establish clear guidelines and procedures for handling sensitive information and intellectual property.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Lock size={48} />
              </div>
              <h3 className="service-card__title">Access Controls</h3>
              <p className="service-card__text">
                Implement proper access controls and need-to-know policies for sensitive information.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <AlertTriangle size={48} />
              </div>
              <h3 className="service-card__title">Risk Assessment</h3>
              <p className="service-card__text">
                Identify vulnerabilities and potential insider threats before they become problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatOverview
