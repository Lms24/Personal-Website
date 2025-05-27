import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { Handle, redirect } from '@sveltejs/kit';

Sentry.init({
  dsn: 'https://91194bb5140498fecb356ed27719126d@o4504389074223104.ingest.sentry.io/4505618372427776',
  tracesSampleRate: 1.0,
  environment: import.meta.env.DEV ? 'development' : 'production'
});

const handleRedirects: Handle = async ({ event, resolve }) => {
  if (event.route.id === 'about') {
    redirect(300, '/');
  }
  return resolve(event);
};

export const handle = sequence(sentryHandle(), handleRedirects);

export const handleError = handleErrorWithSentry();
