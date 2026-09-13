type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {kicker && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-accent-300" : "text-accent-600"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight ${
          light ? "text-white" : "text-navy-900"
        } max-w-2xl`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base sm:text-lg ${light ? "text-navy-200" : "text-navy-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
