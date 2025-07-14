"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  position: string
}

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonials: Testimonial[] = [
    {
      quote:
        "The team at LeastTrust provided us with a comprehensive security assessment that revealed critical gaps we weren't aware of. Their remediation plan was practical, right-sized, and effective.",
      author: "Jennifer Willans",
      position: "VP of Operations, HealthBefore Partner",
    },
    {
      quote:
        "Working with LeastTrust transformed our approach and culture to data security. Their tailored solutions and ongoing support have been instrumental in protecting our sensitive information.",
      author: "Robert Garcia",
      position: "CEO, Innovating Disciplines",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`testimonial-section ${isIntersecting ? "testimonial-section--visible" : ""}`}
    >
      <div className="testimonial-section__container">
        <h2 className="testimonial-section__title">What Our Clients Say</h2>

        <div className="testimonial-section__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="testimonial-card__quote-icon">
                <Quote size={48} />
              </div>
              <blockquote className="testimonial-card__quote">{testimonial.quote}</blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__author-info">
                  <cite className="testimonial-card__author-name">{testimonial.author}</cite>
                  <p className="testimonial-card__author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
