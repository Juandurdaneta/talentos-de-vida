export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Cuando tus amigas te dicen 'no sé cómo lo haces', ¿de qué están hablando?",
    options: [
      { id: "A", text: "Organizar espacios caóticos en minutos" },
      { id: "B", text: "Calmar situaciones tensas con las palabras exactas" },
      { id: "C", text: "Crear algo bonito con lo que tengo a mano" },
      { id: "D", text: "Explicar cosas complicadas de forma simple" },
      { id: "E", text: "Conectar personas que se necesitan" },
    ],
  },
  {
    id: "q2",
    question: "En el grupo de la escuela, ¿para qué te etiquetan siempre?",
    options: [
      { id: "A", text: "\"¿Cómo organizaste la fiesta tan perfecta?\"" },
      { id: "B", text: "\"Necesito tu consejo sobre este drama...\"" },
      { id: "C", text: "\"¿Puedes ayudarme a escribir este mensaje?\"" },
      { id: "D", text: "\"¿Cómo le explico esto a mi hijo?\"" },
      { id: "E", text: "\"¿Conoces a alguien que...?\"" },
    ],
  },
  {
    id: "q3",
    question: "Cuando hay un problema en casa, tu primera reacción es:",
    options: [
      { id: "A", text: "Reorganizar todo hasta que fluya mejor" },
      { id: "B", text: "Escuchar a todos y encontrar la solución que funcione" },
      { id: "C", text: "Buscar una forma creativa de solucionarlo" },
      { id: "D", text: "Investigar y enseñar a otros cómo resolverlo" },
      { id: "E", text: "Llamar a la persona perfecta para esto" },
    ],
  },
  {
    id: "q4",
    question: "¿En cuál de estas situaciones te sientes MÁS energizada?",
    options: [
      { id: "A", text: "Cuando logro que un espacio desordenado quede perfecto" },
      { id: "B", text: "Cuando alguien me dice \"me ayudaste tanto\"" },
      { id: "C", text: "Cuando creo algo único con mis propias manos" },
      { id: "D", text: "Cuando veo que alguien entiende algo que le enseñé" },
      { id: "E", text: "Cuando logro que dos personas se conecten" },
    ],
  },
  {
    id: "q5",
    question: "¿Cuál de estos desafíos has superado y ahora puedes guiar a otras?",
    options: [
      { id: "A", text: "Crear sistemas que funcionen en el caos de la vida familiar" },
      { id: "B", text: "Navegar relaciones difíciles con paciencia y sabiduría" },
      { id: "C", text: "Hacer que los recursos limitados rindan al máximo" },
      { id: "D", text: "Aprender cosas nuevas siendo mamá ocupada" },
      { id: "E", text: "Construir comunidad en lugares donde no conocía a nadie" },
    ],
  },
  {
    id: "q6",
    question: "Completa esta frase que has escuchado más de una vez: 'Deberías cobrar por...'",
    options: [
      { id: "A", text: "Organizar casas/eventos/vida en general" },
      { id: "B", text: "Dar consejos y escuchar a la gente" },
      { id: "C", text: "Las cosas bonitas que haces/creas" },
      { id: "D", text: "Enseñar/explicar/ayudar a entender" },
      { id: "E", text: "Conectar personas y crear comunidad" },
    ],
  },
  {
    id: "q7",
    question: "Antes de ser mamá, la gente te decía que eras la que siempre:",
    options: [
      { id: "A", text: "Tenía todo bajo control y organizado" },
      { id: "B", text: "Sabía exactamente qué decir cuando alguien necesitaba apoyo" },
      { id: "C", text: "Encontraba formas únicas de hacer las cosas" },
      { id: "D", text: "Explicaba las cosas mejor que nadie" },
      { id: "E", text: "Conocía a todo el mundo y conectaba grupos" },
    ],
  },
];
