"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { TestimonialItem } from "@/types"
import { Quote } from "lucide-react"

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonialItems: TestimonialItem[] = [
    {
      quote:
        "The team at LeastTrust provided us with a comprehensive security assessment that revealed critical gaps we weren't aware of. Their remediation plan was practical and effective.",
      author: "Jennifer Willams",
      position: "VP of Operations",
      company: "HealthBefore Partner",
      image: "",
    },
    {
      quote:
        "Working with LeastTrust transformed our approach to data security. Their tailored solutions and ongoing support have been instrumental in protecting our sensitive information.",
      author: "Robert L. Garcia",
      position: "CEO",
      company: "Innovating Disciplines LLC",
      image: "",
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
          {testimonialItems.map((item, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-card__quote-icon">
                <Quote size={40} />
              </div>
              <p className="testimonial-card__quote">{item.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__author-info">
                  <p className="testimonial-card__author-name">{item.author}</p>
                  <p className="testimonial-card__author-position">
                    {item.position}, {item.company}
                  </p>
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
