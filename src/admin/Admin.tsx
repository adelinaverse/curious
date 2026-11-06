import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { cards, themes } from '../content';

interface Stats {
  totals: {
    visitors: number; visitors_today: number; visitors_7d: number; active_7d: number; returning: number;
    cards_seen: number; deeper: number; shares: number; quiz_right: number; quiz_total: number; waitlist: number;
  };
  daily: { day: string; new_visitors: number; active: number }[];
  themes: { theme: string; picks: number }[];
  cards: { card_id: string; theme: string; keeps: number; skips: number; deeper: number; shares: number }[];
  sources: { source: string; visitors: number }[];
  devices: { device: string; visitors: number }[];
  recent: { id: string; first_seen: string; themes: string[]; device: string | null; referrer: string | null; last_seen: string | null; cards: number; deeper: number }[];
}

const hookOf = (id: string) => cards.find(c => c.id === id)?.hook ?? id;
const themeName = (id: string) => themes.find(t => t.id === id)?.name ?? id;
const fmt = (n: number) => n.toLocaleString('en');
const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : '–');
const when = (iso: string | null) => {
  if (!iso) return '–';
  const mins = Math.round((Date.now() - Date.parse(iso)) / 60000);
  if (mins < 60) return `${Math.max(mins, 1)} min ago`;
  if (mins < 1440) return `${Math.round(mins / 60)} h ago`;
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!supabase) return setChecked(true);
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!supabase) return <Shell><p className="empty">The database isn't connected yet. Add the Supabase URL and anon key in src/lib/supabase.ts.</p></Shell>;
  if (!checked) return <Shell><p className="empty">Loading…</p></Shell>;
  if (!session) return <Login />;
  return <Dashboard email={session.user.email ?? ''} />;
}

function Shell({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="admin">
      <header className="admin-top">
        <a className="wm" href="/">curio<b>US</b></a>
        <span className="admin-label">Dashboard</span>
        <div className="admin-right">{right}</div>
      </header>
      {children}
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const send = async (e: FormEvent) => {
    e.preventDefault();
    setState('sending');
    const { error } = await supabase!.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    if (error) {
      setError(error.message);
      setState('error');
    } else setState('sent');
  };

  return (
    <Shell>
      <form className="login" onSubmit={send}>
        <h1>Sign in to your dashboard</h1>
        {state === 'sent' ? (
          <p>Check your inbox for a sign-in link from Supabase. Open it on this device and you'll land back here.</p>
        ) : (
          <>
            <p>We'll email you a one-time sign-in link. Only admin accounts can see the data.</p>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Email me a sign-in link'}</button>
            {state === 'error' && <p className="err">Couldn't send the link: {error}</p>}
          </>
        )}
      </form>
    </Shell>
  );
}

function Dashboard({ email }: { email: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase!.rpc('admin_stats', { days: 30 });
    setLoading(false);
    if (error) setError(error.message.includes('not allowed') ? `${email} isn't on the admin list.` : error.message);
    else { setError(''); setStats(data as Stats); }
  };

  useEffect(() => { load(); }, []);

  const right = (
    <>
      <button className="btn ghost" onClick={load} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button>
      <button className="btn ghost" onClick={() => supabase!.auth.signOut()}>Sign out</button>
    </>
  );

  if (error) return <Shell right={right}><p className="empty err">{error}</p></Shell>;
  if (!stats) return <Shell right={right}><p className="empty">Loading your numbers…</p></Shell>;
  const t = stats.totals;

  return (
    <Shell right={right}>
      <main className="dash">
        <section className="tiles">
          <Tile label="Visitors, all time" value={fmt(t.visitors)} note={`${fmt(t.visitors_today)} new today`} />
          <Tile label="New this week" value={fmt(t.visitors_7d)} />
          <Tile label="Active this week" value={fmt(t.active_7d)} />
          <Tile label="Came back another day" value={fmt(t.returning)} note={pct(t.returning, t.visitors) + ' of visitors'} />
          <Tile label="Cards swiped" value={fmt(t.cards_seen)} note={t.visitors ? `${(t.cards_seen / t.visitors).toFixed(1)} per visitor` : undefined} />
          <Tile label="Go deeper taps" value={fmt(t.deeper)} note={pct(t.deeper, t.cards_seen) + ' of cards'} />
          <Tile label="Shares" value={fmt(t.shares)} />
          <Tile label="Quiz answers right" value={pct(t.quiz_right, t.quiz_total)} note={`${fmt(t.quiz_total)} answered`} />
          <Tile label="Divination waitlist" value={fmt(t.waitlist)} />
        </section>

        <section className="panel">
          <h2>Active visitors per day</h2>
          <p className="sub">Last 30 days. Hover a bar for the day's numbers.</p>
          <DailyChart daily={stats.daily} />
        </section>

        <div className="two">
          <section className="panel">
            <h2>Themes people pick</h2>
            <Bars rows={stats.themes.map(r => ({ label: themeName(r.theme), value: r.picks }))} />
          </section>
          <section className="panel">
            <h2>Where visitors come from</h2>
            <Bars rows={stats.sources.map(r => ({ label: r.source, value: r.visitors }))} />
            <h2 className="mt">Devices</h2>
            <Bars rows={stats.devices.map(r => ({ label: r.device, value: r.visitors }))} />
          </section>
        </div>

        <section className="panel">
          <h2>Cards</h2>
          <p className="sub">Sorted by go deeper taps. Click a column to sort.</p>
          <CardTable rows={stats.cards} />
        </section>

        <section className="panel">
          <h2>Latest visitors</h2>
          <p className="sub">Anonymous until sign-in is added. The 50 newest.</p>
          <div className="scroll">
            <table>
              <thead><tr><th>First visit</th><th>Themes</th><th>Device</th><th>Came from</th><th className="n">Cards</th><th className="n">Deeper</th><th>Last active</th></tr></thead>
              <tbody>
                {stats.recent.map(r => (
                  <tr key={r.id}>
                    <td>{when(r.first_seen)}</td>
                    <td>{r.themes.map(themeName).join(', ') || '–'}</td>
                    <td>{r.device ?? '–'}</td>
                    <td>{r.referrer || 'direct'}</td>
                    <td className="n">{r.cards}</td>
                    <td className="n">{r.deeper}</td>
                    <td>{when(r.last_seen)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!stats.recent.length && <p className="empty">No visitors yet. They'll appear here as soon as people start swiping.</p>}
          </div>
        </section>
      </main>
    </Shell>
  );
}

function Tile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="tile">
      <span className="tile-label">{label}</span>
      <b>{value}</b>
      {note && <span className="tile-note">{note}</span>}
    </div>
  );
}

function DailyChart({ daily }: { daily: Stats['daily'] }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 720, H = 200, pad = { l: 32, r: 8, t: 12, b: 24 };
  const max = Math.max(1, ...daily.map(d => d.active));
  const step = (W - pad.l - pad.r) / Math.max(daily.length, 1);
  const bw = Math.max(2, step - 4);
  const y = (v: number) => pad.t + (H - pad.t - pad.b) * (1 - v / max);
  const ticks = [0, Math.ceil(max / 2), max];
  const label = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const h = hover !== null ? daily[hover] : null;

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Active visitors per day, last 30 days" onMouseLeave={() => setHover(null)}>
        {ticks.map(t => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="#e4e4e1" />
            <text x={pad.l - 6} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#6e6e6b">{t}</text>
          </g>
        ))}
        {daily.map((d, i) => {
          const x = pad.l + i * step + (step - bw) / 2;
          const top = y(d.active);
          const hgt = H - pad.b - top;
          return (
            <g key={d.day} onMouseEnter={() => setHover(i)}>
              <rect x={pad.l + i * step} y={pad.t} width={step} height={H - pad.t - pad.b} fill="transparent" />
              {hgt > 0 && <path d={`M${x} ${H - pad.b}V${top + Math.min(4, hgt)}q0 -4 4 -4h${bw - 8}q4 0 4 4V${H - pad.b}z`} fill={hover === i ? '#1f4fd6' : '#3d6bff'} />}
            </g>
          );
        })}
        {daily.length > 0 && [0, Math.floor(daily.length / 2), daily.length - 1].map(i => (
          <text key={i} x={pad.l + i * step + step / 2} y={H - 6} textAnchor="middle" fontSize="11" fill="#6e6e6b">{label(daily[i].day)}</text>
        ))}
      </svg>
      {h && (
        <div className="tip" style={{ left: `${((pad.l + hover! * step + step / 2) / W) * 100}%` }}>
          <b>{label(h.day)}</b>
          <span>{h.active} active</span>
          <span>{h.new_visitors} new</span>
        </div>
      )}
    </div>
  );
}

function Bars({ rows }: { rows: { label: string; value: number }[] }) {
  if (!rows.length) return <p className="empty">Nothing yet.</p>;
  const max = Math.max(...rows.map(r => r.value));
  return (
    <ul className="bars">
      {rows.map(r => (
        <li key={r.label}>
          <span className="bar-label">{r.label}</span>
          <span className="bar-track"><span style={{ width: `${(r.value / max) * 100}%` }} /></span>
          <span className="bar-value">{fmt(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}

type SortKey = 'deeper' | 'keeps' | 'skips' | 'shares' | 'rate';

function CardTable({ rows }: { rows: Stats['cards'] }) {
  const [sort, setSort] = useState<SortKey>('deeper');
  const rate = (r: Stats['cards'][number]) => (r.keeps + r.skips ? r.keeps / (r.keeps + r.skips) : 0);
  const sorted = useMemo(
    () => [...rows].sort((a, b) => (sort === 'rate' ? rate(b) - rate(a) : b[sort] - a[sort])),
    [rows, sort],
  );
  const H = ({ k, children }: { k: SortKey; children: string }) => (
    <th className="n"><button className={sort === k ? 'on' : ''} onClick={() => setSort(k)}>{children}</button></th>
  );
  if (!rows.length) return <p className="empty">No card activity yet.</p>;
  return (
    <div className="scroll">
      <table>
        <thead><tr><th>Card</th><th>Theme</th><H k="deeper">Deeper</H><H k="keeps">Kept</H><H k="skips">Skipped</H><H k="rate">Keep rate</H><H k="shares">Shares</H></tr></thead>
        <tbody>
          {sorted.map(r => (
            <tr key={r.card_id}>
              <td className="hook"><a href={`/cards/${r.card_id}`} target="_blank" rel="noreferrer">{hookOf(r.card_id)}</a></td>
              <td>{themeName(r.theme)}</td>
              <td className="n">{r.deeper}</td>
              <td className="n">{r.keeps}</td>
              <td className="n">{r.skips}</td>
              <td className="n">{pct(r.keeps, r.keeps + r.skips)}</td>
              <td className="n">{r.shares}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
