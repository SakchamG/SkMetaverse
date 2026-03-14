import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "glow" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-primary text-white hover:opacity-90": variant === "default",
            "btn-primary border-none shadow-md hover:scale-105 hover:shadow-lg transition-transform": variant === "gradient",
            "bg-secondary text-white hover:opacity-90": variant === "secondary",
            "border border-primary/20 bg-transparent hover:bg-primary/5 text-foreground": variant === "outline",
            "hover:bg-primary/10 text-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-105 transition-all duration-300": variant === "glow",
            "h-9 px-4 py-2 text-sm": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-11 rounded-full px-6 text-base": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
