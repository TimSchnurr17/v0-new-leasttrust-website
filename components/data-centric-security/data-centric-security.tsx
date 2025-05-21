"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

const DataCentricSecurity: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`data-centric-section ${isIntersecting ? "data-centric-section--visible" : ""}`}
    >
      <div className="data-centric-section__container">
        <h2 className="data-centric-section__title">AI Readiness & Data-Centric Security</h2>
        <p className="data-centric-section__subtitle">
          How prepared is your organization for the shift to data-centric security?
        </p>

        <div className="data-centric-section__content">
          <div className="data-centric-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"
              alt="AI and data security concept"
              width={600}
              height={400}
              className="data-centric-section__image"
            />
          </div>

          <div className="data-centric-section__text-content">
            <h3 className="data-centric-section__heading">AI Accelerates Data Search and Inference</h3>
            <p className="data-centric-section__paragraph">
              In the past, unstructured data would be very difficult to find ("security by obscurity") - AI skips the
              data structuring necessity, making all your data potentially accessible and analyzable.
            </p>

            <h3 className="data-centric-section__heading">How to Fuel AI While Ensuring Optimal Security</h3>
            <p className="data-centric-section__paragraph">Classify and tag all data with essential tags including:</p>
            <ul className="data-centric-section__list">
              <li className="data-centric-section__list-item">
                <span className="data-centric-section__tag data-centric-section__tag--privacy">Privacy</span>
                <span className="data-centric-section__tag-description">
                  Social Security numbers, credit card data (easily identified with regex patterns)
                </span>
              </li>
              <li className="data-centric-section__list-item">
                <span className="data-centric-section__tag data-centric-section__tag--sensitive">Sensitive</span>
                <span className="data-centric-section__tag-description">
                  CUI (Controlled Unclassified Information), requires manual procedures
                </span>
              </li>
              <li className="data-centric-section__list-item">
                <span className="data-centric-section__tag data-centric-section__tag--proprietary">Proprietary</span>
                <span className="data-centric-section__tag-description">
                  Trade secrets, arbitrary tags (most difficult to classify)
                </span>
              </li>
              <li className="data-centric-section__list-item">
                <span className="data-centric-section__tag data-centric-section__tag--public">Public</span>
                <span className="data-centric-section__tag-description">All other data</span>
              </li>
            </ul>

            <div className="data-centric-section__warning">
              <div className="data-centric-section__warning-icon">
                <AlertTriangle size={24} />
              </div>
              <div className="data-centric-section__warning-content">
                <h4 className="data-centric-section__warning-title">Inference Cannot Be Underestimated</h4>
                <p className="data-centric-section__warning-text">
                  S.E.C. Mosaic Theory: Data classified as non-material, non-public can infer material, non-public
                  information when combined with other data points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataCentricSecurity
