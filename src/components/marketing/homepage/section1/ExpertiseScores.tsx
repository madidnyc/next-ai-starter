"use client"

import { memo } from "react"
import { Progress } from "@/components/ui/progress"

interface ExpertiseScore {
  skill: string
  score: number
  color: string
  tailwindColor: string
}

const expertiseScores: ExpertiseScore[] = [
  {
    skill: "LLM Architecture Design",
    score: 98,
    color: "#028C6A",
    tailwindColor: "bg-[#028C6A]",
  },
  {
    skill: "Transformer Optimization",
    score: 95,
    color: "#02A57E",
    tailwindColor: "bg-[#02A57E]",
  },
  {
    skill: "Neural Network Scaling",
    score: 92,
    color: "#A3E4D7",
    tailwindColor: "bg-[#A3E4D7]",
  },
]

const ExpertiseScores = memo(function ExpertiseScores() {
  return (
    <div className="space-y-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
      <h4 className="text-sm tracking-tight text-[#343A40]">AI-Validated Expertise</h4>
      <div className="space-y-2">
        {expertiseScores.map((score) => (
          <Progress
            key={score.skill}
            value={score.score}
            maxValue={100}
            barClassName="h-1.5 bg-gray-100"
            fillClassName={score.tailwindColor}
          >
            {() => (
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#343A40] tracking-tight">{score.skill}</span>
                <span className="tracking-tight" style={{ color: score.color }}>{score.score}%</span>
              </div>
            )}
          </Progress>
        ))}
      </div>
    </div>
  )
})

export default ExpertiseScores