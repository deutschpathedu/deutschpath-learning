"use client";

import Link from "next/link";
import { a1Course, lessons } from "@/src/data/curriculum";
import { useLearningProgress } from "@/src/hooks/useLearningProgress";
import { getCourseProgress } from "@/src/lib/progress";
import { ProgressBar } from "@/src/components/ProgressBar";

export default function ProgressPage() {
  const progress = useLearningProgress();
  const completed = lessons.filter((lesson) => progress.completedLessons.includes(lesson.id));
  const percent = getCourseProgress(progress);
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Progress</span></div>
      <section className="page-intro"><span className="eyebrow">DEIN FORTSCHRITT · আপনার অগ্রগতি</span><h1>প্রতিটি ধাপই<br /><span>অগ্রগতি।</span></h1><p>আপনি যে পাঠগুলো শেষ করেছেন, সেগুলো এই ব্রাউজারে সংরক্ষিত থাকে।</p></section>
      <section className="progress-summary">
        <div className="progress-summary-number"><strong>{percent}<small>%</small></strong><span>German A1 সম্পন্ন</span></div>
        <div className="progress-summary-details"><div className="course-card-top"><span className="course-level">A1</span><span className="batch-label">{a1Course.batch}</span></div><h2>{a1Course.title}</h2><ProgressBar value={percent} label="সামগ্রিক অগ্রগতি" /><p>{completed.length} / {lessons.length} পাঠ সম্পন্ন</p><Link className="button button-dark" href="/learn">শেখা চালিয়ে যান →</Link></div>
      </section>
      <section className="content-section completed-section"><div className="section-heading"><div><span className="eyebrow">DEINE LEKTIONEN · আপনার পাঠ</span><h2>পাঠের অগ্রগতি</h2></div></div>
        <div className="completed-list">{lessons.map((lesson, index) => {
          const done = progress.completedLessons.includes(lesson.id);
          return <Link key={lesson.id} href={`/learn/a1/module-01/${lesson.id}`} className="completed-row"><span className={`completed-check${done ? " done" : ""}`}>{done ? "✓" : String(index + 1).padStart(2, "0")}</span><div><strong>{lesson.title}</strong><span>Erste Schritte · পাঠ {index + 1}</span></div><span className={`completed-state${done ? " state-done" : ""}`}>{done ? "সম্পন্ন" : "শুরু হয়নি"}</span><span aria-hidden="true">→</span></Link>;
        })}</div>
      </section>
    </main>
  );
}
