const prompt = require("prompt-sync")();

function analisaAnakNakal(namaAnak) {
    const frekuensi = {};
    namaAnak.forEach(nama => {
        frekuensi[nama] = (frekuensi[nama] || 0) + 1;
    });

    const nilaiTertinggi = Math.max(...Object.values(frekuensi));

    const Anak = Object.entries(frekuensi)
        .filter(([_, count]) => count === nilaiTertinggi)
        .map(([nama]) => nama);

    if (Anak.length === namaAnak.length) {
        console.log("Semuanya anak baik");
    } else if (Anak.length === 1) {
        console.log(`${Anak[0]} Nackal`);
    } else {
        console.log(`${Anak.join(' dan ')} Nackal`);
    }
}

const namaAnakArray1 = ["Bagas", "Dimas", "Bagas", "Bagas",  "Indra", "Gilang", "Gilang", "Hana",  "Fajar", "Fajar"];
const namaAnakArray2 = ["Bagas", "Dimas", "Fajar", "Bagas",  "Indra", "Gilang", "Gilang", "Bagas",  "Fajar", "Fajar"];
const namaAnakArray3 = ["Aisyah" , "Bagas", "Dewi", "Dimas",  "Eka", "Fajar", "Gilang" , "Hana", "Indra",  "Jihan"]

analisaAnakNakal(namaAnakArray1);
analisaAnakNakal(namaAnakArray2);
analisaAnakNakal(namaAnakArray3);
