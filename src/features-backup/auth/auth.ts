import { supabase } from '@/lib/supabaseClient';

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { 
      redirectTo: window.location.origin 
    }
  });
  if (error) {
    console.error('Google login error:', error);
    throw error;
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout error:', error);
  }
  window.location.href = '/';
}