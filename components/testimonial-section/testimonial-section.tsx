"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { TestimonialItem } from "@/types"
import { Quote } from "lucide-react"
import Image from "next/image"

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const testimonialItems: TestimonialItem[] = [
    {
      quote:
        "The team at LeastTrust provided us with a comprehensive security assessment that revealed critical gaps we weren't aware of. Their remediation plan was practical and effective.",
      author: "Jennifer Williams",
      position: "VP of Operations",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
    },
    {
      quote:
        "Working with LeastTrust transformed our approach to data security. Their tailored solutions and ongoing support have been instrumental in protecting our sensitive information.",
      author: "Robert Garcia",
      position: "CEO",
      company: "Innovative Startups LLC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
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
                <div className="testimonial-card__author-image">
                  <Image
                    src={item.image || ""}
                    alt={item.author}
                    width={60}
                    height={60}
                    className="testimonial-card__image"
                  />
                </div>
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
