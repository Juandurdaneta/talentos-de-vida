"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Facebook, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-coral via-peach to-coral" />

      <div className="section-padding py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo */}
            <div className="mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 relative mb-3 mx-auto">
                <Image
                  src="/images/logo-full-color.png"
                  alt="Talentos de Vida"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="font-yuji text-2xl text-white">Talentos de vida</h3>
              <p className="font-montserrat text-coral text-sm">By Daysi Aldaz</p>
            </div>

            {/* Tagline */}
            <p className="font-montserrat text-white/70 max-w-md mb-8">
              Ayudando a mamás a descubrir su propósito y construir negocios desde casa sin sacrificar lo que más aman.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.instagram.com/daysialdaz.tdv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552498655587"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:daysialdaz44@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Divider */}
            <div className="w-24 h-0.5 bg-white/20 mb-6" />

            {/* Copyright */}
            <p className="font-montserrat text-white/60 text-sm">
              © 2025 Talentos de Vida by Daysi Aldaz
            </p>
            <p className="font-montserrat text-white/40 text-xs mt-2 flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-coral" /> para mamás con propósito
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
