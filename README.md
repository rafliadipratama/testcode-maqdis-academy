TestCode • MAQDIS Academy
Responsive Admin Web Dashboard
Dibangun menggunakan HTML & CSS Vanilla untuk tampilan statis, serta React (Create React App) untuk pengembangan dinamis berbasis komponen.

✨ Fitur
Fitur	Keterangan
✅ Responsive Layout	Sidebar otomatis menyesuaikan posisi: vertikal (desktop), horizontal (mobile)
📊 Dashboard Cards	Menampilkan statistik seperti jumlah pengguna, pendapatan, dan kunjungan
🧩 Modular	Struktur fleksibel, dapat digunakan ulang di proyek React/Next.js/Backend

📁 Struktur Proyek
graphql
Copy
Edit
testcode-maqdis-academy/
├── public/              # File HTML statis utama
│   └── index.html
├── src/                 # Source code React
│   ├── components/      # Komponen React (ProductList, ProductDetail)
│   ├── data/            # Data produk statis (JSON/JS)
│   ├── App.jsx          # Routing utama
│   ├── index.js         # Entry point React
│   └── index.css        # Styling global
├── Web-admin-responsive/ # Versi statis (HTML & CSS)
│   ├── index.html
│   └── style.css
├── package.json
└── README.md
🚀 Cara Menjalankan Proyek
🔧 Versi Dinamis (React)
Jika Anda ingin menjalankan proyek ini menggunakan React (Create React App), ikuti langkah berikut:

bash
Copy
Edit
# 1. Install semua dependensi
npm install

# 2. Jalankan server React di mode development
npm start

# Setelah itu, buka di browser:
# http://localhost:3000
Halaman utama akan menampilkan daftar produk.

Klik produk untuk melihat halaman dinamis detail produk berdasarkan URL /product/:id.

🌐 Versi Statis (HTML & CSS)
Jika Anda hanya ingin melihat tampilan frontend saja:

Masuk ke folder Web-admin-responsive/

Buka file index.html di browser

Tanpa perlu menjalankan server lokal

📱 Catatan Responsif
Proyek ini telah dioptimalkan untuk berjalan secara responsif di perangkat mobile dan desktop. Anda bisa mengeceknya dengan mengubah ukuran layar di browser atau menggunakan fitur "Device Toolbar" di DevTools.

🛠️ Teknologi yang Digunakan
React 19

React Router DOM v7

Vanilla HTML & CSS

CRA (Create React App)

