"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

interface PartnerLogo {
  name: string
  src: string
  width: number
  height: number
}

const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const partnerLogos: PartnerLogo[] = [
    {
      name: "Uno.ai",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uno%20logo-EFKPANaE2MxUdp2RnLfcV1xac1DqdR.webp",
      width: 240,
      height: 80,
    },
    {
      name: "Harmonic",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harmonic-BlelNaQurbDYg6UmhRSIBQkoU1ErO6.png",
      width: 240,
      height: 80,
    },
    {
      name: "DefensX",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/defensx-hq5qUIROw5GwBjBahsrd7iyFswnRur.webp",
      width: 240,
      height: 80,
    },
    {
      name: "Echomark",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/echomark-Owo87Piv706jAArT08jmCCb9YapICM.webp",
      width: 240,
      height: 80,
    },
    {
      name: "Cavelo",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cavelo.jpg-lXqhRCWLszGg96ypF0xtpD4rzq0wRT.jpeg",
      width: 240,
      height: 80,
    },
    {
      name: "Microsoft Purview",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Purview_Logo.svg-qUrXFKYSev8nC1AzLucBp0ZD3ADkoR.png",
      width: 120,
      height: 120,
    },
    {
      name: "Senteon",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/senteon-Owm3DCpO212uBorl3ygeLv8SXfp80k.png",
      width: 240,
      height: 80,
    },
    {
      name: "Yubico",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yubico.jpg-xWtQDrlExo9rDwxoCbxvWDpSs5qvNT.jpeg",
      width: 120,
      height: 120,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="partners"
      className={`partners-section ${isIntersecting ? "partners-section--visible" : ""}`}
    >
      <div className="partners-section__container">
        <h2 className="partners-section__title">Our Partners</h2>
        <p className="partners-section__subtitle">
          We collaborate with industry leaders to provide comprehensive security solutions
        </p>

        <div className="partners-section__grid">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="partner-logo" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="partner-logo__container">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="partner-logo__image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
