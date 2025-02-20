"use client"

import { memo, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface StatisticCounterProps {
  end: number
  suffix?: string
  className?: string
  duration?: number
}

const StatisticCounter = memo(function StatisticCounter({ 
  end, 
  suffix = "", 
  className = "",
  duration = 2000 
}: StatisticCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (!inView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, inView])

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  )
})

export default StatisticCounter