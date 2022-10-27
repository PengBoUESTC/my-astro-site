import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
// https://astro.build/config
export default defineConfig({
  markdown: {

  },
  integrations: [react()],
  server: {
    host: 'jynpb.com',
  },
  site: 'https://pbjyn.com/',
  vite: {
    server: {
      open: import.meta.env.MODE !== 'production'
    }
  }
});
