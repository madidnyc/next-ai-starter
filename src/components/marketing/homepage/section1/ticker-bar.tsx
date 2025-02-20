"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

export function TickerBar() {
  const [items] = useState([
    { role: "Senior Software Engineer", hours: 4 },
    { role: "Machine Learning Researcher", hours: 6 },
    { role: "Legal Intelligence Analyst", hours: 2 },
    { role: "Medical Intelligence Analyst", hours: 4 },
    { role: "Mathematics Expert", hours: 6 },
    { role: "GIS Intelligence Engineer", hours: 2 },
    { role: "Architectural Intelligence Engineer", hours: 4 },
    { role: "Computer Science Expert", hours: 6 },
    { role: "Writing Intelligence Analyst", hours: 2 }
  ])

  return (
    <div className="relative flex h-12 items-center overflow-hidden bg-[#F8F9FA]">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 flex items-center text-sm text-[#028C6A]">
            <Clock className="mr-2 h-4 w-4" />
            <span>{item.role} hired in {item.hours} hours</span>
          </div>
        ))}
      </div>
    </div>
  )
}
