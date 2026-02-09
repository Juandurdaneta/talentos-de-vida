"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import QuizIntro from "./quiz-intro";
import QuizQuestion from "./quiz-question";
import QuizProgress from "./quiz-progress";
import QuizLeadForm from "./quiz-lead-form";
import { quizQuestions } from "@/data/quiz-questions";
import { calculateQuizResult, QuizAnswers, getTalentDisplayName } from "@/lib/quiz-logic";
import { QuizEmailFormData } from "@/lib/validations";

type QuizStep = "intro" | "questions" | "lead-form";

export default function QuizContainer() {
  const router = useRouter();
  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = useCallback(() => {
    setStep("questions");
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, answerId: string) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answerId,
      }));

      if (currentQuestion < quizQuestions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
        }, 300);
      } else {
        setTimeout(() => {
          setStep("lead-form");
        }, 300);
      }
    },
    [currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setStep("intro");
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(
    async (formData: QuizEmailFormData) => {
      setIsSubmitting(true);

      try {
        const resultTalent = calculateQuizResult(answers);
        const talentName = getTalentDisplayName(resultTalent);

        const response = await fetch("/api/quiz-submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.firstName,
            email: formData.email,
            quizAnswers: answers,
            resultTalent,
            talentName,
          }),
        });

        if (!response.ok) {
          console.error("Quiz submission failed");
        }

        router.push(`/quiz/results/${resultTalent}`);
      } catch (error) {
        console.error("Error submitting quiz:", error);
        setIsSubmitting(false);
      }
    },
    [answers, router]
  );

  return (
    <div className="min-h-screen bg-off-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuizIntro onStart={handleStart} />
            </motion.div>
          )}

          {step === "questions" && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <QuizProgress
                current={currentQuestion + 1}
                total={quizQuestions.length}
              />
              <QuizQuestion
                question={quizQuestions[currentQuestion]}
                selectedAnswer={
                  answers[
                    quizQuestions[currentQuestion].id as keyof QuizAnswers
                  ]
                }
                onAnswer={handleAnswer}
                onBack={handleBack}
                isFirst={currentQuestion === 0}
              />
            </motion.div>
          )}

          {step === "lead-form" && (
            <motion.div
              key="lead-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuizLeadForm
                onSubmit={handleSubmit}
                onBack={() => setStep("questions")}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
