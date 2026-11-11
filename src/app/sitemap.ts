import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { routes } from '@/content/site';

export const dynamic = 'force-static';

const liveRoutes = [{ path: '' as const, status: 'live' as const }, ...routes.filter((route) => route.status === 'live')].map((route) => route.path);

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  return liveRoutes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale === 'en' ? '' : locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
  );
}
