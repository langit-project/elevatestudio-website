"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function PortfolioList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/portfolio?category=${category}`);
  };

  return (
    <section id="portfolio" className="px-[5%] py-16 md:py-24 lg:py-28 bg-accent-yellow scroll-mt-18">
      <div className="container mx-auto">
        <div className="pb-16">
          <SectionHeader
            label="Portfolio"
            title=""
            highlightClassName="bg-primary-white/60"
          />
        </div>
        <div>
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCategoryClick(item.category)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              className="relative flex items-center justify-start border-b border-primary-black/10 py-5 transition-all duration-500 cursor-pointer group md:py-6"
            >
              <motion.p
                className="mr-6 whitespace-nowrap text-lg font-bold md:mr-8 md:text-xl text-primary-black"
                animate={{
                  x: hoveredIndex === index ? 10 : 0,
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                0{index + 1}
              </motion.p>
              <motion.h3
                className="text-4xl font-bold md:text-7xl lg:text-8xl uppercase text-primary-black"
                animate={{
                  x: hoveredIndex === index ? 10 : 0,
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item.title}
              </motion.h3>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              className="pointer-events-none fixed z-10 hidden lg:flex items-center justify-center"
              style={{ left: "55%", top: "50%" }}
              initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                className="w-[360px] aspect-[4/5] object-cover rounded-lg shadow-2xl"
                src={`https://d22po4pjz3o32e.cloudfront.net/placeholder-image-${hoveredIndex + 1}.svg`}
                alt={portfolioItems[hoveredIndex].title}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
