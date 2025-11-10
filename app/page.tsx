import HeroSection from "@/components/hero-section/hero-section"
import PersonaEntryPoints from "@/components/persona-entry-points/persona-entry-points"
import StakesSection from "@/components/stakes-section/stakes-section"
import FourPillarsSection from "@/components/four-pillars-section/four-pillars-section"
import ValuePropSection from "@/components/value-prop-section/value-prop-section"
import TestimonialSection from "@/components/testimonial-section/testimonial-section"
import ProcessSection from "@/components/process-section/process-section"
import PartnersSection from "@/components/partners-section/partners-section"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <PersonaEntryPoints />
      <StakesSection />
      <FourPillarsSection />
      <ValuePropSection />
      <TestimonialSection />
      <ProcessSection />
      <PartnersSection />
      <FinalCTASection />
    </div>
  )
}
