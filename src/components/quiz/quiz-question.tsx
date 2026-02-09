"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuizQuestion as QuizQuestionType } from "@/data/quiz-questions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string;
  onAnswer: (questionId: string, answerId: string) => void;
  onBack: () => void;
  isFirst: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  onBack,
  isFirst,
}: QuizQuestionProps) {
  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-circular text-sm">
          {isFirst ? "Volver al inicio" : "Pregunta anterior"}
        </span>
      </button>

      {/* Question */}
      <h2 className="font-reckless text-2xl md:text-3xl text-gray-800 mb-8 text-center leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              onClick={() => onAnswer(question.id, option.id)}
              className={cn(
                "w-full text-left p-4 border-2 rounded-2xl transition-all duration-300 group",
                isSelected
                  ? "border-golden bg-golden/10"
                  : "border-gray-200 bg-white hover:border-golden/50 hover:shadow-soft"
              )}
            >
              <div className="flex items-center gap-4">
                {/* Letter Indicator */}
                <div
                  className={cn(
                    "w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center font-satoshi text-lg font-medium transition-colors duration-300",
                    isSelected
                      ? "bg-golden text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-golden/20 group-hover:text-golden"
                  )}
                >
                  {isSelected ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    option.id
                  )}
                </div>

                {/* Option Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "font-circular text-base transition-colors duration-300",
                      isSelected
                        ? "text-gray-800 font-medium"
                        : "text-gray-600 group-hover:text-gray-800"
                    )}
                  >
                    {option.text}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
