"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Target, Users, BarChart, MessageSquare } from "lucide-react"

interface ApproachStep {
  icon: React.ReactNode
  title: string
  description: string
}

const TrainingApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const approachSteps: ApproachStep[] = [
    {
      icon: <Target size={40} />,
      title: "Needs Assessment",
      description:
        "We begin by understanding your organization's specific security challenges, knowledge gaps, and training objectives.",
    },
    {
      icon: <Users size={40} />,
      title: "Customized Content",
      description:
        "Our experts develop tailored training materials that address your unique needs and align with your industry context.",
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Interactive Delivery",
      description:
        "We employ engaging, participatory training methods that encourage discussion, questions, and practical application.",
    },
    {
      icon: <BarChart size={40} />,
      title: "Measurement & Follow-up",
      description:
        "We assess training effectiveness, provide resources for continued learning, and offer follow-up support as needed.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`training-approach-section ${isIntersecting ? "training-approach-section--visible" : ""}`}
    >
      <div className="training-approach-section__container">
        <div className="training-approach-section__content">
          <div className="training-approach-section__text">
            <h2 className="training-approach-section__title">Our Training Approach</h2>
            <p className="training-approach-section__description">
              We believe effective security training must be engaging, relevant, and actionable. Our approach combines
              expert knowledge with interactive learning methods to deliver training that drives real behavioral change
              and security improvements.
            </p>

            <div className="training-approach-section__steps">
              {approachSteps.map((step, index) => (
                <div
                  key={index}
                  className={`approach-step ${isIntersecting ? "approach-step--visible" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="approach-step__icon">{step.icon}</div>
                  <div className="approach-step__content">
                    <h3 className="approach-step__title">{step.title}</h3>
                    <p className="approach-step__description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="training-approach-section__image-container">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
              alt="Collaborative team training session"
              width={600}
              height={400}
              className="training-approach-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingApproach
