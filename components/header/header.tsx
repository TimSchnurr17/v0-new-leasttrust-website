"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { NavItem } from "@/types"
import Logo from "../logo/logo"
import { Phone } from "lucide-react"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // Main navigation items
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#",
      subItems: [
        { label: "Data Protection Services", href: "/data-protection" },
        { label: "Insider Threat / Trade Secrets", href: "/insider-threat" },
        { label: "Cyber Insurance Readiness", href: "/cyber-insurance-readiness" },
        { label: "SOC2 and Cyber Insurance Readiness", href: "/soc2-cyber-insurance" },
        { label: "Corporate Training", href: "/group-training" },
        { label: "Previous Engagements", href: "/previous-engagements" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ]

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className="header__nav desktop-nav">
          <ul className="desktop-nav__list">
            {navItems.map((item, index) => (
              <li key={index} className={`desktop-nav__item ${item.subItems ? "has-dropdown" : ""}`}>
                <a
                  href={item.href}
                  className="desktop-nav__link"
                  onClick={item.subItems ? (e) => e.preventDefault() : undefined}
                >
                  {item.label}
                  {item.subItems && (
                    <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M7 10l5 5 5-5z" />
                    </svg>
                  )}
                </a>

                {item.subItems && (
                  <ul className="dropdown-menu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-menu__item">
                        <a href={subItem.href} className="dropdown-menu__link">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to action button */}
        <div className="header__cta">
          <a href="tel:5517510010" className="btn btn--primary flex items-center">
            <Phone size={16} className="mr-2" />
            551-751-0010
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="header__menu-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? "mobile-nav--active" : ""}`}>
        <ul className="mobile-nav__list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav__item">
              <a href={item.href} className="mobile-nav__link">
                {item.label}
              </a>

              {item.subItems && (
                <ul className="mobile-submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="mobile-submenu__item">
                      <a href={subItem.href} className="mobile-submenu__link">
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-nav__cta">
          <a href="tel:5517510010" className="btn btn--primary btn--full flex items-center justify-center">
            <Phone size={16} className="mr-2" />
            551-751-0010
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
