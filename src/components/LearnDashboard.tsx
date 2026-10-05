"use client";

import Link from "next/link";
import { a1Course } from "@/src/data/curriculum";
import { useLearningProgress } from "@/src/hooks/useLearningProgress";
import { getCourseProgress } from "@/src/lib/progress";
import { ModuleCard } from "@/src/components/ModuleCard";

export function LearnDashboard() {
  const progress = useLearningProgress();
  const overall = getCourseProgress(progress);
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Learn</span></div>
      <section className="dashboard-welcome">
        <div>
          <span className="eyebrow">DEIN LERNWEG · আপনার শেখার পথ</span>
          <h1>ধাপে ধাপে,<br /><span>জার্মান শিখুন।</span></h1>
          <p>প্রতিটি ছোট পাঠ আপনাকে আরও আত্মবিশ্বাসী করে তুলবে। আপনার A1 যাত্রা এখান থেকেই শুরু।</p>
        </div>
        <div className="welcome-progress">
          <span className="welcome-progress-icon">✳</span>
          <strong>{overall}<small>%</small></strong>
          <span>German A1 সম্পন্ন</span>
        </div>
      </section>

      <section className="course-overview">
        <div className="section-heading"><div><span className="eyebrow">DEINE KURSE · আপনার কোর্স</span><h2>আপনার শেখার কোর্স</h2></div></div>
        <article className="active-course">
          <div className="active-course-main">
            <div className="course-card-top"><span className="course-level">A1</span><span className="batch-label">{a1Course.batch}</span></div>
            <h3>German A1</h3>
            <p>{a1Course.description}</p>
            <div className="active-course-progress"><span>{progress.completedLessons.length} / ৪টি পাঠ সম্পন্ন</span><strong>{overall}%</strong></div>
            <div className="progress-track"><span className="progress-fill" style={{ width: `${overall}%` }} /></div>
            <Link className="button button-red" href="/learn/a1/module-01">শেখা শুরু করুন <span aria-hidden="true">→</span></Link>
          </div>
          <div className="active-course-art" aria-hidden="true"><div className="sun-disc" /><div className="art-letter">A<span>1</span></div><div className="art-caption">LOS GEHT&apos;S!</div></div>
        </article>
      </section>

      <section className="content-section roadmap-section">
        <div className="section-heading"><div><span className="eyebrow">DEIN WEG · আপনার পথ</span><h2>একটি ভাষা, তিনটি ধাপ</h2></div><p>ভিত্তি থেকে আত্মবিশ্বাসী কথোপকথন—আপনার লক্ষ্য স্পষ্ট।</p></div>
        <div className="roadmap">
          {(["A1", "A2", "B1"] as const).map((level, index) => (
            <div className={`roadmap-level${index === 0 ? " roadmap-active" : ""}`} key={level}>
              <div className="roadmap-dot">{index === 0 ? "✓" : String(index + 1).padStart(2, "0")}</div>
              <div><span>{index === 0 ? "এখন শিখছেন" : "ভবিষ্যৎ কোর্স"}</span><h3>{level}</h3><p>{["ভিত্তি তৈরি করুন", "নিজের জগৎ বিস্তৃত করুন", "স্বাধীনভাবে কথা বলুন"][index]}</p></div>
              {index < 2 && <div className="roadmap-line" />}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section modules-section">
        <div className="section-heading"><div><span className="eyebrow">A1 KURSÜBERSICHT · কোর্সের মডিউল</span><h2>আপনার A1 শেখার মানচিত্র</h2></div><span className="count-label">১৬টি মডিউল</span></div>
        <div className="module-grid">
          {a1Course.modules.map((module) => (
            <ModuleCard
              key={module.number}
              module={module}
              progress={module.number === "00" ? 0 : module.number === "01" ? overall : 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
