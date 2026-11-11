import { setRequestLocale } from 'next-intl/server';
import { UnderConstruction } from '@/components/layout/UnderConstruction';

export const metadata = {
  title: 'Juriq',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function JuriqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <UnderConstruction showStudentAssistant={false} />;
}
