import { createClient } from '@supabase/supabase-js';

// Public project settings. The anon key is designed to live in website code:
// database security rules only let it ADD anonymous usage rows, never read them.
export const SUPABASE_URL = 'https://mdtzsdiwfrffgcczgeva.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_-pLKGpbFztGnA6KxxjiRcw_GlyXZXxJ';

export const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: true, detectSessionInUrl: true, flowType: 'implicit' },
      })
    : null;
