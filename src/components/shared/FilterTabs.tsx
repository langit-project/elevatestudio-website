import { cn } from "@/lib/utils";

interface FilterOption {
  id: string;
  name: string;
}

interface FilterTabsProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function FilterTabs({ options, activeId, onChange, className }: FilterTabsProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-1", className)}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "relative px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300",
            activeId === option.id
              ? "text-primary-black"
              : "text-primary-black/50 hover:text-primary-black/80"
          )}
        >
          <span
            className={cn(
              "absolute inset-x-0 bottom-2.75 z-0 h-[25%] bg-accent-yellow/60 rounded-xs origin-center transition-transform duration-300",
              activeId === option.id ? "scale-x-100" : "scale-x-0"
            )}
          />
          <span className="relative z-10">{option.name}</span>
        </button>
      ))}
    </div>
  );
}
