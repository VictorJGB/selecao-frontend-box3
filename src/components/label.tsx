import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "../utils/tw-merge"

type LabelProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<"label">


export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "pl-1 flex items-center gap-2 text-sm leading-none font-medium",
        className
      )}
      {...props}
    >{children}</label>
  )
}