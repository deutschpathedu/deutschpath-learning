import Link from "next/link";
import { PronunciationButton } from "@/src/components/PronunciationButton";
import type { Lesson } from "@/src/types/curriculum";

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  completed: boolean;
}

export function LessonCard({ lesson, index, completed }: LessonCardProps) {
  return (
    <article className="lesson-card">
      <div className="lesson-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="lesson-card-copy">
        <div className="lesson-title-row">
          <h3>{lesson.title}</h3>
          {completed && <span className="completed-pill">সম্পন্ন ✓</span>}
        </div>
        <p>{lesson.description}</p>
        <div className="lesson-preview">
          <span>{lesson.examples[0].german}</span>
          <PronunciationButton text={lesson.examples[0].german} />
        </div>
      </div>
      <Link className="button button-outline lesson-open" href={`/learn/a1/module-01/${lesson.id}`}>
        {completed ? "আবার দেখুন" : "পাঠ শুরু"} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
