import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const darkmode = writable(
  browser &&
    window !== undefined &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
);
