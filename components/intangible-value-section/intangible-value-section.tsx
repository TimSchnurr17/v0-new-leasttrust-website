"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { TrendingUp, Shield, AlertTriangle } from "lucide-react"

const IntangibleValueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">90% of Your Company Value Is Intangible—And Unregulated</h2>
        <p className="value-prop-section__subtitle" style={{ marginBottom: "2rem" }}>
          Your balance sheet shows only 4% tangible assets. The other 90%+ consists of data: trade secrets,
          competitive intelligence, strategic plans, customer lists, proprietary processes, and IP.
          Employees routinely take this proprietary data to their next job—erasing your competitive advantage overnight.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "2rem"
          }}
        >
          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <TrendingUp size={48} />
              </div>
              <h3 className="service-card__title">Uncapped Damages</h3>
              <p className="service-card__text">
                When employees join or create competitors with your data, damages aren't limited to breach
                notification costs. Lost market share, eroded pricing power, and stolen competitive
                advantage can destroy years of investment.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <AlertTriangle size={48} />
              </div>
              <h3 className="service-card__title">Why Cases Fail</h3>
              <p className="service-card__text">
                Top 3 reasons trade secret litigation fails: (1) Plaintiff couldn't identify what was stolen,
                (2) Failed to implement reasonable protection measures, (3) Never contracted legal obligations
                with employees. Don't wait until litigation to discover these gaps.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__content">
              <div className="service-card__icon">
                <Shield size={48} />
              </div>
              <h3 className="service-card__title">Hidden Threat</h3>
              <p className="service-card__text">
                FBI and Verizon reports barely mention insider threats (less than 2% of incidents).
                Why? Organizations have zero incentive to disclose. There's no breach notification law,
                no ISAC, and no shared intelligence—making insider threat the invisible risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntangibleValueSection
