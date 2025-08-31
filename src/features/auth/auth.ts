import { supabase } from '@/lib/supabaseClient'
import { cleanupAuthState } from './cleanup'

export async function signInWithGoogle() {
  try {
    // Clean any stale state before starting a new OAuth flow
    cleanupAuthState()
    try {
      await supabase.auth.signOut({ scope: 'global' })
    } catch (_) {
      // ignore
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: { prompt: 'select_account' }
      }
    })
    if (error) throw error
  } catch (err: any) {
    alert(err?.message ?? 'Falha ao iniciar login com Google')
  }
}

export async function signOut() {
  try {
    cleanupAuthState()
    try { await supabase.auth.signOut({ scope: 'global' }) } catch (_) { /* ignore */ }
  } finally {
    // Full reload to avoid limbo states
    window.location.href = '/'
  }
}
