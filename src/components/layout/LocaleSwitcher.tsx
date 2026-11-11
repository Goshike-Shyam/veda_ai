'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { LOCALES } from '@/i18n/locales';

export function LocaleSwitcher() {
  const locale = useLocale();
  const locales = Object.entries(LOCALES);

  if (locales.length < 2) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-[#EAF0FF]">
      {locales.map(([code, meta]) => (
        <Link key={code} href="/" locale={code} className={code === locale ? 'text-[#F4F5FF]' : ''}>
          {meta.native}
        </Link>
      ))}
    </div>
  );
}
