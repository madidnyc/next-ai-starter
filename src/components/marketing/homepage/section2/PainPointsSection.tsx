"use client"

import { Brain, Check, Rocket } from "lucide-react"
import { Feature } from "@/components/ui/feature-section-with-bento-grid"

const painPoints = [
  {
    icon: Brain,
    title: "Need Domain Experts for Model Training?",
    description: "Access a curated pool of 250,000+ PhDs and researchers from top universities.",
    isWide: true
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
    isWide: true
  },
]

export default function PainPointsSection() {
  return (
    <Feature
      badge="Challenges"
      title="Your AI Lab Challenges, Solved"
      description="We understand the unique challenges AI labs face in finding and validating specialized talent."
      items={painPoints}
    />
  )
}
