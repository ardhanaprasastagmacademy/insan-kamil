# Website Resmi Pondok Pesantren Insan Kamil

Website statis resmi Pondok Pesantren Insan Kamil yang menampilkan profil lembaga, hub program, serta 4 unit usaha dan pemberdayaan:
1. **Pelatihan Lapangan Kerja** (menjahit, tata boga, pertanian modern)
2. **Peternakan Domba** (Garut, Ekor Tipis, Merino untuk kurban, aqiqah, bibit, potong)
3. **Katering Halal** (nasi box, prasmanan, snack box, tumpeng)
4. **Bibit Alpukat Unggul** (Aligator, Miki, Kendil sistem okulasi & sambung pucuk)

Website dibangun dengan arsitektur **Astro (SSG)** tanpa database — cepat, aman, hemat biaya hosting, ramah SEO, dan seluruh konversi diarahkan ke WhatsApp resmi pesantren.

---

## 🚀 Perintah Dasar

Jalankan perintah ini di dalam folder `insan-kamil`:

```bash
# Menjalankan server development lokal (http://localhost:4321)
npm run dev

# Membangun situs produksi (output ke folder dist/)
npm run build

# Meninjau (preview) hasil build produksi secara lokal
npm run preview
```

---

## 📁 Struktur Proyek

```text
insan-kamil/
├── astro.config.mjs          # Konfigurasi Astro + @astrojs/sitemap
├── package.json
├── public/
│   ├── favicon.svg           # Favicon dengan inisial IK
│   ├── robots.txt            # Pengaturan crawler mesin pencari
│   └── images/               # Aset gambar & logo SVG
├── src/
│   ├── content.config.ts     # Skema Astro Content Collections (Astro v5+)
│   ├── content/              # Sumber konten data (JSON & Markdown)
│   │   ├── pelatihan/        # File JSON program pelatihan kerja
│   │   ├── domba/            # File JSON katalog domba
│   │   ├── katering/         # File JSON paket menu katering
│   │   ├── bibit/            # File JSON katalog bibit alpukat
│   │   └── blog/             # File Markdown artikel blog
│   ├── data/
│   │   └── site.js           # Data global situs (nama, alamat, nomor WhatsApp)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout utama (Navbar, Footer, Floating WhatsApp, SEO/JSON-LD)
│   ├── components/
│   │   ├── Navbar.astro      # Header sticky + menu desktop + sidebar mobile
│   │   ├── Footer.astro      # Footer 4 kolom warna chocolate-deep
│   │   ├── FloatingActions.astro # Tombol FAB WhatsApp + popup multi-topik + back-to-top
│   │   └── Breadcrumb.astro  # Breadcrumb navigasi hierarkis
│   ├── pages/
│   │   ├── index.astro       # Beranda
│   │   ├── tentang.astro     # Halaman profil, sejarah, visi misi, fasilitas
│   │   ├── galeri.astro      # Galeri dokumentasi interaktif dengan filter kategori
│   │   ├── kontak.astro      # Alamat, jam buka, Google Maps, form WhatsApp
│   │   ├── kebijakan-privasi.astro # Kebijakan privasi
│   │   ├── 404.astro         # Halaman 404
│   │   ├── program/
│   │   │   ├── index.astro   # Hub ke-4 program
│   │   │   ├── pelatihan-kerja.astro # Halaman Pelatihan Kerja
│   │   │   ├── peternakan-domba.astro # Katalog & Layanan Domba Kurban/Aqiqah
│   │   │   ├── katering.astro         # Paket Menu Katering & Form Penawaran
│   │   │   └── bibit-alpukat.astro    # Varietas Bibit & Harga Partai
│   │   └── blog/
│   │       ├── index.astro   # Indeks artikel dengan filter kategori
│   │       └── [slug].astro  # Halaman detail artikel blog Markdown
│   └── styles/
│       ├── tokens.css        # Design tokens: warna, tipografi, ukuran, spasi
│       ├── base.css          # Reset CSS, elemen HTML, tombol, heading
│       └── utilities.css     # Utilitas tambahan
└── README.md
```

---

## 📝 Panduan Memperbarui Konten

Seluruh data konten terpisah dari tampilan (layout), sehingga pengelola dapat menambah atau mengubah informasi dalam waktu kurang dari 5 menit tanpa mengubah kode desain.

### 1. Mengubah Nomor WhatsApp dan Informasi Kontak
Buka file `src/data/site.js`:
```javascript
export const site = {
  name: 'Pondok Pesantren Insan Kamil',
  shortName: 'Insan Kamil',
  waNumber: '6281234567890', // Format nomor internasional tanpa tanda '+'
  email: 'info@insankamil.ac.id',
  address: 'Jl. Pesantren Insan Kamil No. 1, Kab. Bogor, Jawa Barat',
  hours: 'Senin–Sabtu, 08.00–16.00 WIB',
  social: {
    instagram: 'https://instagram.com/insankamil',
    facebook: 'https://facebook.com/insankamil',
    youtube: 'https://youtube.com/@insankamil',
  },
};
```

### 2. Menambah Program Pelatihan Kerja
Buat file JSON baru di dalam folder `src/content/pelatihan/` (contoh: `las-listrik.json`):
```json
{
  "judul": "Pelatihan Pengelasan dan Fabrikasi",
  "ringkasan": "Keterampilan teknik las SMAW/GMAW untuk kebutuhan industri manufaktur dan konstruksi.",
  "durasi": "2 bulan",
  "kuota": 15,
  "biaya": "Rp 750.000",
  "syarat": [
    "Usia 17-30 tahun",
    "Sehat jasmani dan rohani",
    "Lulusan SMP/SMA/SMK"
  ],
  "sertifikat": true,
  "gambar": "/images/pelatihan-las.jpg",
  "urutan": 4
}
```

### 3. Menambah Koleksi Domba
Buat file JSON baru di dalam folder `src/content/domba/` (contoh: `garut-betina.json`):
```json
{
  "nama": "Domba Garut Betina",
  "jenis": "Garut",
  "kegunaan": ["aqiqah", "bibit"],
  "bobotMin": 18,
  "bobotMax": 26,
  "umur": "1-1.5 tahun",
  "harga": 2200000,
  "stok": "tersedia",
  "gambar": "/images/domba-garut-betina.jpg"
}
```
*Catatan:* Nilai `stok` dapat berupa `"tersedia"` atau `"habis"`. Nilai `kegunaan` dapat berisi kombinasi: `"kurban"`, `"aqiqah"`, `"bibit"`, `"potong"`.

### 4. Menambah Paket Menu Katering
Buat file JSON baru di dalam folder `src/content/katering/` (contoh: `tumpeng-syukuran.json`):
```json
{
  "nama": "Paket Tumpeng Syukuran",
  "deskripsi": "Tumpeng kuning komplit untuk acara syukuran, peresmian, dan milad.",
  "hargaMulai": 350000,
  "minimalPesan": "1 paket (15-20 porsi)",
  "isiMenu": [
    "Nasi kuning pulen",
    "Ayam bakar bumbu rujak",
    "Sambal goreng ati kentang",
    "Perkedel kentang",
    "Urap sayur",
    "Telur dadar iris & hiasan sayur"
  ],
  "gambar": "/images/katering-tumpeng.jpg"
}
```

### 5. Menambah Varietas Bibit Alpukat
Buat file JSON baru di dalam folder `src/content/bibit/` (contoh: `alpukat-hass.json`):
```json
{
  "varietas": "Alpukat Hass",
  "ciri": "Kulit bergerigi berubah gelap saat matang, rasa gurih legit, kualitas ekspor.",
  "usiaBerbuah": "3 tahun (sambung pucuk)",
  "tinggi": "60-80 cm",
  "harga": 65000,
  "hargaPartai": [
    { "min": 1, "max": 9, "harga": 65000 },
    { "min": 10, "max": 49, "harga": 55000 },
    { "min": 50, "harga": 48000 }
  ],
  "stok": "tersedia",
  "gambar": "/images/bibit-hass.jpg"
}
```

### 6. Menulis Artikel Blog Baru
Buat file Markdown baru di `src/content/blog/` (contoh: `panduan-merawat-alpukat.md`):
```markdown
---
judul: "Panduan Mudah Merawat Bibit Alpukat Baru Tanam"
deskripsi: "Tips praktis penyiraman, pemupukan, dan penanganan bibit alpukat setelah tiba di lokasi tanam."
tanggal: 2026-11-12
kategori: "Pertanian"
gambar: "/images/blog-rawat-alpukat.jpg"
penulis: "Tim Agribisnis Insan Kamil"
---

## Langkah Pertama Setelah Bibit Diterima

Saat paket bibit alpukat tiba, letakkan di tempat teduh selama 3-5 hari sebelum ditanam ke lahan terbuka...
```

---

## 🎨 Panduan Desain & Aksesibilitas

Sesuai `DESIGN.md`:
- **Palet Warna:**
  - Latar Kanvas: `--mintcream: #F5FFFA`
  - Warna Merek / Navbar: `--chocolate: #D2691E`
  - Aksen / Tombol / Footer: `--chocolate-deep: #8B4513`
  - Teks Utama: `--chocolate-ink: #2E1A0F`
  - Latar Sekunder: `--mint-100: #EBF8F1`
- **Tipografi:** Heading menggunakan **Cormorant Garamond** (serif elegan), body dan UI menggunakan **Plus Jakarta Sans** (sans-serif bersih).
- **Interaksi Navigasi:** Hover pada navbar hanya menebalkan teks (**bold**) tanpa pergeseran lebar berkat trik pseudo-elemen `data-text`.
- **Bebas Emoji & Ikon Klise:** Seluruh penanda menggunakan angka berseri (`01`, `02`, `03`) dan tipografi berbobot.

---

## 🌐 Panduan Deploy

Situs ini dapat di-deploy dengan cepat ke platform hosting statis seperti **Vercel**, **Netlify**, atau **Cloudflare Pages**:
1. Hubungkan repository GitHub ke penyedia hosting pilihan.
2. Pengaturan build:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Setelah deploy, situs otomatis memiliki HTTPS dan siap melayani pengunjung.
