"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const CyberInsuranceHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`cyber-insurance-hero-section ${isIntersecting ? "cyber-insurance-hero-section--visible" : ""}`}
    >
      <div className="cyber-insurance-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop"
          alt="Business risk assessment and insurance concept"
          fill
          priority
          className="cyber-insurance-hero-section__background-image"
        />
        <div className="cyber-insurance-hero-section__overlay"></div>
      </div>
      <div className="cyber-insurance-hero-section__container">
        <h1 className="cyber-insurance-hero-section__title">Cyber Insurance Readiness</h1>
        <p className="cyber-insurance-hero-section__subtitle">
          Business-focused risk management that secures favorable insurance coverage and rates
        </p>
      </div>
    </section>
  )
}

export default CyberInsuranceHero
