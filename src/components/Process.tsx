"use client";

import { ElevateButton } from "@/components/shared/ElevateButton";
import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white scroll-mt-18">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-2xl md:mb-18 lg:mb-20">
            <SectionHeader
              label="How to Work"
              title="How We Work"
              description="Pendekatan kami terstruktur dan kolaboratif. Kami melewati setiap fase dengan tujuan yang jelas untuk memastikan hasil yang berkualitas."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="group w-full">
                <div className="mb-5 flex justify-center md:mb-6">
                  <div className="bg-primary-black/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-accent-yellow transition-all duration-500">
                    <step.icon className="size-8 text-primary-black group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-lg font-bold md:mb-4 md:text-xl text-primary-black uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-center text-primary-black/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <ElevateButton
              asChild
              variant="primary"
            >
              <a href="#contact">Mulai Konsultasi</a>
            </ElevateButton>
          </div>
        </div>
      </div>
    </section>
  );
}
