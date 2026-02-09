export type TalentType =
  | "organizadora"
  | "guia"
  | "creativa"
  | "educadora"
  | "unificadora";

export interface QuizAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
}

const letterTalentMap: Record<string, TalentType> = {
  A: "organizadora",
  B: "guia",
  C: "creativa",
  D: "educadora",
  E: "unificadora",
};

export function calculateQuizResult(answers: QuizAnswers): TalentType {
  const letterCounts: Record<string, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  Object.values(answers).forEach((answer) => {
    if (letterCounts[answer] !== undefined) {
      letterCounts[answer]++;
    }
  });

  const maxCount = Math.max(...Object.values(letterCounts));
  const topLetters = Object.entries(letterCounts)
    .filter(([, count]) => count === maxCount)
    .map(([letter]) => letter);

  if (topLetters.length === 1) {
    return letterTalentMap[topLetters[0]];
  }

  // Tiebreaker: use Q7 answer first (hidden identity - most revealing)
  const q7Answer = answers.q7;
  if (topLetters.includes(q7Answer)) {
    return letterTalentMap[q7Answer];
  }

  // Second tiebreaker: use Q6 answer (natural recognition)
  const q6Answer = answers.q6;
  if (topLetters.includes(q6Answer)) {
    return letterTalentMap[q6Answer];
  }

  return letterTalentMap[topLetters[0]];
}

export function getTalentDisplayName(talent: TalentType): string {
  const names: Record<TalentType, string> = {
    organizadora: "La Organizadora Natural",
    guia: "La Guía Sabia",
    creativa: "La Creativa Solucionadora",
    educadora: "La Educadora Natural",
    unificadora: "La Unificadora",
  };
  return names[talent];
}
