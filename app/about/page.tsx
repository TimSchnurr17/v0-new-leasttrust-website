import AboutHero from "@/components/about-hero/about-hero"
import TeamSection from "@/components/team-section/team-section"
import PartnersSection from "@/components/partners-section/partners-section"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <TeamSection />
      <PartnersSection />
      <FinalCTASection />
    </div>
  )
}
