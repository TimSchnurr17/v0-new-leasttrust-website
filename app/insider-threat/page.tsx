import InsiderThreatHero from "@/components/insider-threat-hero/insider-threat-hero"
import InsiderThreatOverview from "@/components/insider-threat-overview/insider-threat-overview"
import FourPillarsSection from "@/components/four-pillars-section/four-pillars-section"
import InsiderThreatPhases from "@/components/insider-threat-phases/insider-threat-phases"
import PersonaEntryPoints from "@/components/persona-entry-points/persona-entry-points"
import InsiderThreatResources from "@/components/insider-threat-resources/insider-threat-resources"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function InsiderThreatPage() {
  return (
    <div className="insider-threat-page">
      <InsiderThreatHero />
      <InsiderThreatOverview />
      <FourPillarsSection />
      <InsiderThreatPhases />
      <PersonaEntryPoints />
      <InsiderThreatResources />
      <FinalCTASection />
    </div>
  )
}
