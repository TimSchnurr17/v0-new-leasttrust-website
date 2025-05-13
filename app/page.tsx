import HeroSection from "@/components/hero-section/hero-section"
import StakesSection from "@/components/stakes-section/stakes-section"
import ValuePropSection from "@/components/value-prop-section/value-prop-section"
import TestimonialSection from "@/components/testimonial-section/testimonial-section"
import ProcessSection from "@/components/process-section/process-section"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <StakesSection />
      <ValuePropSection />
      <TestimonialSection />
      <ProcessSection />
      <FinalCTASection />
    </div>
  )
}
