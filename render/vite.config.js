// Renders the kb export as the desk builds it: .svx through mdsvex, runbook layout, #lib alias.
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: ['.svelte', '.svx'],
      preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: fileURLToPath(new URL('src/lib/layouts/runbook.svelte', import.meta.url)) } })],
      adapter: adapter({ pages: 'build', assets: 'build', strict: false }),
      alias: { '#lib': 'src/lib' },
      inlineStyleThreshold: Infinity,
      prerender: { entries: ['/kb'], handleHttpError: 'warn' },
    }),
  ],
});
