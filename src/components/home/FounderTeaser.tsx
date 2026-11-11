'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function FounderTeaser() {
  const t = useTranslations('home');

  return (
    <section className="container-shell py-12">
      <div className="grid items-center gap-8 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6 md:grid-cols-[220px_1fr] md:p-8">
        <div className="flex justify-center md:justify-start">
          <div className="flex h-[180px] w-[180px] items-center justify-center rounded-[26px] bg-white p-3 shadow-[0_10px_24px_rgba(10,15,34,0.14)]">
            <Image src="/brand/veda-logo.png" alt={t('founderName')} width={160} height={160} quality={100} unoptimized className="h-auto w-full object-contain" />
          </div>
        </div>

        <div>
          <p className="eyebrow">Founder</p>
          <h3 className="mt-3 text-4xl font-bold tracking-[-0.06em] text-[#F4F5FF]">{t('founderName')}</h3>
          <p className="mt-4 text-lg text-[#EAF0FF]">{t('founderLead')}</p>
          <Link href="/about" className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#5B67B0] bg-transparent px-5 font-semibold text-[#F4F5FF]">Learn more</Link>
        </div>
      </div>
    </section>
  );
}
