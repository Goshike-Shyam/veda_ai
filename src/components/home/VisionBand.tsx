'use client';

import { useTranslations } from 'next-intl';

export function VisionBand() {
  const t = useTranslations('home');

  return (
    <section className="container-shell py-12">
      <div className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-8 md:p-10">
        <p className="eyebrow">Vision</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.07em] text-[#F4F5FF] md:text-6xl">{t('visionTitle')}</h2>
        <p className="mt-5 max-w-3xl text-lg text-[#EAF0FF]">{t('visionLead')}</p>
      </div>
    </section>
  );
}
