-- Enable RLS and add safe read-only policies for public lookup tables

-- categorias
ALTER TABLE public.categorias ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'categorias' AND policyname = 'Public can read categorias'
  ) THEN
    CREATE POLICY "Public can read categorias"
    ON public.categorias
    FOR SELECT
    USING (true);
  END IF;
END $$;

-- cidades
ALTER TABLE public.cidades ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'cidades' AND policyname = 'Public can read cidades'
  ) THEN
    CREATE POLICY "Public can read cidades"
    ON public.cidades
    FOR SELECT
    USING (true);
  END IF;
END $$;

-- paises
ALTER TABLE public.paises ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'paises' AND policyname = 'Public can read paises'
  ) THEN
    CREATE POLICY "Public can read paises"
    ON public.paises
    FOR SELECT
    USING (true);
  END IF;
END $$;