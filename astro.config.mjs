import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Cambia por tu dominio real (necesario para sitemap/canonical)
export default defineConfig({
  site: 'https://tudominio.com',
  integrations: [sitemap()],
  adapter: cloudflare(),
});