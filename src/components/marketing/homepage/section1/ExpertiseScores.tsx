"use client"

import { memo } from "react"

interface ExpertiseScore {
  skill: string
  score: number
  color: string
}

const expertiseScores: ExpertiseScore[] = [
  {
    skill: "LLM Architecture Design",
    score: 98,
    color: "#028C6A",
  },
  {
    skill: "Transformer Optimization",
    score: 95,
    color: "#02A57E",
  },
  {
    skill: "Neural Network Scaling",
    score: 92,
    color: "#A3E4D7",
  },
]

const ExpertiseScores = memo(function ExpertiseScores() {
  return (
    <div className="space-y-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
      <h4 className="text-sm font-semibold text-[#343A40]">AI-Validated Expertise</h4>
      <div className="space-y-3">
        {expertiseScores.map((score) => (
          <div key={score.skill} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-[#343A40]">{score.skill}</span>
              <span className="font-medium" style={{ color: score.color }}>{score.score}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${score.score}%`,
                  backgroundColor: score.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default ExpertiseScores