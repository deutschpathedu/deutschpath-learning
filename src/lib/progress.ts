const STORAGE_KEY = "deutschpath-progress-v1";

export interface LearningProgress {
  completedLessons: string[];
}

const emptyProgress: LearningProgress = { completedLessons: [] };

export function getProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return emptyProgress;
  let parsed: unknown;
  try {
    parsed = JSON.parse(saved);
  } catch {
    console.error("Saved DeutschPath progress is not valid JSON.");
    return emptyProgress;
  }
  if (
    typeof parsed === "object" &&
    parsed !== null &&
    "completedLessons" in parsed &&
    Array.isArray(parsed.completedLessons) &&
    parsed.completedLessons.every((item) => typeof item === "string")
  ) {
    return { completedLessons: parsed.completedLessons };
  }
  return emptyProgress;
}

export function markLessonComplete(lessonId: string): LearningProgress {
  const progress = getProgress();
  const next = progress.completedLessons.includes(lessonId)
    ? progress
    : { completedLessons: [...progress.completedLessons, lessonId] };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("deutschpath-progress-change"));
  return next;
}

export function getCourseProgress(progress: LearningProgress): number {
  return Math.round((progress.completedLessons.length / lessonsCount) * 100);
}

const lessonsCount = 4;
