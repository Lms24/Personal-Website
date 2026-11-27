import * as Sentry from '@sentry/sveltekit';

// Runs before the rest of the server code, so Sentry is initialized before
// anything it needs to instrument is loaded.
Sentry.init({
  dsn: 'https://91194bb5140498fecb356ed27719126d@o4504389074223104.ingest.sentry.io/4505618372427776',
  tracesSampleRate: 1.0,
  environment: import.meta.env.DEV ? 'development' : 'production',
  // Since v11 the SDK collects user info, cookies and HTTP bodies unless told
  // otherwise. Keep the previous behavior of not sending them.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpBodies: []
  }
});
