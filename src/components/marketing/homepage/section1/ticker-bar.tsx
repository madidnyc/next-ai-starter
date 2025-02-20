"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

export function TickerBar() {
  const [items] = useState([
    { name: "ML Engineer", hours: 4 },
    { name: "Data Scientist", hours: 6 },
    { name: "Research Lead", hours: 3 },
    { name: "AI Ethicist", hours: 8 },
    { name: "NLP Specialist", hours: 5 },
  ])

  return (
    <div className="relative flex h-12 items-center overflow-hidden bg-[#F8F9FA]">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 flex items-center text-sm text-gray-600">
            <Clock className="mr-2 h-4 w-4 text-[#028C6A]" />
            <span className="font-medium">{item.name}</span>
            <span className="ml-2">hired in {item.hours} hours</span>
          </div>
        ))}
      </div>
    </div>
  )
}

