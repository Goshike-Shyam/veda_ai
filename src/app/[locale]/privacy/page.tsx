import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('privacyTitle') };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Privacy" title={t('title')} lede={t('lede')} />
      <div className="mt-10 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8 text-[#EAF0FF]">
        <p>{t('draft')}</p>
        <p className="mt-4">{t('types')}</p>
      </div>
    </div>
  );
}
