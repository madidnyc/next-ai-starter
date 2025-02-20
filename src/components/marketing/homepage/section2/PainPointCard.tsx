import type { LucideIcon } from "lucide-react"
import { memo } from "react"

interface PainPointCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const PainPointCard = memo(function PainPointCard({ icon: Icon, title, description }: PainPointCardProps) {
  return (
    <div className="group w-full md:w-[300px] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-4 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-200">
      <div className="space-y-4">
        <Icon
          className="h-6 w-6 text-[#028C6A] group-hover:text-[#02A57E] transition-colors duration-200"
          aria-hidden="true"
        />
        <h3 className="text-2xl font-semibold leading-[1.3] text-[#343A40]">{title}</h3>
        <p className="text-base leading-[1.5] text-[#6C757D]">{description}</p>
      </div>
    </div>
  )
})

export default PainPointCard

