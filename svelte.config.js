import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex({
      extensions: ['.md']
    })
  ],

  extensions: ['.svelte', '.md'],

  kit: {
    // adapter-vercel 3.x only infers runtimes for Node 16–20 and throws on newer
    // versions, so the runtime has to be named explicitly.
    adapter: adapter({ runtime: 'nodejs26.x' }),
    files: {
      lib: './src/lib'
    }
  },

  vitePlugin: {
    inspector: true
  }
};

export default config;
