"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Shield, Users, FileText, Lock, AlertTriangle } from "lucide-react"

const InsiderThreatOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`insider-threat-overview-section ${isIntersecting ? "insider-threat-overview-section--visible" : ""}`}
    >
      <div className="insider-threat-overview-section__container">
        <div className="insider-threat-overview-section__content">
          <div className="insider-threat-overview-section__text-content">
            <h2 className="insider-threat-overview-section__title">Protecting Your Crown Jewels</h2>
            <p className="insider-threat-overview-section__description">
              LeastTrust helps organizations initiate and manage insider threat programs to protect their most valuable
              assets - their trade secrets and intellectual property. In today's hypercompetitive marketplace,
              organizations of all sizes often overlook their most valuable assets: their trade secrets.
            </p>
            <p className="insider-threat-overview-section__description">
              These proprietary data assets - the "crown jewels" of your operation - can make the difference between
              thriving and merely surviving. Understanding how to identify, protect, and leverage these assets is
              crucial for sustainable business success in an economy increasingly driven by intellectual property.
            </p>

            <div className="insider-threat-overview-section__features">
              <div className="insider-threat-feature">
                <div className="insider-threat-feature__icon">
                  <Shield size={32} />
                </div>
                <div className="insider-threat-feature__content">
                  <h3 className="insider-threat-feature__title">Comprehensive Protection</h3>
                  <p className="insider-threat-feature__description">
                    Develop robust strategies to safeguard your organization's most sensitive information from internal
                    threats.
                  </p>
                </div>
              </div>

              <div className="insider-threat-feature">
                <div className="insider-threat-feature__icon">
                  <Users size={32} />
                </div>
                <div className="insider-threat-feature__content">
                  <h3 className="insider-threat-feature__title">Employee Awareness</h3>
                  <p className="insider-threat-feature__description">
                    Create training programs that educate your team on the importance of data protection and security
                    protocols.
                  </p>
                </div>
              </div>

              <div className="insider-threat-feature">
                <div className="insider-threat-feature__icon">
                  <FileText size={32} />
                </div>
                <div className="insider-threat-feature__content">
                  <h3 className="insider-threat-feature__title">Policy Development</h3>
                  <p className="insider-threat-feature__description">
                    Establish clear guidelines and procedures for handling sensitive information and intellectual
                    property.
                  </p>
                </div>
              </div>

              <div className="insider-threat-feature">
                <div className="insider-threat-feature__icon">
                  <Lock size={32} />
                </div>
                <div className="insider-threat-feature__content">
                  <h3 className="insider-threat-feature__title">Access Controls</h3>
                  <p className="insider-threat-feature__description">
                    Implement proper access controls and need-to-know policies for sensitive information.
                  </p>
                </div>
              </div>

              <div className="insider-threat-feature">
                <div className="insider-threat-feature__icon">
                  <AlertTriangle size={32} />
                </div>
                <div className="insider-threat-feature__content">
                  <h3 className="insider-threat-feature__title">Risk Assessment</h3>
                  <p className="insider-threat-feature__description">
                    Identify vulnerabilities and potential insider threats before they become problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="insider-threat-overview-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
              alt="Data protection concept"
              width={600}
              height={400}
              className="insider-threat-overview-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatOverview
