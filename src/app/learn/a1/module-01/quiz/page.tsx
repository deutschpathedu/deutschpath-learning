import Link from "next/link";
import { Quiz } from "@/src/components/Quiz";
import { moduleOneQuiz } from "@/src/data/quiz";

export default function ModuleQuizPage() {
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/learn">German A1</Link><span>/</span><Link href="/learn/a1/module-01">Erste Schritte</Link><span>/</span><span>Quiz 01</span></div>
      <div className="lesson-hero quiz-hero"><span className="eyebrow">MODUL 01 · WIEDERHOLUNG</span><h1>Module Quiz 01<span>.</span></h1><p>শেখা বিষয়গুলো মনে আছে? নিজের মতো করে উত্তর দিন—শেষে ফলাফল দেখুন।</p></div>
      <Quiz questions={moduleOneQuiz} />
      <div className="back-module"><Link className="text-link" href="/learn/a1/module-01">← মডিউলে ফিরে যান</Link></div>
    </main>
  );
}
