'use client';

import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';

export function UnderConstruction({ showStudentAssistant = true }: { showStudentAssistant?: boolean }) {
  const t = useTranslations('construction');

  return (
    <section className="container-shell py-12 md:py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: t('title') }]} />
      <PageHeader title={t('title')} lede={t('lede')} />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="/" variant="primary">{t('backHome')}</Button>
        {showStudentAssistant ? (
          <Button href="/products/student-assistant" variant="secondary">{t('exploreStudentAssistant')}</Button>
        ) : null}
      </div>
    </section>
  );
}
