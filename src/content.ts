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

export const realOrMyth: { text: string; real: boolean; why: string }[] = [
  { text: 'Vikings wore horned helmets into battle.', real: false, why: 'No horned Viking battle helmet has ever been found. The look comes from 1800s opera costumes.' },
  { text: 'Honey found in Egyptian tombs was still edible.', real: true, why: 'Honey is so low in water and so acidic that it can last for thousands of years.' },
  { text: 'Goldfish have a three-second memory.', real: false, why: 'Goldfish can be trained and remember things for months.' },
  { text: 'There are more trees on Earth than stars in the Milky Way.', real: true, why: 'Earth has about 3 trillion trees. The Milky Way has roughly 100 to 400 billion stars.' },
  { text: 'The Great Wall of China is visible from the Moon.', real: false, why: 'It is far too narrow. Astronauts say it is hard to spot even from low orbit.' },
  { text: 'Oxford University is older than the Aztec Empire.', real: true, why: 'Teaching at Oxford began by 1096. Tenochtitlan was founded in 1325.' },
  { text: 'Bananas are berries but strawberries are not.', real: true, why: 'Botanically, a berry grows from one flower with one ovary. Bananas fit, strawberries do not.' },
  { text: 'Humans only use 10% of their brains.', real: false, why: 'Brain scans show activity across the whole brain, even during sleep.' },
  { text: 'A US Army officer wrote a report on out-of-body travel.', real: true, why: 'The 1983 Gateway Process assessment is now public.' },
  { text: 'Sound can arrange sand into geometric patterns.', real: true, why: 'Chladni showed this with a violin bow in 1787.' },
  { text: 'The Parthenon was designed using the golden ratio.', real: false, why: 'There is no good evidence its builders used it. The claim relies on convenient measurements.' },
  { text: 'Lightning never strikes the same place twice.', real: false, why: 'The Empire State Building is struck around 20 to 25 times a year.' },
];
