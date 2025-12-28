"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { NavItem } from "@/types"
import Logo from "../logo/logo"
import { Phone, ChevronDown, ArrowRight } from "lucide-react"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // Main navigation items - focused on insider threat
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#",
      subItems: [
        { label: "Insider Threat & Trade Secrets", href: "/insider-threat" },
        { label: "Proprietary Data Protection", href: "/data-protection" },
        { label: "IP Awareness Training", href: "/group-training" },
      ],
    },
    { label: "Platform", href: "/insider-platform" },
    { label: "Case Studies", href: "/previous-engagements" },
    { label: "About", href: "/about" },
  ]

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${isScrolled
          ? "bg-ivory-50/95 backdrop-blur-lg shadow-premium-md py-3"
          : "bg-transparent py-5"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-10">
          <Logo variant={isScrolled ? "dark" : "light"} />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className={`
                  flex items-center gap-1 px-4 py-2 text-sm font-medium
                  transition-colors duration-300
                  ${isScrolled ? "text-slate-700 hover:text-gold-500" : "text-ivory-100 hover:text-gold-400"}
                `}
                onClick={item.subItems ? (e) => e.preventDefault() : undefined}
              >
                {item.label}
                {item.subItems && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </a>

              {/* Dropdown with premium styling */}
              {item.subItems && (
                <div
                  className="
                    absolute top-full left-0 pt-4
                    opacity-0 invisible translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  "
                >
                  <div
                    className="
                      bg-ivory-50 rounded shadow-premium-xl
                      border border-slate-200/50
                      min-w-[260px] py-2 overflow-hidden
                    "
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="
                          block px-5 py-3.5 text-sm text-slate-600
                          hover:bg-navy-900 hover:text-ivory-50
                          transition-colors duration-200
                        "
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:5517510010"
            className={`
              flex items-center gap-2 text-sm font-medium
              transition-colors duration-300
              ${isScrolled ? "text-slate-600 hover:text-gold-500" : "text-ivory-200 hover:text-gold-400"}
            `}
          >
            <Phone className="w-4 h-4" />
            551-751-0010
          </a>
          <a
            href="#contact"
            className="
              group inline-flex items-center gap-2 px-6 py-3
              bg-gradient-gold text-navy-900 text-sm font-medium
              rounded shadow-gold-glow
              transition-all duration-300 ease-out
              hover:shadow-gold-glow-lg hover:-translate-y-0.5
            "
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden relative z-10 p-2"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`
                block w-full h-0.5 rounded-full transition-all duration-300
                ${isScrolled ? "bg-navy-900" : "bg-ivory-50"}
                ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />
            <span
              className={`
                block w-full h-0.5 rounded-full transition-all duration-300
                ${isScrolled ? "bg-navy-900" : "bg-ivory-50"}
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`
                block w-full h-0.5 rounded-full transition-all duration-300
                ${isScrolled ? "bg-navy-900" : "bg-ivory-50"}
                ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />
          </div>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`
          lg:hidden fixed top-[72px] left-0 right-0 bottom-0
          bg-navy-900/98 backdrop-blur-lg
          transform transition-transform duration-500 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-full overflow-y-auto py-8 px-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="
                    block py-4 text-lg font-medium text-ivory-100
                    border-b border-ivory-100/10
                    hover:text-gold-400 transition-colors duration-200
                  "
                  onClick={item.subItems ? (e) => e.preventDefault() : () => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>

                {item.subItems && (
                  <ul className="pl-4 py-2 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="
                            block py-3 text-base text-slate-400
                            hover:text-gold-400 transition-colors duration-200
                          "
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="mt-8 pt-8 border-t border-ivory-100/10 space-y-4">
            <a
              href="tel:5517510010"
              className="
                flex items-center justify-center gap-2 w-full py-4
                text-ivory-100 text-base font-medium
                border border-ivory-100/20 rounded
                hover:bg-ivory-100/5 transition-colors duration-200
              "
            >
              <Phone className="w-5 h-5" />
              551-751-0010
            </a>
            <a
              href="#contact"
              className="
                flex items-center justify-center gap-2 w-full py-4
                bg-gradient-gold text-navy-900 text-base font-medium
                rounded shadow-gold-glow
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
