export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-zinc-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
