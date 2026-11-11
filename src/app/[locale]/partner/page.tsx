import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';
import { PartnerForm } from '@/components/forms/PartnerForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: 'Partner with us' };
}

export default async function PartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('partner');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Partner" title={t('title')} lede={t('lede')} />
      <div className="mt-10 max-w-4xl">
        <PartnerForm />
      </div>
    </div>
  );
}
