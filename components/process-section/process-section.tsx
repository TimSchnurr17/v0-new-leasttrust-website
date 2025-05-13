"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ProcessStep } from "@/types"
import Image from "next/image"

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Assessment",
      description:
        "We conduct a comprehensive assessment of your current security posture and identify vulnerabilities.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Based on our findings, we develop a tailored strategy to address your specific security needs.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
    },
    {
      number: 3,
      title: "Implementation",
      description: "We implement the recommended security measures and provide training to your team.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
    },
    {
      number: 4,
      title: "Ongoing Support",
      description: "We provide continuous monitoring and support to ensure your security measures remain effective.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`process-section ${isIntersecting ? "process-section--visible" : ""}`}
    >
      <div className="process-section__container">
        <h2 className="process-section__title">Our Process</h2>
        <p className="process-section__subtitle">A systematic approach to securing your valuable data</p>

        <div className="process-section__steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="process-card__image-container">
                <Image
                  src={step.image || ""}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="process-card__image"
                />
                <div className="process-card__number">{step.number}</div>
              </div>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
