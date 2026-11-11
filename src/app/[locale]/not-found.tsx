import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="container-shell py-16 md:py-24" tabIndex={-1}>
        <h1 className="text-5xl font-bold tracking-[-0.08em] text-[#F4F5FF]">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg text-[#EAF0FF]">The page you requested could not be found.</p>
        <div className="mt-8">
          <Button href="/" variant="primary">Back home</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
