interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, subtitle }: Props) {
  return (
    <div className="mb-8 md:mb-14">
      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[var(--teal)] mb-3"
        style={{ fontFamily: "var(--font-body)" }}>
        <span className="w-4 sm:w-5 h-px bg-[var(--teal)]" />
        {tag}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-1)] leading-tight"
        style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--text-3)] max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}