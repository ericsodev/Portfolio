import "../../styles/sectionLayout.css";
export function SectionLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="section hidden">
      <section className="section-header">
        <h1 className="section-title">{title}</h1>
      </section>
      {children}
    </div>
  );
}
