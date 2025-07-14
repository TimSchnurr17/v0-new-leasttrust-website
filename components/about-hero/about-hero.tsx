"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const AboutHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`hero-section ${isIntersecting ? "hero-section--visible" : ""}`}>
      <div className="hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop"
          alt="Security concept"
          fill
          priority
          className="hero-section__background-image"
        />
        <div className="hero-section__overlay"></div>
      </div>
      <div className="hero-section__container">
        <h1 className="hero-section__title">Our Story</h1>
        <p className="hero-section__subtitle">
          At LeastTrust, we're dedicated to protecting your organization's most valuable assets through innovative
          security solutions and expert guidance.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
