"use client";

import React from "react";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { contactInfo } from "@/data/contact";

export function Contact() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-white scroll-mt-18">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-20">
          <SectionHeader
            label="Kontak"
            title="Mari Berkolaborasi"
            labelHighlight
            description="Siap meningkatkan brand Anda? Hubungi kami dan mari diskusikan proyek Anda selanjutnya bersama-sama."
          />
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          <div>
            <div className="grid auto-cols-fr grid-cols-1 gap-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-row">
                  <div className="mr-4">
                    <info.icon className="size-6 text-dark-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl text-dark-accent">
                      {info.label}
                    </h3>
                    {info.isLink ? (
                      <a
                        className="underline cursor-pointer hover:text-accent-yellow transition-colors text-dark-accent"
                        href={info.href}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-accent/80">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ElevateButton variant="accent" size="lg">
                Kirim Pesan Sekarang
              </ElevateButton>
            </div>
          </div>
          <div className="w-full h-[400px] md:h-full min-h-[400px] rounded-md overflow-hidden grayscale transition-all duration-500 border border-dark-accent/10 shadow-lg hover:grayscale-0 focus-within:grayscale-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6714088484553!2d107.68114677587469!3d-6.929851493069941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7f8e8b8c1d1%3A0x4a3a3a3a3a3a3a3a!2sKomplek%20Guruminda!5e0!3m2!1sid!2sid!4v1710680000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
