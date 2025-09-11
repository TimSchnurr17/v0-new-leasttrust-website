import InsiderPlatformHero from "@/components/insider-platform-hero/insider-platform-hero"
import PlatformOverview from "@/components/platform-overview/platform-overview"
import PlatformScreenshots from "@/components/platform-screenshots/platform-screenshots"
import PlatformCapabilities from "@/components/platform-capabilities/platform-capabilities"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function InsiderPlatformPage() {
  return (
    <div className="insider-platform-page">
      <InsiderPlatformHero />
      <PlatformOverview />
      <PlatformScreenshots />
      <PlatformCapabilities />
      <FinalCTASection />
    </div>
  )
}
