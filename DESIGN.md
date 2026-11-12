# DESIGN.md — Website Pondok Pesantren Insan Kamil

Versi 1.0 · 12 November 2026 · Stack: Astro, HTML, CSS, JavaScript (tanpa database)
Dokumen pendamping PRD.md. Seluruh nilai di bawah adalah sumber kebenaran untuk `tokens.css` dan komponen Astro.

---

## 1. Arah Desain

| Aspek | Keputusan |
|---|---|
| Kesan | Elegan, premium, simpel. Tenang, lapang, tidak ramai |
| Warna dasar | Chocolate dan mintcream |
| Navbar | Latar chocolate, teks mintcream, satu-satunya efek adalah teks menjadi bold |
| Navbar mobile | Sidebar yang meluncur dari kanan |
| Elemen global | Pop up WhatsApp (logo WA) dan tombol kembali ke atas di semua halaman |
| Ikon dan emoji | Tidak memakai emoji dan ikon klise. Identitas dibangun dari tipografi, garis tipis, angka, dan foto asli |

### Prinsip

1. **Terkendali.** Dua warna utama, satu keluarga serif untuk judul, satu sans-serif untuk isi. Tidak ada warna ketiga yang mencolok.
2. **Lapang.** Ruang kosong adalah bagian dari kemewahan. Jarak antarbagian besar, teks tidak berdesakan.
3. **Garis tipis, bukan bayangan tebal.** Pemisah memakai garis 1px. Bayangan hanya untuk elemen melayang (popup, tombol melayang).
4. **Foto asli.** Kepercayaan datang dari dokumentasi nyata pesantren, kandang, dapur, dan kebun bibit.
5. **Satu efek, konsisten.** Interaksi tautan navigasi adalah bold. Efek lain dibuat sehalus mungkin.

---

## 2. Aturan Ikon dan Simbol

**Dilarang**
- Emoji dalam bentuk apa pun (di teks, judul, tombol, daftar, atau meta).
- Ikon klise buatan AI: kilau/sparkle, roket, bohlam, tameng, bintang, jabat tangan, ceklis dalam lingkaran, petir, target, piala, ikon orang generik.
- Gradien ungu atau biru, glassmorphism berlebihan, ilustrasi 3D generik, badge bertuliskan AI.
- Bullet dekoratif berupa ikon. Gunakan garis pendek atau angka.

**Diperbolehkan (fungsional saja)**
- Hamburger dan tombol tutup: garis tipis 1,5px.
- Panah atau chevron kembali ke atas: garis tipis.
- Logo WhatsApp (wajib agar dikenali).
- Pengganti ikon: **angka berseri** (01, 02, 03, 04) dalam huruf serif, label teks kapital kecil (eyebrow), garis tipis, dan foto.

---

## 3. Design Tokens

### 3.1 Warna

| Token | Hex | Peran |
|---|---|---|
| `--mintcream` | `#F5FFFA` | Kanvas halaman, teks di atas chocolate |
| `--chocolate` | `#D2691E` | Warna merek: navbar, sidebar, garis aksen, angka besar |
| `--chocolate-deep` | `#8B4513` | Tombol utama, tautan, judul kecil, footer, pita CTA |
| `--chocolate-ink` | `#2E1A0F` | Teks isi dan judul utama |
| `--text-muted` | `#5A4636` | Teks sekunder, meta, keterangan |
| `--mint-100` | `#EBF8F1` | Latar seksi selang-seling, kartu |
| `--mint-200` | `#D9EEE2` | Latar input, pemisah halus |
| `--line` | `rgba(139, 69, 19, 0.18)` | Garis pemisah di atas mintcream |
| `--line-on-dark` | `rgba(245, 255, 250, 0.22)` | Garis pemisah di atas chocolate |

### 3.2 Kontras (perkiraan)

| Kombinasi | Rasio | Pemakaian yang boleh |
|---|---|---|
| `--chocolate-ink` di atas mintcream | ±16 : 1 | Semua teks |
| `--text-muted` di atas mintcream | ±8,7 : 1 | Semua teks |
| `--chocolate-deep` di atas mintcream | ±6,9 : 1 | Semua teks, tautan |
| mintcream di atas `--chocolate-deep` | ±6,9 : 1 | Semua teks (tombol, footer) |
| mintcream di atas `--chocolate` | ±3,6 : 1 | **Hanya teks besar atau bold** (navbar, sidebar, angka besar) |
| `--chocolate` di atas mintcream | ±3,6 : 1 | **Bukan untuk teks isi.** Hanya garis, bidang, angka besar |

Catatan penting: chocolate murni (`#D2691E`) di bawah 4,5 : 1 untuk teks kecil reguler. Karena itu `--chocolate` dipakai sebagai warna merek pada bidang besar (navbar, sidebar), sedangkan teks kecil dan tombol memakai `--chocolate-deep`. Jika audit aksesibilitas menuntut AA penuh untuk teks navbar, ganti satu token: `--nav-bg: #B35A1B` (±4,7 : 1) tanpa mengubah komponen apa pun.

### 3.3 Tipografi

| Peran | Font | Bobot |
|---|---|---|
| Judul | Cormorant Garamond (fallback Georgia, serif) | 500, 600, 700 |
| Isi dan UI | Plus Jakarta Sans (fallback system-ui, sans-serif) | 400, 500, 600, 700 (variable) |

Muat dari Google Fonts dengan `display=swap`. Pakai versi variable Plus Jakarta Sans agar transisi bobot pada navbar halus.

| Level | Ukuran | Line-height | Catatan |
|---|---|---|---|
| Display (hero) | `clamp(2.5rem, 1.2rem + 5vw, 4.5rem)` | 1.05 | Cormorant 600 |
| H1 | `clamp(2.25rem, 1.4rem + 3.4vw, 3.5rem)` | 1.1 | Cormorant 600 |
| H2 | `clamp(1.875rem, 1.3rem + 2.2vw, 2.75rem)` | 1.15 | Cormorant 600 |
| H3 | `clamp(1.5rem, 1.2rem + 1vw, 1.875rem)` | 1.2 | Cormorant 600 |
| Body | `1rem` (16px), 1.0625rem pada desktop | 1.7 | Plus Jakarta Sans 400 |
| Kecil | `0.875rem` | 1.6 | Meta, keterangan |
| Eyebrow | `0.75rem`, kapital, `letter-spacing: 0.16em` | 1.4 | Plus Jakarta Sans 600, `--chocolate-deep` |

Cormorant bertubuh kecil: jangan dipakai di bawah 1.5rem.

### 3.4 Spasi, Bentuk, Gerak

```css
:root {
  /* Warna */
  --mintcream: #F5FFFA;
  --chocolate: #D2691E;
  --chocolate-deep: #8B4513;
  --chocolate-ink: #2E1A0F;
  --text: var(--chocolate-ink);
  --text-muted: #5A4636;
  --mint-100: #EBF8F1;
  --mint-200: #D9EEE2;
  --line: rgba(139, 69, 19, 0.18);
  --line-on-dark: rgba(245, 255, 250, 0.22);
  --nav-bg: var(--chocolate);
  --nav-text: var(--mintcream);

  /* Tipografi */
  --font-heading: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;

  /* Spasi (kelipatan 4/8) */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.5rem;  --space-6: 2rem;
  --space-7: 3rem;     --space-8: 4rem;    --space-9: 6rem;
  --section-y: clamp(4rem, 8vw, 7rem);

  /* Layout */
  --container: 1200px;
  --container-narrow: 760px;
  --gutter: clamp(1.25rem, 4vw, 2rem);
  --header-h: 76px;

  /* Bentuk */
  --radius-sm: 2px;
  --radius-md: 6px;
  --shadow-float: 0 12px 32px rgba(46, 26, 15, 0.22);

  /* Gerak */
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-fast: 180ms;
  --dur: 300ms;

  /* Lapisan */
  --z-header: 800;
  --z-floating: 900;
  --z-overlay: 1000;
  --z-sidebar: 1010;
}

@media (max-width: 991.98px) { :root { --header-h: 68px; } }
```

Breakpoint: 576, 768, 992, 1200 px. Desktop mulai 992 px (di bawahnya navbar berganti menjadi sidebar).

---

## 4. Layout dan Grid

- Kontainer maksimum 1200 px, padding samping `--gutter`. Teks bacaan panjang (artikel, profil) maksimum 760 px.
- Grid 12 kolom desktop, 6 kolom tablet, 1 kolom mobile. Jarak antarkolom 24 px (mobile) sampai 32 px (desktop).
- Padding vertikal antarseksi `--section-y`. Seksi berselang-seling: mintcream, mint-100, dan satu pita `--chocolate-deep` untuk CTA penutup.
- `html { scroll-padding-top: var(--header-h); scroll-behavior: smooth; }` agar tautan anchor tidak tertutup navbar.

---

## 5. Navbar Desktop

**Spesifikasi**
- Posisi `sticky; top: 0`, tinggi 76 px, latar `--chocolate`, teks `--mintcream`, garis bawah 1px `--line-on-dark`.
- Kiri: logo (40 px) dan nama "Insan Kamil" (Cormorant 700, 1.5rem). Kanan: tautan menu.
- Menu: Beranda, Tentang, Program, Galeri, Blog, Kontak. Satu tingkat saja, tanpa dropdown. Empat halaman program diakses lewat halaman Program dan footer.
- Tidak ada tombol CTA di navbar (CTA ditangani popup WhatsApp).
- Tidak ada efek saat scroll (tanpa perubahan warna, tinggi, atau bayangan).

**Efek tautan: hanya bold**
- Normal: bobot 500. Hover, fokus, dan halaman aktif: bobot 700.
- Tidak ada garis bawah, perubahan warna, latar, atau animasi lain.
- Agar lebar tautan tidak bergeser saat menjadi bold, lebarnya dikunci dengan pseudo-element tersembunyi berbobot 700.
- Fokus keyboard tetap mendapat outline 2px mintcream (syarat aksesibilitas), selain bold.

```astro
---
// src/components/Navbar.astro
import { site } from '../data/site.js';
const path = Astro.url.pathname;
const links = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang/' },
  { label: 'Program', href: '/program/' },
  { label: 'Galeri', href: '/galeri/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Kontak', href: '/kontak/' },
];
const isActive = (href) => (href === '/' ? path === '/' : path.startsWith(href));
---
<header class="site-header">
  <div class="container nav-bar">
    <a class="brand" href="/" aria-label="Pondok Pesantren Insan Kamil, ke beranda">
      <img src="/images/logo.svg" alt="" width="40" height="40" />
      <span class="brand-name">Insan Kamil</span>
    </a>

    <nav class="nav-desktop" aria-label="Navigasi utama">
      <ul>
        {links.map((l) => (
          <li>
            <a class="nav-link" href={l.href} data-text={l.label}
               aria-current={isActive(l.href) ? 'page' : undefined}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>

    <button class="nav-toggle" type="button" aria-label="Buka menu"
            aria-expanded="false" aria-controls="sidebar">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div class="sidebar-overlay" data-sidebar-close></div>

<aside class="sidebar" id="sidebar" aria-label="Menu navigasi" inert>
  <div class="sidebar-head">
    <span class="brand-name">Insan Kamil</span>
    <button class="sidebar-close" type="button" aria-label="Tutup menu" data-sidebar-close>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
           stroke-width="1.5" stroke-linecap="square" aria-hidden="true">
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    </button>
  </div>

  <nav aria-label="Navigasi samping">
    <ul class="sidebar-list">
      {links.map((l) => (
        <li>
          <a class="sidebar-link" href={l.href}
             aria-current={isActive(l.href) ? 'page' : undefined}>{l.label}</a>
        </li>
      ))}
    </ul>
  </nav>

  <div class="sidebar-foot">
    <p class="eyebrow-light">Hubungi kami</p>
    <a class="sidebar-contact" href={`https://wa.me/${site.waNumber}`} rel="noopener">WhatsApp</a>
    <p class="sidebar-address">{site.address}</p>
  </div>
</aside>
```

```css
/* Header */
.site-header {
  position: sticky; top: 0; z-index: var(--z-header);
  height: var(--header-h);
  background: var(--nav-bg); color: var(--nav-text);
  border-bottom: 1px solid var(--line-on-dark);
}
.nav-bar { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: var(--space-5); }
.brand { display: inline-flex; align-items: center; gap: var(--space-3); color: var(--nav-text); text-decoration: none; }
.brand-name { font-family: var(--font-heading); font-weight: 700; font-size: 1.5rem; letter-spacing: 0.01em; }

/* Menu desktop */
.nav-desktop ul { display: flex; gap: clamp(1.25rem, 2.6vw, 2.5rem); list-style: none; margin: 0; padding: 0; }
.nav-link {
  display: inline-flex; flex-direction: column; align-items: center;
  color: var(--nav-text); text-decoration: none;
  font-size: 1.0625rem; font-weight: 500; letter-spacing: 0.01em;
  transition: font-weight var(--dur-fast) var(--ease);
}
/* Kunci lebar pada bobot 700 agar tidak ada pergeseran saat bold */
.nav-link::after {
  content: attr(data-text);
  font-weight: 700; height: 0; overflow: hidden;
  visibility: hidden; pointer-events: none; user-select: none;
}
.nav-link:hover,
.nav-link:focus-visible,
.nav-link[aria-current='page'] { font-weight: 700; }
.nav-link:focus-visible { outline: 2px solid var(--nav-text); outline-offset: 6px; }

/* Tombol hamburger: tiga garis tipis */
.nav-toggle {
  display: none; width: 44px; height: 44px; padding: 0;
  background: transparent; border: 0; color: var(--nav-text); cursor: pointer;
  flex-direction: column; align-items: center; justify-content: center; gap: 6px;
}
.nav-toggle span { display: block; width: 26px; height: 1.5px; background: currentColor; }
.nav-toggle:focus-visible { outline: 2px solid var(--nav-text); outline-offset: 2px; }

@media (max-width: 991.98px) {
  .nav-desktop { display: none; }
  .nav-toggle { display: inline-flex; }
}
```

---

## 6. Navbar Mobile: Sidebar

**Spesifikasi**
- Aktif di bawah 992 px. Hamburger (tiga garis tipis, mintcream) di kanan header.
- Sidebar meluncur dari **kanan**, lebar `min(86vw, 340px)`, tinggi penuh, latar `--chocolate`, teks `--mintcream`.
- Overlay `rgba(46, 26, 15, 0.55)` menutupi halaman, klik overlay menutup sidebar.
- Isi: kepala (nama + tombol tutup), daftar tautan, kaki (kontak WhatsApp dan alamat).
- Tautan sidebar memakai Cormorant 1.5rem (teks besar, kontras aman), dipisah garis 1px `--line-on-dark`. Halaman aktif dan hover: **bold 700**, tanpa efek lain.
- Animasi `transform` 300 ms `--ease`. Dengan `prefers-reduced-motion`, animasi dimatikan.
- Perilaku: kunci scroll body saat terbuka, fokus pindah ke tombol tutup, fokus terkunci di dalam sidebar, `Esc` menutup, klik tautan menutup, fokus kembali ke hamburger saat tertutup, otomatis tertutup bila layar diperbesar ke desktop.
- Sidebar tertutup memakai atribut `inert` agar tidak bisa difokus.

```css
.sidebar-overlay {
  position: fixed; inset: 0; z-index: var(--z-overlay);
  background: rgba(46, 26, 15, 0.55);
  opacity: 0; visibility: hidden;
  transition: opacity var(--dur) var(--ease), visibility var(--dur);
}
.sidebar-overlay.is-visible { opacity: 1; visibility: visible; }

.sidebar {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: var(--z-sidebar);
  width: min(86vw, 340px);
  display: flex; flex-direction: column;
  padding: var(--space-5);
  background: var(--chocolate); color: var(--mintcream);
  overflow-y: auto; overscroll-behavior: contain;
  transform: translateX(100%);
  transition: transform var(--dur) var(--ease);
}
.sidebar.is-open { transform: translateX(0); }

.sidebar-head { display: flex; align-items: center; justify-content: space-between; min-height: 44px; margin-bottom: var(--space-6); }
.sidebar-close { width: 44px; height: 44px; display: grid; place-items: center; background: transparent; border: 0; color: inherit; cursor: pointer; }
.sidebar-close:focus-visible { outline: 2px solid var(--mintcream); outline-offset: 2px; }

.sidebar-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line-on-dark); }
.sidebar-link {
  display: block; padding: 1.1rem 0;
  border-bottom: 1px solid var(--line-on-dark);
  font-family: var(--font-heading); font-size: 1.5rem; font-weight: 500;
  color: var(--mintcream); text-decoration: none;
  transition: font-weight var(--dur-fast) var(--ease);
}
.sidebar-link:hover,
.sidebar-link:focus-visible,
.sidebar-link[aria-current='page'] { font-weight: 700; }
.sidebar-link:focus-visible { outline: 2px solid var(--mintcream); outline-offset: 4px; }

.sidebar-foot { margin-top: auto; padding-top: var(--space-6); }
.eyebrow-light { margin: 0 0 var(--space-2); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
.sidebar-contact { font-size: 1.125rem; font-weight: 700; color: var(--mintcream); }
.sidebar-address { margin: var(--space-3) 0 0; font-size: 0.9375rem; line-height: 1.6; }

body.no-scroll { overflow: hidden; }

@media (min-width: 992px) { .sidebar, .sidebar-overlay { display: none; } }
@media (prefers-reduced-motion: reduce) {
  .sidebar, .sidebar-overlay, .nav-link, .sidebar-link { transition: none; }
}
```

```js
// src/scripts/nav.js
const toggle = document.querySelector('.nav-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.sidebar-overlay');

if (toggle && sidebar && overlay) {
  const FOCUSABLE = 'a[href], button:not([disabled])';
  const desktop = window.matchMedia('(min-width: 992px)');

  const open = () => {
    sidebar.removeAttribute('inert');
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    sidebar.querySelector('.sidebar-close')?.focus();
  };

  const close = (returnFocus = true) => {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    sidebar.setAttribute('inert', '');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', open);
  document.querySelectorAll('[data-sidebar-close]').forEach((el) =>
    el.addEventListener('click', () => close()));
  sidebar.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => close(false)));

  document.addEventListener('keydown', (e) => {
    if (!sidebar.classList.contains('is-open')) return;
    if (e.key === 'Escape') return close();
    if (e.key !== 'Tab') return;
    const items = [...sidebar.querySelectorAll(FOCUSABLE)];
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  desktop.addEventListener('change', (e) => { if (e.matches) close(false); });
}
```

---

## 7. Pop Up WhatsApp dan Tombol Kembali ke Atas

Dipasang satu kali di `BaseLayout.astro` (`<FloatingActions />`) sehingga muncul di **semua halaman**, termasuk 404.

### 7.1 Tombol WhatsApp dan Popup

- Tombol bulat 56 px di kanan bawah (20 px dari tepi, hormati `safe-area-inset`). Latar `--chocolate-deep`, logo WhatsApp mintcream, cincin 1px mintcream agar tetap terlihat di atas footer, bayangan `--shadow-float`.
- Klik tombol membuka **popup kartu** di atasnya: lebar `min(320px, 100vw - 40px)`, latar mintcream, border 1px `--line`, radius 6 px.
  - Kepala chocolate: judul "Hubungi Insan Kamil" (Cormorant 1.25rem, mintcream) dan tombol tutup bergaris tipis.
  - Teks pengantar: "Pilih keperluan Anda. Kami teruskan ke WhatsApp."
  - Daftar pilihan (teks saja, dipisah garis tipis): Pelatihan Kerja, Peternakan Domba, Katering, Bibit Alpukat, Pertanyaan Umum. Tiap pilihan membuka WhatsApp dengan pesan awal sesuai pilihan.
  - Hover pada pilihan: latar `--mint-100`, teks `--chocolate-deep`.
- Popup tidak terbuka otomatis (lebih tenang dan premium). Opsional: buka otomatis sekali per sesi setelah 12 detik, dijaga dengan `sessionStorage` dibungkus try/catch.
- Menutup popup: tombol tutup, tombol `Esc`, atau klik di luar area.
- Logo WhatsApp memakai warna palet (bukan hijau resmi) agar selaras dengan desain. Jika pihak pesantren menginginkan hijau resmi, ganti `--wa-bg` ke `#25D366` dan warna logo ke putih.

### 7.2 Tombol Kembali ke Atas

- Bulat 44 px, tepat di atas tombol WhatsApp (jarak 12 px). Latar mintcream, border 1px `--chocolate-deep`, panah chevron tipis `--chocolate-deep`. Hover: latar `--chocolate-deep`, panah mintcream.
- Muncul (fade dan naik 8 px) setelah scroll lebih dari 480 px, tersembunyi di atas itu.
- Klik menggulir halus ke atas (instan bila `prefers-reduced-motion`). Label aksesibel: "Kembali ke atas".
- Saat popup WhatsApp terbuka, tombol ini disembunyikan sementara agar tidak bertabrakan.

```astro
---
// src/components/FloatingActions.astro
import { site } from '../data/site.js';
const wa = (topik) =>
  `https://wa.me/${site.waNumber}?text=${encodeURIComponent(
    `Assalamu'alaikum, saya ingin bertanya tentang ${topik} dari website Pondok Pesantren Insan Kamil.`
  )}`;
const options = [
  { label: 'Pelatihan Kerja', topik: 'program pelatihan kerja' },
  { label: 'Peternakan Domba', topik: 'domba' },
  { label: 'Katering', topik: 'layanan katering' },
  { label: 'Bibit Alpukat', topik: 'bibit alpukat' },
  { label: 'Pertanyaan Umum', topik: 'pesantren' },
];
---
<div class="floating" data-floating>
  <button class="to-top" type="button" aria-label="Kembali ke atas" data-to-top>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="square" aria-hidden="true">
      <path d="M5.5 14.5L12 8l6.5 6.5" />
    </svg>
  </button>

  <div class="wa-popup" id="wa-popup" role="dialog" aria-label="Hubungi lewat WhatsApp">
    <div class="wa-popup-head">
      <p class="wa-popup-title">Hubungi Insan Kamil</p>
      <button class="wa-popup-close" type="button" aria-label="Tutup" data-wa-close>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
             stroke-width="1.5" stroke-linecap="square" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
    <p class="wa-popup-text">Pilih keperluan Anda. Kami teruskan ke WhatsApp.</p>
    <ul class="wa-popup-list">
      {options.map((o) => (
        <li><a href={wa(o.topik)} target="_blank" rel="noopener">{o.label}</a></li>
      ))}
    </ul>
  </div>

  <button class="wa-fab" type="button" aria-label="Buka pilihan WhatsApp"
          aria-expanded="false" aria-controls="wa-popup" data-wa-toggle>
    <!-- Logo WhatsApp (glyph). Ganti dengan aset resmi bila tersedia. -->
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </button>
</div>
```

```css
.floating {
  position: fixed; z-index: var(--z-floating);
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
}

/* Tombol WhatsApp */
.wa-fab {
  width: 56px; height: 56px; display: grid; place-items: center;
  background: var(--chocolate-deep); color: var(--mintcream);
  border: 0; border-radius: 50%; cursor: pointer;
  box-shadow: 0 0 0 1px var(--mintcream), var(--shadow-float);
  transition: transform var(--dur-fast) var(--ease);
}
.wa-fab:hover { transform: translateY(-2px); }
.wa-fab:focus-visible { outline: 2px solid var(--chocolate-ink); outline-offset: 3px; }

/* Popup */
.wa-popup {
  position: absolute; right: 0; bottom: calc(56px + 12px);
  width: min(320px, calc(100vw - 40px));
  background: var(--mintcream); color: var(--text);
  border: 1px solid var(--line); border-radius: var(--radius-md);
  box-shadow: var(--shadow-float); overflow: hidden;
  opacity: 0; visibility: hidden; transform: translateY(8px);
  transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease), visibility var(--dur);
}
.wa-popup.is-open { opacity: 1; visibility: visible; transform: none; }
.wa-popup-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px 14px 20px; background: var(--chocolate); color: var(--mintcream); }
.wa-popup-title { margin: 0; font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; }
.wa-popup-close { width: 32px; height: 32px; display: grid; place-items: center; background: transparent; border: 0; color: inherit; cursor: pointer; }
.wa-popup-text { margin: 0; padding: 16px 20px; font-size: 0.9375rem; color: var(--text-muted); }
.wa-popup-list { list-style: none; margin: 0; padding: 0; }
.wa-popup-list a {
  display: block; padding: 14px 20px; border-top: 1px solid var(--line);
  color: var(--text); text-decoration: none; font-weight: 500;
  transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
}
.wa-popup-list a:hover,
.wa-popup-list a:focus-visible { background: var(--mint-100); color: var(--chocolate-deep); }

/* Kembali ke atas */
.to-top {
  width: 44px; height: 44px; display: grid; place-items: center;
  background: var(--mintcream); color: var(--chocolate-deep);
  border: 1px solid var(--chocolate-deep); border-radius: 50%; cursor: pointer;
  opacity: 0; visibility: hidden; transform: translateY(8px);
  transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease),
              visibility var(--dur), background var(--dur-fast), color var(--dur-fast);
}
.to-top.is-visible { opacity: 1; visibility: visible; transform: none; }
.to-top:hover { background: var(--chocolate-deep); color: var(--mintcream); }
.to-top:focus-visible { outline: 2px solid var(--chocolate-ink); outline-offset: 3px; }
.floating.is-wa-open .to-top { opacity: 0; visibility: hidden; }

@media (prefers-reduced-motion: reduce) {
  .wa-fab, .wa-popup, .to-top { transition: none; }
}
```

```js
// src/scripts/floating.js
const root = document.querySelector('[data-floating]');

if (root) {
  const toTop = root.querySelector('[data-to-top]');
  const fab = root.querySelector('[data-wa-toggle]');
  const popup = root.querySelector('#wa-popup');
  const closeBtn = root.querySelector('[data-wa-close]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => toTop.classList.toggle('is-visible', window.scrollY > 480);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  const setOpen = (open) => {
    popup.classList.toggle('is-open', open);
    root.classList.toggle('is-wa-open', open);
    fab.setAttribute('aria-expanded', String(open));
  };

  fab.addEventListener('click', () => setOpen(!popup.classList.contains('is-open')));
  closeBtn.addEventListener('click', () => { setOpen(false); fab.focus(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', (e) => { if (!root.contains(e.target)) setOpen(false); });
}
```

Data situs (`src/data/site.js`): `waNumber` memakai format internasional tanpa tanda plus (contoh `62XXXXXXXXXXX`), diisi setelah nomor resmi pesantren dikonfirmasi.

---

## 8. Tombol dan Tautan

| Varian | Tampilan | Pemakaian |
|---|---|---|
| Primer | Latar `--chocolate-deep`, teks mintcream, bobot 600, radius 2 px, padding 14 × 28 px | CTA utama (Hubungi, Daftar, Pesan) |
| Sekunder | Transparan, border 1px `--chocolate-deep`, teks `--chocolate-deep` | Aksi pendamping (Lihat Program) |
| Di atas gelap | Transparan, border 1px mintcream, teks mintcream | Di pita CTA dan footer |
| Tautan teks | `--chocolate-deep`, bobot 600, garis bawah 1px dengan `text-underline-offset: 5px` | "Selengkapnya", "Tanya via WhatsApp" |

- Hover primer: latar menjadi `--chocolate-ink`. Hover sekunder: latar `--chocolate-deep`, teks mintcream. Transisi 180 ms.
- Tinggi minimum target sentuh 44 px. Fokus: outline 2px `--chocolate-ink` dengan offset 3 px.
- Label tombol berupa kata kerja singkat, tanpa ikon dan tanpa panah dekoratif.

---

## 9. Komponen Halaman

| Komponen | Spesifikasi |
|---|---|
| **Hero** | Tata letak terbelah: teks di kiri (eyebrow, judul display Cormorant, paragraf 2 baris, dua tombol), foto asli di kanan dengan rasio 4:5 dan bingkai garis tipis `--chocolate` bergeser 12 px di belakangnya. Latar mintcream. Mobile: teks di atas, foto di bawah |
| **Judul seksi** | Eyebrow kapital kecil, judul H2 Cormorant, garis pendek chocolate 48 × 2 px di bawah judul, paragraf pembuka maksimum 60 karakter per baris |
| **Kartu program** | Angka besar "01" sampai "04" (Cormorant 3rem, `--chocolate`), judul H3, deskripsi 2 sampai 3 baris, tautan teks "Selengkapnya". Latar mint-100, border 1px `--line`, tanpa bayangan. Hover: border berubah ke `--chocolate-deep` |
| **Kartu produk** (domba, katering, bibit) | Foto 4:3, nama (Cormorant H3), meta satu baris (jenis, bobot, ukuran), harga bold `--chocolate-deep` ("Rp 3.500.000"), label status teks kapital kecil dengan border tipis ("Tersedia" atau "Habis"), tautan teks "Tanya via WhatsApp" yang memuat nama produk pada pesan |
| **Daftar langkah** | Angka serif besar dan garis vertikal tipis, tanpa lingkaran atau ikon |
| **Akordeon FAQ** | Pertanyaan bold di tombol penuh lebar, tanda tambah dan kurang dibuat dari dua garis CSS 1,5px, garis pemisah 1px, jawaban dibuka dengan transisi tinggi 300 ms |
| **Galeri** | Grid 3 kolom desktop, 2 tablet, 1 mobile. Rasio gambar seragam 4:3. Filter kategori berupa teks (aktif bold, tanpa warna lain). Lightbox latar `--chocolate-ink` 92%, tombol tutup garis tipis, navigasi panah keyboard |
| **Testimoni** | Kutipan Cormorant miring 1.5rem, nama dan peran kecil di bawah, tanpa tanda kutip dekoratif |
| **Form** | Label di atas input, input latar putih-mint (`--mint-100`), border 1px `--line`, radius 2 px, fokus border 2px `--chocolate-deep`. Pesan galat berupa teks di bawah input berwarna `--chocolate-deep` dengan awalan kata, bukan ikon |
| **Breadcrumb** | Teks kecil dipisahkan garis miring tipis "/", halaman aktif bold |
| **Pita CTA** | Latar `--chocolate-deep`, judul mintcream, tombol "di atas gelap" |
| **Footer** | Latar `--chocolate-deep`, teks mintcream, 4 kolom (tentang singkat, program, tautan cepat, kontak), garis pemisah `--line-on-dark`, baris hak cipta di bawah. Tautan footer bold saat hover, selaras dengan navbar |

---

## 10. Blueprint Halaman (urutan seksi)

| Halaman | Urutan seksi |
|---|---|
| Beranda | Hero, pengantar profil singkat, 4 kartu program, angka capaian, keunggulan (3 butir bernomor), galeri strip, testimoni, 3 artikel terbaru, pita CTA |
| Tentang | Judul halaman, sejarah, visi dan misi, pengasuh dan pengurus, fasilitas, legalitas, pita CTA |
| Program (hub) | Judul halaman, 4 blok program berselang-seling kiri-kanan (foto dan teks), pita CTA |
| Pelatihan Kerja | Judul, jawaban singkat (40 sampai 60 kata), daftar kelas, alur pendaftaran bernomor, syarat dan fasilitas, jadwal gelombang, FAQ, CTA |
| Peternakan Domba | Judul, jawaban singkat, profil kandang, katalog dengan filter teks, layanan kurban dan aqiqah, FAQ, CTA |
| Katering | Judul, jawaban singkat, paket dan harga, contoh menu, area layanan dan waktu pemesanan, form penawaran, FAQ, CTA |
| Bibit Alpukat | Judul, jawaban singkat, katalog varietas, tabel harga partai, panduan tanam (tautan artikel), pengiriman, FAQ, CTA |
| Galeri | Judul, filter kategori, grid, lightbox |
| Blog | Judul, filter kategori, daftar kartu artikel. Artikel: lebar baca 760 px, gambar utama, daftar isi, artikel terkait |
| Kontak | Judul, kartu alamat dan jam layanan, peta, form ke WhatsApp |
| 404 | Angka "404" Cormorant besar, satu kalimat, tombol "Kembali ke Beranda" |

---

## 11. Fotografi dan Gambar

- Gunakan foto asli kegiatan. Hindari foto stok generik dan ilustrasi AI.
- Pengolahan warna hangat dan natural. Bila foto terlalu dingin, geser sedikit ke arah hangat agar selaras dengan chocolate.
- Rasio baku: hero 4:5, kartu produk dan galeri 4:3, foto lebar 16:9. Format WebP atau AVIF melalui komponen `Image` Astro, atribut `width` dan `height` wajib, `loading="lazy"` di bawah lipatan pertama.
- Teks di atas foto selalu memakai scrim `rgba(46, 26, 15, 0.55)` agar terbaca.
- Alt text deskriptif pada setiap foto bermakna. Foto dekoratif memakai `alt=""`.
- Logo: tampil jelas di atas chocolate dan mintcream. Siapkan dua versi (terang untuk navbar dan footer, gelap untuk kop surat dan OG).

---

## 12. Gerak

- Durasi 180 ms (mikro-interaksi) dan 300 ms (panel, popup). Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Hanya fade dan geser 8 sampai 12 px. Tidak ada pantulan, putaran, parallax, atau animasi berulang.
- Reveal saat scroll: fade dan naik 12 px sekali, tidak diterapkan pada konten yang disuntik async.
- `prefers-reduced-motion: reduce` mematikan semua transisi dan scroll halus.

---

## 13. Aksesibilitas dan Performa

- Kontras mengikuti tabel 3.2. Teks kecil tidak boleh memakai `--chocolate` di atas mintcream.
- Semua elemen interaktif dapat dijangkau keyboard dan memiliki indikator fokus terlihat.
- Navbar memakai `aria-current="page"`, sidebar memakai `inert` saat tertutup, popup memakai `role="dialog"` dan `aria-expanded`.
- Satu `h1` per halaman, hierarki heading berurutan, landmark `header`, `nav`, `main`, `footer`.
- Target sentuh minimal 44 × 44 px. Tombol mengambang menghormati `safe-area-inset`.
- Font dimuat dengan `display=swap`, hanya bobot yang dipakai. JavaScript per fitur dalam berkas kecil tanpa pustaka.
- Target Lighthouse mobile: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.

---

## 14. Implementasi di Astro

```
src/
├── components/
│   ├── Navbar.astro            (header, sidebar, overlay)
│   ├── Footer.astro
│   ├── FloatingActions.astro   (popup WhatsApp + kembali ke atas)
│   ├── Hero.astro
│   ├── SectionHeading.astro
│   ├── ProgramCard.astro
│   ├── ProductCard.astro
│   ├── Faq.astro
│   └── Breadcrumb.astro
├── layouts/BaseLayout.astro    (memuat Navbar, slot, Footer, FloatingActions)
├── scripts/
│   ├── nav.js
│   ├── floating.js
│   ├── filter.js
│   ├── lightbox.js
│   └── faq.js
└── styles/
    ├── tokens.css              (bagian 3.4)
    ├── base.css                (reset, tipografi, tautan, form)
    ├── components.css          (navbar, sidebar, tombol, kartu, floating)
    └── utilities.css
```

Aturan implementasi:
- `BaseLayout.astro` memuat `Navbar`, `<main><slot /></main>`, `Footer`, dan `FloatingActions`, sehingga navbar, popup WhatsApp, dan tombol kembali ke atas otomatis ada di setiap halaman.
- Skrip dimuat dari komponen yang membutuhkannya (`nav.js` di Navbar, `floating.js` di FloatingActions).
- CSS Astro bersifat scoped. Gunakan `:global()` untuk elemen yang disuntik lewat JavaScript, dan jangan pasang kelas reveal pada konten async.
- Semua warna, ukuran, dan jarak berasal dari token. Dilarang menulis nilai hex langsung di komponen.
- Ganti nomor WhatsApp, alamat, dan tautan sosial hanya di `src/data/site.js`.

Dasar `base.css` yang wajib ada:

```css
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: var(--header-h); -webkit-text-size-adjust: 100%; }
body {
  margin: 0; background: var(--mintcream); color: var(--text);
  font-family: var(--font-body); font-size: 1rem; line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 { font-family: var(--font-heading); font-weight: 600; line-height: 1.15; margin: 0 0 var(--space-4); }
img { max-width: 100%; height: auto; display: block; }
a { color: var(--chocolate-deep); }
.container { width: 100%; max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter); }
.eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--chocolate-deep); }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { animation: none !important; } }
```

---

## 15. Checklist QA Desain

- [ ] Hanya dua warna merek (chocolate dan mintcream) beserta turunannya yang tampil. Tidak ada warna ketiga.
- [ ] Tidak ada emoji dan ikon klise di halaman mana pun.
- [ ] Navbar desktop: latar chocolate, teks mintcream, hover, fokus, dan halaman aktif hanya bold, lebar tautan tidak bergeser.
- [ ] Di bawah 992 px navbar berubah menjadi hamburger dan sidebar kanan; overlay, `Esc`, fokus terkunci, dan scroll terkunci berfungsi.
- [ ] Popup WhatsApp dan tombol kembali ke atas muncul di seluruh halaman (termasuk 404) dan tidak bertabrakan satu sama lain maupun dengan footer.
- [ ] Setiap pilihan popup membuka WhatsApp dengan pesan awal yang benar.
- [ ] Tombol kembali ke atas muncul setelah scroll 480 px dan menggulir halus ke atas.
- [ ] Teks kecil tidak memakai `--chocolate` di atas mintcream. Kontras sesuai tabel 3.2.
- [ ] Tampilan rapi di lebar 360, 390, 768, 1024, dan 1440 px tanpa scroll horizontal.
- [ ] Semua foto asli, beralt text, dan memiliki `width` serta `height`.
- [ ] Uji `prefers-reduced-motion` dan navigasi hanya dengan keyboard.
