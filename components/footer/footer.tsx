"use client"

import type React from "react"
import Logo from "../logo/logo"
import { Linkedin, Mail, Hexagon, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-navy-950 pt-20 lg:pt-24 pb-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-20" />

      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{ background: "rgba(212, 168, 83, 0.03)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-slate-400 leading-relaxed max-w-sm">
              Insider Threat Advisory. Protecting the proprietary data
              that drives your competitive advantage.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:5517510010"
                className="flex items-center gap-3 text-slate-300 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                551-751-0010
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Financial District
                  <br />
                  New York, NY
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2 mt-8 px-6 py-3
                bg-gradient-gold text-navy-900 text-sm font-medium
                rounded shadow-gold-glow
                transition-all duration-300 ease-out
                hover:shadow-gold-glow-lg hover:-translate-y-0.5
                group
              "
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Services */}
              <div>
                <h4 className="label-caps text-ivory-100 mb-6">Services</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/insider-threat"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      Insider Threat Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/data-protection"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      Proprietary Data Protection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/insider-platform"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      Insider Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="/group-training"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      IP Awareness Training
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="label-caps text-ivory-100 mb-6">Company</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/about"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/previous-engagements"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-200 link-elegant"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="label-caps text-ivory-100 mb-6">Connect</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/98534281/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.datatheftnews.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.datatheftnews.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      <Hexagon className="w-4 h-4" />
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2025 LeastTrust. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/98534281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
