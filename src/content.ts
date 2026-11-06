// ─────────────────────────────────────────────────────────────
// CurioUS content
// Themes, truth labels and Real or Myth live here.
// The cards themselves live in src/cards, one file per theme.
// Edit text freely. Keep the shape of each entry the same.
//
// truth: "established" | "debated" | "speculative"
// image: optional. Paste any image URL to replace the pattern art.
// sources: starter links are overviews. Swap in primary sources as you check each card.
// ─────────────────────────────────────────────────────────────

import type { Card, Theme, Truth } from './types';
import { history } from './cards/history';
import { knowledge } from './cards/knowledge';
import { nature } from './cards/nature';
import { space } from './cards/space';
import { unexplained } from './cards/unexplained';
import { consciousness } from './cards/consciousness';
import { sacred } from './cards/sacred';

export * from './types';

export const themes: Theme[] = [
  { id: 'history', name: 'Hidden History', line: 'What the textbooks skipped', hue: 18 },
  { id: 'knowledge', name: 'Lost Knowledge', line: 'Ancient minds, surprising tools', hue: 268 },
  { id: 'nature', name: 'Strange Nature', line: 'Life that breaks the rules', hue: 162 },
  { id: 'space', name: 'Space & Time', line: 'The scale of everything', hue: 222 },
  { id: 'unexplained', name: 'Unexplained', line: 'Open questions, honest answers', hue: 338 },
  { id: 'consciousness', name: 'Consciousness', line: 'The mind and what we can\'t explain yet', hue: 292 },
  { id: 'sacred', name: 'Sacred Science', line: 'Where pattern, sound and spirit meet', hue: 48 },
];

export const truthLabels: Record<Truth, { name: string; meaning: string }> = {
  established: { name: 'Established', meaning: 'Strong evidence and broad agreement among experts.' },
  debated: { name: 'Debated', meaning: 'Serious people disagree. You get both sides.' },
  speculative: { name: 'Speculative', meaning: 'A fascinating idea without solid evidence yet.' },
};

export const cards: Card[] = [
  ...history,
  ...knowledge,
  ...nature,
  ...space,
  ...unexplained,
  ...consciousness,
  ...sacred,
];

export { realOrMyth } from './games/realOrMyth';
