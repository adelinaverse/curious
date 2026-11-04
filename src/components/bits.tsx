import type { ReactNode } from 'react';
import { themes, truthLabels, type Card, type ThemeId, type Truth } from '../content';

export const themeOf = (id: ThemeId) => themes.find(t => t.id === id)!;

// Deterministic pseudo-random from a string, so each card's art is always the same.
function seeded(seed: string) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// Soft mesh-gradient art with film grain, unique per card, coloured by theme.
export function meshColours(seed: string, hue: number) {
  const r = seeded(seed);
  return {
    base: `hsl(${hue} 70% 14%)`,
    blobs: [
      { x: r(), y: r() * 0.6, c: `hsl(${hue} 85% 58%)` },
      { x: r(), y: 0.3 + r() * 0.5, c: `hsl(${(hue + 40) % 360} 80% 52%)` },
      { x: r(), y: 0.5 + r() * 0.5, c: `hsl(${(hue + 330) % 360} 75% 40%)` },
      { x: r(), y: r(), c: `hsl(${(hue + 15) % 360} 95% 78%)` },
    ],
  };
}

export function Art({ card, className = '' }: { card: Card; className?: string }) {
  if (card.image) return <img className={`art ${className}`} src={card.image} alt="" />;
  const { base, blobs } = meshColours(card.id, themeOf(card.theme).hue);
  const id = `m-${card.id}`;
  return (
    <svg className={`art ${className}`} viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        {blobs.map((b, i) => (
          <radialGradient key={i} id={`${id}-${i}`} cx={b.x} cy={b.y} r={i === 3 ? 0.28 : 0.62}>
            <stop offset="0" stopColor={b.c} stopOpacity={i === 3 ? 0.9 : 1} />
            <stop offset="1" stopColor={b.c} stopOpacity="0" />
          </radialGradient>
        ))}
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.09 0" />
        </filter>
      </defs>
      <rect width="400" height="700" fill={base} />
      {blobs.map((_, i) => <rect key={i} width="400" height="700" fill={`url(#${id}-${i})`} />)}
      <rect width="400" height="700" filter={`url(#${id}-grain)`} />
    </svg>
  );
}

export function TruthTag({ truth, onClick }: { truth: Truth; onClick?: () => void }) {
  return (
    <button type="button" className={`truth truth-${truth}`} onClick={onClick} title={truthLabels[truth].meaning}>
      <span className="truth-dot" />
      {truthLabels[truth].name}
    </button>
  );
}

export function Wordmark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <span className={`wordmark wordmark-${size}`} aria-label="CurioUS">
      curio<span className="wordmark-us">US</span>
    </span>
  );
}

export function Sheet({ children, onClose, label }: { children: ReactNode; onClose: () => void; label: string }) {
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" role="dialog" aria-label={label} onClick={e => e.stopPropagation()}>
        <div className="sheet-grip" />
        {children}
      </div>
    </div>
  );
}

const paths = {
  close: 'M6 6l12 12M18 6L6 18',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  down: 'M12 4v14m-6-6l6 6 6-6',
  back: 'M15 5l-7 7 7 7',
  share: 'M12 3v12m-5-7l5-5 5 5M5 14v5h14v-5',
  feed: 'M5 5h14v6H5zM5 15h14v4H5z',
  play: 'M8 5l11 7-11 7z',
  you: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8c1-4 4-6 7-6s6 2 7 6',
  info: 'M12 8h.01M11 12h1v5h1',
  bookmark: 'M7 4h10v16l-5-4-5 4z',
};

export function Icon({ name, size = 22 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {name === 'info' && <circle cx="12" cy="12" r="9" />}
      <path d={paths[name]} />
    </svg>
  );
}
