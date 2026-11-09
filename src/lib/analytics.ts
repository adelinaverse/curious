import { supabase } from './supabase';

// Anonymous usage tracking. Each browser gets a random id; no names or emails are collected.
type EventType = 'start' | 'keep' | 'skip' | 'deeper' | 'learn' | 'quiz' | 'rom' | 'share' | 'session_end' | 'waitlist' | 'tune';

const KEY = 'curious-visitor';
let memoryId: string | null = null;
let themes: string[] = [];
let ready: Promise<boolean> | null = null;

const enabled = () =>
  !!supabase && typeof window !== 'undefined' && !/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

function uuid() {
  try {
    return crypto.randomUUID();
  } catch {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}

export function visitorId() {
  try {
    let id = localStorage.getItem(KEY);
    if (!id) {
      id = uuid();
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return (memoryId ??= uuid());
  }
}

function source() {
  try {
    const utm = new URLSearchParams(window.location.search).get('utm_source');
    if (utm) return utm.slice(0, 60);
    if (!document.referrer) return '';
    const host = new URL(document.referrer).hostname.replace(/^www\./, '');
    return host === window.location.hostname.replace(/^www\./, '') ? '' : host;
  } catch {
    return '';
  }
}

const device = () => (window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth < 760 ? 'mobile' : 'desktop');

export function setThemes(t: string[]) {
  themes = t;
}

function ensureVisitor() {
  if (!ready) {
    ready = Promise.resolve(
      supabase!
        .from('visitors')
        .insert({ id: visitorId(), themes, device: device(), referrer: source() }),
    )
      // 23505 = this visitor is already registered, which is fine.
      .then(({ error }) => !error || error.code === '23505')
      .catch(() => false);
  }
  return ready;
}

export function track(type: EventType, data: { card?: string; theme?: string; value?: Record<string, unknown> } = {}) {
  if (!enabled()) return;
  ensureVisitor().then(ok => {
    if (!ok) {
      ready = null; // try again next time
      return;
    }
    supabase!
      .from('events')
      .insert({ visitor_id: visitorId(), type, card_id: data.card ?? null, theme: data.theme ?? null, value: data.value ?? null })
      .then(() => undefined, () => undefined);
  });
}
