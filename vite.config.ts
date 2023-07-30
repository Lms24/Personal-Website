import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    sentrySvelteKit({
      sourceMapsUploadOptions: {
        org: 'personal-frn',
        project: 'website'
      }
    }),
    sveltekit()
  ]
};

export default config;
