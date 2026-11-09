import { cards, themes, truthLabels, type ThemeId, type Truth } from '../content';
import { themeWeight, type Progress } from '../store';
import { TruthTag } from './bits';
import type { Account } from '../lib/account';

interface Props {
  p: Progress;
  onTune: (id: ThemeId, by: number) => void;
  onToggle: (id: ThemeId) => void;
  onOpen: (id: string) => void;
  onReset: () => void;
  account: Account;
  onSignIn: () => void;
}

export function You({ p, onTune, onToggle, onOpen, onReset, account, onSignIn }: Props) {
  const total = themes.reduce((n, t) => n + themeWeight(p, t.id), 0);
  const holes = cards.filter(c => p.holes.includes(c.id));

  return (
    <section className="you">
      <h1 className="you-title">Your algorithm</h1>
      <p className="you-sub">This is exactly how your feed is weighted. Every swipe moves it, and so can you.</p>

      {account.signedIn ? (
        <div className="account">
          <div className="account-row">
            <span className="account-avatar" aria-hidden>{(account.profile?.first_name ?? account.email ?? '?').charAt(0).toUpperCase()}</span>
            <span className="account-who">
              <b>{account.profile?.first_name ? `Hi, ${account.profile.first_name}` : 'Signed in'}</b>
              <span>{account.email}. Progress saves automatically.</span>
            </span>
          </div>
          <label className="check">
            <input type="checkbox" checked={!!account.profile?.marketing_opt_in} onChange={e => account.setOptIn(e.target.checked)} />
            <span>Send me the occasional email with new rabbit holes</span>
          </label>
        </div>
      ) : (
        <button className="account account-cta" onClick={onSignIn}>
          <b>Save your progress</b>
          <span>Keep your rabbit holes, streak and tuned feed on any device. No password needed.</span>
        </button>
      )}

      <ul className="mix">
        {themes.map(t => {
          const on = p.picked.includes(t.id);
          const share = Math.round((themeWeight(p, t.id) / total) * 100);
          return (
            <li key={t.id} className={`mix-row ${on ? '' : 'is-off'}`} style={{ ['--h' as string]: t.hue }}>
              <div className="mix-head">
                <button className="mix-toggle" onClick={() => onToggle(t.id)} aria-pressed={on}>
                  <span className="mix-box">{on ? '✓' : ''}</span>
                  {t.name}
                </button>
                <span className="mix-pct">{share}%</span>
              </div>
              <div className="mix-bar"><span style={{ width: `${share}%` }} /></div>
              {on && (
                <div className="mix-tune">
                  <button className="chip" onClick={() => onTune(t.id, -0.3)}>Less</button>
                  <button className="chip" onClick={() => onTune(t.id, 0.3)}>More</button>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="stats">
        <div><b>{p.seen.length}</b><span>cards seen</span></div>
        <div><b>{p.holes.length}</b><span>rabbit holes</span></div>
        <div><b>{p.quizTotal ? `${p.quizRight}/${p.quizTotal}` : '0'}</b><span>quiz answers right</span></div>
        <div><b>{p.streak}</b><span>{p.streak === 1 ? 'day' : 'days'} in a row</span></div>
      </div>

      <h2 className="you-h2">Your rabbit holes</h2>
      {holes.length ? (
        <ul className="holes">
          {holes.map(c => (
            <li key={c.id}><button onClick={() => onOpen(c.id)}>{c.hook}</button></li>
          ))}
        </ul>
      ) : (
        <p className="you-empty">Tap "Go deeper" on any card and it lands here, so you can come back to it.</p>
      )}

      <h2 className="you-h2">How we label truth</h2>
      <ul className="legend">
        {(Object.keys(truthLabels) as Truth[]).map(k => (
          <li key={k}><TruthTag truth={k} /><span>{truthLabels[k].meaning}</span></li>
        ))}
      </ul>

      {account.signedIn && (
        <div className="account-actions">
          <button className="link" onClick={() => account.signOut()}>Sign out</button>
          <button
            className="link danger"
            onClick={async () => {
              if (!confirm('Delete your account and everything saved with it? This cannot be undone.')) return;
              if (await account.deleteAccount()) onReset();
              else alert('Something went wrong. Please try again, or email adelina@modishsocial.com.');
            }}
          >
            Delete my account
          </button>
        </div>
      )}
      <button className="link reset" onClick={() => { if (confirm('Start fresh? This clears your picks and progress.')) onReset(); }}>
        Start fresh
      </button>
      <p className="credit">CurioUS is a Modish experiment. We count anonymous usage to make it better. <a href="/privacy">Privacy policy</a>.</p>
    </section>
  );
}
