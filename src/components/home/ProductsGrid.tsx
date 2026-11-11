'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function ProductsGrid() {
  const t = useTranslations('home');
  const chips = t.raw('studentAssistantChips') as string[];

  return (
    <section className="container-shell py-12">
      <h2 className="section-heading text-center">{t('productsTitle')}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[28px] border border-[#2E3877] bg-[#35BFC8] p-7 text-[#141A45]">
          <div className="mb-4 inline-flex rounded-full bg-[#0F1538] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#F4F5FF]">{t('studentAssistantTitle')}</div>
          <h3 className="text-4xl font-bold tracking-[-0.06em] text-[#141A45]">{t('studentAssistantTitle')}</h3>
          <p className="mt-4 text-base leading-7 text-[#141A45]">{t('studentAssistantLead')}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-[#141A45]/20 bg-[#141A45] px-3 py-1 text-xs font-semibold text-[#FFFFFF]">{chip}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/products/student-assistant" className="button-solid-ink inline-flex min-h-[48px] items-center justify-center rounded-full px-5 font-semibold">{t('studentAssistantLaunch')}</Link>
            <Link href="/products/student-assistant" className="button-outline-ink inline-flex min-h-[48px] items-center justify-center rounded-full px-5 font-semibold">{t('studentAssistantLaunch')}</Link>
          </div>
        </article>

        <article className="rounded-[28px] border border-[#2E3877] bg-[#F7D7E7] p-7 text-[#141A45]">
          <div className="mb-4 inline-flex rounded-full bg-[#0F1538] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#F4F5FF]">{t('juriqTitle')}</div>
          <h3 className="text-4xl font-bold tracking-[-0.06em] text-[#141A45]">{t('juriqTitle')}</h3>
          <p className="mt-4 text-base leading-7 text-[#141A45]">{t('juriqLead')}</p>
          <p className="mt-3 text-sm font-medium text-[#141A45]">{t('juriqNote')}</p>
          <div className="mt-6">
            <Link href="/contact" className="button-solid-ink inline-flex min-h-[48px] items-center justify-center rounded-full px-5 font-semibold">{t('juriqButton')}</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
