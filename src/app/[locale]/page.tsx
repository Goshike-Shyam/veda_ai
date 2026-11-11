import { setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/i18n/locales';
import { Hero } from '@/components/home/Hero';
import { AudienceNav } from '@/components/home/AudienceNav';
import { ProductsGrid } from '@/components/home/ProductsGrid';
import { Principles } from '@/components/home/Principles';
import { VisionBand } from '@/components/home/VisionBand';
import { Testimonials } from '@/components/home/Testimonials';
import { FounderTeaser } from '@/components/home/FounderTeaser';
import { PartnerCta } from '@/components/home/PartnerCta';

export function generateStaticParams() {
  return Object.keys(LOCALES).map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: 'Home',
    description: 'Veda AI Technologies builds practical AI products that make knowledge accessible.',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AudienceNav />
      <ProductsGrid />
      <Principles />
      <VisionBand />
      <Testimonials />
      <FounderTeaser />
      <PartnerCta />
    </>
  );
}
