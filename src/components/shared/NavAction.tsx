import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

interface NavActionProps {
  href: string;
  label?: string;
  icon?: ComponentType<{ className?: string }>;
  variant?: "nav" | "footer" | "social";
  className?: string;
}

export function NavAction({ href, label, icon: Icon, variant = "nav", className }: NavActionProps) {
  if (variant === "social" && Icon) {
    return (
      <a
        href={href}
        className={cn("block cursor-pointer transition-all duration-300 text-dark-accent hover:text-primary-black hover:scale-110 focus-visible:text-primary-black focus-visible:scale-110 focus-visible:outline-none", className)}
        aria-label={label}
      >
        <Icon className="size-6" />
      </a>
    );
  }

  if (variant === "footer") {
    return (
      <a
        href={href}
        className={cn("group relative cursor-pointer transition-all duration-300 text-dark-accent hover:text-primary-black focus-visible:text-primary-black focus-visible:outline-none uppercase text-xs tracking-widest font-semibold", className)}
      >
        {label}
        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-black transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
      </a>
    );
  }

  return (
    <li className={cn("group cursor-pointer", className)}>
      <a
        href={href}
        className="relative px-3 py-2 transition-colors duration-300 font-heading font-medium uppercase text-xs tracking-[0.2em] text-primary-black"
      >
        <span className="absolute inset-x-0 bottom-2 z-0 h-[30%] bg-accent-yellow/60 rounded-xs origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        <span className="relative z-10">{label}</span>
      </a>
    </li>
  );
}
