import { Hero } from "@/components/sections/Hero"
import { PainPoints } from "@/components/sections/PainPoints"
import { Story } from "@/components/sections/Story"
import { Transformation } from "@/components/sections/Transformation"
import { Method } from "@/components/sections/Method"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { LeadMagnet } from "@/components/sections/LeadMagnet"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Story />
      <Transformation />
      <Method />
      <Testimonials />
      <FAQ />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  )
}
