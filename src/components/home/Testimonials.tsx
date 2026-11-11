import { getTestimonials } from '@/lib/testimonials';
import { getTranslations } from 'next-intl/server';

export async function Testimonials() {
  const t = await getTranslations('home');
  const items = await getTestimonials();

  if (items.length < 2) return null;

  return (
    <section className="container-shell py-12">
      <h2 className="section-heading text-center">{t('productsTitle')}</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <figure key={`${item.displayName}-${item.userRole}`} className="rounded-[28px] border border-[#2E3877] bg-[#141B4D] p-6 text-left">
            <blockquote className="text-lg leading-8 text-[#F4F5FF]">“{item.feedbackText}”</blockquote>
            <figcaption className="mt-4 text-sm uppercase tracking-[0.12em] text-[#7FE3EE]">
              {item.displayName} · {item.userRole}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
