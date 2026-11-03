# Panduan Setup Google OAuth 2.0 (Google Identity Services)
**GroceryX • Smart Grocery & Budget Tracker**

Panduan ini menjelaskan langkah demi langkah cara mengonfigurasi **Google OAuth 2.0 Client ID** resmi di **Google Cloud Console** agar fitur **Sign In with Google** dapat digunakan secara nyata (bukan simulasi) baik di lingkungan lokal (*development*) maupun di **GitHub Pages** (*production*).

---

## 1. Buka Google Cloud Console

1. Kunjungi [Google Cloud Console](https://console.cloud.google.com/).
2. Masuk menggunakan akun Google Anda.
3. Di bilah atas (*top bar*), pilih proyek Anda yang sudah ada (misal: proyek Firebase `smartgrocery-pricetracker`) atau klik **New Project** lalu beri nama `GroceryX`.

---

## 2. Konfigurasi OAuth Consent Screen (Layar Persetujuan)

Jika proyek baru atau belum pernah dikonfigurasi:
1. Masuk ke menu **APIs & Services** > **OAuth consent screen** ([Buka di sini](https://console.cloud.google.com/apis/credentials/consent)).
2. Pilih **User Type**: **External**, lalu klik **Create**.
3. Isi informasi aplikasi:
   * **App name:** `GroceryX`
   * **User support email:** Masukkan email Anda (misal: email admin/pribadi).
   * **Developer contact information:** Masukkan email Anda.
4. Klik **Save and Continue** melewati langkah *Scopes* (scope default `email`, `profile`, `openid` sudah otomatis aktif).
5. Pada langkah *Test users*, Anda dapat menambahkan email akun Google yang akan digunakan untuk pengujian (atau publikasikan aplikasi ke *Production* jika ingin semua orang dapat login).
6. Klik **Back to Dashboard**.

---

## 3. Membuat OAuth 2.0 Client ID (Web Application)

1. Masuk ke menu **APIs & Services** > **Credentials** ([Buka di sini](https://console.cloud.google.com/apis/credentials)).
2. Klik tombol **+ CREATE CREDENTIALS** di bagian atas, pilih **OAuth client ID**.
3. Pada dropdown **Application type**, pilih **Web application**.
4. Beri nama: `GroceryX Web Client`.

---

## 4. Menambahkan Authorized JavaScript Origins & Redirect URIs

Pada bagian **Authorized JavaScript origins** (Situs Asal JavaScript yang Diizinkan), klik **+ ADD URI** dan masukkan:

### A. Untuk Development (Lokal):
```
http://localhost:5173
```
*(Catatan: Tanpa garis miring `/` di bagian belakang).*

### B. Untuk Production (GitHub Pages):
```
https://joshlim67.github.io
```

Pada bagian **Authorized redirect URIs**, tambahkan:
```
http://localhost:5173
https://joshlim67.github.io/smartgrocery-pricetracker/
```

5. Klik tombol **CREATE**.
6. Google akan menampilkan jendela pop-up berisi **Client ID** Anda (berakhiran `.apps.googleusercontent.com`). Salin (*copy*) Client ID tersebut!

---

## 5. Memasang Client ID ke Website GroceryX

Anda memiliki **dua cara praktis** untuk memasang Client ID:

### Cara 1: Langsung dari Antarmuka Website (Tanpa Edit File)
1. Buka website di browser ([http://localhost:5173/](http://localhost:5173/) atau GitHub Pages).
2. Buka menu login, lalu klik tombol **"Lanjutkan dengan Google"**.
3. Jika Client ID belum terpasang, jendela modal konfigurasi akan otomatis muncul.
4. Tempelkan (*paste*) Client ID Anda ke dalam kolom input, lalu klik **Simpan & Hubungkan**.
5. Client ID otomatis tersimpan di penyimpanan browser Anda.

### Cara 2: Melalui File Konfigurasi Proyek
Buka file `google-auth-config.js` di root proyek, lalu masukkan Client ID Anda:
```javascript
export const GOOGLE_OAUTH_CONFIG = {
  clientId: "79307342744-xxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
};
```

---

## 6. Uji Coba Autentikasi Nyata

1. Klik tombol **Lanjutkan dengan Google**.
2. Google akan menampilkan prompt atau jendela popup resmi dari `accounts.google.com`.
3. Pilih akun Google Anda.
4. Setelah verifikasi berhasil, GroceryX secara otomatis:
   * Membaca nama lengkap dan email asli Anda.
   * Menampilkan foto profil/avatar akun Google Anda.
   * Memberikan status **Akun Google Resmi (OAuth 2.0)**.
   * Menyimpan session login secara aman ke database lokal & Firebase.

