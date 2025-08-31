import { supabase } from '@/lib/supabaseClient'

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin }
  })
  if (error) alert(error.message)
}

export async function signOut() { 
  await supabase.auth.signOut() 
}