import { expect, test } from '@playwright/test';

const routes = [
  '/en',
  '/en/products',
  '/en/products/student-assistant',
  '/en/products/juriq',
  '/en/about',
  '/en/vision',
  '/en/faq',
  '/en/blog',
  '/en/contact',
  '/en/privacy',
  '/en/terms',
  '/en/partner',
];

const widths = [1280, 375];

function hexToRgb(value: string): [number, number, number] | null {
  const cleaned = value.replace('#', '');

  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    return cleaned.split('').map((char) => Number.parseInt(char.repeat(2), 16)) as [number, number, number];
  }

  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    const chunks = cleaned.match(/.{2}/g) ?? [];
    return chunks.map((chunk) => Number.parseInt(chunk, 16)) as [number, number, number];
  }

  return null;
}

function parseColor(value: string): [number, number, number, number] | null {
  if (!value || value === 'transparent') return null;

  const hex = value.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (hex) {
    const rgb = hexToRgb(hex[0]);
    if (rgb) return [...rgb, 1] as [number, number, number, number];
  }

  const rgba = value.match(/rgba?\(([^)]+)\)/i);
  if (rgba) {
    const parts = rgba[1].split(',').map((part) => part.trim());
    const [r, g, b, a = '1'] = parts;
    return [
      Number.parseFloat(r),
      Number.parseFloat(g),
      Number.parseFloat(b),
      Number.parseFloat(a),
    ] as [number, number, number, number];
  }

  return null;
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const channel = (value: number) => {
    const normalized = value / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(colorA: [number, number, number], colorB: [number, number, number]): number {
  const lumA = relativeLuminance(colorA);
  const lumB = relativeLuminance(colorB);
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

function extractGradientColors(backgroundImage: string): Array<[number, number, number]> {
  const matches = [...backgroundImage.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgba?\(([^)]+)\)/g)];
  const colors: Array<[number, number, number]> = [];

  for (const match of matches) {
    const value = match[0];
    const parsed = parseColor(value);
    if (!parsed) continue;
    colors.push([parsed[0], parsed[1], parsed[2]]);
  }

  return colors;
}

function getBackgroundCandidates(element: Element): Array<[number, number, number]> {
  const colors: Array<[number, number, number]> = [];
  let current: Element | null = element;

  while (current) {
    const style = window.getComputedStyle(current);
    const bgColor = parseColor(style.backgroundColor);
    if (bgColor && bgColor[3] > 0) {
      colors.push([bgColor[0], bgColor[1], bgColor[2]]);
    }

    const gradientColors = extractGradientColors(style.backgroundImage);
    if (gradientColors.length) {
      colors.push(...gradientColors);
    }

    if (current === document.body) break;
    current = current.parentElement;
  }

  const final = colors.filter((color, index) => colors.findIndex((other) => other.every((value, channel) => value === other[channel])) === index);
  return final.length ? final : [[255, 255, 255]];
}

async function checkPage(page: any, route: string, width: number) {
  await page.setViewportSize({ width, height: 960 });
  await page.goto(route, { waitUntil: 'load' });

  const results = await page.evaluate(() => {
    const issues: Array<{ route: string; selector: string; ratio: number; threshold: number; text: string }> = [];

    function hexToRgb(value: string): [number, number, number] | null {
      const cleaned = value.replace('#', '');

      if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
        return cleaned.split('').map((char) => Number.parseInt(char.repeat(2), 16)) as [number, number, number];
      }

      if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
        const chunks = cleaned.match(/.{2}/g) ?? [];
        return chunks.map((chunk) => Number.parseInt(chunk, 16)) as [number, number, number];
      }

      return null;
    }

    function parseColor(value: string): [number, number, number, number] | null {
      if (!value || value === 'transparent') return null;

      const hex = value.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
      if (hex) {
        const rgb = hexToRgb(hex[0]);
        if (rgb) return [...rgb, 1] as [number, number, number, number];
      }

      const rgba = value.match(/rgba?\(([^)]+)\)/i);
      if (rgba) {
        const parts = rgba[1].split(',').map((part) => part.trim());
        const [r, g, b, a = '1'] = parts;
        return [
          Number.parseFloat(r),
          Number.parseFloat(g),
          Number.parseFloat(b),
          Number.parseFloat(a),
        ] as [number, number, number, number];
      }

      return null;
    }

    function relativeLuminance([r, g, b]: [number, number, number]): number {
      const channel = (value: number) => {
        const normalized = value / 255;
        return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
      };

      return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
    }

    function contrastRatio(colorA: [number, number, number], colorB: [number, number, number]): number {
      const lumA = relativeLuminance(colorA);
      const lumB = relativeLuminance(colorB);
      const lighter = Math.max(lumA, lumB);
      const darker = Math.min(lumA, lumB);
      return (lighter + 0.05) / (darker + 0.05);
    }

    function extractGradientColors(backgroundImage: string): Array<[number, number, number]> {
      const matches = [...backgroundImage.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgba?\(([^)]+)\)/g)];
      const colors: Array<[number, number, number]> = [];

      for (const match of matches) {
        const value = match[0];
        const parsed = parseColor(value);
        if (!parsed) continue;
        colors.push([parsed[0], parsed[1], parsed[2]]);
      }

      return colors;
    }

    function getBackgroundCandidates(element: Element): Array<[number, number, number]> {
      const colors: Array<[number, number, number]> = [];
      let current: Element | null = element;

      while (current) {
        const style = window.getComputedStyle(current);
        const bgColor = parseColor(style.backgroundColor);
        if (bgColor && bgColor[3] > 0) {
          colors.push([bgColor[0], bgColor[1], bgColor[2]]);
        }

        const gradientColors = extractGradientColors(style.backgroundImage);
        if (gradientColors.length) {
          colors.push(...gradientColors);
        }

        if (current === document.body) break;
        current = current.parentElement;
      }

      const final = colors.filter((color, index) => colors.findIndex((other) => other.every((value, channel) => value === other[channel])) === index);
      return final.length ? final : [[255, 255, 255]];
    }

    const allNodes = Array.from(document.querySelectorAll('a, button, h1, h2, h3, h4, h5, h6, p, span, li, summary, label'));

    for (const node of allNodes) {
      const style = window.getComputedStyle(node);
      const text = (node.textContent ?? '').trim();
      if (!text || style.display === 'none' || style.visibility === 'hidden' || Number.parseFloat(style.opacity) === 0) {
        continue;
      }

      const rect = node.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) continue;

      const foreground = parseColor(style.color);
      if (!foreground) continue;

      const candidates = getBackgroundCandidates(node);
      const threshold = (style.fontSize && Number.parseFloat(style.fontSize) >= 18) || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName.toLowerCase()) ? 3 : 4.5;

      for (const background of candidates) {
        const ratio = contrastRatio([foreground[0], foreground[1], foreground[2]], background);
        if (ratio < threshold) {
          issues.push({
            route: location.pathname,
            selector: node.tagName.toLowerCase() + (node.className ? '.' + String(node.className).split(' ').join('.') : ''),
            ratio,
            threshold,
            text,
          });
        }
      }
    }

    return issues;
  });

  expect(results).toEqual([]);
}

for (const route of routes) {
  test(`computed contrast is compliant on ${route} at desktop and mobile`, async ({ page }) => {
    for (const width of widths) {
      await checkPage(page, route, width);
    }
  });
}
