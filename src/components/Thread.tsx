import { useState } from 'react';
import type { Card, QuizQuestion } from '../content';
import { Art, Icon, TruthTag, themeOf } from './bits';

type Mode = 'deeper' | 'choose' | 'learn' | 'quiz' | 'done';

interface Props {
  card: Card;
  waitlist: boolean;
  onClose: () => void;
  onLearned: (steps: number) => void;
  onQuizzed: (right: number, total: number) => void;
  onWaitlist: () => void;
  onShare: () => void;
}

// The "go deeper" journey: thread → learn or play → done.
export function Thread({ card, waitlist, onClose, onLearned, onQuizzed, onWaitlist, onShare }: Props) {
  const [mode, setMode] = useState<Mode>('deeper');
  const [page, setPage] = useState(0);
  const [summary, setSummary] = useState('');
  const theme = themeOf(card.theme);
  const pages = card.deeper;
  const isTeaser = (title: string) => title.toLowerCase().startsWith('try it');

  return (
    <div className="thread" style={{ ['--h' as string]: theme.hue }}>
      <header className="thread-top">
        <button className="icon-btn" onClick={onClose} aria-label="Back to feed">
          <Icon name="back" />
        </button>
        <span className="thread-theme">{theme.name}</span>
        <button className="icon-btn" onClick={onShare} aria-label="Share">
          <Icon name="share" size={18} />
        </button>
      </header>

      <div className="thread-hero">
        <Art card={card} />
        <div className="thread-hero-text">
          <TruthTag truth={card.truth} />
          <h1>{card.hook}</h1>
        </div>
      </div>

      {mode === 'deeper' && (
        <div className="thread-body">
          <div className="dots" aria-hidden>
            {pages.map((_, i) => <span key={i} className={i === page ? 'is-on' : i < page ? 'is-done' : ''} />)}
          </div>
          <article className="leaf" key={page}>
            <h2>{pages[page].title}</h2>
            <p>{pages[page].body}</p>
            {isTeaser(pages[page].title) && (
              <button className="btn btn-line" disabled={waitlist} onClick={onWaitlist}>
                <Icon name="bookmark" size={18} /> {waitlist ? "You're on the list" : 'Tell me when it arrives'}
              </button>
            )}
          </article>
          <div className="thread-nav">
            <button className="btn btn-ghost" disabled={page === 0} onClick={() => setPage(p => p - 1)}>Back</button>
            {page < pages.length - 1 ? (
              <button className="btn btn-gold" onClick={() => setPage(p => p + 1)}>Next</button>
            ) : (
              <button className="btn btn-gold" onClick={() => setMode('choose')}>Keep going</button>
            )}
          </div>
        </div>
      )}

      {mode === 'choose' && (
        <div className="thread-body choose">
          <h2 className="choose-title">How do you want to go further?</h2>
          <button className="choice" onClick={() => setMode('learn')}>
            <span className="choice-name">Learn</span>
            <span className="choice-line">{card.learn.length} bite-size steps, and you pick where it goes</span>
          </button>
          <button className="choice" onClick={() => setMode('quiz')}>
            <span className="choice-name">Play</span>
            <span className="choice-line">A {card.quiz.length}-question quiz to make it stick</span>
          </button>
        </div>
      )}

      {mode === 'learn' && (
        <Learn
          card={card}
          onDone={n => {
            onLearned(n);
            setSummary(`You learned ${n} new ${n === 1 ? 'thing' : 'things'} about this.`);
            setMode('done');
          }}
          onQuiz={() => setMode('quiz')}
        />
      )}

      {mode === 'quiz' && (
        <Quiz
          questions={card.quiz}
          onDone={(right, total) => {
            onQuizzed(right, total);
            setSummary(right === total ? `${right} out of ${total}. Locked in.` : `${right} out of ${total}. It'll stick next time.`);
            setMode('done');
          }}
        />
      )}

      {mode === 'done' && (
        <div className="thread-body done">
          <p className="done-big">{summary}</p>
          <p className="done-sub">This one is now in your rabbit holes. Your feed will lean a little more towards {theme.name}.</p>
          <div className="sources">
            <span>Sources</span>
            {card.sources.map(s => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
          <button className="btn btn-gold" onClick={onClose}>Back to my feed</button>
        </div>
      )}
    </div>
  );
}

function Learn({ card, onDone, onQuiz }: { card: Card; onDone: (n: number) => void; onQuiz: () => void }) {
  const [shown, setShown] = useState(1);
  const [asked, setAsked] = useState<string[]>([]);
  const steps = card.learn.slice(0, shown);
  const finished = shown >= card.learn.length;

  return (
    <div className="thread-body learn">
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={i} className="step">
            <h3>{s.step}</h3>
            <p>{s.body}</p>
            {s.branches && (
              <div className="branches">
                {s.branches.map(b => (
                  <button
                    key={b}
                    className={`chip ${asked.includes(b) ? 'is-on' : ''}`}
                    onClick={() => setAsked(a => (a.includes(b) ? a : [...a, b]))}
                  >
                    {asked.includes(b) ? '✓ ' : '+ '}{b}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
      {asked.length > 0 && (
        <p className="note">Saved to your curiosity list. In the next version, tapping a path like this will open a fresh thread written for you.</p>
      )}
      <div className="thread-nav">
        {finished ? (
          <>
            <button className="btn btn-ghost" onClick={() => onDone(card.learn.length)}>I'm done</button>
            <button className="btn btn-gold" onClick={() => { onDone(card.learn.length); onQuiz(); }}>Test myself</button>
          </>
        ) : (
          <button className="btn btn-gold wide" onClick={() => setShown(n => n + 1)}>Next step</button>
        )}
      </div>
    </div>
  );
}

export function Quiz({ questions, onDone }: { questions: QuizQuestion[]; onDone: (right: number, total: number) => void }) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [right, setRight] = useState(0);
  const q = questions[i];
  const last = i === questions.length - 1;

  const choose = (n: number) => {
    if (pick !== null) return;
    setPick(n);
    if (n === q.answer) setRight(r => r + 1);
  };

  return (
    <div className="thread-body quiz">
      <p className="quiz-count">Question {i + 1} of {questions.length}</p>
      <h2 className="quiz-q">{q.q}</h2>
      <div className="options">
        {q.options.map((o, n) => {
          const state = pick === null ? '' : n === q.answer ? 'is-right' : n === pick ? 'is-wrong' : 'is-faded';
          return (
            <button key={n} className={`option ${state}`} onClick={() => choose(n)} disabled={pick !== null}>
              {o}
            </button>
          );
        })}
      </div>
      {pick !== null && (
        <>
          <p className="quiz-why">
            <strong>{pick === q.answer ? 'Right.' : 'Not quite.'}</strong> {q.why}
          </p>
          <button
            className="btn btn-gold wide"
            onClick={() => {
              if (last) onDone(right, questions.length);
              else { setI(i + 1); setPick(null); }
            }}
          >
            {last ? 'See how I did' : 'Next question'}
          </button>
        </>
      )}
    </div>
  );
}
