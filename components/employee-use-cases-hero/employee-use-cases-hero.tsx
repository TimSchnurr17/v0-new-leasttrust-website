"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const EmployeeUseCasesHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`employee-use-cases-hero-section ${isIntersecting ? "employee-use-cases-hero-section--visible" : ""}`}
    >
      <div className="employee-use-cases-hero-section__background">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
          alt="Team collaboration and use cases"
          fill
          priority
          className="employee-use-cases-hero-section__background-image"
        />
        <div className="employee-use-cases-hero-section__overlay"></div>
      </div>
      <div className="employee-use-cases-hero-section__container">
        <h1 className="employee-use-cases-hero-section__title">Previous Engagments</h1>
        <p className="employee-use-cases-hero-section__subtitle">
          Real-world scenarios demonstrating how organizations across industries implement comprehensive insider threat
          protection programs
        </p>
      </div>
    </section>
  )
}

export default EmployeeUseCasesHero
