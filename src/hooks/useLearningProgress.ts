"use client";

import { useEffect, useState } from "react";
import { getProgress, type LearningProgress } from "@/src/lib/progress";

export function useLearningProgress(): LearningProgress {
  const [progress, setProgress] = useState<LearningProgress>({ completedLessons: [] });

  useEffect(() => {
    const update = () => setProgress(getProgress());
    update();
    window.addEventListener("storage", update);
    window.addEventListener("deutschpath-progress-change", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("deutschpath-progress-change", update);
    };
  }, []);

  return progress;
}
