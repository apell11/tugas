var nilai = prompt('Masukkan nilai:');

if(isNaN(nilai)) {
    alert('Input bukan angka, silakan masukkan nilai dalam bentuk angka.');
} else {
    nilai = Number(nilai);

    if(nilai >= 90) {
        alert('Grade: A');
    } else if(nilai >= 80 && nilai < 90) {
        alert('Grade: B');
    } else if(nilai >= 70 && nilai < 80) {
        alert('Grade: C');
    } else if(nilai >= 60 && nilai < 70) {
        alert('Grade: D');
    } else if(nilai >= 40 && nilai < 60) {
        alert('Grade: E');
    } else if(nilai >= 10 && nilai < 40) {
        alert('Grade: F');
    } else if(nilai < 10) {
        alert('Grade: F');
    } else {
        alert('Nilai tidak valid.');
    }
}
var angkaRahasia = Math.floor(Math.random() * 10) + 1;

var kesempatan = 3;

while(kesempatan > 0) {
    var tebakan = prompt('Tebak angka antara 1 sampai 10. Anda memiliki ' + kesempatan + ' kesempatan:');

    if(isNaN(tebakan)) {
        alert('Input bukan angka, silakan masukkan angka antara 1 sampai 10.');
    } else {
        tebakan = Number(tebakan);

        if(tebakan === angkaRahasia) {
            alert('Tebakan Anda benar!');
            break; 
        } else {
            kesempatan--; 
            if(kesempatan > 0) {
                alert('Tebakan Anda salah! Coba lagi.');
            } else {
                alert('Tebakan Anda salah! Kesempatan Anda habis. Angka yang benar adalah ' + angkaRahasia);
            }
        }
    }
}