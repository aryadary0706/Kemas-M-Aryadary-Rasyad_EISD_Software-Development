// Memanggil fungsi analisaAnakNakals dengan array nama anak
function analisaAnakNakal(namaAnak) {
    // Menghitung frekuensi sebutan nama
    const frekuensi = {};
    namaAnak.forEach(nama => {
        frekuensi[nama] = (frekuensi[nama] || 0) + 1;
    });

    // Mencari frekuensi tertinggi dalam objek frekuensi
    const nilaiTertinggi = Math.max(...Object.values(frekuensi));

    // Mencari nama anak yang memiliki frekuensi sebutan paling tinggi
    const Anak = Object.entries(frekuensi)
        .filter(([_, count]) => count === nilaiTertinggi)
        .map(([nama]) => nama);

    // Menentukan output
    if (Anak.length === namaAnak.length) {
        console.log("Semuanya anak baik");
    } else if (Anak.length === 1) {
        console.log(`${Anak[0]} Nakal`);
    } else {
        console.log(`${Anak.join(' dan ')} Nakal`);
    }
}

const namaAnakArray1 = ["Bagas", "Dimas", "Bagas", "Bagas",  "Indra", "Gilang", "Gilang", "Hana",  "Fajar", "Fajar"];
const namaAnakArray2 = ["Bagas", "Dimas", "Fajar", "Bagas",  "Indra", "Gilang", "Gilang", "Bagas",  "Fajar", "Fajar"];
const namaAnakArray3 = ["Aisyah" , "Bagas", "Dewi", "Dimas",  "Eka", "Fajar", "Gilang" , "Hana", "Indra",  "Jihan"];

// Memanggil fungsi analisaAnakNakal dengan array nama anak
console.log("Input 1");
analisaAnakNakal(namaAnakArray1);
console.log("Input 2");
analisaAnakNakal(namaAnakArray2);
console.log("Input 3");
analisaAnakNakal(namaAnakArray3);
