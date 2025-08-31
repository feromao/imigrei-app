import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { signInWithGoogle, signOut } from './auth'

export default function HeaderAuth() {
  const [user, setUser] = useState<any>(null)
  
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUser(s?.user ?? null))
    return () => sub.subscription.unsubscribe()
  }, [])
  
  if (!user) {
    return (
      <button 
        onClick={signInWithGoogle} 
        className="px-4 py-2 rounded-2xl bg-[#ff6c0e] text-white"
      >
        Entrar com Google
      </button>
    )
  }
  
  const name = user?.user_metadata?.name || user?.email
  const avatar = user?.user_metadata?.picture
  
  return (
    <div className="flex items-center gap-3">
      {avatar && <img src={avatar} className="w-8 h-8 rounded-full" />}
      <span className="text-sm">{name}</span>
      <button onClick={signOut} className="px-3 py-2 rounded-2xl border">
        Sair
      </button>
    </div>
  )
}