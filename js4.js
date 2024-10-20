// Menyimpan harga produk dalam variabel
var hargaAir = 3000;
var hargaKopi = 5000;
var hargaTeh = 4000;
var hargasusu = 6000;
// Meminta pengguna memasukkan jumlah uang
var uang = prompt('Masukkan jumlah uang Anda:');

// Memeriksa apakah input adalah angka
if(isNaN(uang)) {
    alert('Input bukan angka, silakan masukkan jumlah uang dalam bentuk angka.');
} else {
    // Mengubah input uang menjadi tipe number
    uang = Number(uang);
    
    // Menampilkan pilihan produk
    var pilihan = prompt('Pilih produk:\n1. Air Mineral (Rp 3000)\n2. Kopi (Rp 5000)\n3. Teh (Rp 4000)\n4.  Susu(Rp 6000)');
    
    // Mengecek pilihan produk dan menentukan apakah uang cukup
    if(pilihan == 1) {
        if(uang >= hargaAir) {
            alert('Anda membeli Air Mineral. Kembalian: Rp ' + (uang - hargaAir));
        } else {
            alert('Uang tidak cukup untuk membeli Air Mineral.');
        }
    } else if(pilihan == 2) {
        if(uang >= hargaKopi) {
            alert('Anda membeli Kopi. Kembalian: Rp ' + (uang - hargaKopi));
        } else {
            alert('Uang tidak cukup untuk membeli Kopi.');
        }
    } else if(pilihan == 3) {
        if(uang >= hargaTeh) {
            alert('Anda membeli Teh. Kembalian: Rp ' + (uang - hargaTeh));
        } else {
            alert('Uang tidak cukup untuk membeli Teh.');
        }
    } else if(pilihan == 4) {
        if(uang >= hargasusu) {
            alert('Anda membeli susu. Kembalian: Rp ' + (uang - hargaTeh));
        } else {
            alert('Uang tidak cukup untuk membeli Susu.');
        }
    } else {
        alert('Pilihan produk tidak valid.');
    }
}