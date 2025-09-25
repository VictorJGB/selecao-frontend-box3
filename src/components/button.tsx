import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import { cn } from "../utils/tw-merge";

type ButtonVariants = "default" | "primary" | "secondary" | "outline" | "destructive" | "ghost";

type ButtonSizes = "default" | "icon"

type ButtonProps = {
  className?: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const buttonVariants = {
  default: "bg-base-300 hover:bg-base-300/80 text-foreground",
  outline: "bg-transparent hover:bg-neutral/20 text-foreground border border-neutral",
  ghost: "bg-transparent hover:text-neutral/60 text-neutral",
  primary: "bg-primary hover:bg-primary/80 text-primary-foreground",
  secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
  destructive: "bg-destructive hover:bg-destructive/80 text-destructive-foreground",
};

const buttonSizes = {
  default: "h-9 px-4 py-2",
  icon: "h-9 px-2 py-2",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-9 px-4 py-2 flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
