import InsiderThreatHero from "@/components/insider-threat-hero/insider-threat-hero"
import InsiderThreatOverview from "@/components/insider-threat-overview/insider-threat-overview"
import InsiderThreatPhases from "@/components/insider-threat-phases/insider-threat-phases"
import InsiderThreatResources from "@/components/insider-threat-resources/insider-threat-resources"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function InsiderThreatPage() {
  return (
    <div className="insider-threat-page">
      <InsiderThreatHero />
      <InsiderThreatOverview />
      <InsiderThreatPhases />
      <InsiderThreatResources />
      <FinalCTASection />
    </div>
  )
}
