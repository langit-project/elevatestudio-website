# Product Requirements Document (PRD)

## Elevate Studios — Website

---

## 1. Document Information

| Field | Value |
| --- | --- |
| Nama Proyek | Elevate Studios Website |
| Versi Dokumen | 1.0 |
| Tanggal | 25 Juli 2026 |
| Status | Draft |
| Tipe Aplikasi | Single Page Application (SPA) |
| Tech Stack | Lihat [docs/TECH-STACK.md](TECH-STACK.md) |
| Deployment | Vercel |

---

## 2. Overview

Elevate Studios adalah creative visual production studio yang berfokus pada produksi visual, pengembangan konten, dan kolaborasi kreatif lintas disiplin. Website ini dibangun sebagai halaman presentasi digital untuk menampilkan layanan, portofolio, dan profil perusahaan.

Website ini merupakan satu-satunya kehadiran digital resmi Elevate Studios, sehingga harus mampu merepresentasikan kualitas visual dan profesionalisme studio secara langsung kepada calon klien dan mitra.

---

## 3. Business Objective

- Membangun brand presence digital yang kuat untuk Elevate Studios
- Menampilkan portofolio dan hasil kerja secara visual yang menarik
- Menjadi titik kontak utama bagi calon klien yang ingin mengetahui layanan Elevate
- Meningkatkan konversi dari pengunjung menjadi leads melalui formulir kontak
- Menyampaikan nilai dan pendekatan kerja Elevate secara jelas

---

## 4. Scope

### 4.1 Requirement

#### Halaman Utama (`/`)

| Section | Deskripsi |
| --- | --- |
| Hero | Headline, sub-headline, CTA utama, visual parallax |
| About / Profile | Deskripsi singkat Elevate dan pendekatan kerja |
| Capabilities / Services | 4 layanan utama: Video Production, Photography, Motion Graphic, Visual Design |
| Process | Alur kerja kolaboratif (Discovery → Planning → Production → Delivery) |
| Portfolio List | Galeri portofolio ringkas dengan link ke halaman detail |
| Packages / Pricing | 3 paket layanan: Visual Production, Event Documentation, Motion & Visual Design |
| FAQ | Pertanyaan umum seputar layanan dan cara kerja |
| Call to Action | CTA menuju kontak |
| Contact | Formulir kontak + informasi kontak |
| Brand Logos | Logo kolaborator / klien |

#### Halaman Portofolio (`/portfolio`)

| Elemen | Deskripsi |
| --- | --- |
| Galeri | Grid galeri portofolio dengan filter kategori |
| Navigasi | Link ke detail setiap proyek |

#### Halaman Detail Portofolio (`/portfolio/:id`)

| Elemen | Deskripsi |
| --- | --- |
| Detail Proyek | Judul, deskripsi, galeri gambar/video, kategori |
| Navigasi | Kembali ke galeri |

#### Komponen Lintas Halaman

| Komponen | Deskripsi |
| --- | --- |
| Navbar | Navigasi atas dengan logo, link section, dan CTA |
| Footer | Informasi kontak, link sosial media, copyright |

### 4.2 Business Rules

| No | Aturan |
| --- | --- |
| BR-01 | Website harus responsive di semua ukuran layar (mobile, tablet, desktop) |
| BR-02 | Navigasi harus smooth scroll pada section yang sama (halaman beranda) |
| BR-03 | Setiap proyek portofolio harus bisa diakses melalui URL unik (`/portfolio/:id`) |
| BR-04 | Formulir kontak wajib memvalidasi input sebelum dikirim |
| BR-05 | Semua gambar portofolio harus memiliki alt text |
| BR-06 | Halaman harus load dalam waktu < 3 detik pada koneksi normal |
| BR-07 | CTA utama harus terlihat jelas dan mengarah ke formulir kontak atau WhatsApp |

---

## 5. Functional Changes

| No | Fitur | Tipe | Keterangan |
| --- | --- | --- | --- |
| FC-01 | Hero Section | Baru | Parallax scroll animation dengan Framer Motion |
| FC-02 | About Section | Baru | Deskripsi profil dan pendekatan kerja |
| FC-03 | Capabilities Section | Baru | 4 kartu layanan dengan icon dan deskripsi |
| FC-04 | Process Section | Baru | Timeline/alur kerja kolaboratif |
| FC-05 | Portfolio Gallery | Baru | Grid galeri dengan navigasi ke detail |
| FC-06 | Portfolio Detail | Baru | Halaman detail proyek individual |
| FC-07 | Packages Section | Baru | 3 paket pricing dengan fitur masing-masing |
| FC-08 | FAQ Section | Baru | Accordion pertanyaan umum |
| FC-09 | Contact Form | Baru | Formulir kontak dengan validasi |
| FC-10 | Call to Action | Baru | CTA section sebelum footer |
| FC-11 | Navbar | Baru | Fixed navigation dengan responsive mobile menu |
| FC-12 | Footer | Baru | Footer dengan informasi kontak dan sosial media |

---

## 6. Data Changes

| No | Data | Sumber | Keterangan |
| --- | --- | --- | --- |
| DC-01 | Data portofolio | Hardcoded di komponen | Daftar proyek portofolio (judul, gambar, kategori, deskripsi) |
| DC-02 | Data packages | Hardcoded di komponen | Detail paket layanan dan harga |
| DC-03 | Data FAQ | Hardcoded di komponen | Daftar pertanyaan dan jawaban |
| DC-04 | Data kontak | Formulir | Input dari pengguna (nama, email, pesan) |

> **Catatan:** Untuk fase ini, semua data masih hardcoded. Integrasi CMS atau backend akan dipertimbangkan di fase selanjutnya.

---

## 7. Out of Scope

| No | Fitur | Alasan |
| --- | --- | --- |
| OOS-01 | Backend / API | Tidak diperlukan untuk website presentasi statis |
| OOS-02 | Autentikasi / Login | Tidak ada fitur yang memerlukan autentikasi pengguna |
| OOS-03 | Integrasi CMS | Data masih hardcoded; CMS akan dipertimbangkan di fase berikutnya |
| OOS-04 | Payment gateway | Tidak ada transaksi online |
| OOS-05 | Multi-language | Untuk fase ini website hanya dalam Bahasa Indonesia |
| OOS-06 | Blog / Artikel | Belum masuk scope untuk fase ini |
| OOS-07 | Analytics dashboard | Menggunakan analytics eksternal (Google Analytics, dll) jika diperlukan |
| OOS-08 | Formulir kontak backend | Formulir akan mengarah ke email/WhatsApp, bukan backend |

---

## 8. Acceptance Criteria

### AC-01: Hero Section
- [ ] Headline dan sub-headline terlihat jelas di semua ukuran layar
- [ ] Parallax scroll animation berjalan smooth tanpa lag
- [ ] CTA button berfungsi dan mengarah ke section yang tepat

### AC-02: Navigasi
- [ ] Navbar fixed di atas saat scroll
- [ ] Mobile menu berfungsi dengan benar
- [ ] Smooth scroll ke section saat link diklik
- [ ] Logo dan brand name terlihat jelas

### AC-03: Portofolio
- [ ] Galeri portofolio menampilkan semua proyek
- [ ] Klik pada proyek mengarah ke halaman detail yang benar
- [ ] Halaman detail menampilkan info lengkap proyek
- [ ] Tombol kembali berfungsi ke galeri

### AC-04: Formulir Kontak
- [ ] Semua field wajib divalidasi sebelum submit
- [ ] Pesan error ditampilkan dengan jelas
- [ ] Setelah submit, pengguna mendapat konfirmasi

### AC-05: Responsivitas
- [ ] Layout berubah dengan benar di mobile (< 640px)
- [ ] Layout berubah dengan benar di tablet (640px - 1024px)
- [ ] Layout berubah dengan benar di desktop (> 1024px)
- [ ] Tidak ada horizontal scroll di mobile

### AC-06: Performa
- [ ] First Contentful Paint < 1.5 detik
- [ ] Largest Contentful Paint < 2.5 detik
- [ ] Cumulative Layout Shift < 0.1

### AC-07: SEO
- [ ] Title tag unik dan deskriptif untuk setiap halaman
- [ ] Meta description tersedia untuk setiap halaman
- [ ] Open Graph tags tersedia (title, description, image)
- [ ] Semua gambar memiliki alt text yang deskriptif
- [ ] Struktur heading hierarkis (H1 > H2 > H3)
- [ ] Sitemap.xml tersedia
- [ ] Robots.txt tersedia
- [ ] Structured data (JSON-LD) untuk information organizational

---

## 9. Risks / Notes

| No | Risiko | Dampak | Mitigasi |
| --- | --- | --- | --- |
| R-01 | Gambar portofolio berukuran besar memperlambat load | Performa menurun | Kompresi gambar, gunakan lazy loading |
| R-02 | Font kustom (League Spartan, Quicksand) belum ter-install | Konsistensi visual terganggu | Install font melalui fontsource atau CDN |
| R-03 | Tidak ada backend untuk form kontak | Data kontak hilang | Arahkan ke email/WhatsApp sebagai fallback |
| R-04 | SEO kurang optimal tanpa SSR | Visibilitas mesin pencari rendah | Tambahkan meta tags, structured data |
| R-05 | Dependensi Relume UI belum dimanfaatkan sepenuhnya | Fitur hilang | Evaluasi dan gunakan komponen yang relevan |

### Catatan Tambahan

- Website menggunakan Vite sebagai build tool, sehingga optimasi bundling sudah terjadi secara otomatis
- Semua komponen menggunakan React functional components dengan hooks
- Animasi dibangun menggunakan Framer Motion dengan pendekatan `whileInView` untuk performa
- Color scheme mengikuti brand guidelines Elevate: hitam-putih dengan aksen kuning
