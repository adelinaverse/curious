import { useState } from 'react';
import { themes, type ThemeId } from '../content';
import { Wordmark, meshColours } from './bits';
import { SignIn } from './SignIn';

const swatch = (id: string, hue: number) => {
  const { base, blobs } = meshColours(id, hue);
  return {
    background: `radial-gradient(circle at ${blobs[0].x * 100}% ${blobs[0].y * 100}%, ${blobs[0].c}, transparent 70%),
      radial-gradient(circle at ${blobs[1].x * 100}% 80%, ${blobs[1].c}, transparent 70%), ${base}`,
  };
};

export function Onboarding({ onStart, onSignIn, signedIn }: { onStart: (picked: ThemeId[], sentTo?: string) => void; onSignIn: () => void; signedIn: boolean }) {
  const [step, setStep] = useState<'hello' | 'pick' | 'save'>('hello');
  const [picked, setPicked] = useState<ThemeId[]>([]);
  const toggle = (id: ThemeId) => setPicked(p => (p.includes(id) ? p.filter(x => x !== id) : [...p, id]));

  if (step === 'hello') {
    return (
      <section className="hello">
        <div className="hello-copy">
          <Wordmark size="lg" />
          <p className="hello-line">The feed you steer.</p>
          <p className="hello-sub">Short, surprising cards about the world. Every swipe tunes what comes next, and you can always see why.</p>
        </div>
        <div className="hello-actions">
          <button className="btn btn-light" onClick={() => setStep('pick')}>Start exploring</button>
          <button className="hello-signin" onClick={onSignIn}>I already have an account</button>
        </div>
      </section>
    );
  }

  if (step === 'save') {
    return (
      <section className="save-step">
        <SignIn
          title="Save your feed?"
          reason="Your picks and every swipe tune this feed. Add your email and it follows you to any device."
          onSent={email => onStart(picked, email)}
          onSkip={() => onStart(picked)}
        />
      </section>
    );
  }

  return (
    <section className="pick">
      <h1 className="pick-title">What do you want to indulge in today?</h1>
      <p className="pick-sub">Pick two or more. You can change this any time.</p>
      <ul className="pick-list">
        {themes.map(t => {
          const on = picked.includes(t.id);
          return (
            <li key={t.id}>
              <button className={`pick-row ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => toggle(t.id)}>
                <span className="pick-swatch" style={swatch(t.id, t.hue)} />
                <span className="pick-text">
                  <span className="pick-name">{t.name}</span>
                  <span className="pick-line">{t.line}</span>
                </span>
                <span className="pick-check" aria-hidden />
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btn btn-dark pick-go" disabled={picked.length < 2} onClick={() => (signedIn ? onStart(picked) : setStep('save'))}>
        {picked.length < 2 ? `Pick ${2 - picked.length} more` : 'Build my feed'}
      </button>
    </section>
  );
}
