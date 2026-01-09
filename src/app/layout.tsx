import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navigation/Navbar"

export const metadata: Metadata = {
  title: "Talentos de Vida | Descubre Tu Propósito y Construye Tu Negocio Desde Casa",
  description:
    "Para la mamá que siente que desapareció detrás de los roles de otros. Descubre cómo construir tu negocio desde casa en 90 días sin sacrificar tiempo familiar.",
  keywords: [
    "emprendimiento femenino",
    "mamás emprendedoras",
    "negocio desde casa",
    "propósito de vida",
    "desarrollo personal",
    "mujeres con propósito",
    "Daysi Aldaz",
    "Talentos de Vida",
  ],
  authors: [{ name: "Daysi Aldaz" }],
  openGraph: {
    title: "Talentos de Vida | Descubre Tu Propósito",
    description:
      "Para la mamá que siente que desapareció detrás de los roles de otros. Descubre cómo construir tu negocio desde casa en 90 días.",
    type: "website",
    locale: "es_ES",
    siteName: "Talentos de Vida",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talentos de Vida | Descubre Tu Propósito",
    description:
      "Para la mamá que siente que desapareció detrás de los roles de otros. Descubre cómo construir tu negocio desde casa en 90 días.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
