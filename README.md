# Elevate Studios

**Creative Visual Production Studio**

Elevate adalah studio kreatif yang berfokus pada produksi visual, pengembangan konten, dan kolaborasi kreatif lintas disiplin. Website ini merupakan halaman presentasi dan portofolio resmi dari Elevate Studios.

---

## Tech Stack

| Teknologi | Versi |
| --- | --- |
| React | 18 |
| TypeScript | — |
| Vite | 6 |
| Tailwind CSS | v4 |
| shadcn/ui | radix-vega |
| Framer Motion | 11 |
| React Router | v6 |
| Lucide React | icons |
| React Icons | icons |

> Lihat [Tech Stack](docs/TECH-STACK.md) untuk detail lengkap.

---

## Instalasi & Menjalankan

```bash
# Clone repository
git clone <url-repo>

# Masuk ke direktori project
cd elevate

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Format code
npm run format

# Run tests
npm run test

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

---

## Struktur Project

```
elevate/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/             # Komponen dasar shadcn/ui
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Process.tsx
│   │   ├── PortfolioList.tsx
│   │   ├── Packages.tsx
│   │   ├── Faq.tsx
│   │   ├── Contact.tsx
│   │   ├── CallToAction.tsx
│   │   └── BrandLogos.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   └── PortfolioDetail.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   ├── reference/          # Dokumen referensi bisnis (di-ignore)
│   ├── PRD.md
│   ├── TECH-STACK.md
│   └── DESIGN-SYSTEM.md
├── .gitignore
├── .prettierrc
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Routes

| Path | Halaman |
| --- | --- |
| `/` | Beranda (Home) |
| `/portfolio` | Galeri Portofolio |
| `/portfolio/:id` | Detail Portofolio |

---

## Deployment

Website di-deploy ke **Vercel** langsung dari repository Git.

| Konfigurasi | Nilai |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

---

## Dokumentasi

- [Product Requirements Document (PRD)](docs/PRD.md)
- [Tech Stack](docs/TECH-STACK.md)
- [Design System](docs/DESIGN-SYSTEM.md)
- [Dokumen Referensi Bisnis](docs/reference/)
