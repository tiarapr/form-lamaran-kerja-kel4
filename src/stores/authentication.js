import { ref } from 'vue'
import { defineStore } from 'pinia'
import useSupabase from '@/supabase'

export const useAuthenticationStore = defineStore('authentication', () => {
  const { supabase } = useSupabase()

  const user = ref({})

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: meta
      }
    })
    if (error) throw error
    return user
  }

  return { user, login, logout, isLoggedIn, register }
})
