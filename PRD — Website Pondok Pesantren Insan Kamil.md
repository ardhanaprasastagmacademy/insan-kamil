# PRD — Website Pondok Pesantren Insan Kamil

**Versi:** 1.0  |  **Tanggal:** 12 November 2026  |  **Status:** Draft untuk review  |  **Stack:** Astro + HTML, CSS, JavaScript (tanpa database)

## 1. Ringkasan Produk

Website resmi Pondok Pesantren Insan Kamil yang berfungsi sebagai profil lembaga sekaligus etalase unit usaha dan program pemberdayaan: **Pelatihan Lapangan Kerja**, **Peternakan Domba**, **Katering**, dan **Penjualan Bibit Alpukat**. Website dibangun sebagai situs statis dengan Astro agar cepat, murah di-hosting, ramah SEO, dan mudah dirawat. Konversi utama adalah pengunjung menghubungi pesantren lewat WhatsApp untuk mendaftar pelatihan, memesan domba, katering, atau bibit.

## 2. Latar Belakang dan Masalah

- Pesantren memiliki beberapa unit usaha dan program pelatihan, tetapi belum punya satu kanal digital yang menyatukan semuanya.
- Calon peserta pelatihan, pembeli domba, pemesan katering, dan pembeli bibit alpukat sulit menemukan informasi harga, layanan, dan cara memesan.
- Kepercayaan publik perlu dibangun lewat profil lembaga yang jelas, dokumentasi kegiatan, dan kontak yang mudah dihubungi.
- Pencarian lokal (Google, Maps, AI search) belum mengarah ke pesantren karena konten terstruktur belum ada.

## 3. Tujuan dan Indikator Keberhasilan

| Tujuan | Indikator (KPI) | Target 3 bulan setelah rilis |
| --- | --- | --- |
| Membangun kredibilitas lembaga | Halaman Tentang dan Galeri dikunjungi | 40% sesi membuka minimal 2 halaman |
| Menghasilkan lead tiap unit usaha | Klik tombol WhatsApp per program | Minimal 100 klik/bulan (seluruh unit) |
| Meningkatkan visibilitas pencarian | Impresi dan klik di Google Search Console | Pertumbuhan impresi bulanan konsisten |
| Pengalaman cepat di HP | Skor Lighthouse mobile | Performance 90+, SEO 95+, Accessibility 90+ |
| Konten mudah diperbarui | Waktu menambah produk atau artikel | Di bawah 15 menit tanpa menyentuh kode layout |

Target angka bersifat usulan dan perlu disepakati dengan pihak pesantren.

## 4. Target Pengguna dan Persona

| Persona | Kebutuhan | Tindakan yang diharapkan |
| --- | --- | --- |
| **Calon peserta pelatihan kerja** (pemuda, lulusan SMA/SMK, pencari kerja) | Jenis pelatihan, durasi, syarat, biaya, jadwal, sertifikat | Daftar via WhatsApp |
| **Pembeli domba** (individu, keluarga, panitia kurban/aqiqah) | Jenis dan bobot domba, harga, lokasi kandang, layanan antar | Konsultasi dan pesan via WhatsApp |
| **Pemesan katering** (instansi, kantor, acara keluarga, pengajian) | Menu, paket, minimal pemesanan, area layanan | Minta penawaran via WhatsApp |
| **Pembeli bibit alpukat** (petani, pehobi, dinas, reseller) | Varietas, ukuran bibit, harga, cara pengiriman | Pesan via WhatsApp |
| **Wali santri, donatur, mitra, pemerintah** | Profil, legalitas, kegiatan, transparansi | Membaca profil dan menghubungi pengurus |

## 5. Ruang Lingkup

**Termasuk (In Scope)**

- Website statis multi-halaman berbahasa Indonesia, responsif mobile-first.
- Profil pesantren, hub program, dan 4 halaman detail unit usaha/program.
- Katalog produk dan paket (domba, menu katering, varietas bibit alpukat) berbasis file konten.
- Galeri foto, blog/berita, FAQ, halaman kontak.
- Tombol WhatsApp dan form kontak yang diteruskan ke WhatsApp.
- SEO teknis, JSON-LD, sitemap, robots.txt, Open Graph.
- Deploy ke Vercel atau hosting statis.

**Tidak termasuk (Out of Scope, fase 1)**

- Keranjang belanja, pembayaran online, dan akun pengguna.
- Database dan panel admin (konten diperbarui lewat file di repository).
- Pendaftaran santri baru (PSB) online, kecuali disepakati sebagai fase 2.
- Sistem donasi online.
- Multibahasa selain Indonesia.

## 6. Struktur Informasi (Sitemap)

| Halaman | URL | Tujuan |
| --- | --- | --- |
| Beranda | / | Ringkasan lembaga, 4 unit program, CTA, testimoni, artikel terbaru |
| Tentang | /tentang/ | Sejarah, visi misi, pengasuh dan pengurus, fasilitas, legalitas |
| Program | /program/ | Hub keempat program dan unit usaha |
| Pelatihan Kerja | /program/pelatihan-kerja/ | Daftar pelatihan, jadwal, syarat, alur daftar |
| Peternakan Domba | /program/peternakan-domba/ | Profil kandang, katalog domba, layanan kurban dan aqiqah |
| Katering | /program/katering/ | Paket menu, harga, area layanan, alur pemesanan |
| Bibit Alpukat | /program/bibit-alpukat/ | Varietas, ukuran, harga, panduan tanam, pengiriman |
| Galeri | /galeri/ | Foto kegiatan, filter per kategori |
| Blog | /blog/ dan /blog/\[slug\]/ | Artikel edukasi dan berita kegiatan |
| Kontak | /kontak/ | Alamat, peta, WhatsApp, jam layanan, form |
| Kebijakan Privasi | /kebijakan-privasi/ | Pernyataan penggunaan data form |
| 404 | /404 | Halaman tidak ditemukan dengan tautan navigasi |

## 7. Kebutuhan Fungsional

Prioritas: **P0** wajib rilis awal, **P1** penting, **P2** opsional.

### 7.1 Global

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-01 | Header sticky dengan logo, menu utama, dan tombol CTA WhatsApp; menu hamburger di mobile | P0 |
| FR-02 | Footer berisi ringkasan lembaga, tautan cepat, kontak, alamat, dan media sosial | P0 |
| FR-03 | Tombol WhatsApp melayang (floating) dengan pesan awal otomatis sesuai halaman | P0 |
| FR-04 | Breadcrumb di semua halaman selain Beranda | P1 |
| FR-05 | Animasi reveal ringan saat scroll (tidak diterapkan pada konten yang disuntik async) | P2 |

### 7.2 Beranda

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-10 | Hero: nama pesantren, tagline, 2 CTA (Lihat Program, Hubungi Kami) | P0 |
| FR-11 | Seksi 4 kartu program dengan ikon, deskripsi singkat, dan tautan ke halaman detail | P0 |
| FR-12 | Seksi profil singkat dan angka capaian (jumlah santri, alumni pelatihan, dll. sesuai data klien) | P1 |
| FR-13 | Seksi keunggulan atau nilai pesantren | P1 |
| FR-14 | Testimoni atau kutipan alumni, wali, dan pelanggan | P2 |
| FR-15 | 3 artikel terbaru dan strip galeri | P1 |
| FR-16 | CTA penutup ke WhatsApp | P0 |

### 7.3 Tentang

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-20 | Sejarah singkat, visi, misi, dan nilai pesantren | P0 |
| FR-21 | Profil pengasuh dan pengurus (foto, nama, jabatan) | P1 |
| FR-22 | Fasilitas pesantren (asrama, masjid, kandang, dapur, lahan pembibitan) | P1 |
| FR-23 | Legalitas dan afiliasi (izin lembaga, NSPP, izin usaha, sertifikasi) bila tersedia | P1 |

### 7.4 Program: Pelatihan Lapangan Kerja

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-30 | Daftar kelas pelatihan (nama, deskripsi, durasi, kuota, biaya, sertifikat) dari file konten | P0 |
| FR-31 | Alur pendaftaran 4 langkah (hubungi, konsultasi, verifikasi, mulai pelatihan) | P0 |
| FR-32 | Syarat peserta dan fasilitas yang didapat | P0 |
| FR-33 | Jadwal gelombang pelatihan terdekat | P1 |
| FR-34 | Kisah alumni dan penyaluran kerja atau magang | P2 |
| FR-35 | FAQ pelatihan (akordeon) | P1 |

### 7.5 Program: Peternakan Domba

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-40 | Profil peternakan: jenis domba, sistem pemeliharaan, kebersihan kandang, pakan | P0 |
| FR-41 | Katalog domba (jenis, kisaran bobot, umur, harga, status ketersediaan, foto) dengan filter jenis dan kegunaan (kurban, aqiqah, bibit, potong) | P0 |
| FR-42 | Layanan: kurban, aqiqah, pengiriman, penyembelihan dan pengemasan (jika ada) | P0 |
| FR-43 | Tombol Tanya Domba Ini yang membuka WhatsApp dengan nama produk terisi | P0 |
| FR-44 | Kalender atau banner promo musiman (menjelang Iduladha) | P2 |

### 7.6 Program: Katering

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-50 | Daftar paket katering (nasi box, prasmanan, tumpeng, snack box, katering harian) dengan harga mulai dari dan minimal pesanan | P0 |
| FR-51 | Contoh menu dan foto makanan | P0 |
| FR-52 | Area layanan, waktu pemesanan (H-berapa), dan syarat pengiriman | P0 |
| FR-53 | Info kehalalan dan higienitas; sertifikat halal atau PIRT jika ada | P1 |
| FR-54 | Form permintaan penawaran (tanggal, jumlah porsi, lokasi) yang diteruskan ke WhatsApp | P1 |

### 7.7 Program: Bibit Alpukat

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-60 | Katalog varietas (nama, ciri buah, usia berbuah, tinggi bibit, harga, stok) | P0 |
| FR-61 | Informasi metode perbanyakan (okulasi atau sambung pucuk) dan jaminan kualitas bibit | P0 |
| FR-62 | Harga bertingkat untuk pembelian partai (contoh: 1-9, 10-49, 50+) | P1 |
| FR-63 | Panduan menanam dan merawat bibit (artikel terkait) | P1 |
| FR-64 | Info pengiriman dan kemasan bibit antar kota | P1 |
| FR-65 | Tombol Pesan Bibit via WhatsApp dengan varietas dan jumlah terisi otomatis | P0 |

### 7.8 Galeri, Blog, Kontak

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-70 | Galeri grid dengan filter kategori (Pesantren, Pelatihan, Domba, Katering, Alpukat) dan lightbox JS | P1 |
| FR-71 | Gambar galeri lazy-load dengan alt text deskriptif | P0 |
| FR-80 | Blog: daftar artikel, halaman artikel, kategori, estimasi waktu baca, artikel terkait | P1 |
| FR-81 | Pencarian atau filter artikel sederhana berbasis JS | P2 |
| FR-90 | Kontak: alamat, Google Maps embed, nomor WhatsApp, jam layanan, tautan sosial | P0 |
| FR-91 | Form kontak (nama, keperluan, pesan) divalidasi JS lalu membuka WhatsApp dengan pesan terformat | P0 |

## 8. Alur Pengguna Utama

1. **Pesan domba:** Beranda atau Google, lalu Peternakan Domba, lihat katalog, klik Tanya Domba Ini, WhatsApp terbuka dengan nama domba terisi.
2. **Daftar pelatihan:** Pelatihan Kerja, pilih kelas, baca syarat, klik Daftar, WhatsApp terbuka dengan nama kelas terisi.
3. **Pesan katering:** Katering, pilih paket, isi form penawaran, diteruskan ke WhatsApp.
4. **Beli bibit alpukat:** Bibit Alpukat, pilih varietas dan jumlah, klik Pesan, WhatsApp terbuka dengan detail pesanan.

Format pesan WhatsApp otomatis (contoh): Assalamu'alaikum, saya ingin bertanya tentang \[nama produk/program\] dari website Pondok Pesantren Insan Kamil.

## 9. Kebutuhan Non-Fungsional

| Aspek | Persyaratan |
| --- | --- |
| Performa | Lighthouse mobile Performance 90+; LCP di bawah 2,5 detik; CLS di bawah 0,1; gambar WebP/AVIF dengan ukuran responsif; JS minimal dan hanya dimuat saat dibutuhkan |
| Responsif | Mobile-first; diuji di lebar 360, 390, 768, 1024, 1440 px |
| Aksesibilitas | Kontras WCAG AA, navigasi keyboard, label form, alt text, atribut aria untuk menu dan akordeon, fokus terlihat |
| SEO | Title dan meta description unik per halaman, canonical, Open Graph dan Twitter Card, sitemap.xml, robots.txt, heading hierarkis, URL bersih |
| Keamanan | HTTPS, tanpa penyimpanan data pribadi di server, header keamanan dasar di hosting, tautan eksternal memakai rel noopener |
| Kompatibilitas | Chrome, Safari, Firefox, Edge 2 versi terakhir; Android dan iOS |
| Keterpeliharaan | Konten terpisah dari layout, komponen reusable, variabel desain terpusat, README panduan update konten |
| Privasi | Form hanya meneruskan data ke WhatsApp pengguna sendiri; halaman Kebijakan Privasi menjelaskan hal ini |

## 10. Arsitektur Teknis (Astro)

**Prinsip:** Astro static output (SSG), komponen .astro, CSS murni dengan custom property, JavaScript vanilla untuk interaksi. Tanpa database dan tanpa CMS; konten dikelola lewat Astro Content Collections (Markdown/JSON).

### 10.1 Struktur Folder

```
insan-kamil/
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/ (logo, og-image)
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProgramCard.astro
│   │   ├── ProductCard.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── Breadcrumb.astro
│   │   ├── FAQ.astro
│   │   ├── Gallery.astro
│   │   ├── SEO.astro
│   │   └── JsonLd.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── pelatihan/
│   │   ├── domba/
│   │   ├── katering/
│   │   ├── bibit/
│   │   └── blog/
│   ├── data/
│   │   └── site.js (nama, kontak, WA, sosial)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── tentang.astro
│   │   ├── program/
│   │   │   ├── index.astro
│   │   │   ├── pelatihan-kerja.astro
│   │   │   ├── peternakan-domba.astro
│   │   │   ├── katering.astro
│   │   │   └── bibit-alpukat.astro
│   │   ├── galeri.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── kontak.astro
│   │   ├── kebijakan-privasi.astro
│   │   └── 404.astro
│   ├── scripts/
│   │   ├── nav.js
│   │   ├── whatsapp.js
│   │   ├── filter.js
│   │   ├── lightbox.js
│   │   ├── faq.js
│   │   └── reveal.js
│   └── styles/
│       ├── tokens.css
│       ├── base.css
│       ├── components.css
│       └── utilities.css
└── README.md
```

### 10.2 Skema Content Collections (ringkas)

| Collection | Field utama |
| --- | --- |
| pelatihan | judul, ringkasan, durasi, kuota, biaya, syarat, sertifikat, gambar, urutan |
| domba | nama, jenis, kegunaan, bobotMin, bobotMax, umur, harga, stok (tersedia/habis), gambar |
| katering | nama paket, deskripsi, hargaMulai, minimalPesan, isiMenu, gambar |
| bibit | varietas, ciri, usiaBerbuah, tinggi, harga, hargaPartai, stok, gambar |
| blog | judul, deskripsi, tanggal, kategori, gambar, penulis, isi Markdown |

### 10.3 Pola Implementasi

- **Layout tunggal** BaseLayout.astro dengan slot, memuat SEO.astro, Header, Footer, dan CSS global.
- **Data situs terpusat** di site.js agar nomor WhatsApp, alamat, dan sosial media diubah di satu tempat.
- **CSS scoping:** gunakan :global() untuk elemen yang disuntik lewat JS; kelas reveal tidak dipasang pada konten async.
- **JavaScript:** modul kecil per fitur, dimuat dengan script tag Astro, tanpa library berat. Fitur: toggle menu, akordeon FAQ, filter katalog, lightbox, generator tautan WhatsApp, validasi form.
- **Gambar:** gunakan komponen Image bawaan Astro untuk optimasi, lazy-load di bawah fold, atribut width dan height untuk mencegah layout shift.

## 11. Panduan Desain (Usulan)

**Karakter:** islami, hangat, terpercaya, dan dekat dengan alam (pertanian dan peternakan).

| Token | Usulan |
| --- | --- |
| Warna utama | Hijau zamrud tua (contoh #1F5F46) |
| Warna aksen | Emas lembut (contoh #C9A24B) |
| Latar | Krem hangat (contoh #FAF6EC) dan putih |
| Teks | Hijau sangat gelap atau abu tua (contoh #1E2A25) |
| Tipografi | Heading serif atau display yang tegas (contoh Playfair Display atau Lora); body sans-serif mudah dibaca (contoh Inter atau Plus Jakarta Sans) |
| Bentuk | Sudut membulat sedang, bayangan lembut, ornamen geometris islami tipis sebagai pola latar |
| Foto | Foto asli kegiatan pesantren; hindari stok foto generik |

Komponen utama: tombol (primer, sekunder, WhatsApp), kartu program, kartu produk dengan badge stok, akordeon FAQ, grid galeri, kartu testimoni, badge kehalalan. Nilai warna dan font final dituangkan ke tokens.css dan dapat disesuaikan dengan logo pesantren.

## 12. Strategi SEO, GEO, dan AEO

- **Kata kunci per halaman:** pelatihan kerja pesantren, jual domba kurban dan aqiqah, katering nasi box, bibit alpukat okulasi, ditambah nama kota atau kabupaten lokasi pesantren.
- **JSON-LD:** Organization dan EducationalOrganization (beranda), LocalBusiness (kontak), Product dan Offer (domba, bibit), Service atau FoodEstablishment (katering), Course (pelatihan), FAQPage, Article (blog), BreadcrumbList.
- **Konten AEO:** tiap halaman program memuat blok jawaban singkat 40-60 kata di bagian atas dan FAQ dengan pertanyaan yang benar-benar sering ditanyakan pelanggan.
- **Google Business Profile:** dibuat atau dirapikan dan ditautkan dari website; NAP (nama, alamat, telepon) konsisten di seluruh halaman.
- **Rencana blog awal (8 artikel):** cara memilih domba kurban, perbedaan domba kurban dan aqiqah, panduan harga katering per porsi, varietas alpukat unggul untuk dataran rendah dan tinggi, cara merawat bibit alpukat baru, manfaat pelatihan kerja berbasis pesantren, kisah santri wirausaha, kegiatan terbaru pesantren.
- **Teknis:** sitemap.xml otomatis dari Astro, robots.txt, canonical, hreflang tidak diperlukan (satu bahasa), pengiriman sitemap ke Search Console.

## 13. Konten yang Dibutuhkan dari Pihak Pesantren

| Kebutuhan | Keterangan |
| --- | --- |
| Logo dan identitas | Logo format vektor atau PNG resolusi tinggi, warna identitas jika ada |
| Profil lembaga | Sejarah, visi misi, pengasuh, pengurus, fasilitas, legalitas |
| Kontak resmi | Nomor WhatsApp, alamat lengkap, titik Google Maps, jam layanan, media sosial |
| Data pelatihan | Nama kelas, durasi, syarat, biaya, jadwal, sertifikat, mitra penyalur kerja |
| Data domba | Jenis, kisaran bobot, harga, layanan antar, pembayaran, ketentuan kurban dan aqiqah |
| Data katering | Paket, menu, harga, minimal pesanan, area layanan, sertifikat halal atau PIRT |
| Data bibit alpukat | Varietas, tinggi, harga satuan dan partai, stok, metode pengiriman |
| Foto dan video | Foto asli minimal 6 per unit, berorientasi lanskap, resolusi cukup |
| Testimoni | Kutipan dan izin menampilkan nama |

## 14. Rencana Rilis dan Timeline (Usulan)

| Fase | Cakupan | Estimasi |
| --- | --- | --- |
| 0. Persiapan | Finalisasi PRD, pengumpulan konten, logo, dan foto | Minggu 1 |
| 1. Desain dan fondasi | tokens.css, BaseLayout, Header, Footer, komponen dasar | Minggu 1-2 |
| 2. Halaman inti | Beranda, Tentang, Program (hub), Kontak | Minggu 2 |
| 3. Halaman program | Pelatihan, Domba, Katering, Bibit Alpukat dengan katalog | Minggu 3 |
| 4. Galeri dan blog | Galeri, lightbox, blog, artikel awal | Minggu 3-4 |
| 5. SEO dan QA | JSON-LD, sitemap, audit Lighthouse, uji perangkat, perbaikan | Minggu 4 |
| 6. Rilis | Deploy, domain, HTTPS, Search Console, serah terima dan panduan update | Minggu 4-5 |

## 15. Kriteria Penerimaan (Acceptance Criteria)

- [ ] Seluruh halaman pada sitemap tersedia dan tidak ada tautan rusak.
- [ ] Tombol WhatsApp di setiap halaman membuka chat ke nomor yang benar dengan pesan awal sesuai konteks.
- [ ] Katalog domba, katering, dan bibit tampil dari file konten; menambah item tidak membutuhkan perubahan pada komponen.
- [ ] Filter katalog dan galeri berfungsi tanpa reload halaman.
- [ ] Form kontak menolak input kosong dan meneruskan pesan terformat ke WhatsApp.
- [ ] Lighthouse mobile: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 95+.
- [ ] Tampilan benar di lebar 360 px sampai 1440 px tanpa scroll horizontal.
- [ ] Setiap halaman memiliki title, meta description, canonical, dan Open Graph yang unik.
- [ ] JSON-LD lolos uji Rich Results Test tanpa error.
- [ ] Semua gambar memiliki alt text dan atribut ukuran.
- [ ] README berisi panduan menambah produk, artikel, dan mengganti nomor WhatsApp.

## 16. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Konten dan foto terlambat diberikan | Jadwal mundur | Gunakan placeholder; tetapkan tenggat konten di Minggu 1 |
| Harga dan stok sering berubah | Informasi usang | Tampilkan kisaran harga dan label hubungi untuk harga terbaru; sediakan panduan update file |
| Tidak ada admin panel | Pengelola non-teknis kesulitan | Panduan update bergambar; opsi fase 2 menambah CMS ringan atau Supabase |
| Foto berukuran besar | Halaman lambat | Optimasi otomatis lewat Astro Image dan batas ukuran unggahan |
| Klaim kehalalan atau legalitas tanpa bukti | Risiko reputasi | Tampilkan hanya sertifikat yang tersedia |
| Ketergantungan pada satu nomor WhatsApp | Lead terlewat | Siapkan nomor cadangan atau jam layanan yang jelas |

## 17. Asumsi dan Pertanyaan Terbuka

**Asumsi:** situs satu bahasa (Indonesia); transaksi diselesaikan di luar website lewat WhatsApp; hosting di Vercel atau hosting statis; konten diperbarui oleh pengembang atau admin yang diberi panduan.

**Perlu dikonfirmasi:**

1. Apakah domain sudah ada, dan apakah pesantren ingin subdomain atau domain baru?
2. Apakah perlu halaman Penerimaan Santri Baru atau Donasi di fase 1?
3. Apakah katering dan bibit memiliki harga publik atau hanya melalui penawaran?
4. Apakah ada logo dan warna identitas yang harus dipatuhi?
5. Siapa yang akan memperbarui konten setelah rilis, dan seberapa sering?
6. Apakah ingin integrasi pelacak statistik (Google Analytics atau alternatif ringan)?
7. Apakah ada kemitraan atau penyaluran kerja yang boleh ditampilkan di halaman pelatihan?

## 18. Fase Lanjutan (Backlog)

- Pendaftaran santri baru dan pelatihan online dengan form tersimpan (Supabase).
- Halaman donasi dan wakaf dengan transparansi laporan.
- Panel admin ringan untuk update stok dan harga.
- Katalog dengan keranjang permintaan yang dikirim sekaligus ke WhatsApp.
- Peta lokasi kandang, dapur, dan kebun bibit dengan tur foto atau video.
