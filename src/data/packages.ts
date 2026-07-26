export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  featured: boolean;
}

export const packages: Package[] = [
  {
    name: "Visual Production",
    price: "4.5M",
    description: "Produksi konten visual profesional untuk brand Anda.",
    features: [
      "Cinematic Brand Video (60s)",
      "15 High-End Photos",
      "Pro Editing & Color Grading",
      "Strategic Storyboarding",
      "Commercial Usage Rights",
    ],
    buttonText: "Start Production",
    featured: false,
  },
  {
    name: "Event Documentation",
    price: "6.0M",
    description: "Dokumentasi lengkap untuk setiap momen berharga acara Anda.",
    features: [
      "Full Day Coverage",
      "Highlight Video (2-3 min)",
      "Same Day Edit Social Clip",
      "Unlimited Curated Photos",
      "Digital Gallery Access",
    ],
    buttonText: "Book Documentation",
    featured: true,
  },
  {
    name: "Motion & Visual Design",
    price: "3.5M",
    description: "Desain visual dan motion graphics yang dinamis.",
    features: [
      "Custom Motion Graphics",
      "Visual Identity Assets",
      "Social Media Templates",
      "2D/3D Animation Elements",
      "Brand Style Guide",
    ],
    buttonText: "Start Designing",
    featured: false,
  },
  {
    name: "Micro Event Execution",
    price: "7.5M",
    description: "Dukungan teknis dan eksekusi untuk acara skala menengah.",
    features: [
      "Technical Alur Management",
      "Visual Support Handling",
      "Basic Sound & Lighting Coordination",
      "On-site Technical Crew",
      "Pre-event Planning",
    ],
    buttonText: "Plan Your Event",
    featured: false,
  },
];
