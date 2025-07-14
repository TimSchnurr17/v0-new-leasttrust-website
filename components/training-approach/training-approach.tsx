"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Target, Users, BarChart, MessageSquare } from "lucide-react"

const TrainingApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const approachSteps = [
    {
      icon: <Target size={48} />,
      title: "Needs Assessment",
      description:
        "We begin by understanding your organization's specific security challenges, knowledge gaps, and training objectives.",
    },
    {
      icon: <Users size={48} />,
      title: "Customized Content",
      description:
        "Our experts develop tailored training materials that address your unique needs and align with your industry context.",
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Interactive Delivery",
      description:
        "We employ engaging, participatory training methods that encourage discussion, questions, and practical application.",
    },
    {
      icon: <BarChart size={48} />,
      title: "Measurement & Follow-up",
      description:
        "We assess training effectiveness, provide resources for continued learning, and offer follow-up support as needed.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Our Training Approach</h2>
        <p className="value-prop-section__subtitle">
          We believe effective security training must be engaging, relevant, and actionable. Our approach combines
          expert knowledge with interactive learning methods to deliver training that drives real behavioral change and
          security improvements.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                alt="Collaborative team training session"
                width={400}
                height={225}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <div className="value-prop-section__grid">
                {approachSteps.map((step, index) => (
                  <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="service-card__content">
                      <div className="service-card__icon">{step.icon}</div>
                      <h3 className="service-card__title">{step.title}</h3>
                      <p className="service-card__text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingApproach
