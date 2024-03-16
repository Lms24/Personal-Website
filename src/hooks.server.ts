import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://91194bb5140498fecb356ed27719126d@o4504389074223104.ingest.sentry.io/4505618372427776',
  tracesSampleRate: 1.0,
  environment: import.meta.env.DEV ? 'development' : 'production'
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
