"use client"

import { cn } from "@/lib/utils"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-satoshi font-bold rounded-full transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-golden text-gray-800 shadow-soft hover:shadow-soft-lg hover:scale-105 hover:brightness-105",
        teal: "bg-teal text-white shadow-teal hover:shadow-soft-lg hover:scale-105 hover:bg-opacity-90",
        outline: "border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white",
        ghost: "text-teal hover:bg-teal/10",
      },
      size: {
        sm: "py-2 px-5 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg",
        xl: "py-5 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
