import { SignIn } from './SignIn';

// Shown to visitors who have used their free preview. Signing up (free) unlocks everything.
export function Gate({ seen, holes, place }: { seen: number; holes: number; place: 'feed' | 'play' }) {
  return (
    <section className="gate">
      <div className="gate-art" aria-hidden />
      <div className="gate-body">
        <h1 className="gate-title">{place === 'play' ? 'Games are for members.' : "You're on a roll. Keep going."}</h1>
        <p className="gate-sub">
          You've explored {seen} {seen === 1 ? 'card' : 'cards'}
          {holes ? ` and opened ${holes} ${holes === 1 ? 'rabbit hole' : 'rabbit holes'}` : ''}. Create your free account to unlock the rest.
        </p>
        <ul className="gate-perks">
          <li>Unlimited cards, with new ones every week</li>
          <li>Every game, quiz and Real or Myth round</li>
          <li>Your rabbit holes, streak and tuned feed, saved on any device</li>
        </ul>
        <SignIn hideTitle submitLabel="Unlock CurioUS, free" />
      </div>
    </section>
  );
}
