export function Alert({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'success' | 'error' }) {
  const classes = {
    default: 'border-[#2E3877] bg-[#141B4D] text-[#F4F5FF]',
    success: 'border-[#35BFC8] bg-[#0F1538] text-[#F4F5FF]',
    error: 'border-[#ffbcad] bg-[#1f1b1a] text-[#ffd7cd]',
  };

  return <div className={`rounded-xl border px-4 py-3 ${classes[tone]}`}>{children}</div>;
}
