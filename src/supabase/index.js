import { createClient } from '@supabase/supabase-js'
import { useAuthenticationStore } from '@/stores/authentication'

const supabaseUrl = import.meta.env.VITE_API_URL
const supabaseKey = import.meta.env.VITE_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthenticationStore()
  user.value = session?.user || null
})

export default function useSupabase() {
  return { supabase }
}
