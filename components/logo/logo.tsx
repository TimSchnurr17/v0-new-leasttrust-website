import type React from "react"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "white" | "small"
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  return (
    <a href="/" className={`logo logo--${variant}`} aria-label="LeastTrust Homepage">
      <div className={`logo__container ${variant === "white" ? "logo__container--transparent" : ""}`}>
        <Image src="/images/logo.png" alt="LeastTrust Logo" width={180} height={50} className="logo__image" priority />
      </div>
    </a>
  )
}

export default Logo
