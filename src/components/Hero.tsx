"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Custom hook to handle scroll animations for the header.
 */
const useHeaderAnimations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const animatedProgress = useSpring(scrollYProgress, { bounce: 0 });

  const yFirst = useTransform(animatedProgress, [0, 1], ["0vh", "-87.5vh"]);
  const ySecond = useTransform(animatedProgress, [0, 1], ["0vh", "-39.6vh"]);

  return { containerRef, yFirst, ySecond };
};

export const Hero = () => {
  const { containerRef, yFirst, ySecond } = useHeaderAnimations();

  return (
    <section
      id="relume"
      ref={containerRef}
      className="relative h-[100vh] px-[5%] md:h-[300vh] bg-primary-white"
    >
      <div className="sticky top-[72px] h-screen overflow-hidden">
        {/* Left Floating Images */}
        <div className="absolute bottom-0 left-0 right-auto top-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: yFirst }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={`left-img-${i}`}
                className={`relative h-[35vw] pt-[120%] sm:h-auto w-[30vw] md:w-[28vw] lg:w-[22vw] ${
                  i === 2 ? "left-[52vw] mt-[-46vw] lg:left-[58vw]" : 
                  i === 3 ? "left-[4vw] mt-[-5vw] md:w-[26vw] lg:w-[20vw]" :
                  i === 4 ? "left-[64vw] mt-[-45vw] md:w-[24vw] lg:w-[18vw]" : ""
                }`}
              >
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="absolute inset-0 size-full object-cover rounded-md"
                  alt={`Relume placeholder image ${i}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Floating Images */}
        <motion.div
          className="absolute bottom-0 left-auto right-0 top-0 z-0"
          style={{ y: ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            {[5, 6].map((i) => (
              <div
                key={`right-img-${i}`}
                className={`relative h-[35vw] pt-[120%] opacity-75 sm:h-auto w-[28vw] md:w-[26vw] lg:w-[20vw]${
                  i === 6 ? "right-[50vw] mt-[-44vw] md:w-[24vw] lg:right-[54vw] lg:w-[18vw]" : ""
                }`}
              >
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="absolute inset-0 size-full object-cover rounded-md"
                  alt={`Relume placeholder image ${i}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="container relative md:max-w-1/2 flex h-full items-center mx-auto pb-24 pt-16 text-center md:pt-24 lg:py-28">
          <div className="z-20 w-full mx-auto">
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl font-heading uppercase text-primary-black leading-[1.1] max-w-5xl mx-auto">
              We elevate brands through visual storytelling
            </h1>
            <p className="md:text-md font-body text-primary-black/80 max-w-2xl mx-auto">
              Elevate adalah studio kreatif yang berfokus pada produksi visual, pengembangan konten, dan kolaborasi kreatif lintas disiplin untuk menghasilkan karya yang relevan dan berkualitas tinggi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:mt-10">
              <ElevateButton asChild variant="accent" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Mulai Proyek</a>
              </ElevateButton>
              <ElevateButton asChild variant="outlineInvert" size="lg" className="w-full sm:w-auto">
                <Link to="/portfolio">Lihat Karya Kami</Link>
              </ElevateButton>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 mt-140 md:mt-[100vh]" />
      </div>
    </section>
  );
};