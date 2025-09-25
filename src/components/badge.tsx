import type { ReactNode } from "react";
import { cn } from "../utils/tw-merge";

const variants = {
  primary: "bg-primary text-primary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

export type badgeVariants = "primary" | "success" | "warning" | "destructive";

type BadgeProps = {
  variant?: badgeVariants;
  children: ReactNode;
  className?: string;
};

export default function Badge({
  variant = "primary",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "text-sm font-medium rounded-2xl px-2 py-1",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
