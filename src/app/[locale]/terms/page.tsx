import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: t('termsTitle') };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Terms" title="Terms of use" lede={t('lede')} />
      <div className="mt-10 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8 text-[#EAF0FF]">
        <p>This is a draft terms page for legal review before launch.</p>
        <p className="mt-4">The content on this website is informational only, and users should not rely on it as legal or professional advice unless separately qualified and reviewed.</p>
      </div>
    </div>
  );
}
