import { supabase } from '@/lib/supabaseClient'

export async function fetchCategorias(term?: string) {
  let q = supabase.from('categorias').select('id,nome').order('nome')
  if (term?.trim()) q = q.ilike('nome', `%${term.trim()}%`)
  const { data, error } = await q
  if (error) throw error
  return data
}

type Params = { 
  categoriaId?: string | null
  cidadeIds?: string[] | null
  anywhere?: boolean 
}

export async function searchNegocios({ categoriaId, cidadeIds, anywhere }: Params) {
  let q = supabase.from('negocios')
    .select('id,nome,descricao,logo_url,lat,lng,endereco,is_online,categoria_id,cidade_id,status')
    .eq('status', 'published')
    .limit(100)
  
  if (categoriaId) q = q.eq('categoria_id', categoriaId)
  if (!anywhere && cidadeIds?.length) q = q.in('cidade_id', cidadeIds)
  
  const { data, error } = await q
  if (error) throw error
  return data
}