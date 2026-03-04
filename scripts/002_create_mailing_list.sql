CREATE TABLE IF NOT EXISTS public.mailing_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mailing_list ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (anonymous visitors via the anon key)
CREATE POLICY "Allow anonymous inserts" ON public.mailing_list
  FOR INSERT
  WITH CHECK (true);

-- No public SELECT policy — data is only viewable via the Supabase dashboard
-- or using the service_role key, which bypasses RLS.
