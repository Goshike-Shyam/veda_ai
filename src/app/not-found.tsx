import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE4E6]">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.08em] text-[#F4F5FF] md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-[#EAF0FF]">The page you requested could not be found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7DE2D1] px-5 py-3 text-sm font-semibold text-[#091221] transition hover:bg-[#8EE4E6]"
      >
        Back home
      </Link>
    </main>
  );
}
