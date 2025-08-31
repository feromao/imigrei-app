-- Tighten RLS on negocios and expose a safe public RPC without sensitive fields

-- 1) Remove public read access on the base table
DROP POLICY IF EXISTS "public can read published" ON public.negocios;

-- 2) Allow only owners to read their own full rows
CREATE POLICY "owners can read own negocios"
ON public.negocios
FOR SELECT
USING (auth.uid() = owner_user_id);

-- 3) Create a SECURITY DEFINER function to return only non-sensitive fields for published businesses
CREATE OR REPLACE FUNCTION public.get_negocios_public()
RETURNS TABLE (
  id uuid,
  nome text,
  descricao text,
  logo_url text,
  cidade_id uuid,
  pais_id uuid,
  categoria_id uuid,
  lat double precision,
  lng double precision,
  is_online boolean,
  status text,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    n.id,
    n.nome,
    n.descricao,
    n.logo_url,
    n.cidade_id,
    n.pais_id,
    n.categoria_id,
    n.lat,
    n.lng,
    n.is_online,
    n.status,
    n.created_at,
    n.updated_at
  FROM public.negocios n
  WHERE n.status = 'published';
$$;

-- 4) Allow anonymous and authenticated clients to call the safe RPC
GRANT EXECUTE ON FUNCTION public.get_negocios_public() TO anon, authenticated;