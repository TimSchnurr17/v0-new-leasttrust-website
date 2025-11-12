"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { FileText, ExternalLink, Linkedin } from "lucide-react"

interface ResourceItem {
  title: string
  description: string
  link: string
  source: string
  icon: React.ReactNode
}

const InsiderThreatResources: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const resources: ResourceItem[] = [
    {
      title: "The Hidden Crisis: Why Insider Threat Statistics Fail to Capture Trade Secret Theft Reality",
      description:
        "Discover why traditional insider threat statistics dramatically underreport trade secret theft and what this means for your organization's security strategy.",
      link: "https://www.iam-media.com/trade-secrets/article/the-hidden-crisis-why-insider-threat-statistics-fail-capture-trade-secret-theft-reality",
      source: "IAM Media",
      icon: <FileText size={24} />,
    },
    {
      title: "Safeguarding Your Business's Crown Jewels: Why Trade Secret Protection Matters",
      description:
        "Learn why trade secrets are crucial for businesses of all sizes and how to protect these valuable assets from insider threats.",
      link: "https://www.linkedin.com/pulse/safeguarding-your-businesss-crown-jewels-why-trade-secret-tim-schnurr-gtt4e/",
      source: "LinkedIn Article by Tim Schnurr",
      icon: <Linkedin size={24} />,
    },
    {
      title: "The Proliferation of Trade Secret Litigation",
      description: "An analysis of the increasing trend in trade secret litigation and what it means for businesses.",
      link: "https://www.jdsupra.com/legalnews/the-proliferation-of-trade-secret-8547870/",
      source: "JD Supra",
      icon: <FileText size={24} />,
    },
    {
      title: "Companies Should Take Notice of the Extraterritorial Reach of U.S. Trade Secret Law",
      description:
        "Important insights on how U.S. trade secret laws can apply internationally and what this means for global businesses.",
      link: "https://www.tradesecretslawblog.com/2024/11/companies-should-take-notice-of-the-extraterritorial-reach-of-u-s-trade-secret-law/",
      source: "Trade Secrets Law Blog",
      icon: <FileText size={24} />,
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Resources & Insights</h2>
        <p className="value-prop-section__subtitle">
          Explore our collection of articles and resources on insider threat protection and trade secret management.
        </p>

        <div style={{ marginBottom: "3rem" }}>
          <div className="service-card">
            <div className="service-card__image-container">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop"
                alt="Trade secret protection"
                width={400}
                height={225}
                className="service-card__image"
              />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">
                Safeguarding Your Business's Crown Jewels: Why Trade Secret Protection Matters
              </h3>
              <p className="service-card__text">
                In today's hypercompetitive marketplace, small businesses often overlook their most valuable assets:
                their trade secrets. Yes! Every organization, including non-profits have trade secrets. These
                proprietary data assets - the "crown jewels" of your operation - can make the difference between
                thriving and merely surviving.
              </p>
              <a
                href="https://www.linkedin.com/pulse/safeguarding-your-businesss-crown-jewels-why-trade-secret-tim-schnurr-gtt4e/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center" }}
              >
                Read the full article on LinkedIn <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
              </a>
            </div>
          </div>
        </div>

        <div className="value-prop-section__grid">
          {resources.map((resource, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon">{resource.icon}</div>
                <h3 className="service-card__title">{resource.title}</h3>
                <p className="service-card__text">{resource.description}</p>
                <p className="service-card__text" style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  {resource.source}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  Read More <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatResources
