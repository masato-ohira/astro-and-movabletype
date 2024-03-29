import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    server: {
      proxy: {
        '/api': 'https://astro.noidea.xyz',
      },
    },
  },
})
