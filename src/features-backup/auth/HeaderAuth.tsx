import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { signInWithGoogle, signOut } from './auth'

export default function HeaderAuth() {
  const [user, setUser] = useState<any>(null)
  
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      // Only synchronous state updates here
      setUser(session?.user ?? null)
    })
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
    return () => subscription.unsubscribe()
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