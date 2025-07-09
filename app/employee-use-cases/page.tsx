import EmployeeUseCasesHero from "@/components/employee-use-cases-hero/employee-use-cases-hero"
import UseCasesContent from "@/components/use-cases-content/use-cases-content"
import UseCasesCTA from "@/components/use-cases-cta/use-cases-cta"

export default function EmployeeUseCasesPage() {
  return (
    <div className="employee-use-cases-page">
      <EmployeeUseCasesHero />
      <UseCasesContent />
      <UseCasesCTA />
    </div>
  )
}
