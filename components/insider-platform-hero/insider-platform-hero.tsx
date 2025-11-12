"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const InsiderPlatformHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`hero-section ${isIntersecting ? "hero-section--visible" : ""}`}>
      <div className="hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop"
          alt="Advanced cybersecurity platform interface"
          fill
          priority
          className="hero-section__background-image"
        />
        <div className="hero-section__overlay"></div>
      </div>
      <div className="hero-section__container">
        <h1 className="hero-section__title">The Insider Threat Platform Built for Maturity</h1>
        <p className="hero-section__subtitle">
          Assess, build, and operate your insider threat program. Progress from CMMI Level 1 (ad-hoc) to Level 3+
          (structured, quantitatively-managed) with a platform that supports all Four Pillars: Train, Deter, Detect, and Enforce.
        </p>
      </div>
    </section>
  )
}

export default InsiderPlatformHero
