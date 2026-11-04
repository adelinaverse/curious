import { useState } from 'react';
import { themes, type ThemeId } from '../content';
import { Wordmark } from './bits';

export function Onboarding({ onStart }: { onStart: (picked: ThemeId[]) => void }) {
  const [step, setStep] = useState<'hello' | 'pick'>('hello');
  const [picked, setPicked] = useState<ThemeId[]>([]);
  const toggle = (id: ThemeId) => setPicked(p => (p.includes(id) ? p.filter(x => x !== id) : [...p, id]));

  if (step === 'hello') {
    return (
      <section className="hello">
        <div className="hello-orbit" aria-hidden>
          <span /><span /><span />
        </div>
        <Wordmark size="lg" />
        <p className="hello-line">A feed you steer. Built for you, by us.</p>
        <p className="hello-sub">Short, surprising cards about the world. Every swipe tunes what you see next, and you can always see why.</p>
        <button className="btn btn-gold" onClick={() => setStep('pick')}>Start exploring</button>
      </section>
    );
  }

  return (
    <section className="pick">
      <h1 className="pick-title">What do you want to indulge in today?</h1>
      <p className="pick-sub">Pick at least two. You can change these any time.</p>
      <div className="pick-grid">
        {themes.map(t => {
          const on = picked.includes(t.id);
          return (
            <button
              key={t.id}
              className={`pick-tile ${on ? 'is-on' : ''}`}
              style={{ ['--h' as string]: t.hue }}
              aria-pressed={on}
              onClick={() => toggle(t.id)}
            >
              <span className="pick-name">{t.name}</span>
              <span className="pick-line">{t.line}</span>
              <span className="pick-check" aria-hidden>{on ? '✓' : '+'}</span>
            </button>
          );
        })}
      </div>
      <button className="btn btn-gold pick-go" disabled={picked.length < 2} onClick={() => onStart(picked)}>
        {picked.length < 2 ? `Pick ${2 - picked.length} more` : 'Build my feed'}
      </button>
    </section>
  );
}
