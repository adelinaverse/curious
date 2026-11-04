import { useRef, useState, type PointerEvent } from 'react';
import type { Card } from '../content';
import { Art, Icon, TruthTag, themeOf, Wordmark } from './bits';

interface Props {
  card: Card | null;
  next: Card | null;
  count: number;
  total: number;
  onKeep: () => void;
  onSkip: () => void;
  onDeeper: () => void;
  onWhy: () => void;
  onShare: () => void;
  onTruth: () => void;
}

const THRESHOLD = 100;

export function Feed({ card, next, count, total, onKeep, onSkip, onDeeper, onWhy, onShare, onTruth }: Props) {
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState<'left' | 'right' | null>(null);
  const start = useRef<number | null>(null);

  const fling = (dir: 'left' | 'right') => {
    setLeaving(dir);
    window.setTimeout(() => {
      dir === 'right' ? onKeep() : onSkip();
      setLeaving(null);
      setDx(0);
    }, 260);
  };

  const down = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    start.current = e.clientX;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const move = (e: PointerEvent) => {
    if (start.current !== null) setDx(e.clientX - start.current);
  };
  const up = () => {
    if (start.current === null) return;
    start.current = null;
    setDragging(false);
    if (dx > THRESHOLD) fling('right');
    else if (dx < -THRESHOLD) fling('left');
    else setDx(0);
  };

  const offset = leaving === 'right' ? 520 : leaving === 'left' ? -520 : dx;
  const hint = offset > 40 ? 'Keep' : offset < -40 ? 'Skip' : null;

  return (
    <section className="feed">
      {next && (
        <article className="card card-under" aria-hidden>
          <Art card={next} />
        </article>
      )}
      {card && (
        <article
          key={card.id}
          className={`card ${dragging ? '' : 'is-settling'}`}
          style={{ transform: `translateX(${offset}px) rotate(${offset / 30}deg)` }}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
        >
          <Art card={card} />
          <div className="card-shade" />

          <header className="card-top">
            <div className="segments" aria-label={`${count} of ${total} cards this session`}>
              {Array.from({ length: total }, (_, i) => (
                <span key={i} className={i < count ? 'is-done' : i === count ? 'is-now' : ''} />
              ))}
            </div>
            <div className="card-top-row">
              <Wordmark size="sm" />
              <button className="icon-btn" onClick={onWhy} aria-label="Why am I seeing this?">
                <Icon name="info" size={20} />
              </button>
            </div>
          </header>

          {hint && <span className={`card-hint hint-${hint.toLowerCase()}`}>{hint}</span>}

          <div className="card-copy">
            <div className="card-meta">
              <span className="card-theme">{themeOf(card.theme).name}</span>
              <TruthTag truth={card.truth} onClick={onTruth} />
            </div>
            <h2 className="card-hook">{card.hook}</h2>
            <p className="card-text">{card.body}</p>
          </div>

          <div className="card-actions">
            <button className="glass round" onClick={() => fling('left')} aria-label="Skip">
              <Icon name="close" />
            </button>
            <button className="btn btn-light deeper" onClick={onDeeper}>Go deeper</button>
            <button className="glass round" onClick={() => fling('right')} aria-label="Keep">
              <Icon name="heart" />
            </button>
            <button className="glass round" onClick={onShare} aria-label="Share this card">
              <Icon name="share" size={20} />
            </button>
          </div>
        </article>
      )}
    </section>
  );
}
