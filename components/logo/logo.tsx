import type React from "react"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "white" | "small" | "light" | "dark"
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  // Light variant shows inverted/white logo for dark backgrounds
  // Dark variant shows standard logo for light backgrounds
  const isLightVariant = variant === "light" || variant === "white"

  return (
    <a
      href="/"
      className="block transition-opacity duration-300 hover:opacity-80"
      aria-label="LeastTrust Homepage"
    >
      <Image
        src="/images/logo.png"
        alt="LeastTrust"
        width={160}
        height={44}
        className={`
          h-10 w-auto object-contain
          ${isLightVariant ? "brightness-0 invert" : ""}
        `}
        priority
      />
    </a>
  )
}

export default Logo
