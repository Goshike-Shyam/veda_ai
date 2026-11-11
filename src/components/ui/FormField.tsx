export function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-[#F4F5FF]">
      <span>{label}</span>
      {children}
    </label>
  );
}
