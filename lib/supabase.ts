import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let _supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseServiceKey) {
  _supabase = createClient(supabaseUrl, supabaseServiceKey);
}

export const supabase = _supabase;
