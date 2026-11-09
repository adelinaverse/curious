import { createClient } from '@supabase/supabase-js';

// Public project settings. The anon key is designed to live in website code:
// database security rules only let it ADD anonymous usage rows, never read them.
export const SUPABASE_URL = 'https://mdtzsdiwfrffgcczgeva.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_-pLKGpbFztGnA6KxxjiRcw_GlyXZXxJ';

// Read before the client tidies the address bar: did this page load from a sign-in email link?
export const ARRIVED_FROM_LINK = typeof window !== 'undefined' && /access_token/.test(window.location.hash);
export const LINK_ERROR =
  typeof window !== 'undefined' && /error_description/.test(window.location.hash)
    ? decodeURIComponent(new URLSearchParams(window.location.hash.slice(1)).get('error_description') ?? '').replace(/\+/g, ' ')
    : null;

export const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: true, detectSessionInUrl: true, flowType: 'implicit' },
      })
    : null;
