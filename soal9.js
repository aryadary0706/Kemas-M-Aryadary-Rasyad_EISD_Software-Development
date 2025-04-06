const prompt = require("prompt-sync")();

function analisaAnakNakal(namaAnak) {
    // Menghitung frekuensi sebutan nama
    const frekuensi = {};
    namaAnak.forEach(nama => {
        frekuensi[nama] = (frekuensi[nama] || 0) + 1;
    });

    //Mencari frekuensi tertinggi dalam objek frekuensi
    const nilaiTertinggi = Math.max(...Object.values(frekuensi));

    //Mencari nama anak yang memiliki frekuensi sebutan paling tinggi
    const Anak = Object.entries(frekuensi)
        .filter(([_, count]) => count === nilaiTertinggi)
        .map(([nama]) => nama);

    // Menentukan output
    if (Anak.length === namaAnak.length) {
        console.log("Semuanya anak baik");
    } else if (Anak.length === 1) {
        console.log(`${Anak[0]} Nackal`);
    } else {
        console.log(`${Anak.join(' dan ')} Nackal`);
    }
}

// Meminta input dari pengguna
let input = prompt("Masukkan nama anak-anak (pisahkan dengan koma): ");
//contoh: “Aisyah” , “Bagas”, “Dewi”, ‘Dimas”,  “Eka”, “Fajar”, “Gilang” , “Hana”, “Indra”,  “Jihan”
// Memecah input menjadi array dan menghapus spasi
const namaAnakArray = input.split(',').map(nama => nama.replace(/"/g, "").trim());

// Memanggil fungsi analisaAnakNakals dengan array nama anak
analisaAnakNakal(namaAnakArray);