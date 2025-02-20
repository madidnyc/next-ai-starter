"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StatisticCounter } from "./statistic-counter"
import { TickerBar } from "./ticker-bar"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <motion.h1
                className="text-4xl font-bold tracking-tighter text-[#343A40] sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                The AI Lab's Platform for Specialized Talent at Scale
              </motion.h1>
              <motion.p
                className="text-base text-[#343A40] leading-relaxed sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                AI-powered vetting connects you with elite academic talent in hours—not weeks.
              </motion.p>
            </div>

            {/* Metrics */}
            <div className="grid gap-6 sm:grid-cols-3">
              <StatisticCounter value={250000} label="Vetted Experts" suffix="+" />
              <StatisticCounter value={7500} label="Academic Institutions" suffix="+" />
              <StatisticCounter value={80} label="Faster Hiring" suffix="%" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#028C6A] text-white hover:bg-[#028C6A]/90 h-12 px-6">
                See Zaigo in Action
                <Play className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#A3E4D7] text-[#028C6A] hover:bg-[#A3E4D7]/10 h-12 px-6"
              >
                Post a Job Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <Card className="relative overflow-hidden rounded-xl border border-neutral-200 border-gray-200 bg-white shadow-lg dark:border-neutral-800">
              <div className="p-6">
                <div className="space-y-6">
                  {/* Profile Preview */}
                  <div className="flex items-start space-x-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Profile"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-[#343A40]">Dr. Sarah Chen</h3>
                      <p className="text-sm text-gray-500">PhD in Machine Learning</p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#028C6A]" />
                        <span className="text-sm text-[#028C6A]">Verified Academic</span>
                      </div>
                    </div>
                  </div>

                  {/* Video Preview */}
                  <div className="relative aspect-video rounded-lg bg-gray-100 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=270&width=480"
                      alt="Video Preview"
                      width={480}
                      height={270}
                      className="object-cover"
                    />
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
                    >
                      <Play className="h-12 w-12 text-white" />
                    </button>
                  </div>

                  {/* Expertise Score */}
                  <div className="rounded-lg bg-[#F8F9FA] p-4">
                    <h4 className="text-sm font-medium text-[#343A40]">AI-Generated Expertise Score</h4>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="h-2 flex-1 rounded-full bg-gray-200">
                        <div className="h-2 w-[92%] rounded-full bg-[#028C6A]" />
                      </div>
                      <span className="text-sm font-medium text-[#028C6A]">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Ticker Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100">
        <TickerBar />
      </div>
    </section>
  )
}

