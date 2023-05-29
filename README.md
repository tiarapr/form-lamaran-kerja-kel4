# Aplikasi Formulir Lamaran Kerja

Ini adalah repository untuk aplikasi formulir lamaran kerja yang dibangun menggunakan Vue.js. Aplikasi ini telah dikerjakan oleh Kelompok 4, yang terdiri dari anggota berikut:

- Kenzie Wistara (3122510304)
- Denny Mahendra Satria Putra (3122510406)
- Aprizandi Sani Niko (3122510411)
- Fajar Wicaksono (3122510606)
- Tiara Putri Ramadhani (3122510609)
- Natasya Surya Risky Amanda Putri (3122510615)
- Muhammad Rizal Febri Ramadani (3122510616)
- Ranu Septiana Inzy Alfaizah (3122510619)
- Moch. Sarifudin (3122510632)
- Tio yoga Mahendra (3122510642)

## Deskripsi Aplikasi

Aplikasi formulir lamaran kerja ini dibangun dengan menggunakan Vue.js dan telah mengimplementasikan otentikasi menggunakan layanan otentikasi yang disediakan oleh [Supabase](supabase.com). Pengguna dapat membuat akun, masuk, dan mengelola data lamaran kerja.

Beberapa fitur utama yang telah diimplementasikan dalam aplikasi ini adalah:

1. Otentikasi. Aplikasi ini menggunakan layanan otentikasi yang disediakan oleh supabase.com. Pengguna dapat membuat akun baru, masuk ke akun mereka, dan melakukan tindakan yang memerlukan otentikasi, seperti mengelola lamaran kerja.
2. Reusable Component. Setiap elemen Input, Select, Textarea, dan Checkbox pada formulir lamaran kerja telah diubah menjadi komponen independen. Ini memungkinkan penggunaan kembali komponen-komponen ini di berbagai bagian aplikasi dengan mudah, sehingga mempercepat pengembangan dan memastikan konsistensi antara elemen-elemen tersebut.
3. CRUD (Create, Read, Update, Delete). Aplikasi ini menerapkan operasi CRUD untuk memanajemen data lamaran kerja yang disimpan secara lokal menggunakan paket json-server. Pengguna dapat membuat lamaran baru, melihat lamaran yang ada, mengedit lamaran yang ada, dan menghapus lamaran.

### Prasyarat

Sebelum menggunakan aplikasi ini, pastikan bahwa prasyarat berikut terpenuhi:

- [Node.js](https://nodejs.org) (versi >= 12) terinstall di sistem.
- Memiliki file `.env.local` yang sudah disediakan

### Instalasi

Install semua dependensi yang diperlukan:

```sh
npm install
```

Rename file bernama `.env.local.example` menjadi `.env.local`, dan isi dengan data yang sudah disediakan:

```env
# Contoh isi dari file .env.local
VITE_API_URL=https://your-supabase-url.supabase.co
VITE_API_KEY=your-supabase-api-key
```

Jalankan fake API

```sh
npm run api
```

Biarkan fake API tetap berjalan, lalu buka jendela terminal baru dan Jalankan aplikasi secara lokal:

```sh
npm run dev
```

Terakhir. Buka `http://localhost:5173` pada browser.
