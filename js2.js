var umur = prompt('Masukkan umur:');

// Mengecek apakah input adalah angka
if(isNaN(umur)) {
    alert('Input bukan angka, silakan masukkan umur dalam bentuk angka.');
} else {
    // Mengubah input menjadi tipe number
    umur = Number(umur);

    // Menentukan kategori umur
    if(umur < 12) {
        alert('Kategori: Anak-anak');
    } else if(umur >= 13 && umur <= 17) {
        alert('Kategori: Remaja');
    } else if(umur >= 18 && umur <= 64) {
        alert('Kategori: Dewasa');
    } else if(umur >= 65) {
        alert('Kategori: Lansia');
    } else {
        alert('Umur tidak valid.');
    }
}