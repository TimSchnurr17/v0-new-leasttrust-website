import SOC2Hero from "@/components/soc2-hero/soc2-hero"
import SOC2Overview from "@/components/soc2-overview/soc2-overview"
import ComplianceBenefits from "@/components/compliance-benefits/compliance-benefits"
import SOC2Process from "@/components/soc2-process/soc2-process"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function SOC2CyberInsurancePage() {
  return (
    <div className="soc2-cyber-insurance-page">
      <SOC2Hero />
      <SOC2Overview />
      <ComplianceBenefits />
      <SOC2Process />
      <FinalCTASection />
    </div>
  )
}
