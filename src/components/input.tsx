import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { cn } from "../utils/tw-merge";

type InputProps = {
  className?: string
} & ComponentPropsWithRef<"input">;


const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-md border border-primary bg-transparent px-3 py-1 text-base shadow-xs transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary/20 focus-visible:shadow-md focus-visible:shadow-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]",
        className)}
      {...props}
    />
  )
})

Input.displayName = "Input";

export default Input;