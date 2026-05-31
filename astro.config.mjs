// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pwb999.github.io',
  base: '/navapps-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
