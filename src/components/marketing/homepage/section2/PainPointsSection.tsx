import { Brain, Check, Rocket } from "lucide-react"
import PainPointCard from "./PainPointCard"

const painPoints = [
  {
    icon: Brain,
    title: "Need Domain Experts for Model Training?",
    description: "Access a curated pool of 250,000+ PhDs and researchers from top universities.",
  },
  {
    icon: Check,
    title: "Struggling to Validate Expert Credentials?",
    description:
      "Our AI conducts in-depth video interviews and analyzes credentials, ensuring you get the right experts without guesswork.",
  },
  {
    icon: Rocket,
    title: "Racing to Scale Your Training Data Teams?",
    description: "Hire dozens of vetted specialists in days to power your data pipelines.",
  },
]

export default function PainPointsSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold leading-[1.3] text-[#343A40] font-['Open_Sans']">
            Your AI Lab Challenges, Solved
          </h2>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            {painPoints.map((point) => (
              <div key={point.title} className="w-full max-w-[300px] md:w-[300px]">
                <PainPointCard icon={point.icon} title={point.title} description={point.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
