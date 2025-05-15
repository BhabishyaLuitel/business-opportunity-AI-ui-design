import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Dashboard
      </Link>
      <Link href="/insights" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Insights
      </Link>
      <Link href="/strategy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Strategy Builder
      </Link>
      <Link href="/cost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Cost Estimator
      </Link>
      <Link href="/settings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Settings
      </Link>
    </nav>
  )
}
