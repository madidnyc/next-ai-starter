import { Brain, Check, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    <section className="w-full bg-[#F8F9FA] py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Solutions</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left text-[#343A40]">
                Your AI Lab Challenges, Solved
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-[#6C757D] text-left">
                AI-powered vetting connects you with elite academic talent in hours—not weeks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={point.title}
                className={`bg-white rounded-md p-6 ${
                  index === 0 ? "lg:col-span-2 aspect-square lg:aspect-auto" : "aspect-square"
                } flex justify-between flex-col group hover:scale-[1.02] hover:shadow-lg transition-all duration-200`}
              >
                <point.icon className="w-8 h-8 stroke-1 text-[#028C6A] group-hover:text-[#02A57E] transition-colors duration-200" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-[#343A40] font-semibold">{point.title}</h3>
                  <p className="text-[#6C757D] max-w-xs text-base">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
