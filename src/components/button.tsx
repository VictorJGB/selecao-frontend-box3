import type { ReactNode } from "react";
import { cn } from "../utils/tw-merge";

type ButtonVariants = "default" | "primary" | "secondary" | "destructive";

type ButtonProps = {
  className?: string;
  variant?: ButtonVariants;
  children: ReactNode;
};

const buttonVariants = {
  default: "bg-base-300 hover:bg-base-300/80 text-foreground",
  primary: "bg-primary hover:bg-primary/80 text-primary-foreground",
  secondary: "bg-secondary bg-secondary/80 text-secondary-foreground",
  destructive: "bg-destructive bg-destructive/80 text-destructive-foreground",
};

export default function Button({
  className,
  variant = "default",
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-9 px-4 py-2 flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
