"use client";
import { motion } from "framer-motion";

export function BrandLogos() {
  return (
    <section id="clients" className="px-[5%] py-12 md:py-16 lg:py-20 bg-primary-white">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold uppercase tracking-widest text-primary-black/80 md:mb-8 md:text-sm">
          Our Clients
        </h2>
        <div className="relative overflow-hidden py-10 group">
          <motion.div
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
          >
            {/* Duplicated for infinite sliding effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <img
                    key={item}
                    src={`https://d22po4pjz3o32e.cloudfront.net/${item % 2 === 0 ? "relume-logo" : "webflow-logo"}.svg`}
                    alt={`Brand Logo ${item}`}
                    className="h-10 md:h-12 w-auto opacity-50 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
                  />
                ))}
              </div>
            ))}
          </motion.div>
          {/* Gradient Overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
