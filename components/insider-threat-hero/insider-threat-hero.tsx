"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const InsiderThreatHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`hero-section ${isIntersecting ? "hero-section--visible" : ""}`}>
      <div className="hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
          alt="Digital security concept with lock"
          fill
          priority
          className="hero-section__background-image"
        />
        <div className="hero-section__overlay"></div>
      </div>
      <div className="hero-section__container">
        <h1 className="hero-section__title">Insider Threat & Trade Secret Protection</h1>
        <p className="hero-section__subtitle">
          Build mature insider threat programs to protect your proprietary data and crown jewels.
          Progress from ad-hoc security (CMMI Level 0) to structured, measurable programs (Level 3+)
          with our Four Pillars approach: Train, Deter, Detect, and Enforce.
        </p>
      </div>
    </section>
  )
}

export default InsiderThreatHero
