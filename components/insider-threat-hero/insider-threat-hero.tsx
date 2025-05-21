"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const InsiderThreatHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`insider-threat-hero-section ${isIntersecting ? "insider-threat-hero-section--visible" : ""}`}
    >
      <div className="insider-threat-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
          alt="Digital security concept with lock"
          fill
          priority
          className="insider-threat-hero-section__background-image"
        />
        <div className="insider-threat-hero-section__overlay"></div>
      </div>
      <div className="insider-threat-hero-section__container">
        <h1 className="insider-threat-hero-section__title">Insider Threat & Trade Secret Protection</h1>
        <p className="insider-threat-hero-section__subtitle">
          Safeguarding your organization's most valuable intellectual property and sensitive data from internal risks
        </p>
      </div>
    </section>
  )
}

export default InsiderThreatHero
