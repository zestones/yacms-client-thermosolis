import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://thermosolis.fr',
    integrations: [react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, '../../packages/yacms-core/src'),
            },
        },
        css: {
            transformer: 'postcss',
        },
        server: {
            host: true,
            watch: {
                ignored: ['**/yablocks/**']
            }
        }
    },
});
