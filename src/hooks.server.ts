import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://91194bb5140498fecb356ed27719126d@o4504389074223104.ingest.sentry.io/4505618372427776',
  tracesSampleRate: 1.0
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle(), async ({ event, resolve }) => {
  // event.setHeaders({
  //   'Content-Security-Policy': "script-src 'sha256-fIxH/L8nHahyPrUSYGM5Xpfnug83e5hCk+ahSPeI7bw='"
  // });

  // Custom handler
  const res = await resolve(event);

  const oldCspHeader = res.headers.get('Content-Security-Policy');
  res.headers.set(
    'Content-Security-Policy',
    `${oldCspHeader} ${oldCspHeader?.includes('script-src') ? '' : 'script-src'} 'nonce-2726c7f26c'`
  );

  return res;
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
