import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('faqTitle') };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="FAQ" title={t('title')} />
      <div className="mt-10 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-[24px] border border-[#2E3877] bg-[#141B4D] p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-[#F4F5FF]">{item.question}</summary>
            <p className="mt-4 text-[#EAF0FF]">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
