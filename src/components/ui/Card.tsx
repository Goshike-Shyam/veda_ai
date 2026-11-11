export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[28px] border border-[#2E3877] bg-[#141B4D] ${className}`}>{children}</div>;
}
