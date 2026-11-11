import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('visionTitle') };
}

export default async function VisionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('vision');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Vision" title={t('title')} lede={t('lede')} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {(t.raw('items') as string[]).map((item) => (
          <div key={item} className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-5 text-[#F4F5FF]">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
        <h2 className="text-3xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{t('missionTitle')}</h2>
        <p className="mt-4 text-lg text-[#EAF0FF]">{t('missionLead')}</p>
      </div>
    </div>
  );
}
