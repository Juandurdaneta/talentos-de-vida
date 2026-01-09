"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { contactSchema, type ContactFormData } from "@/lib/validations"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting")

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form data:", data)
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-3xl shadow-soft p-8 md:p-10">
        <h2 className="font-yuji text-2xl md:text-3xl text-gray-800 mb-2">
          Envíame un mensaje
        </h2>
        <p className="font-montserrat text-gray-600 mb-8">
          Respondo personalmente cada mensaje.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-yuji text-xl text-gray-800 mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="font-montserrat text-gray-600 mb-6">
                Gracias por escribirme. Te responderé pronto.
              </p>
              <Button
                variant="outline"
                size="md"
                onClick={() => setStatus("idle")}
              >
                Enviar otro mensaje
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Tu nombre
                </label>
                <Input
                  id="name"
                  variant="light"
                  placeholder="Maria Garcia"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-coral font-montserrat">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Tu email
                </label>
                <Input
                  id="email"
                  type="email"
                  variant="light"
                  placeholder="maria@ejemplo.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-coral font-montserrat">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Tu mensaje
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntame cómo puedo ayudarte..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-coral font-montserrat">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 rounded-2xl bg-coral/10 text-coral">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-montserrat text-sm">
                    Hubo un error al enviar. Por favor, intenta de nuevo.
                  </p>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-gray-800/30 border-t-gray-800 rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </span>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
