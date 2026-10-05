export type CourseLevel = "A1" | "A2" | "B1";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  explanation: string;
  examples: { german: string; bengali: string }[];
  vocabulary: { german: string; bengali: string; pronunciation?: string }[];
}

export interface CourseModule {
  number: string;
  title: string;
  description: string;
  lessons: Lesson[];
  unlocked: boolean;
  progress: number;
}

export interface Course {
  id: string;
  level: CourseLevel;
  title: string;
  batch: string;
  description: string;
  modules: CourseModule[];
}
