import { expect, test } from '@playwright/test';

test('home page shows name and main sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Lukas Stracke');
  for (const label of ['Experience', 'Education', 'Recent talks', 'Writing']) {
    await expect(page.getByRole('heading', { level: 2, name: label })).toBeVisible();
  }
});

test('main navigation reaches every page', async ({ page }) => {
  await page.goto('/');
  for (const [name, heading] of [
    ['Work', 'Work'],
    ['Talks', 'Talks'],
    ['About', 'Lukas Stracke']
  ]) {
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
  }
});

test('theme toggle switches and remembers the theme', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const root = page.locator('html');
  await expect(root).not.toHaveAttribute('data-theme');

  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(root).toHaveAttribute('data-theme', 'dark');

  await page.reload();
  await expect(root).toHaveAttribute('data-theme', 'dark');

  // Going back to the OS theme clears the stored choice
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(root).not.toHaveAttribute('data-theme');
});
