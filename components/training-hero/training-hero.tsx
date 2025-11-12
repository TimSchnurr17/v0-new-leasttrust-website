"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

const TrainingHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`training-hero-section ${isIntersecting ? "training-hero-section--visible" : ""}`}
    >
      <div className="training-hero-section__background">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%203.48.26%E2%80%AFPM-7F47oZsEqGA2ihpCUyUSjcaWic2xFb.png"
          alt="Interactive training session with engaged participants"
          fill
          priority
          className="training-hero-section__background-image"
        />
        <div className="training-hero-section__overlay"></div>
      </div>
      <div className="training-hero-section__container">
        <h1 className="training-hero-section__title">IP Awareness & Insider Threat Training</h1>
        <p className="training-hero-section__subtitle">
          Transform employees from your biggest insider risk to your first line of defense. Train your team to
          recognize, protect, and report on proprietary data and trade secrets—not just general security.
        </p>
      </div>
    </section>
  )
}

export default TrainingHero
