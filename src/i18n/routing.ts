import { defineRouting } from 'next-intl/routing';
import { LOCALES } from './locales';

export const routing = defineRouting({
  locales: Object.keys(LOCALES),
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
});
