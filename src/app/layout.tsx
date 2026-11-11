import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: '%s | Veda AI Technologies',
    default: 'Veda AI Technologies',
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [{ url: '/og.png', width: 1200, height: 1200, alt: 'Veda AI Technologies' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0F1538] text-[#F4F5FF]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
