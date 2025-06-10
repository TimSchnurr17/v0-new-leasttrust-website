import CyberInsuranceHero from "@/components/cyber-insurance-hero/cyber-insurance-hero"
import CyberInsuranceOverview from "@/components/cyber-insurance-overview/cyber-insurance-overview"
import BusinessFocusedApproach from "@/components/business-focused-approach/business-focused-approach"
import InsuranceBenefits from "@/components/insurance-benefits/insurance-benefits"
import CyberInsuranceProcess from "@/components/cyber-insurance-process/cyber-insurance-process"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function CyberInsuranceReadinessPage() {
  return (
    <div className="cyber-insurance-readiness-page">
      <CyberInsuranceHero />
      <CyberInsuranceOverview />
      <BusinessFocusedApproach />
      <InsuranceBenefits />
      <CyberInsuranceProcess />
      <FinalCTASection />
    </div>
  )
}
