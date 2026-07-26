"use client";

import { ElevateButton } from "@/components/shared/ElevateButton";

export function CallToAction() {
  return (
    <section id="cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-accent-yellow scroll-mt-18">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-primary-black uppercase leading-[1.1]">
            Ready to <span className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-2 w-[104%] -left-[2%] z-0 h-full bg-primary-black rounded-xs"
              />
              <span className="relative z-10 text-primary-white">elevate</span>
            </span> your brand?
          </h2>
          <p className="md:text-md text-primary-black/80 max-w-2xl mb-12">
            Let's discuss your vision and turn it into a high-quality visual production. Whether it's a small project or a large-scale production, we're here to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ElevateButton asChild variant="primary" size="xl">
              <a
                href="https://wa.me/6285927400808"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Proyek
              </a>
            </ElevateButton>
            <ElevateButton asChild variant="outlineInvert" size="xl">
              <a href="#contact">Konsultasi</a>
            </ElevateButton>
          </div>
        </div>
      </div>
    </section>
  );
}
