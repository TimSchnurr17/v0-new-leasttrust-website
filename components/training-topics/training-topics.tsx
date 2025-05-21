"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CheckCircle } from "lucide-react"

interface TopicItem {
  title: string
  description: string
}

const TrainingTopics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const topicItems: TopicItem[] = [
    {
      title: "Innovation vs Cybersecurity",
      description:
        "Explore the balance between fostering innovation and maintaining robust security measures in your organization.",
    },
    {
      title: "AI: Walk, Crawl, Run",
      description:
        "A practical framework for implementing AI technologies while ensuring appropriate security controls at each stage.",
    },
    {
      title: "Insider Controls Change Management",
      description:
        "Strategies for implementing and managing insider threat controls while minimizing disruption to business operations.",
    },
    {
      title: "Achieving Tolerable Friction in a Cybersecurity Program",
      description:
        "Finding the right balance between security measures and user experience to ensure both protection and productivity.",
    },
    {
      title: "IP Strategies for Your Company",
      description:
        "Developing comprehensive intellectual property protection strategies tailored to your organization's specific needs.",
    },
    {
      title: "Building a Security-Conscious Culture",
      description:
        "Practical approaches to fostering a culture where security awareness is integrated into everyday operations.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`training-topics-section ${isIntersecting ? "training-topics-section--visible" : ""}`}
    >
      <div className="training-topics-section__container">
        <h2 className="training-topics-section__title">Popular Training Topics</h2>
        <p className="training-topics-section__subtitle">
          Our expert-led sessions cover a wide range of relevant security topics to address your organization's needs
        </p>

        <div className="training-topics-section__grid">
          {topicItems.map((item, index) => (
            <div
              key={index}
              className={`topic-card ${isIntersecting ? "topic-card--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="topic-card__icon">
                <CheckCircle size={24} />
              </div>
              <div className="topic-card__content">
                <h3 className="topic-card__title">{item.title}</h3>
                <p className="topic-card__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="training-topics-section__custom">
          <h3 className="training-topics-section__custom-title">Need a Custom Topic?</h3>
          <p className="training-topics-section__custom-text">
            We can develop tailored training content to address your organization's specific security challenges and
            objectives.
          </p>
          <a href="#contact" className="btn btn--primary training-topics-section__custom-button">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrainingTopics
