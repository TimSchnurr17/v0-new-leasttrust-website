"use client"

import type React from "react"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import {
  Users,
  Shield,
  Calendar,
  FileText,
  Database,
  Network,
  FolderOpen,
  CheckCircle,
  UserCheck,
  BarChart3,
  Lock,
  Handshake,
} from "lucide-react"

const PlatformCapabilities: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  const capabilities = [
    {
      icon: <Users size={48} />,
      title: "Multi-Tenancy",
      description: "Support multiple organizations and departments with isolated, secure environments.",
    },
    {
      icon: <Lock size={48} />,
      title: "RBAC (Role-Based Access Controls)",
      description: "Granular permission management ensuring users only access what they need.",
    },
    {
      icon: <Calendar size={48} />,
      title: "Advanced Scheduling",
      description: "Automated scheduling for assessments, reviews, and compliance activities.",
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Maturity Assessment Questionnaires",
      description: "AI-powered questionnaires with LLM contextual scoring for accurate maturity evaluation.",
    },
    {
      icon: <Network size={48} />,
      title: "Cyber Framework Crosswalks",
      description: "Map and align with multiple cybersecurity frameworks including NIST, ISO, and CMMI.",
    },
    {
      icon: <Database size={48} />,
      title: "Asset Inventory Modules",
      description: "Comprehensive tracking and management of digital and physical assets.",
    },
    {
      icon: <Handshake size={48} />,
      title: "Partnership Coordination",
      description: "Streamlined collaboration tools for managing vendor and partner relationships.",
    },
    {
      icon: <FolderOpen size={48} />,
      title: "Secure Data Rooms",
      description: "Protected environments for sensitive document sharing and collaboration.",
    },
    {
      icon: <Shield size={48} />,
      title: "TPRM (Third Party Risk) Reviews",
      description: "Automated third-party risk management and vendor assessment capabilities.",
    },
    {
      icon: <FileText size={48} />,
      title: "Document Lifecycle Management",
      description: "Complete document version control, approval workflows, and retention management.",
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Policy Lifecycle Approvals",
      description: "Streamlined policy creation, review, approval, and maintenance processes.",
    },
    {
      icon: <UserCheck size={48} />,
      title: "Auditor Access Controls",
      description: "Secure, controlled access for external auditors with comprehensive audit trails.",
    },
  ]

  return (
    <section ref={sectionRef} className={`value-prop-section ${isIntersecting ? "value-prop-section--visible" : ""}`}>
      <div className="value-prop-section__container">
        <h2 className="value-prop-section__title">Platform Capabilities</h2>
        <p className="value-prop-section__subtitle">
          Comprehensive features designed to streamline your insider threat program management
        </p>

        <div className="value-prop-section__grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__content">
                <div className="service-card__icon">{capability.icon}</div>
                <h3 className="service-card__title">{capability.title}</h3>
                <p className="service-card__text">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformCapabilities
