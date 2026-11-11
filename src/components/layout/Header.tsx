'use client';

import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/content/site';
import { LogoPlate } from '@/components/ui/LogoPlate';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { href: '/products', label: t('products') },
    { href: '/about', label: t('about') },
    { href: '/vision', label: t('vision') },
    { href: '/faq', label: t('faq') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href || pathname === `/en${href}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#2E3877] bg-[#0F1538]/95 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <LogoPlate />
          <span className="text-lg font-bold tracking-[-0.04em] text-[#F4F5FF]">{siteConfig.name}</span>
        </Link>

        <nav aria-label={t('primary')} className="hidden items-center gap-7 text-sm font-medium text-[#F4F5FF] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={isActive(link.href) ? 'text-[#F4F5FF]' : 'text-[#EAF0FF] hover:text-[#F4F5FF]'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/partner" variant="primary" className="button-primary min-h-[44px] px-5 text-sm">{t('partner')}</Button>
        </div>

        {mounted ? <MobileNav /> : null}
      </div>
    </header>
  );
}
