"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"
import { CTAButtons } from "./CTAButtons"
import { TickerBar } from "./ticker-bar"
import ExpertiseScores from "./ExpertiseScores"
import { StatisticCounter } from "./statistic-counter"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="w-full bg-white">
      <div className="py-12 container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="flex-1 p-4">
          <h1 className="text-5xl tracking-tighter font-regular text-[#343A40] mb-4">
            The AI Lab's Platform for Specialized Talent at Scale
          </h1>
          <p className="text-lg tracking-tight text-[#343A40] mb-6">
            AI-powered vetting connects you with elite academic talent in hours—not weeks.
          </p>
          <div className="flex space-x-8 mb-6">
            <StatisticCounter value={250000} label="Vetted Experts" suffix="+" />
            <StatisticCounter value={7500} label="Academic Institutions" suffix="+" />
            <StatisticCounter value={80} label="Faster Hiring" suffix="%" />
          </div>
          <CTAButtons />
        </div>
        {/* Right Side: Dashboard Mockup */}
        <div className="flex-1 p-4">
          <div className="w-full relative rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#F8F9FA] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#028C6A] flex items-center justify-center">
                  <span className="text-white">JD</span>
                </div>
                <div>
                  <h4 className="text-lg tracking-tighter text-[#343A40]">Dr. Jane Doe</h4>
                  <p className="text-sm tracking-tight text-[#6C757D]">ML Research Scientist, Stanford</p>
                </div>
              </div>
              
              {/* Video Section */}
              <div className="relative aspect-video rounded-lg bg-gray-100 overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=270&width=480"
                  alt="Video Preview"
                  width={480}
                  height={270}
                  className="object-cover"
                />
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>

              <ExpertiseScores />
            </div>
          </div>
        </div>
      </div>
      <TickerBar />
    </section>
  )
}
