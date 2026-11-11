import { notFound } from 'next/navigation';
import { routes } from '@/content/site';
import { LOCALES } from '@/i18n/locales';
import { UnderConstruction } from '@/components/layout/UnderConstruction';

export function generateStaticParams() {
  return routes
    .filter((route) => route.status === 'soon')
    .flatMap((route) =>
      Object.keys(LOCALES).map((locale) => ({
        locale,
        slug: route.path.split('/').filter(Boolean),
      })),
    );
}

export const metadata = {
  title: 'Page under construction',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CatchAllPage({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { slug = [] } = await params;
  const path = `/${slug.join('/')}`;
  const route = routes.find((entry) => entry.path === path);

  if (route?.status === 'soon') {
    return <UnderConstruction />;
  }

  return notFound();
}
