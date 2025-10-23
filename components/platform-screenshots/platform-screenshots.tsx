import type React from "react"
import Image from "next/image"

const PlatformScreenshots: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Service Cards</h2>
        <div>
          <h3>First Service Card</h3>
          <Image
            src="https://example.com/first-service-card.png"
            alt="First service card screenshot"
            width={500}
            height={300}
          />
        </div>
        <div>
          <h3>Questionnaire & Assessment Tools</h3>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-23%20at%205.21.26%E2%80%AFPM-plpPLYWFcAutF6lyhI0Yqw3lV7OStz.png"
            alt="Platform interface showing detailed maturity assessment with Tier 3 adaptive level, observations, and analysis conclusions"
            width={500}
            height={300}
          />
        </div>
        {/* rest of code here */}
      </div>
    </div>
  )
}

export default PlatformScreenshots
