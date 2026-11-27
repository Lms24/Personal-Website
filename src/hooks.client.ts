import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://91194bb5140498fecb356ed27719126d@o4504389074223104.ingest.sentry.io/4505618372427776',
  tracesSampleRate: 1.0,
  environment: import.meta.env.DEV ? 'development' : 'production',

  // Record 10% of sessions, and every session in which an error happens.
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [Sentry.replayIntegration({ maskAllText: false, blockAllMedia: false })],

  // Since v11 the SDK collects user info, cookies and HTTP bodies unless told
  // otherwise. Keep the previous behavior of not sending them.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpBodies: []
  }
});

Sentry.metrics.count('page_views', 1);

export const handleError = Sentry.handleErrorWithSentry();
