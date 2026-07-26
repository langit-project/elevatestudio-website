import { Camera, Video, Palette, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Visual Content Production",
    description:
      "Produksi fotografi, videografi, dan aset digital berkualitas tinggi dengan eksekusi profesional.",
    icon: Camera,
  },
  {
    title: "Event Documentation",
    description:
      "Dokumentasi acara yang komprehensif untuk menangkap setiap momen penting dengan standar kualitas tinggi.",
    icon: Video,
  },
  {
    title: "Motion & Visual Design",
    description:
      "Pengembangan aset visual yang dinamis mulai dari motion graphics hingga desain identitas visual yang terarah.",
    icon: Palette,
  },
  {
    title: "Micro Event Execution",
    description:
      "Dukungan teknis dan manajemen alur untuk acara skala kecil hingga menengah seperti seminar, workshop, dan gathering.",
    icon: Users,
  },
];
