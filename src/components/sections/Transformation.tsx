"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Heart, Brain, Sparkles, Sun, Moon, Users, Star, Gem } from "lucide-react"

const transformationPoints = [
  { icon: Heart, label: "En tu corazón", text: "Emoción por el proyecto que estás construyendo" },
  { icon: Brain, label: "En tu mente", text: "Ideas creativas que no puedes esperar a implementar" },
  { icon: Sparkles, label: "En tu alma", text: "Satisfacción de estar usando tus talentos únicos" },
  { icon: Sun, label: "En la tarde", text: "Recoges a los niños energizada, no agotada" },
  { icon: Moon, label: "En la cena", text: "Te acuestas realizada, no vacía" },
]

const beyondIncome = [
  "Recuperarás tu identidad como individuo completo",
  "Tu conexión con tus talentos únicos",
  "Tu energía y entusiasmo por la vida",
  "Tu ejemplo de mujer realizada para tus hijos",
]

const powerfulStatements = [
  { icon: Users, text: "Una mamá realizada cría hijos seguros" },
  { icon: Star, text: "Una mujer con propósito inspira a su familia" },
  { icon: Gem, text: "Una persona que usa sus dones honra a Dios" },
]

export function Transformation() {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F9F8FB 0%, #98C1CC 50%, #F9F8FB 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/30 organic-shape-1 blur-2xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal/10 organic-shape-2 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
              Imagina Tu Vida Cuando Encuentres Tu Propósito
            </h2>
            <p className="font-montserrat text-lg md:text-xl text-gray-700 mt-6">
              Es el mismo martes, 1:30 PM... Pero{" "}
              <span className="font-bold text-teal">TÚ eres diferente:</span>
            </p>
          </motion.div>

          {/* Transformation points */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
          >
            {transformationPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-light to-teal flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-teal text-sm uppercase tracking-wider mb-2">
                  {point.label}
                </h3>
                <p className="font-montserrat text-gray-700 text-sm">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Beyond income section */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft flex flex-col h-full">
              <h3 className="font-fredoka text-2xl text-teal mb-6">
                Más allá de cualquier ingreso...
              </h3>
              <div className="flex-1 flex flex-col justify-between">
                {beyondIncome.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-coral flex-shrink-0" />
                    <p className="font-montserrat text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Powerful statements */}
            <div className="space-y-4">
              {powerfulStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-coral/15 to-peach/20 rounded-2xl p-6 flex items-center gap-4 border-l-4 border-coral"
                >
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                    <statement.icon className="w-6 h-6 text-coral" />
                  </div>
                  <p className="font-montserrat text-lg md:text-xl text-gray-800">
                    {statement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social proof teaser */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft"
          >
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-coral/30 to-peach/30 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-lg">👩</span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-teal border-2 border-white flex items-center justify-center">
                  <span className="font-montserrat text-white text-sm font-bold">+100</span>
                </div>
              </div>
            </div>
            <p className="font-montserrat text-lg md:text-xl text-gray-700 max-w-4xl mx-auto md:whitespace-nowrap">
              <span className="font-bold text-teal">Más de 100 mamás</span> ya encontraron su propósito. Empezaron exactamente donde tú estás.
            </p>
            <p className="font-fredoka text-xl md:text-2xl text-gray-800 mt-4">
              La única diferencia: <span className="text-golden">Ellas dejaron de esperar.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
