import { expect, test } from '@playwright/test';

test('soon route renders under construction with a visible header', async ({ page }) => {
  const response = await page.goto('/en/products/juriq', { waitUntil: 'networkidle' });
  expect(response?.status()).toBe(200);

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('h1')).toHaveText('Page under construction');

  const robotsMeta = await page.locator('meta[name="robots"]').getAttribute('content');
  expect(robotsMeta).toContain('noindex');
});

test('unknown route renders the 404 page with a visible header', async ({ page }) => {
  const response = await page.goto('/en/not-a-real-route-123456', { waitUntil: 'networkidle' });
  expect(response?.status()).toBe(404);

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('h1')).toHaveText('Page not found');
});
