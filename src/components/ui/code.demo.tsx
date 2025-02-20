import { User } from "lucide-react"
import { Feature } from "@/components/ui/feature-section-with-bento-grid"

function FeatureDemo() {
  return (
    <div className="w-full">
      <Feature 
        badge="Platform"
        title="Something new!"
        description="Managing a small business today is already tough."
        items={[
          {
            icon: User,
            title: "Pay supplier invoices",
            description: "Our goal is to streamline SMB trade, making it easier and faster than ever.",
            isWide: true
          },
          {
            icon: User,
            title: "Pay supplier invoices",
            description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
          },
          {
            icon: User,
            title: "Pay supplier invoices",
            description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
          },
          {
            icon: User,
            title: "Pay supplier invoices",
            description: "Our goal is to streamline SMB trade, making it easier and faster than ever.",
            isWide: true
          }
        ]}
      />
    </div>
  )
}

export { FeatureDemo }