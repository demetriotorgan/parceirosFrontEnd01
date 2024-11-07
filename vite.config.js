import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //        '/api':'https://parceiros-api-01.vercel.app/'   
  //   }
  // },
  plugins: [react()],
})
