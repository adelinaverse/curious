import { useState, type FormEvent } from 'react';
import { requestSignIn, verifyCode } from '../lib/account';

interface Props {
  title?: string;
  reason?: string;
  submitLabel?: string;
  onSkip?: () => void; // shows a quiet "skip" option (never on the sign-up wall)
  skipLabel?: string;
  hideTitle?: boolean;
}

// Sign-in and sign-up are the same form: new emails create an account, known ones just sign in.
// Step 1 asks for name and email. Step 2 takes the code from the email (or they tap the link).
// Once signed in, the app moves on by itself.
export function SignIn({ title, reason, submitLabel, onSkip, skipLabel, hideTitle }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'form' | 'code'>('form');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [resent, setResent] = useState(false);

  const send = async (e?: FormEvent) => {
    e?.preventDefault();
    setBusy(true);
    setError('');
    const { error } = await requestSignIn(email, name, optIn);
    setBusy(false);
    if (error) setError(error);
    else setStep('code');
  };

  const verify = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const { error } = await verifyCode(email, code);
    setBusy(false);
    if (error) setError(error);
  };

  if (step === 'code') {
    return (
      <form className="signin" onSubmit={verify}>
        {!hideTitle && <h2 className="sheet-title">Check your email</h2>}
        <p className="signin-lead">
          We sent a code to <strong>{email.trim()}</strong>. Type it in below, or tap the link in the email.
        </p>
        <label className="field">
          <span>Code</span>
          <input
            className="code-input"
            value={code}
            onChange={e => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 8))}
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="123456"
            required
            minLength={6}
            autoFocus
          />
        </label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-dark wide" disabled={busy || code.length < 6}>{busy ? 'Checking…' : 'Continue'}</button>
        <p className="note center">
          No email? Check spam or promotions,{' '}
          <button type="button" className="text-btn" disabled={busy || resent} onClick={() => { setResent(true); send(); }}>
            {resent ? 'sent again' : 'send it again'}
          </button>{' '}
          or{' '}
          <button type="button" className="text-btn" onClick={() => { setStep('form'); setCode(''); setError(''); setResent(false); }}>
            use a different email
          </button>.
        </p>
        {onSkip && <button type="button" className="btn btn-ghost wide" onClick={onSkip}>I'll confirm later</button>}
      </form>
    );
  }

  return (
    <form className="signin" onSubmit={send}>
      {!hideTitle && <h2 className="sheet-title">{title ?? 'Save your progress'}</h2>}
      {reason && <p className="signin-lead">{reason}</p>}
      <label className="field">
        <span>First name</span>
        <input value={name} onChange={e => setName(e.target.value)} autoComplete="given-name" maxLength={60} />
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
      <button className="btn btn-dark wide" disabled={busy}>{busy ? 'Sending…' : submitLabel ?? 'Continue with email'}</button>
      <p className="note center">Free. No password. By continuing you agree to our <a href="/privacy" target="_blank" rel="noreferrer">privacy policy</a>.</p>
      {onSkip && <button type="button" className="btn btn-ghost wide" onClick={onSkip}>{skipLabel ?? 'Skip for now'}</button>}
    </form>
  );
}
