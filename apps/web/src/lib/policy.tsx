export function PolicyPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="container-hb max-w-3xl py-10 md:py-14">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">{title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-hb-muted md:text-base">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    </div>
  );
}
