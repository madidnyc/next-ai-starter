import { HeroSection } from "../components/marketing/homepage/section1/hero-section"
import PainPointsSection from "../components/marketing/homepage/section2/PainPointsSection"
import AiAdvantageSection from "../components/marketing/homepage/section3/AiAdvantageSection"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PainPointsSection />
      <AiAdvantageSection />
    </main>
  )
}
