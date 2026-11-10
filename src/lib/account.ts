import { useEffect, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { ARRIVED_FROM_LINK, supabase } from './supabase';
import { visitorId } from './analytics';
import { themes, type ThemeId } from '../content';
import type { Progress } from '../store';

export interface Profile {
  email: string | null;
  first_name: string | null;
  marketing_opt_in: boolean;
  progress: Progress | null;
}

// Combine progress from this device and the account, keeping the best of both.
export function mergeProgress(a: Progress, b: Progress | null): Progress {
  if (!b) return a;
  const u = (x: string[] = [], y: string[] = []) => [...new Set([...x, ...y])];
  const picked = (a.picked.length && b.picked?.length ? u(a.picked, b.picked) : a.picked.length ? a.picked : b.picked ?? []) as ThemeId[];
  const weights = { ...a.weights };
  for (const t of themes) weights[t.id] = Math.max(a.weights[t.id] ?? 0, b.weights?.[t.id] ?? 0);
  return {
    ...a,
    onboarded: a.onboarded || !!b.onboarded,
    picked,
    weights,
    seen: u(a.seen, b.seen),
    kept: u(a.kept, b.kept),
    holes: u(a.holes, b.holes),
    learned: Math.max(a.learned, b.learned ?? 0),
    quizRight: Math.max(a.quizRight, b.quizRight ?? 0),
    quizTotal: Math.max(a.quizTotal, b.quizTotal ?? 0),
    streak: Math.max(a.streak, b.streak ?? 0),
    lastDay: (a.lastDay > (b.lastDay ?? '') ? a.lastDay : b.lastDay) ?? '',
    waitlist: a.waitlist || !!b.waitlist,
  };
}

export async function requestSignIn(email: string, firstName: string, optIn: boolean) {
  if (!supabase) return { error: 'Sign-in is not available right now.' };
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: {
      emailRedirectTo: `${window.location.origin}/`,
      // Progress rides along with the sign-up, so nothing is lost if the email opens in another browser.
      data: { first_name: firstName.trim().slice(0, 60), marketing_opt_in: optIn, progress: localProgress() },
    },
  });
  if (!error) return { error: null };
  if (/rate limit/i.test(error.message)) return { error: 'Too many sign-in emails were sent just now. Please try again in a few minutes.' };
  return { error: error.message };
}

function localProgress() {
  try {
    return JSON.parse(localStorage.getItem('curious-v1') ?? 'null');
  } catch {
    return null;
  }
}

// Confirm the 6-digit code from the email without leaving the app.
export async function verifyCode(email: string, code: string) {
  if (!supabase) return { error: 'Sign-in is not available right now.' };
  const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token: code.replace(/\s/g, ''), type: 'email' });
  if (!error) return { error: null };
  if (/expired|invalid/i.test(error.message)) return { error: "That code didn't work. Check it, or request a new one." };
  return { error: error.message };
}

// Keeps the signed-in session, the profile, and saved progress in step with the app.
export function useAccount(p: Progress, setP: (fn: (p: Progress) => Progress) => void) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [justSignedIn, setJustSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const synced = useRef(false);
  const latest = useRef(p);
  latest.current = p;

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === 'SIGNED_IN' && ARRIVED_FROM_LINK) setJustSignedIn(true);
      if (event === 'SIGNED_OUT') {
        setProfile(null);
        synced.current = false;
      }
    });
    return () => data.subscription.unsubscribe();
  }, []);

  // On sign-in: connect this browser's history, load the profile, merge progress both ways.
  const userId = session?.user.id;
  useEffect(() => {
    if (!supabase || !userId) return;
    let cancelled = false;
    (async () => {
      supabase.rpc('link_visitor', { vid: visitorId() }).then(() => undefined, () => undefined);
      const { data } = await supabase.from('profiles').select('email, first_name, marketing_opt_in, progress').eq('id', userId).maybeSingle();
      if (cancelled) return;
      const prof = (data as Profile | null) ?? { email: session?.user.email ?? null, first_name: null, marketing_opt_in: false, progress: null };
      setProfile(prof);
      const merged = mergeProgress(latest.current, prof.progress);
      setP(() => merged);
      synced.current = true;
      await supabase.from('profiles').update({ progress: merged, updated_at: new Date().toISOString() }).eq('id', userId);
      if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
    })();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  // Save progress to the account a moment after it changes.
  useEffect(() => {
    if (!supabase || !userId || !synced.current) return;
    const t = window.setTimeout(() => {
      supabase!.from('profiles').update({ progress: p, updated_at: new Date().toISOString() }).eq('id', userId).then(() => undefined, () => undefined);
    }, 1500);
    return () => window.clearTimeout(t);
  }, [p, userId]);

  return {
    signedIn: !!session,
    ready,
    email: session?.user.email ?? null,
    profile,
    justSignedIn,
    clearJustSignedIn: () => setJustSignedIn(false),
    async setOptIn(on: boolean) {
      if (!supabase || !userId) return;
      setProfile(pr => (pr ? { ...pr, marketing_opt_in: on } : pr));
      await supabase.from('profiles').update({ marketing_opt_in: on, opt_in_at: on ? new Date().toISOString() : null }).eq('id', userId);
    },
    async signOut() {
      await supabase?.auth.signOut();
    },
    async deleteAccount() {
      if (!supabase) return false;
      const { error } = await supabase.rpc('delete_me');
      if (error) return false;
      await supabase.auth.signOut();
      return true;
    },
  };
}

export type Account = ReturnType<typeof useAccount>;
