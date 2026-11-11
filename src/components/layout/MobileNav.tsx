'use client';

import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function MobileNav() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { href: '/products', label: t('products') },
    { href: '/about', label: t('about') },
    { href: '/vision', label: t('vision') },
    { href: '/faq', label: t('faq') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href || pathname === `/en${href}`;

  useEffect(() => {
    const close = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current && !panelRef.current.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t('closeMenu') : t('openMenu')}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#5B67B0] bg-transparent text-lg text-[#F4F5FF]"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>

      {open ? (
        <div id="mobile-menu" ref={panelRef} className="absolute left-4 right-4 top-full mt-3 rounded-2xl border border-[#2E3877] bg-[#141B4D] p-4 shadow-[var(--shadow)]">
          <nav aria-label={t('primary')} className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-[48px] items-center rounded-xl px-3 ${isActive(link.href) ? 'bg-[#19205A] text-[#F4F5FF]' : 'text-[#F4F5FF]'}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/partner" className="button-primary mt-2 flex min-h-[48px] items-center justify-center rounded-full px-5 font-semibold">
              {t('partner')}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
