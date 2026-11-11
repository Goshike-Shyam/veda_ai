'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { TurnstileWidget } from './TurnstileWidget';

export function ContactForm() {
  const t = useTranslations('forms');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      message: String(form.get('message') || ''),
      consent: form.get('consent') === 'on',
      website: String(form.get('website') || ''),
    };

    setSubmitting(true);
    setError('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setSubmitting(false);

    if (result.ok) {
      setStatus('success');
      return;
    }

    setStatus('error');
    setError(result.code || 'form.error');
  }

  if (status === 'success') {
    return <div role="status" className="rounded-[24px] border border-[#35BFC8] bg-[#0F1538] p-5 text-[#F4F5FF]">{t('success')}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#F4F5FF]">
          <span>{t('contact.name')}</span>
          <input name="name" required aria-required="true" className="mt-2 min-h-[48px] w-full rounded-xl border border-[#5B67B0] bg-[#0f1538] px-3 text-[#F4F5FF]" />
        </label>

        <label className="block text-sm font-medium text-[#F4F5FF]">
          <span>{t('contact.email')}</span>
          <input type="email" name="email" required aria-required="true" className="mt-2 min-h-[48px] w-full rounded-xl border border-[#5B67B0] bg-[#0f1538] px-3 text-[#F4F5FF]" />
        </label>
      </div>

      <label className="block text-sm font-medium text-[#F4F5FF]">
        <span>{t('contact.message')}</span>
        <textarea name="message" rows={6} required aria-required="true" className="mt-2 w-full rounded-xl border border-[#5B67B0] bg-[#0f1538] px-3 py-2 text-[#F4F5FF]" />
      </label>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="flex items-start gap-3 text-sm text-[#EAF0FF]">
        <input type="checkbox" name="consent" required aria-required="true" className="mt-1 h-5 w-5" />
        <span>{t('contact.consentLabel')}</span>
      </label>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={submitting} aria-busy={submitting} className="button-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold disabled:opacity-60">
          {submitting ? t('sending') : t('submit')}
        </button>
      </div>

      {error ? <div role="alert" className="rounded-xl border border-[#ffbcad] bg-[#1f1b1a] px-3 py-2 text-sm text-[#ffd7cd]">{error}</div> : null}
    </form>
  );
}
