import { useMemo, useState } from 'react';
import { cards, realOrMyth } from '../content';
import { Quiz } from './Thread';

type Game = null | 'rom' | 'recall';

export function Play({ holes, onQuizzed }: { holes: string[]; onQuizzed: (r: number, t: number) => void }) {
  const [game, setGame] = useState<Game>(null);

  const recall = useMemo(
    () => cards.filter(c => holes.includes(c.id)).flatMap(c => c.quiz).sort(() => Math.random() - 0.5).slice(0, 5),
    [holes, game],
  );

  if (game === 'rom') return <RealOrMyth onExit={() => setGame(null)} onScore={onQuizzed} />;
  if (game === 'recall' && recall.length) {
    return (
      <section className="play">
        <button className="link back" onClick={() => setGame(null)}>Back to games</button>
        <h1 className="play-title">Rabbit hole recall</h1>
        <Quiz questions={recall} onDone={(r, t) => { onQuizzed(r, t); setGame(null); }} />
      </section>
    );
  }

  return (
    <section className="play">
      <h1 className="play-title">Play</h1>
      <p className="play-sub">Games that make what you've seen stick.</p>
      <button className="game" onClick={() => setGame('rom')}>
        <span className="game-name">Real or Myth?</span>
        <span className="game-line">Things everyone "knows". Some are true.</span>
      </button>
      <button className="game" disabled={!recall.length} onClick={() => setGame('recall')}>
        <span className="game-name">Rabbit hole recall</span>
        <span className="game-line">
          {recall.length ? `${recall.length} questions from cards you went deeper on` : 'Go deeper on a card in your feed to unlock this'}
        </span>
      </button>
      <div className="game is-soon">
        <span className="game-name">Older or younger?</span>
        <span className="game-line">Put history in order. Coming soon</span>
      </div>
    </section>
  );
}

function RealOrMyth({ onExit, onScore }: { onExit: () => void; onScore: (r: number, t: number) => void }) {
  const deck = useMemo(() => [...realOrMyth].sort(() => Math.random() - 0.5).slice(0, 6), []);
  const [i, setI] = useState(0);
  const [said, setSaid] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const item = deck[i];
  const done = i >= deck.length;

  if (done) {
    return (
      <section className="play">
        <h1 className="play-title">{score} out of {deck.length}</h1>
        <p className="play-sub">{score >= 5 ? 'Hard to fool.' : score >= 3 ? 'Some of those are sneaky.' : 'Now you know. That is the whole point.'}</p>
        <button className="btn btn-gold wide" onClick={onExit}>Back to games</button>
      </section>
    );
  }

  const answer = (v: boolean) => {
    if (said !== null) return;
    setSaid(v);
    if (v === item.real) setScore(s => s + 1);
  };

  return (
    <section className="play">
      <button className="link back" onClick={onExit}>Back to games</button>
      <p className="quiz-count">{i + 1} of {deck.length}</p>
      <div className={`rom-card ${said === null ? '' : said === item.real ? 'is-right' : 'is-wrong'}`}>
        <p>{item.text}</p>
      </div>
      {said === null ? (
        <div className="rom-actions">
          <button className="btn btn-line" onClick={() => answer(false)}>Myth</button>
          <button className="btn btn-gold" onClick={() => answer(true)}>Real</button>
        </div>
      ) : (
        <>
          <p className="quiz-why"><strong>{item.real ? 'Real.' : 'Myth.'}</strong> {item.why}</p>
          <button
            className="btn btn-gold wide"
            onClick={() => {
              if (i === deck.length - 1) onScore(score, deck.length);
              setI(i + 1);
              setSaid(null);
            }}
          >
            {i === deck.length - 1 ? 'See my score' : 'Next'}
          </button>
        </>
      )}
    </section>
  );
}
