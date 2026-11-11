import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('productsTitle') };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Products" title={t('overviewTitle')} lede={t('overviewLead')} />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
          <h2 className="text-4xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{t('studentAssistantTitle')}</h2>
          <p className="mt-4 text-lg text-[#EAF0FF]">{t('studentAssistantLead')}</p>
          <Link href="/products/student-assistant" className="button-primary mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold">Learn more</Link>
        </article>

        <article className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8">
          <h2 className="text-4xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{t('juriqTitle')}</h2>
          <p className="mt-4 text-lg text-[#EAF0FF]">{t('juriqLead')}</p>
          <Link href="/products/juriq" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#5B67B0] bg-transparent px-6 font-semibold text-[#F4F5FF]">Learn more</Link>
        </article>
      </div>
    </div>
  );
}
