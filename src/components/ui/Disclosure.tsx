export function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="rounded-[24px] border border-[#2E3877] bg-[#141B4D] p-5">
      <summary className="cursor-pointer list-none text-lg font-semibold text-[#F4F5FF]">{title}</summary>
      <div className="mt-3 text-[#EAF0FF]">{children}</div>
    </details>
  );
}
