"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const faqs = [
  {
    question: "No tengo tiempo para proyectos personales",
    answer: "Solo necesitas ese tiempo que ya tienes pero usas scrolleando. El mapa te muestra cómo aprovechar los huecos en tu día.",
  },
  {
    question: "Mi familia me necesita disponible",
    answer: "Una mamá realizada es una mejor mamá. Tu familia se beneficia cuando tú floreces.",
  },
  {
    question: "No sé qué podría hacer",
    answer: "Por eso existe el mapa del tesoro. En 10 minutos descubres talentos que ni sabías que tenían valor.",
  },
  {
    question: "Ya intenté antes y no funcionó",
    answer: "No tenías un sistema ni guía. Esta vez no estás sola.",
  },
  {
    question: "Me siento culpable de querer algo para mí",
    answer: "Tu realización personal no le quita a nadie. Le suma a todos.",
  },
  {
    question: "A mi edad ya es tarde",
    answer: "Tu experiencia de vida es exactamente tu mayor ventaja. Es el momento perfecto.",
  },
]

export function FAQ() {
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
    <section ref={ref} className="section-padding bg-off-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-teal-light/20 organic-shape-3 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-golden/30 organic-shape-1 blur-2xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-reckless text-3xl md:text-4xl lg:text-5xl text-gray-800">
              Entiendo Tus Dudas...
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={itemVariants}>
            <Accordion type="single">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="pr-4">&quot;{faq.question}&quot;</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <p>{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Encouraging note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center bg-gradient-to-r from-golden/30 via-blush/30 to-golden/30 rounded-3xl p-8"
          >
            <p className="font-circular text-gray-700">
              ¿Tienes otra pregunta? No te preocupes, todas hemos estado ahí.
            </p>
            <p className="font-reckless text-xl text-teal mt-4">
              Lo importante es dar el primer paso.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
