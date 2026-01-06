"use client"

import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

const painPoints = [
  "Debería estar haciendo algo más productivo",
  "Mis talentos se están desperdiciando",
  "¿Esto es todo lo que soy?",
  "Ya es muy tarde para empezar algo nuevo",
]

const consequences = [
  "Tus sueños personales siguen 'en pausa' indefinidamente",
  "Esa idea que tienes hace años sigue guardada",
  "Otro año pasa sin cambios reales",
]

export function PainPoints() {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="absolute top-10 right-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-golden/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section intro */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-yuji text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
              ¿Te Suena Familiar?
            </h2>
            <p className="font-montserrat text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Es 1:30 PM. Los niños están en la escuela...
              <br />
              <span className="text-gray-700 font-medium">
                Y tú estás ahí, scrolleando Instagram, viendo a otras mamás mostrar sus victorias mientras tu vida sigue exactamente igual que hace 3 años.
              </span>
            </p>
          </motion.div>

          {/* Inner voice intro */}
          <motion.p
            variants={itemVariants}
            className="font-montserrat text-center text-teal font-semibold text-lg mb-8"
          >
            Esa vocecita en tu cabeza no para:
          </motion.p>

          {/* Pain point cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {painPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-coral hover:border-teal">
                  <p className="font-montserrat text-lg text-gray-700 italic">
                    &quot;{point}&quot;
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Consequences */}
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <h3 className="font-montserrat font-bold text-xl text-teal mb-6 text-center">
              Mientras tanto:
            </h3>
            <div className="space-y-4">
              {consequences.map((consequence, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-coral flex-shrink-0" />
                  <p className="font-montserrat text-gray-700">{consequence}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Urgency statement */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-coral/10 via-peach/10 to-coral/10 rounded-3xl p-8 md:p-12"
          >
            <p className="font-montserrat text-lg md:text-xl text-gray-700 leading-relaxed">
              Cada mes que &quot;esperas el momento perfecto&quot; te está costando tu potencial.
            </p>
            <p className="font-yuji text-2xl md:text-3xl text-gray-800 mt-6">
              Tus hijos van a crecer de todos modos.
              <br />
              <span className="text-teal">
                ¿Van a crecer viendo a mamá realizarse o viendo a mamá conformarse?
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
