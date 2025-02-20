import { HeroSection } from "../components/marketing/homepage/section1/hero-section"
import PainPointsSection from "../components/marketing/homepage/section2/PainPointsSection"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PainPointsSection />
    </main>
  )
}
