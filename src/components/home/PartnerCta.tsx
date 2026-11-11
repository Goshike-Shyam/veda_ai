'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function PartnerCta() {
  const t = useTranslations('home');

  return (
    <section className="container-shell py-12">
      <div className="rounded-[28px] border border-[#2E3877] bg-[#0F1538] p-8 text-center md:p-10">
        <h2 className="text-4xl font-bold tracking-[-0.06em] text-[#F4F5FF] md:text-6xl">{t('partnerTitle')}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#EAF0FF]">{t('partnerLead')}</p>
        <Link href="/partner" className="button-primary mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold">{t('partnerButton')}</Link>
      </div>
    </section>
  );
}
