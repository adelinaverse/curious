import { useState, type ReactNode } from 'react';
import { cards, truthLabels, type Card, type Truth } from './content';
import { pickNext, SESSION_SIZE, useProgress, whyShown } from './store';
import { Icon, Sheet, TruthTag, Wordmark } from './components/bits';
import { Onboarding } from './components/Onboarding';
import { Feed } from './components/Feed';
import { Thread } from './components/Thread';
import { Play } from './components/Play';
import { You } from './components/You';
import { Share } from './components/Share';

type Tab = 'feed' | 'play' | 'you';
type Overlay = null | { kind: 'thread' | 'why' | 'share'; id: string } | { kind: 'truth' };

export default function App() {
  const store = useProgress();
  const { p } = store;
  const [tab, setTab] = useState<Tab>('feed');
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [current, setCurrent] = useState<Card | null>(null);
  const [upNext, setUpNext] = useState<Card | null>(null);
  const [sessionCount, setSessionCount] = useState(0);

  // Keep a current card and a peek of the next one ready.
  if (p.onboarded && !current && sessionCount < SESSION_SIZE) {
    const c = pickNext(p);
    if (c) {
      setCurrent(c);
      setUpNext(pickNext(p, [c.id]));
    }
  }

  const advance = () => {
    const after = { ...p, seen: current ? [...p.seen, current.id] : p.seen };
    const n = upNext && !after.seen.includes(upNext.id) ? upNext : pickNext(after);
    setCurrent(n);
    setUpNext(n ? pickNext(after, [n.id]) : null);
    setSessionCount(s => s + 1);
  };

  if (!p.onboarded) {
    return (
      <Shell>
        <Onboarding onStart={store.start} />
      </Shell>
    );
  }

  const byId = (id: string) => cards.find(c => c.id === id)!;
  const sessionOver = sessionCount >= SESSION_SIZE || !current;

  return (
    <Shell>
      <main className="screen">
        {tab === 'feed' &&
          (sessionOver ? (
            <SessionEnd
              p={p}
              outOfCards={!current && sessionCount < SESSION_SIZE}
              onMore={() => setSessionCount(0)}
              onPlay={() => setTab('play')}
            />
          ) : (
            <Feed
              card={current}
              next={upNext}
              count={sessionCount}
              total={SESSION_SIZE}
              onKeep={() => { store.keep(current!); advance(); }}
              onSkip={() => { store.skip(current!); advance(); }}
              onDeeper={() => { store.deeper(current!); setOverlay({ kind: 'thread', id: current!.id }); }}
              onWhy={() => setOverlay({ kind: 'why', id: current!.id })}
              onShare={() => setOverlay({ kind: 'share', id: current!.id })}
              onTruth={() => setOverlay({ kind: 'truth' })}
            />
          ))}
        {tab === 'play' && <Play holes={p.holes} onQuizzed={(r, t) => store.quizzed(r, t)} />}
        {tab === 'you' && (
          <You
            p={p}
            onTune={store.tune}
            onToggle={store.togglePick}
            onOpen={id => setOverlay({ kind: 'thread', id })}
            onReset={() => { store.reset(); setCurrent(null); setSessionCount(0); setTab('feed'); }}
          />
        )}
      </main>

      <nav className={`tabs ${tab === 'feed' && !sessionOver ? 'is-dark' : ''}`} aria-label="Main">
        {([['feed', 'Feed'], ['play', 'Play'], ['you', 'You']] as const).map(([id, label]) => (
          <button key={id} className={tab === id ? 'is-on' : ''} onClick={() => setTab(id)} aria-current={tab === id}>
            <Icon name={id} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {overlay?.kind === 'thread' && (
        <Thread
          card={byId(overlay.id)}
          waitlist={p.waitlist}
          onClose={() => {
            setOverlay(null);
            if (current?.id === overlay.id) advance();
          }}
          onLearned={n => store.learned(byId(overlay.id), n)}
          onQuizzed={(r, t) => store.quizzed(r, t, byId(overlay.id).theme)}
          onWaitlist={store.joinWaitlist}
          onShare={() => setOverlay({ kind: 'share', id: overlay.id })}
        />
      )}
      {overlay?.kind === 'why' && (
        <Sheet label="Why am I seeing this?" onClose={() => setOverlay(null)}>
          <h2 className="sheet-title">Why you're seeing this</h2>
          <ul className="why">{whyShown(p, byId(overlay.id)).map(r => <li key={r}>{r}</li>)}</ul>
          <button className="btn btn-line wide" onClick={() => { setOverlay(null); setTab('you'); }}>Tune my algorithm</button>
        </Sheet>
      )}
      {overlay?.kind === 'share' && (
        <Sheet label="Share" onClose={() => setOverlay(null)}>
          <Share card={byId(overlay.id)} />
        </Sheet>
      )}
      {overlay?.kind === 'truth' && (
        <Sheet label="Truth labels" onClose={() => setOverlay(null)}>
          <h2 className="sheet-title">Every card tells you how sure we are</h2>
          <ul className="legend">
            {(Object.keys(truthLabels) as Truth[]).map(k => (
              <li key={k}><TruthTag truth={k} /><span>{truthLabels[k].meaning}</span></li>
            ))}
          </ul>
        </Sheet>
      )}
    </Shell>
  );
}

function SessionEnd({ p, outOfCards, onMore, onPlay }: { p: ReturnType<typeof useProgress>['p']; outOfCards: boolean; onMore: () => void; onPlay: () => void }) {
  return (
    <section className="end">
      <div className="end-art" aria-hidden />
      {outOfCards ? (
        <>
          <h1 className="end-title">You've seen every card for now.</h1>
          <p className="end-sub">New cards land regularly. Until then, your rabbit holes and games are waiting.</p>
          <button className="btn btn-dark wide" onClick={onPlay}>Play a game</button>
        </>
      ) : (
        <>
          <h1 className="end-title">That's a good place to pause.</h1>
          <p className="end-sub">
            You've explored {p.seen.length} {p.seen.length === 1 ? 'card' : 'cards'} and opened {p.holes.length} {p.holes.length === 1 ? 'rabbit hole' : 'rabbit holes'}.
            Come back tomorrow and your feed will have shifted with you.
          </p>
          <button className="btn btn-dark wide" onClick={onPlay}>Test what stuck</button>
          <button className="btn btn-ghost wide" onClick={onMore}>Keep going a little longer</button>
        </>
      )}
    </section>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="stage">
      <aside className="stage-note">
        <Wordmark size="md" />
        <p>A feed you steer. Short, surprising cards about history, nature, space and the unexplained. Every card tells you how sure we are.</p>
        <p className="stage-small">A Modish experiment. Open it on your phone for the full feel.</p>
      </aside>
      <div className="device">{children}</div>
    </div>
  );
}
