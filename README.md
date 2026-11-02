# GroceryX 2.0 • Modern Food E-Commerce & Smart Budget Safety Tracker

Aplikasi web modern e-commerce belanja produk makanan dan pelacak anggaran cerdas, terinspirasi dari estetika **iOS Liquid Glass** dan UX aplikasi belanja kilat (**Astro & ShopeeFood**).

---

## 🌟 Fitur Utama & Pembaruan GroceryX 2.0

### 1. Desain UI Liquid Glass & Sticky Budget Tracker
- **Liquid Glass iPhone / visionOS Style**: Desain kaca transparan modern (`backdrop-filter: blur()`, specular highlight, sudut membulat, dan drop shadow lembut).
- **Floating Liquid Glass Bottom Dock**: Navigasi bawah berbentuk kapsul melayang dengan indikator pil aktif transparan.
- **Sticky Budget Tracker**: Bar status anggaran menempel (*sticky*) di bagian atas layar sehingga selalu terpantau saat pengguna menggulir katalog atau keranjang.
- **Animasi Spring & Bounce**: Transisi interaksi tactile yang halus pada tombol, modal, dan like/pin.

### 2. Perbaikan Bug Anggaran (Overbudget Fix) & Pop-up Warning
- **Anti-Overextend & Rapi**: Tampilan nominal defisit saat melebihi anggaran (`OVER BUDGET!`) ditata rapi pada dua sisi (`Defisit: Rp 182.500`) tanpa teks terpotong atau minus yang bergeser canggung.
- **Pop-up Warning Modal**: Peringatan mencolok muncul otomatis saat batas anggaran terlampaui, dilengkapi opsi:
  - *Tinjau Keranjang & Hemat*
  - *Naikkan Batas Anggaran*
  - *Tetap Lanjut Belanja*

### 3. Etalase Produk ala Shopee & Astro (Grid, Like/Pin, Upload Foto)
- **Katalog Grid 2 Kolom**: Foto produk makanan beresolusi tinggi, harga promo, harga coret, dan komparator harga riil vs bulan lalu.
- **Fitur Like / Pin Produk (❤️)**: Tombol hati untuk menandai produk favorit. Produk yang di-pin otomatis berada di **posisi paling atas etalase** dengan badge `📌 Disukai`.
- **Form Tambah Produk Baru + Upload Foto**: Mendukung unggah foto dari file komputer/HP (preview langsung) atau menggunakan pilihan foto preset instan.
- **Quick Action Stepper**: Tambah langsung ke keranjang dengan tombol `+ Keranjang` atau kontrol kuantitas `[-] Qty [+]` langsung dari kartu katalog.

### 4. Fitur Scan Barcode Barang
- Pindai barcode kemasan makanan langsung melalui kamera webcam / smartphone.
- Dukungan unggah gambar barcode atau uji coba instan barcode makanan populer Indonesia (Indomie, Bimoli, Ultra Milk, Roma Kelapa).
- Dilengkapi efek suara *Beep* pemindai supermarket dan auto-add ke troli.

### 5. Pengaturan Akun & Analisis Kesehatan ("Sehat Meter")
- **Pusat Navigasi Akun**: Profil pengguna, ringkasan pengeluaran bulanan, dan proporsi pengeluaran per kategori.
- **Sehat Meter (Nutri-Score Belanja)**:
  - Skor kesehatan 0-100% dan Grade A-E berdasarkan proporsi makanan segar bergizi vs makanan olahan & junk food.
  - Rekomendasi nutrisi personal dari ahli gizi untuk menjaga kesehatan tubuh dan dompet.

### 6. Halaman Keranjang (Cart Page) & Kode Diskon
- **Halaman Khusus Keranjang**: Menampilkan daftar belanjaan lengkap, kontrol kuantitas stepper, dan rincian subtotal.
- **Fitur Kode Diskon (Voucher)**: Masukkan kode promo untuk potongan belanja otomatis:
  - `GROCERYHEMAT` -> Diskon 15%
  - `SEHATSEGAR` -> Potongan Rp 20.000
  - `ASTROX` -> Diskon Rp 15.000
  - `JOSHADMIN` -> Diskon 25% (Khusus Administrator)

### 7. Autentikasi Google Sign-In & Akun Resmi
- Tombol resmi **Lanjutkan dengan Google** (1-klik login dengan akun Google terverifikasi).
- Akun Administrator Resmi:
  - **Email**: `joshualim@mutiarabangsa.sch.id`
  - **Username**: `josh`
  - **Password**: `hellojosh672009`

### 8. Paket Hemat (Combo Bundle 2-3 Barang)
- Pilihan paket kombo hemat di bagian atas etalase (cth: *Paket Sarapan Ceria*, *Paket Dapur Komplit*, *Paket Nutrisi Segar*).
- 1-klik "Beli Paket" langsung menambahkan seluruh item paket dengan potongan harga khusus s/d 20%.
- Deteksi otomatis paket hemat di halaman keranjang.

---

## 🚀 Menjalankan Server Lokal (Localhost)

Aplikasi berbasis web standar (HTML5, Vanilla ES Modules, CSS3) tanpa memerlukan dependensi npm yang rumit.

Jalankan perintah berikut di terminal:

```bash
# Menggunakan Python bawaan:
py -m http.server 5173
```

Buka browser dan akses:
👉 **http://localhost:5173**
