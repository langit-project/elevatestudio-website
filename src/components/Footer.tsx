"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { navLinks } from "@/data/navigation";
import { socialLinks } from "@/data/contact";
import { NavAction } from "@/components/shared/NavAction";

const footerNavLinks = [...navLinks, { label: "Contact", href: "/#contact" }];

const socialIconMap: Record<string, IconType> = {
  Facebook: BiLogoFacebookCircle,
  Instagram: BiLogoInstagram,
  X: FaXTwitter,
  LinkedIn: BiLogoLinkedinSquare,
  YouTube: BiLogoYoutube,
};

export function Footer() {
  return (
    <footer
      id="relume"
      className="px-[5%] py-12 md:py-18 lg:py-20 bg-accent-yellow"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href="/" className="lg:justify-self-start cursor-pointer">
            <img
              src="/logo/LOGO_ELEVATE - Black.png"
              alt="Elevate Studios"
              className="h-6 md:h-7 w-auto"
            />
          </a>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            {footerNavLinks.map((item) => (
              <li key={item.label} className="font-semibold">
                <NavAction variant="footer" href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialLinks.map((social) => (
              <NavAction key={social.name} variant="social" href={social.href} icon={socialIconMap[social.name]} label={social.name} />
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-dark-accent/10" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-xs md:grid-flow-col md:gap-x-6 md:gap-y-0 text-dark-accent/70">
            <p className="mt-8 md:mt-0">© 2026 elevate. All rights reserved.</p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
