"use client";

import Link from "next/link";
import { markLessonComplete } from "@/src/lib/progress";
import { useLearningProgress } from "@/src/hooks/useLearningProgress";
import { PronunciationButton } from "@/src/components/PronunciationButton";
import type { Lesson } from "@/src/types/curriculum";

interface LessonExperienceProps {
  lesson: Lesson;
  previousId?: string;
  nextId?: string;
}

export function LessonExperience({ lesson, previousId, nextId }: LessonExperienceProps) {
  const progress = useLearningProgress();
  const completed = progress.completedLessons.includes(lesson.id);
  const nextHref = nextId ? `/learn/a1/module-01/${nextId}` : "/learn/a1/module-01";
  return (
    <main className="page-main lesson-page">
      <div className="breadcrumb"><Link href="/learn">শেখা</Link><span>/</span><Link href="/learn/a1/module-01">Erste Schritte</Link><span>/</span><span>{lesson.title}</span></div>
      <div className="lesson-hero">
        <span className="eyebrow">GERMAN A1 · ERSTE SCHRITTE</span>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>

      <section className="lesson-section objectives">
        <div className="section-icon">✦</div>
        <div><span className="eyebrow">LERNZIELE · শেখার লক্ষ্য</span><h2>এই পাঠ শেষে আপনি পারবেন</h2>
          <ul>{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
        </div>
      </section>

      <section className="lesson-section explanation">
        <span className="eyebrow">সহজ ব্যাখ্যা</span>
        <p>{lesson.explanation}</p>
      </section>

      <section className="lesson-section">
        <div className="section-heading"><div><span className="eyebrow">DEUTSCH · বাংলা অর্থ</span><h2>উদাহরণ শুনুন ও বলুন</h2></div></div>
        <div className="example-list">
          {lesson.examples.map((example) => (
            <article className="example-row" key={example.german}>
              <div><strong lang="de">{example.german}</strong><p lang="bn">{example.bengali}</p></div>
              <PronunciationButton text={example.german} />
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <div className="section-heading"><div><span className="eyebrow">NEUE WÖRTER · নতুন শব্দ</span><h2>এই পাঠের শব্দভাণ্ডার</h2></div></div>
        <div className="vocabulary-list">
          {lesson.vocabulary.map((word) => (
            <div className="vocabulary-row" key={word.german}>
              <strong lang="de">{word.german}</strong>
              <span lang="bn">{word.bengali}</span>
              <PronunciationButton text={word.pronunciation ?? word.german} />
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section practice-box">
        <span className="eyebrow">JETZT DU · এবার আপনি</span>
        <h2>নিজের পরিচয় দিন</h2>
        <p>ফাঁকা জায়গাগুলো পূরণ করে জোরে বলুন। উচ্চারণ শুনতে স্পিকার ব্যবহার করুন।</p>
        <div className="practice-lines">
          {["Ich heiße ...", "Ich komme aus ...", "Ich wohne in ...", "Ich spreche ..."].map((phrase) => (
            <div key={phrase}><span lang="de">{phrase}</span><PronunciationButton text={phrase.replace("...", "Amina")} /></div>
          ))}
        </div>
      </section>

      <div className="lesson-complete">
        <button className="button button-red" type="button" onClick={() => markLessonComplete(lesson.id)} disabled={completed}>
          {completed ? "পাঠ সম্পন্ন হয়েছে ✓" : "পাঠ সম্পন্ন করুন ✓"}
        </button>
        <p>{completed ? "আপনার অগ্রগতি এই ব্রাউজারে সংরক্ষিত আছে।" : "সম্পন্ন করলে আপনার কোর্সের অগ্রগতি আপডেট হবে।"}</p>
      </div>
      <nav className="lesson-pagination" aria-label="পাঠ পরিবর্তন">
        {previousId ? <Link className="button button-outline" href={`/learn/a1/module-01/${previousId}`}>← আগের পাঠ</Link> : <span />}
        <Link className="text-link" href="/learn/a1/module-01">মডিউলে ফিরুন</Link>
        {nextId ? <Link className="button button-dark" href={nextHref}>পরের পাঠ →</Link> : <Link className="button button-dark" href={nextHref}>কুইজে যান →</Link>}
      </nav>
    </main>
  );
}
