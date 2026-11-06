import { useEffect, useState } from 'react';
import { cards, themes, type Card, type ThemeId } from './content';

// How much each action nudges a theme. This is "the algorithm".
export const NUDGE = { keep: 0.3, skip: -0.15, deeper: 0.5, play: 0.2, learn: 0.2 };
export const SESSION_SIZE = 8; // cards before a natural pause
const EXPLORE = 0.15; // small weight for themes you did not pick, keeps things fresh

export interface Progress {
  onboarded: boolean;
  picked: ThemeId[];
  weights: Record<ThemeId, number>;
  seen: string[];
  kept: string[];
  holes: string[]; // cards you went deeper on
  learned: number;
  quizRight: number;
  quizTotal: number;
  streak: number;
  lastDay: string;
  waitlist: boolean;
}

const KEY = 'curious-v1';
const today = () => new Date().toISOString().slice(0, 10);

const fresh = (): Progress => ({
  onboarded: false,
  picked: [],
  weights: Object.fromEntries(themes.map(t => [t.id, 0])) as Record<ThemeId, number>,
  seen: [],
  kept: [],
  holes: [],
  learned: 0,
  quizRight: 0,
  quizTotal: 0,
  streak: 0,
  lastDay: '',
  waitlist: false,
});

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      return { ...fresh(), ...saved, weights: { ...fresh().weights, ...saved.weights } };
    }
  } catch {
    /* storage unavailable: start fresh */
  }
  return fresh();
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export function useProgress() {
  const [p, setP] = useState<Progress>(load);
  useEffect(() => save(p), [p]);

  // Count a day of use towards the streak, once per day.
  useEffect(() => {
    if (!p.onboarded) return;
    const t = today();
    if (p.lastDay === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    setP(s => ({ ...s, lastDay: t, streak: s.lastDay === y ? s.streak + 1 : 1 }));
  }, [p.onboarded, p.lastDay]);

  const nudge = (theme: ThemeId, by: number) =>
    setP(s => ({ ...s, weights: { ...s.weights, [theme]: clamp(s.weights[theme] + by) } }));

  return {
    p,
    set: setP,
    start(picked: ThemeId[]) {
      setP(s => ({
        ...s,
        onboarded: true,
        picked,
        weights: Object.fromEntries(themes.map(t => [t.id, picked.includes(t.id) ? 1 : 0])) as Record<ThemeId, number>,
      }));
    },
    keep(c: Card) {
      setP(s => ({ ...s, seen: add(s.seen, c.id), kept: add(s.kept, c.id) }));
      nudge(c.theme, NUDGE.keep);
    },
    skip(c: Card) {
      setP(s => ({ ...s, seen: add(s.seen, c.id) }));
      nudge(c.theme, NUDGE.skip);
    },
    deeper(c: Card) {
      setP(s => ({ ...s, seen: add(s.seen, c.id), holes: add(s.holes, c.id) }));
      nudge(c.theme, NUDGE.deeper);
    },
    learned(c: Card, steps: number) {
      setP(s => ({ ...s, learned: s.learned + steps }));
      nudge(c.theme, NUDGE.learn);
    },
    quizzed(right: number, total: number, theme?: ThemeId) {
      setP(s => ({ ...s, quizRight: s.quizRight + right, quizTotal: s.quizTotal + total }));
      if (theme) nudge(theme, NUDGE.play);
    },
    tune: nudge,
    togglePick(id: ThemeId) {
      setP(s => {
        const on = s.picked.includes(id);
        if (on && s.picked.length === 1) return s;
        return {
          ...s,
          picked: on ? s.picked.filter(x => x !== id) : [...s.picked, id],
          weights: { ...s.weights, [id]: on ? 0 : Math.max(s.weights[id], 1) },
        };
      });
    },
    joinWaitlist() {
      setP(s => ({ ...s, waitlist: true }));
    },
    reset() {
      setP(fresh());
    },
  };
}

const add = (xs: string[], x: string) => (xs.includes(x) ? xs : [...xs, x]);
const clamp = (n: number) => Math.max(0, Math.min(3, Math.round(n * 100) / 100));

export function themeWeight(p: Progress, id: ThemeId) {
  return p.picked.includes(id) ? Math.max(p.weights[id], 0.2) : EXPLORE;
}

// Pick the next card: unseen first, weighted by how much you lean into each theme.
export function pickNext(p: Progress, exclude: string[] = []): Card | null {
  let pool = cards.filter(c => !p.seen.includes(c.id) && !exclude.includes(c.id));
  if (!pool.length) return null;
  // First few cards stick to the themes you picked, so the feed feels like yours straight away.
  const mine = pool.filter(c => p.picked.includes(c.theme));
  if (p.seen.length < 3 && mine.length) pool = mine;
  const total = pool.reduce((n, c) => n + themeWeight(p, c.theme), 0);
  let r = Math.random() * total;
  for (const c of pool) {
    r -= themeWeight(p, c.theme);
    if (r <= 0) return c;
  }
  return pool[pool.length - 1];
}

// Plain-language reason a card was shown. Powers "Why am I seeing this?"
export function whyShown(p: Progress, c: Card): string[] {
  const t = themes.find(x => x.id === c.theme)!;
  const reasons: string[] = [];
  if (p.picked.includes(c.theme)) reasons.push(`You picked ${t.name} as one of your themes.`);
  else reasons.push(`You didn't pick ${t.name}. A small share of your feed explores outside your picks so it stays fresh. You can turn this down in You.`);
  const kept = p.kept.filter(id => cards.find(x => x.id === id)?.theme === c.theme).length;
  const holes = p.holes.filter(id => cards.find(x => x.id === id)?.theme === c.theme).length;
  if (kept) reasons.push(`You kept ${kept} ${kept === 1 ? 'card' : 'cards'} from this theme.`);
  if (holes) reasons.push(`You went deeper on ${holes} ${holes === 1 ? 'card' : 'cards'} here.`);
  const all = themes.map(x => themeWeight(p, x.id)).reduce((a, b) => a + b, 0);
  const share = Math.round((themeWeight(p, c.theme) / all) * 100);
  reasons.push(`Right now ${t.name} makes up about ${share}% of your feed.`);
  return reasons;
}
