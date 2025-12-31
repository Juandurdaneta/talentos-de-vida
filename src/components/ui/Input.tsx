import { cn } from "@/lib/utils"
import { forwardRef, type InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-full border-2 border-white/30 bg-white/20 px-6 py-3 text-white placeholder:text-white/70 font-montserrat",
          "focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent",
          "transition-all duration-300",
          "backdrop-blur-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
