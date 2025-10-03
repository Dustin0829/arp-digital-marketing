import { cn } from "@/lib/utils"

interface BlankCardProps {
  className?: string
  children?: React.ReactNode
}

export function BlankCard({ className, children }: BlankCardProps) {
  return (
    <div
      className={cn(
        "bg-muted border border-border rounded-lg flex items-center justify-center",
        className
      )}
    >
      {children || (
        <div className="text-muted-foreground text-sm">
          Blank Card
        </div>
      )}
    </div>
  )
}

