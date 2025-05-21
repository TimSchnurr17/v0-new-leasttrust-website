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
    <section ref={sectionRef} id="team" className={`team-section ${isIntersecting ? "team-section--visible" : ""}`}>
      <div className="team-section__container">
        <h2 className="team-section__title">Our Leadership Team</h2>
        <p className="team-section__subtitle">Meet the experts behind LeastTrust's innovative security solutions</p>

        <div className="team-section__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="team-card__image-container">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} headshot`}
                  width={300}
                  height={300}
                  className="team-card__image"
                />
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">
                  {member.name}
                  {member.credentials && <span className="team-card__credentials">, {member.credentials}</span>}
                </h3>
                <p className="team-card__position">{member.position}</p>
                <p className="team-card__bio">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card__linkedin-button"
                >
                  <Linkedin size={20} className="team-card__linkedin-icon" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-section__values">
          <h3 className="team-section__values-title">Our Values</h3>
          <div className="team-section__values-grid">
            <div className="value-card">
              <h4 className="value-card__title">Integrity</h4>
              <p className="value-card__text">
                We operate with the highest ethical standards and transparency in all our client relationships.
              </p>
            </div>
            <div className="value-card">
              <h4 className="value-card__title">Innovation</h4>
              <p className="value-card__text">
                We continuously explore new technologies and approaches to stay ahead of evolving security threats.
              </p>
            </div>
            <div className="value-card">
              <h4 className="value-card__title">Excellence</h4>
              <p className="value-card__text">
                We are committed to delivering exceptional results and exceeding client expectations.
              </p>
            </div>
            <div className="value-card">
              <h4 className="value-card__title">Partnership</h4>
              <p className="value-card__text">
                We build lasting relationships with our clients, working together to achieve their security goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
