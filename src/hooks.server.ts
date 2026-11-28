import * as Sentry from '@sentry/sveltekit';

// Sentry.init lives in instrumentation.server.ts
export const handle = Sentry.sentryHandle();

export const handleError = Sentry.handleErrorWithSentry();
