import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Must come before sveltekit()
    sentrySvelteKit({
      org: 'personal-frn',
      project: 'website'
    }),
    tailwindcss(),
    // Blog posts in src/routes/blog/*.md (mdsvex 1.x is a Vite plugin, not a preprocessor)
    mdsvex({ extensions: ['.md'] }),
    sveltekit({
      adapter: adapter({ runtime: 'nodejs26.x' }),
      // SvelteKit's built-in OpenTelemetry spans; picked up by the Sentry SDK
      tracing: { server: true },
      preprocess: vitePreprocess()
    })
  ]
});
