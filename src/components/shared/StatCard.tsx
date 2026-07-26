interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group cursor-default">
      <h4 className="text-5xl font-bold text-primary-black transition-colors duration-300 group-hover:text-accent-yellow group-focus-visible:text-accent-yellow">
        {value}
      </h4>
      <p className="text-xs text-primary-black/55 uppercase tracking-[0.2em] mt-2 font-bold">
        {label}
      </p>
    </div>
  );
}
