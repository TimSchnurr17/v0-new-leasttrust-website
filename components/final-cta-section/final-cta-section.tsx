"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CalendarDays, Phone } from "lucide-react"

const FinalCTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<"call" | "calendar">("call")

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`final-cta-section ${isIntersecting ? "final-cta-section--visible" : ""}`}
    >
      <div className="final-cta-section__container">
        <h2 className="final-cta-section__title">Ready to Secure Your Data?</h2>
        <p className="final-cta-section__subtitle">
          Get in touch with our security experts to discuss your specific needs and how we can help protect your
          valuable assets.
        </p>

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <button
              style={{
                flex: 1,
                padding: "1rem 1.5rem",
                textAlign: "center",
                fontWeight: 500,
                transition: "all 0.3s ease",
                backgroundColor: activeTab === "call" ? "#265e72" : "#f3f4f6",
                color: activeTab === "call" ? "#ffffff" : "#4b5563",
                borderTop: "none",
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "1px solid",
                borderRightColor: activeTab === "call" ? "#265e72" : "#d1d5db",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => setActiveTab("call")}
              onMouseEnter={(e) => {
                if (activeTab !== "call") {
                  e.currentTarget.style.backgroundColor = "#e5e7eb"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "call") {
                  e.currentTarget.style.backgroundColor = "#f3f4f6"
                }
              }}
            >
              Give us a Call
            </button>
            <button
              style={{
                flex: 1,
                padding: "1rem 1.5rem",
                textAlign: "center",
                fontWeight: 500,
                transition: "all 0.3s ease",
                backgroundColor: activeTab === "calendar" ? "#265e72" : "#f3f4f6",
                color: activeTab === "calendar" ? "#ffffff" : "#4b5563",
                borderTop: "none",
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => setActiveTab("calendar")}
              onMouseEnter={(e) => {
                if (activeTab !== "calendar") {
                  e.currentTarget.style.backgroundColor = "#e5e7eb"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "calendar") {
                  e.currentTarget.style.backgroundColor = "#f3f4f6"
                }
              }}
            >
              Schedule a Call
            </button>
          </div>

          <div style={{ padding: "1.5rem" }}>
            {activeTab === "call" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "rgba(38, 94, 114, 0.1)",
                    borderRadius: "9999px",
                  }}
                >
                  <Phone size={40} style={{ color: "#265e72" }} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#1f2937" }}>
                  Call Us Directly
                </h3>
                <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                  Speak with our security experts immediately during business hours.
                </p>
                <a
                  href="tel:5517510010"
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    color: "#265e72",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none"
                  }}
                >
                  <Phone size={24} style={{ marginRight: "0.5rem" }} />
                  551-751-0010
                </a>
                <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "#9ca3af" }}>
                  Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
                </p>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "rgba(38, 94, 114, 0.1)",
                    borderRadius: "9999px",
                  }}
                >
                  <CalendarDays size={40} style={{ color: "#265e72" }} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#1f2937" }}>
                  Schedule a Call
                </h3>
                <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                  Choose a convenient time for a call with our security experts.
                </p>
                <a
                  href="https://calendar.app.google/53yGP58pPZiY8XEN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#265e72",
                    color: "#ffffff",
                    borderRadius: "0.375rem",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a4352"
                    e.currentTarget.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#265e72"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <CalendarDays size={20} style={{ marginRight: "0.5rem" }} />
                  Open Calendar
                </a>
                <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#9ca3af" }}>
                  You'll be redirected to our scheduling page to select a time that works for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
