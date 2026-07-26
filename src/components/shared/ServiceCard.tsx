import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  dark = false,
}: ServiceCardProps) {
  return (
    <div className="group cursor-default">
      <div
        className={`mb-5 md:mb-6 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
          dark
            ? "bg-primary-white/5 group-hover:bg-accent-yellow group-focus-visible:bg-accent-yellow"
            : "bg-primary-black/5 group-hover:bg-accent-yellow group-focus-visible:bg-accent-yellow"
        }`}
      >
        <Icon
          className={`size-8 transition-all duration-500 group-hover:scale-110 group-focus-visible:scale-110 ${
            dark
              ? "text-accent-yellow group-hover:text-primary-black group-focus-visible:text-primary-black"
              : "text-primary-black"
          }`}
        />
      </div>
      <h3
        className={`mb-3 text-lg font-bold md:mb-4 md:text-xl uppercase tracking-wider ${
          dark ? "text-primary-white" : "text-primary-black"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${
            dark ? "text-primary-white/80" : "text-primary-black/70"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
