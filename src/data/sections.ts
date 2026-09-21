import { Section, Lesson } from '@/types/content';
import { FRENCH_SECTION } from './courses/french';

export const SECTIONS: Section[] = [FRENCH_SECTION];

export function getSectionById(sectionId: string | undefined): Section | undefined {
  return SECTIONS.find((s) => s.id === sectionId);
}

export function getLessonById(
  lessonId: string | undefined
): { section: Section; lesson: Lesson } | undefined {
  for (const section of SECTIONS) {
    const lesson = section.lessons.find((l) => l.id === lessonId);
    if (lesson) return { section, lesson };
  }
  return undefined;
}
