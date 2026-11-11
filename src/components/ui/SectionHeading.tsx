export function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <header className="mb-8">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="section-heading">{title}</h2>
      {lead ? <p className="section-lede">{lead}</p> : null}
    </header>
  );
}
