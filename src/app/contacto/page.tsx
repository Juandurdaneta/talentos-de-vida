import { Metadata } from "next"
import { ContactForm } from "@/components/sections/ContactForm"
import { AboutDaysi } from "@/components/sections/AboutDaysi"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Contacto | Talentos de Vida",
  description:
    "Ponte en contacto con Daysi Aldaz. Estoy aquí para ayudarte a descubrir tu propósito y construir tu negocio desde casa.",
}

export default function ContactoPage() {
  return (
    <main>
      {/* Header spacer */}
      <div className="h-20 bg-off-white" />

      {/* Hero section - visually separated from header */}
      <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-off-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-coral/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-light/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          {/* Hero card */}
          <div className="bg-gradient-to-br from-peach/30 via-white to-coral/10 rounded-3xl p-8 md:p-12 shadow-soft text-center">
            <h1 className="font-reckless text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              Hablemos
            </h1>
            <p className="font-circular text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Me encantaría saber de ti. Si tienes preguntas sobre cómo descubrir
              tu propósito, estoy aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="pt-8 pb-16 md:pb-24 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <AboutDaysi />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
