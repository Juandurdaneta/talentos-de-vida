"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./MobileMenu"
import { NavLink } from "./NavLink"

const navLinks = [
  { href: "/", label: "Inicio", sectionId: "hero" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-warm-yellow/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-full-color.png"
                alt="Talentos de Vida"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-yuji text-teal text-lg">Talentos de vida</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setIsMobileMenuOpen(false)}
            currentPath={pathname}
          />
        )}
      </AnimatePresence>
    </>
  )
}
