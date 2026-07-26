"use client";

import React, { useState, useMemo } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { NavAction } from "@/components/shared/NavAction";
import { Link } from "react-router-dom";
import { navLinks, mobileNavLinks } from "@/data/navigation";

const useNavbarState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const dropdownHandlers = useMemo(
    () => ({
      toggle: () => setIsDropdownOpen((prev) => !prev),
      openOnDesktop: () => !isMobile && setIsDropdownOpen(true),
      closeOnDesktop: () => !isMobile && setIsDropdownOpen(false),
    }),
    [isMobile],
  );

  const animations = {
    mobileMenu: isMobileMenuOpen ? "open" : "close",
    mobileMenuSpan: isMobileMenuOpen ? ["open", "rotatePhase"] : "closed",
    dropdownMenu: isDropdownOpen ? "open" : "close",
    dropdownIcon: isDropdownOpen ? "rotated" : "initial",
  };

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    dropdownHandlers,
    animations,
  };
};

export const Navbar = () => {
  const { toggleMobileMenu, animations } = useNavbarState();

  const menuLineStyles = "my-[3px] h-0.5 w-6 bg-primary-black";

  return (
    <nav
      id="relume"
      className="sticky top-0 z-100 flex w-full items-center justify-between border-b border-border-primary bg-primary-white lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex w-full items-center justify-between">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo/LOGO_ELEVATE - Black.png"
                alt="Elevate Studios"
                className="h-6 md:h-7 w-auto"
              />
            </Link>
            <button
              aria-label="Toggle menu"
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={toggleMobileMenu}
            >
              <motion.span
                className={menuLineStyles}
                animate={animations.mobileMenuSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className={menuLineStyles}
                animate={animations.mobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className={menuLineStyles}
                animate={animations.mobileMenuSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-4">
              {navLinks.map((item) => (
                <NavAction key={item.label} href={item.href} label={item.label} />
              ))}
            </ul>
            <ElevateButton
              asChild
              variant="primary"
              size="xs"
              className="shadow-none"
            >
              <a href="#contact" className="relative z-10">
                Contact
              </a>
            </ElevateButton>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        className="absolute left-0 top-full z-99 flex w-full flex-col bg-primary-white px-[5%] pb-8 pt-4 lg:hidden shadow-xl border-t border-border"
        initial="close"
        animate={animations.mobileMenu}
        variants={{
          open: { height: "auto", opacity: 1, visibility: "visible" },
          close: { height: 0, opacity: 0, visibility: "hidden" },
        }}
      >
        <ul className="flex flex-col gap-6 font-heading font-medium uppercase text-sm tracking-[0.2em] text-primary-black">
          {mobileNavLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleMobileMenu}
                className="flex items-center justify-between group py-2 border-b border-border/50"
              >
                <span className="transition-all duration-300 group-hover:font-bold group-focus-visible:font-bold">
                  {item.label}
                </span>
                <div className="w-0 h-2 bg-accent-yellow transition-all duration-300 group-hover:w-12 group-focus-visible:w-12"></div>
              </a>
            </li>
          ))}
        </ul>
        <ElevateButton
          asChild
          variant="primary"
          size="full"
          className="mt-6"
        >
          <a href="#contact" onClick={toggleMobileMenu}>
            Contact
          </a>
        </ElevateButton>
      </motion.div>
    </nav>
  );
};
