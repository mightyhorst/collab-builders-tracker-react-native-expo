import 'react-native-url-polyfill/auto';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const EXPO_PUBLIC_SUPABASE_URL=`https://rxgpqkzpfglcbnpnbslg.supabase.co`;
const EXPO_PUBLIC_SUPABASE_ANON_KEY=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzY0MjU5MiwiZXhwIjoxOTQzMjE4NTkyfQ.QXu5PaCvoF7rkyzH2ZNqhTV-BTmsHi077zhLjCWT5vE`;

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
// const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseUrl = EXPO_PUBLIC_SUPABASE_URL || "";
const supabaseKey = EXPO_PUBLIC_SUPABASE_ANON_KEY || "";

// Better put your these secret keys in .env file
export const supabase = createClient(
    supabaseUrl, 
    supabaseKey, 
    {
        // localStorage: AsyncStorage as any,
        // detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    }
);
