import { getRequestConfig } from 'next-intl/server';
import { isLocale } from './locales';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const safeLocale = isLocale(locale) ? locale : 'en';

  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default,
  };
});
