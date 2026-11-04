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

// Generative "star chart / dig site" art, unique per card, coloured by theme.
export function Art({ card, className = '' }: { card: Card; className?: string }) {
  if (card.image) return <img className={`art ${className}`} src={card.image} alt="" />;
  const hue = themeOf(card.theme).hue;
  const r = seeded(card.id);
  const cx = 80 + r() * 240;
  const cy = 60 + r() * 120;
  const rings = Array.from({ length: 5 + Math.floor(r() * 4) }, (_, i) => 18 + i * (22 + r() * 14));
  const rays = Array.from({ length: 10 + Math.floor(r() * 14) }, () => r() * Math.PI * 2);
  const stars = Array.from({ length: 40 }, () => [r() * 400, r() * 240, r() * 1.6 + 0.4]);
  return (
    <svg className={`art ${className}`} viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="240" fill={`hsl(${hue} 55% 22%)`} />
      <radialGradient id={`g-${card.id}`} cx={cx / 400} cy={cy / 240} r="0.7">
        <stop offset="0" stopColor={`hsl(${hue} 70% 55%)`} stopOpacity="0.55" />
        <stop offset="1" stopColor={`hsl(${hue} 60% 20%)`} stopOpacity="0" />
      </radialGradient>
      <rect width="400" height="240" fill={`url(#g-${card.id})`} />
      {stars.map(([x, y, s], i) => (
        <circle key={i} cx={x} cy={y} r={s} fill={`hsl(${hue} 80% 88%)`} opacity={0.35 + (i % 3) * 0.2} />
      ))}
      <g fill="none" stroke={`hsl(${hue} 85% 82%)`} strokeWidth="1">
        {rings.map((rad, i) => (
          <circle key={i} cx={cx} cy={cy} r={rad} opacity={0.55 - i * 0.05} strokeDasharray={i % 2 ? '2 5' : undefined} />
        ))}
        {rays.map((a, i) => (
          <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * 420} y2={cy + Math.sin(a) * 420} opacity="0.14" />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="5" fill="#F2C14E" />
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
      Curio<span className="wordmark-us">US</span>
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
