"use client"

import { useInView } from "framer-motion"
import { useRef, type RefObject } from "react"

interface UseScrollAnimationOptions {
  once?: boolean
  margin?: string
  amount?: "some" | "all" | number
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, margin = "-100px", amount = 0.3 } = options
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: margin as any, amount })

  return { ref, isInView }
}

export function useScrollAnimationRef<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): { ref: RefObject<T>; isInView: boolean } {
  const { once = true, margin = "-100px", amount = 0.3 } = options
  const ref = useRef<T>(null)
  const isInView = useInView(ref as RefObject<Element>, { once, margin: margin as any, amount })

  return { ref, isInView }
}
