"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
  sectionId?: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function NavLink({ href, label, sectionId, isActive, onClick, className }: NavLinkProps) {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    // If we're on home page and have a sectionId, smooth scroll
    if (pathname === "/" && sectionId) {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "font-montserrat font-medium text-base transition-colors duration-200",
        "hover:text-teal relative",
        isActive ? "text-teal" : "text-gray-700",
        className
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-golden rounded-full" />
      )}
    </Link>
  )
}
