"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

export function TickerBar() {
  const [items] = useState([
    { text: "Hired in 4 Hours" },
    { text: "Hired in 6 Hours" },
    { text: "Hired in 2 Hours" },
    { text: "Hired in 4 Hours" },
    { text: "Hired in 6 Hours" },
    { text: "Hired in 2 Hours" },
    { text: "Hired in 4 Hours" },
    { text: "Hired in 6 Hours" },
    { text: "Hired in 2 Hours" },
  ])

  return (
    <div className="relative flex h-12 items-center overflow-hidden bg-[#F8F9FA]">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 flex items-center text-sm text-[#028C6A]">
            <Clock className="mr-2 h-4 w-4" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
