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
    <section
      ref={sectionRef}
      className={`insider-threat-resources-section ${isIntersecting ? "insider-threat-resources-section--visible" : ""}`}
    >
      <div className="insider-threat-resources-section__container">
        <div className="insider-threat-resources-section__header">
          <h2 className="insider-threat-resources-section__title">Resources & Insights</h2>
          <p className="insider-threat-resources-section__subtitle">
            Explore our collection of articles and resources on insider threat protection and trade secret management.
          </p>
        </div>

        <div className="insider-threat-resources-section__featured">
          <div className="insider-threat-resources-section__featured-image">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop"
              alt="Trade secret protection"
              width={600}
              height={400}
              className="insider-threat-resources-section__image"
            />
          </div>
          <div className="insider-threat-resources-section__featured-content">
            <h3 className="insider-threat-resources-section__featured-title">
              Safeguarding Your Business's Crown Jewels: Why Trade Secret Protection Matters
            </h3>
            <p className="insider-threat-resources-section__featured-excerpt">
              In today's hypercompetitive marketplace, small businesses often overlook their most valuable assets: their
              trade secrets. Yes! Every organization, including non-profits have trade secrets. These proprietary data
              assets - the "crown jewels" of your operation - can make the difference between thriving and merely
              surviving.
            </p>
            <a
              href="https://www.linkedin.com/pulse/safeguarding-your-businesss-crown-jewels-why-trade-secret-tim-schnurr-gtt4e/"
              target="_blank"
              rel="noopener noreferrer"
              className="insider-threat-resources-section__featured-link"
            >
              Read the full article on LinkedIn <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="insider-threat-resources-section__grid">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`resource-card ${isIntersecting ? "resource-card--visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="resource-card__icon">{resource.icon}</div>
              <h3 className="resource-card__title">{resource.title}</h3>
              <p className="resource-card__description">{resource.description}</p>
              <p className="resource-card__source">{resource.source}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-card__link">
                Read More <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsiderThreatResources
