"use client"

import { MessageSquare, FileText, Settings, Shield } from "lucide-react"
import AdvantageItem from "./AdvantageItem"

const advantages = [
  {
    icon: MessageSquare,
    text: "NLP Video Analysis: Advanced NLP extracts deep insights from async interviews for precise expertise and fit assessment.",
  },
  {
    icon: FileText,
    text: "Multi-Modal Credential Checks: Comprehensive verification across GitHub, academic publications, and more—verified instantly.",
  },
  {
    icon: Settings,
    text: "Dynamic Skill Algorithms: Adaptive assessments predict which candidates will excel in your specific projects.",
  },
  {
    icon: Shield,
    text: "Zero Bias: AI ensures unbiased, consistent evaluations at scale—surpassing human capabilities.",
  },
]

export default function AiAdvantageSection() {
  return (
    <section className="relative w-full bg-white py-12">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#E9ECEF]/10 to-white"
        aria-hidden="true"
      />
      
      <div className="relative container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-[#343A40] leading-[1.3] font-['Open_Sans'] text-center">
            AI-Powered Precision for Your Lab
          </h2>
          
          <div className="space-y-6">
            {advantages.map((advantage) => (
              <AdvantageItem
                key={advantage.text}
                icon={advantage.icon}
                text={advantage.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}