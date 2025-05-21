"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Quote } from "lucide-react"

interface TestimonialItem {
  quote: string
  author: string
  position: string
  company: string
}

const TrainingTestimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonialItems: TestimonialItem[] = [
    {
      quote:
        "The cybersecurity awareness training provided by LeastTrust transformed how our team approaches security. The interactive format and real-world examples made complex concepts accessible to everyone.",
      author: "Michael Chen",
      position: "CTO",
      company: "TechInnovate Solutions",
    },
    {
      quote:
        "Their IP protection workshop gave us practical strategies we could implement immediately. The facilitators' Fortune 500 experience was evident in the quality and relevance of the content.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "Nexus Enterprises",
    },
    {
      quote:
        "The AI security brainstorming session helped us identify risks we hadn't considered and develop a comprehensive approach to securing our AI initiatives. Highly recommended for any organization implementing AI.",
      author: "David Rodriguez",
      position: "CISO",
      company: "DataFirst Analytics",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`training-testimonials-section ${isIntersecting ? "training-testimonials-section--visible" : ""}`}
    >
      <div className="training-testimonials-section__container">
        <h2 className="training-testimonials-section__title">What Our Clients Say</h2>
        <p className="training-testimonials-section__subtitle">
          Hear from organizations that have benefited from our training programs
        </p>

        <div className="training-testimonials-section__grid">
          {testimonialItems.map((item, index) => (
            <div
              key={index}
              className={`training-testimonial-card ${isIntersecting ? "training-testimonial-card--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="training-testimonial-card__quote-icon">
                <Quote size={40} />
              </div>
              <p className="training-testimonial-card__quote">{item.quote}</p>
              <div className="training-testimonial-card__author">
                <p className="training-testimonial-card__author-name">{item.author}</p>
                <p className="training-testimonial-card__author-position">
                  {item.position}, {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingTestimonials
