'use client';

import { useEffect } from 'react';

export function TurnstileWidget({ siteKey }: { siteKey?: string }) {
  useEffect(() => {
    if (!siteKey || typeof window === 'undefined') return;

    const scriptId = 'turnstile-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [siteKey]);

  if (!siteKey) return null;

  return <div className="cf-turnstile" data-sitekey={siteKey} />;
}
