import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const deployedSite = vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined;

export default defineConfig({
  site: process.env.PUBLIC_SITE_ORIGIN ?? deployedSite ?? 'https://mundhebanni.org',
  i18n: {
    locales: ['kn', 'en'],
    defaultLocale: 'kn',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
