"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ElevateButton } from "@/components/shared/ElevateButton";
import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white scroll-mt-18">
      <div className="container mx-auto">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <SectionHeader
            label="Common Questions"
            title="FAQ"
            description="Temukan jawaban untuk pertanyaan umum tentang bekerja sama dengan Elevate untuk proyek Anda selanjutnya."
          />
        </div>
        <Accordion type="multiple">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-primary-black/10"
            >
              <AccordionTrigger className="md:py-5 md:text-md cursor-pointer hover:no-underline text-primary-black font-bold uppercase tracking-wide hover:text-accent-yellow transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-primary-black/70 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-primary-black uppercase">
            Punya pertanyaan lain?
          </h4>
          <p className="md:text-md text-primary-black/70 mb-8">
            Hubungi kami melalui email atau telepon untuk mendiskusikan kebutuhan
            proyek Anda.
          </p>
          <ElevateButton
            variant="accent"
            size="lg"
          >
            Hubungi Kami
          </ElevateButton>
        </div>
      </div>
    </section>
  );
}
