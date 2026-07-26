"use client";

import React from "react";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatCard } from "@/components/shared/StatCard";
import { stats } from "@/data/stats";

export function About() {
  return (
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white scroll-mt-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 items-center">
          <div>
            <SectionHeader
              label="About"
              title='Crafting <span class="text-accent-yellow">Stories</span> Through Visuals'
            />
          </div>
          <div>
            <p className="md:text-md text-primary-black/70 mb-6 leading-relaxed">
              Elevate adalah studio kreatif yang berfokus pada produksi visual,
              pengembangan konten, dan kolaborasi kreatif lintas disiplin. Kami
              bekerja bersama brand, organisasi, dan individu untuk menghasilkan
              karya visual yang relevan, terarah, dan memiliki kualitas produksi
              yang kuat.
            </p>
            <p className="md:text-md text-primary-black/70 leading-relaxed">
              Setiap proyek dikembangkan melalui kombinasi perencanaan kreatif,
              koordinasi produksi yang terstruktur, serta eksekusi visual yang
              profesional. Dengan struktur kerja yang fleksibel, kami menghadirkan
              solusi yang efisien dan adaptif.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            <div className="mt-12">
              <ElevateButton
                variant="accent"
                size="lg"
                className="group"
              >
                Download Company Profile{" "}
                <span className="ml-2 transition-transform inline-block group-hover:translate-y-1 group-focus-visible:translate-y-1">
                  ↓
                </span>
              </ElevateButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
