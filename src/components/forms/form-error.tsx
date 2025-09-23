import { cn } from "../../utils/tw-merge"

type FormErrorProps = {
  errMessage: string | undefined
  className?: string
}

export default function FormError({ errMessage, className }: FormErrorProps) {
  return (
    <span
      className={cn("pl-2 font-semibold text-destructive text-sm", className)}
    >
      {errMessage ?? ""}
    </span>
  )
}