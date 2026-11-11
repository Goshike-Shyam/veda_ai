type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
};

export function PageHeader({ eyebrow, title, lede, align = 'left' }: PageHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h1 className="text-4xl font-bold tracking-[-0.08em] text-[#F4F5FF] md:text-6xl">{title}</h1>
      {lede ? <p className="mt-4 text-lg text-[#EAF0FF]">{lede}</p> : null}
    </div>
  );
}
