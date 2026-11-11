import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/layout/PageHeader';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('seo');
  return { title: 'Student Assistant' };
}

export default async function StudentAssistantPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products');

  return (
    <div className="container-shell py-12 md:py-16">
      <PageHeader eyebrow="Student Assistant" title={t('studentAssistantTitle')} lede={t('studentAssistantLead')} />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6">
          <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#F4F5FF]">{t('forEveryRole')}</h3>
          <ul className="mt-4 space-y-3 text-[#EAF0FF]">
            <li>{t('roleStudents')}</li>
            <li>{t('roleParents')}</li>
            <li>{t('roleTeachers')}</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6">
          <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#F4F5FF]">{t('boardsTitle')}</h3>
          <ul className="mt-4 space-y-2 text-[#EAF0FF]">
            {(t.raw('boards') as string[]).map((board) => <li key={board}>{board}</li>)}
          </ul>
        </div>

        <div className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6">
          <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#F4F5FF]">{t('safeTitle')}</h3>
          <p className="mt-4 text-[#EAF0FF]">{t('safeCopy')}</p>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6">
        <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#F4F5FF]">{t('languageTitle')}</h3>
        <p className="mt-4 text-[#EAF0FF]">{(t.raw('languages') as string[]).join(', ')}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-[#35BFC8] px-4 py-2 text-sm font-bold text-[#0F1538]">{t('trialTitle')}</span>
          <Link href="/partner" className="button-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold">{t('trialCta')}</Link>
        </div>
      </div>
    </div>
  );
}
