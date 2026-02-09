"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="text-center py-8 md:py-12">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 bg-golden/15 text-golden px-4 py-2 rounded-full mb-8"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="font-satoshi font-bold text-sm uppercase tracking-wider">
          Quiz de Talentos
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-reckless text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 leading-tight"
      >
        Descubre tus talentos más valiosos{" "}
        <span className="italic text-teal">que ya tienes (pero no ves)</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-circular text-lg text-gray-600 mb-3 max-w-xl mx-auto"
      >
        Para la mamá que siente que perdió su identidad…
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="font-satoshi font-bold text-lg text-gray-800 mb-8 max-w-xl mx-auto"
      >
        Tu verdadero yo nunca se fue, solo está escondido
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-2 text-gray-400 mb-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-circular text-sm">7 preguntas · Menos de 10 minutos</span>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-px h-12 bg-golden mx-auto mb-10 origin-top"
      />

      {/* Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white border border-gray-100 p-6 max-w-md mx-auto mb-10 rounded-3xl shadow-soft"
      >
        <h3 className="font-satoshi font-bold text-gray-800 mb-4">
          En 10 minutos descubrirás:
        </h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-3">
            <span className="text-golden font-bold text-lg leading-none mt-0.5">✓</span>
            <span className="font-circular text-gray-600">
              Qué talentos únicos tienes que el mundo necesita
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-golden font-bold text-lg leading-none mt-0.5">✓</span>
            <span className="font-circular text-gray-600">
              Por qué esos talentos son valiosos (y pagarían por ellos)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-golden font-bold text-lg leading-none mt-0.5">✓</span>
            <span className="font-circular text-gray-600">
              Tu identidad perdida que nunca se fue
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-golden font-bold text-lg leading-none mt-0.5">✓</span>
            <span className="font-circular text-gray-600">
              Un mensaje personal de Daysi para ti
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button onClick={onStart} variant="primary" size="xl" className="group">
          Comenzar el Quiz
          <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </motion.div>
    </div>
  );
}
