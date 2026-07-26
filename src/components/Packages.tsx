"use client";

import { ElevateButton } from "@/components/shared/ElevateButton";
import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { packages } from "@/data/packages";
import { Check } from "lucide-react";

export function Packages() {
  return (
    <section id="packages" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white scroll-mt-18">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            label="Pricing"
            title='Our <span class="text-accent-yellow">Pricing</span>'
            description="Harga transparan mulai dari nilai di bawah, dirancang untuk efisiensi dan hasil berkualitas tinggi."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col border p-6 transition-all duration-300 rounded-lg ${
                pkg.featured
                  ? "border-accent-yellow bg-primary-black text-primary-white shadow-2xl lg:scale-105 z-10"
                  : "border-primary-black/10 bg-primary-white text-primary-black hover:border-accent-yellow"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase mb-2 leading-tight">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] font-semibold text-primary-black/70 uppercase tracking-wider">
                    Mulai dari
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-xs font-semibold">IDR</span>
                  <span className="text-3xl font-bold">{pkg.price}</span>
                </div>
                <p
                  className={`mt-4 text-xs leading-relaxed ${
                    pkg.featured
                      ? "text-primary-white/80"
                      : "text-primary-black/70"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>
              <div className="mb-8 grow">
                <ul className="space-y-3 text-xs">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-accent-yellow" />
                      <span
                        className={
                          pkg.featured
                            ? "text-primary-white/90"
                            : "text-primary-black/80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <ElevateButton
                asChild
                variant={pkg.featured ? "accent" : "primary"}
                size="full"
                className="text-xs"
              >
                <a href="#contact">{pkg.buttonText}</a>
              </ElevateButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
