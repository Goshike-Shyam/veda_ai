import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('blogTitle') };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Blog" title={t('title')} lede={t('lede')} />
      <div className="mt-10 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
        <Link href="/contact" className="button-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold">{t('cta')}</Link>
      </div>
    </div>
  );
}
