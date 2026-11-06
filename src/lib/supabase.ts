import { createClient } from '@supabase/supabase-js';

// Public project settings. The anon key is designed to live in website code:
// database security rules only let it ADD anonymous usage rows, never read them.
export const SUPABASE_URL = '';
export const SUPABASE_ANON_KEY = '';

export const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: true, detectSessionInUrl: true, flowType: 'implicit' },
      })
    : null;
