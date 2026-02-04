import { cn } from "@/lib/utils"
import { forwardRef, type InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex h-14 w-full rounded-full px-6 py-3 font-circular transition-all duration-300 focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        dark: [
          "border-2 border-white/30 bg-white/20 text-white placeholder:text-white/70",
          "focus:ring-white/50 focus:border-transparent backdrop-blur-sm",
        ],
        light: [
          "border-2 border-gray-200 bg-white text-gray-800 placeholder:text-gray-400",
          "focus:ring-teal/30 focus:border-teal",
        ],
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
)

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
