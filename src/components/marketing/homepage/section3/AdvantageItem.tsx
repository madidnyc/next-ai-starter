"use client"

import { memo } from "react"
import { LucideIcon } from "lucide-react"

interface AdvantageItemProps {
  icon: LucideIcon
  text: string
}

const AdvantageItem = memo(function AdvantageItem({ icon: Icon, text }: AdvantageItemProps) {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-4 md:gap-4">
      <Icon
        className="h-6 w-6 text-[#028C6A] group-hover:text-[#02A57E] transition-colors duration-200 flex-shrink-0"
        aria-hidden="true"
      />
      <p className="text-base text-[#343A40] leading-[1.5] font-['Open_Sans'] group-hover:text-[#343A40]/90 transition duration-200">
        {text}
      </p>
    </div>
  )
})

export default AdvantageItem