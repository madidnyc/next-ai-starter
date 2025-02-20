"use client"

import { Brain, Check, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PainPointsSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Challenges</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Your AI Lab Challenges, Solved
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                We understand the unique challenges AI labs face in finding and validating specialized talent.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Brain className="w-8 h-8 stroke-1 text-[#028C6A]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Need Domain Experts for Model Training?</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Access a curated pool of 250,000+ PhDs and researchers from top universities.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Check className="w-8 h-8 stroke-1 text-[#028C6A]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Struggling to Validate Expert Credentials?</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our AI conducts in-depth video interviews and analyzes credentials, ensuring you get the right experts without guesswork.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Rocket className="w-8 h-8 stroke-1 text-[#028C6A]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Racing to Scale Your Training Data Teams?</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Hire dozens of vetted specialists in days to power your data pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
