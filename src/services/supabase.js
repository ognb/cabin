import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hrfsmpwtaxehnizlwpya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZnNtcHd0YXhlaG5pemx3cHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNzQ1MTQsImV4cCI6MjAwMTk1MDUxNH0.Xr-LgrtGwqd2XGFTShnhwqFH-AiwbZq0FNWniImf-zs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
