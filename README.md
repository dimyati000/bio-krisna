# Winter Links — Next.js

Template link-in-bio responsive dengan tema hutan musim dingin, glassmorphism, efek salju, dan tombol sosial media.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Bagian yang perlu diganti

1. Edit username, judul, deskripsi, dan URL sosial media di `app/page.tsx`.
2. Ganti `public/avatar-placeholder.svg` dengan foto sendiri, misalnya `public/profile.jpg`.
3. Setelah mengganti file foto, ubah nilai `src` di `app/page.tsx` menjadi `/profile.jpg`.
4. Warna, ukuran, animasi, dan tampilan mobile berada di `app/globals.css`.
5. Video background berada di `public/IMG_8234.mp4`; ubah `src` video di `app/background-video.tsx` jika mengganti file. Video mulai tanpa suara, dan tombol di pojok kanan atas menyalakan atau mematikan suaranya.

## Build production

```bash
npm run build
npm start
```

## Membuat repository GitHub dengan GitHub CLI

```bash
git init
git add .
git commit -m "Initial winter links website"
git branch -M main
gh repo create winter-links-nextjs --public --source=. --remote=origin --push
```

Ubah `--public` menjadi `--private` bila repository tidak ingin dibuka untuk umum.
