import { notFound } from "next/navigation";
import { LessonExperience } from "@/src/components/LessonExperience";
import { lessons, lessonById } from "@/src/data/curriculum";

interface LessonPageProps {
  params: { lessonId: string };
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ lessonId: lesson.id }));
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = lessonById(params.lessonId);
  if (!lesson) notFound();
  const index = lessons.findIndex((item) => item.id === lesson.id);
  return (
    <LessonExperience
      lesson={lesson}
      previousId={lessons[index - 1]?.id}
      nextId={lessons[index + 1]?.id}
    />
  );
}
