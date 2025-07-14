"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  credentials: string
  position: string
  bio: string
  image: string
  linkedin: string
}

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const teamMembers: TeamMember[] = [
    {
      name: "Tim Schnurr",
      credentials: "CISM, CRISC, PSM, CFA",
      position: "Managing Partner",
      bio: "Tim brings over 20 years of experience in cybersecurity and risk management. Tim has expertise in developing comprehensive security and complaince strategies in Fortune 500 and mid-sized organizations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tim%20Schnurr%20Headshot-ImfDu2xMf8va5lbcd1Wu0jrDfmf0WJ.png",
      linkedin: "https://www.linkedin.com/in/timschnurr/",
    },
    {
      name: "John Pryor",
      credentials: "IAM 300",
      position: "Global IP Lead",
      bio: "With a background in intellectual property strategy, John specializes in developing insider threat programs and data protection programs that align with business objectives while maintaining robust security postures.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/John%20Pryor%20Headshot-eeHy0nm9VebQDxGx2TcmfQDyr5zeww.png",
      linkedin: "https://www.linkedin.com/in/john-pryor-gb/",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Our Leadership Team</h2>
        <p className="value-prop-section__subtitle">
          Meet the experts behind LeastTrust's innovative security solutions
        </p>

        <div className="value-prop-section__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card__image-container">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} headshot`}
                  width={400}
                  height={225}
                  className="service-card__image"
                />
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  {member.name}
                  {member.credentials && <span>, {member.credentials}</span>}
                </h3>
                <p className="service-card__text" style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  {member.position}
                </p>
                <p className="service-card__text">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center" }}
                >
                  <Linkedin size={20} style={{ marginRight: "0.5rem" }} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <h3 className="value-prop-section__title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
            Our Values
          </h3>
          <div className="value-prop-section__grid">
            <div className="service-card">
              <div className="service-card__content">
                <h4 className="service-card__title">Integrity</h4>
                <p className="service-card__text">
                  We operate with the highest transparency and strive to identify conflicts of interest.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__content">
                <h4 className="service-card__title">Innovation</h4>
                <p className="service-card__text">
                  We continuously explore new technologies partners to stay ahead of evolving security threats.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__content">
                <h4 className="service-card__title">Excellence</h4>
                <p className="service-card__text">
                  We are committed to delivering exceptional results and focusing on our core strengths.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__content">
                <h4 className="service-card__title">Trust</h4>
                <p className="service-card__text">
                  We build lasting relationships with our clients, working together to achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
