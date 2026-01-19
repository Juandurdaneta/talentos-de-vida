"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export function AboutDaysi() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Photo, intro and quote */}
      <div className="bg-gradient-to-br from-peach/20 to-coral/10 rounded-3xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-soft">
            <Image
              src="/images/daysi-2.jpeg"
              alt="Daysi Aldaz"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-fredoka text-2xl text-gray-800 mb-2 text-center sm:text-left">
              Hola, soy Daysi
            </h3>
            <p className="font-montserrat text-gray-700 leading-relaxed">
              Coach de propósito y emprendimiento para mamás que quieren crear algo propio
              sin sacrificar lo que más aman. He ayudado a más de 100 mujeres a descubrir
              sus talentos y convertirlos en negocios desde casa.
            </p>
          </div>
        </div>
        {/* Quote */}
        <div className="mt-6 pt-6 border-t border-teal/20">
          <p className="font-fredoka text-xl text-gray-800 italic">
            &quot;Cada mamá tiene un tesoro escondido. Mi misión es ayudarte a encontrarlo.&quot;
          </p>
          <p className="font-montserrat text-teal mt-2">- Daysi Aldaz</p>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-white rounded-3xl shadow-soft p-6">
        <h4 className="font-montserrat font-bold text-teal mb-4">
          También puedes encontrarme en:
        </h4>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/daysialdaz.tdv/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552498655587"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:daysialdaz44@gmail.com"
            className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
