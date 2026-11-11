export function Tag({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'live' | 'coming' }) {
  const classes = {
    default: 'bg-[#19205A] text-[#F4F5FF]',
    live: 'bg-[#35BFC8] text-[#0F1538]',
    coming: 'bg-[#F58220] text-[#141A45]',
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] ${classes[tone]}`}>{children}</span>;
}
