import { expect, test } from '@playwright/test';

const routes = ['/en'];

test.describe('logo rendering', () => {
  for (const route of routes) {
    test(`logo on ${route} keeps original proportions and no visual transforms`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' });
      const logos = page.locator('img[src*="veda-logo"]');
      const count = await logos.count();

      expect(count).toBeGreaterThan(0);

      for (let index = 0; index < count; index += 1) {
        const logo = logos.nth(index);
        await expect(logo).toBeVisible();

        const snapshot = await logo.evaluate((element) => {
          const image = element as HTMLImageElement;
          const style = window.getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return {
            filter: style.filter,
            opacity: style.opacity,
            transform: style.transform,
            borderRadius: style.borderRadius,
            objectFit: style.objectFit,
            width: rect.width,
            height: rect.height,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
          };
        });

        expect(snapshot.filter).toBe('none');
        expect(Number(snapshot.opacity)).toBe(1);
        expect(snapshot.transform).toBe('none');
        expect(snapshot.borderRadius).toBe('0px');
        expect(snapshot.objectFit).toBe('contain');

        const ratioDifference = Math.abs((snapshot.width / snapshot.height) - (snapshot.naturalWidth / snapshot.naturalHeight));
        expect(ratioDifference).toBeLessThan(0.01);
      }
    });
  }
});
