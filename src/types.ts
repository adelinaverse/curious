// Shapes shared by every content file.

export type Truth = 'established' | 'debated' | 'speculative';

export type ThemeId = 'history' | 'knowledge' | 'nature' | 'space' | 'unexplained' | 'consciousness' | 'sacred' | 'myths';

export interface Theme {
  id: ThemeId;
  name: string;
  line: string;
  hue: number; // drives the card colours
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number; // index of the right option
  why: string;
}

export interface Card {
  id: string;
  theme: ThemeId;
  truth: Truth;
  hook: string; // the headline question or statement
  body: string; // 2 to 3 sentences
  image?: string;
  deeper: { title: string; body: string }[];
  learn: { step: string; body: string; branches?: string[] }[];
  quiz: QuizQuestion[];
  sources: { label: string; url: string }[];
}
