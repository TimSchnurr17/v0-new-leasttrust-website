"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const DataProtectionHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`data-protection-hero-section ${isIntersecting ? "data-protection-hero-section--visible" : ""}`}
    >
      <div className="data-protection-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"
          alt="Data protection concept with digital elements"
          fill
          priority
          className="data-protection-hero-section__background-image"
        />
        <div className="data-protection-hero-section__overlay"></div>
      </div>
      <div className="data-protection-hero-section__container">
        <h1 className="data-protection-hero-section__title">Data Protection Services</h1>
        <p className="data-protection-hero-section__subtitle">
          Safely leverage AI tools without risking your organization's cybersecurity
        </p>
      </div>
    </section>
  )
}

export default DataProtectionHero
