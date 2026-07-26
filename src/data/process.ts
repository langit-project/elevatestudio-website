import { FileText, Layout, Scissors, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Briefing & Proposal",
    description:
      "Kami mulai dengan memahami visi, audiens, dan tujuan Anda untuk membangun fondasi yang kokoh.",
    icon: FileText,
  },
  {
    title: "Pre-Production",
    description:
      "Eksplorasi kreatif dan perencanaan produksi yang terstruktur untuk memastikan setiap detail terjaga.",
    icon: Layout,
  },
  {
    title: "Production & Editing",
    description:
      "Eksekusi teknis dan proses editing yang teliti untuk menghasilkan karya visual yang bercerita.",
    icon: Scissors,
  },
  {
    title: "Final Delivery",
    description:
      "Penyempurnaan akhir dan penyerahan karya, memastikan hasil produksi siap digunakan dengan dampak maksimal.",
    icon: CheckCircle,
  },
];
