import { Mail, Phone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  isLink: boolean;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@elevatestudios.id",
    href: "mailto:admin@elevatestudios.id",
    isLink: true,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 859-2740-0808",
    href: "tel:+6285927400808",
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Studio",
    value:
      "Komplek Guruminda, Jl. Purba Kencana No.28 Blok A, Cisaranten Kulon, Kec. Arcamanik, Kota Bandung, Jawa Barat 40273",
    href: "https://maps.app.goo.gl/jD7M14p66tvjPUiw5",
    isLink: true,
  },
];

export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];
