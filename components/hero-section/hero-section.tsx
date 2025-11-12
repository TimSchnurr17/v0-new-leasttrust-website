"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Phone } from "lucide-react"

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`hero-section ${isIntersecting ? "hero-section--visible" : ""}`}>
      <div className="hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
          alt="Digital security concept"
          fill
          priority
          className="hero-section__background-image"
        />
        <div className="hero-section__overlay"></div>
      </div>
      <div className="hero-section__container">
        <h1 className="hero-section__title">Protect the 90% of Your Data That Isn&apos;t Regulated</h1>
        <p className="hero-section__subtitle">
          HIPAA, PCI, and GDPR cover about 10% of your data. The other 90%—trade secrets, IP, strategic plans,
          and competitive intelligence—drives your business value. That&apos;s what insiders target most.
          Build a mature insider threat program to protect what matters.
        </p>
        <div className="hero-section__cta">
          <a href="#contact" className="btn btn--light btn--large flex items-center justify-center mr-4">
            Schedule a Free Consultation
            <span className="btn__icon ml-2">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </span>
          </a>
          <a href="tel:5517510010" className="btn btn--outline-light btn--large flex items-center justify-center">
            <Phone size={20} className="mr-2" />
            551-751-0010
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
