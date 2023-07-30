import { writable } from 'svelte/store';

// For the moment, I'll keep it in dark only.
// Future todo: Possibly make it depend on user's preferred setting.
export const darkmode = writable(true);
