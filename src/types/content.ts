export type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
};

export type Lesson = {
  id: string;
  title: string;
  questions: Question[];
};

export type Section = {
  id: string;
  title: string;
  language: string;
  lessons: Lesson[];
};
