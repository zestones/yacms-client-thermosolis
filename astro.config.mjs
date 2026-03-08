import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://thermosolis.fr',
    integrations: [react(), sitemap()],
    build: {
        inlineStylesheets: 'always'
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, '../../packages/yacms-core/src'),
                'zod-to-json-schema': path.resolve(import.meta.dirname, './src/stubs/zod-to-json-schema.ts'),
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
