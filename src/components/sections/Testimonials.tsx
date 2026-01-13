"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carmen",
    age: "42 años",
    quote: "Pensé que a los 40 mi tiempo había pasado. Descubrí que era el momento perfecto para reinventarme. Ahora tengo un propósito que me emociona cada mañana.",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Ana",
    age: "45 años — Mamá de 4",
    quote: "15 años dedicada solo a la familia. Pensé que mis sueños habían muerto. Daysi me ayudó a ver que apenas estaban dormidos. Hoy vivo con propósito.",
    image: "/images/testimonial-2.jpg",
  },
]

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="section-padding gradient-blush relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral/10 organic-shape-1 blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-golden/30 organic-shape-2 blur-xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl text-gray-800">
              Mujeres Que Encontraron Su Propósito
            </h2>
          </motion.div>

          {/* Testimonials grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-soft-lg overflow-hidden hover:shadow-soft transition-shadow"
              >
                {/* Quote icon */}
                <div className="relative">
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-coral" />
                  </div>
                </div>

                <div className="p-8">
                  {/* Photo */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-coral/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow to-blush flex items-center justify-center">
                        <span className="text-3xl">👩</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-fredoka text-xl text-gray-800">{testimonial.name}</h3>
                      <p className="font-montserrat text-coral text-sm">{testimonial.age}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="font-montserrat text-gray-700 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-coral to-peach rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-coral/30 to-peach/30 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-sm">⭐</span>
                  </div>
                ))}
              </div>
              <p className="font-montserrat text-gray-700 ml-2">
                <span className="font-bold text-teal">+100 mamás</span> transformadas
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
