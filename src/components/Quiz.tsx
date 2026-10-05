"use client";

import { useState } from "react";
import type { QuizQuestionData } from "@/src/data/quiz";

interface QuizProps {
  questions: QuizQuestionData[];
}

export function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const score = answers.reduce<number>((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);

  function retry() {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
  }

  return (
    <section className="quiz-panel" aria-labelledby="quiz-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WISSEN TESTEN · QUIZ 01</span>
          <h2 id="quiz-title">এবার একটু অনুশীলন</h2>
          <p>প্রতিটি প্রশ্নের একটি উত্তর নির্বাচন করুন। জমা দেওয়ার আগে সঠিক উত্তর দেখানো হবে না।</p>
        </div>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <div className="quiz-questions">
          {questions.map((question, index) => (
            <fieldset className="quiz-question" key={question.prompt}>
              <legend><span>{String(index + 1).padStart(2, "0")}</span>{question.prompt}</legend>
              <div className="quiz-options">
                {question.choices.map((choice, choiceIndex) => {
                  const selected = answers[index] === choiceIndex;
                  const correct = submitted && question.answer === choiceIndex;
                  const incorrect = submitted && selected && !correct;
                  return (
                    <label
                      className={`quiz-option${selected ? " is-selected" : ""}${correct ? " is-correct" : ""}${incorrect ? " is-incorrect" : ""}`}
                      key={choice}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={choiceIndex}
                        checked={selected}
                        disabled={submitted}
                        onChange={() => setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? choiceIndex : answer))}
                      />
                      <span>{choice}</span>
                      {correct && <span className="answer-mark" aria-label="সঠিক উত্তর">✓</span>}
                      {incorrect && <span className="answer-mark" aria-label="ভুল উত্তর">×</span>}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <p className={`question-feedback${answers[index] === question.answer ? " feedback-correct" : " feedback-incorrect"}`} role="status">
                  {answers[index] === question.answer
                    ? "ঠিক উত্তর—Sehr gut!"
                    : answers[index] === null
                      ? `উত্তর দেওয়া হয়নি। সঠিক উত্তর: ${question.choices[question.answer]}`
                      : `আবার চেষ্টা করুন। সঠিক উত্তর: ${question.choices[question.answer]}`}
                </p>
              )}
            </fieldset>
          ))}
        </div>
        {submitted ? (
          <div className="quiz-result" role="status">
            <div><span className="eyebrow">আপনার ফলাফল</span><strong>{score} / {questions.length}</strong><p>{score >= 7 ? "চমৎকার! আরেকবার ঝালিয়ে নিয়ে এগিয়ে যান।" : "ভালো চেষ্টা! পাঠগুলো দেখে আবার কুইজ দিন।"}</p></div>
            <button className="button button-dark" type="button" onClick={retry}>আবার দিন ↻</button>
          </div>
        ) : (
          <button className="button button-red" type="submit" disabled={answers.some((answer) => answer === null)}>
            উত্তর জমা দিন <span aria-hidden="true">→</span>
          </button>
        )}
      </form>
    </section>
  );
}
