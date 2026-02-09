import { TalentType } from "@/lib/quiz-logic";

export interface TalentProfile {
  slug: TalentType;
  name: string;
  headline: string;
  tagline: string;
  identityLost: string;
  whyGold: string;
  examples: string[];
  blindSpot: string;
  nextStep: string;
  daysisMessage: string;
}

export const talentProfiles: Record<TalentType, TalentProfile> = {
  organizadora: {
    slug: "organizadora",
    name: "La Organizadora Natural",
    headline: "Tu tesoro escondido: Creas orden donde otros ven caos",
    tagline: "Creas orden donde otros ven caos",
    identityLost:
      "Eres la que siempre pudo ver el sistema detrás del desorden. Antes de ser mamá, eras la amiga que organizaba los viajes grupales, la que tenía su cuarto perfecto en la universidad, la que sabía exactamente dónde estaba todo.",
    whyGold:
      "En un mundo caótico, tu habilidad de crear orden es medicina. No solo organizas espacios, organizas VIDAS. Das paz mental a familias estresadas.",
    examples: [
      "Haces que una casa funcione como reloj suizo",
      "Coordinas 4 horarios diferentes sin despeinarte",
      "Ves soluciones de espacio que otros no ven",
      "Creas sistemas que la familia mantiene solos",
    ],
    blindSpot:
      "Crees que \"cualquiera puede hacerlo\" pero llevas años viendo a otras mamás luchar con exactamente lo que tú resuelves naturalmente.",
    nextStep:
      "Deja de minimizar tu don. Empieza a ver tu hogar como tu portfolio viviente de transformación.",
    daysisMessage:
      "Tu casa funciona porque TÚ tienes un don. Imagínate ayudando a familias caóticas a encontrar su paz. Tu orden externo crea orden interno.",
  },
  guia: {
    slug: "guia",
    name: "La Guía Sabia",
    headline: "Tu tesoro escondido: Tu experiencia vale más que cualquier título",
    tagline: "Tu experiencia vale más que cualquier título",
    identityLost:
      "Antes de los roles de mamá y esposa, eras la amiga consejera. La que tenía las palabras exactas. La que todos buscaban cuando necesitaban claridad. Esa mujer sabia sigue ahí.",
    whyGold:
      "En una época de información infinita, la sabiduría real es escasa. Tu experiencia vivida, tus lecciones aprendidas, tu intuición desarrollada — eso no se aprende en libros.",
    examples: [
      "La gente te busca en sus crisis más difíciles",
      "Ves patrones que otros no notan",
      "Das perspectiva cuando todos están perdidos",
      "Tus palabras cambian el rumbo de las conversaciones",
    ],
    blindSpot:
      "Piensas que \"solo estás siendo buena amiga\" cuando en realidad estás haciendo coaching profesional gratuitamente.",
    nextStep:
      "Reconoce que tu capacidad de guiar es un regalo, no solo una personalidad amigable.",
    daysisMessage:
      "Llevas años ayudando a mujeres a encontrar su camino. Es hora de que esto también sea tu camino hacia la libertad.",
  },
  creativa: {
    slug: "creativa",
    name: "La Creativa Solucionadora",
    headline: "Tu tesoro escondido: Haces magia con recursos limitados",
    tagline: "Haces magia con recursos limitados",
    identityLost:
      "Siempre fuiste la que encontraba la forma. La que improvisaba soluciones. La que hacía algo hermoso de la nada. Esa creatividad no se fue, solo está canalizada en la supervivencia diaria.",
    whyGold:
      "En un mundo de limitaciones (tiempo, dinero, espacio), tu habilidad de crear más con menos es superpoder puro. Ves posibilidades donde otros ven problemas.",
    examples: [
      "Transformas espacios con $50 y creatividad",
      "Encuentras usos alternativos para todo",
      "Haces que la comida simple se vea gourmet",
      "Creas momentos especiales sin presupuesto",
    ],
    blindSpot:
      "Lo que llamas \"hacer lo que puedo\" otros lo llaman \"talento increíble.\" Tu resourcefulness es tu marca personal.",
    nextStep:
      "Para de disculparte por no tener \"lo mejor\" y empieza a celebrar tu genio creativo.",
    daysisMessage:
      "Tu creatividad bajo presión es exactamente lo que el mundo necesita. Imagínate monetizando esa magia que haces a diario.",
  },
  educadora: {
    slug: "educadora",
    name: "La Educadora Natural",
    headline: "Tu tesoro escondido: Tienes el don de hacer entender",
    tagline: "Tienes el don de hacer entender",
    identityLost:
      "Siempre fuiste la que explicaba mejor. En la escuela, en el trabajo, en la familia. La paciencia y claridad que tienes no son casualidad — es tu naturaleza educadora emergiendo.",
    whyGold:
      "En un mundo confuso y rápido, alguien que puede explicar las cosas con paciencia y claridad es invaluable. No solo informas, transformas la comprensión.",
    examples: [
      "Tus hijos entienden conceptos que otros niños no",
      "Las amigas te piden que les expliques de todo",
      "Tienes paciencia infinita para enseñar",
      "Encuentras formas simples para cosas complejas",
    ],
    blindSpot:
      "Tu paciencia no es \"normal.\" Tu habilidad para enseñar no es \"obvio.\" Tienes un don real para facilitar el aprendizaje.",
    nextStep:
      "Reconoce que tu forma de enseñar es única y valiosa, no solo \"lo que hace cualquier mamá.\"",
    daysisMessage:
      "Tu paciencia y claridad son regalos raros en este mundo acelerado. Imagínate el impacto que podrías tener enseñando lo que sabes.",
  },
  unificadora: {
    slug: "unificadora",
    name: "La Unificadora",
    headline: "Tu tesoro escondido: Eres el puente entre mundos",
    tagline: "Eres el puente entre mundos",
    identityLost:
      "Siempre fuiste la coordinadora social. La que conocía a todos, la que hacía las presentaciones, la que creaba comunidad natural. Ese don de conectar sigue siendo tuyo.",
    whyGold:
      "En una era de aislamiento y desconexión, alguien que genuinamente conecta personas y crea comunidad tiene un valor incalculable. Eres arquitecta de relaciones.",
    examples: [
      "Eres el hub de información de tu círculo",
      "Cuando alguien necesita algo, te preguntan a ti",
      "Haces que grupos extraños se sientan familia",
      "Recuerdas detalles importantes de todos",
    ],
    blindSpot:
      "Tu habilidad social no es \"ser amigable.\" Es inteligencia emocional y don natural de la comunidad.",
    nextStep:
      "Ve tu naturaleza unificadora como el superpoder que es, no solo como \"ser social.\"",
    daysisMessage:
      "Tu habilidad de conectar personas es tu superpoder. En un mundo fragmentado, tú eres el pegamento que todos necesitan.",
  },
};

export function getTalentProfile(slug: TalentType): TalentProfile {
  return talentProfiles[slug];
}
