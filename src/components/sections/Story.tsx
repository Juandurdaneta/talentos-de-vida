"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Heart, Sparkles, Users, Star } from "lucide-react"
import Image from "next/image"

const realizations = [
  "Era sobre no desperdiciar los dones que tenía",
  "Era sobre crear algo mío",
  "Era sobre ayudar a otras mujeres a brillar",
]

const transformationResults = [
  "Descubrí que mis experiencias tenían valor",
  "Encontré mi voz y mi mensaje único",
  "Conecté con mujeres que necesitaban exactamente lo que yo ofrecía",
  "Creé algo que era completamente MÍO",
]

const currentState = [
  { icon: Heart, text: "Tengo un propósito que me llena cada día" },
  { icon: Sparkles, text: "Trabajo en algo que amo mientras mis hijos están en la escuela" },
  { icon: Star, text: "Soy ejemplo vivo de perseguir sueños sin sacrificar familia" },
  { icon: Users, text: "Ayudo a más de 100 mamás a encontrar SU propósito también" },
]

export function Story() {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section ref={ref} className="section-padding bg-off-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-yuji text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
              Mi Despertar: Del Hospital a Mi Propósito
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Opening hook */}
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <p className="font-yuji text-2xl md:text-3xl text-gray-800 leading-relaxed">
                  El 17 de noviembre mi corazón se detuvo...
                </p>
                <p className="font-montserrat text-lg text-gray-600 mt-4">
                  Literalmente. En una mesa de operaciones.
                </p>
              </div>

              {/* Message received */}
              <div className="bg-teal/10 rounded-3xl p-8 border-l-4 border-teal">
                <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
                  Cuando desperté, Dios me había dado un mensaje clarísimo:
                </p>
                <p className="font-yuji text-xl md:text-2xl text-teal mt-4">
                  &quot;Daysi, tienes un propósito. Deja de posponerlo.&quot;
                </p>
              </div>

              {/* Realizations */}
              <div className="space-y-4">
                {realizations.map((realization, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 bg-white/80 rounded-2xl p-4 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-coral" />
                    </div>
                    <p className="font-montserrat text-gray-700">{realization}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column - Photo and transformation */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender via-blush to-teal-light/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/30 flex items-center justify-center">
                      <Image
                        src="/images/icon.svg"
                        alt="Daysi Aldaz"
                        width={64}
                        height={64}
                        className="opacity-60"
                      />
                    </div>
                    <p className="font-montserrat text-white/80 text-sm">
                      Foto de Daysi
                    </p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/30 organic-shape-1" />
              </div>

              {/* 90-day transformation */}
              <div className="bg-gradient-to-br from-peach/20 to-coral/10 rounded-3xl p-8">
                <h3 className="font-montserrat font-bold text-lg text-teal mb-6">
                  En 90 días, desde mi casa:
                </h3>
                <div className="space-y-3">
                  {transformationResults.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <p className="font-montserrat text-gray-700">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Current state - 3 years later */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-yuji text-2xl md:text-3xl text-center text-gray-800 mb-8">
              Hoy, 3 años después:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentState.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-soft-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-teal" />
                  </div>
                  <p className="font-montserrat text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing statement & CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="font-montserrat text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Y esa misma decisión que me transformó de{" "}
              <span className="text-coral font-semibold">mamá en piloto automático</span>{" "}
              a{" "}
              <span className="text-teal font-semibold">mujer con misión</span>{" "}
              es la que puedes tomar tú hoy.
            </p>
            <Button variant="primary" size="xl">
              MUÉSTRAME MI TESORO ESCONDIDO
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
