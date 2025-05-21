"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Shield, Users, Database, Tag } from "lucide-react"

const DataProtectionOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`data-protection-overview-section ${isIntersecting ? "data-protection-overview-section--visible" : ""}`}
    >
      <div className="data-protection-overview-section__container">
        <div className="data-protection-overview-section__content">
          <div className="data-protection-overview-section__text-content">
            <h2 className="data-protection-overview-section__title">Comprehensive Data Protection</h2>
            <p className="data-protection-overview-section__description">
              Our Data Protection service partners your team to protect sensitive data. We will train your people and
              stand up the tools necessary to tag, track, protect, and monitor sensitive data.
            </p>
            <p className="data-protection-overview-section__description">
              In today's AI-driven landscape, organizations face unprecedented challenges in protecting their data while
              still leveraging powerful AI tools. LeastTrust helps you navigate this complex terrain with a
              comprehensive, data-centric approach to security.
            </p>

            <div className="data-protection-overview-section__features">
              <div className="data-protection-feature">
                <div className="data-protection-feature__icon">
                  <Tag size={32} />
                </div>
                <div className="data-protection-feature__content">
                  <h3 className="data-protection-feature__title">Data Classification & Tagging</h3>
                  <p className="data-protection-feature__description">
                    Implement robust data classification systems to identify and tag sensitive information across your
                    organization.
                  </p>
                </div>
              </div>

              <div className="data-protection-feature">
                <div className="data-protection-feature__icon">
                  <Users size={32} />
                </div>
                <div className="data-protection-feature__content">
                  <h3 className="data-protection-feature__title">Employee Training</h3>
                  <p className="data-protection-feature__description">
                    Develop a security-conscious culture through comprehensive training programs tailored to your
                    organization's needs.
                  </p>
                </div>
              </div>

              <div className="data-protection-feature">
                <div className="data-protection-feature__icon">
                  <Database size={32} />
                </div>
                <div className="data-protection-feature__content">
                  <h3 className="data-protection-feature__title">Data Governance</h3>
                  <p className="data-protection-feature__description">
                    Establish clear policies and procedures for data access, usage, retention, and disposal.
                  </p>
                </div>
              </div>

              <div className="data-protection-feature">
                <div className="data-protection-feature__icon">
                  <Shield size={32} />
                </div>
                <div className="data-protection-feature__content">
                  <h3 className="data-protection-feature__title">AI-Safe Implementation</h3>
                  <p className="data-protection-feature__description">
                    Leverage AI tools safely with proper guardrails and monitoring to prevent data leakage and security
                    incidents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="data-protection-overview-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
              alt="Data protection concept"
              width={600}
              height={400}
              className="data-protection-overview-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataProtectionOverview
