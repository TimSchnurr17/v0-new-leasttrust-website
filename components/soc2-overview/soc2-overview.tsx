"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Shield, FileCheck, TrendingUp, Clock } from "lucide-react"

const SOC2Overview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`soc2-overview-section ${isIntersecting ? "soc2-overview-section--visible" : ""}`}
    >
      <div className="soc2-overview-section__container">
        <div className="soc2-overview-section__content">
          <div className="soc2-overview-section__text-content">
            <h2 className="soc2-overview-section__title">The Continuous Journey of Cybersecurity</h2>
            <p className="soc2-overview-section__description">
              Cybersecurity is a continuous journey of managing an organization's critical risks and investing in
              people, processes, and technology that can reduce risk. Not only is implementing controls critical to
              value creation, but so is the ability to document and evidence your company's security efforts.
            </p>
            <p className="soc2-overview-section__description">
              Cybersecurity evidence can help: maintain leadership backing, achieve favorable cyber insurance rates,
              satisfy customer due diligence, appease regulators, and attract investment.
            </p>

            <div className="soc2-overview-section__features">
              <div className="soc2-feature">
                <div className="soc2-feature__icon">
                  <Shield size={32} />
                </div>
                <div className="soc2-feature__content">
                  <h3 className="soc2-feature__title">Comprehensive Protection</h3>
                  <p className="soc2-feature__description">
                    Develop robust security controls that protect your organization's data and systems while meeting
                    compliance requirements.
                  </p>
                </div>
              </div>

              <div className="soc2-feature">
                <div className="soc2-feature__icon">
                  <FileCheck size={32} />
                </div>
                <div className="soc2-feature__content">
                  <h3 className="soc2-feature__title">Evidence-Based Compliance</h3>
                  <p className="soc2-feature__description">
                    Create and maintain documentation that demonstrates your security controls and practices to auditors
                    and insurers.
                  </p>
                </div>
              </div>

              <div className="soc2-feature">
                <div className="soc2-feature__icon">
                  <TrendingUp size={32} />
                </div>
                <div className="soc2-feature__content">
                  <h3 className="soc2-feature__title">Risk Reduction</h3>
                  <p className="soc2-feature__description">
                    Identify and mitigate security risks before they become costly incidents or compliance violations.
                  </p>
                </div>
              </div>

              <div className="soc2-feature">
                <div className="soc2-feature__icon">
                  <Clock size={32} />
                </div>
                <div className="soc2-feature__content">
                  <h3 className="soc2-feature__title">Continuous Improvement</h3>
                  <p className="soc2-feature__description">
                    Establish processes for ongoing monitoring, assessment, and enhancement of your security posture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="soc2-overview-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop"
              alt="Cybersecurity documentation and compliance"
              width={600}
              height={400}
              className="soc2-overview-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SOC2Overview
