'use client';

import type { Route } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function AudienceNav() {
  const t = useTranslations('home');
  const cards = t.raw('audienceCards') as Array<{ title: string; href: Route }>;

  return (
    <section className="container-shell py-12">
      <h2 className="section-heading text-center">{t('audienceTitle')}</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group flex min-h-[120px] flex-col justify-between rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#35BFC8] hover:shadow-[0_18px_36px_rgba(11,22,44,0.35)]"
          >
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-[#7FE3EE]">Veda AI</span>
            <span className="text-lg font-semibold text-[#F4F5FF]">{card.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
