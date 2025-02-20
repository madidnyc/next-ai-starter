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
    <section className="w-full bg-[#F8F9FA]">
      <div className="container mx-auto py-20 lg:py-40">
        <div className="space-y-12">
          <div className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="border-[#028C6A] text-[#028C6A]">
              Challenges
            </Badge>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-[#343A40]">
                Your AI Lab Challenges, Solved
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-[#6C757D]">
                We understand the unique challenges AI labs face in finding and validating specialized talent.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-md p-6 flex justify-between flex-col group hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              >
                <point.icon
                  className="h-6 w-6 text-[#028C6A] group-hover:text-[#02A57E] transition-colors duration-200"
                  aria-hidden="true"
                />
                <div className="mt-4">
                  <h3 className="text-xl tracking-tighter text-[#343A40] font-regular">{point.title}</h3>
                  <p className="mt-2 text-base tracking-tight text-[#6C757D]">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
