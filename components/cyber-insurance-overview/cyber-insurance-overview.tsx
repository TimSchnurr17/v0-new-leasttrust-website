"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Target, TrendingUp, Shield, DollarSign } from "lucide-react"

const CyberInsuranceOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`cyber-insurance-overview-section ${isIntersecting ? "cyber-insurance-overview-section--visible" : ""}`}
    >
      <div className="cyber-insurance-overview-section__container">
        <div className="cyber-insurance-overview-section__content">
          <div className="cyber-insurance-overview-section__text-content">
            <h2 className="cyber-insurance-overview-section__title">Business-Driven Cyber Insurance Strategy</h2>
            <p className="cyber-insurance-overview-section__description">
              Unlike traditional compliance frameworks like NIST or SOC2, our Cyber Insurance Readiness service focuses
              on what matters most to your business: protecting your operations while securing the best possible
              insurance coverage and rates.
            </p>
            <p className="cyber-insurance-overview-section__description">
              We conduct thorough business impact assessments and implement risk management strategies that are tailored
              to your specific industry, operations, and risk profile. Our approach positions your organization for
              favorable insurance underwriting by demonstrating real, measurable risk reduction.
            </p>

            <div className="cyber-insurance-overview-section__features">
              <div className="cyber-insurance-feature">
                <div className="cyber-insurance-feature__icon">
                  <Target size={32} />
                </div>
                <div className="cyber-insurance-feature__content">
                  <h3 className="cyber-insurance-feature__title">Business Impact Assessment</h3>
                  <p className="cyber-insurance-feature__description">
                    Identify and quantify the real business risks that matter to your operations and bottom line.
                  </p>
                </div>
              </div>

              <div className="cyber-insurance-feature">
                <div className="cyber-insurance-feature__icon">
                  <TrendingUp size={32} />
                </div>
                <div className="cyber-insurance-feature__content">
                  <h3 className="cyber-insurance-feature__title">Tailored Risk Management</h3>
                  <p className="cyber-insurance-feature__description">
                    Implement controls that match your business needs rather than checking boxes for compliance
                    frameworks.
                  </p>
                </div>
              </div>

              <div className="cyber-insurance-feature">
                <div className="cyber-insurance-feature__icon">
                  <Shield size={32} />
                </div>
                <div className="cyber-insurance-feature__content">
                  <h3 className="cyber-insurance-feature__title">Strategic Security Planning</h3>
                  <p className="cyber-insurance-feature__description">
                    Develop system security plans that demonstrate measurable risk reduction to insurance underwriters.
                  </p>
                </div>
              </div>

              <div className="cyber-insurance-feature">
                <div className="cyber-insurance-feature__icon">
                  <DollarSign size={32} />
                </div>
                <div className="cyber-insurance-feature__content">
                  <h3 className="cyber-insurance-feature__title">Insurance Optimization</h3>
                  <p className="cyber-insurance-feature__description">
                    Position your organization for better coverage terms and more favorable premium rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-insurance-overview-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
              alt="Business risk assessment and analysis"
              width={600}
              height={400}
              className="cyber-insurance-overview-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberInsuranceOverview
