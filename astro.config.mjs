// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://brcode.dev/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@pages': path.resolve('./src/pages'),
        '@assets': path.resolve('./src/assets'),
        '@data': path.resolve('./src/data'),
        '@styles': path.resolve('./src/styles'),
        '@content': path.resolve('./src/content'),
      },
    },
  },

  integrations: [mdx(), sitemap()],
});