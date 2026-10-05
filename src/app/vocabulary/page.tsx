import Link from "next/link";
import { PronunciationButton } from "@/src/components/PronunciationButton";
import { lessons } from "@/src/data/curriculum";

const vocabulary = lessons.flatMap((lesson) => lesson.vocabulary);

export default function VocabularyPage() {
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Vocabulary</span></div>
      <section className="page-intro"><span className="eyebrow">WORTSCHATZ · শব্দভাণ্ডার</span><h1>শব্দ শিখুন,<br /><span>কথা বলুন।</span></h1><p>Erste Schritte মডিউলের নতুন শব্দ—বাংলা অর্থ এবং জার্মান উচ্চারণসহ।</p><Link className="text-link" href="/learn/a1/module-01">Erste Schritte-এ ফিরে যান →</Link></section>
      <section className="vocabulary-page-list" aria-label="German A1 শব্দভাণ্ডার">
        <div className="vocabulary-table-head"><span>DEUTSCH</span><span>বাংলা অর্থ</span><span>শুনুন</span></div>
        {vocabulary.map((word, index) => (
          <div className="vocabulary-table-row" key={`${word.german}-${index}`}>
            <span className="vocabulary-count">{String(index + 1).padStart(2, "0")}</span>
            <strong lang="de">{word.german}</strong><span lang="bn">{word.bengali}</span><PronunciationButton text={word.pronunciation ?? word.german} />
          </div>
        ))}
      </section>
    </main>
  );
}
