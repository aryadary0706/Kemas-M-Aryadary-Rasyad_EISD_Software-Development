const prompt = require("prompt-sync")();

function hitungKembalian(totalBayar, totalBelanja) {
    let kembalian = totalBayar - totalBelanja;

    if (kembalian < 0) {
        console.log("Uang yang dibayarkan tidak cukup.");
        return;
    }

    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let hasil = {};

    
    for (let i = 0; i < pecahan.length; i++) {
        if (kembalian >= pecahan[i]) {
            let jumlah = Math.floor(kembalian / pecahan[i]); //bulat ke bawah
            hasil[pecahan[i]] = jumlah;
            kembalian -= jumlah * pecahan[i];
        }
    }

    console.log("Total Bayar   :", totalBayar);
    console.log("Total Belanja :", totalBelanja);
    console.log("Rincian Kembalian:");
    for (let key in hasil) {
        console.log(`Rp${key} x ${hasil[key]}`);
    }
}

hitungKembalian(10000, 7500);
hitungKembalian(5000, 1100);
hitungKembalian(178000, 90500);
