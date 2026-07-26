# Tech Stack

## Elevate Studios — Website

---

## 1. Overview

Dokumen ini menjelaskan teknologi yang digunakan dalam pengembangan website Elevate Studios, beserta alasan pemilihan masing-masing.

---

## 2. Pilihan Teknologi

| Kategori | Teknologi | Versi | Keterangan |
| --- | --- | --- | --- |
| Framework | React | 18 | UI library utama |
| Bahasa | TypeScript | — | Type-safe JavaScript |
| Build Tool | Vite | 6 | Dev server & bundler |
| Styling | Tailwind CSS | v4 | Utility-first CSS framework |
| UI Component | shadcn/ui | radix-vega | Komponen dasar (button, accordion, dll) |
| Animation | Framer Motion | 11 | Animasi scroll, parallax, transitions |
| Routing | React Router | v6 | Client-side routing |
| Icons | Lucide React | — | Icon library utama |
| Icons (opsional) | React Icons | — | Icon tambahan (sosial media, brand) |
| Font | Inter | Variable | Font utama (via fontsource) |
| Utility | class-variance-authority | 0.7 | Variasi komponen (shadcn) |
| Utility | clsx | 2.1 | Conditional class names |
| Utility | tailwind-merge | 2.6 | Merge Tailwind classes tanpa konflik |

---

## 3. Alasan Pemilihan

### React 18
- UI library paling mature dan banyak digunakan
- Ekosistem komponen yang luas
- Kompatibilitas dengan shadcn/ui dan Framer Motion

### TypeScript
- Type checking di compile-time, mengurangi bug runtime
- IDE support lebih baik (autocomplete, refactoring)
- Memudahkan maintenance jangka panjang

### Vite 6
- Dev server yang sangat cepat (native ESM)
- Build time lebih singkat dibanding Webpack
- Konfigurasi minimal untuk proyek React

### Tailwind CSS v4
- Utility-first approach mempercepat development
- Konsisten dengan design system yang sudah ada
- CSS variables untuk theme tokens

### shadcn/ui (radix-vega)
- Komponen accessible berbasis Radix UI
- Bisa dikustomisasi sepenuhnya (bukan component library yang locked)
- Well-documented dan populer di ekosistem React

### Framer Motion
- Animasi declarative yang mudah diimplementasikan
- Scroll-triggered animations built-in
- Performa baik dengan `whileInView` pattern

### React Router v6
- Standard routing untuk React SPA
- Nested routes dan dynamic params
- Lightweight dan fleksibel

---

## 4. Requirement

| Komponen | Versi Minimum | Keterangan |
| --- | --- | --- |
| Node.js | 18+ | Untuk menjalankan Vite dan dependencies |
| npm | 9+ | Package manager |

---

## 5. Setup

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

---

## 6. Deployment

| Platform | Metode | Keterangan |
| --- | --- | --- |
| Vercel | Auto-deploy dari Git | Connect repository ke Vercel, auto-deploy setiap push ke main |

### Konfigurasi Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

---

## 7. SEO Strategy

Karena website ini menggunakan CSR (Client-Side Rendering), SEO perlu penanganan khusus:

| Strategi | Keterangan |
| --- | --- |
| Meta tags | Title, description, Open Graph di `index.html` |
| React Helmet | Manage `<head>` per halaman |
| Sitemap.xml | Daftar halaman untuk search engine |
| Robots.txt | Panduan crawler |
| Structured Data | JSON-LD untuk rich snippets |
| Alt text | Semua gambar harus memiliki alt text |
| Semantic HTML | Gunakan `<section>`, `<nav>`, `<main>`, `<article>` |

> **Catatan:** Jika SEO menjadi prioritas utama di masa depan (misal blog), pertimbangkan migrasi ke Next.js untuk SSR/SSG.
