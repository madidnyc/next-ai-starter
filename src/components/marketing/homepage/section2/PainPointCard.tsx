import type { LucideIcon } from "lucide-react"
import { memo } from "react"

interface PainPointCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const PainPointCard = memo(function PainPointCard({ icon: Icon, title, description }: PainPointCardProps) {
  return (
    <div className="group relative w-full md:w-[300px] min-h-[200px] bg-white rounded-lg shadow-md p-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
      <div className="space-y-4">
        <Icon
          className="h-6 w-6 text-[#028C6A] group-hover:text-[#02A57E] transition-colors duration-200"
          aria-hidden="true"
        />
        <h3 className="text-2xl tracking-tighter font-regular text-[#343A40]">{title}</h3>
        <p className="text-base tracking-tight text-[#6C757D]">{description}</p>
      </div>
    </div>
  )
})

export default PainPointCard