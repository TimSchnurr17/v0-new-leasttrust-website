import InsiderPlatformHero from "@/components/insider-platform-hero/insider-platform-hero"
import PlatformOverview from "@/components/platform-overview/platform-overview"
import PlatformMaturityAssessment from "@/components/platform-maturity-assessment/platform-maturity-assessment"
import PlatformScreenshots from "@/components/platform-screenshots/platform-screenshots"
import PlatformCapabilities from "@/components/platform-capabilities/platform-capabilities"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function InsiderPlatformPage() {
  return (
    <div className="insider-platform-page">
      <InsiderPlatformHero />
      <PlatformOverview />
      <PlatformMaturityAssessment />
      <PlatformScreenshots />
      <PlatformCapabilities />
      <FinalCTASection />
    </div>
  )
}
