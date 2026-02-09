import type { Metadata } from "next";
import QuizContainer from "@/components/quiz/quiz-container";

export const metadata: Metadata = {
  title: "Quiz de Talentos | Talentos de Vida",
  description:
    "Descubre tus talentos más valiosos que ya tienes pero no ves. En 10 minutos descubrirás qué talentos únicos tienes que el mundo necesita.",
  openGraph: {
    title: "Quiz de Talentos | Talentos de Vida",
    description:
      "Para la mamá que siente que perdió su identidad… Tu verdadero yo nunca se fue, solo está escondido.",
    type: "website",
    locale: "es_ES",
  },
};

export default function QuizPage() {
  return <QuizContainer />;
}
