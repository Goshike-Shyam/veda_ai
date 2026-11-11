'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="container-shell py-24 text-center">
      <h1 className="text-5xl font-bold tracking-[-0.08em] text-[#F4F5FF]">Something went wrong</h1>
      <button type="button" onClick={() => reset()} className="button-primary mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold">Try again</button>
    </div>
  );
}
