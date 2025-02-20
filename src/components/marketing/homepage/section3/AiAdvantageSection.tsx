"use client"

import { Feature } from "@/components/ui/feature-with-advantages"

const advantages = [
  {
    title: "NLP Video Analysis",
    description: "Advanced NLP extracts deep insights from async interviews for precise expertise and fit assessment.",
  },
  {
    title: "Multi-Modal Credential Checks",
    description: "Comprehensive verification across GitHub, academic publications, and more—verified instantly.",
  },
  {
    title: "Dynamic Skill Algorithms",
    description: "Adaptive assessments predict which candidates will excel in your specific projects.",
  },
  {
    title: "Zero Bias",
    description: "AI ensures unbiased, consistent evaluations at scale—surpassing human capabilities.",
  },
]

export default function AiAdvantageSection() {
  return (
    <Feature
      badge="AI Technology"
      title="AI-Powered Precision for Your Lab"
      description="Our advanced AI technology ensures precise matching of academic talent with your lab's specific needs."
      advantages={advantages}
    />
  )
}