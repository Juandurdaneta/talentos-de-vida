"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quizEmailFormSchema, QuizEmailFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";

interface QuizLeadFormProps {
  onSubmit: (data: QuizEmailFormData) => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function QuizLeadForm({
  onSubmit,
  onBack,
  isSubmitting,
}: QuizLeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizEmailFormData>({
    resolver: zodResolver(quizEmailFormSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-circular text-sm">Volver a las preguntas</span>
      </button>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-golden mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="font-satoshi font-bold tracking-wide uppercase text-sm">
            Ya Conocemos Tu Talento
          </span>
        </div>

        <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-4">
          (Y Es Increíble)
        </h2>

        <p className="font-circular text-lg text-gray-600 mb-4">
          Hemos analizado tus respuestas y descubrimos el talento que llevas
          dentro y que el mundo necesita.
        </p>

        <p className="font-satoshi font-bold text-gray-800">
          Descubre cuál es tu talento escondido y cómo puede transformar tu vida.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-soft">
          <p className="font-satoshi font-bold text-lg text-gray-800 mb-6">
            Ingresa tu email para ver tus resultados:
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-circular text-sm text-gray-600 mb-1.5 ml-2">
                Tu nombre
              </label>
              <Input
                variant="light"
                {...register("firstName")}
                placeholder="Tu nombre"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 ml-2 font-circular">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-circular text-sm text-gray-600 mb-1.5 ml-2">
                Tu email
              </label>
              <Input
                variant="light"
                type="email"
                {...register("email")}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 ml-2 font-circular">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="xl"
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Descubriendo tu talento...
              </span>
            ) : (
              <>
                Ver Mis Resultados
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </Button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-circular text-sm">
            Respetamos tu privacidad. Cancela cuando quieras.
          </span>
        </div>
      </form>
    </motion.div>
  );
}
