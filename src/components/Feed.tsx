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
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const move = (e: PointerEvent) => {
    if (start.current !== null) setDx(e.clientX - start.current);
  };
  const up = () => {
    if (start.current === null) return;
    start.current = null;
    if (dx > THRESHOLD) fling('right');
    else if (dx < -THRESHOLD) fling('left');
    else setDx(0);
  };

  const offset = leaving === 'right' ? 600 : leaving === 'left' ? -600 : dx;
  const hint = offset > 40 ? 'keep' : offset < -40 ? 'skip' : null;

  return (
    <section className="feed">
      <header className="topbar">
        <Wordmark size="sm" />
        <div className="progress" aria-label={`${count} of ${total} cards this session`}>
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className={i < count ? 'is-done' : ''} />
          ))}
        </div>
      </header>

      <div className="stack">
        {next && (
          <article className="card card-under" aria-hidden>
            <Art card={next} />
          </article>
        )}
        {card && (
          <article
            key={card.id}
            className={`card ${start.current === null ? 'is-settling' : ''}`}
            style={{ transform: `translateX(${offset}px) rotate(${offset / 22}deg)` }}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
          >
            <div className="card-art">
              <Art card={card} />
              <span className="card-theme">{themeOf(card.theme).name}</span>
              {hint && <span className={`card-stamp stamp-${hint}`}>{hint === 'keep' ? 'Keep' : 'Skip'}</span>}
            </div>
            <div className="card-body">
              <TruthTag truth={card.truth} onClick={onTruth} />
              <h2 className="card-hook">{card.hook}</h2>
              <p className="card-text">{card.body}</p>
              <div className="card-foot">
                <button className="link" onClick={onWhy}>
                  <Icon name="info" size={16} /> Why am I seeing this?
                </button>
                <button className="icon-btn" onClick={onShare} aria-label="Share this card">
                  <Icon name="share" size={18} />
                </button>
              </div>
            </div>
          </article>
        )}
      </div>

      <div className="actions">
        <button className="round" onClick={() => fling('left')} aria-label="Skip">
          <Icon name="close" />
        </button>
        <button className="btn btn-gold deeper" onClick={onDeeper}>
          <Icon name="down" size={18} /> Go deeper
        </button>
        <button className="round round-keep" onClick={() => fling('right')} aria-label="Keep">
          <Icon name="heart" />
        </button>
      </div>
    </section>
  );
}
