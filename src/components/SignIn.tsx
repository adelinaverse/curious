import { useState, type FormEvent } from 'react';
import { requestSignIn } from '../lib/account';

// Sign-in and sign-up are the same form: new emails create an account, known ones just sign in.
export function SignIn({ reason }: { reason?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState('sending');
    setError('');
    const { error } = await requestSignIn(email, name, optIn);
    if (error) {
      setError(error);
      setState('idle');
    } else setState('sent');
  };

  if (state === 'sent') {
    return (
      <div className="signin">
        <h2 className="sheet-title">Check your email</h2>
        <p className="signin-lead">We sent a sign-in link to <strong>{email.trim()}</strong>. Tap it and you'll land back here, signed in, with your progress saved.</p>
        <p className="note">Can't see it? Check your spam or promotions folder, or <button className="text-btn" onClick={() => setState('idle')}>try a different email</button>.</p>
      </div>
    );
  }

  return (
    <form className="signin" onSubmit={submit}>
      <h2 className="sheet-title">Save your progress</h2>
      <p className="signin-lead">{reason ?? 'Keep your rabbit holes, streak and tuned feed on any device.'} No password. We email you a link.</p>
      <label className="field">
        <span>First name</span>
        <input value={name} onChange={e => setName(e.target.value)} autoComplete="given-name" maxLength={60} placeholder="Optional if you've signed up before" />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" inputMode="email" />
      </label>
      <label className="check">
        <input type="checkbox" checked={optIn} onChange={e => setOptIn(e.target.checked)} />
        <span>Send me the occasional email with new rabbit holes. Unsubscribe any time.</span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-dark wide" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Email me a sign-in link'}</button>
      <p className="note center">By continuing you agree to our <a href="/privacy" target="_blank" rel="noreferrer">privacy policy</a>.</p>
    </form>
  );
}
