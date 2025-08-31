import { supabase } from '@/lib/supabaseClient'

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { 
      redirectTo: `${window.location.origin}/`
    }
  })
  if (error) throw error
}

export async function signOut() {
  try {
    await supabase.auth.signOut({ scope: 'global' });
    // Force page reload for clean state
    window.location.href = '/';
  } catch (error) {
    console.error('Logout error:', error);
    // Force logout even if API call fails
    window.location.href = '/';
  }
}