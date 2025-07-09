"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Phone, Calendar } from "lucide-react"

const UseCasesCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`use-cases-cta-section ${isIntersecting ? "use-cases-cta-section--visible" : ""}`}
    >
      <div className="use-cases-cta-section__container">
        <h2 className="use-cases-cta-section__title">Ready to Implement Your Use Case?</h2>
        <p className="use-cases-cta-section__subtitle">
          Contact our team to discuss how we can customize our insider threat protection framework for your
          organization's specific needs.
        </p>
        <div className="use-cases-cta-section__buttons">
          <a href="tel:5517510010" className="btn btn--light btn--large flex items-center justify-center">
            <Phone size={20} className="mr-2" />
            Schedule Consultation
          </a>
          <a
            href="https://calendar.app.google/53yGP58pPZiY8XEN6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--large flex items-center justify-center"
          >
            <Calendar size={20} className="mr-2" />
            Download Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default UseCasesCTA
