'use client';

import { useTranslations } from 'next-intl';

export function Principles() {
  const t = useTranslations('home');
  const items = t.raw('principles') as Array<{ title: string; copy: string }>;

  return (
    <section className="container-shell py-12">
      <h2 className="section-heading text-center">{t('principlesTitle')}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#7FE3EE]">0{index + 1}</div>
            <h3 className="text-3xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{item.title}</h3>
            <p className="mt-3 text-base text-[#EAF0FF]">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
