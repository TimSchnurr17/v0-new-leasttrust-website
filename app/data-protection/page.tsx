import DataProtectionHero from "@/components/data-protection-hero/data-protection-hero"
import DataProtectionOverview from "@/components/data-protection-overview/data-protection-overview"
import CyberEvolution from "@/components/cyber-evolution/cyber-evolution"
import DataCentricSecurity from "@/components/data-centric-security/data-centric-security"
import ImplementationSteps from "@/components/implementation-steps/implementation-steps"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function DataProtectionPage() {
  return (
    <div className="data-protection-page">
      <DataProtectionHero />
      <DataProtectionOverview />
      <CyberEvolution />
      <DataCentricSecurity />
      <ImplementationSteps />
      <FinalCTASection />
    </div>
  )
}
