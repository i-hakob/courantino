import { Section, Lesson } from '@/types/content';
import { Progress } from '@/storage/progress';

export function isLessonUnlocked(section: Section, lessonId: string, progress: Progress): boolean {
  const index = section.lessons.findIndex((l) => l.id === lessonId);
  if (index === -1) return false;
  if (index === 0) return true;
  const previousLesson = section.lessons[index - 1];
  return progress.lessons[previousLesson.id]?.completed ?? false;
}

export function getNextIncompleteLesson(section: Section, progress: Progress): Lesson | null {
  return section.lessons.find((l) => !progress.lessons[l.id]?.completed) ?? null;
}

export function isSectionComplete(section: Section, progress: Progress): boolean {
  return section.lessons.every((l) => progress.lessons[l.id]?.completed);
}

/** 0..1, useful for a progress bar on the section screen later. */
export function getSectionCompletionRatio(section: Section, progress: Progress): number {
  if (section.lessons.length === 0) return 0;
  const completedCount = section.lessons.filter((l) => progress.lessons[l.id]?.completed).length;
  return completedCount / section.lessons.length;
}
