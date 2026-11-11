import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home page has no critical accessibility violations', async ({ page }) => {
  await page.goto('/en');
  await expect(page).toHaveTitle(/Veda AI/i);

  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const criticalViolations = result.violations.filter((violation) =>
    ['critical', 'serious'].includes(violation.impact ?? ''),
  );

  const incompleteContrast = result.incomplete.filter((violation) =>
    violation.id === 'color-contrast',
  );

  if (incompleteContrast.length > 0) {
    console.log('axe incomplete color-contrast results:', JSON.stringify(incompleteContrast, null, 2));
  }

  expect(incompleteContrast).toEqual([]);
  expect(criticalViolations).toEqual([]);
});
