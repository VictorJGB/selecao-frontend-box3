import type { ReactNode } from "react";
import { cn } from "../utils/tw-merge";

type ButtonVariants = "default" | "primary" | "secondary" | "destructive";

type ButtonProps = {
  className?: string;
  variant?: ButtonVariants;
  children: ReactNode;
};

const buttonVariants = {
  default: "bg-base-300 text-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

export default function Button({
  className,
  variant = "default",
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-9 px-4 py-2 flex items-center justify-center gap-2 rounded cursor-pointer",
        buttonVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
