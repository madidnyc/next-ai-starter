import { Brain, Check, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
    <section className="w-full bg-[#F8F9FA]">
      <div className="container mx-auto py-20 lg:py-40">
        <div className="space-y-12">
          <div className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="border-[#028C6A] text-[#028C6A]">
              Challenges
            </Badge>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-[#343A40]">
                Your AI Lab Challenges, Solved
              </h2>
              <p className="text-lg tracking-tight text-[#6C757D]">
                We understand the unique challenges AI labs face in finding and validating specialized talent.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            {painPoints.map((point) => (
              <PainPointCard
                key={point.title}
                icon={point.icon}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
