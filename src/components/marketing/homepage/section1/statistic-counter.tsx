"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatisticCounterProps {
  value: number
  label: string
  suffix?: string
}

export function StatisticCounter({ value, label, suffix = "" }: StatisticCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl tracking-tighter font-regular text-[#028C6A]">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm tracking-tight text-[#6C757D]">{label}</div>
    </motion.div>
  )
}
