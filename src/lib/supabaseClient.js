import { createClient } from '@supabase/supabase-js';
// Ganti dengan URL dan anon key asli dari Supabase Project Settings
const supabaseUrl = 'https://fixwhvpbbfqdljfxiofk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpeHdodnBiYmZxZGxqZnhpb2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjk4MjEsImV4cCI6MjA4NTYwNTgyMX0.klFS1g8e0WnQMU-S_HLr4Yx8Ksv2moUql4H8tJvcIOI';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);