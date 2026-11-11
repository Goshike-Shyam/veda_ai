import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('aboutTitle') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="About" title={t('title')} lede={t('lede')} />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
          <p className="text-lg text-[#EAF0FF]">{t('story')}</p>
        </article>
        <article className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
          <h2 className="text-3xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{t('founderTitle')}</h2>
          <p className="mt-4 text-xl font-semibold text-[#7FE3EE]">{t('founderIntro')}</p>
          <ul className="mt-5 space-y-3 text-[#EAF0FF]">
            {(t.raw('highlights') as string[]).map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </article>
      </div>
    </div>
  );
}
