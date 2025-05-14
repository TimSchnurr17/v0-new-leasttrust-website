import type React from "react"
import Logo from "../logo/logo"
import { Linkedin, Mail, Hexagon } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__column footer__column--brand">
            <Logo variant="white" />
            <p className="footer__tagline italic">Guardians of Your Crown Jewels</p>
            <address className="footer__address">
              Financial District
              <br />
              New York, NY 10001
            </address>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Data Protection
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Insider Threat Programs
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  AI Integrations
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Security Advisory
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="https://leasttrust.com/our-story/" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Team
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Connect</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a
                  href="https://www.linkedin.com/company/98534281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--social"
                >
                  <span className="footer__social-icon">
                    <Linkedin size={16} />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link footer__link--social">
                  <span className="footer__social-icon">
                    <Mail size={16} />
                  </span>
                  Email Newsletter
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link footer__link--social">
                  <span className="footer__social-icon">
                    <Hexagon size={16} />
                  </span>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 LeastTrust. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__legal-link">
              Terms of Service
            </a>
            <a href="#" className="footer__legal-link">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
