interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";

  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;

  labelHighlight?: boolean;
  highlightClassName?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  labelClassName = "text-dark-accent",
  titleClassName = "text-primary-black",
  descriptionClassName = "text-primary-black/70",
  labelHighlight = true,
  highlightClassName = "bg-accent-yellow/60",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p
        className={`mb-3 font-semibold md:mb-4 uppercase tracking-widest text-sm ${labelClassName} ${labelHighlight ? "relative inline-block isolate" : ""
          }`}
      >
        {labelHighlight && (
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 bottom-0.5 z-0 h-[50%] w-[130%] rounded-xs ${highlightClassName}`}
          />
        )}
        <span className={`${labelHighlight ? "relative z-10 ml-[15%]" : ""} text-nowrap`}>{label}</span>
      </p>

      <h2
        className={`text-5xl font-bold md:text-7xl lg:text-8xl capitalize leading-tight ${titleClassName}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {description && (
        <p
          className={`md:text-md max-w-2xl mt-4 ${descriptionClassName} ${align === "center" ? "mx-auto" : ""
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}