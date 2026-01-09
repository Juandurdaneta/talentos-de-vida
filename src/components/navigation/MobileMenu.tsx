"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { NavLink } from "./NavLink"

interface MobileMenuProps {
  links: Array<{ href: string; label: string; sectionId?: string }>
  onClose: () => void
  currentPath: string
}

export function MobileMenu({ links, onClose, currentPath }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-72 bg-warm-yellow shadow-soft-lg"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
          aria-label="Cerrar menú"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Navigation Links */}
        <nav className="pt-20 px-8">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  {...link}
                  isActive={currentPath === link.href}
                  onClick={onClose}
                  className="text-xl"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative organic shape */}
        <div className="absolute bottom-10 left-5 w-32 h-32 bg-coral/20 organic-shape-2" />
      </motion.div>
    </motion.div>
  )
}
