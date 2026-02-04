import { cn } from "@/lib/utils"
import { forwardRef, type TextareaHTMLAttributes } from "react"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-2xl border-2 border-gray-200 bg-white px-6 py-4 font-circular text-gray-800 placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal",
          "transition-all duration-300 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
