# Design System

## Elevate Studios

---

## 1. Brand Identity

### Logo
- Gunakan logo Elevate dalam format PNG (`LOGO_ELEVATE - Black.png`)
- Logo hanya boleh menggunakan **primary-black** atau **primary-white**
- Jangan gunakan warna accent pada logo
- Minimum clear space = tinggi huruf "E"
- Logo tidak boleh diputar, distorsi, atau diubah proporsinya

### Tagline
- "Creative Visual Production Studio"

### Filosofi Visual
- Dominasi **hitam dan putih** untuk menciptakan kesan modern, bersih, dan profesional
- **Accent kuning** digunakan secara terbatas untuk menarik perhatian pada elemen penting
- Keseluruhan desain harus mencerminkan kualitas produksi visual yang menjadi core bisnis Elevate

---

## 2. Color System

### 2.1 Color Tokens

| Token | Hex | CSS Variable | Tailwind Class | Penggunaan |
| --- | --- | --- | --- | --- |
| Primary Black | `#16140a` | `--color-primary-black` | `text-primary-black` `bg-primary-black` | Logo, teks utama, background gelap, elemen layout |
| Primary White | `#FFFFFF` | `--color-primary-white` | `text-primary-white` `bg-primary-white` | Background utama, negative space, layout terang |
| Accent Yellow | `#FFCE08` | `--color-accent-yellow` | `text-accent-yellow` `bg-accent-yellow` | Highlight, CTA, underline, pointer, accent kecil |
| Dark Accent | `#54351b` | `--color-dark-accent` | `text-dark-accent` `bg-dark-accent` | Accent tersier, teks sekunder di layout terang |
| Destructive | `#B91C1C` | `--color-destructive` | `text-destructive` `bg-destructive` | Error, peringatan, aksi berbahaya |

### 2.2 Mapping ke Shadcn/UI Tokens

| Shadcn Token | Mapping ke Elevate |
| --- | --- |
| `background` | `--color-primary-white` |
| `foreground` | `--color-primary-black` |
| `primary` | `--color-primary-black` |
| `primary-foreground` | `--color-primary-white` |
| `secondary` | `--color-accent-yellow` |
| `secondary-foreground` | `--color-primary-black` |
| `accent` | `--color-accent-yellow` |
| `accent-foreground` | `--color-primary-black` |
| `destructive` | `#B91C1C` |
| `destructive-foreground` | `#FFFFFF` |
| `muted` | `primary-black @ 8% opacity` |
| `muted-foreground` | `primary-black @ 55% opacity` |
| `card` | `--color-primary-white` |
| `card-foreground` | `--color-primary-black` |
| `popover` | `--color-primary-white` |
| `popover-foreground` | `--color-primary-black` |
| `border` | `primary-black @ 10% opacity` |
| `input` | `primary-black @ 10% opacity` |
| `ring` | `--color-primary-black` |

### 2.3 Usage Ratios

| Warna | Rasio Penggunaan | Keterangan |
| --- | --- | --- |
| Primary Black + White | ~90% | Core brand identity, mendominasi seluruh halaman |
| Accent Yellow | ~10% | Hanya untuk elemen kecil: highlight, CTA, pointer |
| Dark Accent | Opsional | Nuance di layout gelap, secondary emphasis |

### 2.4 Contrast Rules

| Kombinasi | Kontras | Status WCAG |
| --- | --- | --- |
| Primary Black on White | 17.4:1 | AAA |
| Primary White on Black | 17.4:1 | AAA |
| Accent Yellow on Black | 10.3:1 | AAA |
| Accent Yellow on White | 1.4:1 | Tidak memenuhi — hindari |
| Dark Accent on White | 8.2:1 | AAA |

> **Catatan:** Accent yellow tidak boleh digunakan sebagai teks di atas background putih karena kontras yang rendah.

### 2.5 Aturan Kontras Per Background

Setiap komponen harus mengikuti aturan kontras berdasarkan background-nya:

#### Background Light (Primary White)
| Elemen | Warna Teks | Catatan |
| --- | --- | --- |
| Heading utama | `text-primary-black` | Selalu full opacity |
| Body text | `text-primary-black/70` | Deskripsi, paragraf |
| Label / caption | `text-primary-black/55` | Label kecil, metadata, helper |
| Accent highlight | `text-dark-accent` atau `text-accent-yellow` | Hanya untuk kata/frasa tertentu, bukan seluruh teks |

#### Background Dark (Primary Black)
| Elemen | Warna Teks | Catatan |
| --- | --- | --- |
| Heading utama | `text-primary-white` | Selalu full opacity |
| Body text | `text-primary-white/80` | Deskripsi, paragraf |
| Label / caption | `text-primary-white/70` | Label kecil, metadata |
| Accent highlight | `text-accent-yellow` | Full brightness, menonjol di atas gelap |

#### Background Accent (Accent Yellow)
| Elemen | Warna Teks | Catatan |
| --- | --- | --- |
| Heading utama | `text-primary-black` | Selalu full opacity |
| Body text | `text-primary-black/80` | Deskripsi, paragraf |
| Label / caption | `text-primary-black/70` | Label kecil, metadata |
| Hover effect | **Transform** (scale, translate) | Hindari perubahan warna, gunakan transform untuk hover |

> **Aturan penting:** Pada background accent yellow, JANGAN gunakan perubahan warna untuk hover. Gunakan transform (`scale`, `translate-y`, `translate-x`) atau shadow untuk efek interaktif. Ini menjaga kontras tetap terjaga.

### 2.6 Gray Text Scale

| Token | Opacity | Penggunaan | Contoh |
| --- | --- | --- | --- |
| Full | 100% | Heading utama, teks penting | `text-primary-black` |
| High | 80% | Body text di dark bg, secondary info | `text-primary-white/80` |
| Medium | 70% | Body text di light bg, deskripsi | `text-primary-black/70` |
| Low | 55% | Label, caption, metadata | `text-primary-black/55` |

> **Batas minimum:** Jangan gunakan opacity di bawah 55% untuk teks. Nilai yang lebih rendah dari 55% sulit dibaca dan tidak memenuhi standar accessibility.

---

## 3. Typography

### 3.1 Font Families

| Token | Font Family | Berat | Penggunaan | Status |
| --- | --- | --- | --- | --- |
| `--font-logo` | League Spartan Variable | Bold / Regular | Logotype, heading utama | ✅ Installed |
| `--font-heading` | League Spartan Variable | Bold / Medium | H1, H2, H3 | ✅ Installed |
| `--font-body` | Quicksand Variable | Regular / Medium | Body text, paragraf, caption | ✅ Installed |

> **Instalasi:** Menggunakan `@fontsource-variable/league-spartan` dan `@fontsource-variable/quicksand` via npm.

### 3.2 Type Scale

| Level | Font | Ukuran (px) | Berat | Line Height | Penggunaan |
| --- | --- | --- | --- | --- | --- |
| H1 | League Spartan | 48–60 | Bold | 1.1 | Heading utama section |
| H2 | League Spartan | 32–40 | Bold | 1.2 | Sub heading |
| H3 | League Spartan | 24–28 | Medium | 1.3 | Minor heading |
| Body | Quicksand | 16–18 | Regular | 1.6 | Paragraf, konten umum |
| Caption | Quicksand | 12–14 | Medium | 1.4 | Catatan kecil, metadata, helper text |
| Small | Quicksand | 10–12 | Regular | 1.4 | Label, badge |

### 3.3 Text Hierarchy Rules

- **Heading** selalu menggunakan League Spartan (Bold/Medium)
- **Body** selalu menggunakan Quicksand (Regular/Medium)
- Pastikan kontras tinggi antara teks dan background
- Gunakan **font-heading** (class Tailwind) untuk semua elemen heading
- Gunakan **font-body** (class Tailwind) untuk semua elemen body

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Tailwind)

| Token | Nilai | Penggunaan |
| --- | --- | --- |
| `px-0` | 0px | Tidak ada padding |
| `px-1` / `py-1` | 4px | Spacing ultra-rapat |
| `px-2` / `py-2` | 8px | Spacing rapat (icon, badge) |
| `px-3` / `py-3` | 12px | Padding internal komponen kecil |
| `px-4` / `py-4` | 16px | Padding default komponen |
| `px-6` / `py-6` | 24px | Padding komponen sedang |
| `px-8` / `py-8` | 32px | Padding section kecil |
| `px-12` / `py-12` | 48px | Padding section menengah |
| `px-16` / `py-16` | 64px | Padding section besar |

### 4.2 Section Spacing

| Context | Padding Vertikal | Keterangan |
| --- | --- | --- |
| Hero | `py-16 md:py-24 lg:py-28` | Section pembuka, lebih besar |
| Content sections | `py-16 md:py-24 lg:py-28` | Section standar |
| Compact sections | `py-12 md:py-16` | Section ringkas |

### 4.3 Container Width

| Breakpoint | Max Width | Padding Horizontal |
| --- | --- | --- |
| Mobile (< 640px) | 100% | `px-[5%]` |
| Tablet (640px–1024px) | 100% | `px-[5%]` |
| Desktop (> 1024px) | 1280px | `px-[5%]` |

### 4.4 Border Radius

| Token | Nilai | Tailwind | Penggunaan |
| --- | --- | --- | --- |
| `--radius-sm` | 4px | `rounded-sm` | Element kecil |
| `--radius-md` | 6px | `rounded-md` | Button, card, input |
| `--radius-lg` | 8px | `rounded-lg` | Card besar, modal |

---

## 5. Components

### 5.1 Komponen Dasar (shadcn/ui)

| Komponen | File | Variants | Keterangan |
| --- | --- | --- | --- |
| Button | `ui/button.tsx` | default, secondary, outline, ghost, destructive, link | CTA, tombol aksi |
| Accordion | `ui/accordion.tsx` | — | Expandable content (FAQ) |
| Badge | `ui/badge.tsx` | default, secondary, outline, ghost, destructive, link | Label, tag, status |
| Card | `ui/card.tsx` | — | Container konten (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) |
| Separator | `ui/separator.tsx` | horizontal, vertical | Garis pemisah |
| Input | `ui/input.tsx` | — | Form input field |
| Tabs | `ui/tabs.tsx` | default, line | Tab navigation (Tabs, TabsList, TabsTrigger, TabsContent) |
| Dialog | `ui/dialog.tsx` | — | Modal overlay (Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger) |
| Tooltip | `ui/tooltip.tsx` | — | Hover info (Tooltip, TooltipTrigger, TooltipContent, TooltipProvider) |

### 5.2 Shared Components

Komponen reusable yang digunakan di beberapa section:

| Komponen | File | Props | Keterangan |
| --- | --- | --- | --- |
| SectionHeader | `shared/SectionHeader.tsx` | `label`, `title` (HTML), `description?`, `accent?` (yellow/dark/white), `align?` (left/center) | Header standar untuk setiap section |
| StatCard | `shared/StatCard.tsx` | `value`, `label` | Kartu statistik dengan hover effect |
| ServiceCard | `shared/ServiceCard.tsx` | `icon`, `title`, `description`, `dark?` | Kartu layanan, mendukung light/dark mode |

### 5.3 Custom Utility Classes

| Class | Deklarasi | Penggunaan |
| --- | --- | --- |
| `.btn-primary` | `bg-primary-black text-primary-white px-6 py-3 rounded-md font-heading font-bold transition-all hover:opacity-90 cursor-pointer` | CTA utama, tombol dengan background gelap |
| `.btn-accent` | `bg-accent-yellow text-primary-black px-6 py-3 rounded-md font-heading font-bold transition-all hover:opacity-90 cursor-pointer` | CTA sekunder, tombol dengan background kuning |

### 5.4 Data Files

Data dipisahkan dari komponen untuk reusability:

| File | Isi |
| --- | --- |
| `data/navigation.ts` | Nav links (desktop + mobile) |
| `data/services.ts` | 4 layanan + icon mapping |
| `data/packages.ts` | 4 paket pricing + features |
| `data/process.ts` | 4 step workflow |
| `data/faq.ts` | 5 FAQ items |
| `data/portfolio.ts` | Portfolio items + categories |
| `data/contact.ts` | Contact info + social links |
| `data/stats.ts` | Statistics (50+ Projects, 20+ Clients) |

### 5.5 Icon System

| Library | Kegunaan | Contoh |
| --- | --- | --- |
| Lucide React | Icon umum, UI icons | `<Camera />`, `<Video />`, `<Check />` |
| React Icons | Icon sosial media, brand | `<BiLogoFacebookCircle />`, `<FaXTwitter />` |

### 5.6 Komponen Section

| Komponen | File | Fungsi |
| --- | --- | --- |
| Hero | `Hero.tsx` | Section pembuka dengan parallax scroll |
| Navbar | `Navbar.tsx` | Navigasi fixed atas dengan logo PNG |
| About | `About.tsx` | Deskripsi profil perusahaan + statistik |
| Capabilities | `Capabilities.tsx` | 4 kartu layanan (dark bg) |
| Process | `Process.tsx` | Alur kerja 4 step |
| PortfolioList | `PortfolioList.tsx` | Galeri portofolio interaktif |
| Packages | `Packages.tsx` | 4 paket pricing |
| Faq | `Faq.tsx` | Pertanyaan umum (accordion) |
| Contact | `Contact.tsx` | Info kontak + Google Maps |
| CallToAction | `CallToAction.tsx` | CTA section (yellow bg) |
| BrandLogos | `BrandLogos.tsx` | Logo kolaborator (infinite scroll) |
| Footer | `Footer.tsx` | Footer dengan logo PNG + nav + social |

---

## 6. Animation & Motion

### 6.1 Library
- **Framer Motion** v11 — semua animasi website

### 6.2 Patterns yang Digunakan

| Pattern | Kode | Keterangan |
| --- | --- | --- |
| Fade In on Scroll | `initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}` | Section muncul saat scroll |
| Slide Up on Scroll | `initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}` | Elemen naik dari bawah saat scroll |
| Parallax Scroll | `useScroll()` + `useTransform()` | Efek kedalaman pada hero section |
| Spring Animation | `useSpring(scrollYProgress, { bounce: 0 })` | Scroll progress yang smooth |

### 6.3 Timing Guidelines

| Jenis Animasi | Duration | Easing |
| --- | --- | --- |
| Section fade-in | 0.6–0.8s | Default ease |
| Element slide-up | 0.6s + delay 0.2s | Default ease |
| Parallax scroll | Continuous | Spring (no bounce) |
| Hover transition | 0.2–0.3s | Default ease |

### 6.4 Best Practices
- Gunakan `viewport: { once: true }` agar animasi hanya sekali
- Jangan gunakan animasi yang mengganggu navigasi atau membaca konten
- Pastikan animasi tidak menyebabkan Cumulative Layout Shift (CLS)
- Sediakan preferensi `prefers-reduced-motion` untuk accessibility

---

## 7. Shadows & Elevation

| Level | Nilai | Tailwind | Penggunaan |
| --- | --- | --- | --- |
| Level 0 | `none` | `shadow-none` | Background, flat element |
| Level 1 | `0 1px 2px rgba(0,0,0,0.05)` | `shadow-sm` | Card, input |
| Level 2 | `0 4px 6px rgba(0,0,0,0.1)` | `shadow-md` | Dropdown, tooltip |
| Level 3 | `0 10px 15px rgba(0,0,0,0.1)` | `shadow-lg` | Modal, popup |

> **Catatan:** Elevate menggunakan pendekatan flat/minimal shadows. Prioritas pada warna kontras (hitam-putih) daripada elevation through shadows.

---

## 8. Responsive Breakpoints

| Nama | Tailwind Prefix | Min Width | Keterangan |
| --- | --- | --- | --- |
| Default | `(none)` | 0px | Mobile-first, semua style dasar |
| `sm` | `sm:` | 640px | Mobile landscape / small tablet |
| `md` | `md:` | 768px | Tablet portrait |
| `lg` | `lg:` | 1024px | Tablet landscape / desktop kecil |
| `xl` | `xl:` | 1280px | Desktop standard |
| `2xl` | `2xl:` | 1536px | Desktop besar |

### Responsive Behavior

| Elemen | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Navbar | Hamburger menu | Hamburger menu | Full navigation |
| Grid layout | 1 kolom | 2 kolom | 3–4 kolom |
| Hero text | `text-5xl` | `text-7xl` | `text-8xl` |
| Section padding | `py-16` | `py-24` | `py-28` |
| Horizontal padding | `px-[5%]` | `px-[5%]` | `px-[5%]` |

---

## 9. Accessibility

### 9.1 Requirements
- Semua gambar harus memiliki `alt text` yang deskriptif
- Formulir harus memiliki `label` yang terhubung ke input
- Color contrast minimum WCAG AA (4.5:1 untuk teks normal)
- Semua interactive elements harus bisa diakses dengan keyboard
- Gunakan semantic HTML (`<section>`, `<nav>`, `<main>`, `<article>`)
- ARIA labels untuk elemen non-semantic

### 9.2 Focus States
- Gunakan `ring` dari shadcn/ui untuk focus indicator
- Pastikan focus visible pada semua interactive elements

### 9.3 Reduced Motion
- Framer Motion mendukung `prefers-reduced-motion` secara otomatis
- Untuk custom animations, tambahkan fallback

### 9.4 Color Independence
- Jangan sampaikan informasi hanya melalui warna
- Gunakan ikon, teks, atau pola sebagai tambahan

---

## 10. File References

| File | Fungsi |
| --- | --- |
| `src/index.css` | Definisi color tokens, typography, custom utility classes |
| `components.json` | Konfigurasi shadcn/ui (style: radix-vega, CSS variables) |
| `src/lib/utils.ts` | Utility function `cn()` untuk merge class names |
| `src/data/*` | Data files untuk semua komponen section |
| `src/components/shared/*` | Shared reusable components (SectionHeader, StatCard, ServiceCard) |
| `src/components/ui/*` | shadcn/ui primitive components |
| `docs/reference/Profil Singkat*.md` | Brand guidelines asli dari Elevate |
