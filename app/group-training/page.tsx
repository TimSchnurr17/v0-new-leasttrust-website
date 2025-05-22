import TrainingHero from "@/components/training-hero/training-hero"
import TrainingFormats from "@/components/training-formats/training-formats"
import TrainingTopics from "@/components/training-topics/training-topics"
import TrainingApproach from "@/components/training-approach/training-approach"
import FinalCTASection from "@/components/final-cta-section/final-cta-section"

export default function GroupTrainingPage() {
  return (
    <div className="group-training-page">
      <TrainingHero />
      <TrainingFormats />
      <TrainingTopics />
      <TrainingApproach />
      <FinalCTASection />
    </div>
  )
}
