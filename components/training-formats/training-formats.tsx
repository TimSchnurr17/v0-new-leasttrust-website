"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Video, Users, Lightbulb, Layout, Shield, BookOpen } from "lucide-react"

const TrainingFormats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const formatItems = [
    {
      icon: <Video size={48} />,
      title: "Webinars",
      description:
        "Interactive online sessions that allow your team to learn from anywhere while engaging with our security experts in real-time.",
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Brainstorming Sessions",
      description:
        "Collaborative problem-solving workshops where we tackle your specific security challenges and develop innovative solutions.",
    },
    {
      icon: <Layout size={48} />,
      title: "Whiteboard & Lab Strategy Sessions",
      description:
        "Hands-on sessions that combine theoretical concepts with practical application to develop actionable security strategies.",
    },
    {
      icon: <Shield size={48} />,
      title: "IP & Data Protection Training",
      description:
        "Specialized training focused on safeguarding your organization's intellectual property and sensitive data from threats.",
    },
    {
      icon: <Users size={48} />,
      title: "Cyber Awareness Workshops",
      description:
        "Engaging workshops designed to build a security-conscious culture and empower employees to recognize and respond to threats.",
    },
    {
      icon: <BookOpen size={48} />,
      title: "Custom Training Programs",
      description:
        "Tailored training solutions designed specifically for your organization's unique security needs and challenges.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Training Formats</h2>
        <p className="value-prop-section__subtitle">
          We offer a variety of engaging training formats to meet your team's learning preferences and objectives
        </p>
        <div className="value-prop-section__grid">
          {formatItems.map((item, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon">{item.icon}</div>
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
            Backed by Real-World Experience
          </h3>
          <p>
            Leverage our consulting, startup, and Fortune 500 experience in leading productive and critical sessions for
            your team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrainingFormats
