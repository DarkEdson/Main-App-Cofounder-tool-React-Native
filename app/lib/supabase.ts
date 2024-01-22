import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aeffkveoybkbdzbtspeg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmZrdmVveWJrYmR6YnRzcGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MzcyMjcsImV4cCI6MjAyMTUxMzIyN30.S8QYj9CovCEvLVZVfoPVRoAg8yTb31gqpvvU3bjudCI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})