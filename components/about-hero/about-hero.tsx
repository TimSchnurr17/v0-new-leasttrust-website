"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const AboutHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className={`about-hero-section ${isIntersecting ? "about-hero-section--visible" : ""}`}>
      <div className="about-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop"
          alt="Security concept"
          fill
          priority
          className="about-hero-section__background-image"
        />
        <div className="about-hero-section__overlay"></div>
      </div>
      <div className="about-hero-section__container">
        <h1 className="about-hero-section__title">Our Story</h1>
        <p className="about-hero-section__subtitle">
          At LeastTrust, we're dedicated to protecting your organization's most valuable assets through innovative
          security solutions and expert guidance.
        </p>
        <div className="about-hero-section__content">
          <p className="about-hero-section__text">
            Founded by security experts with decades of experience, LeastTrust was born from a simple observation: most
            organizations struggle to effectively protect their data from insider threats and sophisticated attacks.
          </p>
          <p className="about-hero-section__text">
            Our mission is to provide comprehensive security solutions that address the unique challenges faced by
            businesses today. We combine cutting-edge technology with practical expertise to deliver results that
            matter.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
