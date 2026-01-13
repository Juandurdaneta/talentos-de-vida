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
      {/* Hero-style header */}
      <section className="pt-32 pb-16 gradient-warm relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-coral/20 organic-shape-1" />
        <div className="absolute bottom-0 -left-20 w-48 h-48 bg-teal-light/30 organic-shape-2" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="font-fredoka text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Hablemos
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Me encantaría saber de ti. Si tienes preguntas sobre cómo descubrir
            tu propósito, estoy aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-off-white">
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
