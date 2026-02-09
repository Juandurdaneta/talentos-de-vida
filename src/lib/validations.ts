import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" }),
  email: z
    .string()
    .email({ message: "Por favor, ingresa un email válido" }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(2000, { message: "El mensaje es demasiado largo" }),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const quizEmailFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" }),
  email: z
    .string()
    .email({ message: "Por favor, ingresa un email válido" }),
})

export type QuizEmailFormData = z.infer<typeof quizEmailFormSchema>
