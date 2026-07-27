import { cn } from "@/lib/utils";

function Spinner({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center" role="status">
      <svg
        className={cn("animate-spin h-8 w-8 text-primary-black/30", className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      role="status"
      className={cn(
        "animate-pulse rounded-md bg-primary-black/10",
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="pt-24 min-h-screen bg-primary-white px-[5%] py-16">
      <div className="container mx-auto">
        <Skeleton className="h-10 w-48 mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Skeleton className="aspect-[4/5] rounded-xl" />
          <div className="space-y-6">
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-6 w-40" />
            <div className="space-y-4 mt-10">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-4/6" />
            </div>
            <div className="space-y-4 mt-10">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioGridSkeleton() {
  return (
    <div className="pt-24 min-h-screen bg-primary-white container mx-auto px-[5%] py-16">
      <div className="text-center mb-16">
        <Skeleton className="h-16 w-64 mx-auto mb-6" />
        <Skeleton className="h-10 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="aspect-[4/5] rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export { Spinner, Skeleton, PageSkeleton, PortfolioGridSkeleton };
