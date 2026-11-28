import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'yarn build && yarn preview',
    port: 4173
  }
});
