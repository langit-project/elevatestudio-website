export interface FaqItem {
  value: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    value: "item-0",
    question: "Berapa lama waktu pengerjaan proyek?",
    answer:
      "Timeline proyek bervariasi tergantung pada ruang lingkup dan kompleksitas. Kami biasanya bekerja dalam fase-fase terstruktur, mulai dari briefing hingga final delivery. Kami akan menetapkan milestone dan deadline yang jelas selama konsultasi awal.",
  },
  {
    value: "item-1",
    question: "Apakah Elevate menerima proyek di luar Bandung?",
    answer:
      "Ya. Meskipun berbasis di Bandung, kami berkolaborasi dengan klien di berbagai kota di Indonesia. Tim kami menggunakan alat komunikasi modern untuk memastikan koordinasi proyek berjalan lancar tanpa hambatan lokasi.",
  },
  {
    value: "item-2",
    question: "Siapa saja target klien Elevate?",
    answer:
      "Kami bekerja dengan berbagai sektor termasuk korporasi, UMKM, organisasi sosial, hingga komunitas kreatif. Kami membantu brand dan individu yang membutuhkan produksi visual berkualitas tinggi dan terarah.",
  },
  {
    value: "item-3",
    question: "Bagaimana kebijakan mengenai revisi?",
    answer:
      "Revisi adalah bagian dari proses kami. Sesuai standar operasional kami, setiap proyek biasanya mencakup 2 kali putaran revisi setelah draf awal diserahkan. Kami sangat menghargai feedback untuk memastikan hasil akhir sesuai dengan ekspektasi.",
  },
  {
    value: "item-4",
    question: "Apakah Elevate bisa membantu pelaksanaan acara?",
    answer:
      "Tentu. Selain produksi visual, kami memiliki kapabilitas untuk mendukung pelaksanaan acara skala kecil hingga menengah (micro-event) seperti seminar, workshop, dan gathering, terutama dalam hal manajemen alur dan dukungan visual.",
  },
];
