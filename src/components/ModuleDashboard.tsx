"use client";

import Link from "next/link";
import { useLearningProgress } from "@/src/hooks/useLearningProgress";
import { lessons } from "@/src/data/curriculum";
import { getCourseProgress } from "@/src/lib/progress";
import { LessonCard } from "@/src/components/LessonCard";
import { ProgressBar } from "@/src/components/ProgressBar";

export function ModuleDashboard() {
  const progress = useLearningProgress();
  const percent = getCourseProgress(progress);
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/learn">German A1</Link><span>/</span><span>01 · Erste Schritte</span></div>
      <section className="module-hero">
        <div>
          <span className="eyebrow">MODUL 01 · GERMAN A1</span>
          <h1>Erste Schritte<span>.</span></h1>
          <p>জার্মান শেখার একদম প্রথম ধাপ—শুনুন, বুঝুন, তারপর নিজে বলুন।</p>
        </div>
        <div className="module-hero-note"><span>01</span><p>ছোট ধাপে<br />শুরু হোক কথা</p></div>
      </section>
      <section className="module-progress-panel">
        <div><span className="eyebrow">আপনার শেখার পথ</span><h2>{progress.completedLessons.length} / {lessons.length} পাঠ সম্পন্ন</h2></div>
        <ProgressBar value={percent} label="Erste Schritte অগ্রগতি" />
      </section>

      <section className="content-section">
        <div className="section-heading"><div><span className="eyebrow">DIE LEKTIONEN · পাঠসমূহ</span><h2>একটি পাঠ করে এগিয়ে চলুন</h2></div><span className="count-label">০৪টি পাঠ</span></div>
        <div className="lesson-list">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index} completed={progress.completedLessons.includes(lesson.id)} />
          ))}
        </div>
      </section>

      <section className="content-section module-extras">
        <div className="section-heading"><div><span className="eyebrow">WEITER ÜBEN · আরও অনুশীলন</span><h2>শেখাকে পোক্ত করুন</h2></div></div>
        <div className="resource-grid">
          <Link className="resource-card" href="/vocabulary"><span>01</span><div><h3>Vocabulary 01</h3><p>মডিউলের শব্দগুলো এক জায়গায়</p></div><b>→</b></Link>
          <Link className="resource-card" href="/practice#grammar"><span>G</span><div><h3>Grammar 01</h3><p>Personalpronomen + sein</p></div><b>→</b></Link>
          <Link className="resource-card" href="/practice#speaking"><span>↗</span><div><h3>Speaking Practice 01</h3><p>নিজেকে পরিচয় করানোর অনুশীলন</p></div><b>→</b></Link>
          <Link className="resource-card" href="/practice#assignment"><span>✓</span><div><h3>Assignment 01</h3><p>নিজের পরিচয়ের ছোট কাজ</p></div><b>→</b></Link>
          <Link className="resource-card resource-card-quiz" href="/learn/a1/module-01/quiz"><span>?</span><div><h3>Module Quiz 01</h3><p>৯টি প্রশ্নে নিজের জ্ঞান যাচাই করুন</p></div><b>→</b></Link>
        </div>
      </section>
    </main>
  );
}
