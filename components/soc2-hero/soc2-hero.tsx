"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const SOC2Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`soc2-hero-section ${isIntersecting ? "soc2-hero-section--visible" : ""}`}>
      <div className="soc2-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
          alt="Cybersecurity compliance concept"
          fill
          priority
          className="soc2-hero-section__background-image"
        />
        <div className="soc2-hero-section__overlay"></div>
      </div>
      <div className="soc2-hero-section__container">
        <h1 className="soc2-hero-section__title">SOC2 and Cyber Insurance Readiness</h1>
        <p className="soc2-hero-section__subtitle">
          Prepare your organization for compliance audits and secure favorable cyber insurance rates
        </p>
      </div>
    </section>
  )
}

export default SOC2Hero
