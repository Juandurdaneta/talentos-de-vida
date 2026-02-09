import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { talentProfiles, getTalentProfile } from "@/data/quiz-results";
import { TalentType } from "@/lib/quiz-logic";

interface Props {
  params: Promise<{ talent: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const talent = resolvedParams.talent as TalentType;
  const profile = talentProfiles[talent];

  if (!profile) {
    return {
      title: "Resultado No Encontrado | Talentos de Vida",
    };
  }

  return {
    title: `${profile.name} | Tu Talento | Talentos de Vida`,
    description: profile.tagline,
    openGraph: {
      title: `${profile.name} | Tu Talento Descubierto`,
      description: profile.tagline,
      type: "website",
      locale: "es_ES",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(talentProfiles).map((talent) => ({
    talent,
  }));
}

export default async function QuizResultsPage({ params }: Props) {
  const resolvedParams = await params;
  const talent = resolvedParams.talent as TalentType;
  const profile = talentProfiles[talent];

  if (!profile) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-teal via-teal to-teal-light">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-golden/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 organic-shape-1 bg-white/5" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4 text-golden" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-satoshi font-bold text-sm uppercase tracking-wider">
                Tu Talento Revelado
              </span>
            </div>

            <h1 className="font-reckless text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Eres{" "}
              <span className="text-golden italic">{profile.name}</span>
            </h1>

            <p className="font-reckless text-xl md:text-2xl text-white/90 mb-6">
              {profile.headline}
            </p>

            <p className="font-circular text-lg text-white/80 max-w-2xl">
              Hemos analizado tus respuestas y descubrimos el talento que
              llevas dentro y que el mundo está esperando.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Lost Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-8 text-center">
            Tu Identidad Perdida{" "}
            <span className="italic text-teal">(que nunca se fue)</span>
          </h2>

          <p className="font-circular text-lg text-gray-600 leading-relaxed mb-6">
            {profile.identityLost}
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center my-12">
            <div className="w-px h-16 bg-golden" />
          </div>
        </div>
      </section>

      {/* Why It's Gold Section */}
      <section className="gradient-warm py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-golden" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h2 className="font-reckless text-2xl md:text-3xl text-gray-800">
              Por Qué Es Oro
            </h2>
          </div>

          <p className="font-circular text-lg text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            {profile.whyGold}
          </p>

          {/* Examples Grid */}
          <h3 className="font-satoshi font-bold text-lg text-gray-800 text-center mb-8">
            Ejemplos de Tu Poder (que no valoras):
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {profile.examples.map((example, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-soft border-l-4 border-golden"
              >
                <div className="flex items-start gap-3">
                  <span className="text-golden font-bold text-lg leading-none mt-0.5">✓</span>
                  <p className="font-circular text-gray-600">{example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blind Spot Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-8 text-center">
            Lo Que <span className="italic text-coral">No Ves</span>
          </h2>

          <div className="bg-coral/10 border border-coral/20 p-8 rounded-3xl text-center">
            <p className="font-circular text-lg text-gray-700 leading-relaxed">
              {profile.blindSpot}
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center my-12">
            <div className="w-px h-16 bg-golden" />
          </div>

          <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-8 text-center">
            Tu <span className="italic text-teal">Próximo Paso</span>
          </h2>

          <div className="bg-teal/5 border border-teal/20 p-8 rounded-3xl text-center">
            <p className="font-circular text-lg text-gray-700 leading-relaxed">
              {profile.nextStep}
            </p>
          </div>
        </div>
      </section>

      {/* Daysi's Message Section */}
      <section className="gradient-warm py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-golden/15 text-golden px-4 py-2 rounded-full mb-8">
            <span className="font-satoshi font-bold text-sm uppercase tracking-wider">
              Mensaje de Daysi
            </span>
          </div>

          <blockquote className="font-reckless text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-8">
            &ldquo;{profile.daysisMessage}&rdquo;
          </blockquote>

          <p className="font-satoshi font-bold text-gray-600">
            — Daysi Aldaz
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-golden/15 text-golden px-4 py-2 rounded-full mb-6">
            <span className="font-satoshi font-bold text-sm uppercase tracking-wider">
              Tu Siguiente Paso
            </span>
          </div>

          <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-6">
            ¿Lista para transformar tu talento de{" "}
            <span className="italic text-teal">{profile.name}</span>{" "}
            en tu camino hacia la libertad?
          </h2>

          <p className="font-circular text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ahora que conoces tu talento escondido, es momento de dar el siguiente
            paso. Agenda una conversación con Daysi y descubre cómo convertir
            tu don en una fuente de ingresos.
          </p>

          <Link href="/contacto">
            <button className="btn-teal group inline-flex items-center gap-2">
              Quiero Hablar con Daysi
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>

          {/* Trust */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-circular text-sm text-gray-400 uppercase tracking-wider">
              Talentos de Vida · Construye tu negocio desde casa en 90 días
            </p>
          </div>
        </div>
      </section>

      {/* Final Nudge */}
      <section className="bg-golden/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-reckless text-xl md:text-2xl text-gray-800 italic">
            &ldquo;Tu talento nunca se fue. Solo estaba esperando a que lo
            descubrieras. Hoy es ese día.&rdquo;
          </p>
        </div>
      </section>
    </main>
  );
}
