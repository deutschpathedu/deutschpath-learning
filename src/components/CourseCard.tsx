import Link from "next/link";
import type { Course } from "@/src/types/curriculum";
import { ProgressBar } from "@/src/components/ProgressBar";

interface CourseCardProps {
  course: Course;
  progress: number;
}

export function CourseCard({ course, progress }: CourseCardProps) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="course-level">{course.level}</span>
        <span className="batch-label">{course.batch}</span>
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <ProgressBar value={progress} label="আপনার অগ্রগতি" />
      <Link className="button button-dark button-full" href="/learn/a1/module-01">
        শেখা চালিয়ে যান <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
