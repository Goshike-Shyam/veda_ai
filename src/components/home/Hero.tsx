'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Hero() {
  const t = useTranslations('home');

  return (
    <section className="container-shell py-10 md:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <p className="eyebrow mb-4">{t('eyebrow')}</p>
          <h1 className="max-w-xl text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-none tracking-[-0.08em] text-[#F4F5FF]">
            {t('heroTitle')}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#EAF0FF] md:text-xl">{t('heroLead')}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/products/student-assistant" className="button-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold transition focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#35BFC8]">
              {t('primaryCta')}
            </Link>
            <Link href="/partner" className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-[#5B67B0] bg-transparent px-6 font-semibold text-[#F4F5FF] transition hover:bg-[#19205A] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#35BFC8]">
              {t('secondaryCta')}
            </Link>
          </div>
        </div>

        <div className="fade-up flex justify-center">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-4 shadow-[var(--shadow)]">
            <Image src="/brand/veda-logo.png" alt={t('logoAlt')} width={520} height={520} quality={100} priority unoptimized className="h-auto w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
