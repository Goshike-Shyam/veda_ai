import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/content/site';
import { LogoPlate } from '@/components/ui/LogoPlate';

export async function Footer() {
  const t = await getTranslations('footer');
  const nav = await getTranslations('nav');

  return (
    <footer className="mt-20 border-t border-[#2E3877] bg-[#09142b]">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <LogoPlate className="h-11 w-11" />
              <div>
                <div className="text-lg font-bold">{siteConfig.name}</div>
              </div>
            </div>
            <p className="max-w-sm text-sm text-[#EAF0FF]">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7FE3EE]">{t('company')}</h3>
            <ul className="space-y-3 text-sm text-[#F4F5FF]">
              <li><Link href="/about" className="hover:text-white">{nav('about')}</Link></li>
              <li><Link href="/vision" className="hover:text-white">{nav('vision')}</Link></li>
              <li><Link href="/partner" className="hover:text-white">{nav('partner')}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{nav('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7FE3EE]">{t('products')}</h3>
            <ul className="space-y-3 text-sm text-[#F4F5FF]">
              <li><Link href="/products/student-assistant" className="hover:text-white">{t('studentAssistant')}</Link></li>
              <li><Link href="/products/juriq" className="hover:text-white">{t('juriq')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7FE3EE]">{t('resources')}</h3>
            <ul className="space-y-3 text-sm text-[#F4F5FF]">
              <li><Link href="/faq" className="hover:text-white">{nav('faq')}</Link></li>
              <li><Link href="/blog" className="hover:text-white">{nav('blog')}</Link></li>
              <li><Link href="/privacy" className="hover:text-white">{nav('privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-white">{nav('terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2E3877] pt-5 text-sm text-[#EAF0FF] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-white">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
