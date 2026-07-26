"use client";

import { ElevateButton } from "@/components/shared/ElevateButton";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function Capabilities() {
  return (
    <motion.section
      id="services"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-black scroll-mt-18"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-12 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-span-7">
            <SectionHeader
              label="Services"
              title='What we <span class="text-accent-yellow">do?</span>'
              labelClassName="text-primary-white"
              titleClassName="text-primary-white"
              descriptionClassName="text-primary-white/80"
            />
          </div>
          <div className="col-span-5 content-end pb-10">
            <p className="md:text-md text-primary-white/80 max-w-xl">
              Kami menggabungkan ide kreatif, manajemen produksi, dan eksekusi
              teknis untuk menghasilkan karya visual yang konsisten dan
              profesional.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                dark
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 flex flex-wrap items-center gap-6 md:mt-18 lg:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ElevateButton
            asChild
            variant="accent"
            className="hover:shadow-accent-yellow/20"
          >
            <a href="#contact">Mulai Proyek Anda</a>
          </ElevateButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
