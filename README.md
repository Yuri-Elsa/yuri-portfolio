# Yuri Pakpahan — Portfolio (React + Vite)

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## 📦 Build untuk Production

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Folder

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component (assembles semua section)
│
├── data/
│   └── index.js          # ⭐ EDIT DI SINI untuk update konten portfolio
│
├── hooks/
│   ├── useScrollReveal.js  # Intersection Observer untuk animasi scroll
│   ├── useActiveNav.js     # Highlight nav link aktif saat scroll
│   └── useLightbox.jsx     # Context & state untuk modal lightbox
│
├── styles/
│   └── global.css          # CSS variables, reset, shared styles, responsive
│
└── components/
    ├── Background/         # Animated gradient blobs
    ├── Navbar/             # Desktop nav + mobile hamburger overlay
    ├── Lightbox/           # Modal foto (foto sertifikat, org)
    ├── Hero/               # Section pertama: nama, avatar, CTA
    ├── About/              # Info pribadi + paragraf bio
    ├── Skills/             # Grid kartu skill
    ├── Experience/         # Timeline pengalaman
    ├── Projects/           # Daftar proyek
    ├── Organizations/      # Kartu organisasi dengan foto
    ├── Certifications/     # Grid sertifikat & achievement
    ├── Contact/            # Ikon sosial media besar
    └── Footer/             # Footer simpel
```

---

## ✏️ Update Konten

Semua data konten ada di **`src/data/index.js`**. Edit file ini untuk:

- Ganti nama, email, nomor HP, links sosial → `personal`
- Tambah/hapus skill → `skills`
- Tambah pengalaman kerja → `experiences`
- Tambah proyek baru → `projects`
- Tambah organisasi → `organizations`
- Tambah sertifikat → `certifications`

## 📷 Menambahkan Foto

### Foto Profil (Hero)
Di `src/components/Hero/Hero.jsx`, cari komentar `{/* Ganti div ... */}` dan ganti:
```jsx
// Sebelum:
<div className="photo-placeholder">...</div>

// Sesudah:
<img src="/photos/profil.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Yuri" />
```

### Foto Sertifikat / Organisasi
Di `src/data/index.js`, ganti `image: null` atau `photo: null` dengan path foto:
```js
image: '/certs/uiux.jpg',
photo: '/photos/org1.jpg',
```

Letakkan file foto di folder `public/` agar bisa diakses langsung.
