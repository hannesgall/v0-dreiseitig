CREATE TABLE IF NOT EXISTS public.mailing_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mailing_list ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (anonymous visitors)
CREATE POLICY "Allow anonymous inserts" ON public.mailing_list
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated service role can read
CREATE POLICY "Allow service role select" ON public.mailing_list
  FOR SELECT
  USING (auth.role() = 'service_role');
