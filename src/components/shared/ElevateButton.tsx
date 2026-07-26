import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const elevateButtonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md font-heading font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-black text-primary-white shadow-md hover:tracking-[0.2em] hover:shadow-lg focus-visible:tracking-[0.2em] focus-visible:shadow-lg focus-visible:outline-none",
        accent:
          "bg-accent-yellow text-primary-black shadow-md hover:tracking-[0.2em] hover:shadow-lg focus-visible:tracking-[0.2em] focus-visible:shadow-lg focus-visible:outline-none",
        outlineInvert:
          "border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white hover:tracking-[0.2em] focus-visible:bg-primary-black focus-visible:text-primary-white focus-visible:tracking-[0.2em] focus-visible:outline-none",
        default:
          "bg-primary text-primary-foreground shadow-md hover:tracking-[0.2em] hover:shadow-lg focus-visible:tracking-[0.2em] focus-visible:shadow-lg focus-visible:outline-none",
      },
      size: {
        default: "h-9 px-6 py-0 text-sm",
        lg: "h-10 px-6 py-0 text-base",
        xl: "h-12 px-8 py-0 text-lg",
        sm: "h-8 px-4 py-0 text-xs",
        xs: "h-7 px-4 py-0 text-[10px]",
        icon: "size-9 p-0",
        "icon-sm": "size-8 p-0",
        full: "h-10 w-full px-6 py-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const ElevateButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
  VariantProps<typeof elevateButtonVariants> & {
    asChild?: boolean;
  }
>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(elevateButtonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
ElevateButton.displayName = "ElevateButton";

export { ElevateButton, elevateButtonVariants };
