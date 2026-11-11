export const LOCALES = {
  en: {
    label: 'English',
    native: 'English',
    dir: 'ltr',
  },
  // te: { label: 'Telugu', native: 'తెలుగు', dir: 'ltr' },
  // hi: { label: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
} as const;

export type Locale = keyof typeof LOCALES;

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && value in LOCALES;
}
