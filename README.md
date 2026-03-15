# TriangleKey Cipher

Aplikasi enkripsi dan dekripsi berbasis web menggunakan algoritma **TriangleKey Cipher** - sebuah cipher substitusi yang menggunakan pola segitiga sebagai kunci untuk mengenkripsi teks.

## Deskripsi

TriangleKey Cipher adalah implementasi cipher substitusi sederhana namun efektif yang memanfaatkan pola segitiga dari karakter kunci. Setiap karakter dalam teks digeser berdasarkan nilai yang dihasilkan dari pola segitiga, memungkinkan enkripsi yang dinamis dan bergantung pada struktur kunci.

## Fitur

- **Enkripsi dan Dekripsi** - Proses dua arah yang reversibel
- **Sistem Kunci Dinamis** - Menggunakan pola segitiga dari karakter kunci
- **Dukungan ASCII Lengkap** - Bekerja dengan karakter ASCII cetakan (32-126)
- **Tanpa Dependensi** - Plain JavaScript, tidak memerlukan library eksternal

## Cara Kerja Algoritma

### Pola Segitiga (Triangle Pattern)
Pola segitiga dibangun dari kunci dengan dua fase:

1. **Fase Naik**: Ambil nilai kode ASCII setiap karakter kunci modulo 95
2. **Fase Turun**: Ulangi karakter kunci dari belakang ke depan

**Contoh**: Kunci `"ABC"`
- Fase naik: `[A, B, C]`
- Fase turun: `[B, A]`
- Pola lengkap: `[A, B, C, B, A]`

### Proses Enkripsi
Untuk setiap karakter dalam teks:
1. Konversi karakter ke "ring value" (0-94)
2. Ambil nilai shift dari pola segitiga (berulang jika teks lebih panjang dari pola)
3. Tambahkan shift ke ring value: `(ringValue + shift) % 95`
4. Konversi kembali ke karakter ASCII

### Proses Dekripsi
Operasi yang sama tetapi dengan mengurangi shift: `(ringValue - shift + 95) % 95`

## Cara Menggunakan

### 1. Buka Aplikasi
Buka file `https://ridhomul-cipher.vercel.app/` di browser.

### 2. Masukkan Kunci
- Ketik kunci enkripsi di field **Kunci (Key)**
- Contoh: `RAHASIA`, `PASSWORD123`, dll.

### 3. Masukkan Teks
- Masukkan teks yang ingin dienkripsi di field **Teks Input**
- Teks dapat berisi spasi, angka, simbol, dan karakter ASCII cetak lainnya

### 4. Enkripsi atau Dekripsi
- Klik tombol **Enkripsi** untuk mengenkripsi teks
- Klik tombol **Dekripsi** untuk mendekripsi teks
- Hasil akan muncul di field **Hasil Keluaran**

### Contoh Penggunaan
```
Kunci: KUNCI
Teks Input: Hello World
Hasil Enkripsi: 4[[PYcFe^bS
```

Dengan kunci yang sama, dekripsi hasil tersebut akan mengembalikan ke "HELLO WORLD".

## 📁 Struktur File

```
/
├── index.html      # Antarmuka pengguna (UI/UX)
├── script.js       # Logika enkripsi/dekripsi
└── README.md       # Dokumentasi proyek
```

## Teknologi

- **HTML5**
- **CSS3** 
- **JavaScript (ES6)** 

## Catatan

- Karakter di luar jangkauan ASCII cetak (32-126) akan tetap tidak berubah
- Panjang kunci tidak membatasi panjang teks yang dapat dienkripsi
- Cipher ini reversibel - teks yang sama dengan kunci yang sama akan selalu menghasilkan ciphertext yang sama

## Referensi

Algoritma ini menerapkan konsep:
- **Substitution Cipher** - Penggantian karakter berdasarkan aturan tertentu
- **Polyalphabetic Cipher** - Menggunakan multiple shift values dalam satu kunci
